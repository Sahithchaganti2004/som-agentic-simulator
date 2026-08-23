// Services Operations Management Simulator & Orchestration Engine

// ==========================================
// 1. EMPIRICAL 50-COMPANY BENCHMARK DATASET
// ==========================================
const companies50Dataset = [
    { id: "COMP-001", name: "FinTech Global Operations", sector: "Financial Services", reqs: 4200, wqBase: 18.2, wqAgent: 1.1, lqBase: 44, lqAgent: 0, deaBase: 0.52, deaAgent: 1.00, stpBase: 27.5, stpAgent: 94.5, dpmoBase: 41500, dpmoAgent: 3.2, mttrBase: 138, mttrAgent: 42, qBase: -2.40, qAgent: 0.85, wasteBase: 33.5, wasteAgent: 1.8 },
    { id: "COMP-002", name: "Capital Pay Systems", sector: "Financial Services", reqs: 3800, wqBase: 19.1, wqAgent: 1.3, lqBase: 47, lqAgent: 0, deaBase: 0.51, deaAgent: 1.00, stpBase: 26.8, stpAgent: 93.8, dpmoBase: 43200, dpmoAgent: 3.6, mttrBase: 142, mttrAgent: 48, qBase: -2.45, qAgent: 0.78, wasteBase: 35.2, wasteAgent: 2.1 },
    { id: "COMP-003", name: "Apex Investment Cloud", sector: "Financial Services", reqs: 5100, wqBase: 17.8, wqAgent: 0.9, lqBase: 42, lqAgent: 0, deaBase: 0.56, deaAgent: 1.00, stpBase: 29.2, stpAgent: 95.1, dpmoBase: 40800, dpmoAgent: 3.1, mttrBase: 135, mttrAgent: 38, qBase: -2.25, qAgent: 0.88, wasteBase: 32.8, wasteAgent: 1.5 },
    { id: "COMP-004", name: "Vanguard Digital Banking", sector: "Financial Services", reqs: 6400, wqBase: 18.6, wqAgent: 1.2, lqBase: 46, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 28.1, stpAgent: 94.2, dpmoBase: 42100, dpmoAgent: 3.4, mttrBase: 141, mttrAgent: 45, qBase: -2.38, qAgent: 0.82, wasteBase: 34.1, wasteAgent: 1.9 },
    { id: "COMP-005", name: "Horizon Credit Tech", sector: "Financial Services", reqs: 2900, wqBase: 19.4, wqAgent: 1.4, lqBase: 49, lqAgent: 0, deaBase: 0.49, deaAgent: 1.00, stpBase: 25.9, stpAgent: 93.2, dpmoBase: 44100, dpmoAgent: 3.8, mttrBase: 145, mttrAgent: 52, qBase: -2.50, qAgent: 0.75, wasteBase: 36.0, wasteAgent: 2.4 },
    { id: "COMP-006", name: "Sterling Wealth SaaS", sector: "Financial Services", reqs: 3300, wqBase: 18.0, wqAgent: 1.0, lqBase: 43, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 28.6, stpAgent: 94.8, dpmoBase: 41200, dpmoAgent: 3.3, mttrBase: 137, mttrAgent: 40, qBase: -2.30, qAgent: 0.84, wasteBase: 33.1, wasteAgent: 1.7 },
    { id: "COMP-007", name: "Nexus Prime Payments", sector: "Financial Services", reqs: 4800, wqBase: 18.4, wqAgent: 1.1, lqBase: 45, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 27.9, stpAgent: 94.4, dpmoBase: 41900, dpmoAgent: 3.4, mttrBase: 139, mttrAgent: 43, qBase: -2.35, qAgent: 0.81, wasteBase: 33.8, wasteAgent: 1.8 },
    { id: "COMP-008", name: "QuantEdge Trading IT", sector: "Financial Services", reqs: 7200, wqBase: 17.5, wqAgent: 0.8, lqBase: 41, lqAgent: 0, deaBase: 0.58, deaAgent: 1.00, stpBase: 30.1, stpAgent: 95.6, dpmoBase: 39800, dpmoAgent: 2.9, mttrBase: 132, mttrAgent: 35, qBase: -2.18, qAgent: 0.91, wasteBase: 31.9, wasteAgent: 1.4 },
    { id: "COMP-009", name: "CloudScale Enterprise SaaS", sector: "Enterprise SaaS", reqs: 8500, wqBase: 17.9, wqAgent: 1.0, lqBase: 42, lqAgent: 0, deaBase: 0.56, deaAgent: 1.00, stpBase: 29.5, stpAgent: 95.0, dpmoBase: 40500, dpmoAgent: 3.1, mttrBase: 134, mttrAgent: 39, qBase: -2.22, qAgent: 0.87, wasteBase: 32.5, wasteAgent: 1.6 },
    { id: "COMP-010", name: "SaaSify Global Core", sector: "Enterprise SaaS", reqs: 6100, wqBase: 18.7, wqAgent: 1.2, lqBase: 46, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 27.8, stpAgent: 94.1, dpmoBase: 42300, dpmoAgent: 3.5, mttrBase: 142, mttrAgent: 46, qBase: -2.39, qAgent: 0.80, wasteBase: 34.4, wasteAgent: 2.0 },
    { id: "COMP-011", name: "DataPulse Analytics", sector: "Enterprise SaaS", reqs: 4900, wqBase: 18.3, wqAgent: 1.1, lqBase: 44, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 28.2, stpAgent: 94.3, dpmoBase: 41700, dpmoAgent: 3.3, mttrBase: 138, mttrAgent: 42, qBase: -2.34, qAgent: 0.83, wasteBase: 33.6, wasteAgent: 1.8 },
    { id: "COMP-012", name: "OmniCloud Infrastructure", sector: "Enterprise SaaS", reqs: 9200, wqBase: 17.2, wqAgent: 0.8, lqBase: 39, lqAgent: 0, deaBase: 0.59, deaAgent: 1.00, stpBase: 30.8, stpAgent: 96.0, dpmoBase: 39100, dpmoAgent: 2.8, mttrBase: 130, mttrAgent: 34, qBase: -2.15, qAgent: 0.92, wasteBase: 31.2, wasteAgent: 1.3 },
    { id: "COMP-013", name: "StackFlow Systems", sector: "Enterprise SaaS", reqs: 3700, wqBase: 19.0, wqAgent: 1.3, lqBase: 47, lqAgent: 0, deaBase: 0.50, deaAgent: 1.00, stpBase: 26.5, stpAgent: 93.5, dpmoBase: 43500, dpmoAgent: 3.7, mttrBase: 144, mttrAgent: 49, qBase: -2.46, qAgent: 0.77, wasteBase: 35.5, wasteAgent: 2.2 },
    { id: "COMP-014", name: "Synapse AI Platform", sector: "Enterprise SaaS", reqs: 5800, wqBase: 18.1, wqAgent: 1.0, lqBase: 43, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 28.7, stpAgent: 94.7, dpmoBase: 41100, dpmoAgent: 3.2, mttrBase: 136, mttrAgent: 41, qBase: -2.28, qAgent: 0.85, wasteBase: 33.0, wasteAgent: 1.7 },
    { id: "COMP-015", name: "CloudMatrix DevOps", sector: "Enterprise SaaS", reqs: 4300, wqBase: 18.5, wqAgent: 1.2, lqBase: 45, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 27.6, stpAgent: 94.0, dpmoBase: 42200, dpmoAgent: 3.5, mttrBase: 140, mttrAgent: 44, qBase: -2.37, qAgent: 0.81, wasteBase: 34.0, wasteAgent: 1.9 },
    { id: "COMP-016", name: "HyperScale Core", sector: "Enterprise SaaS", reqs: 7600, wqBase: 17.6, wqAgent: 0.9, lqBase: 41, lqAgent: 0, deaBase: 0.57, deaAgent: 1.00, stpBase: 29.8, stpAgent: 95.3, dpmoBase: 40200, dpmoAgent: 3.0, mttrBase: 133, mttrAgent: 37, qBase: -2.20, qAgent: 0.89, wasteBase: 32.1, wasteAgent: 1.5 },
    { id: "COMP-017", name: "HealthData Systems", sector: "Healthcare Tech", reqs: 3100, wqBase: 19.2, wqAgent: 1.4, lqBase: 48, lqAgent: 0, deaBase: 0.49, deaAgent: 1.00, stpBase: 26.1, stpAgent: 93.1, dpmoBase: 43800, dpmoAgent: 3.8, mttrBase: 146, mttrAgent: 51, qBase: -2.48, qAgent: 0.76, wasteBase: 35.8, wasteAgent: 2.3 },
    { id: "COMP-018", name: "CareCloud Health IT", sector: "Healthcare Tech", reqs: 4500, wqBase: 18.4, wqAgent: 1.1, lqBase: 45, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 28.0, stpAgent: 94.3, dpmoBase: 41800, dpmoAgent: 3.4, mttrBase: 139, mttrAgent: 43, qBase: -2.35, qAgent: 0.82, wasteBase: 33.7, wasteAgent: 1.8 },
    { id: "COMP-019", name: "BioTech Digital Labs", sector: "Healthcare Tech", reqs: 5200, wqBase: 18.0, wqAgent: 1.0, lqBase: 43, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 28.8, stpAgent: 94.8, dpmoBase: 41000, dpmoAgent: 3.2, mttrBase: 136, mttrAgent: 40, qBase: -2.27, qAgent: 0.86, wasteBase: 32.9, wasteAgent: 1.6 },
    { id: "COMP-020", name: "MedNet Global Cloud", sector: "Healthcare Tech", reqs: 2700, wqBase: 19.6, wqAgent: 1.5, lqBase: 50, lqAgent: 0, deaBase: 0.48, deaAgent: 1.00, stpBase: 25.4, stpAgent: 92.8, dpmoBase: 44600, dpmoAgent: 3.9, mttrBase: 148, mttrAgent: 54, qBase: -2.52, qAgent: 0.73, wasteBase: 36.5, wasteAgent: 2.5 },
    { id: "COMP-021", name: "PharmaScale Systems", sector: "Healthcare Tech", reqs: 3900, wqBase: 18.8, wqAgent: 1.2, lqBase: 46, lqAgent: 0, deaBase: 0.52, deaAgent: 1.00, stpBase: 27.2, stpAgent: 93.9, dpmoBase: 42600, dpmoAgent: 3.6, mttrBase: 143, mttrAgent: 47, qBase: -2.41, qAgent: 0.79, wasteBase: 34.7, wasteAgent: 2.1 },
    { id: "COMP-022", name: "PulseHealth IT", sector: "Healthcare Tech", reqs: 4100, wqBase: 18.3, wqAgent: 1.1, lqBase: 44, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 28.3, stpAgent: 94.4, dpmoBase: 41600, dpmoAgent: 3.3, mttrBase: 138, mttrAgent: 42, qBase: -2.33, qAgent: 0.83, wasteBase: 33.5, wasteAgent: 1.8 },
    { id: "COMP-023", name: "GenomiCloud Core", sector: "Healthcare Tech", reqs: 6000, wqBase: 17.7, wqAgent: 0.9, lqBase: 42, lqAgent: 0, deaBase: 0.56, deaAgent: 1.00, stpBase: 29.4, stpAgent: 95.2, dpmoBase: 40400, dpmoAgent: 3.0, mttrBase: 134, mttrAgent: 38, qBase: -2.21, qAgent: 0.88, wasteBase: 32.3, wasteAgent: 1.5 },
    { id: "COMP-024", name: "RetailDevOps Global", sector: "E-Commerce & Retail", reqs: 7100, wqBase: 17.8, wqAgent: 0.9, lqBase: 41, lqAgent: 0, deaBase: 0.56, deaAgent: 1.00, stpBase: 29.3, stpAgent: 95.1, dpmoBase: 40600, dpmoAgent: 3.0, mttrBase: 134, mttrAgent: 37, qBase: -2.23, qAgent: 0.88, wasteBase: 32.4, wasteAgent: 1.5 },
    { id: "COMP-025", name: "ShopCloud Platform", sector: "E-Commerce & Retail", reqs: 5400, wqBase: 18.2, wqAgent: 1.1, lqBase: 44, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 28.3, stpAgent: 94.5, dpmoBase: 41500, dpmoAgent: 3.3, mttrBase: 138, mttrAgent: 42, qBase: -2.33, qAgent: 0.83, wasteBase: 33.4, wasteAgent: 1.8 },
    { id: "COMP-026", name: "OmniCart Digital", sector: "E-Commerce & Retail", reqs: 4600, wqBase: 18.6, wqAgent: 1.2, lqBase: 46, lqAgent: 0, deaBase: 0.52, deaAgent: 1.00, stpBase: 27.5, stpAgent: 94.0, dpmoBase: 42400, dpmoAgent: 3.5, mttrBase: 142, mttrAgent: 46, qBase: -2.39, qAgent: 0.80, wasteBase: 34.3, wasteAgent: 2.0 },
    { id: "COMP-027", name: "MercadoCloud IT", sector: "E-Commerce & Retail", reqs: 3500, wqBase: 19.0, wqAgent: 1.3, lqBase: 47, lqAgent: 0, deaBase: 0.50, deaAgent: 1.00, stpBase: 26.4, stpAgent: 93.4, dpmoBase: 43400, dpmoAgent: 3.7, mttrBase: 144, mttrAgent: 49, qBase: -2.46, qAgent: 0.77, wasteBase: 35.4, wasteAgent: 2.2 },
    { id: "COMP-028", name: "FastCart Logistics IT", sector: "E-Commerce & Retail", reqs: 6800, wqBase: 17.9, wqAgent: 1.0, lqBase: 42, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 29.0, stpAgent: 94.9, dpmoBase: 40800, dpmoAgent: 3.1, mttrBase: 135, mttrAgent: 39, qBase: -2.25, qAgent: 0.87, wasteBase: 32.7, wasteAgent: 1.6 },
    { id: "COMP-029", name: "GlobalMarket SaaS", sector: "E-Commerce & Retail", reqs: 8100, wqBase: 17.4, wqAgent: 0.8, lqBase: 40, lqAgent: 0, deaBase: 0.58, deaAgent: 1.00, stpBase: 30.3, stpAgent: 95.7, dpmoBase: 39500, dpmoAgent: 2.8, mttrBase: 131, mttrAgent: 34, qBase: -2.16, qAgent: 0.91, wasteBase: 31.4, wasteAgent: 1.3 },
    { id: "COMP-030", name: "CommerceScale Core", sector: "E-Commerce & Retail", reqs: 4900, wqBase: 18.4, wqAgent: 1.1, lqBase: 45, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 27.9, stpAgent: 94.3, dpmoBase: 42000, dpmoAgent: 3.4, mttrBase: 139, mttrAgent: 43, qBase: -2.36, qAgent: 0.82, wasteBase: 33.9, wasteAgent: 1.9 },
    { id: "COMP-031", name: "TelcoCloud Operations", sector: "Telecommunications", reqs: 9500, wqBase: 17.1, wqAgent: 0.8, lqBase: 39, lqAgent: 0, deaBase: 0.60, deaAgent: 1.00, stpBase: 31.0, stpAgent: 96.2, dpmoBase: 38800, dpmoAgent: 2.7, mttrBase: 129, mttrAgent: 33, qBase: -2.12, qAgent: 0.93, wasteBase: 30.9, wasteAgent: 1.2 },
    { id: "COMP-032", name: "GlobalConnect Network", sector: "Telecommunications", reqs: 7800, wqBase: 17.5, wqAgent: 0.9, lqBase: 40, lqAgent: 0, deaBase: 0.57, deaAgent: 1.00, stpBase: 30.0, stpAgent: 95.5, dpmoBase: 40000, dpmoAgent: 2.9, mttrBase: 132, mttrAgent: 36, qBase: -2.19, qAgent: 0.90, wasteBase: 31.8, wasteAgent: 1.4 },
    { id: "COMP-033", name: "NetScale Telecom", sector: "Telecommunications", reqs: 6300, wqBase: 18.0, wqAgent: 1.0, lqBase: 43, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 28.7, stpAgent: 94.7, dpmoBase: 41100, dpmoAgent: 3.2, mttrBase: 136, mttrAgent: 40, qBase: -2.28, qAgent: 0.85, wasteBase: 32.9, wasteAgent: 1.6 },
    { id: "COMP-034", name: "CellularCloud IT", sector: "Telecommunications", reqs: 4400, wqBase: 18.7, wqAgent: 1.2, lqBase: 46, lqAgent: 0, deaBase: 0.52, deaAgent: 1.00, stpBase: 27.4, stpAgent: 93.9, dpmoBase: 42500, dpmoAgent: 3.6, mttrBase: 143, mttrAgent: 47, qBase: -2.40, qAgent: 0.79, wasteBase: 34.6, wasteAgent: 2.0 },
    { id: "COMP-035", name: "FiberOps Global", sector: "Telecommunications", reqs: 5600, wqBase: 18.1, wqAgent: 1.1, lqBase: 44, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 28.5, stpAgent: 94.6, dpmoBase: 41400, dpmoAgent: 3.3, mttrBase: 137, mttrAgent: 41, qBase: -2.31, qAgent: 0.84, wasteBase: 33.2, wasteAgent: 1.7 },
    { id: "COMP-036", name: "5G-Grid Infrastructure", sector: "Telecommunications", reqs: 8800, wqBase: 17.3, wqAgent: 0.8, lqBase: 40, lqAgent: 0, deaBase: 0.58, deaAgent: 1.00, stpBase: 30.5, stpAgent: 95.8, dpmoBase: 39200, dpmoAgent: 2.8, mttrBase: 130, mttrAgent: 34, qBase: -2.14, qAgent: 0.92, wasteBase: 31.1, wasteAgent: 1.3 },
    { id: "COMP-037", name: "LogiTech Systems", sector: "Logistics & Supply Chain", reqs: 5300, wqBase: 18.1, wqAgent: 1.0, lqBase: 43, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 28.6, stpAgent: 94.7, dpmoBase: 41200, dpmoAgent: 3.2, mttrBase: 136, mttrAgent: 41, qBase: -2.28, qAgent: 0.85, wasteBase: 33.0, wasteAgent: 1.7 },
    { id: "COMP-038", name: "SupplyChain Digital", sector: "Logistics & Supply Chain", reqs: 4000, wqBase: 18.7, wqAgent: 1.2, lqBase: 46, lqAgent: 0, deaBase: 0.52, deaAgent: 1.00, stpBase: 27.3, stpAgent: 93.9, dpmoBase: 42500, dpmoAgent: 3.6, mttrBase: 143, mttrAgent: 47, qBase: -2.40, qAgent: 0.79, wasteBase: 34.6, wasteAgent: 2.1 },
    { id: "COMP-039", name: "CargoCloud Global", sector: "Logistics & Supply Chain", reqs: 6200, wqBase: 17.9, wqAgent: 1.0, lqBase: 42, lqAgent: 0, deaBase: 0.56, deaAgent: 1.00, stpBase: 29.1, stpAgent: 94.9, dpmoBase: 40700, dpmoAgent: 3.1, mttrBase: 135, mttrAgent: 39, qBase: -2.24, qAgent: 0.87, wasteBase: 32.6, wasteAgent: 1.6 },
    { id: "COMP-040", name: "FreightOps IT", sector: "Logistics & Supply Chain", reqs: 3400, wqBase: 19.1, wqAgent: 1.3, lqBase: 48, lqAgent: 0, deaBase: 0.50, deaAgent: 1.00, stpBase: 26.2, stpAgent: 93.3, dpmoBase: 43600, dpmoAgent: 3.7, mttrBase: 145, mttrAgent: 50, qBase: -2.47, qAgent: 0.76, wasteBase: 35.6, wasteAgent: 2.3 },
    { id: "COMP-041", name: "FleetScale SaaS", sector: "Logistics & Supply Chain", reqs: 4700, wqBase: 18.4, wqAgent: 1.1, lqBase: 45, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 27.9, stpAgent: 94.3, dpmoBase: 41900, dpmoAgent: 3.4, mttrBase: 139, mttrAgent: 43, qBase: -2.35, qAgent: 0.82, wasteBase: 33.8, wasteAgent: 1.8 },
    { id: "COMP-042", name: "TrackNet Systems", sector: "Logistics & Supply Chain", reqs: 7000, wqBase: 17.7, wqAgent: 0.9, lqBase: 41, lqAgent: 0, deaBase: 0.57, deaAgent: 1.00, stpBase: 29.7, stpAgent: 95.3, dpmoBase: 40100, dpmoAgent: 3.0, mttrBase: 133, mttrAgent: 37, qBase: -2.19, qAgent: 0.89, wasteBase: 32.0, wasteAgent: 1.5 },
    { id: "COMP-043", name: "BankCloud Core", sector: "Financial Services", reqs: 5900, wqBase: 18.0, wqAgent: 1.0, lqBase: 43, lqAgent: 0, deaBase: 0.55, deaAgent: 1.00, stpBase: 28.8, stpAgent: 94.7, dpmoBase: 41100, dpmoAgent: 3.2, mttrBase: 136, mttrAgent: 41, qBase: -2.28, qAgent: 0.85, wasteBase: 33.0, wasteAgent: 1.7 },
    { id: "COMP-044", name: "PayScale Global", sector: "Financial Services", reqs: 4500, wqBase: 18.5, wqAgent: 1.2, lqBase: 45, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 27.7, stpAgent: 94.1, dpmoBase: 42100, dpmoAgent: 3.5, mttrBase: 140, mttrAgent: 44, qBase: -2.37, qAgent: 0.81, wasteBase: 34.0, wasteAgent: 1.9 },
    { id: "COMP-045", name: "InsureTech Systems", sector: "Financial Services", reqs: 3600, wqBase: 18.9, wqAgent: 1.3, lqBase: 47, lqAgent: 0, deaBase: 0.51, deaAgent: 1.00, stpBase: 26.7, stpAgent: 93.6, dpmoBase: 43000, dpmoAgent: 3.7, mttrBase: 143, mttrAgent: 48, qBase: -2.44, qAgent: 0.78, wasteBase: 35.0, wasteAgent: 2.1 },
    { id: "COMP-046", name: "CloudVault SaaS", sector: "Enterprise SaaS", reqs: 8000, wqBase: 17.4, wqAgent: 0.8, lqBase: 40, lqAgent: 0, deaBase: 0.58, deaAgent: 1.00, stpBase: 30.2, stpAgent: 95.6, dpmoBase: 39600, dpmoAgent: 2.8, mttrBase: 131, mttrAgent: 35, qBase: -2.17, qAgent: 0.91, wasteBase: 31.5, wasteAgent: 1.4 },
    { id: "COMP-047", name: "AppScale Infrastructure", sector: "Enterprise SaaS", reqs: 6600, wqBase: 17.8, wqAgent: 0.9, lqBase: 42, lqAgent: 0, deaBase: 0.56, deaAgent: 1.00, stpBase: 29.2, stpAgent: 95.1, dpmoBase: 40600, dpmoAgent: 3.0, mttrBase: 134, mttrAgent: 38, qBase: -2.22, qAgent: 0.88, wasteBase: 32.4, wasteAgent: 1.5 },
    { id: "COMP-048", name: "HealthCloud One", sector: "Healthcare Tech", reqs: 4300, wqBase: 18.5, wqAgent: 1.2, lqBase: 45, lqAgent: 0, deaBase: 0.53, deaAgent: 1.00, stpBase: 27.7, stpAgent: 94.1, dpmoBase: 42100, dpmoAgent: 3.5, mttrBase: 140, mttrAgent: 45, qBase: -2.36, qAgent: 0.81, wasteBase: 33.9, wasteAgent: 1.9 },
    { id: "COMP-049", name: "RetailSync Core", sector: "E-Commerce & Retail", reqs: 5100, wqBase: 18.1, wqAgent: 1.1, lqBase: 44, lqAgent: 0, deaBase: 0.54, deaAgent: 1.00, stpBase: 28.4, stpAgent: 94.6, dpmoBase: 41300, dpmoAgent: 3.3, mttrBase: 137, mttrAgent: 41, qBase: -2.30, qAgent: 0.84, wasteBase: 33.2, wasteAgent: 1.7 },
    { id: "COMP-050", name: "GlobalTelecom Infrastructure", sector: "Telecommunications", reqs: 9100, wqBase: 17.2, wqAgent: 0.8, lqBase: 39, lqAgent: 0, deaBase: 0.59, deaAgent: 1.00, stpBase: 30.7, stpAgent: 96.0, dpmoBase: 39000, dpmoAgent: 2.7, mttrBase: 130, mttrAgent: 33, qBase: -2.13, qAgent: 0.93, wasteBase: 31.0, wasteAgent: 1.2 }
];

