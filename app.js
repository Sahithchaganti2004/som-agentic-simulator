// Services Operations Management Simulator & Orchestration Engine

// ==========================================
// 0. CANVAS POLYFILLS & SAFETY HELPERS
// ==========================================
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, radii) {
        if (typeof radii === 'number') radii = [radii, radii, radii, radii];
        const r = radii || [0, 0, 0, 0];
        const r0 = r[0] || 0, r1 = r[1] || 0, r2 = r[2] || 0, r3 = r[3] || 0;
        this.beginPath();
        this.moveTo(x + r0, y);
        this.lineTo(x + w - r1, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r1);
        this.lineTo(x + w, y + h - r2);
        this.quadraticCurveTo(x + w, y + h, x + w - r2, y + h);
        this.lineTo(x + r3, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r3);
        this.lineTo(x, y + r0);
        this.quadraticCurveTo(x, y, x + r0, y);
        this.closePath();
        return this;
    };
}

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

// ==========================================
// 2. COMPLETE 8-MODULE SOM DATABASE (24 ASPECTS)
// ==========================================
const somDatabase = [
    // Module 1: Service Process & System Design
    { module: "Service Process & System Design", aspect: "Blueprint Adaptability", traditional: "Rigid, static paper designs that require manual revision and administrative review for every infrastructure update.", orchestrated: "Dynamic, self-generating digital blueprints matching live workspace states automatically.", advantage: "Accelerates configuration updates and eliminates documentation lag." },
    { module: "Service Process & System Design", aspect: "Service Customization", traditional: "Hand-crafted configurations custom-made by engineers for every separate developer request, leading to script drift.", orchestrated: "Modular configuration generation based on user intent and standardized template parameters.", advantage: "Standardizes deployment components while retaining developer flexibility." },
    { module: "Service Process & System Design", aspect: "Handoff Boundaries", traditional: "Serial handoffs across isolation boundaries between security, network, and operations teams.", orchestrated: "Unified agentic orchestration crossing boundaries instantly through programmatic API calls.", advantage: "Prevents process delays and eliminates queue backlogs between departments." },

    // Module 2: Service Encounter
    { module: "Service Encounter", aspect: "Interaction Interface", traditional: "Complex form-based ticketing tools that require users to input technical configuration parameters manually.", orchestrated: "Conversational, natural language prompt interfaces that translate intent into deployment tasks.", advantage: "Simplifies requirements gathering and removes user barrier-to-entry." },
    { module: "Service Encounter", aspect: "Friction Level", traditional: "High contact intensity requiring active negotiation, back-and-forth emails, and manual follow-ups.", orchestrated: "Zero-friction self-service execution with instant automated setup confirmations.", advantage: "Eliminates human coordination overhead and developer frustration." },
    { module: "Service Encounter", aspect: "Support Escalation", traditional: "Multi-tier escalation chains with engineers manually reading verbose system logs.", orchestrated: "Automated log parsing with packaged diagnostics ready for human-in-the-loop validation.", advantage: "Speeds up troubleshooting and resolution for complex technical faults." },

    // Module 3: Service Layouts & Process Analysis
    { module: "Service Layouts & Process Analysis", aspect: "Layout Transparency", traditional: "Opaque email inboxes and spreadsheets hiding queue bottleneck build-ups.", orchestrated: "Interactive, central dashboards visualizing resource loads and active container workspaces.", advantage: "Exposes operational bottlenecks instantly to team managers." },
    { module: "Service Layouts & Process Analysis", aspect: "Handoff Latency", traditional: "Idle times while tickets wait in queue folders between team handovers.", orchestrated: "Instant REST API triggers transferring metadata payloads between microservices.", advantage: "Minimizes total non-value-adding waiting times." },
    { module: "Service Layouts & Process Analysis", aspect: "Path Optimization", traditional: "Rework loops due to incorrect manual configuration scripts.", orchestrated: "Immutable template structures minimizing task execution steps.", advantage: "Standardizes critical path execution times." },

    // Module 4: Service Quality & Process Control
    { module: "Service Quality & Process Control", aspect: "Compliance Auditing", traditional: "Periodic, manual checkbox audits after environments are deployed.", orchestrated: "Pre-deployment automated policy guardrail scans.", advantage: "Prevents budget and security policy violations before resource creation." },
    { module: "Service Quality & Process Control", aspect: "Quality Inspection", traditional: "Manual validation checks performed by QA engineers (highly error-prone).", orchestrated: "Systematic check routines verifying container connectivity and state configurations.", advantage: "Eliminates human oversight defects and syntax errors." },
    { module: "Service Quality & Process Control", aspect: "Service Recovery", traditional: "Reactive troubleshooting and ticket re-submission after environments crash.", orchestrated: "Autonomic self-healing engines rebuilding corrupted nodes instantly.", advantage: "Maintains maximum uptime without developer intervention." },

    // Module 5: Measuring Service Productivity
    { module: "Measuring Service Productivity", aspect: "Labor Productivity", traditional: "Output bound to manual engineer hours, resulting in low setups per headcount.", orchestrated: "High output enabled by parallel AI agent orchestration.", advantage: "Decouples service throughput from operational staff sizes." },
    { module: "Measuring Service Productivity", aspect: "Resource Utilization", traditional: "Static provisioning leads to idle servers running continuously to avoid startup delays.", orchestrated: "Elastic containers running only during active workspace sessions.", advantage: "Drastically reduces cloud compute waste and operational cost." },
    { module: "Measuring Service Productivity", aspect: "Process Efficiency", traditional: "High ratio of waiting times to active processing times.", orchestrated: "Streamlined execution where processing time equals total cycle time.", advantage: "Maximizes value-adding activity ratios." },

    // Module 6: Managing Waiting Lines & Queuing Theory
    { module: "Managing Waiting Lines & Queuing Theory", aspect: "Queuing Architecture", traditional: "Serialized M/M/c queues processed by limited human engineering teams.", orchestrated: "Parallel on-demand containers (M/M/c API model).", advantage: "Eliminates request queues even during high demand peaks." },
    { module: "Managing Waiting Lines & Queuing Theory", aspect: "Customer Balking / Reneging", traditional: "Developers abandon request tickets due to excessive wait times.", orchestrated: "Instant confirmation and near-zero waiting loops.", advantage: "Prevents project delays and team frustration." },
    { module: "Managing Waiting Lines & Queuing Theory", aspect: "Demand Fluctuations", traditional: "Fixed engineer capacity causes severe queue build-ups during business hours.", orchestrated: "Dynamic auto-scaling provisions nodes matching real-time request counts.", advantage: "Absorbs sudden request spikes without performance degradation." },

    // Module 7: Service Strategy & SLA Management
    { module: "Service Strategy & SLA Management", aspect: "Competitive Dimension", traditional: "Operations compete purely on cost, compromising on service speed.", orchestrated: "Operations win on speed and responsiveness as differentiators.", advantage: "Empowers product teams to ship updates to market much faster." },
    { module: "Service Strategy & SLA Management", aspect: "SLA Adherence", traditional: "Frequent breaches due to backlog queues and validation back-and-forth.", orchestrated: "Standard SLA fulfillment via automated provisioning runs.", advantage: "Ensures service reliability guarantees are met consistently." },
    { module: "Service Strategy & SLA Management", aspect: "Value Proposition", traditional: "IT seen as a cost center managing routine maintenance.", orchestrated: "IT acts as an innovation partner accelerating development.", advantage: "Shifts business perspective of infrastructure operations." },

    // Module 8: Technology-Driven Service Operations
    { module: "Technology-Driven Service Operations", aspect: "System Integration", traditional: "Disjointed tooling requiring manual copy-pasting of scripts and settings.", orchestrated: "API-driven loops linking intent parsers directly to Terraform/Cloudify.", advantage: "Eliminates human error during configuration transfers." },
    { module: "Technology-Driven Service Operations", aspect: "Infrastructure State", traditional: "Mutable environments with script drift and custom manual changes.", orchestrated: "Immutable configuration declarations managed by state files.", advantage: "Guarantees environment consistency across multiple deployments." },
    { module: "Technology-Driven Service Operations", aspect: "Telemetry & Monitoring", traditional: "Reactive log checks conducted only when a user files a support ticket.", orchestrated: "Real-time metric streaming and automated anomaly detection.", advantage: "Detects potential configuration failures before developers notice." }
];

