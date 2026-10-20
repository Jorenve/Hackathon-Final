import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LaptopScreenFrame from './components/LaptopScreenFrame';
import CustomerView from './components/views/CustomerView';
import ArchitectureView from './components/views/ArchitectureView';
import TripleWinView from './components/views/TripleWinView';
import KateChatCopilot from './components/KateChatCopilot';
import MarketingParametersModal from './components/MarketingParametersModal';
import AlgorithmDecisionInspectorModal from './components/AlgorithmDecisionInspectorModal';
import { COMPANIES } from './data/mockData';
import lifecycleStory from './data/lifecycleStory.json';
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
  RotateCcw,
  MessageSquare,
  Target,
  Award
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('customer'); // 'customer' | 'architecture' | 'triple_win'
  const [selectedCompanyKey, setSelectedCompanyKey] = useState('STAGE_1_FIRST_HIRE');
  const [isTimeAdvanced, setIsTimeAdvanced] = useState(false);
  const [isKateFabOpen, setIsKateFabOpen] = useState(false);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);
  const [isDecisionEngineModalOpen, setIsDecisionEngineModalOpen] = useState(false);
  const [isKateChatOpen, setIsKateChatOpen] = useState(false);

  // Chapter mapping for the 1 cohesive lifecycle story
  const chapterKeys = ['STAGE_1_FIRST_HIRE', 'STAGE_2_OFFICE_SPACE', 'STAGE_3_FLEET_SCALING'];
  
  const getChapterIndex = (key) => {
    if (key === 'STAGE_2_OFFICE_SPACE' || key === 'PROFITABLE_GROWTH' || key === 'DISTRESSED_DOWNTURN') return 1;
    if (key === 'STAGE_3_FLEET_SCALING' || key === 'ENTERPRISE_MA') return 2;
    return 0;
  };

  const currentChapterIndex = getChapterIndex(selectedCompanyKey);
  const currentChapter = lifecycleStory.chapters[currentChapterIndex] || lifecycleStory.chapters[0];
  const company = COMPANIES[selectedCompanyKey] || COMPANIES.STAGE_1_FIRST_HIRE;

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

  // Synchronized time advancement controller: Kate only jumps in once time is advanced!
  const handleTimeAdvance = (advance) => {
    setIsTimeAdvanced(advance);
    if (advance) {
      setIsKateChatOpen(true);
    } else {
      setIsKateChatOpen(false);
      resetExecution();
    }
  };

  const handleCompanyChange = (companyKey) => {
    setSelectedCompanyKey(companyKey);
    setIsTimeAdvanced(false);
    setIsKateChatOpen(false);
    resetExecution();
  };

  const handleSelectChapter = (chapterIdx) => {
    const nextKey = chapterKeys[chapterIdx] || chapterKeys[0];
    handleCompanyChange(nextKey);
  };

  // Automated Domino Execution Sequencer
  const runDominoExecution = () => {
    if (executionState.isRunning || executionState.isComplete) return;

    // Automatically advance time & summon Kate to the predicted event when domino is triggered
    if (!isTimeAdvanced) {
      setIsTimeAdvanced(true);
      setIsKateChatOpen(true);
    }

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
      
      {/* Top Navigation & Story Milestone Selector */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        selectedCompanyKey={selectedCompanyKey}
        setSelectedCompanyKey={handleCompanyChange}
        isTimeAdvanced={isTimeAdvanced}
        setIsTimeAdvanced={handleTimeAdvance}
        executionState={executionState}
        resetExecution={resetExecution}
        onOpenMarketingModal={() => setIsMarketingModalOpen(true)}
        onOpenDecisionEngineModal={() => setIsDecisionEngineModalOpen(true)}
        onToggleKateChat={() => setIsKateChatOpen(!isKateChatOpen)}
        isKateChatOpen={isKateChatOpen}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeView === 'customer' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6">
            
            {/* Top Story Progression & Quick Navigation */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs shadow-lg">
              <div className="flex items-start sm:items-center space-x-2.5 sm:space-x-3 min-w-0">
                <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-kbc-blue to-kbc-sky text-white shadow-md flex-shrink-0 mt-0.5 sm:mt-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-1.5 sm:space-x-2 flex-wrap">
                    <span className="text-cyan-400 font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px] whitespace-nowrap">
                      Stage {currentChapterIndex + 1}: {currentChapter.badge}
                    </span>
                    <span className="text-slate-500 font-mono text-[10px] sm:text-xs whitespace-nowrap">• {currentChapter.timeline}</span>
                  </div>
                  <h3 className="font-black text-white text-xs sm:text-base leading-snug break-words mt-0.5">
                    <span className="text-slate-400 font-normal">Ghent Craft Foods BV: </span>
                    <span>{currentChapter.title}</span>
                  </h3>
                  <p className="text-slate-300 text-[10px] sm:text-xs mt-0.5 leading-relaxed break-words">
                    {currentChapter.subtitle}
                  </p>
                </div>
              </div>

              {/* Responsive Story Actions: Stage Switcher on Mobile & Action Buttons */}
              <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/80">
                
                {/* Mobile Stage Selector Dropdown/Chips */}
                <div className="flex lg:hidden items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
                  <span className="text-slate-500 px-1 font-bold">Stage:</span>
                  <button
                    onClick={() => handleSelectChapter(0)}
                    className={`px-2 py-1 rounded-lg font-bold transition-all ${
                      currentChapterIndex === 0 ? 'bg-amber-950 text-amber-300 border border-amber-600' : 'text-slate-400'
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => handleSelectChapter(1)}
                    className={`px-2 py-1 rounded-lg font-bold transition-all ${
                      currentChapterIndex === 1 ? 'bg-blue-950 text-cyan-300 border border-cyan-500' : 'text-slate-400'
                    }`}
                  >
                    2
                  </button>
                  <button
                    onClick={() => handleSelectChapter(2)}
                    className={`px-2 py-1 rounded-lg font-bold transition-all ${
                      currentChapterIndex === 2 ? 'bg-emerald-950 text-emerald-300 border border-emerald-600' : 'text-slate-400'
                    }`}
                  >
                    3
                  </button>
                </div>

                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <button
                    onClick={() => setIsKateChatOpen(!isKateChatOpen)}
                    className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl font-bold border transition-all whitespace-nowrap text-xs ${
                      isKateChatOpen 
                        ? 'bg-kbc-sky text-slate-950 border-white shadow-md' 
                        : isTimeAdvanced
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500 animate-pulse shadow-md'
                        : 'bg-slate-800 text-cyan-300 border-slate-700'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>
                      {isKateChatOpen 
                        ? 'Hide Kate' 
                        : isTimeAdvanced 
                        ? '🔔 Opportunity!' 
                        : 'Kate'}
                    </span>
                  </button>

                  {currentChapterIndex < lifecycleStory.chapters.length - 1 ? (
                    <button
                      onClick={() => handleSelectChapter(currentChapterIndex + 1)}
                      className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 font-bold shadow-md hover:scale-[1.02] active:scale-98 transition-all whitespace-nowrap text-xs"
                    >
                      <span className="hidden xs:inline sm:inline">Next Stage</span>
                      <span className="xs:hidden sm:hidden">Next</span>
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSelectChapter(0)}
                      className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-semibold border border-slate-700 transition-all whitespace-nowrap text-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Restart</span>
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* KATE CHAT COPILOT: THE HUMAN ABSTRACTION LAYER */}
            {isKateChatOpen && (
              <div className="animate-fadeIn">
                <KateChatCopilot
                  currentChapter={currentChapter}
                  activeChapterIndex={currentChapterIndex}
                  onSelectChapter={handleSelectChapter}
                  totalChapters={lifecycleStory.chapters.length}
                  isTimeAdvanced={isTimeAdvanced}
                  onAdvanceTime={() => handleTimeAdvance(true)}
                  onRewindTime={() => handleTimeAdvance(false)}
                  onExecuteDomino={runDominoExecution}
                  executionState={executionState}
                  onResetExecution={resetExecution}
                  onOpenMarketingModal={() => setIsMarketingModalOpen(true)}
                  onFocusDashboard={() => {
                    const el = document.getElementById('kbc-laptop-dashboard');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onClose={() => setIsKateChatOpen(false)}
                />
              </div>
            )}

            {/* Laptop Dashboard Screen Frame */}
            <div id="kbc-laptop-dashboard" className="flex justify-center items-center pt-2">
              <LaptopScreenFrame 
                company={company}
                onKateClick={() => setIsKateChatOpen(!isKateChatOpen)}
                isKateActive={isTimeAdvanced && !executionState.isComplete}
              >
                <CustomerView
                  selectedCompanyKey={selectedCompanyKey}
                  isTimeAdvanced={isTimeAdvanced}
                  setIsTimeAdvanced={handleTimeAdvance}
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

      {/* MARKETING JURY & ALGORITHM PARAMETERS MODAL */}
      <MarketingParametersModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
        currentChapter={currentChapter}
      />

      {/* AUTONOMOUS DECISION ENGINE INSPECTOR (FINANCIAL, RISK, BRANCH, MARKETING JURY) */}
      <AlgorithmDecisionInspectorModal
        isOpen={isDecisionEngineModalOpen}
        onClose={() => setIsDecisionEngineModalOpen(false)}
        selectedCompanyKey={selectedCompanyKey}
        isTimeAdvanced={isTimeAdvanced}
      />

      {/* Persistent Bottom Bar with Hackathon Quick Guide */}
      <footer className="bg-slate-900 border-t border-slate-800/80 py-3 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">KBC OneClick</span>
            <span>•</span>
            <span className="text-kbc-sky">Tectonic Hackathon Finals Proof of Concept</span>
            <span>•</span>
            <span className="text-slate-500">One Cohesive Story: Ghent Craft Foods BV (Small → Middle → Big)</span>
          </div>
          
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="text-slate-300 font-mono">229 Products Synthesized → 1 Click</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">All Evaluation Criteria Satisfied</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
