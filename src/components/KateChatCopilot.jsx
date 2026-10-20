import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  RotateCcw, 
  Building, 
  Users, 
  Truck, 
  ChevronRight, 
  Target, 
  Layers, 
  MessageSquare, 
  X,
  Minimize2,
  Maximize2,
  Info,
  DollarSign,
  FastForward,
  Bell,
  Lock,
  Check
} from 'lucide-react';

export default function KateChatCopilot({ 
  currentChapter, 
  activeChapterIndex, 
  onSelectChapter, 
  totalChapters,
  isTimeAdvanced = false,
  onAdvanceTime,
  onRewindTime,
  onExecuteDomino, 
  executionState, 
  onResetExecution,
  onOpenMarketingModal,
  onFocusDashboard,
  onClose
}) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showItsmeModal, setShowItsmeModal] = useState(false);

  // Update messages based on whether time is advanced or at baseline
  useEffect(() => {
    setIsTyping(true);
    setMessages([]);

    if (!isTimeAdvanced) {
      // BASELINE STATE: Before event trigger, Kate is in silent monitoring
      const timer = setTimeout(() => {
        setMessages([
          {
            id: 1,
            sender: 'kate',
            text: `👋 Hi Lucas, I'm Kate. I'm quietly monitoring your business telemetry, Peppol invoices, and accounts in the background.`
          },
          {
            id: 2,
            sender: 'kate',
            text: `Operating telemetry is currently normal. Confidence is at 42% (below our strict 85% action threshold). To simulate the next business milestone and test our automated syndication, fast-forward time below.`,
            isBaselinePrompt: true
          }
        ]);
        setIsTyping(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      // ADVANCED STATE: Event Triggered! Fast-forward has happened, Kate jumps in with help!
      const timer1 = setTimeout(() => {
        setMessages([
          {
            id: 1,
            sender: 'kate',
            text: `🔔 Lucas, I've found something to help your business! We just detected an important operational inflection point.`,
            isAlert: true
          }
        ]);

        const timer2 = setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: 2,
              sender: 'kate',
              text: currentChapter.kateConversation.coreInsight
            }
          ]);

          const timer3 = setTimeout(() => {
            setMessages(prev => [
              ...prev,
              {
                id: 3,
                sender: 'kate',
                text: `${currentChapter.kateConversation.proposal} ${currentChapter.kateConversation.question}`,
                hasActions: true
              }
            ]);
            setIsTyping(false);
          }, 600);
        }, 600);
      }, 350);

      return () => clearTimeout(timer1);
    }
  }, [currentChapter.id, isTimeAdvanced]);

  // When execution completes, add celebratory message
  useEffect(() => {
    if (executionState.isComplete) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'kate',
          text: `🎉 Milestone successfully executed! All KBC core products and partner contracts for "${currentChapter.title}" are now 100% active.`,
          isSuccess: true
        }
      ]);
    }
  }, [executionState.isComplete]);

  return (
    <div className={`bg-slate-900 border-2 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
      isTimeAdvanced 
        ? 'border-kbc-sky/80 ring-2 ring-cyan-500/20' 
        : 'border-slate-800'
    }`}>
      
      {/* Top Header of Kate Copilot */}
      <div className={`px-4 py-3 flex items-center justify-between border-b transition-colors ${
        isTimeAdvanced 
          ? 'bg-gradient-to-r from-kbc-blue via-[#002855] to-kbc-blue border-kbc-sky/40' 
          : 'bg-slate-950 border-slate-800'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shadow-md transition-all ${
              isTimeAdvanced 
                ? 'bg-gradient-to-tr from-cyan-400 to-blue-500 text-slate-950 ring-2 ring-cyan-400/40' 
                : 'bg-slate-800 text-slate-300'
            }`}>
              <Sparkles className="w-5 h-5 text-current" />
            </div>
            <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-slate-900 rounded-full ${
              isTimeAdvanced ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
            }`} />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-white text-sm">Kate Assistant</span>
              <span className={`px-2 py-0.5 text-[10px] rounded-full font-mono font-bold border transition-all ${
                isTimeAdvanced 
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50 animate-pulse' 
                  : 'bg-slate-850 text-slate-400 border-slate-700'
              }`}>
                {isTimeAdvanced ? '🔔 Opportunity Detected (96%)' : '🟢 Silent Monitoring (42%)'}
              </span>
            </div>
            <div className="text-[11px] text-cyan-200/80 flex items-center space-x-1">
              <span>Chapter {currentChapter.chapterNumber} of {totalChapters}:</span>
              <strong className="text-white truncate">{currentChapter.title}</strong>
            </div>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title={isMinimized ? "Expand Chat" : "Minimize Chat"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Close Kate Copilot"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Body (Collapsed or Expanded) */}
      {!isMinimized && (
        <div className="flex flex-col h-[480px]">
          
          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-950/70">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'kate' && (
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                      msg.isAlert 
                        ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 animate-bounce' 
                        : 'bg-kbc-sky/20 border border-kbc-sky/40 text-kbc-sky'
                    }`}>
                      {msg.isAlert ? '!' : 'K'}
                    </div>
                  )}

                  <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                    msg.isSuccess 
                      ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 shadow-md'
                      : msg.isAlert
                      ? 'bg-gradient-to-r from-amber-950/90 to-slate-900 border border-amber-500/60 text-amber-200 font-semibold shadow-lg'
                      : msg.sender === 'user'
                      ? 'bg-kbc-blue text-white ml-auto'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 shadow-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>

                {/* Baseline Fast-Forward Action Shortcut (When viewed before advancing time) */}
                {msg.isBaselinePrompt && onAdvanceTime && (
                  <div className="pl-9 pt-1 animate-fadeIn">
                    <button
                      onClick={onAdvanceTime}
                      className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-kbc-sky hover:from-kbc-sky hover:to-cyan-400 text-slate-950 font-black text-xs shadow-md shadow-cyan-400/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center space-x-2"
                    >
                      <FastForward className="w-4 h-4 fill-current" />
                      <span>Fast-Forward Time to Milestone ({currentChapter.timeline})</span>
                    </button>
                  </div>
                )}

                {/* Interactive Action Shortcuts directly attached to Kate's proposal (After event trigger) */}
                {msg.hasActions && (
                  <div className="pl-9 pr-2 space-y-2 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      
                      {/* Action 1: Execute 1-Click Domino Flow via itsme® approval */}
                      <button
                        onClick={() => {
                          if (executionState.isRunning || executionState.isComplete) return;
                          setShowItsmeModal(true);
                        }}
                        disabled={executionState.isRunning || executionState.isComplete}
                        className="py-2 px-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs shadow-md shadow-orange-500/20 flex items-center justify-center space-x-1.5 transition-all transform hover:scale-[1.01] active:scale-98 disabled:opacity-50"
                      >
                        <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>
                          {executionState.isRunning 
                            ? `Executing Domino (${executionState.currentStepIndex + 1}/4)...` 
                            : executionState.isComplete 
                            ? 'Milestone Executed ✓' 
                            : 'Approve & Execute via itsme®'}
                        </span>
                      </button>

                      {/* Action 2: Inspect Marketing & Algo Parameters */}
                      <button
                        onClick={onOpenMarketingModal}
                        className="py-2 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all"
                      >
                        <Target className="w-3.5 h-3.5" />
                        <span>Marketing & Algo Parameters</span>
                      </button>

                      {/* Action 3: Focus on Full Dashboard */}
                      <button
                        onClick={onFocusDashboard}
                        className="py-2 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-all"
                      >
                        <Layers className="w-3.5 h-3.5 text-slate-400" />
                        <span>Inspect Live Dashboard & Domino</span>
                      </button>

                      {/* Action 4: Advance to Next Lifecycle Chapter */}
                      {activeChapterIndex < totalChapters - 1 ? (
                        <button
                          onClick={() => onSelectChapter(activeChapterIndex + 1)}
                          className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-emerald-400 border border-emerald-500/40 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all"
                        >
                          <span>Next Chapter: Stage {activeChapterIndex + 2}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectChapter(0)}
                          className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-white border border-slate-700 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-all"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Restart Story from Stage 1</span>
                        </button>
                      )}

                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 pl-9 text-slate-400 text-xs italic">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                <span>{isTimeAdvanced ? "Kate is preparing your OneClick bundle..." : "Kate is quietly analyzing live Peppol telemetry..."}</span>
              </div>
            )}
          </div>

          {/* Bottom Chat Prompt Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">Ask Kate about services, subsidies, or next steps...</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                Kate Copilot
              </span>
            </div>

            <button
              onClick={() => onSelectChapter((activeChapterIndex + 1) % totalChapters)}
              className="p-2 rounded-xl bg-kbc-sky hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center space-x-1 transition-all"
              title="Step to next milestone"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Minimized Pill Bar */}
      {isMinimized && (
        <div 
          onClick={() => setIsMinimized(false)}
          className="p-3 bg-slate-950 cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:bg-slate-900 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-kbc-sky" />
            <span className="font-semibold text-white">Kate Copilot Active:</span>
            <span className="text-cyan-300 truncate">{currentChapter.title}</span>
          </div>
          <span className="text-xs text-kbc-sky underline font-semibold">Tap to expand chat</span>
        </div>
      )}

      {/* ---------------- ITSME APPROVAL MODAL DIRECTLY IN KATE ---------------- */}
      {showItsmeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border-2 border-orange-500/80 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                  itsme®
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">KBC Sign & itsme® Approval</h3>
                  <p className="text-xs text-slate-400">Qualified Electronic Signature (QES)</p>
                </div>
              </div>
              <button 
                onClick={() => setShowItsmeModal(false)} 
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Mandate Subject</span>
                <div className="text-white font-semibold text-sm">{currentChapter.title}</div>
                <div className="text-xs text-kbc-sky font-mono">Entity: Ghent Craft Foods BV (BE 0849.201.884)</div>
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
                  <span>Dispatching authenticated partner webhooks & Dimona / eBox</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => setShowItsmeModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowItsmeModal(false);
                  onExecuteDomino();
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02]"
              >
                <Lock className="w-4 h-4" />
                <span>Confirm on itsme®</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
