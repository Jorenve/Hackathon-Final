import React from 'react';
import { 
  Smartphone, 
  Cpu, 
  TrendingUp, 
  RotateCcw, 
  Sparkles, 
  Building2, 
  Zap, 
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Clock,
  FastForward,
  ChevronDown,
  Building,
  AlertTriangle,
  Award
} from 'lucide-react';
import { COMPANIES } from '../data/mockData';
import { ALGORITHM_THINKING_MODELS } from '../data/algorithmThinking';

export default function Header({ 
  activeView, 
  setActiveView, 
  selectedCompanyKey, 
  setSelectedCompanyKey,
  isTimeAdvanced,
  setIsTimeAdvanced,
  executionState, 
  resetExecution 
}) {
  const currentCompany = COMPANIES[selectedCompanyKey];
  const thinking = ALGORITHM_THINKING_MODELS[selectedCompanyKey] || ALGORITHM_THINKING_MODELS.STARTER;
  const currentConfidence = isTimeAdvanced ? thinking.advancedConfidence : thinking.baselineConfidence;
  const hasCrossedThreshold = currentConfidence >= thinking.thresholdScore;

  return (
    <header className="bg-slate-900/95 border-b border-slate-800 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Brand Logo & Identity */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-kbc-blue to-[#001f3f] border border-kbc-sky/40 shadow-lg shadow-kbc-sky/10">
              <span className="font-extrabold text-white text-lg tracking-wider">KBC</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-kbc-sky rounded-full flex items-center justify-center ring-2 ring-slate-900">
                <Sparkles className="w-2.5 h-2.5 text-slate-900" />
              </div>
            </div>
            <div className="hidden xl:block">
              <div className="flex items-center space-x-2">
                <span className="text-base font-bold text-white tracking-tight">OneClick Syndicate</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-kbc-sky/15 text-kbc-sky border border-kbc-sky/30 rounded-full uppercase tracking-wider">
                  Ecosystem 2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Autonomous Blackbox Orchestration Powered by Kate
              </p>
            </div>
          </div>

          {/* COMPANY / PERSONA SELECTOR (Mandatory New Feature) */}
          <div className="flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800 shadow-inner">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider px-2 hidden sm:inline">
              Company:
            </span>
            <div className="flex items-center space-x-1 overflow-x-auto">
              
              {/* Company 1: Starter */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('STARTER');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'STARTER'
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-600 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Starter SME: First Employee Milestone"
              >
                <span>🥪</span>
                <span className="hidden md:inline">Starter SME</span>
              </button>

              {/* Company 2: Profitable Growth */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('PROFITABLE_GROWTH');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'PROFITABLE_GROWTH'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Profitable Mid-Market: Fleet & Warehouse Expansion"
              >
                <span>🚚</span>
                <span className="hidden md:inline">Profitable Mid-Market</span>
              </button>

              {/* Company 3: Distressed Downturn */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('DISTRESSED_DOWNTURN');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'DISTRESSED_DOWNTURN'
                    ? 'bg-rose-950/80 text-rose-300 border border-rose-600 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Distressed SME: Cash Crunch & Factoring Rescue"
              >
                <span>⚠️</span>
                <span className="hidden md:inline">Loss-Making Crisis</span>
              </button>

              {/* Company 4: Enterprise M&A */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('ENTERPRISE_MA');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'ENTERPRISE_MA'
                    ? 'bg-purple-950/80 text-purple-300 border border-purple-600 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Large Enterprise: M&A Competitor Acquisition"
              >
                <span>🧬</span>
                <span className="hidden md:inline">Enterprise M&A</span>
              </button>
            </div>
          </div>

          {/* Top Mode Switcher (The 3 Core Hackathon Views) */}
          <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 shadow-inner flex-shrink-0">
            <button
              onClick={() => setActiveView('customer')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'customer'
                  ? 'bg-kbc-sky text-slate-900 shadow-md shadow-kbc-sky/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Customer Mobile</span>
            </button>

            <button
              onClick={() => setActiveView('architecture')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'architecture'
                  ? 'bg-kbc-sky text-slate-900 shadow-md shadow-kbc-sky/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Under-the-Hood API</span>
            </button>

            <button
              onClick={() => setActiveView('triple_win')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'triple_win'
                  ? 'bg-kbc-sky text-slate-900 shadow-md shadow-kbc-sky/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Jury Triple-Win</span>
            </button>
          </div>

          {/* Reset Current State */}
          <button
            onClick={resetExecution}
            title="Reset current execution"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 flex-shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

        </div>
      </div>

      {/* SECONDARY TIME CONTROL BANNER ("Advance Time to Predicted Event") */}
      <div className="bg-slate-950/80 border-t border-slate-800 px-4 py-2 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-3 overflow-x-auto min-w-max">
          <div className="flex items-center space-x-1.5 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>{currentCompany.name}</span>
            <span className="text-slate-500 font-normal">({currentCompany.sector} • {currentCompany.headcount})</span>
          </div>

          <span className="text-slate-600">•</span>
          
          <div className="flex items-center space-x-1 text-slate-400">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>Timeline:</span>
            <strong className="text-white font-mono">
              {isTimeAdvanced ? currentCompany.predictedEvent.date : currentCompany.normalState.date}
            </strong>
          </div>

          <span className="text-slate-600">•</span>

          {/* Dynamic Algorithmic Confidence Pill */}
          <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border text-[11px] ${
            hasCrossedThreshold 
              ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 shadow-sm shadow-emerald-500/20' 
              : 'bg-amber-950/70 border-amber-500/40 text-amber-300'
          }`}>
            <span className={`w-2 h-2 rounded-full ${hasCrossedThreshold ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
            <span className="font-semibold text-slate-300">Kate Confidence:</span>
            <span className="font-mono font-black text-xs">
              {currentConfidence.toFixed(1)}%
            </span>
            <span className="text-[10px] text-slate-400 hidden lg:inline">
              ({hasCrossedThreshold ? '≥85% Threshold: Prompt Active' : '<85%: Silent Observation'})
            </span>
          </div>
        </div>

        {/* TIME ADVANCE / REWIND BUTTON (Central Requirement) */}
        <div className="flex items-center space-x-2">
          {!isTimeAdvanced ? (
            <button
              onClick={() => {
                setIsTimeAdvanced(true);
                resetExecution();
              }}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-extrabold bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 shadow-md shadow-cyan-400/20 hover:scale-[1.02] transition-all"
            >
              <FastForward className="w-3.5 h-3.5 fill-current" />
              <span>Advance Time to Predicted Event ({currentCompany.predictedEvent.timeOffset})</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsTimeAdvanced(false);
                resetExecution();
              }}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Rewind to Present (Normal State)</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
