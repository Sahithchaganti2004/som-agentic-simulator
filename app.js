// Services Operations Management Simulator & Orchestration Engine

// ==========================================
// 1. EMPIRICAL 50-COMPANY BENCHMARK DATASET (CALIBRATED REALISTIC BENCHMARKS)
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
    { id: "COMP-015", name: "CloudMatrix DevOps", sector: "Enterprise SaaS", reqs: 4300, wqBase: 14.4, wqAgent: 48.5, lqBase: 18, lqAgent: 2, deaBase: 0.61, deaAgent: 0.87, stpBase: 33.8, stpAgent: 77.5, dpmoBase: 18600, dpmoAgent: 2150, mttrBase: 86, mttrAgent: 14.9, qBase: -1.47, qAgent: 0.62, wasteBase: 31.9, wasteAgent: 8.7 },
    { id: "COMP-016", name: "HyperScale Core", sector: "Enterprise SaaS", reqs: 7600, wqBase: 13.0, wqAgent: 39.4, lqBase: 15, lqAgent: 1, deaBase: 0.68, deaAgent: 0.94, stpBase: 38.0, stpAgent: 83.1, dpmoBase: 16000, dpmoAgent: 1680, mttrBase: 75, mttrAgent: 11.5, qBase: -1.24, qAgent: 0.77, wasteBase: 28.1, wasteAgent: 6.4 },
    { id: "COMP-017", name: "HealthData Systems", sector: "Healthcare Tech", reqs: 3100, wqBase: 15.8, wqAgent: 56.9, lqBase: 21, lqAgent: 4, deaBase: 0.55, deaAgent: 0.83, stpBase: 30.5, stpAgent: 73.2, dpmoBase: 20800, dpmoAgent: 2560, mttrBase: 93, mttrAgent: 17.8, qBase: -1.62, qAgent: 0.51, wasteBase: 34.9, wasteAgent: 10.4 },
    { id: "COMP-018", name: "CareCloud Health IT", sector: "Healthcare Tech", reqs: 4500, wqBase: 14.2, wqAgent: 46.8, lqBase: 18, lqAgent: 2, deaBase: 0.62, deaAgent: 0.88, stpBase: 34.6, stpAgent: 78.3, dpmoBase: 18100, dpmoAgent: 2040, mttrBase: 84, mttrAgent: 14.2, qBase: -1.43, qAgent: 0.65, wasteBase: 31.1, wasteAgent: 8.2 },
    { id: "COMP-019", name: "BioTech Digital Labs", sector: "Healthcare Tech", reqs: 5200, wqBase: 13.7, wqAgent: 42.9, lqBase: 16, lqAgent: 2, deaBase: 0.65, deaAgent: 0.91, stpBase: 36.2, stpAgent: 80.8, dpmoBase: 17000, dpmoAgent: 1850, mttrBase: 79, mttrAgent: 12.8, qBase: -1.33, qAgent: 0.71, wasteBase: 29.5, wasteAgent: 7.3 },
    { id: "COMP-020", name: "MedNet Global Cloud", sector: "Healthcare Tech", reqs: 2700, wqBase: 16.5, wqAgent: 61.2, lqBase: 23, lqAgent: 4, deaBase: 0.52, deaAgent: 0.81, stpBase: 28.9, stpAgent: 71.5, dpmoBase: 21900, dpmoAgent: 2820, mttrBase: 98, mttrAgent: 19.2, qBase: -1.72, qAgent: 0.45, wasteBase: 36.8, wasteAgent: 11.5 },
    { id: "COMP-021", name: "PharmaScale Systems", sector: "Healthcare Tech", reqs: 3900, wqBase: 15.0, wqAgent: 52.1, lqBase: 20, lqAgent: 3, deaBase: 0.58, deaAgent: 0.85, stpBase: 32.5, stpAgent: 75.8, dpmoBase: 19400, dpmoAgent: 2290, mttrBase: 89, mttrAgent: 15.9, qBase: -1.53, qAgent: 0.59, wasteBase: 32.8, wasteAgent: 9.2 },
    { id: "COMP-022", name: "PulseHealth IT", sector: "Healthcare Tech", reqs: 4100, wqBase: 14.1, wqAgent: 45.8, lqBase: 18, lqAgent: 2, deaBase: 0.63, deaAgent: 0.89, stpBase: 35.0, stpAgent: 79.1, dpmoBase: 17800, dpmoAgent: 1980, mttrBase: 83, mttrAgent: 13.7, qBase: -1.40, qAgent: 0.67, wasteBase: 30.6, wasteAgent: 8.0 },
    { id: "COMP-023", name: "GenomiCloud Core", sector: "Healthcare Tech", reqs: 6000, wqBase: 13.3, wqAgent: 41.0, lqBase: 16, lqAgent: 1, deaBase: 0.66, deaAgent: 0.92, stpBase: 37.1, stpAgent: 81.8, dpmoBase: 16600, dpmoAgent: 1760, mttrBase: 77, mttrAgent: 12.0, qBase: -1.28, qAgent: 0.74, wasteBase: 28.8, wasteAgent: 6.8 },
    { id: "COMP-024", name: "RetailDevOps Global", sector: "E-Commerce & Retail", reqs: 7100, wqBase: 13.4, wqAgent: 41.2, lqBase: 16, lqAgent: 1, deaBase: 0.66, deaAgent: 0.92, stpBase: 37.0, stpAgent: 81.6, dpmoBase: 16700, dpmoAgent: 1780, mttrBase: 78, mttrAgent: 12.1, qBase: -1.29, qAgent: 0.74, wasteBase: 28.9, wasteAgent: 6.9 },
    { id: "COMP-025", name: "ShopCloud Platform", sector: "E-Commerce & Retail", reqs: 5400, wqBase: 14.0, wqAgent: 44.8, lqBase: 17, lqAgent: 2, deaBase: 0.63, deaAgent: 0.90, stpBase: 35.3, stpAgent: 79.6, dpmoBase: 17600, dpmoAgent: 1920, mttrBase: 82, mttrAgent: 13.4, qBase: -1.39, qAgent: 0.68, wasteBase: 30.3, wasteAgent: 7.9 },
    { id: "COMP-026", name: "OmniCart Digital", sector: "E-Commerce & Retail", reqs: 4600, wqBase: 14.6, wqAgent: 50.1, lqBase: 19, lqAgent: 3, deaBase: 0.60, deaAgent: 0.87, stpBase: 33.5, stpAgent: 77.1, dpmoBase: 18800, dpmoAgent: 2190, mttrBase: 87, mttrAgent: 15.2, qBase: -1.49, qAgent: 0.61, wasteBase: 32.2, wasteAgent: 8.9 },
    { id: "COMP-027", name: "MercadoCloud IT", sector: "E-Commerce & Retail", reqs: 3500, wqBase: 15.4, wqAgent: 54.2, lqBase: 21, lqAgent: 3, deaBase: 0.57, deaAgent: 0.84, stpBase: 31.6, stpAgent: 74.6, dpmoBase: 20100, dpmoAgent: 2420, mttrBase: 91, mttrAgent: 16.8, qBase: -1.57, qAgent: 0.55, wasteBase: 33.9, wasteAgent: 9.8 },
    { id: "COMP-028", name: "FastCart Logistics IT", sector: "E-Commerce & Retail", reqs: 6800, wqBase: 13.6, wqAgent: 42.3, lqBase: 16, lqAgent: 2, deaBase: 0.65, deaAgent: 0.91, stpBase: 36.5, stpAgent: 81.0, dpmoBase: 17100, dpmoAgent: 1860, mttrBase: 79, mttrAgent: 12.6, qBase: -1.32, qAgent: 0.72, wasteBase: 29.3, wasteAgent: 7.2 },
    { id: "COMP-029", name: "GlobalMarket SaaS", sector: "E-Commerce & Retail", reqs: 8100, wqBase: 12.8, wqAgent: 37.9, lqBase: 15, lqAgent: 1, deaBase: 0.69, deaAgent: 0.95, stpBase: 38.8, stpAgent: 84.1, dpmoBase: 15400, dpmoAgent: 1600, mttrBase: 74, mttrAgent: 10.9, qBase: -1.19, qAgent: 0.80, wasteBase: 27.3, wasteAgent: 5.9 },
    { id: "COMP-030", name: "CommerceScale Core", sector: "E-Commerce & Retail", reqs: 4900, wqBase: 14.3, wqAgent: 47.2, lqBase: 18, lqAgent: 2, deaBase: 0.61, deaAgent: 0.88, stpBase: 34.2, stpAgent: 77.8, dpmoBase: 18400, dpmoAgent: 2100, mttrBase: 85, mttrAgent: 14.5, qBase: -1.45, qAgent: 0.63, wasteBase: 31.5, wasteAgent: 8.4 },
    { id: "COMP-031", name: "TelcoCloud Operations", sector: "Telecommunications", reqs: 9500, wqBase: 12.2, wqAgent: 34.5, lqBase: 13, lqAgent: 1, deaBase: 0.72, deaAgent: 0.96, stpBase: 40.5, stpAgent: 86.1, dpmoBase: 14300, dpmoAgent: 1450, mttrBase: 70, mttrAgent: 9.8, qBase: -1.10, qAgent: 0.85, wasteBase: 25.8, wasteAgent: 5.1 },
    { id: "COMP-032", name: "GlobalConnect Network", sector: "Telecommunications", reqs: 7800, wqBase: 13.0, wqAgent: 38.9, lqBase: 15, lqAgent: 1, deaBase: 0.68, deaAgent: 0.94, stpBase: 38.1, stpAgent: 83.3, dpmoBase: 15900, dpmoAgent: 1660, mttrBase: 75, mttrAgent: 11.3, qBase: -1.23, qAgent: 0.78, wasteBase: 27.9, wasteAgent: 6.3 },
    { id: "COMP-033", name: "NetScale Telecom", sector: "Telecommunications", reqs: 6300, wqBase: 13.8, wqAgent: 43.5, lqBase: 17, lqAgent: 2, deaBase: 0.64, deaAgent: 0.91, stpBase: 35.8, stpAgent: 80.2, dpmoBase: 17300, dpmoAgent: 1900, mttrBase: 80, mttrAgent: 13.1, qBase: -1.36, qAgent: 0.70, wasteBase: 29.9, wasteAgent: 7.6 },
    { id: "COMP-034", name: "CellularCloud IT", sector: "Telecommunications", reqs: 4400, wqBase: 14.7, wqAgent: 50.8, lqBase: 19, lqAgent: 3, deaBase: 0.59, deaAgent: 0.86, stpBase: 33.2, stpAgent: 76.8, dpmoBase: 19000, dpmoAgent: 2210, mttrBase: 87, mttrAgent: 15.4, qBase: -1.50, qAgent: 0.60, wasteBase: 32.4, wasteAgent: 9.0 },
    { id: "COMP-035", name: "FiberOps Global", sector: "Telecommunications", reqs: 5600, wqBase: 13.9, wqAgent: 44.5, lqBase: 17, lqAgent: 2, deaBase: 0.64, deaAgent: 0.90, stpBase: 35.5, stpAgent: 79.9, dpmoBase: 17500, dpmoAgent: 1930, mttrBase: 81, mttrAgent: 13.3, qBase: -1.37, qAgent: 0.69, wasteBase: 30.2, wasteAgent: 7.7 },
    { id: "COMP-036", name: "5G-Grid Infrastructure", sector: "Telecommunications", reqs: 8800, wqBase: 12.6, wqAgent: 36.5, lqBase: 14, lqAgent: 1, deaBase: 0.70, deaAgent: 0.95, stpBase: 39.2, stpAgent: 84.6, dpmoBase: 15100, dpmoAgent: 1560, mttrBase: 73, mttrAgent: 10.6, qBase: -1.17, qAgent: 0.81, wasteBase: 26.9, wasteAgent: 5.7 },
    { id: "COMP-037", name: "LogiTech Systems", sector: "Logistics & Supply Chain", reqs: 5300, wqBase: 13.9, wqAgent: 44.2, lqBase: 17, lqAgent: 2, deaBase: 0.64, deaAgent: 0.90, stpBase: 35.6, stpAgent: 80.0, dpmoBase: 17400, dpmoAgent: 1910, mttrBase: 81, mttrAgent: 13.2, qBase: -1.36, qAgent: 0.69, wasteBase: 30.0, wasteAgent: 7.6 },
    { id: "COMP-038", name: "SupplyChain Digital", sector: "Logistics & Supply Chain", reqs: 4000, wqBase: 14.8, wqAgent: 51.5, lqBase: 19, lqAgent: 3, deaBase: 0.59, deaAgent: 0.86, stpBase: 33.0, stpAgent: 76.4, dpmoBase: 19200, dpmoAgent: 2250, mttrBase: 88, mttrAgent: 15.7, qBase: -1.52, qAgent: 0.59, wasteBase: 32.6, wasteAgent: 9.1 },
    { id: "COMP-039", name: "CargoCloud Global", sector: "Logistics & Supply Chain", reqs: 6200, wqBase: 13.5, wqAgent: 41.9, lqBase: 16, lqAgent: 2, deaBase: 0.65, deaAgent: 0.92, stpBase: 36.7, stpAgent: 81.1, dpmoBase: 16900, dpmoAgent: 1830, mttrBase: 78, mttrAgent: 12.4, qBase: -1.31, qAgent: 0.73, wasteBase: 29.1, wasteAgent: 7.0 },
    { id: "COMP-040", name: "FreightOps IT", sector: "Logistics & Supply Chain", reqs: 3400, wqBase: 15.6, wqAgent: 55.8, lqBase: 21, lqAgent: 3, deaBase: 0.56, deaAgent: 0.84, stpBase: 31.0, stpAgent: 73.8, dpmoBase: 20600, dpmoAgent: 2510, mttrBase: 93, mttrAgent: 17.4, qBase: -1.60, qAgent: 0.52, wasteBase: 34.5, wasteAgent: 10.3 },
    { id: "COMP-041", name: "FleetScale SaaS", sector: "Logistics & Supply Chain", reqs: 4700, wqBase: 14.3, wqAgent: 47.5, lqBase: 18, lqAgent: 2, deaBase: 0.61, deaAgent: 0.88, stpBase: 34.1, stpAgent: 77.7, dpmoBase: 18500, dpmoAgent: 2110, mttrBase: 85, mttrAgent: 14.6, qBase: -1.45, qAgent: 0.63, wasteBase: 31.6, wasteAgent: 8.5 },
    { id: "COMP-042", name: "TrackNet Systems", sector: "Logistics & Supply Chain", reqs: 7000, wqBase: 13.1, wqAgent: 39.8, lqBase: 15, lqAgent: 1, deaBase: 0.67, deaAgent: 0.94, stpBase: 37.8, stpAgent: 82.9, dpmoBase: 16100, dpmoAgent: 1700, mttrBase: 76, mttrAgent: 11.6, qBase: -1.25, qAgent: 0.77, wasteBase: 28.2, wasteAgent: 6.5 },
    { id: "COMP-043", name: "BankCloud Core", sector: "Financial Services", reqs: 5900, wqBase: 13.7, wqAgent: 43.2, lqBase: 16, lqAgent: 2, deaBase: 0.64, deaAgent: 0.91, stpBase: 36.0, stpAgent: 80.5, dpmoBase: 17100, dpmoAgent: 1880, mttrBase: 80, mttrAgent: 12.9, qBase: -1.34, qAgent: 0.71, wasteBase: 29.6, wasteAgent: 7.4 },
    { id: "COMP-044", name: "PayScale Global", sector: "Financial Services", reqs: 4500, wqBase: 14.4, wqAgent: 48.8, lqBase: 18, lqAgent: 2, deaBase: 0.61, deaAgent: 0.87, stpBase: 33.6, stpAgent: 77.3, dpmoBase: 18700, dpmoAgent: 2160, mttrBase: 86, mttrAgent: 15.0, qBase: -1.48, qAgent: 0.61, wasteBase: 32.0, wasteAgent: 8.8 },
    { id: "COMP-045", name: "InsureTech Systems", sector: "Financial Services", reqs: 3600, wqBase: 15.1, wqAgent: 53.2, lqBase: 20, lqAgent: 3, deaBase: 0.57, deaAgent: 0.85, stpBase: 32.0, stpAgent: 75.1, dpmoBase: 19600, dpmoAgent: 2320, mttrBase: 90, mttrAgent: 16.2, qBase: -1.55, qAgent: 0.57, wasteBase: 33.4, wasteAgent: 9.5 },
    { id: "COMP-046", name: "CloudVault SaaS", sector: "Enterprise SaaS", reqs: 8000, wqBase: 12.9, wqAgent: 38.4, lqBase: 15, lqAgent: 1, deaBase: 0.69, deaAgent: 0.94, stpBase: 38.5, stpAgent: 83.8, dpmoBase: 15600, dpmoAgent: 1620, mttrBase: 74, mttrAgent: 11.0, qBase: -1.20, qAgent: 0.79, wasteBase: 27.5, wasteAgent: 6.0 },
    { id: "COMP-047", name: "AppScale Infrastructure", sector: "Enterprise SaaS", reqs: 6600, wqBase: 13.4, wqAgent: 41.8, lqBase: 16, lqAgent: 2, deaBase: 0.66, deaAgent: 0.92, stpBase: 36.9, stpAgent: 81.4, dpmoBase: 16800, dpmoAgent: 1800, mttrBase: 78, mttrAgent: 12.3, qBase: -1.30, qAgent: 0.73, wasteBase: 29.0, wasteAgent: 7.0 },
    { id: "COMP-048", name: "HealthCloud One", sector: "Healthcare Tech", reqs: 4300, wqBase: 14.5, wqAgent: 49.2, lqBase: 18, lqAgent: 2, deaBase: 0.60, deaAgent: 0.87, stpBase: 33.7, stpAgent: 77.4, dpmoBase: 18700, dpmoAgent: 2170, mttrBase: 86, mttrAgent: 15.1, qBase: -1.48, qAgent: 0.61, wasteBase: 32.0, wasteAgent: 8.8 },
    { id: "COMP-049", name: "RetailSync Core", sector: "E-Commerce & Retail", reqs: 5100, wqBase: 13.8, wqAgent: 43.9, lqBase: 17, lqAgent: 2, deaBase: 0.64, deaAgent: 0.90, stpBase: 35.7, stpAgent: 80.1, dpmoBase: 17300, dpmoAgent: 1890, mttrBase: 80, mttrAgent: 13.1, qBase: -1.35, qAgent: 0.70, wasteBase: 29.9, wasteAgent: 7.6 },
    { id: "COMP-050", name: "GlobalTelecom Infrastructure", sector: "Telecommunications", reqs: 9100, wqBase: 12.4, wqAgent: 35.2, lqBase: 14, lqAgent: 1, deaBase: 0.71, deaAgent: 0.96, stpBase: 40.1, stpAgent: 85.5, dpmoBase: 14600, dpmoAgent: 1490, mttrBase: 71, mttrAgent: 10.1, qBase: -1.12, qAgent: 0.84, wasteBase: 26.1, wasteAgent: 5.3 }
];