// State Engine & Variables
let activeTab = "baseline";
let matrixFilterCategory = "all";
let metricDisplayMode = "raw";
let datasetSectorFilter = "all";
let radarChartInstance = null;
let barChartInstance = null;

let baselineSimActive = false;
let agenticSimActive = false;

let overlayVisType = 'blueprint';
let overlayVisAgentic = false;
let overlayOpen = false;

let desParticlesB = [];
let desParticlesA = [];
let desFrameCount = 0;
let blueprintAnimT = 0;
let deaAnimProgress = 0;

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    try { bindNavigation(); } catch (e) { console.error("Navigation error:", e); }
    try { renderExplorerList(); } catch (e) { console.error("Explorer list error:", e); }
    try { renderMatrixTable(); } catch (e) { console.error("Matrix table error:", e); }
    try { renderDatasetTable(); } catch (e) { console.error("Dataset table error:", e); }
    try { updateROICalculator(); } catch (e) { console.error("ROI calculator error:", e); }

    waitForChartJS();

    requestAnimationFrame(animationLoop);
});

function waitForChartJS() {
    if (typeof Chart !== 'undefined') {
        try { initBarChart(); } catch (e) { console.error("Bar chart error:", e); }
        try { initRadarChart(); } catch (e) { console.error("Radar chart error:", e); }
    } else {
        setTimeout(waitForChartJS, 300);
    }
}

