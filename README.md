# 🚀 KBC OneClick Syndicate — AI Ecosystem Orchestrator
**Tectonic Hackathon Finals Proof of Concept (PoC) for KBC Bank & Insurance (Belgium)**

> **Guiding Question:** *How can KBC help customers achieve important life and business goals before they realise they need help?*

---

## 🌟 Executive Summary & Pivot to Core High-Margin Inflections
Instead of forcing entrepreneurs to browse KBC's flat catalog of **229 isolated products and third-party partners**, **KBC OneClick Syndicate** detects emerging business intent from raw invoice and document signals (even from **non-clients**!), chains ecosystem partners together "under the hood" inside a **KBC Blackbox**, and lets entrepreneurs execute complex legal, government, staffing, and financial workflows with **one click** (itsme® / KBC Sign).

### 💡 Where is the Benefit for KBC Bigger? (High Margins vs. Referral Fees)
* **The Old Thinking:** Earn a minor, one-time 4.5% referral commission (~€67.50).
* **The Syndicate Engine:** Chaining partners is a **Trojan Horse to sell KBC's highest-margin core products**:
  1. **Primary Operating Accounts:** Captures sticky SME operating balances (`KBC Business PRO Account`).
  2. **Statutory High-Margin Insurances:** Mandatory `Occupational accident insurance` (68% net margin), `Office and building insurance` (72% net margin), and `Business liability insurance`.
  3. **SME Credit & Net Interest Margin:** `Investment loan` (5.4% fixed margin) and `Business Budget Facility` (payroll buffer).
  4. **5-Year Customer Lifetime Value (LTV):** Increases from €67.50 to **€12,850+ per SME**.

---

## 📡 Attracting Non-Clients: How KBC Gets Data Without Existing Accounts

KBC captures non-clients at the exact moment they experience a business milestone via 3 automated rails:
1. **The Peppol & E-Invoicing Counterparty Graph:** KBC processes ~42% of B2B transactions in Flanders. When an existing KBC commercial client (e.g., landlord, raw material supplier) issues an invoice or deposit request to a non-KBC SME over Peppol/Billit, KBC's network graph triangulates the non-client recipient.
2. **Kate "Smart Contract & Lease Auditor" (Open Web Tool):** Non-clients drag & drop a draft commercial lease, employment agreement, or supplier contract into Kate's free web tool for an instant legal/rent audit.
3. **Accountant API Bridge (Silverfin / Yuki / Odoo):** Certified Belgian accountants trigger the syndicate directly inside their accounting software (`Send an expense claim to your accountant`), eliminating manual notary and social secretariat paperwork.
4. **1-Click Onboarding via itsme®:** Identity is verified and the `KBC Business PRO Account` is created on the fly in 120 seconds.

---

## 🎯 Two Universal Core Life Inflection Milestones

### 1. Milestone 1: "The First Commercial Workspace / Studio Lease" (Attracting Non-Clients)
* **The Unseen Signal:** Ingests a draft 9-year commercial lease (`Handelshuurovereenkomst Korenmarkt 14, Gent`) or landlord deposit invoice via Peppol/Kate.
* **The Friction:** Landlord requires a 3-month rental deposit (€6,300), building fire insurance, commercial liability, lease registration with the Belgian tax office (FOD Financiën), and €15,000 fit-out financing.
* **The 1-Click Solution:** Kate pre-assembles the digital `Rental guarantee`, auto-binds `Office and building insurance`, files mandatory lease registration via `eBox`, and disburses a €15,000 `Investment loan` into a newly opened `KBC Business PRO Account`.

### 2. Milestone 2: "Hiring the Very First Permanent Employee" (6 Months Later)
* **The Unseen Signal:** Analyzes consecutive monthly interim invoices (>€5,200/mo on NOWJOBS/interim) in `E-invoicing - Billit`. Lucas is ready to hire Sarah (Head Chef) permanently, saving €1,420/month.
* **The Friction:** Belgian labor law strictly mandates RSZ/ONSS employer registration, immediate Dimona IN filing, a contracted Social Secretariat (Liantis/Acerta), and mandatory `Occupational accident insurance` before minute one.
* **The 1-Click Solution:** Kate auto-binds statutory `Occupational accident insurance`, enrolls with the Social Secretariat (Liantis/Acerta - swappable!), dispatches instant Dimona IN to the government, claims the €3,100 Flemish Region wage subsidy (VLAIO), and opens a `Business Budget Facility`.

---

## 🏢 Enterprise & Big Company Scalability

The 3-layer architecture scales seamlessly from 1 sole proprietor to 500+ FTE mid-market corporates:
* **Growing SME (2 - 15 FTEs):** 1st Employee, Factoring overdue invoices, Equipment leasing, Vehicle fleet.
* **Mid-Market Corporate (15 - 100 FTEs):** Fleet EV transition (`Car Loan Plus`, `KBC Employee Mobility - MoveSmart`), factory lease (`Industrial property insurance`), multi-currency FX hedging (`Go&Deal Pro`).
* **Large Enterprise (100 - 500+ FTEs):** Supply chain bank guarantees (`International bank guarantees`), import finance (`Documentary credit for imports`), multi-entity liquidity pooling (`Cash pooling`, `ComFin Touch`).

---

## 📱 Three Interactive Views in the Application

1. **View 1: Customer Mobile Experience (One Action at a Time)**
   - Smartphone shell in KBC Navy (`#003366`) and Cyan (`#00AEEF`).
   - Non-Client Ingestion indicator explaining how Lucas was acquired via Peppol/Kate.
   - Proactive Kate 1-Click Action Card with guaranteed net financial outcome.
   - In-place Domino progress execution with real-time checkmarks and confetti.
   - Expandable **"Under the Hood: View Verified Syndicate & Partner Controls"** drawer with 1-tap partner swapping (e.g. swap Liantis for Acerta or Securex).
   - Sequential story advancement: Milestone 1 ➔ Fast-Forward 6 Months ➔ Milestone 2.

2. **View 2: Under-the-Hood "Domino API" (Architecture View)**
   - Interactive visual node graph with live simulated JSON webhook payloads.
   - Dedicated tab: **Non-Client Ingestion & Peppol XML Data Rails**.
   - Dedicated tab: **Big Company & Mid-Market Scalability Matrix**.

3. **View 3: Partner & KBC Triple-Win Dashboard (Jury Pitch View)**
   - High-Margin Core Products vs. Flat Commission breakdown (€12,850 LTV vs €67.50).
   - Zero-CAC non-client acquisition metrics (€820 saved per commercial account).
   - Interactive ROI & Market Scale Calculator for the Belgian SME market.

---

## 🛠 Tech Stack & Running Instructions

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom KBC Brand Palette
- **Icons:** Lucide React
- **Celebration Feedback:** Canvas Confetti

### To run locally:
```bash
cd kbc-syndicate-app
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