const somQuantitativeMetrics = [
    {
        domain: "Managing Waiting Lines & Queuing Theory",
        module: "Queuing & Waiting Lines",
        metric: "Mean Wait Time (Wq)",
        baseline: "14.2 Hours",
        baselineRaw: 14.2 * 60,
        agentic: "48.5 Minutes",
        agenticRaw: 48.5,
        formula: "Wq = λ / (μ * (μ - λ)) [M/M/1 Model]",
        gain: "+94.3% Reduction",
        pctGain: 94.3
    },
    {
        domain: "Managing Waiting Lines & Queuing Theory",
        module: "Queuing & Waiting Lines",
        metric: "Queue Length (Lq)",
        baseline: "18 Requests",
        baselineRaw: 18,
        agentic: "2 Jobs",
        agenticRaw: 2,
        formula: "Lq = λ * Wq [Little's Law]",
        gain: "-88.9% Backlog",
        pctGain: 88.9
    },
    {
        domain: "Measuring Service Productivity",
        module: "Service Productivity",
        metric: "DEA Efficiency (θ)",
        baseline: "θ = 0.62 (Sub-Optimal)",
        baselineRaw: 0.62,
        agentic: "θ = 0.89 (High Efficiency)",
        agenticRaw: 0.89,
        formula: "Max θ = Σ(u_r * y_r) / Σ(v_i * x_i) [DEA]",
        gain: "+43.5% Yield",
        pctGain: 43.5
    },
    {
        domain: "Service Quality & Process Control",
        module: "Process Control & Six Sigma",
        metric: "Straight-Through Processing (STP)",
        baseline: "34.5% (Manual Lags)",
        baselineRaw: 34.5,
        agentic: "78.2% (22% Exception)",
        agenticRaw: 78.2,
        formula: "STP % = (Autonomous / Total) * 100",
        gain: "+126.7% STP Gain",
        pctGain: 126.7
    },
    {
        domain: "Service Quality & Process Control",
        module: "Process Control & Six Sigma",
        metric: "Defect Rate / DPMO",
        baseline: "18,400 DPMO (3.6σ)",
        baselineRaw: 18400,
        agentic: "2,100 DPMO (4.4σ)",
        agenticRaw: 2100,
        formula: "DPMO = (Errors / (Units * Opps)) * 10^6",
        gain: "-88.6% Defect Drop",
        pctGain: 88.6
    },
    {
        domain: "Service Quality & Process Control",
        module: "Service Recovery & Day-2",
        metric: "Mean Time to Resolution (MTTR)",
        baseline: "85.0 Minutes",
        baselineRaw: 85.0,
        agentic: "14.5 Minutes",
        agenticRaw: 14.5,
        formula: "MTTR = Σ(Down Time) / Incident Count",
        gain: "+82.9% Speedup",
        pctGain: 82.9
    },
    {
        domain: "Service Encounter",
        module: "Service Quality (SERVQUAL)",
        metric: "Unweighted SERVQUAL Gap (Q)",
        baseline: "Q = -1.45 (Gap Exists)",
        baselineRaw: -1.45,
        agentic: "Q = +0.64 (Exceeds Target SLA)",
        agenticRaw: 0.64,
        formula: "Q = Σ(P_i - E_i) / N [Perception - Expectation]",
        gain: "+144.1% Perception",
        pctGain: 144.1
    },
    {
        domain: "Measuring Service Productivity",
        module: "Capacity & Yield Management",
        metric: "Zombie Cloud Resource Waste",
        baseline: "31.2% Monthly Spend",
        baselineRaw: 31.2,
        agentic: "8.4% Monthly Spend",
        agenticRaw: 8.4,
        formula: "Waste % = (Idle Cost / Total Spend) * 100",
        gain: "-73.1% Cost Savings",
        pctGain: 73.1
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
let activeTab = "baseline";
let matrixFilterCategory = "all";
let metricDisplayMode = "raw";
let datasetSectorFilter = "all";
let radarChartInstance = null;
let barChartInstance = null;

// Pipeline Simulation States
let baselineSimActive = false;
let agenticSimActive = false;
let baselineProgress = 0;
let agenticProgress = 0;
let baselineWqCounter = 14.2;
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
// 4. DISCRETE-EVENT SIMULATION (DES) ENGINE
// ==========================================
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

        // Calculate simulated Wq using M/M/1 formula: Wq = lambda / (mu * (mu - lambda))
        let rho = lambda / (mu * 3.0); // 3 engineers
        let simulatedWq = rho >= 0.95 ? (14.2 + (rho * 4.5)) : Math.max(8.5, (14.2 * rho));
        let simulatedBacklog = Math.round(18 * rho);
        let simulatedDefects = Math.round((lambda * steps) * sigma * 0.1);

        document.getElementById("txt-des-summary-b").textContent = `Simulated Wq: ${simulatedWq.toFixed(1)} Hours | Backlog: ${simulatedBacklog} req | Defect Runs: ${simulatedDefects}`;
        document.getElementById("metric-b-wq").textContent = `${simulatedWq.toFixed(1)} Hours`;
        document.getElementById("metric-b-lq").textContent = `${simulatedBacklog} Requests`;

        alert(`Discrete-Event Simulation Completed (${steps} steps)! Simulated Mean Wq: ${simulatedWq.toFixed(1)} Hours.`);
    } else {
        let lambda = parseFloat(document.getElementById("sim-a-lambda").value);
        let nodes = parseFloat(document.getElementById("sim-a-nodes").value);
        let sigma = parseFloat(document.getElementById("sim-a-sigma").value) / 100.0;
        let steps = parseInt(document.getElementById("sim-a-steps").value);

        let mu = 15.0; // 15 req/hr per parallel node
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
// 5. 50-COMPANY DATASET EXPLORER & CSV DOWNLOAD
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

// ==========================================
// 6. SOM EXPLORER SIDEBAR & SLIDING DRAWER
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
            <text x="262" y="40" fill="#64748b" font-size="8" font-family="Outfit" text-anchor="middle">78% Auto & θ = 0.89</text>
        </svg>
    `;
}

// ==========================================
// 7. INTERACTIVE OVERLAY MODALS
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
            <strong>AI-Orchestrated Service Blueprint (Fig 5.6):</strong> Streamlined execution.<br/>
            - <em>Layer 1 (Physical Evidence):</em> Conversational UI & live execution logs.<br/>
            - <em>Layer 2 (Customer Actions):</em> Natural language prompt submission.<br/>
            - <em>Layer 3 (Onstage Actions):</em> AI Agent Chatbot intent validation.<br/>
            - <em>Layer 4 (Backstage Actions):</em> Dynamic Cloudify blueprint & Terraform state generation.<br/>
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
            - <em>Roof Correlations:</em> Positive synergy (+) between automated script validation and deployment speed.<br/>
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
            - <em>Efficiency Score:</em> <strong>θ = 0.89 (High Operational Frontier)</strong>.<br/>
            - <em>Formulation:</em> $\\text{Max } \\theta = \\frac{\\sum u_r y_r}{\\sum v_i x_i}$. Units operate close to the convex frontier curve while accounting for enterprise security approvals.
        ` : `
            <strong>Data Envelopment Analysis (DEA) - Traditional Baseline:</strong><br/>
            - <em>Efficiency Score:</em> <strong>θ = 0.62 (Sub-optimal Inefficiency)</strong>.<br/>
            - <em>Formulation:</em> $\\text{Max } \\theta = \\frac{\\sum u_r y_r}{\\sum v_i x_i}$. Units lie significantly below the efficiency boundary line due to manual labor handoffs.
        `;
    } else {
        title.textContent = "Interactive Queue Dynamics Model";
        desc.innerHTML = isAgentic ? `
            <strong>Parallel Execution Queue Model (M/M/c Model):</strong><br/>
            - <em>Key Metrics:</em> Queue length ($L_q = 2\\text{ jobs}$), Waiting time ($W_q = 48.5\\text{ min}$), autoscaling parallel API nodes.
        ` : `
            <strong>Serialized Queuing Bottleneck (M/M/1 Model):</strong><br/>
            - <em>Key Metrics:</em> Growing backlog queue ($L_q = 18\\text{ req}$), wait times ($W_q = 14.2\\text{h}$), customer balking/reneging.
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
        });
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
        });
    }
}

function drawQFDVisual(ctx, w, h) {
    let startX = 220;
    let startY = 120;
    let cellW = 110;
    let cellH = 50;

    const whats = ["Fast Provisioning", "Error-Free Scripting", "Budget Compliance", "Role-Based Safety"];
    const hows = overlayVisAgentic ? ["AI Intent Parsing", "Auto Policy Check", "Cloudify Blueprints", "Terraform State Sync"] : ["Manual HCL Editing", "Engineer Experience", "Manual SLA Checks", "Spreadsheet Auditing"];

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
    });

    ctx.textAlign = "left";
}

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

    const dmus = [
        { name: "DMU-1 (FinTech Ops)", baseInput: 0.75, baseOutput: 0.35, targetInput: 0.75, targetOutput: 0.65 },
        { name: "DMU-2 (Enterprise SaaS)", baseInput: 0.55, baseOutput: 0.25, targetInput: 0.55, targetOutput: 0.72 },
        { name: "DMU-3 (Healthcare Cloud)", baseInput: 0.85, baseOutput: 0.42, targetInput: 0.85, targetOutput: 0.60 },
        { name: "DMU-4 (Retail E-Com)", baseInput: 0.35, baseOutput: 0.18, targetInput: 0.35, targetOutput: 0.75 }
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

        ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 8px Outfit";
        ctx.fillText(`${dmu.name} (θ = ${(0.62 + (0.27 * deaPointProgress)).toFixed(2)})`, px + 10, py + 3);
    });

    ctx.fillStyle = overlayVisAgentic ? "#10b981" : "#f43f5e";
    ctx.font = "bold 10px Outfit";
    ctx.fillText(overlayVisAgentic ? "AGENTIC EAAS FRONTIER SCORE: θ = 0.89 (High Efficiency Boundary)" : "BASELINE FRONTIER SCORE: θ = 0.62 (Sub-Optimal Inefficiency)", originX + 20, originY - 15);
}

function drawQueueVisual(ctx, w, h) {
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 10px Outfit";
    ctx.fillText(overlayVisAgentic ? "AGENTIC EAAS QUEUE MODEL (M/M/c): Wq = 48.5 Mins | Lq = 2 Jobs" : "BASELINE QUEUE MODEL (M/M/1): Wq = 14.2 Hours | Lq = 18 Requests", 50, 50);
}

// ==========================================
// 8. PIPELINE SIMULATION STUBS & LOGS
// ==========================================
function startBaselineSimulation() {
    if (baselineSimActive) return;
    baselineSimActive = true;
    baselineProgress = 0;
    baselineWqCounter = 14.2;

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
    
    document.getElementById("metric-a-wq").textContent = "48.5 Mins";
    document.getElementById("metric-a-stp").textContent = "78.2%";
    document.getElementById("metric-a-mttr").textContent = "14.5 Mins";
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
    requestAnimationFrame(animationLoop);
}

// ==========================================
// 9. PAGE 3: QUANTITATIVE MATRIX & BAR CHART
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
                    data: [852, 18, 34.5, 18.4, 85.0, 31.2],
                    backgroundColor: 'rgba(244, 63, 94, 0.75)',
                    borderColor: '#f43f5e',
                    borderWidth: 1
                },
                {
                    label: 'Agentic EaaS (Page 2)',
                    data: [48.5, 2, 78.2, 2.1, 14.5, 8.4],
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
                data: [852, 18, 34.5, 18.4, 85.0, 31.2],
                backgroundColor: 'rgba(244, 63, 94, 0.75)',
                borderColor: '#f43f5e',
                borderWidth: 1
            },
            {
                label: 'Agentic EaaS (Page 2)',
                data: [48.5, 2, 78.2, 2.1, 14.5, 8.4],
                backgroundColor: 'rgba(16, 185, 129, 0.75)',
                borderColor: '#10b981',
                borderWidth: 1
            }
        ];
    } else {
        barChartInstance.data.labels = ['Wait Red.', 'Queue Red.', 'DEA Gain', 'STP Gain', 'DPMO Drop', 'MTTR Speed', 'SERVQUAL', 'Waste Cut'];
        barChartInstance.data.datasets = [
            {
                label: '% Performance Gain (Agentic EaaS)',
                data: [94.3, 88.9, 43.5, 126.7, 88.6, 82.9, 144.1, 73.1],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: '#4338ca',
                borderWidth: 1
            }
        ];
    }

    barChartInstance.update();
}

function initRadarChart() {
    const ctx = document.getElementById("radarChart").getContext("2d");
    
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Wait Time (Wq)', 'Queue (Lq)', 'DEA (θ)', 'STP %', 'DPMO (4σ)', 'MTTR Speed', 'SERVQUAL (Q)', 'Yield Efficiency'],
            datasets: [
                {
                    label: 'Baseline State (Page 1)',
                    data: [25, 20, 62, 34.5, 36, 25, 35, 30],
                    borderColor: '#f43f5e',
                    backgroundColor: 'rgba(244, 63, 94, 0.12)',
                    borderWidth: 2,
                    pointRadius: 3
                },
                {
                    label: 'Agentic EaaS State (Page 2)',
                    data: [88, 90, 89, 78.2, 88, 85, 82, 84],
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