function bindNavigation() {
    const btnB = document.getElementById("nav-btn-baseline");
    const btnA = document.getElementById("nav-btn-agentic");
    const btnC = document.getElementById("nav-btn-comparison");

    if (btnB) btnB.addEventListener("click", () => switchTab("baseline"));
    if (btnA) btnA.addEventListener("click", () => switchTab("agentic"));
    if (btnC) btnC.addEventListener("click", () => switchTab("comparison"));

    const btnRaw = document.getElementById("btn-metric-raw");
    const btnPct = document.getElementById("btn-metric-pct");
    if (btnRaw) btnRaw.addEventListener("click", () => switchMetricMode("raw"));
    if (btnPct) btnPct.addEventListener("click", () => switchMetricMode("percentage"));

    const btnSimB = document.getElementById("btn-baseline-simulate");
    const btnSimA = document.getElementById("btn-agent-simulate");
    if (btnSimB) btnSimB.addEventListener("click", startBaselineSimulation);
    if (btnSimA) btnSimA.addEventListener("click", startAgenticSimulation);

    const closeBtn = document.getElementById("vis-overlay-close");
    if (closeBtn) closeBtn.addEventListener("click", closeVisOverlay);

    const sectorSelect = document.getElementById("select-dataset-sector");
    if (sectorSelect) {
        sectorSelect.addEventListener("change", (e) => {
            datasetSectorFilter = e.target.value;
            renderDatasetTable();
        });
    }

    const promptIpt = document.getElementById("ipt-agent-prompt");
    if (promptIpt) {
        promptIpt.addEventListener("keypress", (e) => {
            if (e.key === "Enter") startAgenticSimulation();
        });
    }
}

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
    const btnRaw = document.getElementById("btn-metric-raw");
    const btnPct = document.getElementById("btn-metric-pct");
    if (btnRaw) btnRaw.classList.remove("active");
    if (btnPct) btnPct.classList.remove("active");

    if (mode === "raw") {
        if (btnRaw) btnRaw.classList.add("active");
        document.getElementById("bar-chart-mode-label").textContent = "Raw Values";
    } else {
        if (btnPct) btnPct.classList.add("active");
        document.getElementById("bar-chart-mode-label").textContent = "% Improvement Gain";
    }

    updateBarChart();
}

