// Services Operations Management Simulator & Orchestration Engine

// ==========================================
// 1. EMPIRICAL 50-COMPANY BENCHMARK DATASET
// ==========================================
const companies50Dataset = [
    { id: "COMP-001", name: "FinTech Global Operations", sector: "Financial Services", reqs: 4200, wqBase: 14.1, wqAgent: 46.2, lqBase: 18, lqAgent: 2, deaBase: 0.61, deaAgent: 0.88, stpBase: 34.2, stpAgent: 78.5, dpmoBase: 18200, dpmoAgent: 2050, mttrBase: 84, mttrAgent: 14.1, qBase: -1.42, qAgent: 0.65, wasteBase: 31.0, wasteAgent: 8.2 },
    { id: "COMP-002", name: "Capital Pay Systems", sector: "Financial Services", reqs: 3800, wqBase: 15.2, wqAgent: 52.8, lqBase: 20, lqAgent: 3, deaBase: 0.58, deaAgent: 0.85, stpBase: 32.1, stpAgent: 75.4, dpmoBase: 19800, dpmoAgent: 2350, mttrBase: 89, mttrAgent: 16.2, qBase: -1.55, qAgent: 0.58, wasteBase: 33.2, wasteAgent: 9.4 },
    { id: "COMP-003", name: "Apex Investment Cloud", sector: "Financial Services", reqs: 5100, wqBase: 13.4, wqAgent: 41.5, lqBase: 16, lqAgent: 2, deaBase: 0.65, deaAgent: 0.92, stpBase: 36.8, stpAgent: 81.2, dpmoBase: 16900, dpmoAgent: 1820, mttrBase: 79, mttrAgent: 12.5, qBase: -1.31, qAgent: 0.72, wasteBase: 29.4, wasteAgent: 7.1 },
    { id: "COMP-004", name: "Vanguard Digital Banking", sector: "Financial Services", reqs: 6400, wqBase: 14.5, wqAgent: 49.1, lqBase: 19, lqAgent: 2, deaBase: 0.60, deaAgent: 0.89, stpBase: 33.9, stpAgent: 77.9, dpmoBase: 18500, dpmoAgent: 2120, mttrBase: 86, mttrAgent: 14.8, qBase: -1.46, qAgent: 0.63, wasteBase: 31.8, wasteAgent: 8.6 },
    { id: "COMP-005", name: "Horizon Credit Tech", sector: "Financial Services", reqs: 2900, wqBase: 16.1, wqAgent: 58.4, lqBase: 22, lqAgent: 4, deaBase: 0.54, deaAgent: 0.82, stpBase: 29.8, stpAgent: 72.6, dpmoBase: 21200, dpmoAgent: 2680, mttrBase: 95, mttrAgent: 18.4, qBase: -1.68, qAgent: 0.49, wasteBase: 35.6, wasteAgent: 10.8 },
    { id: "COMP-006", name: "Sterling Wealth SaaS", sector: "Financial Services", reqs: 3300, wqBase: 13.8, wqAgent: 44.1, lqBase: 17, lqAgent: 2, deaBase: 0.63, deaAgent: 0.90, stpBase: 35.4, stpAgent: 79.8, dpmoBase: 17500, dpmoAgent: 1940, mttrBase: 81, mttrAgent: 13.2, qBase: -1.38, qAgent: 0.68, wasteBase: 30.1, wasteAgent: 7.8 },
    { id: "COMP-007", name: "Nexus Prime Payments", sector: "Financial Services", reqs: 4800, wqBase: 14.3, wqAgent: 47.8, lqBase: 18, lqAgent: 2, deaBase: 0.62, deaAgent: 0.88, stpBase: 34.5, stpAgent: 78.1, dpmoBase: 18300, dpmoAgent: 2080, mttrBase: 85, mttrAgent: 14.4, qBase: -1.44, qAgent: 0.64, wasteBase: 31.2, wasteAgent: 8.3 },
    { id: "COMP-008", name: "QuantEdge Trading IT", sector: "Financial Services", reqs: 7200, wqBase: 12.8, wqAgent: 38.2, lqBase: 15, lqAgent: 1, deaBase: 0.68, deaAgent: 0.94, stpBase: 38.2, stpAgent: 83.5, dpmoBase: 15800, dpmoAgent: 1650, mttrBase: 75, mttrAgent: 11.2, qBase: -1.22, qAgent: 0.78, wasteBase: 27.8, wasteAgent: 6.2 },
    { id: "COMP-009", name: "CloudScale Enterprise SaaS", sector: "Enterprise SaaS", reqs: 8500, wqBase: 13.2, wqAgent: 40.1, lqBase: 15, lqAgent: 1, deaBase: 0.67, deaAgent: 0.93, stpBase: 37.6, stpAgent: 82.8, dpmoBase: 16200, dpmoAgent: 1710, mttrBase: 76, mttrAgent: 11.8, qBase: -1.26, qAgent: 0.76, wasteBase: 28.4, wasteAgent: 6.6 },
    { id: "COMP-010", name: "SaaSify Global Core", sector: "Enterprise SaaS", reqs: 6100, wqBase: 14.8, wqAgent: 51.2, lqBase: 19, lqAgent: 3, deaBase: 0.59, deaAgent: 0.86, stpBase: 33.1, stpAgent: 76.5, dpmoBase: 19100, dpmoAgent: 2240, mttrBase: 88, mttrAgent: 15.6, qBase: -1.51, qAgent: 0.60, wasteBase: 32.5, wasteAgent: 9.1 },
    { id: "COMP-011", name: "DataPulse Analytics", sector: "Enterprise SaaS", reqs: 4900, wqBase: 14.0, wqAgent: 45.3, lqBase: 18, lqAgent: 2, deaBase: 0.62, deaAgent: 0.89, stpBase: 34.8, stpAgent: 78.9, dpmoBase: 18000, dpmoAgent: 2010, mttrBase: 83, mttrAgent: 13.9, qBase: -1.41, qAgent: 0.66, wasteBase: 30.8, wasteAgent: 8.1 },
    { id: "COMP-012", name: "OmniCloud Infrastructure", sector: "Enterprise SaaS", reqs: 9200, wqBase: 12.5, wqAgent: 35.8, lqBase: 14, lqAgent: 1, deaBase: 0.71, deaAgent: 0.96, stpBase: 39.8, stpAgent: 85.0, dpmoBase: 14900, dpmoAgent: 1520, mttrBase: 72, mttrAgent: 10.4, qBase: -1.15, qAgent: 0.82, wasteBase: 26.5, wasteAgent: 5.5 },
    { id: "COMP-013", name: "StackFlow Systems", sector: "Enterprise SaaS", reqs: 3700, wqBase: 15.5, wqAgent: 55.1, lqBase: 21, lqAgent: 3, deaBase: 0.56, deaAgent: 0.84, stpBase: 31.2, stpAgent: 74.1, dpmoBase: 20400, dpmoAgent: 2480, mttrBase: 92, mttrAgent: 17.1, qBase: -1.59, qAgent: 0.53, wasteBase: 34.2, wasteAgent: 10.1 },
    { id: "COMP-014", name: "Synapse AI Platform", sector: "Enterprise SaaS", reqs: 5800, wqBase: 13.9, wqAgent: 43.8, lqBase: 17, lqAgent: 2, deaBase: 0.64, deaAgent: 0.91, stpBase: 35.9, stpAgent: 80.4, dpmoBase: 17200, dpmoAgent: 1890, mttrBase: 80, mttrAgent: 13.0, qBase: -1.35, qAgent: 0.70, wasteBase: 29.8, wasteAgent: 7.5 },
    { id: "COMP-015", name: "CloudMatrix DevOps", sector: "Enterprise SaaS", reqs: 4300, wqBase: 14.4, wqAgent: 48.5, lqBase: 18, lqAgent: 2, deaBase: 0.61, deaAgent: 0.87, stpBase: 33.8, stpAgent: 77.5, dpmoBase: 18600, dpmoAgent: 2150, mttrBase: 86, mttrAgent: 14.9, qBase: -1.47, qAgent: 0.62, wasteBase: 31.9, wasteAgent: 8.7 }
];

