import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Sparkles, 
  Server, 
  UserCheck, 
  BrainCircuit, 
  Workflow, 
  ArrowRight,
  ShieldCheck,
  Zap,
  AlertCircle,
  CheckCircle2,
  Clock,
  HeartPulse,
  Activity,
  FileText,
  Check
} from 'lucide-react';

export default function PlatformSection() {
  const [activeCapability, setActiveCapability] = useState('master-chart');
  const [activeTab, setActiveTab] = useState('Overview');

  const capabilities = [
    { id: 'integration', label: 'Data Integration', icon: Database, tab: 'Timeline' },
    { id: 'enrichment', label: 'Data Enrichment', icon: Sparkles, tab: 'Clinical Profile' },
    { id: 'services', label: 'Information Services', icon: Server, tab: 'Care Plan' },
    { id: 'master-chart', label: 'Patient Master Chart', icon: UserCheck, tab: 'Overview' },
    { id: 'intelligence', label: 'Clinical Intelligence', icon: BrainCircuit, tab: 'Care Gaps' },
    { id: 'workflow', label: 'Workflow / Action', icon: Workflow, tab: 'Risk & Recapture' },
  ];

  const subTabs = ['Overview', 'Clinical Profile', 'Care Gaps', 'Risk & Recapture', 'Care Plan', 'Timeline'];

  const tabToCapMap = {
    'Overview': 'master-chart',
    'Clinical Profile': 'enrichment',
    'Care Gaps': 'intelligence',
    'Risk & Recapture': 'workflow',
    'Care Plan': 'services',
    'Timeline': 'integration',
  };

  const valueFlowSteps = [
    {
      title: 'Connect',
      desc: 'Bring clinical, claims, and operational data together from across your ecosystem.',
      icon: Database,
    },
    {
      title: 'Understand',
      desc: 'Enrich data with clinical intelligence to create a longitudinal patient and population view.',
      icon: BrainCircuit,
    },
    {
      title: 'Act',
      desc: 'Turn identified opportunities into coordinated care workflows and measurable outcomes.',
      icon: Zap,
    }
  ];

  const handleCapabilityClick = (cap) => {
    setActiveCapability(cap.id);
    setActiveTab(cap.tab);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabToCapMap[tabName]) {
      setActiveCapability(tabToCapMap[tabName]);
    }
  };

  return (
    <section 
      id="platform" 
      className="relative py-20 sm:py-24 lg:py-28 bg-[#faf8fd] overflow-hidden border-t border-[#e8e4ef] select-none"
    >
      {/* Ambient Lighting Accents & Background Waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[750px] bg-gradient-to-tr from-[#7b3fc7]/10 via-[#a855f7]/12 to-[#ff7a57]/8 blur-[180px] rounded-full" />
        <div className="absolute top-10 right-10 w-[500px] h-[400px] bg-purple-200/40 blur-[130px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-20" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* TOP ROW: Left Story Copy & Right Floating SaaS Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Story, Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-4 xl:col-span-4"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>OUR PLATFORM</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.12] mb-6">
              One connected <br className="hidden sm:inline" />
              view of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#6366f1]">healthcare.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base text-[#5e5873] leading-relaxed max-w-lg mb-8 font-normal">
              Guardian unifies clinical, claims, and operational data, enriches it with clinical intelligence, and delivers the insights care teams need — all in one connected platform.
            </p>

            {/* CTA Button */}
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_8px_30px_rgba(123,63,199,0.4)] hover:shadow-[0_12px_40px_rgba(123,63,199,0.55)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>Explore the platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column Interactive Visual Cockpit Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-8 xl:col-span-8 relative w-full"
          >
            {/* Outer Cockpit Window Container */}
            <div className="relative rounded-3xl bg-white border border-[#e5e0ee] shadow-[0_25px_70px_rgba(28,22,54,0.12)] overflow-hidden w-full">
              
              {/* Cockpit Window Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#faf8fd] border-b border-[#ede7f6]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#8a849b] ml-2 hidden sm:inline">
                    Guardian Clinical Intelligence Cockpit v6.0
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#10b981] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>HIPAA &amp; SOC 2 Verified</span>
                </div>
              </div>

              {/* Main Cockpit Workspace Body (Dark Sidebar with Platform Buttons + Light Dashboard) */}
              <div className="flex flex-col md:flex-row min-h-[440px] w-full">
                
                {/* Dark Left Sidebar (Platform Capability Buttons replace old menu items) */}
                <div className="w-full md:w-56 bg-[#171426] text-white p-4 shrink-0 flex flex-col justify-start border-b md:border-b-0 md:border-r border-[#26213d]">
                  <nav className="space-y-1.5">
                    {capabilities.map((cap) => {
                      const Icon = cap.icon;
                      const isActive = activeCapability === cap.id;
                      return (
                        <button
                          key={cap.id}
                          onClick={() => handleCapabilityClick(cap)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-left cursor-pointer ${
                            isActive
                              ? 'bg-gradient-to-r from-[#7b3fc7] to-[#8b5cf6] text-white shadow-md shadow-[#7b3fc7]/40 ring-1 ring-white/20'
                              : 'text-purple-200/70 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <div className={`p-1 rounded-md shrink-0 ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-purple-300'}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="truncate">{cap.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Light Right Dashboard View (Fully Reactive to Buttons & Tabs) */}
                <div className="flex-1 p-4 sm:p-5 bg-[#faf9fe] space-y-4 overflow-hidden">
                  
                  {/* Patient Profile Card */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#7b3fc7] to-[#a855f7] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md shadow-[#7b3fc7]/30 shrink-0">
                        EV
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-[#1c1636] leading-tight">
                          Eleanor Vance
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-[#727272] flex items-center gap-1.5 mt-0.5 font-mono">
                          <span>DOB: 04/12/1958 (Age 68)</span>
                          <span>•</span>
                          <span className="text-[#7b3fc7] font-semibold">ID: #PMC-88492</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#fff0eb] text-[#ff7a57] border border-[#ff7a57]/30">
                        High Risk Cohort
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/30">
                        RAF 2.14
                      </span>
                    </div>
                  </div>

                  {/* Sub-tab Navigation (Syncs with Sidebar Capability Buttons) */}
                  <div className="flex items-center gap-3 sm:gap-4 border-b border-[#e5e0ee] pb-2 text-[11px] font-semibold overflow-x-auto scrollbar-none">
                    {subTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`pb-1.5 whitespace-nowrap transition-colors relative cursor-pointer ${
                          activeTab === tab
                            ? 'text-[#7b3fc7] font-bold'
                            : 'text-[#8a849b] hover:text-[#1c1636]'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div 
                            layoutId="activeSubTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7b3fc7] rounded-full"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* DYNAMIC REACTIVE PANEL CONTENT */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="space-y-3.5"
                    >
                      {/* VIEW 1: Patient Master Chart / Overview */}
                      {(activeTab === 'Overview' || activeCapability === 'master-chart') && (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {/* Card 1: Risk Score Ring Gauge */}
                            <div className="p-3.5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-[#1c1636]">Risk Score</span>
                                <span className="text-[9.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                                  ↑ 12% vs last period
                                </span>
                              </div>

                              <div className="flex items-center gap-3 mt-1.5">
                                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path
                                      className="text-purple-100"
                                      strokeWidth="3.5"
                                      stroke="currentColor"
                                      fill="none"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                      className="text-[#7b3fc7]"
                                      strokeDasharray="75, 100"
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      stroke="currentColor"
                                      fill="none"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                  </svg>
                                  <div className="absolute flex flex-col items-center">
                                    <span className="text-xs font-extrabold text-[#1c1636]">2.14</span>
                                    <span className="text-[8px] font-semibold text-[#8a849b]">RAF Score</span>
                                  </div>
                                </div>

                                <div className="flex-1 space-y-1">
                                  <div className="h-9 w-full flex items-end gap-1 pt-1">
                                    {[35, 45, 60, 85].map((val, idx) => (
                                      <div key={idx} className="flex-1 flex flex-col items-center gap-0.5">
                                        <div 
                                          className="w-full rounded-t-md bg-gradient-to-t from-[#7b3fc7] to-[#a855f7]" 
                                          style={{ height: `${val}%` }}
                                        />
                                        <span className="text-[8.5px] font-mono text-[#8a849b]">Q{idx + 1}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card 2: Open Care Gaps List */}
                            <div className="p-3.5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs font-bold text-[#1c1636]">Open Care Gaps</span>
                                  <span className="text-[10px] font-mono font-bold text-[#7b3fc7]">3 <span className="text-[#8a849b] font-normal">of 8 total</span></span>
                                </div>

                                <div className="space-y-1.5 text-[10.5px]">
                                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#fff5f5]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <span className="font-bold text-[#1c1636] block truncate">Diabetes Eye Exam</span>
                                      <span className="text-rose-600 text-[9.5px] font-semibold">Overdue</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#fffbeb]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <span className="font-bold text-[#1c1636] block truncate">Statin Therapy</span>
                                      <span className="text-amber-700 text-[9.5px] font-semibold">Recommended</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-1.5 pt-1.5 border-t border-[#f2ecf9] text-right">
                                <span className="text-[10px] font-bold text-[#7b3fc7] hover:underline inline-flex items-center gap-1 cursor-pointer">
                                  View Details <ArrowRight className="w-2.5 h-2.5" />
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Card 3: Key Clinical Conditions */}
                          <div className="p-3 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs">
                            <span className="text-xs font-bold text-[#1c1636] block mb-1.5">Key Clinical Conditions</span>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                'E11.9 Type 2 Diabetes',
                                'I10 Hypertension',
                                'E78.5 Hyperlipidemia',
                                'I48.0 Atrial Fibrillation',
                                '+ 2 more'
                              ].map((item, idx) => (
                                <span 
                                  key={idx}
                                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#f4effa] text-[#7b3fc7] border border-[#e2d6f5] whitespace-nowrap"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {/* VIEW 2: Data Enrichment / Clinical Profile */}
                      {(activeTab === 'Clinical Profile' || (activeCapability === 'enrichment' && activeTab !== 'Overview')) && (
                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#1c1636] flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#7b3fc7]" /> Longitudinal Clinical Synthesis
                              </span>
                              <span className="text-[9.5px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                360° View Active
                              </span>
                            </div>
                            <p className="text-[11px] text-[#5e5873]">
                              Synthesized 14 clinical encounters across Epic EHR, Cerner EHR, and Quest Lab feeds into unified longitudinal timeline.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-white border border-[#e5e0ee] space-y-1">
                              <span className="text-[10px] font-mono uppercase text-[#8a849b] block">Suspected Risk Factor</span>
                              <span className="font-bold text-[#1c1636] text-xs block">HCC 19: Diabetes w/ Complications</span>
                              <span className="text-[10px] text-[#7b3fc7] font-semibold bg-[#f2ecf9] px-2 py-0.5 rounded inline-block">
                                94% AI Confidence
                              </span>
                            </div>
                            <div className="p-3 rounded-xl bg-white border border-[#e5e0ee] space-y-1">
                              <span className="text-[10px] font-mono uppercase text-[#8a849b] block">Uncoded Opportunity</span>
                              <span className="font-bold text-[#1c1636] text-xs block">CKD Stage 3 (eGFR 54)</span>
                              <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded inline-block">
                                Lab Evidence Found
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* VIEW 3: Clinical Intelligence / Care Gaps */}
                      {(activeTab === 'Care Gaps' || (activeCapability === 'intelligence' && activeTab !== 'Overview')) && (
                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#1c1636] flex items-center gap-2">
                                <BrainCircuit className="w-4 h-4 text-[#7b3fc7]" /> Active HEDIS Quality Measures
                              </span>
                              <span className="text-[10px] font-mono text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-0.5 rounded-full font-bold">
                                85% Care Gap Closure
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="p-2.5 rounded-xl bg-[#fff5f5] border border-rose-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="w-4 h-4 text-rose-500" />
                                  <div>
                                    <span className="font-bold text-[#1c1636] block text-xs">Diabetic Retinal Eye Exam</span>
                                    <span className="text-[10px] text-rose-600">Overdue by 42 days • Patient SMS sent</span>
                                  </div>
                                </div>
                                <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Action Required</span>
                              </div>

                              <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <div>
                                    <span className="font-bold text-[#1c1636] block text-xs">Kidney Health Evaluation</span>
                                    <span className="text-[10px] text-emerald-700">Completed (Sep 28) • eGFR & uACR verified</span>
                                  </div>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Closed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* VIEW 4: Workflow / Action / Risk & Recapture */}
                      {(activeTab === 'Risk & Recapture' || (activeCapability === 'workflow' && activeTab !== 'Overview')) && (
                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#1c1636] flex items-center gap-2">
                                <Workflow className="w-4 h-4 text-[#7b3fc7]" /> Risk Recapture &amp; Action Center
                              </span>
                              <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                                2 Items Ready
                              </span>
                            </div>

                            <div className="p-3 rounded-xl bg-[#faf8fd] border border-[#e5e0ee] flex items-center justify-between">
                              <div>
                                <span className="font-bold text-[#1c1636] block text-xs">HCC 19: Diabetes w/ Chronic Complications</span>
                                <span className="text-[10px] text-[#727272]">Lab A1C 8.7 &amp; Neuropathy prescription evidence</span>
                              </div>
                              <button className="px-2.5 py-1 rounded-lg text-[10px] font-bold text-white bg-[#7b3fc7] hover:bg-[#9565d2] transition-colors">
                                Query EHR
                              </button>
                            </div>

                            <div className="p-3 rounded-xl bg-white border border-[#e5e0ee] flex items-center justify-between">
                              <div>
                                <span className="font-bold text-[#1c1636] block text-xs">HCC 85: Congestive Heart Failure</span>
                                <span className="text-[10px] text-emerald-700 font-semibold">Documented &amp; Confirmed (Oct 14)</span>
                              </div>
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                                Synchronized
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* VIEW 5: Information Services / Care Plan */}
                      {(activeTab === 'Care Plan' || (activeCapability === 'services' && activeTab !== 'Overview')) && (
                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#1c1636] flex items-center gap-2">
                                <Server className="w-4 h-4 text-[#7b3fc7]" /> Active Care Management Plan v3
                              </span>
                              <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                                Protocol Live
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2.5 rounded-xl bg-[#faf8fd] border border-[#e5e0ee]">
                                <span className="text-[10px] text-[#8a849b] block font-mono">PRIMARY CARE PROVIDER</span>
                                <span className="font-bold text-[#1c1636]">Dr. Robert Chen</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#faf8fd] border border-[#e5e0ee]">
                                <span className="text-[10px] text-[#8a849b] block font-mono">CARE COORDINATOR</span>
                                <span className="font-bold text-[#1c1636]">Sarah Jenkins, RN</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* VIEW 6: Data Integration / Timeline */}
                      {(activeTab === 'Timeline' || (activeCapability === 'integration' && activeTab !== 'Overview')) && (
                        <div className="space-y-2.5 text-xs text-[#5e5873]">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5e0ee]">
                            <Clock className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-[#1c1636] block">Oct 28: ED Discharge ADT Alert</span>
                              <span className="text-[11px] text-[#727272]">Winter Park Hospital • ADT feed ingested &amp; assigned to Care Manager</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5e0ee]">
                            <Clock className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-[#1c1636] block">Oct 14: Annual Wellness Visit Claim</span>
                              <span className="text-[11px] text-[#727272]">Dr. Robert Chen • EDI 837 claim processed &amp; merged</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM STEP PROCESS FLOW (Connect -> Understand -> Act) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="pt-10 border-t border-[#eeecf5]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {valueFlowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex items-start gap-4 group">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7b3fc7] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <h4 className="text-lg font-extrabold text-[#1c1636] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5e5873] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connecting Arrow for desktop */}
                  {index < valueFlowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-4 text-[#8b5cf6]/40">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
