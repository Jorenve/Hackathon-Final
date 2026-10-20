import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Building2, 
  CheckCircle2, 
  DollarSign, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  Zap, 
  PieChart, 
  Sliders, 
  Award,
  Clock,
  Briefcase,
  Landmark,
  BadgePercent,
  UserPlus,
  Building
} from 'lucide-react';
import { JURY_TRIPLE_WIN_DATA, HIGH_MARGIN_ECONOMICS, ENTERPRISE_SCALABILITY_MATRIX } from '../../data/mockData';

export default function TripleWinView() {
  const { ecosystemTransformation, partnerEconomics, kbcCommercialViability, roiCalculatorDefaults } = JURY_TRIPLE_WIN_DATA;

  // Interactive ROI Calculator States
  const [smeCount, setSmeCount] = useState(roiCalculatorDefaults.smeUserBase);
  const [triggersPerYear, setTriggersPerYear] = useState(roiCalculatorDefaults.annualOneClickTriggersPerSme);
  const [avgBasket, setAvgBasket] = useState(roiCalculatorDefaults.avgOneClickBasketEur);

  // Computed Economics
  const totalAnnualVolume = smeCount * triggersPerYear * avgBasket;
  const kbcOrchestrationRevenue = totalAnnualVolume * (roiCalculatorDefaults.kbcOrchestrationFeePct / 100);
  
  // Core Banking & Insurance High-Margin Revenue (Average €2,450/yr high-margin margin per active SME)
  const kbcHighMarginCoreRevenue = smeCount * 2450;
  const totalKbcCombinedAnnualGain = kbcOrchestrationRevenue + kbcHighMarginCoreRevenue;

  const totalPartnerCacSaved = smeCount * triggersPerYear * roiCalculatorDefaults.partnerCacSavedEur;
  const hoursSavedForEntrepreneurs = (smeCount * triggersPerYear * 18);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Top Hero: The Triple-Win Thesis */}
      <div className="bg-gradient-to-r from-slate-900 via-kbc-blue/40 to-slate-900 p-6 sm:p-8 rounded-3xl border border-kbc-sky/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-kbc-sky/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Hackathon Finals Pitch Engine • Commercial Viability & Margins</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Beyond Commission: Unlocking High-Margin Core Banking & Insurance
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The biggest benefit for KBC is <strong>NOT</strong> a minor 4.5% referral fee. By resolving core entrepreneurial milestones (1st commercial lease, 1st employee hire, workspace fit-out) in 1 click, KBC captures <strong>high-margin statutory insurance underwriting, net interest margins on SME lending, and primary operating deposits</strong> from non-clients.
          </p>
        </div>

        {/* 3 Core Impact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-700/80">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Users className="w-4 h-4" />
              <span>For Belgian Entrepreneurs</span>
            </div>
            <div className="text-2xl font-black text-white mt-1">18 Hours Saved</div>
            <p className="text-xs text-slate-400 mt-0.5">Zero bureaucracy. 1-click execution for commercial leases & employee hiring.</p>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-2xl border border-emerald-500/40">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Building2 className="w-4 h-4" />
              <span>For Ecosystem Partners</span>
            </div>
            <div className="text-2xl font-black text-white mt-1">0% CAC & Swappable</div>
            <p className="text-xs text-slate-400 mt-0.5">Pre-financed escrow work orders, +340% conversion, and full partner flexibility.</p>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-2xl border border-kbc-sky/40">
            <div className="text-xs font-bold text-kbc-sky uppercase tracking-wider flex items-center space-x-1.5">
              <Landmark className="w-4 h-4" />
              <span>For KBC Bank & Insurance</span>
            </div>
            <div className="text-2xl font-black text-white mt-1">€12,850 5-Yr LTV</div>
            <p className="text-xs text-slate-400 mt-0.5">Captures primary business accounts, high-margin insurance, and lending NIM.</p>
          </div>
        </div>
      </div>

      {/* CORE ECONOMIC COMPARISON: High-Margin Products vs Flat Commission */}
      <div className="bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
        <div>
          <span className="text-xs font-bold text-kbc-sky uppercase tracking-wider">
            Where is the Benefit for KBC Bigger?
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Legacy Referral Directory vs. High-Margin Core Banking & Insurance
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-3xl">
            Directory 1.0 treated KBC as an advertising billboard, earning an insignificant one-time referral fee. KBC OneClick uses partner chaining as a Trojan Horse to sell KBC's highest-margin core products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Old Referral Fee */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-rose-900/40 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="text-sm font-bold text-rose-400">
                {HIGH_MARGIN_ECONOMICS.legacyComparison.oldFlatDirectoryCommission.label}
              </div>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-mono">
                Legacy Directory
              </span>
            </div>
            <div className="text-3xl font-black text-rose-400">
              {HIGH_MARGIN_ECONOMICS.legacyComparison.oldFlatDirectoryCommission.amountEur}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {HIGH_MARGIN_ECONOMICS.legacyComparison.oldFlatDirectoryCommission.description}
            </p>
            <div className="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <div>• KBC loses primary account to competitor</div>
              <div>• Zero insurance cross-selling attachment</div>
              <div>• 98.6% drop-off in partner conversion</div>
            </div>
          </div>

          {/* New High-Margin Core Value */}
          <div className="bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-900 p-5 rounded-2xl border-2 border-kbc-sky space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="text-sm font-bold text-cyan-300 flex items-center space-x-1.5">
                <Landmark className="w-4 h-4 text-kbc-sky" />
                <span>{HIGH_MARGIN_ECONOMICS.legacyComparison.newOneClickCoreValue.label}</span>
              </div>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-700/60 px-2 py-0.5 rounded font-mono">
                OneClick 2.0
              </span>
            </div>
            <div className="text-3xl font-black text-emerald-400">
              {HIGH_MARGIN_ECONOMICS.legacyComparison.newOneClickCoreValue.amountEur}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {HIGH_MARGIN_ECONOMICS.legacyComparison.newOneClickCoreValue.description}
            </p>
            <div className="space-y-1 text-xs text-cyan-300 pt-2 border-t border-slate-800">
              <div>✓ Captures Primary KBC Business PRO Operating Account</div>
              <div>✓ High-Margin Statutory Insurance (Occupational Accident + Office)</div>
              <div>✓ Net Interest Margin on SME Fit-out Credit Facilities</div>
            </div>
          </div>
        </div>

        {/* 4 Distinct Revenue Streams Breakdown */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Breakdown of KBC's 4 Value Streams per Acquired SME:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {HIGH_MARGIN_ECONOMICS.revenueStreamsPerSme.map((stream, idx) => (
              <div key={idx} className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-white">{stream.productCategory}</div>
                <div className="text-lg font-black text-cyan-300">{stream.annualGrossMargin}</div>
                <p className="text-[10px] text-slate-400">{stream.products}</p>
                <div className="text-[10px] text-emerald-400 font-semibold pt-1 border-t border-slate-800/80">
                  {stream.marginPct}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW KBC ATTRACTS NON-CLIENTS (Acquisition Metrics) */}
      <div className="bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-4">
        <div>
          <span className="text-xs font-bold text-kbc-sky uppercase tracking-wider">
            Non-Client Customer Acquisition Economics
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Zero-CAC Organic Inflow via Peppol, Kate Open Auditor & Accountants
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            How KBC captures new prime business accounts without spending hundreds of euros on Google/Meta ads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase">Traditional CAC Saved</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">
              {HIGH_MARGIN_ECONOMICS.nonClientConversionMetrics.cacSavedForKbc}
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5 block">vs traditional branch prospecting</span>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase">Time to 1st Product</span>
            <div className="text-2xl font-black text-cyan-300 mt-1">
              {HIGH_MARGIN_ECONOMICS.nonClientConversionMetrics.timeToFirstProduct}
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5 block">instant itsme® verification</span>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase">Products Activated Day 1</span>
            <div className="text-2xl font-black text-purple-400 mt-1">
              {HIGH_MARGIN_ECONOMICS.nonClientConversionMetrics.multiProductAttachment}
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5 block">vs 1.1 in traditional branch</span>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase">5-Year SME Churn</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">
              {HIGH_MARGIN_ECONOMICS.nonClientConversionMetrics.fiveYearChurnRate}
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5 block">sticky operational ecosystem</span>
          </div>
        </div>
      </div>

      {/* Interactive Scale Calculator: Orchestration Fee + Core Banking Yield */}
      <div className="bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-kbc-sky uppercase tracking-wider mb-1">
              <Sliders className="w-4 h-4" />
              <span>Interactive Market Scale Model</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Total Economic Yield (Flemish & Belgian SME Market)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Combines KBC's 4.5% orchestration fee with recurring high-margin insurance & lending yields.
            </p>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Slider 1 */}
          <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Participating SMEs:</span>
              <span className="font-bold text-white font-mono">{smeCount.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="20000"
              max="350000"
              step="5000"
              value={smeCount}
              onChange={(e) => setSmeCount(Number(e.target.value))}
              className="w-full accent-kbc-sky cursor-pointer"
            />
            <div className="text-[10px] text-slate-500 flex justify-between">
              <span>20k (pilot)</span>
              <span>125k (default)</span>
              <span>350k (full Flanders)</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Milestone Triggers / Year:</span>
              <span className="font-bold text-white font-mono">{triggersPerYear}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.2"
              value={triggersPerYear}
              onChange={(e) => setTriggersPerYear(Number(e.target.value))}
              className="w-full accent-kbc-sky cursor-pointer"
            />
            <div className="text-[10px] text-slate-500 flex justify-between">
              <span>1 trigger</span>
              <span>3.2 (realistic)</span>
              <span>10 triggers</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div className="space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Avg OneClick Basket:</span>
              <span className="font-bold text-white font-mono">€{avgBasket.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="250"
              value={avgBasket}
              onChange={(e) => setAvgBasket(Number(e.target.value))}
              className="w-full accent-kbc-sky cursor-pointer"
            />
            <div className="text-[10px] text-slate-500 flex justify-between">
              <span>€500</span>
              <span>€2,450</span>
              <span>€10,000</span>
            </div>
          </div>
        </div>

        {/* Projected Returns Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-gradient-to-br from-kbc-blue to-[#001f3f] p-4 rounded-2xl border border-kbc-sky/40">
            <span className="text-[11px] text-cyan-200 font-bold uppercase tracking-wider block">
              Total Combined KBC Annual Yield:
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">
              €{(totalKbcCombinedAnnualGain / 1_000_000).toFixed(1)}M / year
            </div>
            <span className="text-[10px] text-cyan-300 mt-1 block">
              €{(kbcHighMarginCoreRevenue / 1_000_000).toFixed(1)}M Insurance & NIM + €{(kbcOrchestrationRevenue / 1_000_000).toFixed(1)}M Fee
            </span>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-emerald-500/40">
            <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block">
              Partner CAC Marketing Dollars Saved:
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">
              €{(totalPartnerCacSaved / 1_000_000).toFixed(1)}M / year
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Eliminates vendor outbound Google/Meta ad burn
            </span>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-purple-500/40">
            <span className="text-[11px] text-purple-300 font-bold uppercase tracking-wider block">
              Entrepreneur Bureaucracy Saved:
            </span>
            <div className="text-2xl sm:text-3xl font-black text-purple-200 mt-1">
              {(hoursSavedForEntrepreneurs / 1_000_000).toFixed(2)}M Hours
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">
              18 hours per milestone injected into the real economy
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