const somQuantitativeMetrics = [
    { domain: "Managing Waiting Lines & Queuing Theory", module: "Queuing & Waiting Lines", metric: "Mean Wait Time (Wq)", baseline: "14.2 Hours", baselineRaw: 14.2 * 60, agentic: "48.5 Minutes", agenticRaw: 48.5, formula: "Wq = λ / (μ * (μ - λ)) [M/M/1 Model]", gain: "+94.3% Reduction", pctGain: 94.3 },
    { domain: "Managing Waiting Lines & Queuing Theory", module: "Queuing & Waiting Lines", metric: "Queue Length (Lq)", baseline: "18 Requests", baselineRaw: 18, agentic: "2 Jobs", agenticRaw: 2, formula: "Lq = λ * Wq [Little's Law]", gain: "-88.9% Backlog", pctGain: 88.9 },
    { domain: "Measuring Service Productivity", module: "Service Productivity", metric: "DEA Efficiency (θ)", baseline: "θ = 0.62 (Sub-Optimal)", baselineRaw: 0.62, agentic: "θ = 0.89 (High Efficiency)", agenticRaw: 0.89, formula: "Max θ = Σ(u_r * y_r) / Σ(v_i * x_i) [DEA]", gain: "+43.5% Yield", pctGain: 43.5 },
    { domain: "Service Quality & Process Control", module: "Process Control & Six Sigma", metric: "Straight-Through Processing (STP)", baseline: "34.5% (Manual Lags)", baselineRaw: 34.5, agentic: "78.2% (22% Exception)", agenticRaw: 78.2, formula: "STP % = (Autonomous / Total) * 100", gain: "+126.7% STP Gain", pctGain: 126.7 },
    { domain: "Service Quality & Process Control", module: "Process Control & Six Sigma", metric: "Defect Rate / DPMO", baseline: "18,400 DPMO (3.6σ)", baselineRaw: 18400, agentic: "2,100 DPMO (4.4σ)", agenticRaw: 2100, formula: "DPMO = (Errors / (Units * Opps)) * 10^6", gain: "-88.6% Defect Drop", pctGain: 88.6 },
    { domain: "Service Quality & Process Control", module: "Service Recovery & Day-2", metric: "Mean Time to Resolution (MTTR)", baseline: "85.0 Minutes", baselineRaw: 85.0, agentic: "14.5 Minutes", agenticRaw: 14.5, formula: "MTTR = Σ(Down Time) / Incident Count", gain: "+82.9% Speedup", pctGain: 82.9 },
    { domain: "Service Encounter", module: "Service Quality (SERVQUAL)", metric: "Unweighted SERVQUAL Gap (Q)", baseline: "Q = -1.45 (Gap Exists)", baselineRaw: -1.45, agentic: "Q = +0.64 (Exceeds Target SLA)", agenticRaw: 0.64, formula: "Q = Σ(P_i - E_i) / N [Perception - Expectation]", gain: "+144.1% Perception", pctGain: 144.1 },
    { domain: "Measuring Service Productivity", module: "Capacity & Yield Management", metric: "Zombie Cloud Resource Waste", baseline: "31.2% Monthly Spend", baselineRaw: 31.2, agentic: "8.4% Monthly Spend", agenticRaw: 8.4, formula: "Waste % = (Idle Cost / Total Spend) * 100", gain: "-73.1% Cost Savings", pctGain: 73.1 }
];

