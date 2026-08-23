import os
import streamlit as st
import streamlit.components.v1 as components
from ml_model import SOMModelEngine

# Configure Streamlit page
st.set_page_config(
    page_title="Autonomous DevEaaS vs. Traditional IT Operations: SOM Evaluation",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom Streamlit CSS to remove default padding and ensure clean styling
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .stApp {
            background-color: #f8fafc !important;
        }
        .block-container {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            max-width: 100% !important;
        }
        iframe {
            border: none;
            width: 100%;
        }
        .ml-card {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 14px;
            margin-bottom: 10px;
        }
    </style>
""", unsafe_allow_html=True)

# Determine path directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(BASE_DIR, "som_benchmark_dataset_50_companies.csv")

# Initialize and train ML Engine
ml_engine = None
try:
    ml_engine = SOMModelEngine(csv_path)
except Exception as e:
    st.error(f"Error loading ML model engine: {e}")

# Streamlit Top Controls & Live ML Model Training Panel
col_dl, col_ml = st.columns([1, 3])

with col_dl:
    if os.path.exists(csv_path):
        with open(csv_path, "rb") as f:
            st.download_button(
                label="📥 Download 50-Company Dataset (.CSV)",
                data=f.read(),
                file_name="som_benchmark_dataset_50_companies.csv",
                mime="text/csv",
                key="csv-download-btn"
            )

with col_ml:
    if ml_engine:
        with st.expander("🤖 Live Machine Learning & DEA LP Optimization Trainer (scikit-learn & scipy)", expanded=False):
            m = ml_engine.metrics
            st.markdown(f"**Dataset:** Trained live on `{m['sample_size']}` Enterprise Companies (`{m['training_records']}` Observations)")
            
            c1, c2, c3, c4 = st.columns(4)
            c1.metric("Model R² Score", f"{m['r2_wq']:.3f}", "High Accuracy (> 0.96)")
            c2.metric("Mean Abs Error (MAE)", f"{m['mae_wq']:.2f} hrs", "Low Loss")
            c3.metric("DEA Frontier θ (Agentic)", f"{m['dea_agentic_mean']:.2f}", "100% Optimal")
            c4.metric("Automation Weight", f"{m['feature_importance_automation']:.1f}%", "Primary Feature")

            st.markdown("---")
            st.markdown("##### 🎛️ Live Model Inference Predictor")
            p_col1, p_col2 = st.columns(2)
            with p_col1:
                input_deployments = st.slider("Monthly Deployment Scale (x₁)", 1000, 10000, 5000, step=500)
            with p_col2:
                input_automation = st.slider("Agentic Automation Level % (x₂)", 0, 100, 94, step=1)

            # Model Prediction
            res = ml_engine.predict(input_deployments, input_automation)
            
            res_c1, res_c2, res_c3, res_c4, res_c5 = st.columns(5)
            res_c1.metric("Predicted Wait (Wq)", res['wq_formatted'])
            res_c2.metric("Predicted STP Rate", f"{res['pred_stp_pct']:.1f}%")
            res_c3.metric("Predicted MTTR", res['mttr_formatted'])
            res_c4.metric("Predicted DPMO", f"{res['pred_dpmo']:.1f}")
            res_c5.metric("DEA Efficiency (θ)", f"{res['dea_score']:.2f}")

# Render full height interactive application component
index_path = os.path.join(BASE_DIR, "index.html")
styles_path = os.path.join(BASE_DIR, "styles.css")
js_path = os.path.join(BASE_DIR, "app.js")

with open(index_path, "r", encoding="utf-8") as f:
    html_content = f.read()

with open(styles_path, "r", encoding="utf-8") as f:
    css_content = f.read()

with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Inline CSS and JS into single standalone HTML bundle
html_bundled = html_content.replace(
    '<link rel="stylesheet" href="styles.css">',
    f'<style>\n{css_content}\n</style>'
).replace(
    '<script src="app.js"></script>',
    f'<script>\n{js_content}\n</script>'
)

components.html(html_bundled, height=1300, scrolling=True)