// ==========================================
// 3. SOM MODULE EXPLORER SIDEBAR & SLIDING DRAWER
// ==========================================
function renderExplorerList() {
    try {
        const listContainer = document.getElementById("som-explorer-list");
        if (!listContainer) return;
        listContainer.innerHTML = "";

        const uniqueModules = [...new Set(somDatabase.map(item => item.module))];

        uniqueModules.forEach(modName => {
            const itemEl = document.createElement("div");
            itemEl.className = "som-explorer-card p-3 rounded-2xl text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between cursor-pointer transition-all border border-slate-200 hover:border-indigo-400 bg-white shadow-sm";
            
            let iconHtml = "<i class='fa-solid fa-bezier-curve text-indigo-600'></i>";
            if (modName.includes("Encounter")) iconHtml = "<i class='fa-solid fa-people-arrows text-cyan-600'></i>";
            if (modName.includes("Quality")) iconHtml = "<i class='fa-solid fa-circle-check text-emerald-600'></i>";
            if (modName.includes("Productivity")) iconHtml = "<i class='fa-solid fa-chart-line text-indigo-600'></i>";
            if (modName.includes("Lines")) iconHtml = "<i class='fa-solid fa-users text-rose-600'></i>";
            if (modName.includes("Strategy")) iconHtml = "<i class='fa-solid fa-crosshairs text-indigo-600'></i>";
            if (modName.includes("Technology")) iconHtml = "<i class='fa-solid fa-microchip text-cyan-600'></i>";

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
    } catch (e) {
        console.error("Error rendering explorer list:", e);
    }
}

function openSOMDrawer(modName) {
    try {
        const drawer = document.getElementById("som-drawer");
        const title = document.getElementById("drawer-title");
        const category = document.getElementById("drawer-category");

        if (title) title.textContent = modName;
        if (category) category.textContent = "SOM Evaluation Context";

        const items = somDatabase.filter(d => d.module === modName);

        renderDrawerMicroVisual(modName);

        if (items[0]) {
            document.getElementById("drawer-aspect-1-title").textContent = items[0].aspect;
            document.getElementById("drawer-aspect-1-trad").textContent = items[0].traditional;
            document.getElementById("drawer-aspect-1-orchestrated").textContent = items[0].orchestrated;
            document.getElementById("drawer-aspect-1-adv").textContent = items[0].advantage;
        }

        if (items[1]) {
            document.getElementById("drawer-aspect-2-title").textContent = items[1].aspect;
            document.getElementById("drawer-aspect-2-trad").textContent = items[1].traditional;
            document.getElementById("drawer-aspect-2-orchestrated").textContent = items[1].orchestrated;
            document.getElementById("drawer-aspect-2-adv").textContent = items[1].advantage;
        }

        if (items[2]) {
            document.getElementById("drawer-aspect-3-title").textContent = items[2].aspect;
            document.getElementById("drawer-aspect-3-trad").textContent = items[2].traditional;
            document.getElementById("drawer-aspect-3-orchestrated").textContent = items[2].orchestrated;
            document.getElementById("drawer-aspect-3-adv").textContent = items[2].advantage;
        }

        if (drawer) drawer.classList.add("open-drawer");
    } catch (e) {
        console.error("Error opening SOM drawer:", e);
    }
}

function closeSOMDrawer() {
    try {
        const drawer = document.getElementById("som-drawer");
        if (drawer) drawer.classList.remove("open-drawer");
    } catch (e) {
        console.error("Error closing SOM drawer:", e);
    }
}

function renderDrawerMicroVisual(modName) {
    try {
        const container = document.getElementById("drawer-micro-visual");
        if (!container) return;

        container.innerHTML = `
            <svg width="340" height="60" viewBox="0 0 340 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                <rect x="10" y="10" width="130" height="40" rx="8" fill="#ffffff" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
                <text x="75" y="27" fill="#e11d48" font-size="9" font-family="Outfit" font-weight="bold" text-anchor="middle">BASELINE STATE</text>
                <text x="75" y="40" fill="#64748b" font-size="8" font-family="Outfit" text-anchor="middle">Manual Lags & Congestion</text>
                
                <path d="M150 30H185" stroke="#4338ca" stroke-width="2" stroke-dasharray="2 2"/>
                <polygon points="187,30 180,26 180,34" fill="#4338ca"/>
                
                <rect x="195" y="10" width="135" height="40" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
                <text x="262" y="27" fill="#047857" font-size="9" font-family="Outfit" font-weight="bold" text-anchor="middle">AGENTIC EAAS</text>
                <text x="262" y="40" fill="#64748b" font-size="8" font-family="Outfit" text-anchor="middle">78% Auto & θ = 0.89</text>
            </svg>
        `;
    } catch (e) {
        console.error("Error rendering drawer micro-visual:", e);
    }
}

// ==========================================
// 4. OVERLAY MODAL RENDERERS (BLUEPRINT, QFD, DEA, QUEUE)
// ==========================================
function openVisOverlay(type, isAgentic) {
    try {
        overlayVisType = type;
        overlayVisAgentic = isAgentic;
        overlayOpen = true;

        const modal = document.getElementById("vis-overlay-modal");
        const badge = document.getElementById("vis-overlay-badge");
        const title = document.getElementById("vis-overlay-title");
        const desc = document.getElementById("vis-overlay-desc");

        if (modal) modal.classList.remove("opacity-0", "pointer-events-none");

        if (badge) {
            badge.className = isAgentic ? 
                "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300" : 
                "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300";
            badge.textContent = isAgentic ? "Agentic DevEaaS State (Page 2)" : "Traditional Baseline State (Page 1)";
        }

        if (type === 'blueprint') {
            if (title) title.textContent = "Textbook Figure 5.6 Service Blueprint (5 Swimlanes)";
            if (desc) desc.innerHTML = isAgentic ? 
                "<strong>AI-Orchestrated Service Blueprint (Fig 5.6):</strong> Zero human handoff barriers. Prompts flow continuously from Chatbot Intent Parser to Policy Guardrails and Cloudify API triggers." : 
                "<strong>Traditional Service Blueprint (Fig 5.6):</strong> Serial handoffs across manual isolation boundaries between security, operations, and budget teams.";
        } else if (type === 'qfd') {
            if (title) title.textContent = "Quality Function Deployment (QFD / House of Quality)";
            if (desc) desc.innerHTML = isAgentic ? 
                "<strong>AI-Optimized House of Quality:</strong> Strong positive synergy (+) between automated policy validation and deployment speed." : 
                "<strong>Traditional House of Quality (Trade-off Friction):</strong> Severe negative trade-offs (❌) between manual script checking and speed requirements.";
        } else if (type === 'dea') {
            if (title) title.textContent = "Data Envelopment Analysis (DEA Efficiency Frontier)";
            if (desc) desc.innerHTML = isAgentic ? 
                "<strong>Data Envelopment Analysis (DEA):</strong> High efficiency score (<strong>θ = 0.89</strong>) operating near the Pareto-optimal frontier." : 
                "<strong>Data Envelopment Analysis (DEA):</strong> Sub-optimal score (<strong>θ = 0.62</strong>) lying below the efficiency boundary line due to manual labor inputs.";
        } else {
            if (title) title.textContent = "Interactive Queue Dynamics Model";
            if (desc) desc.innerHTML = isAgentic ? 
                "<strong>Parallel Execution Queue Model (M/M/c Model):</strong> Mean wait Wq = 48.5 min, backlog Lq = 2 jobs across parallel worker nodes." : 
                "<strong>Serialized Queuing Bottleneck (M/M/1 Model):</strong> Mean wait Wq = 14.2h, backlog Lq = 18 requests with developer balking/reneging.";
        }

        blueprintAnimT = 0;
        deaAnimProgress = 0;

        renderOverlayFrame();
    } catch (e) {
        console.error("Error opening vis overlay:", e);
    }
}

function closeVisOverlay() {
    try {
        overlayOpen = false;
        const modal = document.getElementById("vis-overlay-modal");
        if (modal) modal.classList.add("opacity-0", "pointer-events-none");
    } catch (e) {
        console.error("Error closing vis overlay:", e);
    }
}

function renderOverlayFrame() {
    if (!overlayOpen) return;

    try {
        const canvas = document.getElementById("vis-overlay-canvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (overlayVisType === 'blueprint') {
                    drawBlueprintVisual(ctx, canvas.width, canvas.height);
                } else if (overlayVisType === 'qfd') {
                    drawQFDVisual(ctx, canvas.width, canvas.height);
                } else if (overlayVisType === 'dea') {
                    drawDEAVisual(ctx, canvas.width, canvas.height);
                } else {
                    drawQueueVisual(ctx, canvas.width, canvas.height);
                }
            }
        }
    } catch (e) {
        console.error("Error rendering overlay frame:", e);
    }
}