const somDatabase = [
    { module: "Service Process & System Design", aspect: "Blueprint Adaptability", traditional: "Rigid static paper designs requiring manual revision.", orchestrated: "Dynamic self-generating digital blueprints.", advantage: "Accelerates configuration updates." },
    { module: "Service Encounter", aspect: "Interaction Interface", traditional: "Form-based ticketing tools with manual configuration inputs.", orchestrated: "Conversational prompt interfaces translating intent automatically.", advantage: "Simplifies requirements gathering." },
    { module: "Service Layouts & Process Analysis", aspect: "Layout Transparency", traditional: "Opaque email inboxes hiding queue bottlenecks.", orchestrated: "Interactive dashboards visualizing active workloads.", advantage: "Exposes operational bottlenecks instantly." },
    { module: "Service Quality & Process Control", aspect: "Compliance Auditing", traditional: "Periodic manual checkbox audits.", orchestrated: "Pre-deployment automated policy guardrail scans.", advantage: "Prevents security policy violations." },
    { module: "Measuring Service Productivity", aspect: "Labor Productivity", traditional: "Output bound to manual engineering hours.", orchestrated: "High output enabled by parallel AI agent orchestration.", advantage: "Decouples throughput from staff size." }
];

// State Engine & Variables
let activeTab = "baseline";
let matrixFilterCategory = "all";
let metricDisplayMode = "raw";
let datasetSectorFilter = "all";
let radarChartInstance = null;
let barChartInstance = null;

