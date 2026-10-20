import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Lock, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Settings2, 
  HelpCircle, 
  Check, 
  RotateCcw,
  Zap,
  TrendingUp,
  FileCheck2,
  Building,
  CreditCard,
  Users,
  Send,
  Sliders,
  DollarSign,
  AlertCircle,
  FastForward,
  UserPlus,
  Landmark,
  FileSearch,
  BadgePercent,
  Play,
  Briefcase,
  Layers,
  Activity,
  Server,
  Brain,
  Gauge,
  Target
} from 'lucide-react';
import { COMPANIES } from '../../data/mockData';
import { ALGORITHM_THINKING_MODELS } from '../../data/algorithmThinking';

export default function CustomerView({ 
  selectedCompanyKey, 
  isTimeAdvanced,
  setIsTimeAdvanced,
  executionState, 
  setExecutionState,
  onExecuteTrigger
}) {
  const company = COMPANIES[selectedCompanyKey] || COMPANIES.STAGE_1_FIRST_HIRE;
  const predicted = company.predictedEvent;
  const normal = company.normalState;
  const thinking = ALGORITHM_THINKING_MODELS[selectedCompanyKey] || ALGORITHM_THINKING_MODELS.STAGE_1_FIRST_HIRE || ALGORITHM_THINKING_MODELS.STARTER;

  const currentConfidence = isTimeAdvanced ? thinking.advancedConfidence : thinking.baselineConfidence;
  const hasCrossedThreshold = currentConfidence >= thinking.thresholdScore;
  const confidenceDelta = (thinking.advancedConfidence - thinking.baselineConfidence).toFixed(1);

  const [showUnderTheHood, setShowUnderTheHood] = useState(false);
  const [showKateChatModal, setShowKateChatModal] = useState(false);
  const [showItsmeModal, setShowItsmeModal] = useState(false);
  const [swappedPartners, setSwappedPartners] = useState({});
  const [swapModalOpen, setSwapModalOpen] = useState(null);
  const [showAlgorithmDetails, setShowAlgorithmDetails] = useState(false);
  const [expandedSignalId, setExpandedSignalId] = useState(null);

  // Handle itsme confirmation
  const handleConfirmItsme = () => {
    setShowItsmeModal(false);
    onExecuteTrigger();
  };

  // Trigger confetti when completed
  useEffect(() => {
    if (executionState.isComplete) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [executionState.isComplete]);

  return (
    <div className="space-y-6">
      
      {/* 1. TOP STATS & FINANCIAL TELEMETRY BAR (WIDE DESKTOP LAYOUT) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Company Identity */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-md flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-kbc-blue to-kbc-sky flex items-center justify-center font-black text-white text-base shadow-md flex-shrink-0">
            {company.name.substring(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-extrabold text-white truncate">{company.name}</span>
            </div>
            <div className="text-xs text-slate-400 truncate">{company.sector}</div>
            <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-md font-semibold border ${company.badgeColor}`}>
              {company.healthBadge}
            </span>
          </div>
        </div>

        {/* Available Liquidity */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-md">
          <span className="text-xs font-semibold text-slate-400 block">Available Liquidity</span>
          <div className="text-xl font-black text-emerald-400 mt-1">{company.balance}</div>
          <span className="text-[11px] text-slate-500 font-mono mt-0.5 block truncate">
            {company.primaryAccount}
          </span>
        </div>

        {/* Operating Revenue / EBITDA */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-md">
          <span className="text-xs font-semibold text-slate-400 block">Revenue & Run-Rate</span>
          <div className="text-xl font-black text-white mt-1">{company.revenue}</div>
          <span className="text-[11px] text-cyan-300 font-semibold mt-0.5 block">
            EBITDA: {company.ebitda} ({company.headcount})
          </span>
        </div>

        {/* Timeline & Engine Status */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block">Timeline State</span>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`w-2.5 h-2.5 rounded-full ${isTimeAdvanced ? 'bg-cyan-400 animate-pulse' : 'bg-emerald-400'}`}></span>
              <span className="text-sm font-bold text-white">
                {isTimeAdvanced ? predicted.timeOffset : 'Present Baseline'}
              </span>
            </div>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            {isTimeAdvanced ? predicted.date : normal.date}
          </span>
        </div>

      </div>

      {/* ============================================================== */}
      {/* STATE A: NORMAL BASELINE STATE (BEFORE ADVANCING TIME)          */}
      {/* ============================================================== */}
      {!isTimeAdvanced ? (
        <div className="space-y-6 animate-fadeIn">
          
          {/* 1. SLEEK KATE SILENT OBSERVATION BANNER (CLIENT-APPROPRIATE) */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-kbc-sky" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-kbc-sky uppercase tracking-wider whitespace-nowrap">
                      Kate Proactive Intelligence
                    </span>
                    <span className="text-slate-500 text-xs font-mono whitespace-nowrap hidden sm:inline">• Continuous Background Telemetry</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-0.5 truncate">
                    Silent Monitoring Active • No Bottlenecks Detected
                  </h3>
                </div>
              </div>

              {/* Status Pill & Telemetry Toggle */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="px-3 py-1.5 rounded-full bg-slate-950 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center space-x-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span>Confidence: {currentConfidence.toFixed(0)}% (Below 85% Threshold)</span>
                </div>

                <button
                  onClick={() => setShowAlgorithmDetails(!showAlgorithmDetails)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-cyan-300 text-xs font-bold border border-slate-700 transition-all flex items-center space-x-1.5 whitespace-nowrap flex-shrink-0"
                >
                  <Eye className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{showAlgorithmDetails ? 'Hide Signals' : 'Inspect Signals'}</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
              Kate is actively listening to Peppol e-invoices (<code className="text-cyan-300">{company.vatNumber}</code>), account balances, and statutory filings. To eliminate notification fatigue, Kate will only prompt you with an action card once multiple corroborating signals cross the <strong>85% confidence threshold</strong>.
            </p>

            {/* Collapsible Telemetry Signals (Expandable on demand) */}
            {showAlgorithmDetails && (
              <div className="pt-3 border-t border-slate-800 space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Telemetry Signals ({thinking.evidenceSignals.filter(s => s.baseline.active).length} of 4 Confirmed):</span>
                  <span className="font-mono text-amber-400">Current Score: {currentConfidence.toFixed(1)}% / 85.0% Required</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {thinking.evidenceSignals.map((sig) => (
                    <div 
                      key={sig.id}
                      className={`p-2.5 rounded-xl border text-xs ${
                        sig.baseline.active 
                          ? 'bg-slate-950 border-emerald-500/40 text-slate-200' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold">
                        <span>{sig.baseline.active ? '✓ ' : '○ '}{sig.label}</span>
                        <span className="font-mono text-[11px] text-slate-400">Weight {sig.weight}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Status: <strong className="text-slate-300">{sig.baseline.status}</strong> (+{sig.baseline.points} pts)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* 2. OPERATIONAL TELEMETRY & TIME ADVANCEMENT SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 Columns: Current Operating Snapshot */}
            <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Current Operational Snapshot</h3>
                </div>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-mono">
                  Live Banking Telemetry
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">{normal.headline}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {normal.description}
                </p>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {normal.kpis.map((kpi, kIdx) => (
                  <div key={kIdx} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 block">{kpi.label}</span>
                    <span className="text-base font-extrabold text-white mt-1 block">{kpi.value}</span>
                  </div>
                ))}
              </div>

              {/* Peppol Ingestion Feed */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
                <Sparkles className="w-5 h-5 text-kbc-sky flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-0.5">Continuous Peppol Triangulation Active</strong>
                  Kate is actively monitoring Peppol stream <code className="text-cyan-300">iso6523-actorid-upis::{company.vatNumber}</code>. Ingesting invoices over subsequent billing cycles will build confidence towards the 85% threshold.
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Time Advancement Trigger Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-kbc-blue via-slate-900 to-[#001f3f] p-6 rounded-3xl border-2 border-kbc-sky shadow-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Advance Time Simulation</span>
                </div>

                <h3 className="text-lg font-black text-white leading-tight">
                  Fast-Forward to {predicted.date} ({predicted.timeOffset})
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Watch Kate ingest subsequent monthly Peppol invoices and statutory filings. Confidence will surge from <span className="text-amber-400 font-bold font-mono">{currentConfidence.toFixed(1)}%</span> to <span className="text-emerald-400 font-bold font-mono">{thinking.advancedConfidence.toFixed(1)}%</span>, crossing the 85% threshold and prompting the 1-click execution card!
                </p>

                <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-700/80 space-y-1.5 text-xs">
                  <div className="text-cyan-300 font-bold text-[11px] uppercase">Inflection Being Simulated:</div>
                  <div className="text-white font-semibold">{predicted.triggerType}</div>
                  <div className="text-emerald-400 text-[11px] font-mono">Predicted Confidence Jump: +{confidenceDelta}%</div>
                </div>
              </div>

              <button
                onClick={() => setIsTimeAdvanced(true)}
                className="w-full py-4 px-4 bg-gradient-to-r from-kbc-sky via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-kbc-sky text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-kbc-sky/30 flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.01] active:scale-98"
              >
                <FastForward className="w-4 h-4 fill-current" />
                <span>Advance Time to Cross 85% Threshold</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      ) : (

        /* ============================================================== */
        /* STATE B: PREDICTED EVENT (THE 1-CLICK KATE ACTION EXPERIENCE)   */
        /* ============================================================== */
        <div className="space-y-6 animate-fadeIn">
          
          {/* Kate Proactive Alert & Dynamic Confidence Surge Banner */}
          <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-kbc-blue/80 border-2 border-emerald-500/60 rounded-3xl p-6 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex items-start space-x-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0 text-slate-950">
                  <Sparkles className="w-6 h-6 flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0"></span>
                      <span>Action Threshold Reached ({currentConfidence.toFixed(1)}% ≥ 85.0%)</span>
                    </span>
                    <span className="text-slate-400 text-xs font-mono whitespace-nowrap">• {predicted.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-1 leading-snug">
                    {predicted.kateCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-3xl leading-relaxed">
                    {predicted.kateCard.headline}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-start flex-shrink-0">
                <button
                  onClick={() => setIsTimeAdvanced(false)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all flex items-center space-x-1.5 whitespace-nowrap"
                  title="Rewind to see silent mode below 85% threshold"
                >
                  <RotateCcw className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Rewind to Baseline</span>
                </button>

                <button
                  onClick={() => setShowAlgorithmDetails(!showAlgorithmDetails)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap"
                >
                  <FileSearch className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{showAlgorithmDetails ? 'Hide Details' : 'Inspect Details'}</span>
                </button>
              </div>
            </div>

            {/* Confidence Surge Telemetry Strip */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 font-semibold">Accumulated Confidence:</span>
                  <span className="text-xl font-black font-mono text-emerald-400">
                    {currentConfidence.toFixed(1)}%
                  </span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    +{confidenceDelta}% Surge (Crossed 85% Trigger)
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Trigger condition: <code className="text-cyan-300 font-mono font-bold">Confidence &ge; 85.0% &rarr; Prompt Active</code>
                </div>
              </div>

              {/* Progress bar showing surge beyond threshold */}
              <div className="relative w-full h-3.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  style={{ left: `${thinking.thresholdScore}%` }}
                />
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-700 ease-out rounded-full"
                  style={{ width: `${currentConfidence}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-500">Baseline was {thinking.baselineConfidence.toFixed(1)}% (Silent)</span>
                <span className="text-white font-mono font-semibold">Threshold: 85%</span>
                <span className="text-emerald-400 font-bold font-mono">Current: {currentConfidence.toFixed(1)}% (4 of 4 Signals Verified)</span>
              </div>
            </div>

            {/* Expandable Algorithm Insight */}
            {showAlgorithmDetails && (
              <div className="mt-4 pt-4 border-t border-slate-700/80 text-xs space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-extrabold uppercase">{predicted.triggerType}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{thinking.modelName}</span>
                </div>
                <p className="text-slate-200 leading-relaxed">{predicted.algorithmInsight}</p>
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[11px] text-cyan-200 font-mono">
                  Formula: {thinking.confidenceFormula}
                </div>
              </div>
            )}
          </div>

          {/* TWO COLUMN WIDE SCREEN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 Columns: The OneClick Action Card */}
            <div className="lg:col-span-7 bg-slate-900/95 rounded-3xl border-2 border-kbc-sky/60 p-6 shadow-2xl relative space-y-5">
              
              {/* Kate's Direct Prompt Speech Bubble (Addressing User Feedback) */}
              <div className="bg-gradient-to-r from-cyan-950/70 via-slate-950 to-blue-950/70 p-4 rounded-2xl border border-cyan-500/40 relative">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-kbc-sky flex items-center justify-center font-black text-slate-950 text-xs shadow-md flex-shrink-0 mt-0.5">
                    K
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-cyan-300">Kate asks {company.founder || 'you'}:</span>
                      <span className="text-[10px] text-slate-500 font-mono">Confidence: {currentConfidence.toFixed(1)}%</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      "I noticed your confidence score reached <strong className="text-emerald-400">{currentConfidence.toFixed(1)}%</strong> after analyzing your latest Peppol invoices and telemetry. <strong className="text-cyan-300 underline decoration-cyan-400">Do you want Kate to execute this complete bundle for you in OneClick?</strong>"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-800 gap-2 flex-wrap">
                <div className="flex items-center space-x-2 text-kbc-sky font-extrabold text-sm whitespace-nowrap">
                  <Zap className="w-5 h-5 fill-kbc-sky flex-shrink-0" />
                  <span>KBC OneClick Execution</span>
                </div>
                <span className="text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center space-x-1.5 whitespace-nowrap">
                  <Landmark className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Pre-Underwritten Core Banking</span>
                </span>
              </div>

              {/* Net Outcome KPI Banner */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Guaranteed Single Outcome
                </span>
                <div className="text-base sm:text-lg font-black text-white">
                  {predicted.kateCard.kpiImpact}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80 text-xs">
                  <div>
                    <span className="text-slate-400 block">Upfront Cash Barrier:</span>
                    <span className="font-bold text-emerald-400 text-sm">{predicted.kateCard.cashflowImpact.upfrontCost}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Core KBC Value:</span>
                    <span className="font-bold text-cyan-300 text-sm truncate block">
                      {predicted.kateCard.cashflowImpact.netMonthlyReturn || predicted.kateCard.cashflowImpact.netBenefit || predicted.kateCard.cashflowImpact.instantInflow || predicted.kateCard.cashflowImpact.annualSynergyYield}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chained Deliverables */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Automated Domino Deliverables:
                </div>
                {predicted.kateCard.quickPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200 bg-slate-850/50 p-2.5 rounded-xl border border-slate-800/60">
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-cyan-300 text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Execution Button & State Transitions */}
              <div className="pt-2">
                {executionState.isComplete ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/60 rounded-2xl p-4 text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-emerald-400 font-black text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>OneClick Bundle Fully Executed & Live!</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      All partner work orders dispatched, legal filings confirmed, and core KBC accounts and insurances activated in sub-second latency.
                    </p>
                    <button
                      onClick={() => setIsTimeAdvanced(false)}
                      className="mt-2 text-xs text-cyan-400 hover:underline font-bold inline-flex items-center space-x-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Rewind to Present Baseline</span>
                    </button>
                  </div>
                ) : executionState.isRunning ? (
                  <div className="bg-slate-950 p-4 rounded-2xl border border-kbc-sky/60 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-kbc-sky border-t-transparent rounded-full animate-spin"></span>
                        <span>Executing Multi-Partner Domino Chain...</span>
                      </div>
                      <span className="font-mono text-slate-400">Step {executionState.currentStepIndex + 1} of 4</span>
                    </div>

                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-kbc-blue via-kbc-sky to-emerald-400 h-full transition-all duration-300"
                        style={{ width: `${((executionState.currentStepIndex + 0.5) / 4) * 100}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowItsmeModal(true)}
                    className="w-full py-4 px-6 rounded-2xl font-black text-sm bg-gradient-to-r from-kbc-sky to-cyan-400 hover:from-cyan-400 hover:to-kbc-sky text-slate-950 shadow-xl shadow-kbc-sky/40 flex items-center justify-center space-x-2.5 transition-all transform hover:scale-[1.01] active:scale-98"
                  >
                    <Lock className="w-4 h-4 text-slate-900" />
                    <span>{predicted.kateCard.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Inquiry link */}
              <div className="text-center pt-1">
                <button
                  onClick={() => setShowKateChatModal(true)}
                  className="text-xs text-slate-400 hover:text-cyan-300 underline inline-flex items-center space-x-1"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Where do these services come from? Can I swap partners?</span>
                </button>
              </div>

            </div>

            {/* Right 5 Columns: Domino Steps Live Progress & Glass-Box Partner Controls */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Domino Steps Progression Card */}
              <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-5 space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>Domino Execution Sequence</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Escrow Backed</span>
                </div>

                <div className="space-y-2">
                  {predicted.dominoSteps.map((step, sIdx) => {
                    const isDone = executionState.completedSteps.includes(sIdx);
                    const isCurrent = executionState.currentStepIndex === sIdx;
                    return (
                      <div 
                        key={step.id} 
                        className={`p-3 rounded-2xl border transition-all ${
                          isDone 
                            ? 'bg-slate-950 border-emerald-500/50 text-slate-200' 
                            : isCurrent 
                            ? 'bg-slate-850 border-kbc-sky ring-1 ring-kbc-sky/40' 
                            : 'bg-slate-950/60 border-slate-800/80 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-bold ${isDone ? 'text-emerald-400' : isCurrent ? 'text-cyan-300' : 'text-slate-400'}`}>
                            {isDone ? '✓ ' : isCurrent ? '⚡ ' : `${step.stepNumber}. `}{step.title}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {isDone ? 'Confirmed' : isCurrent ? 'In Flight...' : 'Queued'}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {step.label} • {step.ecosystemPartner}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Glass-Box Partner Controls Card */}
              <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-5 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-kbc-sky" />
                    <span>Under the Hood: Partner Controls</span>
                  </div>
                  <button
                    onClick={() => setShowUnderTheHood(!showUnderTheHood)}
                    className="text-xs text-cyan-300 hover:underline font-semibold"
                  >
                    {showUnderTheHood ? 'Hide' : 'Inspect / Swap'}
                  </button>
                </div>

                <p className="text-xs text-slate-400">
                  You are never locked into any partner. KBC pre-authenticates verified defaults, but you can swap any provider with 1 tap.
                </p>

                {showUnderTheHood && (
                  <div className="space-y-2 pt-2 border-t border-slate-800 animate-fadeIn">
                    {predicted.underTheHoodPartners.map((partner, pIdx) => {
                      const isSwapped = swappedPartners[partner.role];
                      const activePartnerName = isSwapped || partner.defaultPartner;

                      return (
                        <div key={pIdx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-kbc-sky font-semibold">{partner.role}</span>
                            {partner.canSwap ? (
                              <button
                                onClick={() => setSwapModalOpen(pIdx)}
                                className="text-[10px] text-cyan-400 hover:underline flex items-center space-x-1"
                              >
                                <Sliders className="w-3 h-3" />
                                <span>Swap</span>
                              </button>
                            ) : (
                              <span className="text-[10px] text-slate-500 font-mono">Core</span>
                            )}
                          </div>
                          <div className="font-bold text-white text-xs">{activePartnerName}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ---------------- MODAL 1: ITSME CONFIRMATION ---------------- */}
      {showItsmeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-kbc-sky rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center font-bold text-white text-xs">
                  itsme®
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">KBC Sign & itsme® Approval</h3>
                  <p className="text-xs text-slate-400">Qualified Electronic Signature (QES)</p>
                </div>
              </div>
              <button onClick={() => setShowItsmeModal(false)} className="text-slate-400 hover:text-white text-sm">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Mandate Subject</span>
                <div className="text-white font-semibold text-sm">{predicted.kateCard.title}</div>
                <div className="text-xs text-kbc-sky font-mono">Entity: {company.name}</div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Authorizing KBC Escrow & Core Banking Facilities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Binding High-Margin KBC Insurance Policies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dispatching authenticated partner webhooks</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => setShowItsmeModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmItsme}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>Confirm on itsme®</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- MODAL 2: KATE EXPLANATION DIALOG ---------------- */}
      {showKateChatModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-kbc-sky rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Kate Assistant</h3>
                  <p className="text-xs text-cyan-300">Partner Transparency Query</p>
                </div>
              </div>
              <button onClick={() => setShowKateChatModal(false)} className="text-slate-400 hover:text-white text-sm">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-end">
                <div className="bg-kbc-blue text-white p-3 rounded-2xl rounded-tr-none max-w-[85%]">
                  "How does KBC coordinate all these partners, and can we swap any of them?"
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-[90%] space-y-2 border border-slate-700">
                  <p>
                    <strong className="text-kbc-sky">Under the Hood:</strong> KBC acts as your white-label General Contractor. We pre-fund escrow guarantees and trigger APIs seamlessly.
                  </p>
                  <p>
                    <strong>You are never locked in:</strong> You can swap notaries, social secretariats, energy suppliers, or legal counsels at any time in the Glass-Box drawer.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setShowKateChatModal(false);
                setShowUnderTheHood(true);
              }}
              className="w-full py-2.5 bg-kbc-sky text-slate-900 rounded-xl text-xs font-bold hover:bg-cyan-300 transition-colors"
            >
              Inspect Verified Partner Drawer →
            </button>
          </div>
        </div>
      )}

      {/* ---------------- MODAL 3: SWAP PARTNER MODAL ---------------- */}
      {swapModalOpen !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">Swap Ecosystem Partner</h3>
                <p className="text-xs text-slate-400">
                  {predicted.underTheHoodPartners[swapModalOpen]?.role}
                </p>
              </div>
              <button onClick={() => setSwapModalOpen(null)} className="text-slate-400 hover:text-white text-sm">
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-slate-400 block">Choose an alternative accredited provider:</span>

              <div 
                onClick={() => {
                  const partner = predicted.underTheHoodPartners[swapModalOpen];
                  setSwappedPartners({ ...swappedPartners, [partner.role]: partner.defaultPartner });
                  setSwapModalOpen(null);
                }}
                className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-750 border border-slate-700 cursor-pointer flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-white">
                    {predicted.underTheHoodPartners[swapModalOpen]?.defaultPartner}
                  </div>
                  <div className="text-[11px] text-kbc-sky">KBC Preferred (Fastest Execution)</div>
                </div>
                <span className="text-xs text-cyan-300 font-mono">Recommended</span>
              </div>

              {predicted.underTheHoodPartners[swapModalOpen]?.alternativePartners?.map((alt, aIdx) => (
                <div 
                  key={aIdx}
                  onClick={() => {
                    const partner = predicted.underTheHoodPartners[swapModalOpen];
                    setSwappedPartners({ ...swappedPartners, [partner.role]: alt });
                    setSwapModalOpen(null);
                  }}
                  className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200">{alt}</div>
                    <div className="text-[11px] text-slate-400">Accredited API Provider</div>
                  </div>
                  <span className="text-xs text-slate-400">Select</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSwapModalOpen(null)}
              className="w-full py-2.5 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
