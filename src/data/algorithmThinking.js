// Algorithmic Confidence & Mathematical Deduction Models
// Demonstrates how Kate's confidence score accumulates over time from raw data
// and ONLY prompts the entrepreneur once confidence exceeds the 85% threshold.

export const ALGORITHM_THINKING_MODELS = {
  STARTER: {
    modelName: "Kate SME Payroll & Workforce Optimization Engine v3.4",
    thresholdScore: 85.0,
    baselineConfidence: 42.0,
    advancedConfidence: 96.4,
    confidenceFormula: "Confidence = (0.35 × Recurrence_Months) + (0.30 × Margin_Loss_Severity) + (0.20 × Subsidy_Certainty) + (0.15 × Employee_Retention_Risk)",

    dataSourcesEvaluated: [
      { name: "Billit Peppol Stream", records: "Interim invoices from NOWJOBS", baselineState: "1 single invoice (Isolated event)", advancedState: "4 consecutive monthly invoices (€5,280/mo)", signalStrength: "High" },
      { name: "KBC Business PRO Account", records: "Recurring debit analysis", baselineState: "Initial trial payment", advancedState: "Consistent debit pattern confirmed", signalStrength: "Strong" },
      { name: "Joint Committee (PC 302)", records: "Horeca sector minimum wage scales", baselineState: "General sector index", advancedState: "Sarah's job qualification matched to Scale III", signalStrength: "Statutory" },
      { name: "Vlaamse Overheid VLAIO", records: "Doelgroepvermindering policy", baselineState: "Subsidy fund open", advancedState: "€3,100 first-hire entitlement pre-verified", signalStrength: "Active Subsidy" }
    ],

    evidenceSignals: [
      {
        id: "sig_1",
        label: "Persistent Interim Usage",
        weight: "35%",
        baseline: { active: false, status: "Pending (Only 1 invoice)", points: 8 },
        advanced: { active: true, status: "Verified (4 months continuous)", points: 35 },
        detail: "Single interim invoice could be temporary sick-leave replacement. 4 months confirms permanent staffing need."
      },
      {
        id: "sig_2",
        label: "Gross Margin Leakage > €1,000/mo",
        weight: "30%",
        baseline: { active: false, status: "Under Evaluation (€240 leak)", points: 10 },
        advanced: { active: true, status: "Exceeded (€1,420/mo overpayment)", points: 30 },
        detail: "Current 2.2x interim markup creates €17,040 annual profit drain compared to PC 302 direct hire."
      },
      {
        id: "sig_3",
        label: "Flemish First-Hire Subsidy Qualification",
        weight: "20%",
        baseline: { active: true, status: "Preliminary Match", points: 14 },
        advanced: { active: true, status: "100% Pre-Validated with VLAIO", points: 20 },
        detail: "Confirms entity BE 0849.201.884 has 0 prior ONSS employees, guaranteeing €3,100 grant exemption."
      },
      {
        id: "sig_4",
        label: "Legal Labor Liability Exposure",
        weight: "15%",
        baseline: { active: false, status: "Low Risk (Covered by agency)", points: 10 },
        advanced: { active: true, status: "Urgent (Uninsured Transition Risk)", points: 15 },
        detail: "Direct hiring without immediate Day-1 Occupational Accident Insurance breaches Belgian Labor Code Art. 49."
      }
    ],

    predictionLogic: [
      {
        step: 1,
        title: "Interim Margin Leakage Detection",
        formula: "Interim Rate (€33.00/hr) vs. Paritair Comité 302 Direct Wage (€16.56/hr + 31.5% RSZ)",
        finding: "Lucas is paying a 2.2x markup to NOWJOBS (€5,280/mo vs €3,860/mo direct employment cost)."
      },
      {
        step: 2,
        title: "Cashflow Drag & Statutory Risk Analysis",
        formula: "Uninsured commute liability exposure + zero retention guarantee",
        finding: "Operating without statutory Occupational Accident policy exposes founder to criminal fines under Art. 49 Belgian Labor Code."
      },
      {
        step: 3,
        title: "Flemish Subsidy Arbitrage",
        formula: "VLAIO first hire social security exemption (€3,100 across 4 quarters)",
        finding: "Reduces net quarterly social contributions to €0 for the first 3 months of direct employment."
      },
      {
        step: 4,
        title: "Optimal Prescriptive Bundle",
        formula: "ArgMax [Net Savings + Statutory Compliance - Founder Admin Time]",
        recommendation: "Auto-bind Occupational Accident Insurance + Register Liantis Sociaal Secretariaat + Transmit Dimona IN via eBox + Claim €3,100 VLAIO grant in 1 click."
      }
    ],

    scenariosCompared: [
      { option: "Do Nothing (Keep Interim Agency)", cost12Months: "€63,360", riskScore: "High (No Staff Retention)", kbcMargin: "€0" },
      { option: "Traditional Manual Onboarding", cost12Months: "€46,320 + 28 hours admin", riskScore: "Medium (Late Dimona fines)", kbcMargin: "Low" },
      { option: "KBC 1-Click Syndicate (Recommended)", cost12Months: "€43,220 (-€17,040 savings)", riskScore: "Zero (Pre-underwritten)", kbcMargin: "€1,820 (Accident policy + account)" }
    ]
  },

  PROFITABLE_GROWTH: {
    modelName: "Kate Corporate Fleet Electrification & Asset Capacity Planner v4.1",
    thresholdScore: 85.0,
    baselineConfidence: 48.0,
    advancedConfidence: 97.2,
    confidenceFormula: "Confidence = (0.40 × Emissions_Surcharge_Certainty) + (0.30 × Depot_Queue_Capacity) + (0.20 × Electric_TCO_Advantage) + (0.10 × Grid_Capacity_Fit)",

    dataSourcesEvaluated: [
      { name: "Telematics & Fuel E-Invoices", records: "18 delivery routes, fuel bills", baselineState: "Monthly diesel €38,000 (Within budget)", advancedState: "Surging to €48,200/mo + carbon surcharge", signalStrength: "Direct Peppol" },
      { name: "Roeselare Depot Sensor Gateway", records: "Cold-room cubic meter capacity", baselineState: "82% Capacity (Normal load)", advancedState: "94.2% Capacity (Bottleneck alert)", signalStrength: "IoT Telemetry" },
      { name: "Flemish Corporate Carbon Registry", records: "Emissions surcharge threshold", baselineState: "Legislative draft phase", advancedState: "Enacted into law starting next quarter", signalStrength: "Regulatory" },
      { name: "KBC Autolease Residual Value Matrix", records: "e-Sprinter 5-year TCO benchmark", baselineState: "Standard vehicle pricing", advancedState: "Bulk corporate fleet discount secured", signalStrength: "Proprietary" }
    ],

    evidenceSignals: [
      {
        id: "sig_1",
        label: "Flemish Fleet Carbon Tax Legislation",
        weight: "40%",
        baseline: { active: false, status: "Legislative Proposal (Pending)", points: 15 },
        advanced: { active: true, status: "Officially Enacted into Law", points: 40 },
        detail: "Non-deductible tax penalty of €435/ton applies to diesel commercial fleets starting next quarter."
      },
      {
        id: "sig_2",
        label: "Depot Capacity Critical Load > 92%",
        weight: "30%",
        baseline: { active: false, status: "Operating at 82% (Safe)", points: 15 },
        advanced: { active: true, status: "Bottleneck at 94.2% (Tender Rejected)", points: 30 },
        detail: "Roeselare cold depot exceeded maximum safe queuing, risking lost retail contracts."
      },
      {
        id: "sig_3",
        label: "Electric TCO Payback Window < 18 Mo",
        weight: "20%",
        baseline: { active: true, status: "Favorable Payback", points: 12 },
        advanced: { active: true, status: "Confirmed €11,400/mo Net Cash Gain", points: 20 },
        detail: "Off-peak depot charging at €0.14/kWh vs diesel at €1.74/L guarantees positive cashflow from Day 1."
      },
      {
        id: "sig_4",
        label: "Waregem Depot Grid Feasibility",
        weight: "10%",
        baseline: { active: false, status: "Grid Inquiry Sent", points: 6 },
        advanced: { active: true, status: "High-Voltage Cabine Pre-Approved", points: 10 },
        detail: "Fluvius & Luminus confirmed 250kVA grid capacity at Industriepark Waregem."
      }
    ],

    predictionLogic: [
      {
        step: 1,
        title: "Flemish Carbon Tax Cliff Forecast",
        formula: "142.5 tons CO2/yr × €435/ton regulatory surcharge under fleet mandates",
        finding: "Maintaining internal combustion diesel vans will trigger €62,000/yr in non-deductible tax penalties."
      },
      {
        step: 2,
        title: "Electric TCO Arbitrage vs. Diesel Run-Rate",
        formula: "Electric kWh (€0.14/kWh off-peak depot charging) vs. Commercial Diesel (€1.74/L)",
        finding: "Switching 12 delivery routes to electric refrigerated e-Sprinters yields €11,400/month net cash savings."
      },
      {
        step: 3,
        title: "Depot Capacity Maxima & Route Opportunity Loss",
        formula: "94.2% utilization = 3 missed supermarket distribution tender bids",
        finding: "Acquiring the secondary Waregem depot adds €1.8M ARR capacity with 5.2-month payback."
      },
      {
        step: 4,
        title: "Optimal Prescriptive Bundle",
        formula: "ArgMax [Fleet Carbon Tax Reduction + Cold-Storage Capacity Scale]",
        recommendation: "Bundle 12-EV Lease via Car Loan Plus + Luminus MoveSmart depot charging + €350k Straight Loan for Waregem compressors."
      }
    ],

    scenariosCompared: [
      { option: "Status Quo (Keep Diesel Fleet)", cost12Months: "€578,400 fuel + €62,000 carbon tax", riskScore: "High Regulatory Risk", kbcMargin: "€420" },
      { option: "Piecemeal External EV Leasing", cost12Months: "€492,000 + 4 vendor KYC portals", riskScore: "Moderate (Delayed delivery)", kbcMargin: "€0" },
      { option: "KBC 1-Click Syndicate (Recommended)", cost12Months: "€441,600 (-€198,800 total benefit)", riskScore: "Zero (KBC Autolease pre-funded)", kbcMargin: "€28,400 (Lease interest + industrial policy)" }
    ]
  },

  DISTRESSED_DOWNTURN: {
    modelName: "Kate Early Liquidity Stress & Default Prevention Protocol v5.0",
    thresholdScore: 85.0,
    baselineConfidence: 52.0,
    advancedConfidence: 98.6,
    confidenceFormula: "Confidence = (0.45 × Payroll_Shortfall_Certainty) + (0.30 × DSO_Spike_Rate) + (0.15 × Uncontested_Invoice_Eligibility) + (0.10 × Recovery_Solvency_Score)",

    dataSourcesEvaluated: [
      { name: "Billit Accounts Receivable Ledger", records: "Overdue B2B invoices", baselineState: "2 invoices 15 days late (Standard lag)", advancedState: "€184,000 in invoices 45+ days overdue", signalStrength: "Critical Alarm" },
      { name: "National Bank of Belgium (NBB)", records: "Debtor credit ratings", baselineState: "Stable credit scores", advancedState: "2 clients entered judicial reorganization", signalStrength: "Statutory Credit Bureau" },
      { name: "Operating Balance Velocity", records: "Cash burn trajectory", baselineState: "€42,000 cash balance", advancedState: "Dropped to €8,140 (€34k/wk burn)", signalStrength: "Live Core Banking" },
      { name: "ONSS Social Security & Payroll Due", records: "Statutory salary debit", baselineState: "Monthly run-rate scheduled", advancedState: "€135,000 clearing on 25th (Breach imminent)", signalStrength: "Mandatory Liability" }
    ],

    evidenceSignals: [
      {
        id: "sig_1",
        label: "Imminent Cash Deficit on Payroll Date",
        weight: "45%",
        baseline: { active: false, status: "Sufficient Cash (€42,000)", points: 20 },
        advanced: { active: true, status: "-€126,860 Projected Cliff in 14 Days", points: 45 },
        detail: "Available cash (€8,140) cannot cover the mandatory €135,000 salary & RSZ debit on the 25th."
      },
      {
        id: "sig_2",
        label: "Days Sales Outstanding (DSO) > 65 Days",
        weight: "30%",
        baseline: { active: false, status: "DSO at 38 Days (Normal)", points: 14 },
        advanced: { active: true, status: "DSO Spiked to 78 Days (Critical)", points: 30 },
        detail: "Key retail clients delayed payments following their own sector slowdown."
      },
      {
        id: "sig_3",
        label: "Uncontested Invoices Available for 100% Advance",
        weight: "15%",
        baseline: { active: true, status: "Invoices Logged", points: 10 },
        advanced: { active: true, status: "€184,000 Invoices Verified & Factoring Eligible", points: 15 },
        detail: "Clean Peppol delivery receipts confirm zero client disputes; legally valid for immediate factoring."
      },
      {
        id: "sig_4",
        label: "Statutory Out-of-Court Recovery Standing",
        weight: "10%",
        baseline: { active: false, status: "Friendly Reminders Sent", points: 8 },
        advanced: { active: true, status: "Ready for Go Solid Bailiff Recovery", points: 10 },
        detail: "Complies with Belgian Law of 19 Oct 2015 for fast administrative recovery with zero court fees."
      }
    ],

    predictionLogic: [
      {
        step: 1,
        title: "Cashflow Cliff Countdown",
        formula: "Available Liquidity (€8,140) - Imminent Payroll (€135,000) = -€126,860 Shortfall",
        finding: "Company will breach overdraft covenants and fail payroll in exactly 14 calendar days without capital injection."
      },
      {
        step: 2,
        title: "Receivables Solvency Triangulation",
        formula: "Filtered Peppol Invoices: Uncontested B2B delivery receipts with clean audit trail",
        finding: "€184,000 of overdue receivables are eligible for 100% advance factoring with zero balance sheet dilution."
      },
      {
        step: 3,
        title: "Statutory Out-of-Court Collection Viability",
        formula: "Belgian Law of 19 Oct 2015 (Uncontested B2B Invoices)",
        finding: "Go Solid protocol recovers principal + 10% statutory late interest clause directly from debtor, with zero legal fees to Bram."
      },
      {
        step: 4,
        title: "Optimal Prescriptive Bundle",
        formula: "ArgMax [Immediate Liquidity Recovery - Founder Dilution - Time to Cash]",
        recommendation: "Advance €184,000 instant Factoring cash into operating account + Dispatch Go Solid collection + Activate €100k Roll-Over buffer."
      }
    ],

    scenariosCompared: [
      { option: "Do Nothing (Wait for Debtors to Pay)", cost12Months: "Company Default / Bankruptcy in 14 days", riskScore: "Catastrophic", kbcMargin: "Loss of Account" },
      { option: "Traditional Commercial Court Lawsuit", cost12Months: "€14,000 lawyer fees + 14 month delay", riskScore: "Severe Insolvency", kbcMargin: "€0" },
      { option: "KBC 1-Click Syndicate (Recommended)", cost12Months: "€0 upfront out-of-pocket (Debtor pays fees)", riskScore: "Resolved (Payroll secured in 140ms)", kbcMargin: "€14,800 (Factoring margin + credit line)" }
    ]
  },

  ENTERPRISE_MA: {
    modelName: "Kate Corporate M&A Synergy & Accretive Buyout Valuator v6.2",
    thresholdScore: 85.0,
    baselineConfidence: 39.0,
    advancedConfidence: 95.8,
    confidenceFormula: "Confidence = (0.35 × Target_Valuation_Multiple_Discount) + (0.35 × Founder_Retirement_Certainty) + (0.20 × Synergy_IRR_Accretion) + (0.10 × War_Chest_Leverage_Fit)",

    dataSourcesEvaluated: [
      { name: "KBC Corporate Treasury Ledger", records: "Uninvested cash balances", baselineState: "Normal treasury liquidity", advancedState: "€4,250,000 uninvested cash earning only 1.4%", signalStrength: "Direct Deposit Core" },
      { name: "National Bank of Belgium (NBB) Filings", records: "Competitor annual accounts", baselineState: "Standard competitor monitoring", advancedState: "BioGhent Labs BV filed 2025 balance sheet", signalStrength: "Public Financial Registry" },
      { name: "Belgian Crossroads Bank (KBO)", records: "Shareholder registry", baselineState: "Active ownership", advancedState: "Sole founder turns 64; zero succession filings", signalStrength: "Demographic Succession" },
      { name: "European Patent Office (EPO)", records: "Biotech patent registry", baselineState: "Patent applications pending", advancedState: "3 European patents formally granted to target", signalStrength: "Intellectual Property" }
    ],

    evidenceSignals: [
      {
        id: "sig_1",
        label: "Founder Succession & Retirement Trigger",
        weight: "35%",
        baseline: { active: false, status: "Monitoring Age Profile", points: 12 },
        advanced: { active: true, status: "Age 64 Reached + No Successor Registered", points: 35 },
        detail: "Sole owner of BioGhent Labs BV reaches retirement age without family succession plan."
      },
      {
        id: "sig_2",
        label: "Valuation Discount > 30% Below Market",
        weight: "35%",
        baseline: { active: false, status: "Estimated at 5.0x EBITDA", points: 15 },
        advanced: { active: true, status: "Priced at 3.4x EBITDA (€3.2M Deal)", points: 35 },
        detail: "Target's working capital squeeze allows an opportunistic acquisition at 38% discount to sector median."
      },
      {
        id: "sig_3",
        label: "Synergy IRR Accretion > 20%",
        weight: "20%",
        baseline: { active: false, status: "Estimating Overlap", points: 8 },
        advanced: { active: true, status: "22.4% Projected Internal Rate of Return", points: 20 },
        detail: "Immediate cross-selling of Claire's diagnostics to BioGhent's 240 hospital distribution nodes."
      },
      {
        id: "sig_4",
        label: "Treasury Cash Drag Elimination",
        weight: "10%",
        baseline: { active: false, status: "Cash Yield Adequate", points: 4 },
        advanced: { active: true, status: "Deploying €1.0M Equity + €2.2M KBC Senior Loan", points: 10 },
        detail: "Eliminates €204,000/yr return drag on Claire's €4.25M uninvested cash pile."
      }
    ],

    predictionLogic: [
      {
        step: 1,
        title: "Treasury Drag & Capital Misallocation Analysis",
        formula: "€4.25M Cash @ 1.4% yield vs. WACC of 6.2% = €204,000/yr economic value destruction",
        finding: "Claire's company is over-capitalized and experiencing significant cash drag on return on equity (ROE)."
      },
      {
        step: 2,
        title: "Accretive Valuation of BioGhent Labs BV",
        formula: "Normalized EBITDA (€940,000) × 3.4x Target Multiple = €3,200,000 Enterprise Value",
        finding: "Competitor is undervalued due to succession pressure; 3.4x multiple is 38% below peer market average (5.5x)."
      },
      {
        step: 3,
        title: "Synergy & Pro-Forma EBITDA Accretion",
        formula: "Cross-selling Claire's devices to BioGhent's 240 hospital accounts = +€840,000/yr synergy EBITDA",
        finding: "Yields 22.4% internal rate of return (IRR), fully covering senior debt service in 3.2 years."
      },
      {
        step: 4,
        title: "Optimal Prescriptive Bundle",
        formula: "ArgMax [Acquisition Accretion + Legal Exclusivity - Transaction Friction]",
        recommendation: "Pre-underwrite €2.2M KBC Acquisition Facility + Lock €320k LOI Break-Fee in KBC Escrow + Retain Berquin & VGD due diligence + Auto-bind €5M Directors' liability insurance."
      }
    ],

    scenariosCompared: [
      { option: "Do Nothing (Keep Cash in Term Deposit)", cost12Months: "€204,000/yr capital drag; competitor acquired by foreign fund", riskScore: "Opportunity Loss", kbcMargin: "€18,000" },
      { option: "Traditional Investment Bank Mandate", cost12Months: "€180,000 retainer + 6 month advisory lag", riskScore: "Target Leaked to Market", kbcMargin: "€0" },
      { option: "KBC 1-Click Syndicate (Recommended)", cost12Months: "1-Click LOI Escrow Lock; €2.2M facility ready", riskScore: "Pre-underwritten (60-day exclusive)", kbcMargin: "€95,000 (Senior debt margin + D&O)" }
    ]
  }
};
