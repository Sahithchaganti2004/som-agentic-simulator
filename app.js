// Services Operations Management Simulator & Orchestration Engine

// ==========================================
// 1. DATA DATABASE: 24 QUALITATIVE POINTS
// ==========================================
const somDatabase = [
    // Service Process & System Design
    {
        module: "Service Process & System Design",
        aspect: "Blueprint Adaptability",
        traditional: "Rigid, static paper designs that require manual revision and administrative review for every infrastructure update.",
        orchestrated: "Dynamic, self-generating digital blueprints matching live workspace states automatically.",
        advantage: "Accelerates configuration updates and eliminates documentation lag."
    },
    {
        module: "Service Process & System Design",
        aspect: "Service Customization",
        traditional: "Hand-crafted configurations custom-made by engineers for every separate developer request, leading to drift.",
        orchestrated: "Modular configuration generation based on user intent and standardized template parameters.",
        advantage: "Standardizes deployment components while retaining developer flexibility."
    },
    {
        module: "Service Process & System Design",
        aspect: "Handoff Boundaries",
        traditional: "Serial handoffs across isolation boundaries between security, network, and operations teams.",
        orchestrated: "Unified agentic orchestration crossing boundaries instantly through programmatic API calls.",
        advantage: "Prevents process delays and eliminates queue backlogs between departments."
    },
    
    // Service Encounter
    {
        module: "Service Encounter",
        aspect: "Interaction Interface",
        traditional: "Complex form-based ticketing tools that require users to input technical configuration parameters manually.",
        orchestrated: "Conversational, natural language prompt interfaces that translate intent into deployment tasks.",
        advantage: "Simplifies requirements gathering and removes user barrier-to-entry."
    },
    {
        module: "Service Encounter",
        aspect: "Friction Level",
        traditional: "High contact intensity requiring active negotiation, back-and-forth emails, and manual follow-ups.",
        orchestrated: "Zero-friction self-service execution with instant automated setup confirmations.",
        advantage: "Eliminates human coordination overhead and developer frustration."
    },
    {
        module: "Service Encounter",
        aspect: "Support Escalation",
        traditional: "Multi-tier escalation chains with engineers manually reading verbose system logs.",
        orchestrated: "Automated log parsing with packaged diagnostics ready for human-in-the-loop validation.",
        advantage: "Speeds up troubleshooting and resolution for complex technical faults."
    },

    // Service Layouts & Process Analysis
    {
        module: "Service Layouts & Process Analysis",
        aspect: "Layout Transparency",
        traditional: "Opaque email inboxes and spreadsheets hiding queue bottleneck build-ups.",
        orchestrated: "Interactive, central dashboards visualizing resource loads and active container workspaces.",
        advantage: "Exposes operational bottlenecks instantly to team managers."
    },
    {
        module: "Service Layouts & Process Analysis",
        aspect: "Handoff Latency",
        traditional: "Idle times while tickets wait in queue folders between team handovers.",
        orchestrated: "Instant REST API triggers transferring metadata payloads between microservices.",
        advantage: "Minimizes total non-value-adding waiting times."
    },
    {
        module: "Service Layouts & Process Analysis",
        aspect: "Path Optimization",
        traditional: "Rework loops due to incorrect manual configuration scripts.",
        orchestrated: "Immutable template structures minimizing task execution steps.",
        advantage: "Standardizes critical path execution times."
    },

    // Service Quality & Process Control
    {
        module: "Service Quality & Process Control",
        aspect: "Compliance Auditing",
        traditional: "Periodic, manual checkbox audits after environments are deployed.",
        orchestrated: "Pre-deployment automated policy guardrail scans.",
        advantage: "Prevents budget and security policy violations before resource creation."
    },
    {
        module: "Service Quality & Process Control",
        aspect: "Quality Inspection",
        traditional: "Manual validation checks performed by QA engineers (highly error-prone).",
        orchestrated: "Systematic check routines verifying container connectivity and state configurations.",
        advantage: "Eliminates human oversight defects and syntax errors."
    },
    {
        module: "Service Quality & Process Control",
        aspect: "Service Recovery",
        traditional: "Reactive troubleshooting and ticket re-submission after environments crash.",
        orchestrated: "Autonomic self-healing engines rebuilding corrupted nodes instantly.",
        advantage: "Maintains maximum uptime without developer intervention."
    },

    // Measuring Service Productivity
    {
        module: "Measuring Service Productivity",
        aspect: "Labor Productivity",
        traditional: "Output bound to manual engineer hours, resulting in low setups per headcount.",
        orchestrated: "High output enabled by parallel AI agent orchestration.",
        advantage: "Decouples service throughput from operational staff sizes."
    },
    {
        module: "Measuring Service Productivity",
        aspect: "Resource Utilization",
        traditional: "Static provisioning leads to idle servers running continuously to avoid startup delays.",
        orchestrated: "Elastic containers running only during active workspace sessions.",
        advantage: "Drastically reduces cloud compute waste and operational cost."
    },
    {
        module: "Measuring Service Productivity",
        aspect: "Process Efficiency",
        traditional: "High ratio of waiting times to active processing times.",
        orchestrated: "Streamlined execution where processing time equals total cycle time.",
        advantage: "Maximizes value-adding activity ratios."
    },

    // Managing Waiting Lines & Queuing Theory
    {
        module: "Managing Waiting Lines & Queuing Theory",
        aspect: "Queuing Architecture",
        traditional: "Serialized M/M/c queues processed by limited human engineering teams.",
        orchestrated: "Parallel on-demand containers (M/M/infinity equivalent model).",
        advantage: "Eliminates request queues even during high demand peaks."
    },
    {
        module: "Managing Waiting Lines & Queuing Theory",
        aspect: "Customer Balking / Reneging",
        traditional: "Developers abandon request tickets due to excessive wait times.",
        orchestrated: "Instant confirmation and near-zero waiting loops.",
        advantage: "Prevents project delays and team frustration."
    },
    {
        module: "Managing Waiting Lines & Queuing Theory",
        aspect: "Demand Fluctuations",
        traditional: "Fixed engineer capacity causes severe queue build-ups during business hours.",
        orchestrated: "Dynamic auto-scaling provisions nodes matching real-time request counts.",
        advantage: "Absorbs sudden request spikes without performance degradation."
    },

    // Service Strategy & SLA Management
    {
        module: "Service Strategy & SLA Management",
        aspect: "Competitive Dimension",
        traditional: "Operations compete purely on cost, compromising on service speed.",
        orchestrated: "Operations win on speed and responsiveness as differentiators.",
        advantage: "Empowers product teams to ship updates to market much faster."
    },
    {
        module: "Service Strategy & SLA Management",
        aspect: "SLA Adherence",
        traditional: "Frequent breaches due to backlog queues and validation back-and-forth.",
        orchestrated: "Standard SLA fulfillment via automated provisioning runs.",
        advantage: "Ensures service reliability guarantees are met consistently."
    },
    {
        module: "Service Strategy & SLA Management",
        aspect: "Value Proposition",
        traditional: "IT seen as a cost center managing routine maintenance.",
        orchestrated: "IT acts as an innovation partner accelerating development.",
        advantage: "Shifts business perspective of infrastructure operations."
    },

    // Technology-Driven Service Operations
    {
        module: "Technology-Driven Service Operations",
        aspect: "System Integration",
        traditional: "Disjointed tooling requiring manual copy-pasting of scripts and settings.",
        orchestrated: "API-driven loops linking intent parsers directly to Terraform/Cloudify.",
        advantage: "Eliminates human error during configuration transfers."
    },
    {
        module: "Technology-Driven Service Operations",
        aspect: "Infrastructure State",
        traditional: "Mutable environments with script drift and custom manual changes.",
        orchestrated: "Immutable configuration declarations managed by state files.",
        advantage: "Guarantees environment consistency across multiple deployments."
    },
    {
        module: "Technology-Driven Service Operations",
        aspect: "Telemetry & Monitoring",
        traditional: "Reactive log checks conducted only when a user files a support ticket.",
        orchestrated: "Real-time metric streaming and automated anomaly detection.",
        advantage: "Detects potential configuration failures before developers notice."
    }
];

