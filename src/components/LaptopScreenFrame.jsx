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
    <div className="w-full max-w-6xl mx-auto my-3">
      {/* Outer Laptop Chassis / Lid */}
      <div className="bg-slate-800 rounded-[28px] p-3 sm:p-4 shadow-2xl border border-slate-750 ring-1 ring-white/10 shadow-cyan-950/40">
        
        {/* Top Laptop Bezel with Camera and Status Dot */}
        <div className="flex items-center justify-between px-4 pb-2.5 text-xs text-slate-400 select-none">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
              KBC Business Dashboard Web • Touch Corporate v4.2
            </span>
          </div>

          {/* Webcam Notch */}
          <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-slate-900 border border-slate-700/80">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-mono text-cyan-300 font-medium hidden md:inline">Kate AI Connected</span>
          </div>

          <div className="flex items-center space-x-3 text-slate-400 font-mono text-[11px]">
            <span className="hidden sm:inline">Encrypted TLS 1.3</span>
            <span className="text-emerald-400 font-semibold">9900 Gent Hub</span>
          </div>
        </div>

        {/* Inner Laptop Screen Surface */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col min-h-[750px] shadow-inner">
          
          {/* Top KBC Business Dashboard Navigation Header */}
          <div className="bg-gradient-to-r from-kbc-blue via-[#002855] to-kbc-blue px-6 py-3 flex items-center justify-between border-b border-kbc-sky/30 shadow-md">
            
            {/* Left Brand & Company Context */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-kbc-sky flex items-center justify-center font-black text-sm text-kbc-dark shadow-sm">
                  KBC
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-extrabold text-white tracking-wide">KBC BUSINESS DASHBOARD</span>
                    <span className="px-2 py-0.5 text-[10px] bg-cyan-900/80 text-cyan-200 border border-cyan-500/30 rounded-md font-mono">
                      Corporate Portal
                    </span>
                  </div>
                  <div className="text-xs text-cyan-200 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-semibold text-white">{company.name}</span>
                    <span className="text-slate-300 font-mono text-[11px]">({company.primaryAccount})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
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
            <div className="flex items-center space-x-3">
              <button 
                onClick={onKateClick}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md ${
                  isKateActive 
                    ? 'bg-gradient-to-r from-kbc-sky to-cyan-300 text-slate-950 ring-2 ring-white/60 animate-pulse' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-300 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-slate-900" />
                </div>
                <span>Kate Syndicate AI</span>
                {isKateActive && (
                  <span className="px-1.5 py-0.2 bg-slate-900 text-cyan-300 text-[10px] rounded-full font-mono">
                    Event Ready
                  </span>
                )}
              </button>

              <button className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-slate-700 transition-colors">
                <Bell className="w-4 h-4" />
              </button>

              <div className="hidden lg:flex items-center space-x-2 pl-2 border-l border-white/10">
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-white font-bold">
                  {company.founder ? company.founder.substring(0, 2).toUpperCase() : 'CF'}
                </div>
                <div className="text-left text-[11px] leading-tight">
                  <span className="text-white font-semibold block">{company.founder || 'CFO / Authorized Signer'}</span>
                  <span className="text-slate-400 text-[10px]">{company.type}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-Header Navigation Tabs Bar (Desktop) */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-2 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-6">
              <span className="text-kbc-sky font-bold flex items-center space-x-1.5 border-b-2 border-kbc-sky pb-1">
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>OneClick Syndicate Feed</span>
              </span>
              <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Accounts & Cash Management</span>
              </span>
              <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Peppol E-Invoices & Billit</span>
              </span>
              <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Insurances & Coverage</span>
              </span>
              <span className="hover:text-white cursor-pointer flex items-center space-x-1.5 pb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>KBC Partner Hub Integrations</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-2 text-[11px] text-slate-400 font-mono">
              <span>Branch: <strong className="text-slate-200">{company.relationshipManager}</strong></span>
            </div>
          </div>

          {/* Main Dashboard Screen Area */}
          <div className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 overflow-y-auto">
            {children}
          </div>

          {/* Bottom Desktop System Bar */}
          <div className="bg-slate-950 border-t border-slate-800/80 px-6 py-2 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-4">
              <span>KBC Group NV • Brussels, Belgium</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>All 229 KBC Ecosystem APIs Operational</span>
              </span>
            </div>
            <div>
              <span>itsme® Qualified Electronic Signature Proxy Enabled</span>
            </div>
          </div>

        </div>

      </div>

      {/* Laptop Stand Base / Hinge Bar */}
      <div className="relative mx-auto w-48 h-3.5 bg-gradient-to-b from-slate-700 to-slate-850 rounded-b-xl shadow-md border-t border-slate-600">
        <div className="w-16 h-1 bg-slate-500/80 rounded-full mx-auto mt-1"></div>
      </div>
    </div>
  );
}
