import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Layers, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Sparkles, 
  Database, 
  GitBranch, 
  BarChart3, 
  ArrowRight, 
  Check, 
  Server, 
  Zap, 
  Clock, 
  Lightbulb, 
  FileSearch,
  Scale,
  FastForward,
  Target,
  Gauge
} from 'lucide-react';
import { COMPANIES, ENTERPRISE_SCALABILITY_MATRIX, NON_CLIENT_ACQUISITION_RAILS } from '../../data/mockData';
import { ALGORITHM_THINKING_MODELS } from '../../data/algorithmThinking';

export default function ArchitectureView({ 
  selectedCompanyKey, 
  setSelectedCompanyKey,
  isTimeAdvanced,
  setIsTimeAdvanced,
  executionState, 
  onExecuteTrigger, 
  resetExecution 
}) {
  const company = COMPANIES[selectedCompanyKey] || COMPANIES.STARTER;
  const scenario = company.predictedEvent;
  const thinking = ALGORITHM_THINKING_MODELS[selectedCompanyKey] || ALGORITHM_THINKING_MODELS.STARTER;

  const [activeTab, setActiveTab] = useState('algorithm_brain'); // 'algorithm_brain' | 'domino_graph' | 'non_clients'
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  // Dynamic Confidence depending on whether time has advanced!
  const currentConfidence = isTimeAdvanced ? thinking.advancedConfidence : thinking.baselineConfidence;
  const hasCrossedThreshold = currentConfidence >= thinking.thresholdScore;

  // Unified Handler: Links Advance Time with Domino Simulation
  const handleSimulateDomino = () => {
    if (!isTimeAdvanced) {
      setIsTimeAdvanced(true);
    }
    setActiveTab('domino_graph');
    onExecuteTrigger();
  };

  const handleReset = () => {
    resetExecution();
    setIsTimeAdvanced(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header & Company Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Brain className="w-4 h-4 text-kbc-sky" />
            <span>Algorithmic Prediction Models & Under-the-Hood Logic</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Inside the Mind of the Algorithm: {company.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
            Confidence accumulates from incoming telemetry. Kate remains in silent monitoring until confidence surpasses the 85% threshold, preventing alert fatigue and guaranteeing high-precision recommendations.
          </p>
        </div>

        {/* One Continuous Story Chapter Selector */}
        <div className="flex items-center space-x-2">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex items-center">
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider px-2 hidden sm:inline">
              Story:
            </span>
            <button
              onClick={() => {
                setSelectedCompanyKey('STAGE_1_FIRST_HIRE');
                setSelectedStepIndex(0);
                setIsTimeAdvanced(false);
                resetExecution();
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCompanyKey === 'STAGE_1_FIRST_HIRE' || selectedCompanyKey === 'STARTER'
                  ? 'bg-amber-950 text-amber-300 border border-amber-600 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🥪 1. First Hire
            </button>
            <button
              onClick={() => {
                setSelectedCompanyKey('STAGE_2_OFFICE_SPACE');
                setSelectedStepIndex(0);
                setIsTimeAdvanced(false);
                resetExecution();
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCompanyKey === 'STAGE_2_OFFICE_SPACE' || selectedCompanyKey === 'PROFITABLE_GROWTH'
                  ? 'bg-blue-950 text-cyan-300 border border-cyan-500 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🏢 2. Office Space
            </button>
            <button
              onClick={() => {
                setSelectedCompanyKey('STAGE_3_FLEET_SCALING');
                setSelectedStepIndex(0);
                setIsTimeAdvanced(false);
                resetExecution();
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCompanyKey === 'STAGE_3_FLEET_SCALING' || selectedCompanyKey === 'ENTERPRISE_MA'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-600 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🚚 3. EV Fleet
            </button>
          </div>

          {!executionState.isRunning && !executionState.isComplete ? (
            <div className="flex items-center space-x-2">
              {!isTimeAdvanced ? (
                <button
                  onClick={handleSimulateDomino}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-cyan-400 via-kbc-sky to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-cyan-400/20 transition-all hover:scale-[1.02]"
                  title="Advances time to predicted event and executes the multi-partner domino chain"
                >
                  <FastForward className="w-3.5 h-3.5 fill-current" />
                  <span>Advance Time & Simulate Domino Flow</span>
                </button>
              ) : (
                <button
                  onClick={handleSimulateDomino}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Domino Flow ({scenario.timeOffset})</span>
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={handleReset}
              className="flex items-center space-x-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset & Rewind Time</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Mode Sub-Tabs */}
      <div className="flex border-b border-slate-800 text-sm font-semibold space-x-6">
        <button
          onClick={() => setActiveTab('algorithm_brain')}
          className={`pb-3 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'algorithm_brain'
              ? 'border-kbc-sky text-kbc-sky font-bold'
              : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>1. Dynamic Confidence & Mathematical Deduction ({company.name})</span>
        </button>

        <button
          onClick={() => setActiveTab('domino_graph')}
          className={`pb-3 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'domino_graph'
              ? 'border-kbc-sky text-kbc-sky font-bold'
              : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>2. Chained Multi-Partner Domino Graph</span>
        </button>

        <button
          onClick={() => setActiveTab('non_clients')}
          className={`pb-3 border-b-2 flex items-center space-x-2 transition-colors ${
            activeTab === 'non_clients'
              ? 'border-kbc-sky text-kbc-sky font-bold'
              : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>3. Data Ingestion & Peppol Triangulation</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: DYNAMIC CONFIDENCE SCORE & MATHEMATICAL DEDUCTION       */}
      {/* ============================================================== */}
      {activeTab === 'algorithm_brain' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* DYNAMIC CONFIDENCE GAUGE & ACTION THRESHOLD BANNER */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 p-6 rounded-3xl border-2 border-slate-700 shadow-2xl space-y-4">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    {thinking.modelName}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-300">
                    Timeline: <strong>{isTimeAdvanced ? scenario.date : company.normalState.date}</strong>
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mt-1">
                  Algorithmic Confidence Accumulator & Prompt Threshold
                </h3>
              </div>

              {/* Toggle Time & Run Domino Buttons */}
              <div className="flex items-center space-x-2">
                {!isTimeAdvanced ? (
                  <button
                    onClick={() => {
                      setIsTimeAdvanced(true);
                      resetExecution();
                    }}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 shadow-md hover:scale-[1.02] transition-all"
                  >
                    <FastForward className="w-3.5 h-3.5 fill-current" />
                    <span>Advance Time to Ingest Signals ({scenario.timeOffset})</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleSimulateDomino}
                      disabled={executionState.isRunning || executionState.isComplete}
                      className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md hover:scale-[1.02] transition-all disabled:opacity-50"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{executionState.isComplete ? 'Domino Flow Completed' : 'Simulate Domino Flow'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsTimeAdvanced(false);
                        resetExecution();
                      }}
                      className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Rewind to Baseline</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Confidence Score Bar Visualizer */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 font-semibold">Current Accumulated Confidence:</span>
                  <span className={`text-xl font-black font-mono ${hasCrossedThreshold ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {currentConfidence.toFixed(1)}%
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 text-[11px]">Action Trigger Threshold:</span>
                  <span className="text-xs font-bold font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {thinking.thresholdScore.toFixed(1)}% Required
                  </span>
                </div>
              </div>

              {/* Progress Bar with 85% Threshold Line Marker */}
              <div className="relative w-full bg-slate-900 h-4 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full transition-all duration-700 ease-out ${
                    hasCrossedThreshold 
                      ? 'bg-gradient-to-r from-kbc-sky via-emerald-400 to-emerald-300' 
                      : 'bg-gradient-to-r from-amber-500 to-amber-400'
                  }`}
                  style={{ width: `${currentConfidence}%` }}
                />
                
                {/* 85% Threshold Marker Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg shadow-white/50 z-10"
                  style={{ left: `${thinking.thresholdScore}%` }}
                  title="85% Action Threshold"
                />
              </div>

              {/* Explanatory Prompt Status */}
              <div className="flex items-center justify-between text-xs pt-1">
                {hasCrossedThreshold ? (
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>THRESHOLD CROSSED ({currentConfidence}% &ge; 85%): Kate Proactively Prompts User with 1-Click Card</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-amber-400 font-bold">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>BELOW THRESHOLD ({currentConfidence}% &lt; 85%): Kate Remains Silent to Prevent Alert Fatigue (Monitoring Signals)</span>
                  </div>
                )}
                
                <span className="text-slate-500 text-[11px] font-mono hidden sm:inline">
                  {isTimeAdvanced ? '4 of 4 Signals Verified' : '1 of 4 Signals Verified'}
                </span>
              </div>
            </div>

            {/* Mathematical Formula Box */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Under-the-Hood Weighted Confidence Formula:</span>
              <div className="text-cyan-300 font-semibold">{thinking.confidenceFormula}</div>
            </div>

          </div>

          {/* INCOMING EVIDENCE ACCUMULATOR MATRIX */}
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Evidence Signals Accumulator: How Data Drives the Score</span>
              </div>
              <span className="text-xs text-slate-400">
                {isTimeAdvanced ? 'Time Advanced: All Evidence Ingested' : 'Present Baseline: Signals Still Incomplete'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {thinking.evidenceSignals.map((sig) => {
                const state = isTimeAdvanced ? sig.advanced : sig.baseline;
                return (
                  <div 
                    key={sig.id} 
                    className={`p-4 rounded-2xl border transition-all ${
                      state.active 
                        ? 'bg-slate-950 border-emerald-500/50 shadow-md' 
                        : 'bg-slate-950/60 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          state.active ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {state.active ? '✓' : '•'}
                        </div>
                        <h4 className="text-xs font-bold text-white">{sig.label}</h4>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-slate-400">Weight: {sig.weight}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          state.active ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-900 text-slate-400'
                        }`}>
                          +{state.points}%
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 text-xs text-slate-300">
                      <span className="text-slate-500 font-semibold block text-[10px] uppercase">Telemetry Status:</span>
                      <strong className={state.active ? 'text-emerald-400' : 'text-amber-400'}>
                        {state.status}
                      </strong>
                    </div>

                    <p className="mt-1.5 text-[11px] text-slate-400 leading-relaxed border-t border-slate-900 pt-1.5">
                      {sig.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4-Step Algorithmic Deduction Chain */}
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
              <GitBranch className="w-4 h-4 text-kbc-sky" />
              <span>Deduction Chain: From Raw Signals to Recommended Action Card</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {thinking.predictionLogic.map((logic, lIdx) => (
                <div key={lIdx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-xs font-black">
                        {logic.step}
                      </span>
                      <h4 className="text-xs font-extrabold text-white">{logic.title}</h4>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300">
                    <span className="text-slate-500 block text-[9px] uppercase">Formula / Metric Evaluated:</span>
                    {logic.formula}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {logic.finding || logic.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scenario Comparison Table */}
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold text-white uppercase tracking-wider">
                <Scale className="w-4 h-4 text-emerald-400" />
                <span>Option Simulation Matrix: Why Kate's Recommendation is Mathematically Superior</span>
              </div>
              <span className="text-xs text-slate-400">Comparing 12-Month Expected Value</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5 rounded-l-xl">Strategic Option</th>
                    <th className="p-3.5">12-Month Net Cost / Impact</th>
                    <th className="p-3.5">Risk & Compliance Score</th>
                    <th className="p-3.5 rounded-r-xl">KBC High-Margin Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {thinking.scenariosCompared.map((row, rIdx) => {
                    const isRecommended = row.option.includes('Recommended');
                    return (
                      <tr key={rIdx} className={isRecommended ? 'bg-cyan-950/30 font-semibold' : 'hover:bg-slate-850/40'}>
                        <td className="p-3.5 text-white flex items-center space-x-2">
                          {isRecommended && <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
                          <span>{row.option}</span>
                        </td>
                        <td className={`p-3.5 ${isRecommended ? 'text-emerald-400 font-extrabold text-sm' : 'text-slate-400'}`}>
                          {row.cost12Months}
                        </td>
                        <td className="p-3.5">{row.riskScore}</td>
                        <td className={`p-3.5 ${isRecommended ? 'text-cyan-300 font-bold' : 'text-slate-500'}`}>
                          {row.kbcMargin}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: MULTI-PARTNER DOMINO GRAPH                              */}
      {/* ============================================================== */}
      {activeTab === 'domino_graph' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-slate-800 gap-3">
              <div>
                <h3 className="text-base font-bold text-white">Domino Execution Node Graph ({company.name})</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isTimeAdvanced 
                    ? `Time advanced to ${scenario.date} (${scenario.timeOffset}). Confidence is ${currentConfidence.toFixed(1)}% (Threshold crossed). Escrow pre-clears and triggers partners in sub-second sequence.`
                    : `Currently in baseline state (Confidence ${currentConfidence.toFixed(1)}% < 85% threshold). Advance time to trigger the domino flow.`}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {!isTimeAdvanced ? (
                  <button
                    onClick={handleSimulateDomino}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 font-bold text-xs rounded-xl shadow-md hover:scale-[1.02] transition-all"
                  >
                    <FastForward className="w-3.5 h-3.5 fill-current" />
                    <span>Advance Time & Run Domino Flow</span>
                  </button>
                ) : !executionState.isRunning && !executionState.isComplete ? (
                  <button
                    onClick={onExecuteTrigger}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-md animate-pulse hover:scale-[1.02] transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Domino Sequence</span>
                  </button>
                ) : executionState.isComplete ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>All 4 Partners Confirmed</span>
                    </span>
                    <button
                      onClick={handleReset}
                      className="px-2.5 py-1 text-xs text-slate-300 hover:text-white rounded-xl bg-slate-800 border border-slate-700"
                    >
                      <RotateCcw className="w-3 h-3 inline mr-1" />
                      Reset
                    </button>
                  </div>
                ) : (
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-800 animate-pulse">
                    Chaining Step {executionState.currentStepIndex + 1} of 4...
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {scenario.dominoSteps.map((step, idx) => {
                const isCompleted = executionState.completedSteps.includes(idx);
                const isCurrent = executionState.isRunning && executionState.currentStepIndex === idx;
                const isSelected = selectedStepIndex === idx;

                return (
                  <div
                    key={step.id}
                    onClick={() => setSelectedStepIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                      isSelected
                        ? 'ring-2 ring-kbc-sky bg-slate-800 border-kbc-sky shadow-lg'
                        : 'bg-slate-950 border-slate-800 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : isCurrent
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {isCompleted ? '✓ EXECUTED' : isCurrent ? '⚡ IN FLIGHT' : 'QUEUED'}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{step.stepNumber}</span>
                    </div>

                    <div className="text-xs font-bold text-white mb-1">{step.label}</div>
                    <div className="text-[11px] text-kbc-sky font-medium truncate">{step.title}</div>
                    <div className="text-[10px] text-slate-400 mt-2">Partner: <strong className="text-slate-300">{step.ecosystemPartner}</strong></div>
                  </div>
                );
              })}
            </div>

            {/* Selected Step Inspector */}
            <div className="mt-4 p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase">
                  Step {scenario.dominoSteps[selectedStepIndex]?.stepNumber}: {scenario.dominoSteps[selectedStepIndex]?.title}
                </span>
                <span className="text-xs font-mono text-cyan-400">{scenario.dominoSteps[selectedStepIndex]?.apiEndpoint}</span>
              </div>
              <p className="text-xs text-slate-300">{scenario.dominoSteps[selectedStepIndex]?.description}</p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                Core KBC Product: {scenario.dominoSteps[selectedStepIndex]?.kbcProduct} (Latency: {scenario.dominoSteps[selectedStepIndex]?.latency})
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: DATA INGESTION & PEPPOL TRIANGULATION                   */}
      {/* ============================================================== */}
      {activeTab === 'non_clients' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div>
              <span className="text-xs font-bold text-kbc-sky uppercase tracking-wider">
                How KBC Gets Data From Non-Clients (The Ingestion Funnel)
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Zero-CAC Organic Inflow via Peppol, Kate Open Auditor & Accountants
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-3xl">
                KBC does not wait for entrepreneurs to walk into a branch. By integrating directly into Belgian B2B e-invoicing (Peppol), offering an open contract audit tool, and bridging with accountants, KBC identifies non-client business events in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {NON_CLIENT_ACQUISITION_RAILS.map((rail) => (
                <div key={rail.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-cyan-300">{rail.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{rail.description}</p>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[10px] space-y-1 font-mono">
                      <div className="text-slate-400"><strong className="text-white">Data Ingested:</strong> {rail.dataIngested}</div>
                      <div className="text-emerald-400"><strong className="text-white">Legal Basis:</strong> {rail.privacyLegalBasis}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[11px] font-bold text-emerald-400 flex items-center justify-between">
                    <span>Performance Lift:</span>
                    <span>{rail.conversionLift}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