// ==========================================
// 2. STATE ENGINE & CONSTANTS
// ==========================================
let activeTab = "baseline"; // baseline | agentic | comparison
let matrixFilterCategory = "all";
let radarChartInstance = null;

// Pipeline Simulation States
let baselineSimActive = false;
let agenticSimActive = false;
let baselineProgress = 0;
let agenticProgress = 0;
let baselineSlaTimer = 0;
let baselineTimerInterval = null;

// Interactive Overlay Modal State
let overlayVisType = 'blueprint'; // blueprint | qfd | queue
let overlayVisAgentic = false;
let overlayOpen = false;
let overlayAnimId = null;

// Queue Simulation Variables
let traditionalQueue = [];
let traditionalServerBusy = false;
let traditionalServerProgress = 0;
let traditionalTotalProcessed = 0;
let traditionalTotalBalked = 0;

let agenticQueue = [];
let agenticServers = [
    { busy: false, progress: 0, currentId: null },
    { busy: false, progress: 0, currentId: null },
    { busy: false, progress: 0, currentId: null },
    { busy: false, progress: 0, currentId: null }
];
let agenticTotalProcessed = 0;

// Blueprint animation variable
let blueprintT = 0;

// ==========================================
// 3. INITIALIZATION & NAVIGATION BINDING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Navigation Tabs
    document.getElementById("nav-btn-baseline").addEventListener("click", () => switchTab("baseline"));
    document.getElementById("nav-btn-agentic").addEventListener("click", () => switchTab("agentic"));
    document.getElementById("nav-btn-comparison").addEventListener("click", () => switchTab("comparison"));

    // Pipeline Simulators
    document.getElementById("btn-baseline-simulate").addEventListener("click", startBaselineSimulation);
    document.getElementById("btn-agent-simulate").addEventListener("click", startAgenticSimulation);

    // Modal Close
    document.getElementById("vis-overlay-close").addEventListener("click", closeVisOverlay);

    // Enter key support for input field
    document.getElementById("ipt-agent-prompt").addEventListener("keypress", (e) => {
        if(e.key === "Enter") startAgenticSimulation();
    });

    // Comparison Matrix Filter Pills
    document.querySelectorAll("#matrix-filter-container button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#matrix-filter-container button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            matrixFilterCategory = btn.getAttribute("data-matrix-category");
            renderMatrixTable();
        });
    });

    renderExplorerList();
    renderMatrixTable();
    initRadarChart();

    // Start frames
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
    }
}