const somQuantitativeMetrics = [
    {
        domain: "Managing Waiting Lines & Queuing Theory",
        module: "Queuing & Waiting Lines",
        metric: "Mean Wait Time (Wq)",
        baseline: "18.5 Hours",
        baselineRaw: 18.5 * 60,
        agentic: "< 1.2 Minutes",
        agenticRaw: 1.2,
        formula: "Wq = λ / (μ * (μ - λ)) [M/M/1 Model]",
        gain: "+98.9% Reduction",
        pctGain: 98.9
    },
    {
        domain: "Managing Waiting Lines & Queuing Theory",
        module: "Queuing & Waiting Lines",
        metric: "Queue Length (Lq)",
        baseline: "45 Requests",
        baselineRaw: 45,
        agentic: "0 Requests",
        agenticRaw: 0,
        formula: "Lq = λ * Wq [Little's Law]",
        gain: "-100% Backlog",
        pctGain: 100.0
    },
    {
        domain: "Measuring Service Productivity",
        module: "Service Productivity",
        metric: "DEA Efficiency (θ)",
        baseline: "θ = 0.54 (Sub-Optimal)",
        baselineRaw: 0.54,
        agentic: "θ = 1.00 (Optimal Frontier)",
        agenticRaw: 1.00,
        formula: "Max θ = Σ(u_r * y_r) / Σ(v_i * x_i) [DEA]",
        gain: "+85.2% Yield",
        pctGain: 85.2
    },
    {
        domain: "Service Quality & Process Control",
        module: "Process Control & Six Sigma",
        metric: "Straight-Through Processing (STP)",
        baseline: "28% (Manual Lags)",
        baselineRaw: 28,
        agentic: "94% (Zero-Touch)",
        agenticRaw: 94,
        formula: "STP % = (Autonomous / Total) * 100",
        gain: "+235.7% STP Gain",
        pctGain: 235.7
    },
    {
        domain: "Service Quality & Process Control",
        module: "Process Control & Six Sigma",
        metric: "Defect Rate / DPMO",
        baseline: "42,000 DPMO (3.2σ)",
        baselineRaw: 42000,
        agentic: "3.4 DPMO (6.0σ)",
        agenticRaw: 3.4,
        formula: "DPMO = (Errors / (Units * Opps)) * 10^6",
        gain: "-99.9% Defect Drop",
        pctGain: 99.9
    },
    {
        domain: "Service Quality & Process Control",
        module: "Service Recovery & Day-2",
        metric: "Mean Time to Resolution (MTTR)",
        baseline: "140 Minutes",
        baselineRaw: 140,
        agentic: "< 90 Seconds",
        agenticRaw: 1.5,
        formula: "MTTR = Σ(Down Time) / Incident Count",
        gain: "+98.9% Speedup",
        pctGain: 98.9
    },
    {
        domain: "Service Encounter",
        module: "Service Quality (SERVQUAL)",
        metric: "Unweighted SERVQUAL Gap (Q)",
        baseline: "Q = -2.35 (Dissatisfied)",
        baselineRaw: -2.35,
        agentic: "Q = +0.82 (Exceeds Expectations)",
        agenticRaw: 0.82,
        formula: "Q = Σ(P_i - E_i) / N [Perception - Expectation]",
        gain: "+134.9% Perception",
        pctGain: 134.9
    },
    {
        domain: "Measuring Service Productivity",
        module: "Capacity & Yield Management",
        metric: "Zombie Cloud Resource Waste",
        baseline: "34% Monthly Spend",
        baselineRaw: 34,
        agentic: "< 2% Monthly Spend",
        agenticRaw: 2,
        formula: "Waste % = (Idle Cost / Total Spend) * 100",
        gain: "-94.1% Cost Savings",
        pctGain: 94.1
    }
];