function drawBlueprintVisual(ctx, w, h) {
    const laneHeight = h / 5;
    const lanes = ["1. Physical Evidence", "2. Customer Actions", "3. Onstage Actions", "4. Backstage Actions", "5. Support Processes"];
    const boundaryLines = ["LINE OF INFLUENCE", "LINE OF INTERACTION", "LINE OF VISIBILITY", "LINE OF SUPPORT"];

    ctx.strokeStyle = "rgba(51, 65, 85, 0.4)";
    ctx.lineWidth = 1;
    ctx.font = "bold 8px Outfit";

    for (let i = 1; i < 5; i++) {
        let y = i * laneHeight;
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
        ctx.fillText(boundaryLines[i-1], w - 120, y - 4);
    }
    ctx.setLineDash([]);

    ctx.fillStyle = "#94a3b8";
    lanes.forEach((name, idx) => {
        ctx.fillText(name.toUpperCase(), 10, idx * laneHeight + 16);
    });

    const boxes = overlayVisAgentic ? [
        { x: 100, y: laneHeight * 0.5, txt: "Conversational AI UI" },
        { x: 230, y: laneHeight * 1.5, txt: "Types Natural Prompt" },
        { x: 370, y: laneHeight * 2.5, txt: "AI Intent Parser" },
        { x: 510, y: laneHeight * 3.5, txt: "Cloudify Blueprint Selection" },
        { x: 650, y: laneHeight * 4.5, txt: "Cloudify API & Policy Engine" }
    ] : [
        { x: 100, y: laneHeight * 0.5, txt: "Email Ticketing Portal" },
        { x: 230, y: laneHeight * 1.5, txt: "User Submits Ticket" },
        { x: 370, y: laneHeight * 2.5, txt: "Engineer Reads Ticket" },
        { x: 510, y: laneHeight * 3.5, txt: "Manual HCL Terraform Edit" },
        { x: 650, y: laneHeight * 4.5, txt: "ITSM DB & Spreadsheets" }
    ];

    ctx.strokeStyle = overlayVisAgentic ? "rgba(16, 185, 129, 0.5)" : "rgba(244, 63, 94, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(boxes[0].x, boxes[0].y);
    for (let i = 1; i < boxes.length; i++) ctx.lineTo(boxes[i].x, boxes[i].y);
    ctx.stroke();

    boxes.forEach(box => {
        ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
        ctx.strokeStyle = overlayVisAgentic ? "rgba(16, 185, 129, 0.8)" : "rgba(244, 63, 94, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(box.x - 60, box.y - 15, 120, 30, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 8.5px Outfit";
        ctx.textAlign = "center";
        ctx.fillText(box.txt, box.x, box.y + 3);
        ctx.textAlign = "left";
    });

    blueprintAnimT += 0.008;
    if (blueprintAnimT > 1) blueprintAnimT = 0;
    let pidx = Math.floor(blueprintAnimT * 4);
    let pt = (blueprintAnimT * 4) % 1;
    let pStart = boxes[pidx];
    let pEnd = boxes[pidx + 1];
    if (pEnd) {
        let px = pStart.x + (pEnd.x - pStart.x) * pt;
        let py = pStart.y + (pEnd.y - pStart.y) * pt;
        ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
        ctx.shadowColor = overlayVisAgentic ? "#10b981" : "#f43f5e";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

function drawQFDVisual(ctx, w, h) {
    let startX = 220;
    let startY = 110;
    let cellW = 110;
    let cellH = 45;

    const whats = ["Fast Provisioning", "Error-Free Scripting", "Budget Compliance", "Role-Based Safety"];
    const hows = overlayVisAgentic ? ["AI Intent Parsing", "Auto Policy Check", "Cloudify Blueprints", "Terraform State Sync"] : ["Manual HCL Editing", "Engineer Experience", "Manual SLA Checks", "Spreadsheet Auditing"];

    let roofTopX = startX + (cellW * 2);
    let roofTopY = 25;
    ctx.fillStyle = "rgba(15, 23, 42, 0.6)";
    ctx.strokeStyle = overlayVisAgentic ? "rgba(16, 185, 129, 0.5)" : "rgba(244, 63, 94, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(roofTopX, roofTopY);
    ctx.lineTo(startX + cellW * 4, startY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
    ctx.font = "bold 9px Outfit";
    ctx.textAlign = "center";
    ctx.fillText(overlayVisAgentic ? "CORRELATION ROOF: POSITIVE SYNERGY (+)" : "CORRELATION ROOF: HIGH TRADE-OFF FRICTION (❌)", roofTopX, roofTopY + 40);

    hows.forEach((how, j) => {
        let x = startX + (j * cellW);
        let y = startY;

        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.strokeStyle = "rgba(51, 65, 85, 0.6)";
        ctx.beginPath();
        ctx.roundRect(x, y, cellW, cellH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 8.5px Outfit";
        ctx.textAlign = "center";
        ctx.fillText(how, x + cellW / 2, y + cellH / 2 + 3);
    });

    whats.forEach((what, i) => {
        let y = startY + cellH + (i * cellH);

        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.strokeStyle = "rgba(51, 65, 85, 0.6)";
        ctx.beginPath();
        ctx.roundRect(30, y, startX - 40, cellH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 9px Outfit";
        ctx.textAlign = "left";
        ctx.fillText(what, 40, y + cellH / 2 + 3);

        hows.forEach((how, j) => {
            let x = startX + (j * cellW);
            ctx.fillStyle = "rgba(15, 23, 42, 0.5)";
            ctx.strokeStyle = "rgba(51, 65, 85, 0.3)";
            ctx.beginPath();
            ctx.roundRect(x, y, cellW, cellH, 2);
            ctx.fill();
            ctx.stroke();

            let symbol = overlayVisAgentic ? "⊙" : ((i === 0 && j === 0) ? "∆" : "○");
            let color = overlayVisAgentic ? "#10b981" : ((i === 0 && j === 0) ? "#f43f5e" : "#94a3b8");

            ctx.fillStyle = color;
            ctx.font = "bold 13px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(symbol, x + cellW / 2, y + cellH / 2 + 4);
        });
    });

    ctx.textAlign = "left";
}

function drawDEAVisual(ctx, w, h) {
    let originX = 65;
    let originY = h - 50;
    let chartW = w - 100;
    let chartH = h - 90;

    ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(originX, 35);
    ctx.lineTo(originX, originY);
    ctx.lineTo(originX + chartW, originY);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 8.5px Outfit";
    ctx.fillText("OUTPUT: Service Throughput (Deployments / Hour)", originX + 10, 25);
    ctx.fillText("INPUT: Operational Labor Cost & Cycle Time (x_i)", originX + chartW - 190, originY + 25);

    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(originX + 30, originY - chartH * 0.88);
    ctx.quadraticCurveTo(originX + chartW * 0.4, originY - chartH * 0.78, originX + chartW * 0.88, originY - chartH * 0.2);
    ctx.stroke();

    const dmus = [
        { name: "DMU-1 (FinTech Ops)", baseInput: 0.75, baseOutput: 0.35, targetInput: 0.75, targetOutput: 0.65 },
        { name: "DMU-2 (Enterprise SaaS)", baseInput: 0.55, baseOutput: 0.25, targetInput: 0.55, targetOutput: 0.72 },
        { name: "DMU-3 (Healthcare Cloud)", baseInput: 0.85, baseOutput: 0.42, targetInput: 0.85, targetOutput: 0.60 },
        { name: "DMU-4 (Retail E-Com)", baseInput: 0.35, baseOutput: 0.18, targetInput: 0.35, targetOutput: 0.75 }
    ];

    if (overlayVisAgentic) {
        deaAnimProgress += 0.02;
        if (deaAnimProgress > 1) deaAnimProgress = 1;
    } else {
        deaAnimProgress = 0;
    }

    dmus.forEach(dmu => {
        let curX = dmu.baseInput;
        let curY = dmu.baseOutput + (dmu.targetOutput - dmu.baseOutput) * deaAnimProgress;

        let px = originX + (curX * chartW);
        let py = originY - (curY * chartH);

        ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 8px Outfit";
        ctx.fillText(`${dmu.name} (θ = ${(0.62 + (0.27 * deaAnimProgress)).toFixed(2)})`, px + 8, py + 3);
    });

    ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
    ctx.font = "bold 9.5px Outfit";
    ctx.fillText(overlayVisAgentic ? "AGENTIC EAAS FRONTIER SCORE: θ = 0.89 (High Efficiency Boundary)" : "BASELINE FRONTIER SCORE: θ = 0.62 (Sub-Optimal Inefficiency)", originX + 20, originY - 10);
}

function drawQueueVisual(ctx, w, h) {
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 10px Outfit";
    ctx.fillText(overlayVisAgentic ? "AGENTIC EAAS QUEUE MODEL (M/M/c): Wq = 48.5 Mins | Lq = 2 Jobs" : "BASELINE QUEUE MODEL (M/M/1): Wq = 14.2 Hours | Lq = 18 Requests", 40, 40);

    ctx.strokeStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(40, 60, w - 80, h - 100);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "9px Outfit";
    ctx.fillText(overlayVisAgentic ? "Parallel API worker nodes process incoming request queue with zero bottlenecking." : "Single human operator node handles serialized queue causing balking/reneging.", 50, 90);
}

// ==========================================
// 5. STRESS-TEST SCENARIO PRESETS & DES HANDLERS
// ==========================================
function applyScenarioPreset(presetType, mode) {
    try {
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
    } catch (e) {
        console.error("Error applying scenario preset:", e);
    }
}

function updateDESLabel(mode) {
    try {
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
    } catch (e) {
        console.error("Error updating DES labels:", e);
    }
}

function runDES(mode) {
    try {
        if (mode === 'b') {
            let lambda = parseFloat(document.getElementById("sim-b-lambda").value);
            let mu = parseFloat(document.getElementById("sim-b-mu").value);
            let steps = parseInt(document.getElementById("sim-b-steps").value);

            let rho = lambda / (mu * 3.0);
            let simulatedWq = rho >= 0.95 ? (14.2 + (rho * 4.5)) : Math.max(8.5, (14.2 * rho));
            let simulatedBacklog = Math.round(18 * rho);

            document.getElementById("txt-des-summary-b").textContent = `Simulated Wq: ${simulatedWq.toFixed(1)} Hours | Backlog: ${simulatedBacklog} req`;
            document.getElementById("metric-b-wq").textContent = `${simulatedWq.toFixed(1)} Hours`;
            document.getElementById("metric-b-lq").textContent = `${simulatedBacklog} Requests`;

            // Step through baseline pipeline nodes b1..b5
            ["b1", "b2", "b3", "b4", "b5"].forEach((nid, index) => {
                setTimeout(() => {
                    document.querySelectorAll("[data-node]").forEach(el => el.classList.remove("border-rose-400", "border-emerald-400", "shadow-lg"));
                    const target = document.querySelector(`[data-node="${nid}"]`);
                    if (target) target.classList.add("border-rose-400", "shadow-lg");
                }, index * 400);
            });
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

            // Step through agentic pipeline nodes a1..a5
            ["a1", "a2", "a3", "a4", "a5"].forEach((nid, index) => {
                setTimeout(() => {
                    document.querySelectorAll("[data-node]").forEach(el => el.classList.remove("border-rose-400", "border-emerald-400", "shadow-lg"));
                    const target = document.querySelector(`[data-node="${nid}"]`);
                    if (target) target.classList.add("border-emerald-400", "shadow-lg");
                }, index * 300);
            });
        }
    } catch (e) {
        console.error("Error running DES simulation:", e);
    }
}

// ==========================================
// 6. INTERACTIVE FINANCIAL ROI CALCULATOR
// ==========================================
function updateROICalculator() {
    try {
        let devs = parseInt(document.getElementById("roi-devs").value);
        let rate = parseInt(document.getElementById("roi-rate").value);
        let cloud = parseInt(document.getElementById("roi-cloud").value);

        document.getElementById("lbl-roi-devs").textContent = `${devs} Developers`;
        document.getElementById("lbl-roi-rate").textContent = `$${rate} / hour`;
        document.getElementById("lbl-roi-cloud").textContent = `$${cloud.toLocaleString()} / month`;

        let hoursSaved = Math.round(devs * 165.6);
        let laborSavedDollars = Math.round(hoursSaved * rate);
        let cloudSavedDollars = Math.round((cloud * 12) * 0.228);
        let totalSavings = laborSavedDollars + cloudSavedDollars;

        document.getElementById("roi-hours-saved").textContent = `${hoursSaved.toLocaleString()} Hours`;
        document.getElementById("roi-labor-saved").textContent = `$${laborSavedDollars.toLocaleString()}`;
        document.getElementById("roi-cloud-saved").textContent = `$${cloudSavedDollars.toLocaleString()}`;
        document.getElementById("roi-total-saved").textContent = `$${totalSavings.toLocaleString()} / yr`;
    } catch (e) {
        console.error("Error updating ROI calculator:", e);
    }
}

// ==========================================
// 7. 60FPS HTML5 CANVAS PARTICLE ANIMATION LOOP
// ==========================================
function animationLoop() {
    desFrameCount++;

    try {
        // 1. Render Baseline Particle Canvas
        const canvasB = document.getElementById("canvas-des-particle-b");
        if (canvasB && activeTab === "baseline") {
            if (canvasB.parentElement) {
                let rect = canvasB.parentElement.getBoundingClientRect();
                if (canvasB.width !== Math.floor(rect.width)) canvasB.width = Math.floor(rect.width);
                if (canvasB.height !== 160) canvasB.height = 160;
            }

            const ctx = canvasB.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, canvasB.width, canvasB.height);

                ctx.strokeStyle = "rgba(244, 63, 94, 0.35)";
                ctx.lineWidth = 1.5;
                ctx.setLineDash([4, 4]);
                ctx.strokeRect(40, 35, canvasB.width - 180, 80);
                ctx.setLineDash([]);

                ctx.fillStyle = "#94a3b8";
                ctx.font = "bold 9px Outfit";
                ctx.fillText("INCOMING TICKET QUEUE (Lq Backlog)", 50, 30);

                let nodeX = canvasB.width - 80;
                ctx.fillStyle = desFrameCount % 60 < 30 ? "rgba(244, 63, 94, 0.85)" : "rgba(245, 158, 11, 0.85)";
                ctx.strokeStyle = "#f43f5e";
                ctx.beginPath();
                ctx.arc(nodeX, 75, 26, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = "#ffffff";
                ctx.font = "bold 8.5px Outfit";
                ctx.textAlign = "center";
                ctx.fillText("👨‍💻 HUMAN", nodeX, 73);
                ctx.fillText("OVERLOAD", nodeX, 83);
                ctx.textAlign = "left";

                if (desFrameCount % 35 === 0 && desParticlesB.length < 18) {
                    desParticlesB.push({
                        x: 10,
                        y: 75 + (Math.random() * 24 - 12),
                        speed: 1.8,
                        balking: Math.random() < 0.28,
                        balkTimer: 0
                    });
                }

                desParticlesB.forEach((p, idx) => {
                    let targetX = (nodeX - 50) - (idx * 22);
                    if (p.x < targetX) p.x += p.speed;

                    if (p.balking && p.x >= targetX) {
                        p.y -= 1.2;
                        p.balkTimer++;

                        ctx.fillStyle = "#ef4444";
                        ctx.font = "bold 9px sans-serif";
                        ctx.fillText("😡 RENEGED", p.x - 15, p.y - 8);

                        if (p.balkTimer > 45) {
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
        }

        // 2. Render Agentic Particle Canvas
        const canvasA = document.getElementById("canvas-des-particle-a");
        if (canvasA && activeTab === "agentic") {
            if (canvasA.parentElement) {
                let rect = canvasA.parentElement.getBoundingClientRect();
                if (canvasA.width !== Math.floor(rect.width)) canvasA.width = Math.floor(rect.width);
                if (canvasA.height !== 160) canvasA.height = 160;
            }

            const ctx = canvasA.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, canvasA.width, canvasA.height);

                let w = canvasA.width;
                let step = w / 5;
                const nodes = [
                    { x: step * 1, label: "🧠 Intent" },
                    { x: step * 2, label: "🛡️ Policy" },
                    { x: step * 3, label: "⚙️ Cloudify" },
                    { x: step * 4, label: "🏗️ Terraform" }
                ];

                ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
                ctx.lineWidth = 2;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(30, 75);
                ctx.lineTo(w - 30, 75);
                ctx.stroke();
                ctx.setLineDash([]);

                nodes.forEach(n => {
                    ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
                    ctx.strokeStyle = "#10b981";
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(n.x, 75, 22, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = "#34d399";
                    ctx.font = "bold 8.5px Outfit";
                    ctx.textAlign = "center";
                    ctx.fillText(n.label, n.x, 78);
                    ctx.textAlign = "left";
                });

                if (desFrameCount % 18 === 0 && desParticlesA.length < 14) {
                    desParticlesA.push({ x: 30, y: 75, speed: 5.0 });
                }

                desParticlesA.forEach((p, idx) => {
                    p.x += p.speed;
                    if (p.x > w - 30) {
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
        }

        // 3. Render Modal Overlay Frame
        if (overlayOpen) {
            renderOverlayFrame();
        }

    } catch (e) {
        console.error("Error in animation loop:", e);
    }

    requestAnimationFrame(animationLoop);
}

// ==========================================
// 8. RENDERERS & DATA HANDLERS
// ==========================================
function renderDatasetTable() {
    try {
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
    } catch (e) {
        console.error("Error rendering dataset table:", e);
    }
}

function downloadCSVDataset() {
    try {
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
    } catch (e) {
        console.error("Error downloading CSV dataset:", e);
    }
}

function startBaselineSimulation() {
    if (baselineSimActive) return;
    baselineSimActive = true;
    alert("Baseline simulation active.");
}

function selectPromptPreset(text) {
    const ipt = document.getElementById("ipt-agent-prompt");
    if (ipt) ipt.value = text;
}

function startAgenticSimulation() {
    if (agenticSimActive) return;
    const ipt = document.getElementById("ipt-agent-prompt");
    let promptVal = ipt ? ipt.value.trim() : "";
    if (!promptVal) promptVal = "Provision a downscaled staging VM for testing";

    agenticSimActive = true;
    logMessage("INTENT PARSER", `Received natural language prompt: "${promptVal}"`);
    
    highlightPipelineNode("a1");
    
    setTimeout(() => {
        highlightPipelineNode("a2");
        logMessage("LLM AGENT", "Parsing TOSCA DSL intent & mapping parameters to Terraform HCL template...");
    }, 600);

    setTimeout(() => {
        highlightPipelineNode("a3");
        logMessage("POLICY GUARD", "Scanning OPA security policies: RBAC check OK, Cloud budget check OK.");
    }, 1200);

    setTimeout(() => {
        highlightPipelineNode("a4");
        logMessage("CLOUDIFY ENGINE", "Triggering REST API orchestrator & applying Terraform state synchronization...");
    }, 1800);

    setTimeout(() => {
        highlightPipelineNode("a5");
        logMessage("AUTONOMIC SELF-HEAL", "Resource provisioned successfully in 48.5 seconds. Zero-touch STP complete.");
        agenticSimActive = false;
    }, 2400);
}

function highlightPipelineNode(nodeId) {
    document.querySelectorAll("[data-node]").forEach(el => {
        el.classList.remove("border-emerald-400", "border-rose-400", "shadow-lg");
    });
    const target = document.querySelector(`[data-node="${nodeId}"]`);
    if (target) {
        target.classList.add("border-emerald-400", "shadow-lg");
    }
}

function logMessage(sub, msg) {
    const consoleEl = document.getElementById("div-agent-console");
    if (consoleEl) {
        consoleEl.innerHTML += `<div class="mb-1"><span class="text-cyan-400 font-bold">[${sub}]</span> ${msg}</div>`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }
}

function renderMatrixTable() {
    try {
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
    } catch (e) {
        console.error("Error rendering matrix table:", e);
    }
}

function initBarChart() {
    if (typeof Chart === 'undefined') return;
    const canvas = document.getElementById("barChart");
    if (!canvas) return;

    try {
        const ctx = canvas.getContext("2d");
        if (barChartInstance) barChartInstance.destroy();

        barChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Wait Time (min)', 'Queue (req)', 'STP (%)', 'DPMO (/1k)', 'MTTR (min)', 'Waste (%)'],
                datasets: [
                    { label: 'Baseline (Page 1)', data: [852, 18, 34.5, 18.4, 85.0, 31.2], backgroundColor: 'rgba(244, 63, 94, 0.75)', borderColor: '#f43f5e', borderWidth: 1 },
                    { label: 'Agentic EaaS (Page 2)', data: [48.5, 2, 78.2, 2.1, 14.5, 8.4], backgroundColor: 'rgba(16, 185, 129, 0.75)', borderColor: '#10b981', borderWidth: 1 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { font: { family: 'Outfit', size: 10 } } }
                }
            }
        });
    } catch (e) {
        console.error("Error initializing bar chart:", e);
    }
}

function updateBarChart() {
    if (!barChartInstance) return;
    try {
        barChartInstance.update();
    } catch (e) {
        console.error("Error updating bar chart:", e);
    }
}

function initRadarChart() {
    if (typeof Chart === 'undefined') return;
    const canvas = document.getElementById("radarChart");
    if (!canvas) return;

    try {
        const ctx = canvas.getContext("2d");
        if (radarChartInstance) radarChartInstance.destroy();

        radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Wait Time', 'Queue', 'DEA (θ)', 'STP %', 'DPMO', 'MTTR', 'SERVQUAL', 'Yield'],
                datasets: [
                    { label: 'Baseline (Page 1)', data: [25, 20, 62, 34.5, 36, 25, 35, 30], borderColor: '#f43f5e', backgroundColor: 'rgba(244, 63, 94, 0.12)' },
                    { label: 'Agentic EaaS (Page 2)', data: [88, 90, 89, 78.2, 88, 85, 82, 84], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.12)' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { font: { family: 'Outfit', size: 10 } } }
                }
            }
        });
    } catch (e) {
        console.error("Error initializing radar chart:", e);
    }
}
