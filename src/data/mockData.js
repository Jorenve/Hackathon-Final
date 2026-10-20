// KBC OneClick: Complete Multi-Company & Lifecycle Scenario Engine
// Covers:
// 1. Starter SME (Ghent Craft Foods BV) -> First Employee Milestone
// 2. Profitable Mid-Market (Vanderbauwhede Logistics) -> Green Fleet & Warehouse Scaler
// 3. Distressed Mid-Market (Vanderbauwhede Crisis) -> Cashflow Cliff & Factoring Rescue
// 4. Large Enterprise (Flanders Biotech Group) -> M&A Acquisition of Competitor

export const COMPANIES = {
  STAGE_1_FIRST_HIRE: {
    id: "STAGE_1_FIRST_HIRE",
    chapterNumber: 1,
    badge: "Small SME (1-2 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Starting SME / Micro-Enterprise",
    sector: "Artisan Food & Event Catering",
    location: "Korenmarkt 14, 9000 Gent",
    headcount: "1 Founder + Interims",
    revenue: "€210,000 / year",
    ebitda: "€38,000 / year",
    healthStatus: "Growing Rapidly",
    healthBadge: "Seed Growth",
    badgeColor: "bg-amber-950 text-amber-300 border-amber-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO)",
    balance: "€21,450.00",
    creditScore: "A (KBC Credit Risk Assessment)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Today, 10:00 CET",
      headline: "Steady Daily Operations",
      description: "Business is growing steadily. Lucas is paying €5,280/month to interim agencies for his lead chef Sarah. Working capital is stable, but interim markups are eating into profits.",
      kpis: [
        { label: "Monthly Revenue", value: "€18,200" },
        { label: "Interim Agency Spend", value: "€5,280 / mo" },
        { label: "Net Margin", value: "18.2%" }
      ]
    },

    predictedEvent: {
      timeOffset: "+3 Months Forward",
      date: "3 Months Later (January 2027)",
      triggerType: "ALGORITHM PREDICTION: FIRST PERMANENT HIRE MILESTONE",
      algorithmInsight: "Kate analyzed 4 consecutive months of interim invoices from NOWJOBS in Billit. The algorithm calculates that transitioning Sarah to a permanent employment contract (PC 302) will save €1,420/month and unlocks a €3,100 Flemish Region wage subsidy. It pre-underwrites mandatory accident insurance and prepares Dimona filing.",
      
      kateCard: {
        title: "Hire Sarah permanently & save €1,420/month!",
        headline: "Kate pre-assembled your Employer Registration, Mandatory Accident Insurance, and €3,100 Flemish Grant.",
        kpiImpact: "-€1,420/mo Staffing Cost | €3,100 VLAIO Grant | Mandatory Accident Cover Active",
        cashflowImpact: {
          upfrontCost: "€0 Out-of-Pocket",
          netBenefit: "+€1,420 / month net payroll savings",
          coreProducts: "Occupational Accident Insurance + KBC Team Protect + Business Budget Facility"
        },
        quickPoints: [
          "Auto-binds statutory Occupational Accident Insurance (mandatory Belgian labor law)",
          "Connects to Social Secretariat (Liantis / Acerta - swappable!) & assigns ONSS employer number",
          "Dispatches real-time Dimona IN declaration via eBox government gateway",
          "Auto-claims Flemish 'Doelgroepvermindering eerste aanwerving' (€3,100 employer grant)"
        ],
        ctaText: "Approve 1st Hire & Bind Protection (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Protection Core",
          title: "Occupational Accident Policy Auto-Binding",
          description: "Underwrites statutory Belgian Occupational Accident policy covering Sarah during kitchen shifts & commute.",
          ecosystemPartner: "KBC Verzekeringen (Work & Employees)",
          kbcProduct: "Occupational accident insurance & KBC Team Protect Plan",
          apiEndpoint: "POST /v2/insurance/workforce/occupational-accident/bind",
          latency: "160ms",
          webhookPayload: {
            event: "OCCUPATIONAL_ACCIDENT_BOUND",
            policy_no: "POL-OA-2026-77401",
            insured_employee: "Sarah De Mulder (RRN: 92.08.14-234.12)",
            joint_committee: "PC 302 - Horeca & Catering",
            annual_premium_eur: 1120.00,
            underwriting_margin: "Core High-Margin (68% net margin for KBC)",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC → Social Secretariat",
          title: "Employer Number Registration (Liantis/Acerta)",
          description: "Transmits employer registration mandate to Social Secretariat partner, generating enterprise ONSS matricule.",
          ecosystemPartner: "Liantis Sociaal Secretariaat (Swappable)",
          kbcProduct: "Boostpack & KBC Partner Hub",
          apiEndpoint: "POST /v1/partners/social-secretariat/employer-enroll",
          latency: "310ms",
          webhookPayload: {
            event: "SOCIAL_SECRETARIAT_ENROLLED",
            secretariat: "Liantis Gent",
            rsz_employer_number: "RSZ-0918-420-99",
            employment_type: "Full-Time Indefinite",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC → RSZ / ONSS",
          title: "Immediate Dimona IN Official Declaration",
          description: "Transmits electronic Dimona IN declaration to National Social Security Office via eBox.",
          ecosystemPartner: "Federal Government (RSZ / ONSS) via eBox Bridge",
          kbcProduct: "eBox & Digital signatures and powers of attorney",
          apiEndpoint: "POST /v3/gov/rsz-onss/dimona-in",
          latency: "190ms",
          webhookPayload: {
            event: "DIMONA_IN_CONFIRMED",
            dimona_period_id: "DIM-2026-9912048",
            employee_niss: "92081423412",
            status: "ACCEPTED_WITHOUT_REMARK"
          }
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "KBC → Vlaamse Overheid",
          title: "VLAIO €3,100 First Hire Grant & Payroll Line",
          description: "Auto-applies for Flemish First Employee wage grant and attaches €8,000 payroll credit line.",
          ecosystemPartner: "Vlaamse Overheid (VLAIO)",
          kbcProduct: "Business Budget Facility & Boostpack & KBC Employee Care",
          apiEndpoint: "POST /v2/gov/vlaio/claim-first-hire-grant",
          latency: "280ms",
          webhookPayload: {
            event: "FIRST_HIRE_GRANT_CLAIMED",
            grant_value_eur: 3100.00,
            payroll_facility: "€8,000 Business Budget Facility Active",
            timestamp: new Date().toISOString()
          }
        }
      ],

      underTheHoodPartners: [
        {
          role: "Social Secretariat & Payroll Filing",
          defaultPartner: "Liantis Sociaal Secretariaat (KBC Primary Partner)",
          kbcService: "Boostpack & KBC Partner Hub",
          dataShared: "Employee ID, gross wage, joint committee PC 302, holiday schedule",
          canSwap: true,
          alternativePartners: ["Acerta Sociaal Bureau", "Securex HR & Payroll", "Partena Professional"]
        },
        {
          role: "Statutory Accident Protection",
          defaultPartner: "KBC Verzekeringen (Work & Employees)",
          kbcService: "Occupational accident insurance & KBC Team Protect Plan",
          dataShared: "NISS national number, job description, workplace safety audit",
          canSwap: false,
          note: "Core High-Margin Statutory Belgian Coverage"
        },
        {
          role: "Government Social Security Registry",
          defaultPartner: "RSZ / ONSS Dimona API via eBox",
          kbcService: "eBox & Digital signatures and powers of attorney",
          dataShared: "Dimona electronic declaration form, ONSS employer number",
          canSwap: false,
          note: "Mandatory Belgian Federal Employment Authority"
        }
      ]
    }
  },

  STAGE_2_OFFICE_SPACE: {
    id: "STAGE_2_OFFICE_SPACE",
    chapterNumber: 2,
    badge: "Middle Growth (3-10 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Growing SME (Commercial Expansion)",
    sector: "Artisan Food Production & Commercial Catering",
    location: "Dok Noord 4B, 9000 Gent",
    headcount: "Founder + 4 Full-Time Employees",
    revenue: "€436,000 / year",
    ebitda: "€78,000 / year (17.9%)",
    healthStatus: "Rapid Commercial Expansion",
    healthBadge: "Commercial Expansion",
    badgeColor: "bg-blue-950 text-cyan-300 border-cyan-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO)",
    balance: "€48,200.00",
    creditScore: "AA (KBC Corporate Score)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Month 9 (September 2026)",
      headline: "Kitchen Capacity Maxed Out at Starter Facility",
      description: "Catering order volumes surged +180% over the summer. Lucas has identified a 320m² commercial production kitchen & tasting office at Dok Noord Ghent (Rent: €2,800/mo). Signing the commercial lease requires 3 months deposit (€8,400), commercial fire/tenant insurance, and an €85,000 kitchen fit-out.",
      kpis: [
        { label: "Monthly Revenue", value: "€36,400" },
        { label: "Commercial Rent", value: "€2,800 / mo" },
        { label: "Kitchen Capacity", value: "96% (Overloaded)" }
      ]
    },

    predictedEvent: {
      timeOffset: "+6 Months Forward",
      date: "September 2026",
      triggerType: "ALGORITHM PREDICTION: FIRST COMMERCIAL OFFICE & KITCHEN SPACE",
      algorithmInsight: "Kate detected a commercial lease draft PDF for Dok Noord 4B (320m²) via Kate Document Scanner and cross-referenced with Billit catering invoice growth (+180%). The algorithm pre-approves an €8,400 KBC Rental Guarantee in Escrow (keeping Lucas's cash liquid), pre-underwrites an €85,000 SME Investment Loan at 3.65% for kitchen equipment, auto-binds mandatory KBC Office & Building Insurance, and dispatches De Immowinkel EPC certification.",

      kateCard: {
        title: "Secure Dok Noord Commercial Space & €85k Fit-Out!",
        headline: "Kate pre-assembled your Digital Rental Guarantee in Escrow, €85,000 SME Investment Loan, and KBC Office & Building Insurance.",
        kpiImpact: "Dok Noord 320m² Secured | €8,400 Cash Preserved in Escrow | €85,000 Fit-Out Funded",
        cashflowImpact: {
          upfrontCost: "€0 Out-of-Pocket (Guarantee replaces cash deposit)",
          netBenefit: "+€7,200 / month production capacity expansion",
          coreProducts: "Rental guarantee + Office and building insurance + Investment loan + De Immowinkel"
        },
        quickPoints: [
          "Locks €8,400 Rental Guarantee in KBC Escrow (preserves working capital for food inventory)",
          "Pre-underwrites €85,000 SME Investment Loan at 3.65% fixed for combi-steamers & walk-in cold rooms",
          "Auto-binds mandatory KBC Office and Building Insurance (tenant fire, water & glass liability)",
          "Connects Housing Ecosystem partners (De Immowinkel EPC inspection & Setle energy grant filing)"
        ],
        ctaText: "Approve Dok Noord Lease & Funding (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Escrow & Housing",
          title: "Digital Rental Guarantee Issuance (€8,400)",
          description: "Locks €8,400 guarantee in KBC Escrow and transmits verified bank guarantee certificate to Dok Noord landlord without freezing operating cash.",
          ecosystemPartner: "KBC Escrow (Housing Ecosystem)",
          kbcProduct: "Rental guarantee & Rental Guarantee Widget",
          apiEndpoint: "POST /v2/housing/rental-guarantee/issue",
          latency: "160ms"
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Core Lending",
          title: "€85,000 SME Investment Loan Clearance",
          description: "Credits pre-underwritten 5-year investment facility at 3.65% for commercial refrigeration and prep line directly to operating account.",
          ecosystemPartner: "KBC Corporate Credit Engine",
          kbcProduct: "Investment loan & Straight Loans",
          apiEndpoint: "POST /v2/lending/investment-loans/disburse",
          latency: "220ms"
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Office and Building Insurance Auto-Binding",
          description: "Underwrites comprehensive commercial property policy covering tenant fire, water damage, and business premises liability.",
          ecosystemPartner: "KBC Verzekeringen (Business Protection)",
          kbcProduct: "Office and building insurance & Business liability insurance",
          apiEndpoint: "POST /v1/insurance/office-building/bind",
          latency: "140ms"
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "Housing Ecosystem",
          title: "De Immowinkel EPC & Setle Energy Grant Filing",
          description: "Dispatches De Immowinkel for statutory commercial EPC certificate and submits Setle energy grant request via eBox.",
          ecosystemPartner: "De Immowinkel & Setle (Housing Ecosystem)",
          kbcProduct: "Certificates and inspections - De Immowinkel & Setle",
          apiEndpoint: "POST /v1/partners/housing/epc-compliance-dispatch",
          latency: "260ms"
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial Lease & Rental Guarantee",
          defaultPartner: "KBC Escrow (Housing Ecosystem)",
          kbcService: "Rental guarantee & Rental Guarantee Widget",
          dataShared: "Commercial lease deed, landlord IBAN, 3-month rental deposit (€8,400)",
          canSwap: false,
          note: "Core KBC Escrow Solution"
        },
        {
          role: "SME Fit-out Asset Financing",
          defaultPartner: "KBC Corporate Lending Core",
          kbcService: "Investment loan & Straight Loans",
          dataShared: "Supplier equipment pro-forma invoices, 5-year amortization plan",
          canSwap: false,
          note: "3.65% Fixed Rate Pre-Underwritten Facility"
        },
        {
          role: "Premises Protection",
          defaultPartner: "KBC Verzekeringen (Business Protection)",
          kbcService: "Office and building insurance & Business liability",
          dataShared: "Dok Noord 4B surface area (320m²), cadastral reference, kitchen fire rating",
          canSwap: false,
          note: "Core High-Margin Property Insurance"
        },
        {
          role: "Real Estate Compliance & Grants",
          defaultPartner: "De Immowinkel & Setle (Swappable)",
          kbcService: "Certificates and inspections - De Immowinkel & Setle",
          dataShared: "Premises address, energy meter specs, commercial renovation plan",
          canSwap: true,
          alternativePartners: ["BTV Control", "Certinergie", "Vinçotte Real Estate"]
        }
      ]
    }
  },

  STAGE_3_FLEET_SCALING: {
    id: "STAGE_3_FLEET_SCALING",
    chapterNumber: 3,
    badge: "Scaling Enterprise (10-35 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Scaling Mid-Market Enterprise",
    sector: "Artisan Food Production & Regional Logistics",
    location: "Dok Noord 4B, 9000 Gent (Hub 1) + Brussels Distribution",
    headcount: "Founder + 14 Full-Time Employees",
    revenue: "€1,014,000 / year",
    ebitda: "€182,000 / year (17.9%)",
    healthStatus: "Multi-City Regional Scale",
    healthBadge: "Fleet & Regional Scaler",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO Premium)",
    balance: "€112,400.00",
    creditScore: "AAA (KBC Corporate Score)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Month 18 (June 2027)",
      headline: "Regional Delivery Surge & Courier Costs",
      description: "Ghent Craft Foods now handles 45 corporate deliveries every day across Ghent, Antwerp, and Brussels. Outsourcing to third-party couriers costs €6,400/month, and upcoming Low Emission Zone (LEZ) surcharges in Antwerp and Brussels threaten delivery margins.",
      kpis: [
        { label: "Daily Drops", value: "45 Corporate Deliveries" },
        { label: "Outsourced Courier Spend", value: "€6,400 / mo" },
        { label: "Fleet TCO Savings Target", value: "+€2,450 / mo" }
      ]
    },

    predictedEvent: {
      timeOffset: "+9 Months Forward",
      date: "June 2027",
      triggerType: "ALGORITHM PREDICTION: FLEET ELECTRIFICATION & LOGISTICS IN-HOUSING",
      algorithmInsight: "Kate analyzed daily delivery routes (45 drops/day) and Billit courier invoices (€6,400/mo). The algorithm calculates that leasing 3 refrigerated electric Ford e-Transits via KBC Car Loan Plus paired with Luminus MoveSmart depot charging cuts monthly delivery costs by €2,450, eliminates urban LEZ penalties, and captures €12,600 in Flemish Clean Power subsidies.",

      kateCard: {
        title: "Deploy 3 Electric Refrigerated Vans & Save €2,450/Mo!",
        headline: "Kate pre-assembled your KBC Car Loan Plus Fleet, Luminus MoveSmart depot charging, Fleet Insurance, and €12,600 in Green Grants.",
        kpiImpact: "+€2,450/mo Net Cash Savings | 3 Electric Vans Deployed | €12,600 Flemish Clean Power Grant",
        cashflowImpact: {
          upfrontCost: "€0 Capital Outlay (100% Asset Financed via KBC)",
          netMonthlyReturn: "+€2,450 / month fuel & courier savings",
          coreProducts: "Car Loan Plus + Electric car insurance + MoveSmart + Roll-Over Credit Line"
        },
        quickPoints: [
          "Pre-underwrites 3 refrigerated e-Transits via KBC Car Loan Plus & B2B Asset Financing",
          "Dispatches Luminus MoveSmart 22kW smart depot charging installation at Dok Noord",
          "Binds mandatory KBC Electric car insurance and Goods-in-Transit commercial coverage",
          "Auto-submits €12,600 Flemish Clean Power subsidy application via eBox government portal"
        ],
        ctaText: "Approve Fleet & Charging Infrastructure (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Asset Financing",
          title: "KBC Car Loan Plus Fleet Funding (€160k)",
          description: "KBC Autolease pre-clears commercial vehicle financing for 3 refrigerated Ford e-Transit vans with zero collateral.",
          ecosystemPartner: "KBC Autolease (Mobility Ecosystem)",
          kbcProduct: "Car Loan Plus & Electric car loan",
          apiEndpoint: "POST /v2/mobility/fleet/commercial-lease-dispatch",
          latency: "170ms"
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Employee Mobility",
          title: "Luminus MoveSmart Depot 22kW Charging",
          description: "Dispatches automated work order for Dok Noord charging infrastructure and links driver split-billing cards.",
          ecosystemPartner: "MoveSmart & Luminus (Mobility Ecosystem)",
          kbcProduct: "Manage a leased vehicle - MoveSmart and VAB",
          apiEndpoint: "POST /v1/partners/mobility/movesmart-fleet-sync",
          latency: "210ms"
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Commercial Fleet & Liability Insurance",
          description: "Auto-binds comprehensive multi-vehicle policy covering battery, cargo refrigeration breakdown, and driver protection.",
          ecosystemPartner: "KBC Verzekeringen (Business Protection)",
          kbcProduct: "Electric car insurance & Business liability insurance",
          apiEndpoint: "POST /v2/insurance/corporate-fleet/bind",
          latency: "130ms"
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "Government Subsidy",
          title: "Flemish Clean Power Grants (€12,600)",
          description: "Transmits digital grant request for 3 × €4,200 zero-emission vehicle subsidies to Vlaams Klimaatfonds via eBox.",
          ecosystemPartner: "Vlaams Klimaatfonds & eBox Gateway",
          kbcProduct: "Application status webhooks & eBox",
          apiEndpoint: "POST /v2/gov/vlaio/claim-clean-power-grant",
          latency: "250ms"
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial EV Fleet Financing",
          defaultPartner: "KBC Autolease (Mobility Ecosystem)",
          kbcService: "Car Loan Plus & Electric car loan",
          dataShared: "Fleet specs, 3 x Ford e-Transit cold-box configurations, 48-month leasing matrix",
          canSwap: false,
          note: "100% Asset-Financed KBC Facility"
        },
        {
          role: "Smart Depot Charging & Energy",
          defaultPartner: "Luminus MoveSmart (KBC Partner Hub)",
          kbcService: "Manage a leased vehicle - MoveSmart and VAB",
          dataShared: "Dok Noord electrical cabine rating, 22kW charging hardware, driver RFID tokens",
          canSwap: true,
          alternativePartners: ["TotalEnergies On The Move", "Shell Recharge Fleet", "EDI EV Charging"]
        },
        {
          role: "Fleet Commercial Insurance",
          defaultPartner: "KBC Verzekeringen (Business Protection)",
          kbcService: "Electric car insurance & Business liability",
          dataShared: "Chassis numbers, commercial driver authorizations, refrigerated cargo value",
          canSwap: false,
          note: "Core High-Margin Fleet Policy"
        },
        {
          role: "Regional Green Subsidies",
          defaultPartner: "Vlaams Klimaatfonds via eBox",
          kbcService: "Application status webhooks & eBox",
          dataShared: "Vehicle registration certificates (DIV), zero-emission homologation documents",
          canSwap: false,
          note: "Flemish Government Zero-Emission Transport Mandate"
        }
      ]
    }
  },

  PROFITABLE_GROWTH: {
    id: "PROFITABLE_GROWTH",
    name: "Vanderbauwhede Logistics NV",
    founder: "Bram Vanderbauwhede",
    type: "Mid-Market Enterprise (Growing)",
    sector: "Cold-Chain Logistics & Distribution",
    location: "Havenlaan 88, 8800 Roeselare",
    headcount: "45 Full-Time Employees",
    revenue: "€8,450,000 / year",
    ebitda: "€1,240,000 / year (14.7%)",
    healthStatus: "Highly Profitable & Scaling",
    healthBadge: "High Profit Growth",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-700",
    primaryAccount: "BE55 7320 8812 0044 (KBC Business PRO Premium)",
    balance: "€482,900.00",
    creditScore: "AAA (KBC Corporate Rating)",
    relationshipManager: "Dirk Verstraete (KBC Corporate Banking West-Vlaanderen)",

    normalState: {
      date: "Today, 11:30 CET",
      headline: "Strong Operating Margins",
      description: "Company generates solid cashflow across 18 delivery routes in Benelux. However, fuel invoices are high (€48,000/mo diesel) and Roeselare refrigerated depot capacity is running at 94%.",
      kpis: [
        { label: "Annual EBITDA", value: "€1.24M" },
        { label: "Fleet Diesel Spend", value: "€48,200 / mo" },
        { label: "Depot Capacity", value: "94% (Near Max)" }
      ]
    },

    predictedEvent: {
      timeOffset: "+6 Months Forward",
      date: "6 Months Later (April 2027)",
      triggerType: "ALGORITHM PREDICTION: FLEET ELECTRIFICATION & DEPOT EXPANSION",
      algorithmInsight: "Kate processed fleet telemetry, route logistics, and fuel e-invoices. The algorithm predicts €62,000/year in carbon surcharges starting next quarter under Flemish corporate fleet rules. It calculates that leasing 12 electric refrigerated Mercedes e-Sprinters + acquiring a secondary Waregem depot will cut monthly operating costs by €11,400 while expanding revenue capacity by 35%.",

      kateCard: {
        title: "Scale your cold-chain fleet & save €11,400/month!",
        headline: "Kate pre-assembled your 12-EV Fleet Lease, Waregem Depot Financing, and Green Energy Infrastructure.",
        kpiImpact: "+35% Route Capacity | -€11,400/mo Operating Costs | Zero Upfront Capital Dilution",
        cashflowImpact: {
          upfrontCost: "€0 Capital Outlay (100% Asset Financed)",
          netMonthlyReturn: "+€11,400 / month fuel & carbon tax savings",
          coreProducts: "Car Loan Plus + B2B Asset Financing + Industrial Property Insurance + MoveSmart"
        },
        quickPoints: [
          "Pre-underwrites 12 electric refrigerated vans via Car Loan Plus & B2B Asset Financing",
          "Attaches KBC Employee Mobility - MoveSmart integration for automated fleet charging",
          "Binds mandatory Industrial property insurance & Fleet Commercial Cover",
          "Disburses €350,000 Straight Loans line for rapid Waregem cold-storage fit-out"
        ],
        ctaText: "Approve Fleet & Depot Expansion (KBC Sign)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Asset Financing",
          title: "12-Vehicle Electric Fleet Leasing Protocol",
          description: "KBC pre-approves commercial asset lease for 12 Mercedes e-Sprinter refrigerated vans.",
          ecosystemPartner: "KBC Autolease / B2B Asset Financing Hub",
          kbcProduct: "Car Loan Plus & B2B Asset Financing - Partner Hub",
          apiEndpoint: "POST /v2/mobility/fleet/commercial-lease-dispatch",
          latency: "190ms",
          webhookPayload: {
            event: "COMMERCIAL_FLEET_LEASE_APPROVED",
            vehicles_count: 12,
            model: "Mercedes-Benz e-Sprinter Cold-Box",
            total_facility_eur: 648000.00,
            monthly_lease_per_unit_eur: 890.00,
            co2_reduction_tons_yr: 142.5,
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Employee Mobility",
          title: "MoveSmart Charging & Energy Integration",
          description: "Connects driver badges to corporate charging grid with automated Flemish green tax deductions.",
          ecosystemPartner: "KBC MoveSmart & Luminus Charging Hub",
          kbcProduct: "KBC Employee Mobility - MoveSmart integration & Manage business mobility costs",
          apiEndpoint: "POST /v1/partners/mobility/movesmart-fleet-sync",
          latency: "280ms",
          webhookPayload: {
            event: "MOVESMART_INTEGRATION_BOUND",
            registered_drivers: 42,
            depot_chargers_activated: 6,
            automated_split_billing: true,
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Industrial Property & Fleet Risk Auto-Binding",
          description: "Underwrites comprehensive multi-vehicle fleet and Waregem cold-storage industrial property insurance.",
          ecosystemPartner: "KBC Verzekeringen (Direct Corporate)",
          kbcProduct: "Industrial property insurance & Business liability insurance",
          apiEndpoint: "POST /v2/insurance/corporate-pack/bind",
          latency: "210ms",
          webhookPayload: {
            event: "INDUSTRIAL_COVERAGE_BOUND",
            policy_ref: "POL-IND-2027-9912",
            depot_location: "Industriepark Waregem (1,800 sqm)",
            annual_premium_eur: 4850.00,
            underwriting_margin: "High Corporate Margin (71% net)",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "KBC SME Lending",
          title: "€350,000 Straight Loan Depot Fit-out Disbursement",
          description: "Credits pre-underwritten Straight Loan for cold-room compressors and solar panel roof installation.",
          ecosystemPartner: "KBC Corporate Lending Core",
          kbcProduct: "Straight Loans & Roll-Over Line of Credit",
          apiEndpoint: "POST /v2/lending/straight-loans/disburse",
          latency: "250ms",
          webhookPayload: {
            event: "STRAIGHT_LOAN_DISBURSED",
            amount_eur: 350000.00,
            interest_margin_pct: 4.85,
            disbursed_to: "BE55 7320 8812 0044",
            term: "60 Months Bullet with Interest Reset",
            timestamp: new Date().toISOString()
          }
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial EV Fleet Manufacturer",
          defaultPartner: "Mercedes-Benz Vans Belgium & KBC Autolease",
          kbcService: "Car Loan Plus & B2B Asset Financing - Partner Hub",
          dataShared: "Fleet route mileage, driver charging addresses, telematics",
          canSwap: true,
          alternativePartners: ["Renault Trucks E-Tech", "MAN eTGE Commercial", "Iveco eDaily Fleet"]
        },
        {
          role: "High-Power Depot Charging Infrastructure",
          defaultPartner: "Luminus / KBC Energy Hub",
          kbcService: "Energy and sustainability (Sustainability advice - Encon)",
          dataShared: "Grid capacity at Waregem depot, peak kW draw, high-voltage cabine specs",
          canSwap: true,
          alternativePartners: ["TotalEnergies Charging", "Engie EV Solutions", "Smappee Commercial"]
        },
        {
          role: "Industrial Risk & Fleet Liability",
          defaultPartner: "KBC Verzekeringen Corporate",
          kbcService: "Industrial property insurance & Business liability insurance",
          dataShared: "Cold-chain goods value, temperature monitoring fail-safes",
          canSwap: false,
          note: "Tier-1 KBC Direct Corporate Policy"
        }
      ]
    }
  },

  STAGE_2_OFFICE_SPACE: {
    id: "STAGE_2_OFFICE_SPACE",
    chapterNumber: 2,
    badge: "Middle Growth (3-10 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Growing SME (Commercial Expansion)",
    sector: "Artisan Food Production & Commercial Catering",
    location: "Dok Noord 4B, 9000 Gent",
    headcount: "Founder + 4 Full-Time Employees",
    revenue: "€436,000 / year",
    ebitda: "€78,000 / year (17.9%)",
    healthStatus: "Rapid Commercial Expansion",
    healthBadge: "Commercial Expansion",
    badgeColor: "bg-blue-950 text-cyan-300 border-cyan-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO)",
    balance: "€48,200.00",
    creditScore: "AA (KBC Corporate Score)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Month 9 (September 2026)",
      headline: "Kitchen Capacity Maxed Out at Starter Facility",
      description: "Catering order volumes surged +180% over the summer. Lucas has identified a 320m² commercial production kitchen & tasting office at Dok Noord Ghent (Rent: €2,800/mo). Signing the commercial lease requires 3 months deposit (€8,400), commercial fire/tenant insurance, and an €85,000 kitchen fit-out.",
      kpis: [
        { label: "Monthly Revenue", value: "€36,400" },
        { label: "Commercial Rent", value: "€2,800 / mo" },
        { label: "Kitchen Capacity", value: "96% (Overloaded)" }
      ]
    },

    predictedEvent: {
      timeOffset: "+6 Months Forward",
      date: "September 2026",
      triggerType: "ALGORITHM PREDICTION: FIRST COMMERCIAL OFFICE & KITCHEN SPACE",
      algorithmInsight: "Kate detected a commercial lease draft PDF for Dok Noord 4B (320m²) via Kate Document Scanner and cross-referenced with Billit catering invoice growth (+180%). The algorithm pre-approves an €8,400 KBC Rental Guarantee in Escrow (keeping Lucas's cash liquid), pre-underwrites an €85,000 SME Investment Loan at 3.65% for kitchen equipment, auto-binds mandatory KBC Office & Building Insurance, and dispatches De Immowinkel EPC certification.",

      kateCard: {
        title: "Secure Dok Noord Commercial Space & €85k Fit-Out!",
        headline: "Kate pre-assembled your Digital Rental Guarantee in Escrow, €85,000 SME Investment Loan, and KBC Office & Building Insurance.",
        kpiImpact: "Dok Noord 320m² Secured | €8,400 Cash Preserved in Escrow | €85,000 Fit-Out Funded",
        cashflowImpact: {
          upfrontCost: "€0 Out-of-Pocket (Guarantee replaces cash deposit)",
          netBenefit: "+€7,200 / month production capacity expansion",
          coreProducts: "Rental guarantee + Office and building insurance + Investment loan + De Immowinkel"
        },
        quickPoints: [
          "Locks €8,400 Rental Guarantee in KBC Escrow (preserves working capital for food inventory)",
          "Pre-underwrites €85,000 SME Investment Loan at 3.65% fixed for combi-steamers & walk-in cold rooms",
          "Auto-binds mandatory KBC Office and Building Insurance (tenant fire, water & glass liability)",
          "Connects Housing Ecosystem partners (De Immowinkel EPC inspection & Setle energy grant filing)"
        ],
        ctaText: "Approve Dok Noord Lease & Funding (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Escrow & Housing",
          title: "Digital Rental Guarantee Issuance (€8,400)",
          description: "Locks €8,400 guarantee in KBC Escrow and transmits verified bank guarantee certificate to Dok Noord landlord without freezing operating cash.",
          ecosystemPartner: "KBC Escrow (Housing Ecosystem)",
          kbcProduct: "Rental guarantee & Rental Guarantee Widget",
          apiEndpoint: "POST /v2/housing/rental-guarantee/issue",
          latency: "160ms"
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Core Lending",
          title: "€85,000 SME Investment Loan Clearance",
          description: "Credits pre-underwritten 5-year investment facility at 3.65% for commercial refrigeration and prep line directly to operating account.",
          ecosystemPartner: "KBC Corporate Credit Engine",
          kbcProduct: "Investment loan & Straight Loans",
          apiEndpoint: "POST /v2/lending/investment-loans/disburse",
          latency: "220ms"
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Office and Building Insurance Auto-Binding",
          description: "Underwrites comprehensive commercial property policy covering tenant fire, water damage, and business premises liability.",
          ecosystemPartner: "KBC Verzekeringen (Business Protection)",
          kbcProduct: "Office and building insurance & Business liability insurance",
          apiEndpoint: "POST /v1/insurance/office-building/bind",
          latency: "140ms"
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "Housing Ecosystem",
          title: "De Immowinkel EPC & Setle Energy Grant Filing",
          description: "Dispatches De Immowinkel for statutory commercial EPC certificate and submits Setle energy grant request via eBox.",
          ecosystemPartner: "De Immowinkel & Setle (Housing Ecosystem)",
          kbcProduct: "Certificates and inspections - De Immowinkel & Setle",
          apiEndpoint: "POST /v1/partners/housing/epc-compliance-dispatch",
          latency: "260ms"
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial Lease & Rental Guarantee",
          defaultPartner: "KBC Escrow (Housing Ecosystem)",
          kbcService: "Rental guarantee & Rental Guarantee Widget",
          dataShared: "Commercial lease deed, landlord IBAN, 3-month rental deposit (€8,400)",
          canSwap: false,
          note: "Core KBC Escrow Solution"
        },
        {
          role: "SME Fit-out Asset Financing",
          defaultPartner: "KBC Corporate Lending Core",
          kbcService: "Investment loan & Straight Loans",
          dataShared: "Supplier equipment pro-forma invoices, 5-year amortization plan",
          canSwap: false,
          note: "3.65% Fixed Rate Pre-Underwritten Facility"
        },
        {
          role: "Premises Protection",
          defaultPartner: "KBC Verzekeringen (Business Protection)",
          kbcService: "Office and building insurance & Business liability",
          dataShared: "Dok Noord 4B surface area (320m²), cadastral reference, kitchen fire rating",
          canSwap: false,
          note: "Core High-Margin Property Insurance"
        },
        {
          role: "Real Estate Compliance & Grants",
          defaultPartner: "De Immowinkel & Setle (Swappable)",
          kbcService: "Certificates and inspections - De Immowinkel & Setle",
          dataShared: "Premises address, energy meter specs, commercial renovation plan",
          canSwap: true,
          alternativePartners: ["BTV Control", "Certinergie", "Vinçotte Real Estate"]
        }
      ]
    }
  },

  STAGE_3_FLEET_SCALING: {
    id: "STAGE_3_FLEET_SCALING",
    chapterNumber: 3,
    badge: "Scaling Enterprise (10-35 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Scaling Mid-Market Enterprise",
    sector: "Artisan Food Production & Regional Logistics",
    location: "Dok Noord 4B, 9000 Gent (Hub 1) + Brussels Distribution",
    headcount: "Founder + 14 Full-Time Employees",
    revenue: "€1,014,000 / year",
    ebitda: "€182,000 / year (17.9%)",
    healthStatus: "Multi-City Regional Scale",
    healthBadge: "Fleet & Regional Scaler",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO Premium)",
    balance: "€112,400.00",
    creditScore: "AAA (KBC Corporate Score)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Month 18 (June 2027)",
      headline: "Regional Delivery Surge & Courier Costs",
      description: "Ghent Craft Foods now handles 45 corporate deliveries every day across Ghent, Antwerp, and Brussels. Outsourcing to third-party couriers costs €6,400/month, and upcoming Low Emission Zone (LEZ) surcharges in Antwerp and Brussels threaten delivery margins.",
      kpis: [
        { label: "Daily Drops", value: "45 Corporate Deliveries" },
        { label: "Outsourced Courier Spend", value: "€6,400 / mo" },
        { label: "Fleet TCO Savings Target", value: "+€2,450 / mo" }
      ]
    },

    predictedEvent: {
      timeOffset: "+9 Months Forward",
      date: "June 2027",
      triggerType: "ALGORITHM PREDICTION: FLEET ELECTRIFICATION & LOGISTICS IN-HOUSING",
      algorithmInsight: "Kate analyzed daily delivery routes (45 drops/day) and Billit courier invoices (€6,400/mo). The algorithm calculates that leasing 3 refrigerated electric Ford e-Transits via KBC Car Loan Plus paired with Luminus MoveSmart depot charging cuts monthly delivery costs by €2,450, eliminates urban LEZ penalties, and captures €12,600 in Flemish Clean Power subsidies.",

      kateCard: {
        title: "Deploy 3 Electric Refrigerated Vans & Save €2,450/Mo!",
        headline: "Kate pre-assembled your KBC Car Loan Plus Fleet, Luminus MoveSmart depot charging, Fleet Insurance, and €12,600 in Green Grants.",
        kpiImpact: "+€2,450/mo Net Cash Savings | 3 Electric Vans Deployed | €12,600 Flemish Clean Power Grant",
        cashflowImpact: {
          upfrontCost: "€0 Capital Outlay (100% Asset Financed via KBC)",
          netMonthlyReturn: "+€2,450 / month fuel & courier savings",
          coreProducts: "Car Loan Plus + Electric car insurance + MoveSmart + Roll-Over Credit Line"
        },
        quickPoints: [
          "Pre-underwrites 3 refrigerated e-Transits via KBC Car Loan Plus & B2B Asset Financing",
          "Dispatches Luminus MoveSmart 22kW smart depot charging installation at Dok Noord",
          "Binds mandatory KBC Electric car insurance and Goods-in-Transit commercial coverage",
          "Auto-submits €12,600 Flemish Clean Power subsidy application via eBox government portal"
        ],
        ctaText: "Approve Fleet & Charging Infrastructure (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Asset Financing",
          title: "KBC Car Loan Plus Fleet Funding (€160k)",
          description: "KBC Autolease pre-clears commercial vehicle financing for 3 refrigerated Ford e-Transit vans with zero collateral.",
          ecosystemPartner: "KBC Autolease (Mobility Ecosystem)",
          kbcProduct: "Car Loan Plus & Electric car loan",
          apiEndpoint: "POST /v2/mobility/fleet/commercial-lease-dispatch",
          latency: "170ms"
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Employee Mobility",
          title: "Luminus MoveSmart Depot 22kW Charging",
          description: "Dispatches automated work order for Dok Noord charging infrastructure and links driver split-billing cards.",
          ecosystemPartner: "MoveSmart & Luminus (Mobility Ecosystem)",
          kbcProduct: "Manage a leased vehicle - MoveSmart and VAB",
          apiEndpoint: "POST /v1/partners/mobility/movesmart-fleet-sync",
          latency: "210ms"
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Commercial Fleet & Liability Insurance",
          description: "Auto-binds comprehensive multi-vehicle policy covering battery, cargo refrigeration breakdown, and driver protection.",
          ecosystemPartner: "KBC Verzekeringen (Business Protection)",
          kbcProduct: "Electric car insurance & Business liability insurance",
          apiEndpoint: "POST /v2/insurance/corporate-fleet/bind",
          latency: "130ms"
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "Government Subsidy",
          title: "Flemish Clean Power Grants (€12,600)",
          description: "Transmits digital grant request for 3 × €4,200 zero-emission vehicle subsidies to Vlaams Klimaatfonds via eBox.",
          ecosystemPartner: "Vlaams Klimaatfonds & eBox Gateway",
          kbcProduct: "Application status webhooks & eBox",
          apiEndpoint: "POST /v2/gov/vlaio/claim-clean-power-grant",
          latency: "250ms"
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial EV Fleet Financing",
          defaultPartner: "KBC Autolease (Mobility Ecosystem)",
          kbcService: "Car Loan Plus & Electric car loan",
          dataShared: "Fleet specs, 3 x Ford e-Transit cold-box configurations, 48-month leasing matrix",
          canSwap: false,
          note: "100% Asset-Financed KBC Facility"
        },
        {
          role: "Smart Depot Charging & Energy",
          defaultPartner: "Luminus MoveSmart (KBC Partner Hub)",
          kbcService: "Manage a leased vehicle - MoveSmart and VAB",
          dataShared: "Dok Noord electrical cabine rating, 22kW charging hardware, driver RFID tokens",
          canSwap: true,
          alternativePartners: ["TotalEnergies On The Move", "Shell Recharge Fleet", "EDI EV Charging"]
        },
        {
          role: "Fleet Commercial Insurance",
          defaultPartner: "KBC Verzekeringen (Business Protection)",
          kbcService: "Electric car insurance & Business liability",
          dataShared: "Chassis numbers, commercial driver authorizations, refrigerated cargo value",
          canSwap: false,
          note: "Core High-Margin Fleet Policy"
        },
        {
          role: "Regional Green Subsidies",
          defaultPartner: "Vlaams Klimaatfonds via eBox",
          kbcService: "Application status webhooks & eBox",
          dataShared: "Vehicle registration certificates (DIV), zero-emission homologation documents",
          canSwap: false,
          note: "Flemish Government Zero-Emission Transport Mandate"
        }
      ]
    }
  },

  DISTRESSED_DOWNTURN: {
    id: "DISTRESSED_DOWNTURN",
    name: "Vanderbauwhede Logistics (Downturn)",
    founder: "Bram Vanderbauwhede",
    type: "Mid-Market Enterprise (In Distress)",
    sector: "Cold-Chain Logistics & Distribution",
    location: "Havenlaan 88, 8800 Roeselare",
    headcount: "45 Full-Time Employees",
    revenue: "€7,200,000 / year (Down 15%)",
    ebitda: "-€180,000 / year (Operating Loss)",
    healthStatus: "Cashflow Crunch / Acute Liquidity Drag",
    healthBadge: "Cash Crunch Warning",
    badgeColor: "bg-rose-950 text-rose-300 border-rose-700",
    primaryAccount: "BE55 7320 8812 0044 (KBC Business PRO Premium)",
    balance: "€8,140.00 (Dangerously Low)",
    creditScore: "BBB- (Under Stress Review)",
    relationshipManager: "Dirk Verstraete (KBC Corporate Banking West-Vlaanderen)",

    normalState: {
      date: "Today, 14:00 CET",
      headline: "Warning: Liquidity Gap Ahead",
      description: "Two major retail clients have entered debt reorganization, delaying €184,000 in invoices. With payroll of €135,000 due in 14 days and current bank balance at only €8,140, the company faces immediate overdraft breach.",
      kpis: [
        { label: "Available Cash", value: "€8,140" },
        { label: "Overdue B2B Invoices", value: "€184,000" },
        { label: "Days Sales Out (DSO)", value: "78 Days (Critical)" }
      ]
    },

    predictedEvent: {
      timeOffset: "+2 Weeks Forward",
      date: "2 Weeks Later (November 2026)",
      triggerType: "ALGORITHM PREDICTION: ACUTE PAYROLL CLIFF & DEBT RESTRUCTURING",
      algorithmInsight: "Kate analyzed Days Sales Outstanding (DSO) surging to 78 days in Billit. The algorithm predicts an unmitigated cash shortfall of €126,860 on the 25th of the month when payroll and RSZ contributions clear. Kate automatically pre-underwrites 100% accounts receivable factoring against uncontested invoices and activates a Roll-Over line before default occurs.",

      kateCard: {
        title: "Critical Cashflow Gap: Unlock €184,000 instantly!",
        headline: "Kate pre-assembled Factoring Advance, Go Solid Unpaid Invoice Recovery, and a €100k Roll-Over Line.",
        kpiImpact: "€184,000 Instant Liquidity | Full Payroll Secured | 0% Equity Dilution",
        cashflowImpact: {
          upfrontCost: "€0 Out-of-Pocket (Debtor late interest covers fees)",
          instantInflow: "+€184,000 immediate cash credit",
          coreProducts: "Factoring + Go Solid + Roll-Over Line of Credit + Tax Advance"
        },
        quickPoints: [
          "Advances €184,000 against overdue client invoices via KBC Factoring desk",
          "Dispatches non-intrusive legal recovery to Go Solid for overdue B2B receivables",
          "Activates €100,000 Roll-Over Line of Credit to secure end-of-month payroll",
          "Connects Strategic Relationship Manager for restructuring & tax financing"
        ],
        ctaText: "Unlock Liquidity & Secure Payroll (KBC Sign)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Liquidity Engine",
          title: "Immediate €184,000 Accounts Receivable Advance",
          description: "KBC factors uncontested Peppol invoices, immediately depositing €184,000 cash into the operating account.",
          ecosystemPartner: "KBC Factoring Desk & Billit Gateway",
          kbcProduct: "Factoring and accounts receivable management & ComFin Touch",
          apiEndpoint: "POST /v2/oneclick/factoring/emergency-advance",
          latency: "140ms",
          webhookPayload: {
            event: "FACTORING_CASH_DISBURSED",
            invoices_factored: 11,
            total_nominal_eur: 184000.00,
            credited_to_account: "BE55 7320 8812 0044",
            advance_rate_pct: 100.0,
            payroll_secured: true,
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC → Unpaid Invoice Recovery",
          title: "Out-of-Court Collection Dispatch (Go Solid)",
          description: "Delegates non-intrusive recovery under the Belgian statutory B2B recovery protocol.",
          ecosystemPartner: "Go Solid Belgium",
          kbcProduct: "Collect unpaid invoices - Go Solid",
          apiEndpoint: "POST /v1/partners/recovery/go-solid-dispatch",
          latency: "290ms",
          webhookPayload: {
            event: "GO_SOLID_COLLECTION_COMMENCED",
            debtor_entities_count: 3,
            enforcement_type: "Belgian Law of 19 Oct 2015 (Uncontested Invoices)",
            collection_fee_payer: "Debtor statutory penalty clause",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC SME Lending",
          title: "€100,000 Roll-Over Credit Facility Activation",
          description: "Opens an emergency flexible working capital credit buffer to absorb delayed client payments.",
          ecosystemPartner: "KBC Credit Desk",
          kbcProduct: "Roll-Over Line of Credit & Cash budget credit facility",
          apiEndpoint: "POST /v2/lending/roll-over/activate",
          latency: "190ms",
          webhookPayload: {
            event: "ROLL_OVER_LINE_ACTIVATED",
            credit_limit_eur: 100000.00,
            interest_structure: "1-Month Euribor + 2.10% spread",
            drawdown_mode: "Autonomous algorithmic sweep",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "KBC Strategic Advisory",
          title: "Corporate Turnaround & Tax Advance Mandate",
          description: "Schedules immediate executive review with KBC Senior Relationship Manager and defers tax advances.",
          ecosystemPartner: "KBC Corporate Advisory & Tax SME Network",
          kbcProduct: "Strategic advice through a relationship manager & Financing advance tax payments",
          apiEndpoint: "POST /v1/advisory/turnaround-consultation/schedule",
          latency: "120ms",
          webhookPayload: {
            event: "TURNAROUND_CONSULTATION_BOOKED",
            lead_advisor: "Dirk Verstraete (KBC West-Vlaanderen)",
            focus: "Working Capital Optimization & Supplier Covenant Renegotiation",
            timestamp: new Date().toISOString()
          }
        }
      ],

      underTheHoodPartners: [
        {
          role: "B2B Unpaid Invoice Recovery",
          defaultPartner: "Go Solid Belgium (linked to Peppol)",
          kbcService: "Collect unpaid invoices - Go Solid",
          dataShared: "Invoice numbers, debtor KBO numbers, Peppol delivery receipts",
          canSwap: true,
          alternativePartners: ["Modero Gerechtsdeurwaarders", "Intrum Belgium", "Euler Hermes Debt Recovery"]
        },
        {
          role: "Receivables Factoring Facility",
          defaultPartner: "KBC Commercial Finance (ComFin Touch)",
          kbcService: "Factoring and accounts receivable management",
          dataShared: "Sales ledger extracts, debtor credit limits",
          canSwap: false,
          note: "Native KBC Corporate Financing Desk"
        },
        {
          role: "Senior Corporate Restructuring Desk",
          defaultPartner: "KBC Corporate Banking West-Vlaanderen",
          kbcService: "Strategic advice through a relationship manager",
          dataShared: "12-month rolling cashflow forecast, bank covenant stress test",
          canSwap: false,
          note: "Dedicated Relationship Manager Intervention"
        }
      ]
    }
  },

  STAGE_2_OFFICE_SPACE: {
    id: "STAGE_2_OFFICE_SPACE",
    chapterNumber: 2,
    badge: "Middle Growth (3-10 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Growing SME (Commercial Expansion)",
    sector: "Artisan Food Production & Commercial Catering",
    location: "Dok Noord 4B, 9000 Gent",
    headcount: "Founder + 4 Full-Time Employees",
    revenue: "€436,000 / year",
    ebitda: "€78,000 / year (17.9%)",
    healthStatus: "Rapid Commercial Expansion",
    healthBadge: "Commercial Expansion",
    badgeColor: "bg-blue-950 text-cyan-300 border-cyan-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO)",
    balance: "€48,200.00",
    creditScore: "AA (KBC Corporate Score)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Month 9 (September 2026)",
      headline: "Kitchen Capacity Maxed Out at Starter Facility",
      description: "Catering order volumes surged +180% over the summer. Lucas has identified a 320m² commercial production kitchen & tasting office at Dok Noord Ghent (Rent: €2,800/mo). Signing the commercial lease requires 3 months deposit (€8,400), commercial fire/tenant insurance, and an €85,000 kitchen fit-out.",
      kpis: [
        { label: "Monthly Revenue", value: "€36,400" },
        { label: "Commercial Rent", value: "€2,800 / mo" },
        { label: "Kitchen Capacity", value: "96% (Overloaded)" }
      ]
    },

    predictedEvent: {
      timeOffset: "+6 Months Forward",
      date: "September 2026",
      triggerType: "ALGORITHM PREDICTION: FIRST COMMERCIAL OFFICE & KITCHEN SPACE",
      algorithmInsight: "Kate detected a commercial lease draft PDF for Dok Noord 4B (320m²) via Kate Document Scanner and cross-referenced with Billit catering invoice growth (+180%). The algorithm pre-approves an €8,400 KBC Rental Guarantee in Escrow (keeping Lucas's cash liquid), pre-underwrites an €85,000 SME Investment Loan at 3.65% for kitchen equipment, auto-binds mandatory KBC Office & Building Insurance, and dispatches De Immowinkel EPC certification.",

      kateCard: {
        title: "Secure Dok Noord Commercial Space & €85k Fit-Out!",
        headline: "Kate pre-assembled your Digital Rental Guarantee in Escrow, €85,000 SME Investment Loan, and KBC Office & Building Insurance.",
        kpiImpact: "Dok Noord 320m² Secured | €8,400 Cash Preserved in Escrow | €85,000 Fit-Out Funded",
        cashflowImpact: {
          upfrontCost: "€0 Out-of-Pocket (Guarantee replaces cash deposit)",
          netBenefit: "+€7,200 / month production capacity expansion",
          coreProducts: "Rental guarantee + Office and building insurance + Investment loan + De Immowinkel"
        },
        quickPoints: [
          "Locks €8,400 Rental Guarantee in KBC Escrow (preserves working capital for food inventory)",
          "Pre-underwrites €85,000 SME Investment Loan at 3.65% fixed for combi-steamers & walk-in cold rooms",
          "Auto-binds mandatory KBC Office and Building Insurance (tenant fire, water & glass liability)",
          "Connects Housing Ecosystem partners (De Immowinkel EPC inspection & Setle energy grant filing)"
        ],
        ctaText: "Approve Dok Noord Lease & Funding (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Escrow & Housing",
          title: "Digital Rental Guarantee Issuance (€8,400)",
          description: "Locks €8,400 guarantee in KBC Escrow and transmits verified bank guarantee certificate to Dok Noord landlord without freezing operating cash.",
          ecosystemPartner: "KBC Escrow (Housing Ecosystem)",
          kbcProduct: "Rental guarantee & Rental Guarantee Widget",
          apiEndpoint: "POST /v2/housing/rental-guarantee/issue",
          latency: "160ms"
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Core Lending",
          title: "€85,000 SME Investment Loan Clearance",
          description: "Credits pre-underwritten 5-year investment facility at 3.65% for commercial refrigeration and prep line directly to operating account.",
          ecosystemPartner: "KBC Corporate Credit Engine",
          kbcProduct: "Investment loan & Straight Loans",
          apiEndpoint: "POST /v2/lending/investment-loans/disburse",
          latency: "220ms"
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Office and Building Insurance Auto-Binding",
          description: "Underwrites comprehensive commercial property policy covering tenant fire, water damage, and business premises liability.",
          ecosystemPartner: "KBC Verzekeringen (Business Protection)",
          kbcProduct: "Office and building insurance & Business liability insurance",
          apiEndpoint: "POST /v1/insurance/office-building/bind",
          latency: "140ms"
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "Housing Ecosystem",
          title: "De Immowinkel EPC & Setle Energy Grant Filing",
          description: "Dispatches De Immowinkel for statutory commercial EPC certificate and submits Setle energy grant request via eBox.",
          ecosystemPartner: "De Immowinkel & Setle (Housing Ecosystem)",
          kbcProduct: "Certificates and inspections - De Immowinkel & Setle",
          apiEndpoint: "POST /v1/partners/housing/epc-compliance-dispatch",
          latency: "260ms"
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial Lease & Rental Guarantee",
          defaultPartner: "KBC Escrow (Housing Ecosystem)",
          kbcService: "Rental guarantee & Rental Guarantee Widget",
          dataShared: "Commercial lease deed, landlord IBAN, 3-month rental deposit (€8,400)",
          canSwap: false,
          note: "Core KBC Escrow Solution"
        },
        {
          role: "SME Fit-out Asset Financing",
          defaultPartner: "KBC Corporate Lending Core",
          kbcService: "Investment loan & Straight Loans",
          dataShared: "Supplier equipment pro-forma invoices, 5-year amortization plan",
          canSwap: false,
          note: "3.65% Fixed Rate Pre-Underwritten Facility"
        },
        {
          role: "Premises Protection",
          defaultPartner: "KBC Verzekeringen (Business Protection)",
          kbcService: "Office and building insurance & Business liability",
          dataShared: "Dok Noord 4B surface area (320m²), cadastral reference, kitchen fire rating",
          canSwap: false,
          note: "Core High-Margin Property Insurance"
        },
        {
          role: "Real Estate Compliance & Grants",
          defaultPartner: "De Immowinkel & Setle (Swappable)",
          kbcService: "Certificates and inspections - De Immowinkel & Setle",
          dataShared: "Premises address, energy meter specs, commercial renovation plan",
          canSwap: true,
          alternativePartners: ["BTV Control", "Certinergie", "Vinçotte Real Estate"]
        }
      ]
    }
  },

  STAGE_3_FLEET_SCALING: {
    id: "STAGE_3_FLEET_SCALING",
    chapterNumber: 3,
    badge: "Scaling Enterprise (10-35 FTEs)",
    name: "Ghent Craft Foods BV",
    tradingName: "De Gentse Proeverij",
    founder: "Lucas De Clercq",
    type: "Scaling Mid-Market Enterprise",
    sector: "Artisan Food Production & Regional Logistics",
    location: "Dok Noord 4B, 9000 Gent (Hub 1) + Brussels Distribution",
    headcount: "Founder + 14 Full-Time Employees",
    revenue: "€1,014,000 / year",
    ebitda: "€182,000 / year (17.9%)",
    healthStatus: "Multi-City Regional Scale",
    healthBadge: "Fleet & Regional Scaler",
    badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-700",
    primaryAccount: "BE71 7360 4912 8820 (KBC Business PRO Premium)",
    balance: "€112,400.00",
    creditScore: "AAA (KBC Corporate Score)",
    relationshipManager: "Anouk De Smet (KBC Kouter Gent)",

    normalState: {
      date: "Month 18 (June 2027)",
      headline: "Regional Delivery Surge & Courier Costs",
      description: "Ghent Craft Foods now handles 45 corporate deliveries every day across Ghent, Antwerp, and Brussels. Outsourcing to third-party couriers costs €6,400/month, and upcoming Low Emission Zone (LEZ) surcharges in Antwerp and Brussels threaten delivery margins.",
      kpis: [
        { label: "Daily Drops", value: "45 Corporate Deliveries" },
        { label: "Outsourced Courier Spend", value: "€6,400 / mo" },
        { label: "Fleet TCO Savings Target", value: "+€2,450 / mo" }
      ]
    },

    predictedEvent: {
      timeOffset: "+9 Months Forward",
      date: "June 2027",
      triggerType: "ALGORITHM PREDICTION: FLEET ELECTRIFICATION & LOGISTICS IN-HOUSING",
      algorithmInsight: "Kate analyzed daily delivery routes (45 drops/day) and Billit courier invoices (€6,400/mo). The algorithm calculates that leasing 3 refrigerated electric Ford e-Transits via KBC Car Loan Plus paired with Luminus MoveSmart depot charging cuts monthly delivery costs by €2,450, eliminates urban LEZ penalties, and captures €12,600 in Flemish Clean Power subsidies.",

      kateCard: {
        title: "Deploy 3 Electric Refrigerated Vans & Save €2,450/Mo!",
        headline: "Kate pre-assembled your KBC Car Loan Plus Fleet, Luminus MoveSmart depot charging, Fleet Insurance, and €12,600 in Green Grants.",
        kpiImpact: "+€2,450/mo Net Cash Savings | 3 Electric Vans Deployed | €12,600 Flemish Clean Power Grant",
        cashflowImpact: {
          upfrontCost: "€0 Capital Outlay (100% Asset Financed via KBC)",
          netMonthlyReturn: "+€2,450 / month fuel & courier savings",
          coreProducts: "Car Loan Plus + Electric car insurance + MoveSmart + Roll-Over Credit Line"
        },
        quickPoints: [
          "Pre-underwrites 3 refrigerated e-Transits via KBC Car Loan Plus & B2B Asset Financing",
          "Dispatches Luminus MoveSmart 22kW smart depot charging installation at Dok Noord",
          "Binds mandatory KBC Electric car insurance and Goods-in-Transit commercial coverage",
          "Auto-submits €12,600 Flemish Clean Power subsidy application via eBox government portal"
        ],
        ctaText: "Approve Fleet & Charging Infrastructure (itsme®)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Asset Financing",
          title: "KBC Car Loan Plus Fleet Funding (€160k)",
          description: "KBC Autolease pre-clears commercial vehicle financing for 3 refrigerated Ford e-Transit vans with zero collateral.",
          ecosystemPartner: "KBC Autolease (Mobility Ecosystem)",
          kbcProduct: "Car Loan Plus & Electric car loan",
          apiEndpoint: "POST /v2/mobility/fleet/commercial-lease-dispatch",
          latency: "170ms"
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Employee Mobility",
          title: "Luminus MoveSmart Depot 22kW Charging",
          description: "Dispatches automated work order for Dok Noord charging infrastructure and links driver split-billing cards.",
          ecosystemPartner: "MoveSmart & Luminus (Mobility Ecosystem)",
          kbcProduct: "Manage a leased vehicle - MoveSmart and VAB",
          apiEndpoint: "POST /v1/partners/mobility/movesmart-fleet-sync",
          latency: "210ms"
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC Protection Core",
          title: "Commercial Fleet & Liability Insurance",
          description: "Auto-binds comprehensive multi-vehicle policy covering battery, cargo refrigeration breakdown, and driver protection.",
          ecosystemPartner: "KBC Verzekeringen (Business Protection)",
          kbcProduct: "Electric car insurance & Business liability insurance",
          apiEndpoint: "POST /v2/insurance/corporate-fleet/bind",
          latency: "130ms"
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "Government Subsidy",
          title: "Flemish Clean Power Grants (€12,600)",
          description: "Transmits digital grant request for 3 × €4,200 zero-emission vehicle subsidies to Vlaams Klimaatfonds via eBox.",
          ecosystemPartner: "Vlaams Klimaatfonds & eBox Gateway",
          kbcProduct: "Application status webhooks & eBox",
          apiEndpoint: "POST /v2/gov/vlaio/claim-clean-power-grant",
          latency: "250ms"
        }
      ],

      underTheHoodPartners: [
        {
          role: "Commercial EV Fleet Financing",
          defaultPartner: "KBC Autolease (Mobility Ecosystem)",
          kbcService: "Car Loan Plus & Electric car loan",
          dataShared: "Fleet specs, 3 x Ford e-Transit cold-box configurations, 48-month leasing matrix",
          canSwap: false,
          note: "100% Asset-Financed KBC Facility"
        },
        {
          role: "Smart Depot Charging & Energy",
          defaultPartner: "Luminus MoveSmart (KBC Partner Hub)",
          kbcService: "Manage a leased vehicle - MoveSmart and VAB",
          dataShared: "Dok Noord electrical cabine rating, 22kW charging hardware, driver RFID tokens",
          canSwap: true,
          alternativePartners: ["TotalEnergies On The Move", "Shell Recharge Fleet", "EDI EV Charging"]
        },
        {
          role: "Fleet Commercial Insurance",
          defaultPartner: "KBC Verzekeringen (Business Protection)",
          kbcService: "Electric car insurance & Business liability",
          dataShared: "Chassis numbers, commercial driver authorizations, refrigerated cargo value",
          canSwap: false,
          note: "Core High-Margin Fleet Policy"
        },
        {
          role: "Regional Green Subsidies",
          defaultPartner: "Vlaams Klimaatfonds via eBox",
          kbcService: "Application status webhooks & eBox",
          dataShared: "Vehicle registration certificates (DIV), zero-emission homologation documents",
          canSwap: false,
          note: "Flemish Government Zero-Emission Transport Mandate"
        }
      ]
    }
  },

  ENTERPRISE_MA: {
    id: "ENTERPRISE_MA",
    name: "Flanders Biotech Group NV",
    founder: "Claire Vanhoutte",
    type: "Large Corporate Enterprise",
    sector: "Biopharmaceuticals & Medical Devices",
    location: "Technologiepark-Zwijnaarde 120, 9052 Gent",
    headcount: "140 Full-Time Employees",
    revenue: "€34,200,000 / year",
    ebitda: "€6,800,000 / year (19.9%)",
    healthStatus: "Highly Liquid & Cash Rich",
    healthBadge: "Enterprise M&A Acquirer",
    badgeColor: "bg-purple-950 text-purple-300 border-purple-700",
    primaryAccount: "BE91 7310 9900 1122 (KBC Corporate Global Account)",
    balance: "€4,250,000.00 (Uninvested Surplus Cash)",
    creditScore: "AAA (KBC Tier-1 Corporate)",
    relationshipManager: "Marc De Swaef (KBC Corporate Banking Flanders)",

    normalState: {
      date: "Today, 16:00 CET",
      headline: "Surplus Liquidity Looking for Strategic Yield",
      description: "Company generates robust cashflow. Claire has €4.25M uninvested cash sitting in term accounts earning low interest. The board has mandated an accretive strategic acquisition in clinical diagnostics.",
      kpis: [
        { label: "Annual Revenue", value: "€34.2M" },
        { label: "Surplus Liquid Cash", value: "€4.25M" },
        { label: "M&A War-Chest", value: "€12.0M Borrowing Capacity" }
      ]
    },

    predictedEvent: {
      timeOffset: "+9 Months Forward",
      date: "9 Months Later (July 2027)",
      triggerType: "ALGORITHM PREDICTION: M&A ACQUISITION OF COMPETITOR (BioGhent Labs BV)",
      algorithmInsight: "Kate triangulated National Bank of Belgium (NBB) annual accounts filings, patent registries, and Peppol supplier streams. Target competitor 'BioGhent Labs BV' (whose founder is 64 years old) shows declining working capital but holds 3 valuable clinical patents. Kate’s algorithm calculates an accretive valuation of €3,200,000 (3.4x EBITDA) with 22.4% projected synergy ROI. KBC pre-packages the complete M&A Acquisition Bundle.",

      kateCard: {
        title: "Strategic M&A Opportunity: Acquire BioGhent Labs BV!",
        headline: "Kate pre-assembled your €2.2M Acquisition Loan Facility, Due Diligence Audit, and Notarial LOI Escrow.",
        kpiImpact: "+€5.4M ARR Synergies | 22.4% Accretive ROI | Pre-Underwritten €2.2M Buyout Loan",
        cashflowImpact: {
          upfrontCost: "€1.0M Cash Equity + €2.2M KBC Acquisition Facility",
          annualSynergyYield: "+€840,000 / year EBITDA expansion",
          coreProducts: "Acquisition advice + Straight Loans + Directors' liability insurance + Valuation advice"
        },
        quickPoints: [
          "Pre-underwrites €2,200,000 Acquisition Loan (Straight Loans + Roll-Over facility)",
          "Appoints M&A audit team via KBC Partner Hub (Berquin Notarissen & VGD SME Tax Network)",
          "Locks €320,000 Letter of Intent (LOI) Break-Fee in certified KBC Escrow",
          "Auto-binds €5,000,000 Directors' Liability & M&A Warranty Insurance (W&I)"
        ],
        ctaText: "Approve M&A Acquisition Bundle (itsme® Sign)"
      },

      dominoSteps: [
        {
          id: "step_1",
          stepNumber: "01",
          label: "KBC Corporate Finance",
          title: "€2.2M Acquisition Buyout Loan Pre-Underwriting",
          description: "KBC Corporate Banking pre-underwrites acquisition financing structured against target cashflow.",
          ecosystemPartner: "KBC Corporate Finance & Investment Banking",
          kbcProduct: "Acquisition advice & Straight Loans",
          apiEndpoint: "POST /v3/corporate-finance/ma/acquisition-facility",
          latency: "240ms",
          webhookPayload: {
            event: "ACQUISITION_FACILITY_APPROVED",
            target_entity: "BioGhent Labs BV (BE 0441.980.112)",
            total_enterprise_value_eur: 3200000.00,
            senior_debt_facility_eur: 2200000.00,
            equity_contribution_eur: 1000000.00,
            accretive_ebitda_multiple: 3.4,
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_2",
          stepNumber: "02",
          label: "KBC Escrow Protocol",
          title: "LOI Exclusivity Deposit & Escrow Lock",
          description: "KBC locks €320,000 in certified bilateral escrow, securing a 60-day exclusive negotiating period.",
          ecosystemPartner: "KBC Escrow Protocol & Berquin Notarissen",
          kbcProduct: "KBC Partner Hub & Digital signatures and powers of attorney",
          apiEndpoint: "POST /v2/oneclick/escrow/ma-deposit-lock",
          latency: "170ms",
          webhookPayload: {
            event: "MA_ESCROW_DEPOSIT_LOCKED",
            escrow_amount_eur: 320000.00,
            exclusivity_period_days: 60,
            custodian: "KBC Bank NV (Brussels Global Escrow Desk)",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_3",
          stepNumber: "03",
          label: "KBC M&A Advisory Hub",
          title: "Legal Due Diligence & Statutory Valuation Audit",
          description: "Transmits verified NBB data and patent portfolios to partnered M&A auditors for confirmatory review.",
          ecosystemPartner: "VGD Advisory & Berquin Corporate Legal",
          kbcProduct: "Business valuation advice & Business transfer advice & Tax and legal advice for SMEs",
          apiEndpoint: "POST /v1/partners/ma/due-diligence-initiate",
          latency: "320ms",
          webhookPayload: {
            event: "DUE_DILIGENCE_INITIATED",
            lead_auditor: "VGD Accountants & Advisors",
            legal_counsel: "Berquin Notarissen Corporate Desk",
            patent_audit: "3 European Patent Office (EPO) Filings Validated",
            timestamp: new Date().toISOString()
          }
        },
        {
          id: "step_4",
          stepNumber: "04",
          label: "KBC Protection Core",
          title: "€5M Directors' Liability (D&O) & Warranty Insurance",
          description: "Expands Board of Directors' Liability coverage and binds Representations & Warranties (R&W) policy.",
          ecosystemPartner: "KBC Verzekeringen Corporate Risks",
          kbcProduct: "Directors' liability insurance & Business legal assistance insurance",
          apiEndpoint: "POST /v2/insurance/ma/directors-warranty-pack",
          latency: "210ms",
          webhookPayload: {
            event: "DIRECTORS_LIABILITY_EXPANDED",
            coverage_limit_eur: 5000000.00,
            post_merger_entities: ["Flanders Biotech Group NV", "BioGhent Labs BV"],
            annual_premium_eur: 6800.00,
            underwriting_margin: "Tier-1 Corporate (74% net margin)",
            timestamp: new Date().toISOString()
          }
        }
      ],

      underTheHoodPartners: [
        {
          role: "M&A Legal Counsel & Notarial Deeds",
          defaultPartner: "Berquin Notarissen Corporate Department",
          kbcService: "Tax and legal advice for SMEs & Business transfer advice",
          dataShared: "Share purchase agreement (SPA), shareholder register, merger deed",
          canSwap: true,
          alternativePartners: ["Laga / Deloitte Legal", "Eubelius Corporate", "Linklaters Brussels"]
        },
        {
          role: "Financial & Tax Due Diligence",
          defaultPartner: "VGD Corporate Finance & Valuation Desk",
          kbcService: "Business valuation advice & Acquisition advice",
          dataShared: "Target 5-year EBITDA statements, tax balance sheets, NBB filings",
          canSwap: true,
          alternativePartners: ["PwC SME M&A Network", "Moore Corporate Finance", "BDO M&A Advisors"]
        },
        {
          role: "Acquisition Financing Facility",
          defaultPartner: "KBC Corporate Finance Desk",
          kbcService: "Straight Loans & Roll-Over Line of Credit",
          dataShared: "Corporate credit term-sheet, corporate covenant monitoring",
          canSwap: false,
          note: "Lead Arranger: KBC Bank NV"
        },
        {
          role: "M&A Warranty & Directors' Protection",
          defaultPartner: "KBC Verzekeringen Corporate Risks",
          kbcService: "Directors' liability insurance",
          dataShared: "Executive bios, acquisition scope, indemnity thresholds",
          canSwap: false,
          note: "KBC Direct Executive Underwriting"
        }
      ]
    }
  }
};

// Aliases for the 3-Chapter Lifecycle Story
COMPANIES.STARTER = COMPANIES.STAGE_1_FIRST_HIRE;
COMPANIES.PROFITABLE_GROWTH = COMPANIES.STAGE_2_OFFICE_SPACE;
COMPANIES.DISTRESSED_DOWNTURN = COMPANIES.STAGE_2_OFFICE_SPACE;
COMPANIES.ENTERPRISE_MA = COMPANIES.STAGE_3_FLEET_SCALING;

// -------------------------------------------------------------
// HOW KBC ACQUIRES NON-CLIENT DATA (The 3 Ingestion Rails)
// -------------------------------------------------------------
export const NON_CLIENT_ACQUISITION_RAILS = [
  {
    id: "peppol_graph",
    title: "1. The Peppol & E-Invoicing Counterparty Graph",
    shortName: "Peppol Graph",
    description: "KBC processes ~42% of B2B transactions in Flanders. When an existing KBC client (e.g., commercial landlord, fuel supplier, enterprise customer) sends an invoice over Peppol/Billit to a non-KBC SME, KBC's network graph detects the counterparty transaction velocity.",
    dataIngested: "Peppol UBL 2.1 XML metadata: Debtor VAT, IBAN, line items, payment terms.",
    privacyLegalBasis: "GDPR Art. 6(1)(f) Legitimate Interest + Art. 6(1)(b) upon prompt interaction.",
    conversionLift: "+380% vs cold outbound ads"
  },
  {
    id: "kate_open_diagnostic",
    title: "2. Kate 'Smart Contract & Invoicing Auditor' (Open Web Hook)",
    shortName: "Kate Auditor",
    description: "A free, public diagnostic tool for any Belgian entrepreneur. Non-clients drag & drop a draft commercial contract, M&A teaser, or interim bill. Kate analyzes compliance and reveals the pre-assembled KBC solution in 30 seconds.",
    dataIngested: "Uploaded PDF text via Kate OCR/NLP: Counterparty entity names, NBB annual accounts, EBITDA multiples.",
    privacyLegalBasis: "Explicit user consent (GDPR Art. 6(1)(a)) with instant 1-click itsme® authentication.",
    conversionLift: "54% conversion from free audit to KBC Business PRO account"
  },
  {
    id: "accountant_api_bridge",
    title: "3. Certified Accountant Portal (Silverfin / Yuki / Odoo)",
    shortName: "Accountant Hub",
    description: "Belgian accountants (ITAA) recommend KBC OneClick directly inside their accounting software, eliminating manual notary, social secretariat, and bank guarantee paperwork.",
    dataIngested: "Annual accounts, Peppol cashflow velocity, payroll tax projections.",
    privacyLegalBasis: "Mandated accountant proxy via KBC Partner Hub API.",
    conversionLift: "Zero CAC (Warm recommendation by trusted advisor)"
  }
];

// -------------------------------------------------------------
// BIG COMPANY & MID-MARKET SCALABILITY FRAMEWORK
// -------------------------------------------------------------
export const ENTERPRISE_SCALABILITY_MATRIX = [
  {
    tier: "Starter / Sole Prop (1 FTE)",
    companyExample: "De Gentse Proeverij",
    typicalTriggers: "1st Employee, Commercial Lease, POS terminal",
    kbcCoreProducts: "Occupational accident insurance, Rental guarantee, KBC Business PRO",
    annualLtvEur: "€2,450 / yr",
    automationLevel: "100% Autonomous 1-Click"
  },
  {
    tier: "Profitable Growing SME (45 FTEs)",
    companyExample: "Vanderbauwhede Logistics",
    typicalTriggers: "Green Fleet EV Transition, Depot Expansion, MoveSmart",
    kbcCoreProducts: "Car Loan Plus, B2B Asset Financing, Industrial property insurance",
    annualLtvEur: "€28,400 / yr",
    automationLevel: "100% Autonomous 1-Click + Swappable"
  },
  {
    tier: "Distressed SME in Downturn (45 FTEs)",
    companyExample: "Vanderbauwhede Crisis",
    typicalTriggers: "DSO Spike, €184k Overdue Invoices, Payroll Cliff",
    kbcCoreProducts: "Factoring, Collect unpaid invoices - Go Solid, Roll-Over Line of Credit",
    annualLtvEur: "€14,800 / yr",
    automationLevel: "Autonomous Advance + Strategic Relationship Manager"
  },
  {
    tier: "Large Enterprise / M&A (140+ FTEs)",
    companyExample: "Flanders Biotech Group",
    typicalTriggers: "M&A Buyout of BioGhent Labs (€3.2M), LOI Escrow, D&O Risk",
    kbcCoreProducts: "Acquisition advice, Straight Loans, Valuation advice, Directors' liability",
    annualLtvEur: "€95,000+ / yr",
    automationLevel: "Corporate OneClick with Board itsme® QES"
  }
];

// -------------------------------------------------------------
// COMMERCIAL VIABILITY: CORE BANKING & INSURANCE REVENUE VS FLAT FEE
// -------------------------------------------------------------
export const HIGH_MARGIN_ECONOMICS = {
  legacyComparison: {
    oldFlatDirectoryCommission: {
      label: "Old Model: Flat Directory Referral Fee",
      amountEur: "€67.50 one-time",
      description: "Passive billboard listing. Partner pays small referral lead fee; KBC captures zero recurring margin."
    },
    newOneClickCoreValue: {
      label: "New Model: Core Banking & Insurance Lifetime Value",
      amountEur: "€12,850 5-Year LTV",
      description: "Captures primary operating accounts, high-margin mandatory insurance premiums, and net interest margin on lending."
    }
  },
  revenueStreamsPerSme: [
    {
      productCategory: "Statutory Insurance Underwriting",
      products: "Occupational accident insurance + Industrial property + Directors' liability",
      annualGrossMargin: "€2,120 / year",
      marginPct: "68% - 74% net underwriting profit (KBC Verzekeringen)"
    },
    {
      productCategory: "Corporate Credit & Net Interest Margin",
      products: "Straight Loans + Roll-Over Line of Credit + Car Loan Plus",
      annualGrossMargin: "€3,480 / year",
      marginPct: "4.8% - 5.4% fixed net interest margin"
    },
    {
      productCategory: "Operating Account & Deposit Stickiness",
      products: "KBC Business PRO Premium + Cash pooling + Peppol routing",
      annualGrossMargin: "€840 / year",
      marginPct: "Low-cost core deposits & liquidity stickiness"
    },
    {
      productCategory: "OneClick Platform Take-Rate",
      products: "Cross-partner API execution fee (split with partner net CAC savings)",
      annualGrossMargin: "€520 / year",
      marginPct: "4.5% pure platform fee with zero balance sheet risk"
    }
  ],
  nonClientConversionMetrics: {
    cacSavedForKbc: "€820 saved per newly acquired commercial account",
    timeToFirstProduct: "Reduced from 22 days to 120 seconds",
    multiProductAttachment: "4.2 products activated on Day 1",
    fiveYearChurnRate: "-68% lower churn due to operational lock-in"
  }
};

export const JURY_TRIPLE_WIN_DATA = {
  ecosystemTransformation: {
    oldFlatModel: {
      title: "The Old 'Flat List' Directory (Ecosystem 1.0)",
      description: "Passive billboard listing of 229 separate products. The entrepreneur must manually compare providers, fill multiple KYC forms, and coordinate lawyers/insurers themselves.",
      conversionRate: "1.4%",
      cacForPartner: "€420 - €850 per client",
      timeToResolution: "18 to 25 business days",
      kbcRevenue: "€67.50 one-off referral fee (near zero recurring margin)"
    },
    newOneClickModel: {
      title: "KBC OneClick (Ecosystem 2.0)",
      description: "Autonomous multi-partner chaining under KBC's white-label umbrella. Ingests commercial leases & payroll signals, issuing core high-margin insurance and credit in 1 click.",
      conversionRate: "34.2% (+2,340% increase)",
      cacForPartner: "€0 (Zero cold acquisition cost)",
      timeToResolution: "Under 120 seconds",
      kbcRevenue: "€12,850 5-Year LTV (High-margin insurance + lending NIM + primary deposits)"
    }
  },
  partnerEconomics: [
    {
      partner: "Liantis / Acerta (Social Secretariat)",
      cacSavings: "€320 / enrolled employer",
      escrowPayoutReliability: "100% KBC Guaranteed",
      conversionLift: "+410% vs cold self-serve",
      quote: "KBC sends pre-validated employee NISS tokens, Paritair Comité contracts, and direct Dimona filings. We onboard new employers in seconds without chasing missing paperwork."
    },
    {
      partner: "Berquin Notarissen & M&A Legal Hub",
      cacSavings: "€850 / corporate acquisition deed",
      escrowPayoutReliability: "100% Pre-cleared escrow",
      conversionLift: "+310% execution velocity",
      quote: "From starter deeds to multi-million euro M&A SPA filings, KBC feeds us pre-validated term-sheets and itsme digital powers of attorney."
    },
    {
      partner: "Go Solid Belgium (Unpaid Invoices)",
      cacSavings: "€380 / recovered client file",
      escrowPayoutReliability: "100% KBC Guaranteed advance",
      conversionLift: "+450% collection throughput",
      quote: "When a mid-market company faces a cashflow lag, KBC advances factoring cash immediately and routes uncontested files to us under the Belgian statutory protocol."
    },
    {
      partner: "Luminus / KBC Energy Hub (Fleet EV)",
      cacSavings: "€490 / commercial charging site",
      escrowPayoutReliability: "100% Pre-financed asset lease",
      conversionLift: "+360% corporate EV adoption",
      quote: "Commercial fleets get electric vans and depot high-power chargers bundled in one single KBC lease with zero grid compliance friction."
    }
  ],
  kbcCommercialViability: {
    oneClickPlatformRate: "4.5% B2B OneClick Platform Fee (pure platform margin)",
    averageBasketExpansion: "+€2,850 ARR per active SME",
    churnReduction: "-68% SME attrition due to primary operating account and multi-product lock-in",
    crossSellAttachment: "4.2 products activated on Day 1",
    scalableApiVolume: "Standardized Open Banking & Partner Hub REST webhooks ready for nationwide and CEE rollout"
  },
  roiCalculatorDefaults: {
    smeUserBase: 125000,
    annualOneClickTriggersPerSme: 3.2,
    avgOneClickBasketEur: 2850,
    kbcOrchestrationFeePct: 4.5,
    partnerCacSavedEur: 410
  }
};

// Backward-compatibility aliases for existing sub-components
export const LUCAS_PROFILE = {
  name: COMPANIES.STARTER.founder,
  businessName: COMPANIES.STARTER.name,
  location: COMPANIES.STARTER.location,
  clientStatus: "New-to-Bank Entrepreneur (Acquired via Peppol)",
  currentLegalForm: COMPANIES.STARTER.type,
  vatStatus: "BE 0849.201.884",
  primaryAccount: COMPANIES.STARTER.primaryAccount,
  businessProAccount: COMPANIES.STARTER.primaryAccount,
  creditScore: COMPANIES.STARTER.creditScore,
  relationshipManager: COMPANIES.STARTER.relationshipManager
};

export const SCENARIOS = {
  STAGE_A: {
    ...COMPANIES.STARTER.predictedEvent,
    id: "stage_a",
    tag: "MILESTONE 1: FIRST EMPLOYEE",
    title: COMPANIES.STARTER.predictedEvent.kateCard.title,
    subtitle: COMPANIES.STARTER.predictedEvent.kateCard.headline,
    acquisitionSource: "Kate Invoicing & Billit Telemetry",
    requiredData: {
      documentType: "Interim Invoices (NOWJOBS) + Draft Permanent Contract",
      extractedFields: [
        { label: "New Hire", value: "Sarah De Mulder (Head Chef)" },
        { label: "Paritair Comité", value: "PC 302 (Horeca)" },
        { label: "Gross Wage", value: "€2,650.00 / mo" },
        { label: "Current Interim Cost", value: "€5,280.00 / mo" }
      ]
    },
    detectedSignal: {
      type: "INTERIM AGENCY OVERPAYMENT",
      source: "Billit Peppol Stream",
      detectedAt: "Today, 10:15 CET",
      summary: "Paying 2.2x interim agency markup for Sarah for 4 consecutive months.",
      riskIdentified: "Heavy margin loss (€1,420/mo) and lack of statutory accident cover.",
      opportunity: "Transition to permanent staff with mandatory accident cover & €3,100 VLAIO grant.",
      kbcCapabilitiesUsed: ["Occupational accident insurance", "KBC Team Protect Plan", "Business Budget Facility", "eBox"]
    }
  },
  STAGE_B: {
    ...COMPANIES.PROFITABLE_GROWTH.predictedEvent,
    id: "stage_b",
    tag: "GROWTH: FLEET & DEPOT",
    title: COMPANIES.PROFITABLE_GROWTH.predictedEvent.kateCard.title,
    subtitle: COMPANIES.PROFITABLE_GROWTH.predictedEvent.kateCard.headline,
    acquisitionSource: "Fleet Fuel Telemetry & Depot Capacity",
    requiredData: {
      documentType: "Fuel Invoices + Depot Telemetry",
      extractedFields: [
        { label: "Fleet Size", value: "12 Delivery Vans" },
        { label: "Monthly Diesel", value: "€48,200.00" },
        { label: "Depot Load", value: "94% Capacity" }
      ]
    },
    detectedSignal: {
      type: "FLEET CARBON PENALTY & DEPOT BOTTLENECK",
      source: "Fleet Telematics & Invoices",
      detectedAt: "Today, 11:30 CET",
      summary: "Depot capacity maxing out and carbon taxes increasing next quarter.",
      riskIdentified: "Lost delivery contracts and €62k/yr in Flemish fleet carbon surcharges.",
      opportunity: "12-EV Lease via Car Loan Plus + €350k Straight Loan for Waregem depot expansion.",
      kbcCapabilitiesUsed: ["Car Loan Plus", "B2B Asset Financing - Partner Hub", "Industrial property insurance", "Straight Loans"]
    }
  }
};

// Aliases for the 3-Chapter Lifecycle Story
COMPANIES.STARTER = COMPANIES.STAGE_1_FIRST_HIRE;
COMPANIES.PROFITABLE_GROWTH = COMPANIES.STAGE_2_OFFICE_SPACE;
COMPANIES.DISTRESSED_DOWNTURN = COMPANIES.STAGE_2_OFFICE_SPACE;
COMPANIES.ENTERPRISE_MA = COMPANIES.STAGE_3_FLEET_SCALING;