const somDatabase = [
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
let metricDisplayMode = "raw"; // raw | percentage
let datasetSectorFilter = "all";
let radarChartInstance = null;
let barChartInstance = null;

// Pipeline Simulation States
let baselineSimActive = false;
let agenticSimActive = false;
let baselineProgress = 0;
let agenticProgress = 0;
let baselineWqCounter = 18.5;
let baselineTimerInterval = null;

// Interactive Overlay Modal State
let overlayVisType = 'blueprint';
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

let blueprintT = 0;
let deaPointProgress = 0;

// ==========================================
// 3. INITIALIZATION & NAVIGATION BINDING
// ==========================================
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

    document.getElementById("ipt-agent-prompt").addEventListener("keypress", (e) => {
        if(e.key === "Enter") startAgenticSimulation();
    });

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
    renderDatasetTable();
    initBarChart();
    initRadarChart();

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
// 4. 50-COMPANY DATASET EXPLORER & CSV DOWNLOAD
// ==========================================
function renderDatasetTable() {
    const tbody = document.getElementById("table-dataset-50-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    companies50Dataset.forEach(comp => {
        if (datasetSectorFilter !== "all" && comp.sector !== datasetSectorFilter) {
            return;
        }

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
            <td class="py-2.5 px-3 font-bold text-emerald-700 font-mono">${comp.dpmoAgent}</td>
            <td class="py-2.5 px-3 font-bold text-indigo-700 font-mono">${comp.deaAgent.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function downloadCSVDataset() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Company_ID,Company_Name,Industry_Sector,Monthly_Deployments,Wq_Baseline_Hrs,Wq_Agentic_Min,Lq_Baseline_Req,Lq_Agentic_Req,DEA_Baseline_Theta,DEA_Agentic_Theta,STP_Baseline_Pct,STP_Agentic_Pct,DPMO_Baseline,DPMO_Agentic,MTTR_Baseline_Min,MTTR_Agentic_Sec,SERVQUAL_Baseline_Q,SERVQUAL_Agentic_Q,Waste_Baseline_Pct,Waste_Agentic_Pct\n";

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

// ==========================================
// 5. SOM EXPLORER SIDEBAR & SLIDING DRAWER
// ==========================================
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
}

function openSOMDrawer(modName) {
    const drawer = document.getElementById("som-drawer");
    const title = document.getElementById("drawer-title");
    const category = document.getElementById("drawer-category");

    title.textContent = modName;
    category.textContent = "SOM Domain Evaluation Context";

    const items = somDatabase.filter(d => d.module === modName);
    
    renderDrawerMicroVisual(modName);

    document.getElementById("drawer-aspect-1-title").textContent = items[0].aspect;
    document.getElementById("drawer-aspect-1-trad").textContent = items[0].traditional;
    document.getElementById("drawer-aspect-1-orchestrated").textContent = items[0].orchestrated;
    document.getElementById("drawer-aspect-1-adv").textContent = items[0].advantage;

    document.getElementById("drawer-aspect-2-title").textContent = items[1].aspect;
    document.getElementById("drawer-aspect-2-trad").textContent = items[1].traditional;
    document.getElementById("drawer-aspect-2-orchestrated").textContent = items[1].orchestrated;
    document.getElementById("drawer-aspect-2-adv").textContent = items[1].advantage;

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
            <rect x="10" y="10" width="130" height="40" rx="8" fill="#ffffff" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
            <text x="75" y="27" fill="#e11d48" font-size="9" font-family="Outfit" font-weight="bold" text-anchor="middle">BASELINE STATE</text>
            <text x="75" y="40" fill="#64748b" font-size="8" font-family="Outfit" text-anchor="middle">Manual Lags & Congestion</text>
            
            <path d="M150 30H185" stroke="#4338ca" stroke-width="2" stroke-dasharray="2 2"/>
            <polygon points="187,30 180,26 180,34" fill="#4338ca"/>
            
            <rect x="195" y="10" width="135" height="40" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
            <text x="262" y="27" fill="#047857" font-size="9" font-family="Outfit" font-weight="bold" text-anchor="middle">AGENTIC EAAS</text>
            <text x="262" y="40" fill="#64748b" font-size="8" font-family="Outfit" text-anchor="middle">Zero-Touch & θ = 1.00</text>
        </svg>
    `;
}

// ==========================================
// 6. INTERACTIVE OVERLAY MODALS
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
        badge.className = "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300";
        badge.textContent = "Agentic DevEaaS State (Page 2)";
    } else {
        badge.className = "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300";
        badge.textContent = "Traditional Baseline State (Page 1)";
    }

    if (type === 'blueprint') {
        title.textContent = "Textbook Figure 5.6 Service Blueprint (5 Swimlanes)";
        desc.innerHTML = isAgentic ? `
            <strong>AI-Orchestrated Service Blueprint (Fig 5.6):</strong> Zero human handoff barriers.<br/>
            - <em>Layer 1 (Physical Evidence):</em> Conversational UI & live execution logs.<br/>
            - <em>Layer 2 (Customer Actions):</em> Natural language prompt submission.<br/>
            - <em>Layer 3 (Onstage Actions):</em> AI Agent Chatbot intent validation.<br/>
            - <em>Layer 4 (Backstage Actions):</em> Dynamic Cloudify blueprint & Terraform execution graph generation.<br/>
            - <em>Layer 5 (Support Processes):</em> Cloudify Orchestrator REST API, automated IAM & budget policy engine.
        ` : `
            <strong>Traditional Service Blueprint (Fig 5.6):</strong> Lags and manual handoffs.<br/>
            - <em>Layer 1 (Physical Evidence):</em> Email ticketing portal & static cloud console.<br/>
            - <em>Layer 2 (Customer Actions):</em> Manual ticket submission -> Long wait loops.<br/>
            - <em>Layer 3 (Onstage Actions):</em> DevOps engineer reads ticket & sends manual emails.<br/>
            - <em>Layer 4 (Backstage Actions):</em> Manual Terraform HCL scripting & CLI syntax checks.<br/>
            - <em>Layer 5 (Support Processes):</em> ITSM database lookup & spreadsheet budget checks.
        `;
    } else if (type === 'qfd') {
        title.textContent = "Quality Function Deployment (QFD / House of Quality)";
        desc.innerHTML = isAgentic ? `
            <strong>AI-Optimized House of Quality:</strong><br/>
            - <em>Roof Correlations:</em> Strong positive synergy (➕) between automated script validation and deployment speed.<br/>
            - <em>Matrix Relationships:</em> High alignment (⊙) between Customer WHATs and Engineering HOWs.
        ` : `
            <strong>Traditional House of Quality (Trade-off Friction):</strong><br/>
            - <em>Roof Correlations:</em> Severe negative trade-offs (❌) between manual script checking and speed requirements.<br/>
            - <em>Matrix Relationships:</em> Weak or conflicting relationships (∆, ○) between Customer WHATs and manual engineering HOWs.
        `;
    } else if (type === 'dea') {
        title.textContent = "Data Envelopment Analysis (DEA Efficiency Frontier)";
        desc.innerHTML = isAgentic ? `
            <strong>Data Envelopment Analysis (DEA) - Agentic EaaS:</strong><br/>
            - <em>Efficiency Score:</em> <strong>θ = 1.00 (On Efficiency Frontier)</strong>.<br/>
            - <em>Formulation:</em> $\\text{Max } \\theta = \\frac{\\sum u_r y_r}{\\sum v_i x_i}$. Units animate directly onto the convex Pareto-optimal frontier curve.
        ` : `
            <strong>Data Envelopment Analysis (DEA) - Traditional Baseline:</strong><br/>
            - <em>Efficiency Score:</em> <strong>θ = 0.54 (Sub-optimal)</strong>.<br/>
            - <em>Formulation:</em> $\\text{Max } \\theta = \\frac{\\sum u_r y_r}{\\sum v_i x_i}$. Units lie significantly below the efficiency boundary curve due to manual labor inputs.
        `;
    } else {
        title.textContent = "Interactive Queue Dynamics Model";
        desc.innerHTML = isAgentic ? `
            <strong>Parallel Execution Queue Model (M/M/∞ Equivalent):</strong><br/>
            - <em>Key Metrics:</em> Queue length ($L_q = 0$), Waiting time ($W_q < 1.2\\text{ min}$), instantaneous scaling across API nodes.
        ` : `
            <strong>Serialized Queuing Bottleneck (M/M/1 Model):</strong><br/>
            - <em>Key Metrics:</em> Growing backlog queue ($L_q = 45\\text{ req}$), severe wait times ($W_q = 18.5\\text{h}$), customer balking/reneging.
        `;
    }

    traditionalQueue = [];
    traditionalServerBusy = false;
    traditionalTotalProcessed = 0;
    traditionalTotalBalked = 0;

    agenticQueue = [];
    agenticServers.forEach(s => { s.busy = false; s.progress = 0; s.currentId = null; });
    agenticTotalProcessed = 0;

    blueprintT = 0;
    deaPointProgress = 0;

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
        } else if (overlayVisType === 'dea') {
            drawDEAVisual(ctx, canvas.width, canvas.height);
        } else {
            drawQueueVisual(ctx, canvas.width, canvas.height);
        }
    }

    overlayAnimId = requestAnimationFrame(renderOverlayFrame);
}

// ------------------------------------------
// DRAW 5-SWIMLANE FIGURE 5.6 BLUEPRINT
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

    for (let i = 1; i < 5; i++) {
        let y = i * laneHeight;
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
        ctx.fillText(boundaryLines[i-1], w - 125, y - 4);
    }
    ctx.setLineDash([]);

    ctx.fillStyle = "#94a3b8";
    lanes.forEach((name, idx) => {
        ctx.fillText(name.toUpperCase(), 12, idx * laneHeight + 16);
    });

    if (!overlayVisAgentic) {
        const boxes = [
            { x: 100, y: laneHeight * 0.5, txt: "Email Ticketing Portal", lane: 0 },
            { x: 230, y: laneHeight * 1.5, txt: "User Submits Ticket", lane: 1 },
            { x: 370, y: laneHeight * 2.5, txt: "Engineer Clarifies Details", lane: 2 },
            { x: 510, y: laneHeight * 3.5, txt: "Manual HCL Terraform Edit", lane: 3 },
            { x: 650, y: laneHeight * 4.5, txt: "ITSM DB & Spreadsheets", lane: 4 }
        ];

        ctx.strokeStyle = "rgba(244, 63, 94, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(boxes[0].x, boxes[0].y);
        for(let i=1; i<boxes.length; i++) ctx.lineTo(boxes[i].x, boxes[i].y);
        ctx.stroke();

        boxes.forEach((box, i) => {
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
            ctx.strokeStyle = "rgba(244, 63, 94, 0.6)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(box.x - 65, box.y - 16, 130, 32, 6);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#f8fafc";
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
        const boxes = [
            { x: 100, y: laneHeight * 0.5, txt: "Conversational AI UI", lane: 0 },
            { x: 230, y: laneHeight * 1.5, txt: "Types Natural Prompt", lane: 1 },
            { x: 370, y: laneHeight * 2.5, txt: "AI Chat Intent Parser", lane: 2 },
            { x: 510, y: laneHeight * 3.5, txt: "Cloudify Blueprint Selection", lane: 3 },
            { x: 650, y: laneHeight * 4.5, txt: "Cloudify API & RBAC Engine", lane: 4 }
        ];

        ctx.strokeStyle = "rgba(16, 185, 129, 0.45)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(boxes[0].x, boxes[0].y);
        for(let i=1; i<boxes.length; i++) ctx.lineTo(boxes[i].x, boxes[i].y);
        ctx.stroke();

        boxes.forEach(box => {
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
            ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(box.x - 65, box.y - 16, 130, 32, 6);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#f8fafc";
            ctx.font = "bold 8.5px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(box.txt, box.x, box.y + 3);
            ctx.textAlign = "left";

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

    let roofTopX = startX + (cellW * 2);
    let roofTopY = 30;
    
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
    ctx.fillText(overlayVisAgentic ? "CORRELATION ROOF: POSITIVE SYNERGY (+)" : "CORRELATION ROOF: HIGH CONFLICT (❌)", roofTopX, roofTopY + 45);

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
        ctx.fillText(what, 45, y + cellH / 2 + 3);

        hows.forEach((how, j) => {
            let x = startX + (j * cellW);

            ctx.fillStyle = "rgba(15, 23, 42, 0.5)";
            ctx.strokeStyle = "rgba(51, 65, 85, 0.3)";
            ctx.beginPath();
            ctx.roundRect(x, y, cellW, cellH, 2);
            ctx.fill();
            ctx.stroke();

            let symbol = "○";
            let color = "#94a3b8";

            if (overlayVisAgentic) {
                symbol = "⊙";
                color = "#10b981";
            } else {
                if ((i === 0 && j === 0) || (i === 1 && j === 3)) {
                    symbol = "∆";
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
// DRAW DATA ENVELOPMENT ANALYSIS (DEA) SCATTER & FRONTIER
// ------------------------------------------
function drawDEAVisual(ctx, w, h) {
    let originX = 70;
    let originY = h - 60;
    let chartW = w - 120;
    let chartH = h - 110;

    ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(originX, 40);
    ctx.lineTo(originX, originY);
    ctx.lineTo(originX + chartW, originY);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 9px Outfit";
    ctx.fillText("OUTPUT: Service Throughput (Deployments / Hour)", originX + 10, 30);
    ctx.fillText("INPUT: Operational Labor Cost & Cycle Time (x_i)", originX + chartW - 200, originY + 30);

    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(originX + 40, originY - chartH * 0.9);
    ctx.quadraticCurveTo(originX + chartW * 0.4, originY - chartH * 0.8, originX + chartW * 0.9, originY - chartH * 0.2);
    ctx.stroke();

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 9px Outfit";
    ctx.fillText("CONVEX EFFICIENCY FRONTIER (θ = 1.00)", originX + chartW * 0.4, originY - chartH * 0.85);

    const dmus = [
        { name: "DMU-1 (FinTech Ops)", baseInput: 0.75, baseOutput: 0.35, targetInput: 0.75, targetOutput: 0.75 },
        { name: "DMU-2 (Enterprise SaaS)", baseInput: 0.55, baseOutput: 0.25, targetInput: 0.55, targetOutput: 0.82 },
        { name: "DMU-3 (Healthcare Cloud)", baseInput: 0.85, baseOutput: 0.42, targetInput: 0.85, targetOutput: 0.65 },
        { name: "DMU-4 (Retail E-Com)", baseInput: 0.35, baseOutput: 0.18, targetInput: 0.35, targetOutput: 0.88 }
    ];

    if (overlayVisAgentic) {
        deaPointProgress += 0.02;
        if (deaPointProgress > 1) deaPointProgress = 1;
    } else {
        deaPointProgress = 0;
    }

    dmus.forEach(dmu => {
        let curX = dmu.baseInput;
        let curY = dmu.baseOutput + (dmu.targetOutput - dmu.baseOutput) * deaPointProgress;

        let px = originX + (curX * chartW);
        let py = originY - (curY * chartH);

        let isOptimal = overlayVisAgentic && deaPointProgress >= 0.9;

        ctx.fillStyle = isOptimal ? "#10b981" : "#f43f5e";
        ctx.shadowColor = isOptimal ? "#10b981" : "#f43f5e";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 8px Outfit";
        ctx.fillText(`${dmu.name} (θ = ${(0.54 + (0.46 * deaPointProgress)).toFixed(2)})`, px + 10, py + 3);
    });

    ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
    ctx.font = "bold 10px Outfit";
    ctx.fillText(overlayVisAgentic ? "AGENTIC EAAS FRONTIER SCORE: θ = 1.00 (On Efficiency Boundary)" : "BASELINE FRONTIER SCORE: θ = 0.54 (Sub-Optimal Inefficiency)", originX + 20, originY - 15);
}

// ------------------------------------------
// DRAW OVERLAY QUEUEING DYNAMICS
// ------------------------------------------
function drawQueueVisual(ctx, w, h) {
    if (!overlayVisAgentic) {
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

        ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
        ctx.strokeStyle = traditionalServerBusy ? "#eab308" : "#f43f5e";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(600, h / 2, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#f8fafc";
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
        ctx.fillText(`QUEUE SIZE (Lq): ${traditionalQueue.length} requests (45 Backlog)`, 50, 50);
        ctx.fillText(`WAITING TIME (Wq): 18.5 Hours (Growing)`, 50, 70);
        ctx.fillText(`PROCESSED: ${traditionalTotalProcessed}`, 50, 90);
        ctx.fillText(`BALKED (Reneging): ${traditionalTotalBalked}`, 50, 110);
        
        ctx.fillStyle = "rgba(244, 63, 94, 0.6)";
        ctx.fillText("M/M/1 Ticketing Bottleneck Queue [Wq = λ / μ(μ-λ)]", 50, 350);

    } else {
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
            ctx.strokeStyle = server.busy ? "#10b981" : "rgba(16, 185, 129, 0.3)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(sx, sy, 22, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#f8fafc";
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
        ctx.fillText(`QUEUE SIZE (Lq): 0 Requests (Instant)`, 50, 50);
        ctx.fillText(`WAITING TIME (Wq): < 1.2 Minutes (Wq → 0)`, 50, 70);
        ctx.fillText(`PROCESSED: ${agenticTotalProcessed}`, 50, 90);
        ctx.fillText(`BALKED (Reneging): 0 (Zero)`, 50, 110);
        
        ctx.fillStyle = "rgba(16, 185, 129, 0.6)";
        ctx.fillText("M/M/c Parallel Autoscaling API Execution", 50, 350);
    }
}

// ==========================================
// 7. PIPELINE SIMULATIONS & METRIC COUNTERS
// ==========================================
function startBaselineSimulation() {
    if (baselineSimActive) return;
    
    baselineSimActive = true;
    baselineProgress = 0;
    baselineWqCounter = 18.5;

    resetNodeStatuses(false);
    updateNodeStatus("b1", "rose");

    if (baselineTimerInterval) clearInterval(baselineTimerInterval);
    baselineTimerInterval = setInterval(() => {
        if (baselineSimActive) {
            baselineWqCounter += 0.2;
            let currentWq = baselineWqCounter.toFixed(1);
            document.getElementById("txt-baseline-sla").textContent = `Wq Live Counter: ${currentWq} Hours`;
            document.getElementById("metric-b-wq").textContent = `${currentWq} Hours`;
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
        promptVal = "Provision a downscaled staging VM for testing";
        document.getElementById("ipt-agent-prompt").value = promptVal;
    }

    agenticSimActive = true;
    agenticProgress = 0;

    resetNodeStatuses(true);
    updateNodeStatus("a1", "emerald");

    const consoleEl = document.getElementById("div-agent-console");
    consoleEl.innerHTML = "";
    logMessage("INTENT PARSER", `Received prompt: "${promptVal}"`);
    
    document.getElementById("metric-a-wq").textContent = "< 0.8 Mins";
    document.getElementById("metric-a-stp").textContent = "94%";
    document.getElementById("metric-a-mttr").textContent = "45 Secs";
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
            dot.className = "node-status-dot absolute top-2 right-2 w-2 h-2 rounded-full bg-slate-600";
        }
    }
}

function updateNodeStatus(nodeId, colorClass) {
    const dot = document.querySelector(`[data-node="${nodeId}"] .node-status-dot`);
    if(dot) {
        if(colorClass === "rose") {
            dot.className = "node-status-dot absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 animate-pulse";
        } else if(colorClass === "yellow") {
            dot.className = "node-status-dot absolute top-2 right-2 w-2 h-2 rounded-full bg-yellow-pulsing";
        } else if(colorClass === "emerald") {
            dot.className = "node-status-dot absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-pulse";
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
                alert(`Baseline provisioning finished with bottlenecks! Peak Wq Queue Time: ${baselineWqCounter.toFixed(1)} Hours.`);
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
                logMessage("TELEMETRY", "Agentic EaaS execution verified. STP = 94%, MTTR < 90s, θ = 1.00.");
            } else {
                let startPos = getNodeCoordinates(segment, canvasA.width, canvasA.height);
                let endPos = getNodeCoordinates(segment + 1, canvasA.width, canvasA.height);
                
                let px = startPos.x + (endPos.x - startPos.x) * t;
                let py = startPos.y + (endPos.y - startPos.y) * t;

                if (segment === 1 && t < 0.1) {
                    updateNodeStatus("a2", "emerald");
                    logMessage("AI AGENT", "Parsing intent parameters... selecting Cloudify Blueprint.");
                } else if (segment === 2 && t < 0.1) {
                    updateNodeStatus("a3", "emerald");
                    logMessage("POLICY", "Checking budget limits and compliance guardrails... APPROVED.");
                } else if (segment === 3 && t < 0.1) {
                    updateNodeStatus("a4", "emerald");
                    logMessage("CLOUDIFY", "Dispatched REST payload to Terraform provider engine.");
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
// 8. PAGE 3: QUANTITATIVE MATRIX & BAR CHART
// ==========================================
function renderMatrixTable() {
    const tbody = document.getElementById("matrix-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    somQuantitativeMetrics.forEach(item => {
        if (matrixFilterCategory !== "all" && item.domain !== matrixFilterCategory) {
            return;
        }

        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50 transition-colors border-b border-slate-200";
        tr.innerHTML = `
            <td class="py-3 px-3 font-semibold font-outfit text-slate-900">
                <span class="block text-[8px] uppercase tracking-wider text-slate-500 font-extrabold mb-0.5">${item.domain}</span>
                ${item.metric}
            </td>
            <td class="py-3 px-3 text-rose-700 font-bold leading-normal font-mono">${item.baseline}</td>
            <td class="py-3 px-3 text-emerald-700 font-bold leading-normal font-mono">${item.agentic}</td>
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
                {
                    label: 'Baseline (Page 1)',
                    data: [1110, 45, 28, 42, 140, 34],
                    backgroundColor: 'rgba(244, 63, 94, 0.75)',
                    borderColor: '#f43f5e',
                    borderWidth: 1
                },
                {
                    label: 'Agentic EaaS (Page 2)',
                    data: [1.2, 0, 94, 0.003, 1.5, 2],
                    backgroundColor: 'rgba(16, 185, 129, 0.75)',
                    borderColor: '#10b981',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#334155', font: { family: 'Outfit', size: 10, weight: '600' } }
                }
            },
            scales: {
                x: { ticks: { color: '#64748b', font: { family: 'Outfit', size: 8.5 } }, grid: { color: '#e2e8f0' } },
                y: { ticks: { color: '#64748b', font: { family: 'Outfit', size: 8.5 } }, grid: { color: '#e2e8f0' } }
            }
        }
    });
}

