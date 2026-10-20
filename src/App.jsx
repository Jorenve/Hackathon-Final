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
            <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs shadow-lg">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-kbc-blue to-kbc-sky text-white shadow-md flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-extrabold uppercase tracking-wider text-[11px] whitespace-nowrap">
                      {currentChapter.badge}
                    </span>
                    <span className="text-slate-500 font-mono whitespace-nowrap">• {currentChapter.timeline}</span>
                  </div>
                  <h3 className="font-black text-white text-base truncate">
                    Ghent Craft Foods BV: {currentChapter.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-0.5 truncate max-w-xl">
                    {currentChapter.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-wrap flex-shrink-0 justify-end">
                <button
                  onClick={() => setIsMarketingModalOpen(true)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-300 font-bold border border-amber-600/50 shadow transition-all whitespace-nowrap"
                  title="Briefing for Marketing Judges: Data Parameters & 5-Year LTV Model"
                >
                  <Target className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Marketing Parameters</span>
                </button>

                <button
                  onClick={() => setIsKateChatOpen(!isKateChatOpen)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold border transition-all whitespace-nowrap ${
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
                      ? 'Hide Kate Copilot' 
                      : isTimeAdvanced 
                      ? '🔔 Kate Found Opportunity!' 
                      : 'Open Kate Copilot'}
                  </span>
                </button>

                {currentChapterIndex < lifecycleStory.chapters.length - 1 ? (
                  <button
                    onClick={() => handleSelectChapter(currentChapterIndex + 1)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-kbc-sky text-slate-950 font-bold shadow-md hover:scale-[1.02] transition-all whitespace-nowrap"
                  >
                    <span>Next Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelectChapter(0)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-semibold border border-slate-700 transition-all whitespace-nowrap"
                  >
                    <RotateCcw className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Restart Story</span>
                  </button>
                )}
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
      />

      {/* Persistent Bottom Bar with Hackathon Quick Guide */}
      <footer className="bg-slate-900 border-t border-slate-800/80 py-3 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">KBC OneClick Syndicate</span>
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
