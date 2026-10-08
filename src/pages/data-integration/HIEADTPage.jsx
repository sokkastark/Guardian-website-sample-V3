import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Bell,
  Activity,
  Network,
  Share2,
  Clock,
  ArrowUpRight,
  Shield,
  Search,
  Database,
  Workflow
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function HIEADTPage() {
  const [activeTab, setActiveTab] = useState('adt');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // HIE Connection → HL7 Message Parsing → MPI Identity Linking → Real-Time Alert Dispatch → TCM Workflow Trigger
  const adtPipeline = [
    {
      step: '01',
      stage: 'HIE CONNECTION',
      title: 'Regional HIE & Hospital ADT Feed Connection',
      icon: Network,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      summary: 'Establish secure real-time connections with regional Health Information Exchanges (HIEs) and acute hospital health system feeds.',
      details: [
        'HL7 v2 MLLP VPN & secure API integration with regional HIE networks',
        'Direct connection to hospital Emergency Department (ED) registration engines',
        'Multi-facility inpatient admission, discharge, and transfer feed ingestion'
      ],
      output: 'Connected Real-Time ADT Event Stream'
    },
    {
      step: '02',
      stage: 'HL7 MESSAGE PARSING',
      title: 'HL7 ADT Message Parsing & Normalization',
      icon: Bell,
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
      summary: 'Parse incoming HL7 v2 ADT event types including A01 (Inpatient Admission), A03 (Discharge), and A08 (Patient Information Update).',
      details: [
        'Real-time parsing of HL7 v2.x ADT A01, A03, and A08 message segments',
        'Extraction of admit diagnoses, attending facility, and discharge disposition',
        'Standardization of hospital facility codes and event timestamps'
      ],
      output: 'Parsed Hospital Event Payload'
    },
    {
      step: '03',
      stage: 'MPI IDENTITY LINKING',
      title: 'Master Patient Indexing & Roster Matching',
      icon: Search,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Match incoming hospital event payloads against attributed patient rosters and Master Patient Indexing (MPI) records.',
      details: [
        'Master Patient Indexing (MPI) identity resolution across health system feeds',
        'Cross-referencing against ACO and health plan attributed beneficiary lists',
        'Immediate assignment to primary care physician (PCP) and care manager'
      ],
      output: 'Matched Patient Hospital Event Record'
    },
    {
      step: '04',
      stage: 'REAL-TIME ALERT DISPATCH',
      title: 'Instant Care Team Notification Dispatch',
      icon: Clock,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Dispatch instant event alerts to care managers, clinical navigators, and attending primary care providers.',
      details: [
        'Immediate care manager alert routing for Emergency Department visits',
        'Inpatient admission notifications sent to risk-bearing ACO teams',
        'High-utilizer alert triggers for patients with frequent ED encounters'
      ],
      output: 'Dispatched Real-Time Event Notification'
    },
    {
      step: '05',
      stage: 'TCM WORKFLOW TRIGGER',
      title: '30-Day Transition of Care Workflow Trigger',
      icon: Workflow,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Initiate 30-day Transition Care Management (TCM) post-discharge outreach tasks to prevent hospital readmissions.',
      details: [
        'Automated initial 48-hour post-discharge contact task creation',
        'Scheduling of 7-day and 14-day post-discharge clinical follow-up visits',
        'Medication reconciliation task dispatch for care navigation staff'
      ],
      output: 'Initiated 30-Day TCM Care Protocol'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Real-Time HL7 v2 ADT Ingestion',
      description: 'Instant parsing of hospital Admit, Discharge, and Transfer (A01, A03, A08) event feeds.',
      category: 'Hospital Events',
      icon: Bell
    },
    {
      title: 'Regional HIE Interoperability',
      description: 'Connect with regional and statewide Health Information Exchanges to track out-of-network utilization.',
      category: 'HIE Interoperability',
      icon: Network
    },
    {
      title: 'ED High-Utilizer Event Triggers',
      description: 'Automated alert rules that flag patients with frequent emergency department visits for care coordination.',
      category: 'ED Surveillance',
      icon: Activity
    },
    {
      title: '30-Day TCM Workflow Automation',
      description: 'Automate Transition Care Management tasks upon hospital discharge to drive timely post-acute outreach.',
      category: 'Transition Care',
      icon: Workflow
    },
    {
      title: 'Automated MPI Roster Matching',
      description: 'Link incoming hospital ADT messages to attributed patient records via Master Patient Indexing (MPI).',
      category: 'Identity Matching',
      icon: Search
    },
    {
      title: 'Real-Time Event Cockpit',
      description: 'Centralized hospital event dashboard displaying real-time admissions, discharges, and ER visits across panels.',
      category: 'Event Cockpit',
      icon: Clock
    }
  ];

  const siblings = [
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration', desc: 'Multi-EHR connectivity, C-CDA document parsing, and longitudinal chart harmonization.' },
    { label: 'Claims Integration', path: '/data-integration/claims-integration', desc: 'CMS CCLF, 837/835 EDI claims, and PMPM financial data normalization.' },
    { label: 'Labs, Pharmacy & Other Data', path: '/data-integration/labs-pharmacy-other', desc: 'LOINC lab feeds, RxNorm medication fills, and SDoH social factor mesh.' },
    { label: 'Data Foundation', path: '/data-integration/data-foundation', desc: 'Enterprise data architecture, multi-tenant security, and semantic graph.' },
    { label: 'APIs & Mobile Integration', path: '/data-integration/apis-mobile', desc: 'FHIR APIs, secure integration framework, and mobile app integration.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#f43f5e]/20 via-[#e11d48]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/data-integration" className="hover:text-white transition-colors">Data & Integration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">HIE & ADT Integration</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Real-Time Event Streams // Phase 6D Data Foundation Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Real-Time HIE & Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda4af] via-[#f43f5e] to-[#e11d48]">ADT Event Stream Integration</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian connects regional Health Information Exchanges (HIEs) and hospital HL7 ADT feeds—delivering real-time alerts for emergency room visits and inpatient admissions to power 30-day transition-of-care workflows.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f43f5e] to-[#be123c] hover:from-[#fb7185] hover:to-[#e11d48] text-white font-semibold text-sm shadow-lg shadow-[#f43f5e]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule ADT Integration Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/transitions-of-care-adt"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Transitions of Care</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Message Standard</div>
                <div className="text-xl font-bold text-white mt-1">HL7 v2 ADT Feeds</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Network Reach</div>
                <div className="text-xl font-bold text-white mt-1">Regional HIE Streams</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Alert Speed</div>
                <div className="text-xl font-bold text-white mt-1">Real-Time Routing</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Protocol Engine</div>
                <div className="text-xl font-bold text-white mt-1">30-Day TCM Protocol</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADT PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f43f5e] bg-[#fff1f2] px-3.5 py-1.5 rounded-full">
              HIE & ADT Integration Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Real-Time Hospital Event-to-Care Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian ingests hospital ADT messages and converts them into immediate care team action.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {adtPipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#f43f5e]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#f43f5e] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#fda4af]' : 'text-[#f43f5e]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${adtPipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {adtPipeline[activeStepIndex].step} — {adtPipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {adtPipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {adtPipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {adtPipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#f43f5e] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#f43f5e] bg-[#fff1f2] px-3 py-1 rounded-md">
                      {adtPipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#fff1f2] text-[#f43f5e]">
                      {React.createElement(adtPipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">ADT Event Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Real-Time Engine</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Event Stream:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Real-Time HL7 Stream</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Target Receiver:</span>
                      <span className="text-[#1c1636]">Care Manager Cockpit</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#f43f5e] font-bold">{adtPipeline[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f43f5e] bg-[#fff1f2] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Real-Time ADT Alerts & Transitions Interface
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual interface screens powering real-time hospital event notifications and 30-day post-discharge transition workflows.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('adt')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'adt'
                  ? 'bg-[#f43f5e] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#fff1f2]'
              }`}
            >
              ADT Event Notifications
            </button>
            <button
              onClick={() => setActiveTab('tcm')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'tcm'
                  ? 'bg-[#f43f5e] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#fff1f2]'
              }`}
            >
              Transitions of Care Workspace
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'adt' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Real-Time ADT Notification Feed Cockpit</h3>
                    <p className="text-xs text-[#706890]">Inpatient admissions, ER visits, and facility transfer alert stream across attributed panels.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#f43f5e] bg-[#fff1f2] px-3 py-1 rounded-full">
                    ui-adt-notifications.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-adt-notifications.png"
                    alt="Guardian ADT Notifications UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Transitions of Care (TCM) Workspace</h3>
                    <p className="text-xs text-[#706890]">30-day post-discharge protocol tracking, medication reconciliation, and follow-up tasks.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#f43f5e] bg-[#fff1f2] px-3 py-1 rounded-full">
                    ui-transitions-of-care.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-transitions-of-care.png"
                    alt="Guardian Transitions of Care UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f43f5e] bg-[#fff1f2] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              HIE & ADT Integration Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting real-time hospital event streams and transition-of-care workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#f43f5e]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#fff1f2] text-[#f43f5e]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#f43f5e] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {cap.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e9e5f0] flex items-center justify-between text-xs text-[#706890]">
                    <span>Product Profile 6.0 Sourced</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL CONTEXT */}
      <section className="py-20 sm:py-24 bg-[#faf9fc] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#fff1f2] text-[#f43f5e] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Real-Time Care Transitions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Closing the Critical 30-Day Window Post-Discharge
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                When an attributed patient visits an Emergency Department or is admitted to an acute hospital, care managers often learn of the event weeks later through delayed claims filings. This delay prevents timely post-acute outreach during the vulnerable 30-day post-discharge window.
              </p>
              <p>
                Guardian’s HIE & ADT Integration layer ingests real-time HL7 ADT message streams directly from regional HIEs and hospital registration feeds. By matching events to patient records via Master Patient Indexing (MPI), Guardian automatically triggers 30-day TCM care management protocols that reduce avoidable readmissions and protect shared savings performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Data & Integration Navigation"
        kicker="Explore Data & Integration Family"
        tagPrefix="DATA"
        overviewLink="/data-integration"
        overviewText="View Data Overview"
        actionText="View Module"
      />

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
            <Sparkles className="w-4 h-4 text-[#bd93f9]" />
            <span>Connect Real-Time Hospital Event Feeds</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Implement Real-Time HIE & ADT Integration?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to discover how Guardian’s real-time ADT event engine alerts care teams to emergency visits and hospital discharges instantly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#f43f5e] to-[#be123c] hover:from-[#fb7185] hover:to-[#e1d5f6] text-white font-bold text-sm shadow-xl shadow-[#f43f5e]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/data-integration"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Data & Integration Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