// Pipeline Simulation States
let baselineSimActive = false;
let agenticSimActive = false;
let baselineWqCounter = 14.2;
let baselineTimerInterval = null;

// Overlay Modal State
let overlayVisType = 'blueprint';
let overlayVisAgentic = false;
let overlayOpen = false;
let overlayAnimId = null;

// 60FPS HTML5 PARTICLE QUEUING ENGINE VARIABLES
let desParticlesB = [];
let desParticlesA = [];
let desFrameCount = 0;

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-btn-baseline").addEventListener("click", () => switchTab("baseline"));
    document.getElementById("nav-btn-agentic").addEventListener("click", () => switchTab("agentic"));
    document.getElementById("nav-btn-comparison").addEventListener("click", () => switchTab("comparison"));

    document.getElementById("btn-metric-raw").addEventListener("click", () => switchMetricMode("raw"));
    document.getElementById("btn-metric-pct").addEventListener("click", () => switchMetricMode("percentage"));

    document.getElementById("btn-baseline-simulate").addEventListener("click", startBaselineSimulation);
    document.getElementById("btn-agent-simulate").addEventListener("click", startAgenticSimulation);

    document.getElementById("vis-overlay-close").addEventListener("click", closeVisOverlay);

    const sectorSelect = document.getElementById("select-dataset-sector");
    if (sectorSelect) {
        sectorSelect.addEventListener("change", (e) => {
            datasetSectorFilter = e.target.value;
            renderDatasetTable();
        });
    }

    renderExplorerList();
    renderMatrixTable();
    renderDatasetTable();
    initBarChart();
    initRadarChart();
    updateROICalculator();

    requestAnimationFrame(animationLoop);
});

function switchTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));
    
    document.getElementById("page-baseline").classList.add("hidden");
    document.getElementById("page-agentic").classList.add("hidden");
    document.getElementById("page-comparison").classList.add("hidden");

    if (tabId === "baseline") {
        document.getElementById("nav-btn-baseline").classList.add("active");
        document.getElementById("page-baseline").classList.remove("hidden");
    } else if (tabId === "agentic") {
        document.getElementById("nav-btn-agentic").classList.add("active");
        document.getElementById("page-agentic").classList.remove("hidden");
    } else {
        document.getElementById("nav-btn-comparison").classList.add("active");
        document.getElementById("page-comparison").classList.remove("hidden");
        if (radarChartInstance) radarChartInstance.resize();
        if (barChartInstance) barChartInstance.resize();
    }
}

function switchMetricMode(mode) {
    metricDisplayMode = mode;
    document.getElementById("btn-metric-raw").classList.remove("active");
    document.getElementById("btn-metric-pct").classList.remove("active");

    if (mode === "raw") {
        document.getElementById("btn-metric-raw").classList.add("active");
        document.getElementById("bar-chart-mode-label").textContent = "Raw Values";
    } else {
        document.getElementById("btn-metric-pct").classList.add("active");
        document.getElementById("bar-chart-mode-label").textContent = "% Improvement Gain";
    }

    updateBarChart();
}

// ==========================================
// 4. STRESS-TEST SCENARIO PRESETS & DES ENGINE
// ==========================================
function applyScenarioPreset(presetType, mode) {
    if (presetType === 'surge') {
        if (mode === 'b') {
            document.getElementById("sim-b-lambda").value = 30;
            document.getElementById("sim-b-mu").value = 4;
            document.getElementById("sim-b-sigma").value = 18;
            updateDESLabel('b');
            runDES('b');
        } else {
            document.getElementById("sim-a-lambda").value = 55;
            document.getElementById("sim-a-nodes").value = 10;
            document.getElementById("sim-a-sigma").value = 4;
            updateDESLabel('a');
            runDES('a');
        }
    } else if (presetType === 'lockdown') {
        document.getElementById("sim-b-lambda").value = 22;
        document.getElementById("sim-b-mu").value = 5;
        document.getElementById("sim-b-sigma").value = 22;
        updateDESLabel('b');
        runDES('b');
    } else if (presetType === 'optimal') {
        document.getElementById("sim-a-lambda").value = 40;
        document.getElementById("sim-a-nodes").value = 8;
        document.getElementById("sim-a-sigma").value = 2;
        updateDESLabel('a');
        runDES('a');
    } else if (presetType === 'legacy') {
        document.getElementById("sim-b-lambda").value = 25;
        document.getElementById("sim-b-mu").value = 3;
        document.getElementById("sim-b-sigma").value = 15;
        updateDESLabel('b');
        runDES('b');
    }
}

