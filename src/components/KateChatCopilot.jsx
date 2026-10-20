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
  DollarSign
} from 'lucide-react';

export default function KateChatCopilot({ 
  currentChapter, 
  activeChapterIndex, 
  onSelectChapter, 
  totalChapters,
  onExecuteDomino, 
  executionState, 
  onResetExecution,
  onOpenMarketingModal,
  onFocusDashboard
}) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Initialize messages when chapter changes
  useEffect(() => {
    setIsTyping(true);
    setMessages([]);

    const timer1 = setTimeout(() => {
      setMessages([
        {
          id: 1,
          sender: 'kate',
          text: currentChapter.kateConversation.initialGreeting
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
        }, 700);
      }, 700);
    }, 400);

    return () => {
      clearTimeout(timer1);
    };
  }, [currentChapter.id]);

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
    <div className="bg-slate-900 border-2 border-kbc-sky/70 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300">
      
      {/* Top Header of Kate Copilot */}
      <div className="bg-gradient-to-r from-kbc-blue via-[#002855] to-kbc-blue px-4 py-3 flex items-center justify-between border-b border-kbc-sky/40">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center font-black text-slate-950 text-sm shadow-md">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-white text-sm">Kate Assistant</span>
              <span className="px-2 py-0.5 text-[10px] bg-cyan-900/80 text-cyan-200 border border-cyan-500/30 rounded-full font-mono font-bold">
                Ecosystem Guide
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
                    <div className="w-7 h-7 rounded-lg bg-kbc-sky/20 border border-kbc-sky/40 flex items-center justify-center text-xs text-kbc-sky font-bold flex-shrink-0 mt-0.5">
                      K
                    </div>
                  )}

                  <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                    msg.isSuccess 
                      ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 shadow-md'
                      : msg.sender === 'user'
                      ? 'bg-kbc-blue text-white ml-auto'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 shadow-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>

                {/* Interactive Action Shortcuts directly attached to Kate's proposal */}
                {msg.hasActions && (
                  <div className="pl-9 pr-2 space-y-2 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      
                      {/* Action 1: Execute 1-Click Domino Flow */}
                      <button
                        onClick={onExecuteDomino}
                        disabled={executionState.isRunning || executionState.isComplete}
                        className="py-2 px-3 rounded-xl bg-gradient-to-r from-kbc-sky via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-kbc-sky text-slate-950 font-black text-xs shadow-md shadow-kbc-sky/20 flex items-center justify-center space-x-1.5 transition-all transform hover:scale-[1.01] active:scale-98 disabled:opacity-50"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>
                          {executionState.isRunning 
                            ? `Executing Domino (${executionState.currentStepIndex + 1}/4)...` 
                            : executionState.isComplete 
                            ? 'Milestone Executed ✓' 
                            : '1-Click Execute Syndicate'}
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
                <span>Kate is analyzing live Peppol telemetry...</span>
              </div>
            )}
          </div>

          {/* Bottom Chat Prompt Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">Ask Kate about services, subsidies, or next steps...</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                Kate AI
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

    </div>
  );
}
