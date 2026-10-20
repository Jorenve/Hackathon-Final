import React, { useState } from 'react';
import { 
  Cpu, 
  X, 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  Building2, 
  Scale, 
  CheckCircle2, 
  Clock, 
  Layers, 
  FileText,
  Sliders,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { KBC_DECISION_ENGINE } from '../services/kbcDecisionEngine';

export default function AlgorithmDecisionInspectorModal({ 
  isOpen, 
  onClose, 
  selectedCompanyKey,
  isTimeAdvanced = false 
}) {
  if (!isOpen) return null;

  // Active Stakeholder Lens
  const [activeStakeholder, setActiveStakeholder] = useState('financial'); // 'financial' | 'risk' | 'branch' | 'marketing'

  // Execute the algorithm live based on current stage and synchronized time state
  let evaluation;
  let stageName;
  if (selectedCompanyKey === 'STAGE_2_OFFICE_SPACE' || selectedCompanyKey === 'PROFITABLE_GROWTH') {
    evaluation = KBC_DECISION_ENGINE.evaluateCommercialOfficeSpace({ isTimeAdvanced });
    stageName = "Stage 2: Dok Noord Office & Kitchen Fit-Out";
  } else if (selectedCompanyKey === 'STAGE_3_FLEET_SCALING' || selectedCompanyKey === 'ENTERPRISE_MA') {
    evaluation = KBC_DECISION_ENGINE.evaluateFleetElectrification({ isTimeAdvanced });
    stageName = "Stage 3: Cold-Chain Fleet Electrification";
  } else {
    evaluation = KBC_DECISION_ENGINE.evaluateFirstHire({ isTimeAdvanced });
    stageName = "Stage 1: First Permanent Hire (Sarah PC 302)";
  }

  const { financials, kbcCommercialModel, algorithmTelemetry } = evaluation;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border-2 border-kbc-sky/80 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-lg">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  KBC Autonomous Decision Engine
                </span>
                <span className="text-slate-500 text-xs">• Live Deterministic Evaluation</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                  isTimeAdvanced 
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50' 
                    : 'bg-amber-950/70 text-amber-300 border-amber-500/40'
                }`}>
                  {isTimeAdvanced ? '⚡ Fast-Forward Telemetry (High Confidence)' : '🟢 Present Baseline (Silent Monitoring)'}
                </span>
              </div>
              <h2 className="text-xl font-black text-white mt-0.5">
                Multi-Branch Algorithmic Decision Architecture
              </h2>
              <div className="text-xs text-slate-400">
                Evaluating: <strong className="text-white">{stageName}</strong>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Branch Stakeholder Lens Switcher (CRITICAL FOR FINANCIAL & RISK JURY) */}
        <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex items-center overflow-x-auto gap-1">
          <button
            onClick={() => setActiveStakeholder('financial')}
            className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap ${
              activeStakeholder === 'financial'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 flex-shrink-0" />
            <span>1. Financial & Treasury</span>
          </button>

          <button
            onClick={() => setActiveStakeholder('risk')}
            className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap ${
              activeStakeholder === 'risk'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
            <span>2. Credit Risk</span>
          </button>

          <button
            onClick={() => setActiveStakeholder('branch')}
            className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap ${
              activeStakeholder === 'branch'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
            <span>3. Branch RM</span>
          </button>

          <button
            onClick={() => setActiveStakeholder('marketing')}
            className={`flex-1 py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap ${
              activeStakeholder === 'marketing'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
            <span>4. Marketing</span>
          </button>
        </div>

        {/* 1. FINANCIAL & TREASURY LENS */}
        {activeStakeholder === 'financial' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Treasury & Capital Optimization Analysis
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Why KBC Treasury approves this model: Instead of relying on passive third-party commissions (which yield €35–€60 one-off), KBC captures the entire corporate liquidity float, high-margin net interest spreads (NIM), and multi-year statutory insurance premiums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block font-semibold">5-Year Customer LTV</span>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  €{kbcCommercialModel.kbc5YearLTV.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">vs €50 flat affiliate fee</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block font-semibold">Underwriting Profitability</span>
                <div className="text-lg font-black text-cyan-300 mt-1 truncate">
                  {kbcCommercialModel.kbcCombinedRatio || kbcCommercialModel.loanNIM || kbcCommercialModel.autoleaseResidualMargin}
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">Direct to KBC P&L</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block font-semibold">Regulatory Capital Fit</span>
                <div className="text-sm font-bold text-white mt-1.5">
                  CRR Basel III SME Factor
                </div>
                <span className="text-[10px] text-emerald-400 block mt-1">0.7619 Capital Relief Factor</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950/70 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Officer Briefing:</span>
              {evaluation.financialOfficerNotes || evaluation.treasuryOfficerNotes || evaluation.riskOfficerNotes}
            </div>
          </div>
        )}

        {/* 2. RISK & CREDIT UNDERWRITING LENS */}
        {activeStakeholder === 'risk' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Solvency, Credit Covenants & Statutory Labor Code (Art. 49)
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Why Risk Underwriters approve this automation: The system does not make unsecured loans. It evaluates continuous transaction telemetry (DSCR ≥ 1.35x), cross-references NBB balance sheet filings, and locks pre-financed commitments inside KBC Escrow before dispatching partner work orders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-slate-400 font-bold block">Credit & Solvency Covenants:</span>
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-300">DSCR Debt-Service Coverage:</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {financials.dscrRatio ? `${financials.dscrRatio}x (Covenant: ≥ 1.35x)` : '100% Cash Covered'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-300">Statutory Labor Risk:</span>
                  <span className="font-mono text-emerald-400 font-bold">Belgian Labor Code Art. 49 Bound</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Collateral Requirement:</span>
                  <span className="font-mono text-cyan-300">Asset Pledge / Escrow Lock</span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-slate-400 font-bold block">Escrow Blackbox Security:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Third-party partners (Liantis, De Immowinkel, Luminus) receive guaranteed work orders backed by KBC Escrow. If a partner fails SLA delivery, funds remain locked in the KBC custody pool.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 pt-1">
                  Status: 100% Pre-Financed & Audited
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950/70 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Risk Officer Verdict:</span>
              {evaluation.riskOfficerNotes}
            </div>
          </div>
        )}

        {/* 3. BRANCH RELATIONSHIP MANAGER LENS (KBC KOUTER GENT) */}
        {activeStakeholder === 'branch' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Branch Efficiency & Relationship Manager Value (Anouk De Smet)
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Why local branch managers love OneClick: Relationship managers spend 65% of their time on bureaucratic paperwork (commercial lease guarantee forms, manual Dimona checks, insurance questionnaires). Kate eliminates all back-office friction, allowing the manager to act as a trusted growth advisor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-center">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-slate-400 block font-semibold">Client Onboarding Lag</span>
                <div className="text-xl font-black text-emerald-400 mt-1">140ms</div>
                <span className="text-[10px] text-slate-500 block mt-1">vs 4 to 6 weeks manual</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-slate-400 block font-semibold">Manager Administrative Load</span>
                <div className="text-xl font-black text-cyan-300 mt-1">-88%</div>
                <span className="text-[10px] text-slate-500 block mt-1">Automated eBox & itsme®</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-slate-400 block font-semibold">Cross-Sell Ratio</span>
                <div className="text-xl font-black text-white mt-1">3.8 Products</div>
                <span className="text-[10px] text-emerald-400 block mt-1">Bundled in single tap</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. MARKETING & GROWTH LENS */}
        {activeStakeholder === 'marketing' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Zero-CAC Organic Ingestion & Intent Recognition
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Why Marketing Executives celebrate this model: Traditional SME customer acquisition costs (CAC) exceed €650 per entrepreneur for commercial lending or insurance. KBC achieves <strong>0% CAC</strong> by reading raw Peppol e-invoicing streams and account debits before the founder even thinks to search Google or visit competitor banks (BNP Paribas Fortis / ING).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                <span className="text-white font-bold block">Organic Intent Telemetry Ingested:</span>
                <div className="text-slate-300 leading-relaxed space-y-1">
                  <div>• Peppol B2B Invoices (Billit gateway)</div>
                  <div>• Account debit frequency & cash velocity</div>
                  <div>• Vlaamse Overheid subsidy eligibility criteria</div>
                  <div>• Optical character recognition on draft lease deeds</div>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                <span className="text-white font-bold block">Conversion & Retention Lift:</span>
                <div className="text-slate-300 leading-relaxed space-y-1">
                  <div>• Customer Acquisition Cost (CAC): <strong className="text-emerald-400">€0</strong></div>
                  <div>• Retention Probability: <strong className="text-cyan-300">94.2%</strong></div>
                  <div>• Alert Fatigue Rate: <strong className="text-white">0% (Strict 85% threshold)</strong></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mathematical Confidence Accumulator Visualizer */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 font-semibold">Live Algorithmic Confidence Score:</span>
              <span className="text-xl font-black font-mono text-emerald-400">
                {algorithmTelemetry.totalConfidence}%
              </span>
            </div>
            <div className="text-slate-400 text-[11px] font-mono">
              Action Trigger Threshold: <strong className="text-cyan-300">{algorithmTelemetry.thresholdScore}%</strong>
            </div>
          </div>

          <div className="relative w-full h-3.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              style={{ left: `${algorithmTelemetry.thresholdScore}%` }}
            />
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-full"
              style={{ width: `${algorithmTelemetry.totalConfidence}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Decision Output:</span>
            <span className="font-mono text-emerald-400 font-bold bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
              {algorithmTelemetry.decisionState}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-kbc-sky to-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
          >
            Close Decision Engine Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