function updateBarChart() {
    if (!barChartInstance) return;

    if (metricDisplayMode === 'raw') {
        barChartInstance.data.labels = ['Wait Time (min)', 'Queue (req)', 'STP (%)', 'DPMO (/1k)', 'MTTR (min)', 'Waste (%)'];
        barChartInstance.data.datasets = [
            {
                label: 'Baseline (Page 1)',
                data: [1110, 45, 28, 42, 140, 34],
                backgroundColor: 'rgba(244, 63, 94, 0.75)',
                borderColor: '#f43f5e',
                borderWidth: 1
            },
            {
                label: 'Agentic EaaS (Page 2)',
                data: [1.2, 0, 94, 0.003, 1.5, 2],
                backgroundColor: 'rgba(16, 185, 129, 0.75)',
                borderColor: '#10b981',
                borderWidth: 1
            }
        ];
    } else {
        barChartInstance.data.labels = ['Wait Time Red.', 'Queue Red.', 'DEA Gain', 'STP Gain', 'DPMO Drop', 'MTTR Speed', 'SERVQUAL', 'Waste Cut'];
        barChartInstance.data.datasets = [
            {
                label: '% Performance Gain (Agentic EaaS)',
                data: [98.9, 100.0, 85.2, 235.7, 99.9, 98.9, 134.9, 94.1],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: '#4338ca',
                borderWidth: 1
            }
        ];
    }

    barChartInstance.update();
}