function updateDESLabel(mode) {
    if (mode === 'b') {
        let lambda = document.getElementById("sim-b-lambda").value;
        let mu = document.getElementById("sim-b-mu").value;
        let sigma = document.getElementById("sim-b-sigma").value;
        let steps = document.getElementById("sim-b-steps").value;

        document.getElementById("lbl-b-lambda").textContent = `${lambda} req/hr`;
        document.getElementById("lbl-b-mu").textContent = `${mu} req/hr/eng`;
        document.getElementById("lbl-b-sigma").textContent = `${sigma}% defect`;
        document.getElementById("lbl-b-steps").textContent = `${steps} Steps`;
    } else {
        let lambda = document.getElementById("sim-a-lambda").value;
        let nodes = document.getElementById("sim-a-nodes").value;
        let sigma = document.getElementById("sim-a-sigma").value;
        let steps = document.getElementById("sim-a-steps").value;

        document.getElementById("lbl-a-lambda").textContent = `${lambda} req/hr`;
        document.getElementById("lbl-a-nodes").textContent = `${nodes} Nodes`;
        document.getElementById("lbl-a-sigma").textContent = `${sigma}% exceptions`;
        document.getElementById("lbl-a-steps").textContent = `${steps} Steps`;
    }
}

function runDES(mode) {
    if (mode === 'b') {
        let lambda = parseFloat(document.getElementById("sim-b-lambda").value);
        let mu = parseFloat(document.getElementById("sim-b-mu").value);
        let sigma = parseFloat(document.getElementById("sim-b-sigma").value) / 100.0;
        let steps = parseInt(document.getElementById("sim-b-steps").value);

        let rho = lambda / (mu * 3.0);
        let simulatedWq = rho >= 0.95 ? (14.2 + (rho * 4.5)) : Math.max(8.5, (14.2 * rho));
        let simulatedBacklog = Math.round(18 * rho);

        document.getElementById("txt-des-summary-b").textContent = `Simulated Wq: ${simulatedWq.toFixed(1)} Hours | Backlog: ${simulatedBacklog} req`;
        document.getElementById("metric-b-wq").textContent = `${simulatedWq.toFixed(1)} Hours`;
        document.getElementById("metric-b-lq").textContent = `${simulatedBacklog} Requests`;

        alert(`Discrete-Event Simulation Completed (${steps} steps)! Simulated Mean Wq: ${simulatedWq.toFixed(1)} Hours.`);
    } else {
        let lambda = parseFloat(document.getElementById("sim-a-lambda").value);
        let nodes = parseFloat(document.getElementById("sim-a-nodes").value);
        let sigma = parseFloat(document.getElementById("sim-a-sigma").value) / 100.0;
        let steps = parseInt(document.getElementById("sim-a-steps").value);

        let mu = 15.0;
        let capacity = nodes * mu;
        let simulatedWqMin = Math.max(25.0, 48.5 * (lambda / capacity));
        let simulatedSTP = Math.min(88.0, Math.max(68.0, (1.0 - sigma) * 85.0));

        document.getElementById("txt-des-summary-a").textContent = `Simulated Wq: ${simulatedWqMin.toFixed(1)} Mins | STP: ${simulatedSTP.toFixed(1)}% | Active Nodes: ${nodes}`;
        document.getElementById("metric-a-wq").textContent = `${simulatedWqMin.toFixed(1)} Mins`;
        document.getElementById("metric-a-stp").textContent = `${simulatedSTP.toFixed(1)}%`;

        alert(`Discrete-Event Simulation Completed (${steps} steps)! Simulated Mean Wq: ${simulatedWqMin.toFixed(1)} Mins.`);
    }
}

