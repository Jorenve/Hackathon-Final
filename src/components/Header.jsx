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
  resetExecution,
  onOpenMarketingModal,
  onOpenDecisionEngineModal,
  onToggleKateChat,
  isKateChatOpen
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
                <span className="text-base font-bold text-white tracking-tight">OneClick</span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-kbc-sky/15 text-kbc-sky border border-kbc-sky/30 rounded-full uppercase tracking-wider">
                  Ecosystem 2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Autonomous Business Orchestration Powered by Kate
              </p>
            </div>
          </div>

          {/* ONE CONTINUOUS LIFECYCLE STORY: Small -> Middle -> Big (Desktop only) */}
          <div className="hidden lg:flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800 shadow-inner flex-shrink-0">
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider px-2 whitespace-nowrap">
              Story:
            </span>
            <div className="flex items-center space-x-1">
              {/* Stage 1: First Hire */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('STAGE_1_FIRST_HIRE');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'STAGE_1_FIRST_HIRE' || selectedCompanyKey === 'STARTER'
                    ? 'bg-amber-950/90 text-amber-300 border border-amber-500 shadow-md ring-1 ring-amber-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Stage 1: First Permanent Hire"
              >
                <span>🥪</span>
                <span>1. First Hire</span>
              </button>

              {/* Stage 2: Commercial Office & Kitchen */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('STAGE_2_OFFICE_SPACE');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'STAGE_2_OFFICE_SPACE' || selectedCompanyKey === 'PROFITABLE_GROWTH'
                    ? 'bg-blue-950/90 text-cyan-300 border border-cyan-500 shadow-md ring-1 ring-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Stage 2: Dok Noord Office & Kitchen"
              >
                <span>🏢</span>
                <span>2. Office</span>
              </button>

              {/* Stage 3: Fleet & Regional Expansion */}
              <button
                onClick={() => {
                  setSelectedCompanyKey('STAGE_3_FLEET_SCALING');
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  selectedCompanyKey === 'STAGE_3_FLEET_SCALING' || selectedCompanyKey === 'ENTERPRISE_MA'
                    ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Stage 3: EV Fleet Scaling"
              >
                <span>🚚</span>
                <span>3. EV Fleet</span>
              </button>
            </div>
          </div>

          {/* Top Mode Switcher (The 3 Core Hackathon Views) */}
          <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 shadow-inner flex-shrink-0">
            <button
              onClick={() => setActiveView('customer')}
              className={`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'customer'
                  ? 'bg-kbc-sky text-slate-900 shadow-md shadow-kbc-sky/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
              title="Customer Experience"
            >
              <Smartphone className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Customer</span>
            </button>

            <button
              onClick={() => setActiveView('architecture')}
              className={`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'architecture'
                  ? 'bg-kbc-sky text-slate-900 shadow-md shadow-kbc-sky/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
              title="Under the Hood Architecture"
            >
              <Cpu className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Engine</span>
            </button>

            <button
              onClick={() => setActiveView('triple_win')}
              className={`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'triple_win'
                  ? 'bg-kbc-sky text-slate-900 shadow-md shadow-kbc-sky/30 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
              title="Jury Triple Win Economics"
            >
              <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden xs:inline sm:inline">Triple-Win</span>
              <span className="xs:hidden sm:hidden">Win</span>
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
      <div className="bg-slate-950/95 border-t border-slate-800 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          
          {/* Row 1 on Mobile: Status, Timeline Date & Confidence Badge */}
          <div className="flex items-center justify-between sm:justify-start space-x-2 sm:space-x-3 text-xs overflow-x-auto min-w-0">
            
            {/* Entity Name */}
            <div className="flex items-center space-x-1.5 text-white font-bold whitespace-nowrap min-w-0">
              <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="truncate max-w-[120px] sm:max-w-none">{currentCompany.name}</span>
              <span className="text-slate-500 font-normal hidden lg:inline">({currentCompany.sector})</span>
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* Simulated Date */}
            <div className="flex items-center space-x-1 text-slate-300 whitespace-nowrap text-[11px] sm:text-xs bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800 flex-shrink-0">
              <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="font-mono font-bold text-white">
                {isTimeAdvanced ? currentCompany.predictedEvent.date : currentCompany.normalState.date}
              </span>
              <span className="text-slate-500 font-mono hidden sm:inline">
                ({isTimeAdvanced ? currentCompany.predictedEvent.timeOffset : 'Present'})
              </span>
            </div>

            {/* Dynamic Confidence Pill */}
            <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border text-[11px] whitespace-nowrap flex-shrink-0 ${
              hasCrossedThreshold 
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 shadow-sm shadow-emerald-500/20' 
                : 'bg-amber-950/70 border-amber-500/40 text-amber-300'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${hasCrossedThreshold ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className="font-semibold text-slate-300 hidden xs:inline">Confidence:</span>
              <span className="font-mono font-black text-xs">
                {currentConfidence.toFixed(1)}%
              </span>
            </div>

          </div>

          {/* Row 2 on Mobile: Action Buttons & Advance/Rewind */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto min-w-0 pt-1 md:pt-0 border-t md:border-t-0 border-slate-900">
            
            {/* Kate Chat Toggle */}
            <button
              onClick={onToggleKateChat}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap flex-shrink-0 ${
                isKateChatOpen 
                  ? 'bg-kbc-sky text-slate-950 border-white shadow-md' 
                  : 'bg-slate-900 hover:bg-slate-800 text-cyan-300 border-cyan-500/30'
              }`}
              title="Toggle Kate Conversational Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Kate</span>
            </button>

            {/* Decision Engine Inspector */}
            <button
              onClick={onOpenDecisionEngineModal}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm transition-all whitespace-nowrap flex-shrink-0"
              title="Inspect Algorithmic Decision Engine"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="hidden sm:inline">Decision Engine</span>
              <span className="sm:hidden">Engine</span>
            </button>

            {/* Marketing Parameters Briefing Modal */}
            <button
              onClick={onOpenMarketingModal}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 transition-all whitespace-nowrap flex-shrink-0"
              title="Inspect Marketing Audience Parameters"
            >
              <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Marketing</span>
            </button>

            {/* Primary Time Advance or Rewind Button */}
            {!isTimeAdvanced ? (
              <button
                onClick={() => {
                  setIsTimeAdvanced(true);
                  resetExecution();
                }}
                className="flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 shadow-md shadow-cyan-400/20 hover:scale-[1.02] active:scale-98 transition-all whitespace-nowrap flex-shrink-0 ml-auto md:ml-0"
              >
                <FastForward className="w-3.5 h-3.5 fill-current flex-shrink-0" />
                <span className="hidden sm:inline">Advance Time ({currentCompany.predictedEvent.timeOffset})</span>
                <span className="sm:hidden">Advance ({currentCompany.predictedEvent.timeOffset})</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsTimeAdvanced(false);
                  resetExecution();
                }}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all whitespace-nowrap flex-shrink-0 ml-auto md:ml-0"
              >
                <RotateCcw className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Rewind</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
