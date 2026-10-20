# 🚀 KBC OneClick — Ecosystem Orchestrator
**Tectonic Hackathon Finals Proof of Concept (PoC) for KBC Bank & Insurance (Belgium)**

> **Guiding Question:** *How can KBC help customers achieve important life and business goals before they realise they need help?*

---

## 🌟 Executive Summary & Pivot to Core High-Margin Inflections
Instead of forcing entrepreneurs to browse KBC's flat catalog of **229 isolated products and third-party partners**, **KBC OneClick** detects emerging business intent from raw invoice and document signals (even from **non-clients**!), chains ecosystem partners together "under the hood" inside a **KBC Blackbox**, and lets entrepreneurs execute complex legal, government, staffing, and financial workflows with **one click** (itsme® / KBC Sign).

### 💡 Where is the Benefit for KBC Bigger? (High Margins vs. Referral Fees)
* **The Old Thinking:** Earn a minor, one-time referral commission (~€35–€60).
* **The OneClick Engine:** Partner chaining serves as an organic Trojan Horse to sell **KBC's highest-margin core products**:
  1. **Primary Operating Accounts:** Captures sticky SME operating balances (`KBC Business PRO Account`).
  2. **Statutory High-Margin Insurances:** Mandatory `Occupational accident insurance` (61.2% combined ratio), `Office and building insurance`, and `Corporate fleet insurance`.
  3. **SME Credit & Net Interest Margin:** `Investment loan` (1.85% net interest margin spread), `Rental guarantee in escrow`, and `Asset leasing` via KBC Autolease.
  4. **5-Year Customer Lifetime Value (LTV):** Increases from ~€50 to **€9,850 – €24,800+ per SME**.

---

## 📖 The Continuous Entrepreneurial Story: Ghent Craft Foods BV
Follow founder Lucas De Clercq across 3 scaling chapters:

### Chapter 1: First Permanent Hire (Small SME • 1–2 FTEs)
* **Signal Ingested:** 4 consecutive monthly interim agency invoices from NOWJOBS (€5,280/mo).
* **Algorithmic Finding:** Inefficiency detected. Switching to a permanent employee under Joint Committee PC 302 saves **€1,420/month** and secures a **€3,100 VLAIO grant**.
* **KBC Core Revenue:** Statutory KBC Occupational Accident Insurance (€1,820/yr).
* **Chained Partners:** Liantis Social Secretariat, eBox Dimona IN, Vlaamse Overheid VLAIO.

### Chapter 2: Dok Noord Commercial Office & Kitchen (Middle Growth • 3–10 FTEs)
* **Signal Ingested:** Commercial lease deed draft (€2,800/mo) + kitchen equipment quote (€85,000).
* **Algorithmic Finding:** Debt Service Coverage Ratio ($DSCR = 1.49x \ge 1.35x$) pre-approves automated commercial lending.
* **KBC Core Revenue:** 3-month Rental Guarantee Escrow (€8,400 locked), €85,000 Fit-Out Investment Loan (3.65% fixed), Office & Building Property Insurance (€2,450/yr).
* **Chained Partners:** De Immowinkel EPC compliance, Setle green renovation audit.

### Chapter 3: EV Fleet Scaling (Scaling Enterprise • 10–35 FTEs)
* **Signal Ingested:** Third-party courier invoices surging to €6,400/month.
* **Algorithmic Finding:** In-housing 3 electric delivery vans yields **+€2,450/month net TCO savings** and unlocks **€12,600** in Flemish clean logistics subsidies.
* **KBC Core Revenue:** €160k KBC Car Loan Plus / Asset Leasing + Commercial Fleet Insurance.
* **Chained Partners:** MoveSmart smart charging depot installation, Luminus commercial power.

---

## 🧠 Autonomous Algorithmic Decision Engine
The platform includes an authentic deterministic decision engine ([`src/services/kbcDecisionEngine.js`](./src/services/kbcDecisionEngine.js)):
* **Dynamic Multi-Factor Confidence Scoring:** Evaluates invoice recurrence, margin loss severity, subsidy certainty, and statutory liability.
* **Silent Passive Observation:** Below the **85% threshold**, Kate remains quiet to prevent alert fatigue.
* **Action Threshold ($\ge 85\%$):** Triggers proactive conversational notification once corroborating evidence confirms business need.
* **Multi-Branch Stakeholder Inspection:**
  * **Treasury & Finance:** Net interest margin spreads and insurance combined ratios.
  * **Credit Risk Underwriting:** $DSCR \ge 1.35x$, CRR Basel III SME factor (0.7619), and Belgian Labor Code Art. 49 compliance.
  * **Branch Managers:** 88% reduction in paperwork; 140ms digital onboarding via itsme® and eBox.
  * **Marketing:** Zero-CAC customer acquisition via Peppol B2B invoice streams.

---

## 📱 Interactive Views & Features
1. **Customer Experience:**
   * Responsive laptop and native mobile views.
   * Kate Copilot as a conversational abstraction layer with direct **itsme® QES authentication**.
   * Live animated domino visualizer tracking multi-partner execution in sub-second latency.
   * Swappable partners (Liantis $\leftrightarrow$ Acerta $\leftrightarrow$ Securex).
2. **Under-the-Hood Engine:**
   * Mathematical confidence accumulator and deduction logic visualizer.
   * Non-client acquisition graph and enterprise scalability matrix.
3. **Jury Triple-Win View:**
   * Commercial economics model and interactive ROI calculator for Belgian SME portfolios.

---

## 🛠 Tech Stack & Running Instructions

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom KBC Brand Palette
- **Icons:** Lucide React
- **Celebration Feedback:** Canvas Confetti

### To run locally:
```bash
cd kbc-oneclick-app
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser or scan the QR code on your mobile phone.