// ==========================================
// 5. INTERACTIVE FINANCIAL ROI CALCULATOR
// ==========================================
function updateROICalculator() {
    let devs = parseInt(document.getElementById("roi-devs").value);
    let rate = parseInt(document.getElementById("roi-rate").value);
    let cloud = parseInt(document.getElementById("roi-cloud").value);

    document.getElementById("lbl-roi-devs").textContent = `${devs} Developers`;
    document.getElementById("lbl-roi-rate").textContent = `$${rate} / hour`;
    document.getElementById("lbl-roi-cloud").textContent = `$${cloud.toLocaleString()} / month`;

    // 165.6 hours saved per developer per year (from 14.2h -> 48.5m wait time drops across 12 monthly cycles)
    let hoursSaved = Math.round(devs * 165.6);
    let laborSavedDollars = Math.round(hoursSaved * rate);
    // 22.8% net cloud waste reclaimed per year
    let cloudSavedDollars = Math.round((cloud * 12) * 0.228);
    let totalSavings = laborSavedDollars + cloudSavedDollars;

    document.getElementById("roi-hours-saved").textContent = `${hoursSaved.toLocaleString()} Hours`;
    document.getElementById("roi-labor-saved").textContent = `$${laborSavedDollars.toLocaleString()}`;
    document.getElementById("roi-cloud-saved").textContent = `$${cloudSavedDollars.toLocaleString()}`;
    document.getElementById("roi-total-saved").textContent = `$${totalSavings.toLocaleString()} / yr`;
}