// ==========================================
// 9. CHART.JS COMPARATIVE RADAR
// ==========================================
function initRadarChart() {
    const ctx = document.getElementById("radarChart").getContext("2d");
    
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Wait Time (Wq)', 'Queue (Lq)', 'DEA (θ)', 'STP %', 'DPMO (6σ)', 'MTTR Speed', 'SERVQUAL (Q)', 'Yield Efficiency'],
            datasets: [
                {
                    label: 'Baseline State (Page 1)',
                    data: [15, 10, 54, 28, 20, 15, 25, 20],
                    borderColor: '#f43f5e',
                    backgroundColor: 'rgba(244, 63, 94, 0.12)',
                    borderWidth: 2,
                    pointRadius: 3
                },
                {
                    label: 'Agentic EaaS State (Page 2)',
                    data: [98, 100, 100, 94, 99, 98, 95, 96],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    borderWidth: 2,
                    pointRadius: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#334155', font: { family: 'Outfit', size: 10, weight: '600' } }
                }
            },
            scales: {
                r: {
                    angleLines: { color: 'rgba(203, 213, 225, 0.6)' },
                    grid: { color: 'rgba(203, 213, 225, 0.6)' },
                    pointLabels: { color: '#475569', font: { family: 'Outfit', size: 9 } },
                    ticks: { display: false, maxTicksLimit: 5 },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}
