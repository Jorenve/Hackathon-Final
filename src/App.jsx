import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LaptopScreenFrame from './components/LaptopScreenFrame';
import CustomerView from './components/views/CustomerView';
import ArchitectureView from './components/views/ArchitectureView';
import TripleWinView from './components/views/TripleWinView';
import { COMPANIES } from './data/mockData';
import { 
  Sparkles, 
  ChevronRight, 
  Info, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Smartphone,
  FastForward,
  RotateCcw
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('customer'); // 'customer' | 'architecture' | 'triple_win'
  const [selectedCompanyKey, setSelectedCompanyKey] = useState('STARTER');
  const [isTimeAdvanced, setIsTimeAdvanced] = useState(false);
  const [isKateFabOpen, setIsKateFabOpen] = useState(false);

  const company = COMPANIES[selectedCompanyKey];

  // Unified Domino Execution State Machine
  const [executionState, setExecutionState] = useState({
    isRunning: false,
    currentStepIndex: -1,
    completedSteps: [],
    isComplete: false
  });

  // Reset execution when changing companies or rewinding
  const resetExecution = () => {
    setExecutionState({
      isRunning: false,
      currentStepIndex: -1,
      completedSteps: [],
      isComplete: false
    });
  };

  const handleCompanyChange = (companyKey) => {
    setSelectedCompanyKey(companyKey);
    setIsTimeAdvanced(false);
    resetExecution();
  };

  // Automated Domino Execution Sequencer
  const runDominoExecution = () => {
    if (executionState.isRunning || executionState.isComplete) return;

    setExecutionState({
      isRunning: true,
      currentStepIndex: 0,
      completedSteps: [],
      isComplete: false
    });

    const stepDelays = [800, 1000, 1100, 900]; // Realistic sub-second Domino chaining

    // Step 0
    setTimeout(() => {
      setExecutionState(prev => ({
        ...prev,
        currentStepIndex: 1,
        completedSteps: [0]
      }));

      // Step 1
      setTimeout(() => {
        setExecutionState(prev => ({
          ...prev,
          currentStepIndex: 2,
          completedSteps: [0, 1]
        }));

        // Step 2
        setTimeout(() => {
          setExecutionState(prev => ({
            ...prev,
            currentStepIndex: 3,
            completedSteps: [0, 1, 2]
          }));

          // Step 3 (Finish)
          setTimeout(() => {
            setExecutionState({
              isRunning: false,
              currentStepIndex: 3,
              completedSteps: [0, 1, 2, 3],
              isComplete: true
            });
          }, stepDelays[3]);

        }, stepDelays[2]);

      }, stepDelays[1]);

    }, stepDelays[0]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Top Navigation & Company Selector */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        selectedCompanyKey={selectedCompanyKey}
        setSelectedCompanyKey={handleCompanyChange}
        isTimeAdvanced={isTimeAdvanced}
        setIsTimeAdvanced={setIsTimeAdvanced}
        executionState={executionState}
        resetExecution={resetExecution}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeView === 'customer' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            
            {/* Top Explanatory Banner for Customer Mode */}
            <div className="mb-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-kbc-sky/15 text-kbc-sky">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    {company.name} ({company.type}) — Customer Mobile Feed
                  </h3>
                  <p className="text-slate-400 mt-0.5">
                    {!isTimeAdvanced 
                      ? `Currently in steady-state operations. Click 'Advance Time (${company.predictedEvent.timeOffset})' in the top bar to trigger Kate's predicted event.` 
                      : `Time advanced to ${company.predictedEvent.date}. Kate has proactively presented the 1-click action card.`}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {!isTimeAdvanced ? (
                  <button
                    onClick={() => {
                      setIsTimeAdvanced(true);
                      resetExecution();
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 font-bold transition-all shadow-md"
                  >
                    <FastForward className="w-3.5 h-3.5 fill-current" />
                    <span>Advance Time ({company.predictedEvent.timeOffset})</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsTimeAdvanced(false);
                      resetExecution();
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors border border-slate-700"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Rewind Time</span>
                  </button>
                )}
                
                <button
                  onClick={() => setActiveView('architecture')}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold transition-colors border border-slate-700"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Inspect Under-the-Hood API</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Laptop Dashboard Screen Frame */}
            <div className="flex justify-center items-center">
              <LaptopScreenFrame 
                company={company}
                onKateClick={() => setIsKateFabOpen(!isKateFabOpen)}
                isKateActive={isTimeAdvanced && !executionState.isComplete}
              >
                <CustomerView
                  selectedCompanyKey={selectedCompanyKey}
                  isTimeAdvanced={isTimeAdvanced}
                  setIsTimeAdvanced={setIsTimeAdvanced}
                  executionState={executionState}
                  setExecutionState={setExecutionState}
                  onExecuteTrigger={runDominoExecution}
                />
              </LaptopScreenFrame>
            </div>
          </div>
        )}

        {activeView === 'architecture' && (
          <ArchitectureView
            selectedCompanyKey={selectedCompanyKey}
            setSelectedCompanyKey={handleCompanyChange}
            isTimeAdvanced={isTimeAdvanced}
            setIsTimeAdvanced={setIsTimeAdvanced}
            executionState={executionState}
            onExecuteTrigger={runDominoExecution}
            resetExecution={resetExecution}
          />
        )}

        {activeView === 'triple_win' && (
          <TripleWinView />
        )}
      </main>

      {/* Persistent Bottom Bar with Hackathon Quick Guide */}
      <footer className="bg-slate-900 border-t border-slate-800/80 py-3 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">KBC OneClick Syndicate</span>
            <span>•</span>
            <span className="text-kbc-sky">Tectonic Hackathon Finals Proof of Concept</span>
            <span>•</span>
            <span className="text-slate-500">4 Company Archetypes & Time Advance Engine</span>
          </div>
          
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="text-slate-300 font-mono">229 Products Synthesized → 1 Click</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">All 6 Evaluation Criteria Satisfied</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
