import React from 'react';
import { 
  Target, 
  X, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Database, 
  DollarSign, 
  Cpu, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function MarketingParametersModal({ 
  isOpen, 
  onClose, 
  currentChapter 
}) {
  if (!isOpen) return null;

  const marketingData = currentChapter.marketingAndAlgoParameters;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border-2 border-cyan-500/60 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-300">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Pitch Jury & Marketing Briefing
                </span>
                <span className="text-slate-500 text-xs">• Chapter {currentChapter.chapterNumber}</span>
              </div>
              <h2 className="text-lg font-black text-white mt-0.5">
                Algorithm Input Parameters & Commercial Model
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Commercial Triple-Win & Zero-CAC Hook */}
        <div className="bg-gradient-to-r from-cyan-950/60 via-slate-950 to-blue-950/60 p-4 rounded-2xl border border-cyan-500/40 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-kbc-sky" />
            <span>Zero-CAC Marketing Mechanics</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            <strong className="text-white">Why Marketing Loves This:</strong> Instead of spending €650+ on Google Ads and outbound sales reps to pitch insurance and loans to SMEs, KBC uses <strong className="text-cyan-300">organic Peppol e-invoicing data and account telemetry</strong> to detect the exact moment of need with zero acquisition cost.
          </p>
          <div className="text-[11px] font-mono text-emerald-400 pt-1">
            Data Ingestion Channel: {marketingData.acquisitionMechanism}
          </div>
        </div>

        {/* 1. Exact Parameters Required for the Algorithm */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>1. Parameters Ingested by Kate's Algorithm:</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Weighted Multi-Factor Scoring</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {marketingData.parametersRequired.map((param, pIdx) => (
              <div key={pIdx} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-white">{param.parameter}</span>
                  <span className="font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded text-[10px] border border-cyan-800">
                    Weight {param.algoWeight}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500">Source:</span> <strong className="text-slate-300">{param.source}</strong>
                </div>
                <div className="text-[11px] text-emerald-400 font-mono">
                  Value: {param.value}
                </div>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-900 leading-relaxed">
                  <span className="text-slate-500 font-semibold">Marketing Relevance:</span> {param.marketingRelevance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core KBC Revenue vs Commission Fees (The High Margin Thesis) */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>2. Commercial Return for KBC (High Margin vs Low Referral Fee):</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block font-semibold">Core Products Sold</span>
              <span className="text-xs font-bold text-cyan-300 mt-1 block">
                {marketingData.kbcCommercialImpact.kbcCoreProductsSold}
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block font-semibold">5-Year Customer LTV</span>
              <span className="text-lg font-black text-emerald-400 mt-1 block">
                {marketingData.kbcCommercialImpact.kbc5YearLTV}
              </span>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block font-semibold">Account Retention / Stickiness</span>
              <span className="text-xs font-bold text-white mt-1 block">
                {marketingData.kbcCommercialImpact.stickiness}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA to close or run execution */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-kbc-sky to-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
          >
            Back to Interactive Experience
          </button>
        </div>

      </div>
    </div>
  );
}
