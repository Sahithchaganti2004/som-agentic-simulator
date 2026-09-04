import os
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error

class SOMModelEngine:
    def __init__(self, csv_path):
        self.csv_path = csv_path
        self.df = None
        self.rf_wq = None
        self.rf_stp = None
        self.rf_mttr = None
        self.rf_dpmo = None
        self.metrics = {}
        self.load_and_train()

    def load_and_train(self):
        if not os.path.exists(self.csv_path):
            raise FileNotFoundError(f"Dataset not found at {self.csv_path}")

        self.df = pd.read_csv(self.csv_path)

        # 1. Dual-mode training dataset (Baseline vs Agentic records)
        baseline_df = pd.DataFrame({
            'Deployments': self.df['Monthly_Deployments'],
            'Automation_Level': self.df['STP_Baseline_Pct'],
            'Wq_Hours': self.df['Wq_Baseline_Hrs'],
            'STP_Pct': self.df['STP_Baseline_Pct'],
            'MTTR_Min': self.df['MTTR_Baseline_Min'],
            'DPMO': self.df['DPMO_Baseline'],
            'DEA_Theta': self.df['DEA_Baseline_Theta']
        })

        agentic_df = pd.DataFrame({
            'Deployments': self.df['Monthly_Deployments'],
            'Automation_Level': self.df['STP_Agentic_Pct'],
            'Wq_Hours': self.df['Wq_Agentic_Min'] / 60.0,
            'STP_Pct': self.df['STP_Agentic_Pct'],
            'MTTR_Min': self.df['MTTR_Agentic_Min'],
            'DPMO': self.df['DPMO_Agentic'],
            'DEA_Theta': self.df['DEA_Agentic_Theta']
        })

        train_df = pd.concat([baseline_df, agentic_df], ignore_index=True)
        X = train_df[['Deployments', 'Automation_Level']]

        # Fit Random Forest Models
        self.rf_wq = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
        self.rf_wq.fit(X, train_df['Wq_Hours'])
        pred_wq = self.rf_wq.predict(X)
        r2_wq = r2_score(train_df['Wq_Hours'], pred_wq)

        self.rf_stp = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
        self.rf_stp.fit(X, train_df['STP_Pct'])

        self.rf_mttr = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
        self.rf_mttr.fit(X, train_df['MTTR_Min'])

        self.rf_dpmo = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
        self.rf_dpmo.fit(X, train_df['DPMO'])

        # Compute realistic summary metrics
        dea_baseline_mean = self.df['DEA_Baseline_Theta'].mean()
        dea_agentic_mean = self.df['DEA_Agentic_Theta'].mean()

        self.metrics = {
            'sample_size': len(self.df),
            'training_records': len(train_df),
            'r2_wq': r2_wq,
            'mae_wq': mean_absolute_error(train_df['Wq_Hours'], pred_wq),
            'feature_importance_automation': self.rf_wq.feature_importances_[1] * 100,
            'feature_importance_deployments': self.rf_wq.feature_importances_[0] * 100,
            'dea_baseline_mean': dea_baseline_mean,
            'dea_agentic_mean': dea_agentic_mean
        }

    def predict(self, monthly_deployments, automation_pct):
        input_data = pd.DataFrame({
            'Deployments': [monthly_deployments],
            'Automation_Level': [automation_pct]
        })

        pred_wq_hrs = self.rf_wq.predict(input_data)[0]
        pred_stp = self.rf_stp.predict(input_data)[0]
        pred_mttr = self.rf_mttr.predict(input_data)[0]
        pred_dpmo = self.rf_dpmo.predict(input_data)[0]

        wq_formatted = f"{pred_wq_hrs:.1f} Hours" if pred_wq_hrs >= 1.0 else f"{pred_wq_hrs * 60:.1f} Mins"
        mttr_formatted = f"{pred_mttr:.1f} Mins"

        return {
            'pred_wq_hrs': pred_wq_hrs,
            'wq_formatted': wq_formatted,
            'pred_stp_pct': min(100.0, max(0.0, pred_stp)),
            'pred_mttr_min': pred_mttr,
            'mttr_formatted': mttr_formatted,
            'pred_dpmo': max(0.0, pred_dpmo),
            'dea_score': max(0.55, min(0.96, 0.55 + (automation_pct / 100.0) * 0.38))
        }
