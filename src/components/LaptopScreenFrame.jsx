import React from 'react';
import { 
  Sparkles, 
  Search, 
  Bell, 
  LayoutDashboard, 
  FileText, 
  Layers, 
  CreditCard, 
  Settings, 
  ShieldCheck, 
  HelpCircle,
  Building,
  User,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function LaptopScreenFrame({ 
  children, 
  company, 
  onKateClick, 
  isKateActive 
}) {
  return (
    <div className="w-full max-w-6xl mx-auto my-2 sm:my-3">
      {/* Outer Laptop Chassis / Lid (Responsive: flush on small mobile, laptop styled on sm+) */}
      <div className="bg-slate-900 sm:bg-slate-800 rounded-2xl sm:rounded-[28px] p-1.5 sm:p-4 shadow-2xl border border-slate-800 sm:border-slate-750 ring-0 sm:ring-1 sm:ring-white/10 shadow-cyan-950/40">
        
        {/* Top Laptop Bezel with Camera and Status Dot (Desktop only) */}
        <div className="hidden sm:flex items-center justify-between px-4 pb-2.5 text-xs text-slate-400 select-none">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 font-mono text-[11px] text-slate-400">
              KBC Business Dashboard Web • Touch Corporate
            </span>
          </div>

          {/* Webcam Notch */}
          <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-slate-900 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-mono text-cyan-300 font-medium">Kate Connected</span>
          </div>

          <div className="flex items-center space-x-3 text-slate-400 font-mono text-[11px]">
            <span>Encrypted TLS 1.3</span>
            <span className="text-emerald-400 font-semibold">9900 Gent Hub</span>
          </div>
        </div>

        {/* Inner Laptop Screen Surface */}
        <div className="bg-slate-950 rounded-xl sm:rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-inner">
          
          {/* Top KBC Business Dashboard Navigation Header */}
          <div className="bg-gradient-to-r from-kbc-blue via-[#002855] to-kbc-blue px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-kbc-sky/30 shadow-md">
            
            {/* Left Brand & Company Context */}
            <div className="flex items-center space-x-2.5 sm:space-x-4 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-kbc-sky flex items-center justify-center font-black text-xs sm:text-sm text-kbc-dark shadow-sm flex-shrink-0">
                KBC
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide truncate">KBC DASHBOARD</span>
                  <span className="hidden sm:inline px-2 py-0.5 text-[10px] bg-cyan-900/80 text-cyan-200 border border-cyan-500/30 rounded-md font-mono whitespace-nowrap">
                    Corporate Portal
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-cyan-200 flex items-center space-x-1.5 truncate">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  <span className="font-semibold text-white truncate">{company.name}</span>
                  <span className="text-slate-300 font-mono text-[10px] hidden md:inline">({company.primaryAccount})</span>
                </div>
              </div>
            </div>

            {/* Global Search Bar (Desktop only) */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
              <div className="w-full relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input 
                  type="text" 
                  readOnly 
                  value="Search transactions, Peppol invoices, contracts, or ask Kate..."
                  className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none cursor-default"
                />
              </div>
            </div>

            {/* Right Header Actions & Kate Assistant Launch Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <button 
                onClick={onKateClick}
                className={`flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md whitespace-nowrap ${
                  isKateActive 
                    ? 'bg-gradient-to-r from-kbc-sky to-cyan-300 text-slate-950 ring-2 ring-white/60 animate-pulse' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-300 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-900" />
                </div>
                <span>Kate</span>
                {isKateActive && (
                  <span className="px-1.5 py-0.2 bg-slate-900 text-cyan-300 text-[10px] rounded-full font-mono hidden sm:inline">
                    Ready
                  </span>
                )}
              </button>

              <button className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-slate-700 transition-colors">
                <Bell className="w-4 h-4" />
              </button>

              <div className="hidden lg:flex items-center space-x-2 pl-2 border-l border-white/10">
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-white font-bold">
                  {company.founder ? company.founder.substring(0, 2).toUpperCase() : 'CF'}
                </div>
                <div className="text-left text-[11px] leading-tight">
                  <span className="text-white font-semibold block">{company.founder || 'CFO'}</span>
                  <span className="text-slate-400 text-[10px]">{company.type}</span>
                </div>
              </div>
            </div>

          </div>

            {/* Sub-Header Navigation Tabs Bar (Scrollable on mobile) */}
            <div className="bg-slate-900/90 border-b border-slate-800 px-3 sm:px-6 py-2 flex items-center justify-between text-xs text-slate-400 overflow-x-auto min-w-0 scrollbar-none">
              <div className="flex items-center space-x-3.5 sm:space-x-6 whitespace-nowrap flex-shrink-0 text-[11px] sm:text-xs">
                <span className="text-kbc-sky font-bold flex items-center space-x-1.5 border-b-2 border-kbc-sky pb-1">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>OneClick Feed</span>
                </span>
                <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Accounts & Cash</span>
                </span>
                <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Peppol & Invoices</span>
                </span>
                <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1 hidden sm:flex">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Insurances</span>
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-2 text-[11px] text-slate-400 font-mono whitespace-nowrap pl-4 flex-shrink-0">
                <span>Branch: <strong className="text-slate-200">{company.relationshipManager}</strong></span>
              </div>
            </div>

          {/* Main Dashboard Screen Area */}
          <div className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-3 sm:p-6 overflow-y-auto">
            {children}
          </div>

          {/* Bottom Desktop System Bar */}
          <div className="bg-slate-950 border-t border-slate-800/80 px-3 sm:px-6 py-2 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500">
            <div className="flex items-center space-x-2 sm:space-x-4 truncate">
              <span className="truncate">KBC Group NV</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center space-x-1 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                <span>229 APIs Live</span>
              </span>
            </div>
            <div className="hidden sm:inline">
              <span>itsme® QES Enabled</span>
            </div>
          </div>

        </div>

      </div>

      {/* Laptop Stand Base / Hinge Bar (hidden on mobile) */}
      <div className="hidden sm:block relative mx-auto w-48 h-3.5 bg-gradient-to-b from-slate-700 to-slate-850 rounded-b-xl shadow-md border-t border-slate-600">
        <div className="w-16 h-1 bg-slate-500/80 rounded-full mx-auto mt-1"></div>
      </div>
    </div>
  );
}
