import React from 'react';
import { 
  Wifi, 
  BatteryMedium, 
  Sparkles, 
  Search, 
  Bell, 
  Home, 
  ArrowLeftRight, 
  Layers, 
  User, 
  Compass,
  MessageSquareHeart
} from 'lucide-react';

export default function MobileDeviceFrame({ children, onKateClick, isKateActive }) {
  return (
    <div className="relative mx-auto my-4 w-full max-w-[420px] aspect-[9/19.2] sm:aspect-auto sm:h-[840px] bg-slate-950 rounded-[48px] p-3.5 shadow-2xl shadow-cyan-950/40 border-[4px] border-slate-700/80 ring-1 ring-white/10 flex flex-col overflow-hidden">
      
      {/* Outer Phone Hardware Buttons Simulation */}
      <div className="absolute -left-[6px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
      <div className="absolute -left-[6px] top-42 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
      <div className="absolute -right-[6px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-sm" />

      {/* Screen Container */}
      <div className="relative w-full h-full bg-slate-900 rounded-[38px] flex flex-col overflow-hidden border border-slate-800">
        
        {/* Mobile Status Bar (Realistic Apple / Android styling) */}
        <div className="pt-2 px-6 pb-1 flex items-center justify-between text-xs text-slate-300 select-none bg-kbc-blue/90 border-b border-white/5 z-20">
          <span className="font-semibold tracking-tight text-white">09:41</span>
          
          {/* Dynamic Island / Notch */}
          <div className="w-24 h-4 bg-black rounded-full mx-auto -mt-0.5 flex items-center justify-center space-x-1.5 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse" />
            <span className="text-[9px] font-mono text-cyan-300 font-medium">Kate</span>
          </div>

          <div className="flex items-center space-x-1.5 text-slate-200">
            <span className="text-[10px] font-semibold text-slate-300">5G</span>
            <Wifi className="w-3.5 h-3.5" />
            <BatteryMedium className="w-4 h-4" />
          </div>
        </div>

        {/* KBC Mobile Brand Header Bar */}
        <div className="bg-gradient-to-r from-kbc-blue via-[#002855] to-kbc-blue px-4 py-2.5 flex items-center justify-between border-b border-kbc-sky/20 z-10 shadow-md">
          {/* KBC Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-kbc-sky flex items-center justify-center font-black text-xs text-kbc-dark shadow-sm">
              KBC
            </div>
            <div>
              <span className="text-xs font-bold text-white tracking-wide uppercase">Mobile Business</span>
              <div className="text-[10px] text-cyan-200 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>De Gentse Proeverij</span>
              </div>
            </div>
          </div>

          {/* Header Action Icons & Kate Dynamic Trigger */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={onKateClick}
              className={`relative flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all shadow-sm ${
                isKateActive 
                  ? 'bg-kbc-sky text-slate-900 ring-2 ring-white/60 animate-bounce-gentle' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-300 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-slate-900" />
              </div>
              <span>Kate</span>
              {isKateActive && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
              )}
            </button>
            <button className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Mobile Body */}
        <div className="flex-1 overflow-y-auto px-3.5 py-3 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
          {children}
        </div>

        {/* KBC Mobile Standard Bottom Navigation */}
        <div className="bg-slate-950/95 border-t border-slate-800/80 px-4 py-2 flex items-center justify-around text-slate-400 select-none z-10 backdrop-blur-md">
          <button className="flex flex-col items-center space-y-0.5 text-kbc-sky">
            <Home className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center space-y-0.5 hover:text-slate-200">
            <ArrowLeftRight className="w-4 h-4" />
            <span className="text-[10px]">Transfer</span>
          </button>
          
          {/* Kate Center FAB button */}
          <button 
            onClick={onKateClick}
            className="flex flex-col items-center -mt-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-kbc-blue via-kbc-sky to-cyan-300 p-0.5 shadow-lg shadow-kbc-sky/30 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-kbc-sky group-hover:text-white transition-colors" />
              </div>
            </div>
            <span className="text-[10px] font-bold text-kbc-sky mt-0.5">Kate</span>
          </button>

          <button className="flex flex-col items-center space-y-0.5 hover:text-slate-200">
            <Layers className="w-4 h-4" />
            <span className="text-[10px]">Products</span>
          </button>
          <button className="flex flex-col items-center space-y-0.5 hover:text-slate-200">
            <User className="w-4 h-4" />
            <span className="text-[10px]">Profile</span>
          </button>
        </div>

        {/* Home Indicator Bar */}
        <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto my-1.5" />
      </div>
    </div>
  );
}