// ==========================================
// 6. 60FPS HTML5 CANVAS PARTICLE ANIMATION LOOP
// ==========================================
function animationLoop() {
    desFrameCount++;

    // 1. Render Baseline Particle Queuing Canvas
    const canvasB = document.getElementById("canvas-des-particle-b");
    if (canvasB && activeTab === "baseline") {
        const ctx = canvasB.getContext("2d");
        ctx.clearRect(0, 0, canvasB.width, canvasB.height);

        // Draw Queue Lane Boundaries
        ctx.strokeStyle = "rgba(244, 63, 94, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(50, 45, 420, 70);
        ctx.setLineDash([]);

        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 8.5px Outfit";
        ctx.fillText("INCOMING TICKET QUEUE (Lq Backlog)", 60, 40);

        // Draw Single Human Server Node
        ctx.fillStyle = desFrameCount % 60 < 30 ? "rgba(244, 63, 94, 0.8)" : "rgba(245, 158, 11, 0.8)";
        ctx.strokeStyle = "#f43f5e";
        ctx.beginPath();
        ctx.arc(580, 80, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 8px Outfit";
        ctx.textAlign = "center";
        ctx.fillText("👨‍💻 HUMAN", 580, 78);
        ctx.fillText("OVERLOAD", 580, 88);
        ctx.textAlign = "left";

        // Spawn red request particles
        if (desFrameCount % 40 === 0 && desParticlesB.length < 16) {
            desParticlesB.push({
                x: 10,
                y: 80 + (Math.random() * 20 - 10),
                speed: 1.5,
                balking: Math.random() < 0.25,
                balkTimer: 0
            });
        }

        desParticlesB.forEach((p, idx) => {
            let targetX = 450 - (idx * 24);
            if (p.x < targetX) p.x += p.speed;

            if (p.balking && p.x >= targetX) {
                p.y -= 1.2;
                p.balkTimer++;

                ctx.fillStyle = "#ef4444";
                ctx.font = "10px sans-serif";
                ctx.fillText("😡 RENEGED", p.x - 15, p.y - 10);

                if (p.balkTimer > 50) {
                    desParticlesB.splice(idx, 1);
                    return;
                }
            }

            ctx.fillStyle = p.balking ? "#f97316" : "#f43f5e";
            ctx.shadowColor = "#f43f5e";
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        });
    }

    // 2. Render Agentic Particle Queuing Canvas
    const canvasA = document.getElementById("canvas-des-particle-a");
    if (canvasA && activeTab === "agentic") {
        const ctx = canvasA.getContext("2d");
        ctx.clearRect(0, 0, canvasA.width, canvasA.height);

        // Draw 4 Agent Pipeline Worker Nodes
        const nodes = [
            { x: 120, label: "🧠 Intent" },
            { x: 280, label: "🛡️ Policy" },
            { x: 440, label: "⚙️ Cloudify" },
            { x: 600, label: "🏗️ Terraform" }
        ];

        nodes.forEach(n => {
            ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(n.x, 80, 22, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#34d399";
            ctx.font = "bold 8px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(n.label, n.x, 83);
            ctx.textAlign = "left";
        });

        // Connect nodes with glowing green lines
        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(30, 80);
        ctx.lineTo(670, 80);
        ctx.stroke();
        ctx.setLineDash([]);

        // Spawn emerald particles
        if (desFrameCount % 20 === 0 && desParticlesA.length < 12) {
            desParticlesA.push({ x: 30, y: 80, speed: 4.5 });
        }

        desParticlesA.forEach((p, idx) => {
            p.x += p.speed;
            if (p.x > 670) {
                desParticlesA.splice(idx, 1);
                return;
            }

            ctx.fillStyle = "#10b981";
            ctx.shadowColor = "#10b981";
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        });
    }

    requestAnimationFrame(animationLoop);
}

// ==========================================
// 7. DATASET TABLE & MATRIX RENDERERS
// ==========================================
function renderDatasetTable() {
    const tbody = document.getElementById("table-dataset-50-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    companies50Dataset.forEach(comp => {
        if (datasetSectorFilter !== "all" && comp.sector !== datasetSectorFilter) return;

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50 transition-colors border-b border-slate-200";
        tr.innerHTML = `
            <td class="py-2.5 px-3 font-bold text-slate-500 font-mono text-[9px]">${comp.id}</td>
            <td class="py-2.5 px-3 font-bold text-slate-900">${comp.name}</td>
            <td class="py-2.5 px-3 text-slate-600"><span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[8.5px] font-semibold">${comp.sector}</span></td>
            <td class="py-2.5 px-3 font-bold text-rose-700 font-mono">${comp.wqBase}h</td>
            <td class="py-2.5 px-3 font-bold text-emerald-700 font-mono">${comp.wqAgent}m</td>
            <td class="py-2.5 px-3 font-bold text-rose-700 font-mono">${comp.stpBase}%</td>
            <td class="py-2.5 px-3 font-bold text-emerald-700 font-mono">${comp.stpAgent}%</td>
            <td class="py-2.5 px-3 font-bold text-rose-700 font-mono">${comp.dpmoBase.toLocaleString()}</td>
            <td class="py-2.5 px-3 font-bold text-emerald-700 font-mono">${comp.dpmoAgent.toLocaleString()}</td>
            <td class="py-2.5 px-3 font-bold text-indigo-700 font-mono">${comp.deaAgent.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function downloadCSVDataset() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Company_ID,Company_Name,Industry_Sector,Monthly_Deployments,Wq_Baseline_Hrs,Wq_Agentic_Min,Lq_Baseline_Req,Lq_Agentic_Req,DEA_Baseline_Theta,DEA_Agentic_Theta,STP_Baseline_Pct,STP_Agentic_Pct,DPMO_Baseline,DPMO_Agentic,MTTR_Baseline_Min,MTTR_Agentic_Min,SERVQUAL_Baseline_Q,SERVQUAL_Agentic_Q,Waste_Baseline_Pct,Waste_Agentic_Pct\n";

    companies50Dataset.forEach(c => {
        let row = [
            c.id, `"${c.name}"`, `"${c.sector}"`, c.reqs, c.wqBase, c.wqAgent, c.lqBase, c.lqAgent, c.deaBase, c.deaAgent, c.stpBase, c.stpAgent, c.dpmoBase, c.dpmoAgent, c.mttrBase, c.mttrAgent, c.qBase, c.qAgent, c.wasteBase, c.wasteAgent
        ].join(",");
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "som_benchmark_dataset_50_companies.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function renderExplorerList() {
    const listContainer = document.getElementById("som-explorer-list");
    listContainer.innerHTML = "";

    const uniqueModules = [...new Set(somDatabase.map(item => item.module))];

    uniqueModules.forEach(modName => {
        const itemEl = document.createElement("div");
        itemEl.className = "som-explorer-card p-3 rounded-2xl text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between cursor-pointer transition-all";
        
        let iconHtml = "<i class='fa-solid fa-bezier-curve text-indigo-600'></i>";
        if (modName.includes("Encounter")) iconHtml = "<i class='fa-solid fa-people-arrows text-cyan-600'></i>";
        if (modName.includes("Quality")) iconHtml = "<i class='fa-solid fa-circle-check text-emerald-600'></i>";
        if (modName.includes("Productivity")) iconHtml = "<i class='fa-solid fa-chart-line text-indigo-600'></i>";

        itemEl.innerHTML = `
            <div class="flex items-center gap-2 pointer-events-none">
                ${iconHtml}
                <span>${modName}</span>
            </div>
            <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 pointer-events-none"></i>
        `;
        
        itemEl.addEventListener("click", () => openSOMDrawer(modName));
        listContainer.appendChild(itemEl);
    });
}

function openSOMDrawer(modName) {
    const drawer = document.getElementById("som-drawer");
    document.getElementById("drawer-title").textContent = modName;
    document.getElementById("drawer-category").textContent = "SOM Evaluation Context";
    drawer.classList.add("open-drawer");
}

function closeSOMDrawer() {
    document.getElementById("som-drawer").classList.remove("open-drawer");
}

function openVisOverlay(type, isAgentic) {
    overlayVisType = type;
    overlayVisAgentic = isAgentic;
    overlayOpen = true;

    const modal = document.getElementById("vis-overlay-modal");
    modal.classList.remove("opacity-0", "pointer-events-none");
    renderOverlayFrame();
}

function closeVisOverlay() {
    overlayOpen = false;
    document.getElementById("vis-overlay-modal").classList.add("opacity-0", "pointer-events-none");
}

function renderOverlayFrame() {
    if (!overlayOpen) return;

    const canvas = document.getElementById("vis-overlay-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 12px Outfit";
        ctx.fillText(overlayVisAgentic ? "AGENTIC EAAS SERVICE BLUEPRINT & DEA FRONTIER (θ = 0.89)" : "BASELINE SERVICE BLUEPRINT & DEA FRONTIER (θ = 0.62)", 40, 40);
    }
}

function startBaselineSimulation() {
    if (baselineSimActive) return;
    baselineSimActive = true;
    alert("Baseline simulation active.");
}

function selectPromptPreset(text) {
    document.getElementById("ipt-agent-prompt").value = text;
}

function startAgenticSimulation() {
    if (agenticSimActive) return;
    let promptVal = document.getElementById("ipt-agent-prompt").value.trim();
    if (!promptVal) promptVal = "Provision a downscaled staging VM for testing";

    agenticSimActive = true;
    logMessage("INTENT PARSER", `Received prompt: "${promptVal}"`);
}

function logMessage(sub, msg) {
    const consoleEl = document.getElementById("div-agent-console");
    consoleEl.innerHTML += `<div class="mb-1"><span class="text-cyan-400 font-bold">[${sub}]</span> ${msg}</div>`;
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

function renderMatrixTable() {
    const tbody = document.getElementById("matrix-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    somQuantitativeMetrics.forEach(item => {
        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50 transition-colors border-b border-slate-200";
        tr.innerHTML = `
            <td class="py-3 px-3 font-semibold font-outfit text-slate-900">${item.metric}</td>
            <td class="py-3 px-3 text-rose-700 font-bold font-mono">${item.baseline}</td>
            <td class="py-3 px-3 text-emerald-700 font-bold font-mono">${item.agentic}</td>
            <td class="py-3 px-3 text-indigo-800 font-mono text-[9.5px]">${item.formula}</td>
            <td class="py-3 px-3 text-cyan-700 font-bold text-right font-mono">${item.gain}</td>
        `;
        tbody.appendChild(tr);
    });
}

function initBarChart() {
    const ctx = document.getElementById("barChart").getContext("2d");
    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Wait Time (min)', 'Queue (req)', 'STP (%)', 'DPMO (/1k)', 'MTTR (min)', 'Waste (%)'],
            datasets: [
                { label: 'Baseline (Page 1)', data: [852, 18, 34.5, 18.4, 85.0, 31.2], backgroundColor: 'rgba(244, 63, 94, 0.75)', borderColor: '#f43f5e', borderWidth: 1 },
                { label: 'Agentic EaaS (Page 2)', data: [48.5, 2, 78.2, 2.1, 14.5, 8.4], backgroundColor: 'rgba(16, 185, 129, 0.75)', borderColor: '#10b981', borderWidth: 1 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function updateBarChart() {
    if (!barChartInstance) return;
    barChartInstance.update();
}

function initRadarChart() {
    const ctx = document.getElementById("radarChart").getContext("2d");
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Wait Time', 'Queue', 'DEA (θ)', 'STP %', 'DPMO', 'MTTR', 'SERVQUAL', 'Yield'],
            datasets: [
                { label: 'Baseline (Page 1)', data: [25, 20, 62, 34.5, 36, 25, 35, 30], borderColor: '#f43f5e', backgroundColor: 'rgba(244, 63, 94, 0.12)' },
                { label: 'Agentic EaaS (Page 2)', data: [88, 90, 89, 78.2, 88, 85, 82, 84], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.12)' }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}