// ==========================================
// 4. SOM EXPLORER SIDEBAR & SLIDING DRAWER
// ==========================================
function renderExplorerList() {
    const listContainer = document.getElementById("som-explorer-list");
    listContainer.innerHTML = "";

    const uniqueModules = [...new Set(somDatabase.map(item => item.module))];

    uniqueModules.forEach(modName => {
        const itemEl = document.createElement("div");
        itemEl.className = "som-explorer-card p-3 rounded-2xl text-xs font-semibold text-slate-350 hover:text-slate-100 flex items-center justify-between cursor-pointer transition-all";
        
        let iconHtml = "<i class='fa-solid fa-bezier-curve text-cyan-400'></i>";
        if (modName.includes("Encounter")) iconHtml = "<i class='fa-solid fa-people-arrows text-cyan-400'></i>";
        if (modName.includes("Quality")) iconHtml = "<i class='fa-solid fa-circle-check text-cyan-400'></i>";
        if (modName.includes("Productivity")) iconHtml = "<i class='fa-solid fa-chart-line text-cyan-400'></i>";
        if (modName.includes("Lines")) iconHtml = "<i class='fa-solid fa-users text-cyan-400'></i>";
        if (modName.includes("Strategy")) iconHtml = "<i class='fa-solid fa-crosshairs text-cyan-400'></i>";
        if (modName.includes("Technology")) iconHtml = "<i class='fa-solid fa-microchip text-cyan-400'></i>";

        itemEl.innerHTML = `
            <div class="flex items-center gap-2 pointer-events-none">
                ${iconHtml}
                <span>${modName}</span>
            </div>
            <i class="fa-solid fa-chevron-right text-[10px] text-slate-500 pointer-events-none"></i>
        `;
        
        itemEl.addEventListener("click", () => openSOMDrawer(modName));
        listContainer.appendChild(itemEl);
    });
}

