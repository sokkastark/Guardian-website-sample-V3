import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Tv,
  Bell,
  Shield,
  Layers,
  Search,
  ArrowUpRight,
  Cpu,
  Workflow,
  Clock,
  Video
} from 'lucide-react';

export default function WebinarsPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Educational Session Framework Steps
  const sessionSteps = [
    {
      step: '01',
      stage: 'TOPIC SELECTION',
      title: 'Healthcare Intelligence Core Domains',
      icon: Tv,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Explore educational presentation modules covering data integration, risk adjustment, and clinical care coordination.',
      details: [
        'Reviewing healthcare data interoperability and Master Patient Indexing (MPI)',
        'Examining prospective CMS-HCC V24 and V28 risk model suspecting strategies',
        'Exploring real-time ADT event stream integration and transition of care protocols'
      ],
      output: 'Educational Topic Selection'
    },
    {
      step: '02',
      stage: 'TECHNICAL DEEP-DIVE',
      title: 'Platform Architecture & Workflow Analysis',
      icon: Cpu,
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
      summary: 'Technical walk-through of Guardian software components, data schemas, and point-of-care tools.',
      details: [
        'Deep-dive into Patient Master Chart (PMC) longitudinal data architecture',
        'Analyzing continuous HEDIS and MIPS care gap surveillance engines',
        'Reviewing RESTful FHIR R4 APIs and EMR scheduling connectors'
      ],
      output: 'Technical Session Architecture'
    },
    {
      step: '03',
      stage: 'WORKFLOW DEMONSTRATION',
      title: 'Clinical & Operational Tool Execution',
      icon: Workflow,
      badgeColor: 'bg-[#d97706]/10 text-[#d97706] border-[#d97706]/20',
      summary: 'Demonstration of care manager cockpits, risk coder audit tools, and real-time ADT notification feeds.',
      details: [
        'Demonstrating real-time hospital admission, discharge, and transfer (A01, A03, A08) alerts',
        'Reviewing 30-day TCM care plan creation with 150+ assessment scales',
        'Demonstrating closed-loop referral routing and specialist coordination'
      ],
      output: 'Live Workflow Demonstration'
    },
    {
      step: '04',
      stage: 'INTERACTIVE Q&A',
      title: 'Expert Discussion & Follow-Up Planning',
      icon: Clock,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Engage with Guardian specialists to align platform capabilities with organizational value-based priorities.',
      details: [
        'Discussing organization-specific EMR connectivity and claims ingestion needs',
        'Reviewing CMS MSSP shared savings benchmark alignment models',
        'Scheduling customized 1-on-1 team walkthroughs and technical reviews'
      ],
      output: 'Tailored Follow-Up Plan'
    }
  ];

  // Verified Educational Webinar Topics
  const webinarTopics = [
    {
      title: 'Mastering Real-Time ADT & 30-Day TCM Protocols',
      description: 'Educational overview of HL7 ADT message streams, emergency visit alerting, and readmission prevention workflows.',
      category: 'Care Transitions',
      icon: Bell
    },
    {
      title: 'Navigating CMS-HCC V24 to V28 Risk Model Transition',
      description: 'Strategies for prospective risk adjustment gap suspecting, RAF calculation, and coder chart audits.',
      category: 'Risk Adjustment',
      icon: Shield
    },
    {
      title: 'Unified Patient Master Chart (PMC) Architecture',
      description: 'Technical presentation on multi-EHR data ingestion, C-CDA parsing, and Master Patient Indexing (MPI).',
      category: 'Interoperability',
      icon: Cpu
    },
    {
      title: 'Automated Quality Care Gap Closure & HEDIS / MIPS',
      description: 'Operational session on continuous surveillance for point-of-care care gap notifications and quality scorecards.',
      category: 'Quality Manager',
      icon: Layers
    },
    {
      title: 'Standardizing Care Plans with 150+ Assessment Scales',
      description: 'Clinical walkthrough of personalized care plan building, disease screening tools, and task queues.',
      category: 'Care Teams',
      icon: Workflow
    },
    {
      title: 'FHIR R4 APIs & Healthcare Data Integration',
      description: 'Technical overview of RESTful APIs, real-time data processing, and point-of-care EMR connectors.',
      category: 'Developer APIs',
      icon: Video
    }
  ];

  const siblings = [
    { label: 'Insights & Perspectives', path: '/resources/insights', desc: 'Perspectives on healthcare data, clinical intelligence, and value-based strategy.' },
    { label: 'Educational Guides', path: '/resources/guides', desc: 'Practical executive reference guides and operational implementation frameworks.' },
    { label: 'Case Studies', path: '/resources/case-studies', desc: 'Verified Guardian capability evaluation frameworks and value delivery models.' },
    { label: 'Product Tours', path: '/resources/product-tours', desc: 'Guided visual walkthroughs of Guardian platform software capabilities.' },
    { label: 'Video Library', path: '/resources/videos', desc: 'Feature overview briefs and platform media briefings.' }
  ];

  return (
    <div className="min-h-screen bg-[#fffbeb] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#2d2112] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#d97706]/25 via-[#f59e0b]/30 to-[#b45309]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#fde68a] mb-6">
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d97706]" />
            <span className="text-white">Educational Webinars & Sessions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#fef3c7] mb-6">
              <Sparkles className="w-4 h-4 text-[#fbbf24]" />
              <span>Educational Sessions // Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Healthcare Intelligence Webinars & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] via-[#fbbf24] to-[#d97706]">Educational Sessions</span>
            </h1>

            <p className="text-base sm:text-lg text-[#fef3c7] leading-relaxed mb-8">
              Explore Guardian’s educational webinar repository covering healthcare data integration, prospective risk adjustment, real-time ADT event streams, and value-based population management.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-white font-semibold text-sm shadow-lg shadow-[#d97706]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Live Webinar / Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/product-tours"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Product Tours</span>
                <ArrowUpRight className="w-4 h-4 text-[#fde68a]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#fde68a] uppercase tracking-wider font-semibold">Session Format</div>
                <div className="text-xl font-bold text-white mt-1">Educational Deep-Dive</div>
              </div>
              <div>
                <div className="text-xs text-[#fde68a] uppercase tracking-wider font-semibold">Event Alerting</div>
                <div className="text-xl font-bold text-white mt-1">Real-Time ADT</div>
              </div>
              <div>
                <div className="text-xs text-[#fde68a] uppercase tracking-wider font-semibold">Risk Models</div>
                <div className="text-xl font-bold text-white mt-1">CMS-HCC V24 / V28</div>
              </div>
              <div>
                <div className="text-xs text-[#fde68a] uppercase tracking-wider font-semibold">Data Standard</div>
                <div className="text-xl font-bold text-white mt-1">FHIR R4 RESTful</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SESSION PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#d97706] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
              Educational Session Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Structure of Guardian Educational Presentations
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian structures educational webinars to deliver clear technical and operational insight.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {sessionSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#fffbeb] text-[#625b82] border-[#e9e5f0] hover:border-[#d97706]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#d97706] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#fbbf24]' : 'text-[#d97706]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#fffbeb] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${sessionSteps[activeStepIndex].badgeColor}`}>
                    <span>STAGE {sessionSteps[activeStepIndex].step} — {sessionSteps[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {sessionSteps[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {sessionSteps[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {sessionSteps[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Session Deliverable:</span>
                    <span className="text-xs font-bold text-[#d97706] bg-[#fef3c7] px-3 py-1 rounded-md">
                      {sessionSteps[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#fef3c7] text-[#d97706]">
                      {React.createElement(sessionSteps[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Webinar Module</h4>
                      <p className="text-xs text-[#706890]">Guardian Educational Series</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#fffbeb] p-4 rounded-lg border border-[#fef3c7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Session Stage:</span>
                      <span className="text-amber-700 font-bold">{sessionSteps[activeStepIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Content Standard:</span>
                      <span className="text-emerald-600 font-bold">Product Profile 6.0</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Output Asset:</span>
                      <span className="text-[#d97706] font-bold">{sessionSteps[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#fffbeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#d97706] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Real-Time ADT Notification Feed Proof
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual platform interface screens demonstrating real-time hospital admit, discharge, and transfer notifications.
            </p>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
              <div>
                <h3 className="text-base font-bold text-[#1c1636]">Real-Time ADT Notification Stream Cockpit</h3>
                <p className="text-xs text-[#706890]">Instant emergency department and hospital inpatient admission alerts across panels.</p>
              </div>
              <span className="text-xs font-semibold text-[#d97706] bg-[#fef3c7] px-3 py-1 rounded-full">
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
        </div>
      </section>

      {/* 4. WEBINAR TOPICS MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#d97706] bg-[#fef3c7] px-3.5 py-1.5 rounded-full">
              Educational Topics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Webinar Presentation Topic Library
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified educational presentation modules grounded in Product Profile 6.0 capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinarTopics.map((topic, idx) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fffbeb] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#d97706]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#fef3c7] text-[#d97706]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#d97706] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {topic.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {topic.description}
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
      <section className="py-20 sm:py-24 bg-[#fffbeb] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#fef3c7] text-[#d97706] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Educational Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Sharing Practical Knowledge for Value-Based Care Teams
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                As value-based care programs evolve, healthcare executives and clinical leaders require clear technical insight into data integration, risk adjustment models, and care team execution.
              </p>
              <p>
                Guardian Webinars provide structured educational presentations designed to break down key topics—such as CMS-HCC V24 to V28 transitions, real-time ADT event streams, and Master Patient Indexing (MPI)—into actionable operational knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#d97706]">
              Explore Resources Family
            </span>
            <h3 className="text-xl font-bold text-[#1c1636] mt-2">
              Resources Navigation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siblings.map((sib, idx) => (
              <Link
                key={idx}
                to={sib.path}
                className="group p-6 rounded-2xl bg-[#fffbeb] border border-[#e9e5f0] hover:border-[#d97706] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#d97706] uppercase tracking-wider">Resource Center</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#d97706] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#d97706] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#d97706] flex items-center space-x-1">
                  <span>Explore Module</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#fef3c7] mb-6">
            <Sparkles className="w-4 h-4 text-[#fbbf24]" />
            <span>Schedule Educational Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready for a Personalized Educational Demonstration?
          </h2>
          <p className="text-base sm:text-lg text-[#fef3c7] max-w-2xl mx-auto mb-8">
            Schedule a 1-on-1 walkthrough with Guardian specialists to explore our clinical intelligence, ADT alerts, and risk stratification capabilities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-white font-bold text-sm shadow-xl shadow-[#d97706]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/resources"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Resources Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
