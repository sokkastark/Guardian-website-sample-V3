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
  TrendingUp,
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  HeartPulse
} from 'lucide-react';

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('risk');
  const [activeCapability, setActiveCapability] = useState('master-chart');

  const capabilities = [
    { id: 'integration', label: 'Data Integration', icon: Database, tab: 'claims' },
    { id: 'enrichment', label: 'Data Enrichment', icon: Sparkles, tab: 'conditions' },
    { id: 'services', label: 'Information Services', icon: Server, tab: 'timeline' },
    { id: 'master-chart', label: 'Patient Master Chart', icon: UserCheck, tab: 'timeline' },
    { id: 'intelligence', label: 'Clinical Intelligence', icon: BrainCircuit, tab: 'gaps' },
    { id: 'workflow', label: 'Workflow / Action', icon: Workflow, tab: 'risk' },
  ];

  const handleCapabilityClick = (cap) => {
    setActiveCapability(cap.id);
    setActiveTab(cap.tab);
  };

  return (
    <section 
      id="platform" 
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#fbfafd] via-white to-[#f7f5fb] overflow-hidden border-t border-[#e8e4ef] select-none"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[550px] bg-[#7b3fc7]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[450px] bg-[#ff7a57]/6 blur-[150px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* TOP ROW: Left Story Copy & Right Floating SaaS Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Story, Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>OUR PLATFORM</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.12] mb-5">
              One connected view <br className="hidden sm:inline" />
              of healthcare.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5e5873] leading-relaxed max-w-lg mb-8 font-normal">
              Guardian unifies data, enriches it with clinical intelligence, and delivers the insights care teams need — all in one connected platform.
            </p>

            {/* CTA Button */}
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_24px_rgba(123,63,199,0.35)] hover:shadow-[0_8px_32px_rgba(123,63,199,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>Explore the platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column Interactive Visual Card Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl bg-white border border-[#e5e0ee] shadow-[0_20px_50px_rgba(28,22,54,0.08)] overflow-hidden">
              
              {/* SaaS Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#faf8fd] border-b border-[#ede7f6]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#8a849b] ml-2">
                    Guardian Clinical Intelligence Cockpit v6.0
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#7b3fc7]">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span className="font-semibold">HIPAA & SOC 2 Verified</span>
                </div>
              </div>

              {/* Main SaaS Dashboard Container */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Patient Summary Header Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#f8f6fc] border border-[#e5e0ee]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7b3fc7] to-[#a855f7] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#7b3fc7]/30">
                      EV
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#1c1636]">
                        Eleanor Vance
                      </h3>
                      <p className="text-xs text-[#727272] flex items-center gap-2 mt-0.5">
                        <span>DOB: 04/12/1958 (Age 68)</span>
                        <span>•</span>
                        <span className="font-mono text-[#7b3fc7]">ID: #PMC-88492</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ff7a57]/15 text-[#ff7a57] border border-[#ff7a57]/30">
                      High Risk Cohort
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7b3fc7]/15 text-[#7b3fc7] border border-[#7b3fc7]/30">
                      RAF 2.14
                    </span>
                  </div>
                </div>

                {/* Filter / Capability Tabs */}
                <div className="flex items-center gap-2 border-b border-[#e5e0ee] pb-3 overflow-x-auto scrollbar-none">
                  {[
                    { key: 'risk', label: 'Risk & Recapture' },
                    { key: 'gaps', label: 'Care Gaps (HEDIS)' },
                    { key: 'timeline', label: 'Patient Timeline' },
                    { key: 'claims', label: 'Claims Ingestion' },
                    { key: 'conditions', label: 'Chronic Conditions' },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        activeTab === tab.key
                          ? 'bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/30'
                          : 'text-[#727272] hover:text-[#1c1636] hover:bg-[#f2ecf9]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                <div className="min-h-[200px]">
                  {activeTab === 'risk' && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white border border-[#e5e0ee] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-5 h-5 text-[#ff7a57]" />
                          <div>
                            <span className="text-xs font-bold text-[#1c1636] block">
                              HCC 19: Diabetes with Chronic Complications
                            </span>
                            <span className="text-[11px] text-[#727272]">
                              Suspected via lab A1C &gt; 8.5 &amp; prescription history
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-2.5 py-1 rounded-lg">
                          Recapture Required
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-[#e5e0ee] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <div>
                            <span className="text-xs font-bold text-[#1c1636] block">
                              HCC 85: Congestive Heart Failure
                            </span>
                            <span className="text-[11px] text-[#727272]">
                              Confirmed via cardiology consultation note (Oct 14)
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          Documented
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'gaps' && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white border border-[#e5e0ee] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <HeartPulse className="w-5 h-5 text-[#7b3fc7]" />
                          <div>
                            <span className="text-xs font-bold text-[#1c1636] block">
                              HEDIS: Diabetic Retinal Eye Exam
                            </span>
                            <span className="text-[11px] text-[#727272]">
                              Overdue by 42 days • Outreach scheduled
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">
                          Open Gap
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-[#e5e0ee] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <div>
                            <span className="text-xs font-bold text-[#1c1636] block">
                              HEDIS: Kidney Health Evaluation
                            </span>
                            <span className="text-[11px] text-[#727272]">
                              Completed lab eGFR &amp; uACR (Sep 28)
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          Closed
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'timeline' && (
                    <div className="space-y-3 text-xs text-[#5e5873]">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5e0ee]">
                        <Clock className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1c1636]">Oct 28: ED Discharge ADT Alert</span>
                          <p className="text-[11px] text-[#727272] mt-0.5">Winter Park Hospital • Follow-up call assigned to Care Manager</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5e0ee]">
                        <Clock className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#1c1636]">Oct 14: PCP Annual Wellness Visit</span>
                          <p className="text-[11px] text-[#727272] mt-0.5">Dr. Robert Chen • Updated Care Plan &amp; Medication List</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'claims' && (
                    <div className="p-4 rounded-xl bg-white border border-[#e5e0ee] text-xs space-y-2">
                      <div className="flex justify-between text-[#727272]">
                        <span>Claims Engine Feed</span>
                        <span className="font-mono text-[#7b3fc7]">EDI 837/835 Ingested</span>
                      </div>
                      <div className="w-full bg-[#f2ecf9] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#7b3fc7] h-full w-[88%]" />
                      </div>
                      <p className="text-[11px] text-[#727272]">88% of quarterly claims files processed and normalized into PMC timeline.</p>
                    </div>
                  )}

                  {activeTab === 'conditions' && (
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-[#e5e0ee]">
                        <span className="font-bold text-[#1c1636] block">Type 2 Diabetes</span>
                        <span className="text-[10px] text-[#727272]">Dx: E11.9 • Active</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#e5e0ee]">
                        <span className="font-bold text-[#1c1636] block">Essential Hypertension</span>
                        <span className="text-[10px] text-[#727272]">Dx: I10 • Active</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM CAPABILITY RIBBON */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="pt-6 border-t border-[#eeecf5]"
        >
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 lg:gap-3 xl:gap-3.5 flex-nowrap overflow-x-auto scrollbar-none py-2 px-1">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isActive = activeCapability === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => handleCapabilityClick(cap)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#7b3fc7] border-2 border-[#7b3fc7] shadow-[0_4px_18px_rgba(123,63,199,0.22)] scale-105'
                      : 'bg-white hover:bg-[#faf9fc] text-[#5e5873] hover:text-[#1c1636] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 shadow-xs'
                  }`}
                >
                  <div className={`p-1.5 rounded-full shrink-0 ${isActive ? 'bg-[#f2ecf9] text-[#7b3fc7]' : 'bg-[#f8f6fc] text-[#8a849b]'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{cap.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