function openSOMDrawer(modName) {
    const drawer = document.getElementById("som-drawer");
    const title = document.getElementById("drawer-title");
    const category = document.getElementById("drawer-category");

    title.textContent = modName;
    category.textContent = "SOM Module Detail Context";

    const items = somDatabase.filter(d => d.module === modName);
    
    // Bind Micro Visual
    renderDrawerMicroVisual(modName);

    // Bind Aspect 1
    document.getElementById("drawer-aspect-1-title").textContent = items[0].aspect;
    document.getElementById("drawer-aspect-1-trad").textContent = items[0].traditional;
    document.getElementById("drawer-aspect-1-orchestrated").textContent = items[0].orchestrated;
    document.getElementById("drawer-aspect-1-adv").textContent = items[0].advantage;

    // Bind Aspect 2
    document.getElementById("drawer-aspect-2-title").textContent = items[1].aspect;
    document.getElementById("drawer-aspect-2-trad").textContent = items[1].traditional;
    document.getElementById("drawer-aspect-2-orchestrated").textContent = items[1].orchestrated;
    document.getElementById("drawer-aspect-2-adv").textContent = items[1].advantage;

    // Bind Aspect 3
    document.getElementById("drawer-aspect-3-title").textContent = items[2].aspect;
    document.getElementById("drawer-aspect-3-trad").textContent = items[2].traditional;
    document.getElementById("drawer-aspect-3-orchestrated").textContent = items[2].orchestrated;
    document.getElementById("drawer-aspect-3-adv").textContent = items[2].advantage;

    document.querySelectorAll(".som-explorer-card").forEach(card => {
        if(card.textContent.includes(modName)) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    drawer.classList.add("open-drawer");
}

function closeSOMDrawer() {
    document.getElementById("som-drawer").classList.remove("open-drawer");
    document.querySelectorAll(".som-explorer-card").forEach(card => card.classList.remove("active"));
}

function renderDrawerMicroVisual(modName) {
    const container = document.getElementById("drawer-micro-visual");
    container.innerHTML = `
        <svg width="340" height="60" viewBox="0 0 340 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
            <!-- Traditional Block -->
            <rect x="10" y="10" width="130" height="40" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
            <text x="75" y="28" fill="#f43f5e" font-size="9" font-family="Outfit" font-weight="bold" text-anchor="middle">TRADITIONAL</text>
            <text x="75" y="40" fill="#94a3b8" font-size="8" font-family="Outfit" text-anchor="middle">Manual Lags & Drift</text>
            
            <!-- Arrow -->
            <path d="M150 30H185" stroke="#38bdf8" stroke-width="2" stroke-dasharray="2 2"/>
            <polygon points="187,30 180,26 180,34" fill="#38bdf8"/>
            
            <!-- Orchestrated Block -->
            <rect x="195" y="10" width="135" height="40" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
            <text x="262" y="28" fill="#10b981" font-size="9" font-family="Outfit" font-weight="bold" text-anchor="middle">AI + ORCHESTRATION</text>
            <text x="262" y="40" fill="#94a3b8" font-size="8" font-family="Outfit" text-anchor="middle">Automated & Elastic</text>
        </svg>
    `;
}

// ==========================================
// 5. INTERACTIVE VISUALIZATION OVERLAYS (MODALS)
// ==========================================
function openVisOverlay(type, isAgentic) {
    overlayVisType = type;
    overlayVisAgentic = isAgentic;
    overlayOpen = true;

    const modal = document.getElementById("vis-overlay-modal");
    const badge = document.getElementById("vis-overlay-badge");
    const title = document.getElementById("vis-overlay-title");
    const desc = document.getElementById("vis-overlay-desc");

    modal.classList.remove("opacity-0", "pointer-events-none");

    if (isAgentic) {
        badge.className = "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
        badge.textContent = "AI Agent + Cloudify / Terraform";
    } else {
        badge.className = "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20";
        badge.textContent = "Traditional Manual Operations";
    }

    if (type === 'blueprint') {
        title.textContent = "Textbook Figure 5.6 Service Blueprint (5 Swimlanes)";
        if (isAgentic) {
            desc.innerHTML = `
                <strong>AI-Orchestrated 5-Swimlane Service Blueprint:</strong><br/>
                - <em>Layer 1 (Physical Evidence):</em> Conversational UI & live execution logs.<br/>
                - <em>Layer 2 (Customer Actions):</em> User submits natural language prompt -> Instant VM endpoint.<br/>
                - <em>Layer 3 (Onstage Actions):</em> AI Agent Chatbot intent validation.<br/>
                - <em>Layer 4 (Backstage Actions):</em> AI selects Cloudify blueprints & auto-generates Terraform graphs.<br/>
                - <em>Layer 5 (Support Processes):</em> Cloudify Orchestrator REST API, automated IAM checks & budget engine.
            `;
        } else {
            desc.innerHTML = `
                <strong>Traditional 5-Swimlane Service Blueprint:</strong><br/>
                - <em>Layer 1 (Physical Evidence):</em> Email ticketing portal & static cloud console.<br/>
                - <em>Layer 2 (Customer Actions):</em> User files request ticket -> Long wait times.<br/>
                - <em>Layer 3 (Onstage Actions):</em> DevOps engineer reads ticket & sends manual emails.<br/>
                - <em>Layer 4 (Backstage Actions):</em> Engineer manually edits HCL scripts & CLI syntax checks.<br/>
                - <em>Layer 5 (Support Processes):</em> ITSM database lookup & spreadsheet budget checks.
            `;
        }
    } else if (type === 'qfd') {
        title.textContent = "Quality Function Deployment (QFD / House of Quality)";
        if (isAgentic) {
            desc.innerHTML = `
                <strong>AI-Optimized House of Quality:</strong><br/>
                - <em>Roof Correlations:</em> Strong positive synergy (➕) between automated script validation and deployment speed.<br/>
                - <em>Matrix Relationships:</em> High alignment ($\odot$) between Customer WHATs (Fast provisioning, safety) and Engineering HOWs (AI Intent parsing, Cloudify validation).
            `;
        } else {
            desc.innerHTML = `
                <strong>Traditional House of Quality (Trade-off Friction):</strong><br/>
                - <em>Roof Correlations:</em> Severe negative trade-offs (❌) between manual script checking and speed requirements.<br/>
                - <em>Matrix Relationships:</em> Weak or conflicting relationships ($\Delta$, $\circ$) between Customer WHATs and manual engineering HOWs.
            `;
        }
    } else {
        title.textContent = "Interactive Queue Dynamics Model";
        if (isAgentic) {
            desc.innerHTML = `
                <strong>Parallel Execution Queue Model (M/M/∞ Equivalent):</strong><br/>
                - Incoming requests bypass serialized lines and scale across parallel AI nodes directly to Cloudify API.<br/>
                - <em>Key Metrics:</em> Queue length ($L_q \\approx 0$), Waiting time ($W_q \\approx 0$), instantaneous scaling.
            `;
        } else {
            desc.innerHTML = `
                <strong>Serialized Queuing Bottleneck (M/M/1 Model):</strong><br/>
                - Incoming requests wait in a single line due to a single human engineer server bottleneck.<br/>
                - <em>Key Metrics:</em> Growing line ($L_q$), severe wait times ($W_q$), customer balking/reneging.
            `;
        }
    }

    // Reset simulator structures
    traditionalQueue = [];
    traditionalServerBusy = false;
    traditionalTotalProcessed = 0;
    traditionalTotalBalked = 0;

    agenticQueue = [];
    agenticServers.forEach(s => { s.busy = false; s.progress = 0; s.currentId = null; });
    agenticTotalProcessed = 0;

    blueprintT = 0;

    // Start overlay rendering loop
    if (overlayAnimId) cancelAnimationFrame(overlayAnimId);
    renderOverlayFrame();
}

function closeVisOverlay() {
    overlayOpen = false;
    const modal = document.getElementById("vis-overlay-modal");
    modal.classList.add("opacity-0", "pointer-events-none");
    if (overlayAnimId) cancelAnimationFrame(overlayAnimId);
}

function renderOverlayFrame() {
    if (!overlayOpen) return;

    const canvas = document.getElementById("vis-overlay-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (overlayVisType === 'blueprint') {
            drawBlueprintVisual(ctx, canvas.width, canvas.height);
        } else if (overlayVisType === 'qfd') {
            drawQFDVisual(ctx, canvas.width, canvas.height);
        } else {
            drawQueueVisual(ctx, canvas.width, canvas.height);
        }
    }

    overlayAnimId = requestAnimationFrame(renderOverlayFrame);
}

// ------------------------------------------
// DRAW 5-SWIMLANE TEXTBOOK FIGURE 5.6 BLUEPRINT
// ------------------------------------------
function drawBlueprintVisual(ctx, w, h) {
    const laneHeight = h / 5;
    const lanes = [
        "1. Physical Evidence / Influence",
        "2. Customer Actions",
        "3. Onstage / Front Office",
        "4. Backstage / Back Office",
        "5. Support Processes"
    ];

    const boundaryLines = [
        "LINE OF INFLUENCE",
        "LINE OF INTERACTION",
        "LINE OF VISIBILITY",
        "LINE OF SUPPORT"
    ];

    ctx.strokeStyle = "rgba(51, 65, 85, 0.4)";
    ctx.lineWidth = 1;
    ctx.font = "bold 8px Outfit";

    // Draw lines & labels
    for (let i = 1; i < 5; i++) {
        let y = i * laneHeight;
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        ctx.fillStyle = "rgba(100, 116, 139, 0.7)";
        ctx.fillText(boundaryLines[i-1], w - 125, y - 4);
    }
    ctx.setLineDash([]);

    // Draw Lane headers
    ctx.fillStyle = "#64748b";
    lanes.forEach((name, idx) => {
        ctx.fillText(name.toUpperCase(), 12, idx * laneHeight + 16);
    });

    if (!overlayVisAgentic) {
        // TRADITIONAL 5-SWIMLANE BLUEPRINT
        const boxes = [
            { x: 100, y: laneHeight * 0.5, txt: "Email Ticketing Portal", lane: 0 },
            { x: 230, y: laneHeight * 1.5, txt: "User Submits Ticket", lane: 1 },
            { x: 370, y: laneHeight * 2.5, txt: "Engineer Clarifies Details", lane: 2 },
            { x: 510, y: laneHeight * 3.5, txt: "Manual HCL Terraform Edit", lane: 3 },
            { x: 650, y: laneHeight * 4.5, txt: "ITSM DB & Spreadsheets", lane: 4 }
        ];

        // Draw connections
        ctx.strokeStyle = "rgba(244, 63, 94, 0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(boxes[0].x, boxes[0].y);
        for(let i=1; i<boxes.length; i++) ctx.lineTo(boxes[i].x, boxes[i].y);
        ctx.stroke();

        boxes.forEach((box, i) => {
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
            ctx.strokeStyle = "rgba(244, 63, 94, 0.5)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(box.x - 65, box.y - 16, 130, 32, 6);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#f1f5f9";
            ctx.font = "bold 8.5px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(box.txt, box.x, box.y + 3);
            ctx.textAlign = "left";

            if (i > 0) {
                let prev = boxes[i-1];
                let mx = (box.x + prev.x) / 2;
                let my = (box.y + prev.y) / 2;
                
                ctx.fillStyle = "#ef4444";
                ctx.beginPath();
                ctx.arc(mx, my, 7, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = "#ffffff";
                ctx.font = "7px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("⚠️", mx, my + 2.5);
                ctx.textAlign = "left";
            }
        });

        // Slow particle
        blueprintT += 0.003;
        if (blueprintT > 1) blueprintT = 0;
        let pidx = Math.floor(blueprintT * 4);
        let pt = (blueprintT * 4) % 1;
        let pStart = boxes[pidx];
        let pEnd = boxes[pidx + 1];
        if (pEnd) {
            let px = pStart.x + (pEnd.x - pStart.x) * pt;
            let py = pStart.y + (pEnd.y - pStart.y) * pt;
            ctx.fillStyle = "#f43f5e";
            ctx.shadowColor = "#f43f5e";
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

    } else {
        // AI 5-SWIMLANE BLUEPRINT
        const boxes = [
            { x: 100, y: laneHeight * 0.5, txt: "Conversational AI UI", lane: 0 },
            { x: 230, y: laneHeight * 1.5, txt: "Types Natural Prompt", lane: 1 },
            { x: 370, y: laneHeight * 2.5, txt: "AI Chat Intent Parser", lane: 2 },
            { x: 510, y: laneHeight * 3.5, txt: "Cloudify Blueprint Selection", lane: 3 },
            { x: 650, y: laneHeight * 4.5, txt: "Cloudify API & RBAC Engine", lane: 4 }
        ];

        // Draw connections
        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(boxes[0].x, boxes[0].y);
        for(let i=1; i<boxes.length; i++) ctx.lineTo(boxes[i].x, boxes[i].y);
        ctx.stroke();

        boxes.forEach(box => {
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
            ctx.strokeStyle = "rgba(16, 185, 129, 0.5)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(box.x - 65, box.y - 16, 130, 32, 6);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#f1f5f9";
            ctx.font = "bold 8.5px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(box.txt, box.x, box.y + 3);
            ctx.textAlign = "left";

            // Green checkmark
            ctx.fillStyle = "#10b981";
            ctx.beginPath();
            ctx.arc(box.x + 60, box.y - 12, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.font = "5px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("✓", box.x + 60, box.y - 10);
            ctx.textAlign = "left";
        });

        // Fast particle
        blueprintT += 0.012;
        if (blueprintT > 1) blueprintT = 0;
        let pidx = Math.floor(blueprintT * 4);
        let pt = (blueprintT * 4) % 1;
        let pStart = boxes[pidx];
        let pEnd = boxes[pidx + 1];
        if (pEnd) {
            let px = pStart.x + (pEnd.x - pStart.x) * pt;
            let py = pStart.y + (pEnd.y - pStart.y) * pt;
            ctx.fillStyle = "#10b981";
            ctx.shadowColor = "#10b981";
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
}

// ------------------------------------------
// DRAW QFD / HOUSE OF QUALITY MATRIX
// ------------------------------------------
function drawQFDVisual(ctx, w, h) {
    let startX = 220;
    let startY = 120;
    let cellW = 110;
    let cellH = 50;

    const whats = [
        "Fast Provisioning",
        "Error-Free Scripting",
        "Budget Compliance",
        "Role-Based Safety"
    ];

    const hows = overlayVisAgentic ? [
        "AI Intent Parsing",
        "Auto Policy Check",
        "Cloudify Blueprints",
        "Terraform State Sync"
    ] : [
        "Manual HCL Editing",
        "Engineer Experience",
        "Manual SLA Checks",
        "Spreadsheet Auditing"
    ];

    // 1. Draw Triangular Correlation Roof at the Top
    let roofTopX = startX + (cellW * 2);
    let roofTopY = 30;
    
    ctx.fillStyle = "rgba(15, 23, 42, 0.6)";
    ctx.strokeStyle = overlayVisAgentic ? "rgba(16, 185, 129, 0.4)" : "rgba(244, 63, 94, 0.4)";
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
    ctx.fillText(overlayVisAgentic ? "CORRELATION ROOF: POSITIVE SYNERGY (+)" : "CORRELATION ROOF: HIGH CONFLICT (❌)", roofTopX, roofTopY + 45);

    // 2. Draw Column Headers (HOWs)
    hows.forEach((how, j) => {
        let x = startX + (j * cellW);
        let y = startY;

        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.strokeStyle = "rgba(51, 65, 85, 0.6)";
        ctx.beginPath();
        ctx.roundRect(x, y, cellW, cellH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f1f5f9";
        ctx.font = "bold 8.5px Outfit";
        ctx.textAlign = "center";
        ctx.fillText(how, x + cellW / 2, y + cellH / 2 + 3);
    });

    // 3. Draw Row Headers (WHATs) and Matrix Body
    whats.forEach((what, i) => {
        let y = startY + cellH + (i * cellH);

        // Row header
        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.strokeStyle = "rgba(51, 65, 85, 0.6)";
        ctx.beginPath();
        ctx.roundRect(30, y, startX - 40, cellH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 9px Outfit";
        ctx.textAlign = "left";
        ctx.fillText(what, 45, y + cellH / 2 + 3);

        // Body Cells
        hows.forEach((how, j) => {
            let x = startX + (j * cellW);

            ctx.fillStyle = "rgba(15, 23, 42, 0.5)";
            ctx.strokeStyle = "rgba(51, 65, 85, 0.3)";
            ctx.beginPath();
            ctx.roundRect(x, y, cellW, cellH, 2);
            ctx.fill();
            ctx.stroke();

            // Symbols logic
            let symbol = "○";
            let color = "#94a3b8";

            if (overlayVisAgentic) {
                symbol = "⊙"; // Strong
                color = "#10b981";
            } else {
                if ((i === 0 && j === 0) || (i === 1 && j === 3)) {
                    symbol = "∆"; // Weak / Friction
                    color = "#f43f5e";
                }
            }

            ctx.fillStyle = color;
            ctx.font = "bold 14px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(symbol, x + cellW / 2, y + cellH / 2 + 5);
        });
    });

    ctx.textAlign = "left";
}

// ------------------------------------------
// DRAW OVERLAY QUEUEING DYNAMICS
// ------------------------------------------
function drawQueueVisual(ctx, w, h) {
    if (!overlayVisAgentic) {
        // TRADITIONAL M/M/1 MODEL
        if (Math.random() < 0.015 && traditionalQueue.length < 15) {
            traditionalQueue.push({
                id: Math.random(),
                age: 0,
                x: 100,
                y: h / 2,
                balking: false,
                balkTimer: 0
            });
        }

        if (!traditionalServerBusy && traditionalQueue.length > 0) {
            traditionalServerBusy = true;
            traditionalServerProgress = 0;
        }

        if (traditionalServerBusy) {
            traditionalServerProgress += 0.5;
            if (traditionalServerProgress >= 100) {
                traditionalServerBusy = false;
                traditionalQueue.shift();
                traditionalTotalProcessed++;
            }
        }

        traditionalQueue.forEach((req, idx) => {
            req.age += 1;
            if (idx > 4 && req.age > 400 && Math.random() < 0.005 && !req.balking) {
                req.balking = true;
            }
        });

        // Draw Server Node
        ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
        ctx.strokeStyle = traditionalServerBusy ? "#eab308" : "#f43f5e";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(600, h / 2, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f1f5f9";
        ctx.font = "bold 9px Outfit";
        ctx.textAlign = "center";
        ctx.fillText(traditionalServerBusy ? "BUSY (100%)" : "IDLE", 600, h / 2 + 3);
        ctx.font = "8px sans-serif";
        ctx.fillText("👨‍💻 DevOps", 600, h / 2 + 15);

        if (traditionalServerBusy) {
            ctx.strokeStyle = "#eab308";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(600, h / 2, 35, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * (traditionalServerProgress / 100)));
            ctx.stroke();
        }

        traditionalQueue.forEach((req, idx) => {
            let targetX = 500 - (idx * 25);
            let targetY = h / 2;

            req.x += (targetX - req.x) * 0.1;
            req.y += (targetY - req.y) * 0.1;

            if (req.balking) {
                req.y -= 3;
                req.x -= 1;
                req.balkTimer += 1;
                
                ctx.fillStyle = "#ef4444";
                ctx.font = "12px sans-serif";
                ctx.fillText("😡", req.x, req.y - 12);
                
                if (req.balkTimer > 60) {
                    traditionalQueue.splice(idx, 1);
                    traditionalTotalBalked++;
                    return;
                }
            }

            ctx.fillStyle = req.balking ? "#f97316" : "#f43f5e";
            ctx.beginPath();
            ctx.arc(req.x, req.y, 8, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 10px Outfit";
        ctx.textAlign = "left";
        ctx.fillText(`QUEUE SIZE (Lq): ${traditionalQueue.length} requests`, 50, 50);
        ctx.fillText(`WAITING TIME (Wq): High / Growing`, 50, 70);
        ctx.fillText(`PROCESSED: ${traditionalTotalProcessed}`, 50, 90);
        ctx.fillText(`BALKED (Reneging): ${traditionalTotalBalked}`, 50, 110);
        
        ctx.fillStyle = "rgba(244, 63, 94, 0.4)";
        ctx.fillText("M/M/1 Ticketing Bottleneck", 50, 350);

    } else {
        // AI ORCHESTRATION DYNAMIC CAPACITY (M/M/∞)
        if (Math.random() < 0.05 && agenticQueue.length < 10) {
            agenticQueue.push({
                id: Math.random(),
                x: 100,
                y: h / 2,
                processed: false
            });
        }

        agenticQueue.forEach((req, idx) => {
            if (!req.processed) {
                let idleServer = agenticServers.find(s => !s.busy);
                if (idleServer) {
                    idleServer.busy = true;
                    idleServer.progress = 0;
                    idleServer.currentId = req.id;
                    req.processed = true;
                    agenticQueue.splice(idx, 1);
                }
            }
        });

        agenticServers.forEach((server, sIdx) => {
            let sx = 580;
            let sy = 80 + (sIdx * 80);

            if (server.busy) {
                server.progress += 4.5;
                if (server.progress >= 100) {
                    server.busy = false;
                    server.progress = 0;
                    server.currentId = null;
                    agenticTotalProcessed++;
                }
            }

            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.strokeStyle = server.busy ? "#10b981" : "rgba(16, 185, 129, 0.2)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(sx, sy, 22, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#f1f5f9";
            ctx.font = "bold 8px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(server.busy ? "ACTIVE" : "IDLE", sx, sy + 3);
            ctx.font = "7px sans-serif";
            ctx.fillText(`⚙️ Node-${sIdx+1}`, sx, sy + 11);

            if (server.busy) {
                ctx.fillStyle = "#10b981";
                ctx.beginPath();
                let px = 450 + (sx - 450) * (server.progress / 100);
                let py = h / 2 + (sy - h / 2) * (server.progress / 100);
                ctx.arc(px, py, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        agenticQueue.forEach((req, idx) => {
            let targetX = 450 - (idx * 20);
            let targetY = h / 2;
            req.x += (targetX - req.x) * 0.15;
            req.y += (targetY - req.y) * 0.15;

            ctx.fillStyle = "#10b981";
            ctx.beginPath();
            ctx.arc(req.x, req.y, 6, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 10px Outfit";
        ctx.textAlign = "left";
        ctx.fillText(`QUEUE SIZE (Lq): ${agenticQueue.length} (Near Zero)`, 50, 50);
        ctx.fillText(`WAITING TIME (Wq): Instantaneous (Wq ≈ 0)`, 50, 70);
        ctx.fillText(`PROCESSED: ${agenticTotalProcessed}`, 50, 90);
        ctx.fillText(`BALKED (Reneging): 0 (Zero)`, 50, 110);
        
        ctx.fillStyle = "rgba(16, 185, 129, 0.4)";
        ctx.fillText("M/M/c Parallel Autoscaling API Nodes", 50, 350);
    }
}

// ==========================================
// 6. PIPELINE SIMULATIONS (PAGE 1 & 2 CANVAS)
// ==========================================
function startBaselineSimulation() {
    if (baselineSimActive) return;
    
    baselineSimActive = true;
    baselineProgress = 0;
    baselineSlaTimer = 0;

    resetNodeStatuses(false);
    updateNodeStatus("b1", "rose");

    if (baselineTimerInterval) clearInterval(baselineTimerInterval);
    baselineTimerInterval = setInterval(() => {
        if (baselineSimActive) {
            baselineSlaTimer += 0.1;
            document.getElementById("txt-baseline-sla").textContent = `Time Elapsed: ${baselineSlaTimer.toFixed(1)} Hours`;
        }
    }, 150);
}

function selectPromptPreset(text) {
    document.getElementById("ipt-agent-prompt").value = text;
}

function startAgenticSimulation() {
    if (agenticSimActive) return;
    
    let promptVal = document.getElementById("ipt-agent-prompt").value.trim();
    if (!promptVal) {
        promptVal = "Deploy standard workspace VM";
        document.getElementById("ipt-agent-prompt").value = promptVal;
    }

    agenticSimActive = true;
    agenticProgress = 0;

    resetNodeStatuses(true);
    updateNodeStatus("a1", "emerald");

    const consoleEl = document.getElementById("div-agent-console");
    consoleEl.innerHTML = "";
    logMessage("INTENT PARSER", `Received request: "${promptVal}"`);
}

function logMessage(sub, msg) {
    const consoleEl = document.getElementById("div-agent-console");
    consoleEl.innerHTML += `<div class="mb-1"><span class="text-cyan-400 font-bold">[${sub}]</span> ${msg}</div>`;
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

function resetNodeStatuses(isAgentic) {
    const prefix = isAgentic ? "a" : "b";
    for(let i=1; i<=5; i++) {
        const dot = document.querySelector(`[data-node="${prefix}${i}"] .node-status-dot`);
        if(dot) {
            dot.className = "node-status-dot absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-600";
        }
    }
}

function updateNodeStatus(nodeId, colorClass) {
    const dot = document.querySelector(`[data-node="${nodeId}"] .node-status-dot`);
    if(dot) {
        if(colorClass === "rose") {
            dot.className = "node-status-dot absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse";
        } else if(colorClass === "yellow") {
            dot.className = "node-status-dot absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-yellow-pulsing";
        } else if(colorClass === "emerald") {
            dot.className = "node-status-dot absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse";
        }
    }
}

function animationLoop() {
    const canvasB = document.getElementById("canvas-flow-baseline");
    const canvasA = document.getElementById("canvas-flow-agentic");

    if (canvasB && activeTab === "baseline") {
        const ctx = canvasB.getContext("2d");
        ctx.clearRect(0, 0, canvasB.width, canvasB.height);
        
        if (baselineSimActive) {
            baselineProgress += 0.2;

            let segment = Math.floor(baselineProgress / 20);
            let t = (baselineProgress % 20) / 20;

            if (segment >= 4) {
                baselineSimActive = false;
                clearInterval(baselineTimerInterval);
                updateNodeStatus("b5", "rose");
                alert(`Traditional provisioning completed! Total Time Elapsed: ${baselineSlaTimer.toFixed(1)} Hours.`);
            } else {
                let startPos = getNodeCoordinates(segment, canvasB.width, canvasB.height);
                let endPos = getNodeCoordinates(segment + 1, canvasB.width, canvasB.height);
                
                let px = startPos.x + (endPos.x - startPos.x) * t;
                let py = startPos.y + (endPos.y - startPos.y) * t;

                if (segment === 1) {
                    updateNodeStatus("b2", "yellow");
                } else if (segment === 2) {
                    updateNodeStatus("b3", "yellow");
                } else if (segment === 3) {
                    updateNodeStatus("b4", "yellow");
                }

                ctx.fillStyle = "#f43f5e";
                ctx.shadowColor = "#f43f5e";
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    if (canvasA && activeTab === "agentic") {
        const ctx = canvasA.getContext("2d");
        ctx.clearRect(0, 0, canvasA.width, canvasA.height);
        
        if (agenticSimActive) {
            agenticProgress += 1.5;

            let segment = Math.floor(agenticProgress / 20);
            let t = (agenticProgress % 20) / 20;

            if (segment >= 4) {
                agenticSimActive = false;
                updateNodeStatus("a5", "emerald");
                logMessage("TELEMETRY", "Workspace environment is verified and active. Policy check: OK.");
            } else {
                let startPos = getNodeCoordinates(segment, canvasA.width, canvasA.height);
                let endPos = getNodeCoordinates(segment + 1, canvasA.width, canvasA.height);
                
                let px = startPos.x + (endPos.x - startPos.x) * t;
                let py = startPos.y + (endPos.y - startPos.y) * t;

                if (segment === 1 && t < 0.1) {
                    updateNodeStatus("a2", "emerald");
                    logMessage("AI AGENT", "Parsing requirements... selecting Cloudify Blueprint.");
                } else if (segment === 2 && t < 0.1) {
                    updateNodeStatus("a3", "emerald");
                    logMessage("POLICY", "Scanning budget boundaries and compliance guardrails... access ALLOWED.");
                } else if (segment === 3 && t < 0.1) {
                    updateNodeStatus("a4", "emerald");
                    logMessage("CLOUDIFY", "REST API call dispatched. Initiating Terraform state run.");
                }

                ctx.fillStyle = "#10b981";
                ctx.shadowColor = "#10b981";
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    requestAnimationFrame(animationLoop);
}

function getNodeCoordinates(nodeIndex, canvasW, canvasH) {
    let step = canvasW / 5;
    let x = step * nodeIndex + step / 2;
    let y = canvasH / 2;
    return {x: x, y: y};
}

// ==========================================
// 7. PAGE 3: COMPARISON MATRIX TABULATION
// ==========================================
function renderMatrixTable() {
    const tbody = document.getElementById("matrix-tbody");
    tbody.innerHTML = "";

    somDatabase.forEach(item => {
        if (matrixFilterCategory !== "all" && item.module !== matrixFilterCategory) {
            return;
        }

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-900/30 transition-colors border-b border-slate-900";
        tr.innerHTML = `
            <td class="py-3 px-3 font-semibold font-outfit text-slate-200">
                <span class="block text-[8px] uppercase tracking-wider text-slate-500 font-extrabold mb-0.5">${item.module}</span>
                ${item.aspect}
            </td>
            <td class="py-3 px-3 text-slate-400 leading-normal pr-4">${item.traditional}</td>
            <td class="py-3 px-3 text-slate-350 leading-normal pr-4">${item.orchestrated}</td>
            <td class="py-3 px-3 text-cyan-400 font-semibold pr-3">${item.advantage}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================
// 8. CHART.JS COMPARATIVE RADAR
// ==========================================
function initRadarChart() {
    const ctx = document.getElementById("radarChart").getContext("2d");
    
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Blueprint Adaptability', 'Interactions Friction', 'Layout Transparency', 'Compliance checks', 'Process Control', 'Labor Productivity', 'SLA Adherence'],
            datasets: [
                {
                    label: 'Traditional Paradigm',
                    data: [25, 80, 20, 15, 30, 15, 35],
                    borderColor: '#f43f5e',
                    backgroundColor: 'rgba(244, 63, 94, 0.08)',
                    borderWidth: 2,
                    pointRadius: 2
                },
                {
                    label: 'AI Agent + Cloudify',
                    data: [95, 10, 95, 98, 92, 95, 98],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    borderWidth: 2,
                    pointRadius: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#94a3b8',
                        font: {
                            family: 'Outfit',
                            size: 10,
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(51, 65, 85, 0.2)'
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.2)'
                    },
                    pointLabels: {
                        color: '#64748b',
                        font: {
                            family: 'Outfit',
                            size: 9
                        }
                    },
                    ticks: {
                        display: false,
                        maxTicksLimit: 5
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}
