import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Tv,
  Layers,
  Search,
  ArrowUpRight,
  Cpu,
  Workflow,
  Shield,
  Smartphone,
  Eye
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function ProductToursPage() {
  const [activeTab, setActiveTab] = useState('patient360');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Guided Software Exploration Flow (4 Stages)
  const tourFlow = [
    {
      step: '01',
      stage: 'PATIENT 360 EXPLORE',
      title: 'Longitudinal Patient Master Chart (PMC)',
      icon: Search,
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      summary: 'Explore how Guardian consolidates clinical encounters, claims, labs, pharmacy, and ADT events into a unified longitudinal record.',
      details: [
        '13 core clinical domains combining EHR charts, claims, and ADT events',
        'Sub-second Master Patient Indexing (MPI) deduplication across health systems',
        'Direct access to problems, vitals, lab trends, and active medication lists'
      ],
      output: 'Unified Patient Profile View'
    },
    {
      step: '02',
      stage: 'EXECUTIVE ANALYTICS',
      title: 'Population Health & Financial Cockpit',
      icon: Cpu,
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      summary: 'Walk through real-time executive dashboards displaying population metrics, financial PMPM baselines, and quality scorecards.',
      details: [
        'Real-time population risk stratification and cohort breakdown',
        'PMPM financial cost baselines and benchmark comparison widgets',
        'Provider-level HEDIS and MIPS care gap closure tracking'
      ],
      output: 'Executive Intelligence Cockpit'
    },
    {
      step: '03',
      stage: 'CARE WORKSPACE',
      title: 'Multidisciplinary Care Management',
      icon: Workflow,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Review personalized care plan building, standardized assessment tools (150+ available), and care team task queues.',
      details: [
        'Automated 30-day TCM care plan creation upon hospital discharge',
        'Integration of 150+ validated clinical assessment scales and disease forms',
        'Task management for CCM, TCM, RPM, and PCM care navigation'
      ],
      output: 'Care Management Execution View'
    },
    {
      step: '04',
      stage: 'POINT-OF-CARE CONNECT',
      title: 'Referral Routing & Mobile Engagement',
      icon: Smartphone,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Examine closed-loop PCP-specialist referral tracking and 1-click browser-based telemedicine consults.',
      details: [
        'Electronic referral routing with PCP and specialist coordination',
        'Browser-based virtual video visits with zero software download or patient login',
        'RESTful FHIR R4 API connectors for external application exchange'
      ],
      output: 'Connected Point-of-Care Workflow'
    }
  ];

  // Sourced Product Tour Highlights
  const tourHighlights = [
    {
      title: 'Patient 360 Master Chart Walkthrough',
      description: 'See how longitudinal patient records consolidate clinical, claims, lab, pharmacy, and ADT data in real time.',
      category: 'Patient 360',
      icon: Search
    },
    {
      title: 'Risk Stratification & CMS-HCC Suspecting',
      description: 'Explore prospective RAF score calculation, dual V24/V28 risk models, and suspected condition review.',
      category: 'Risk Engine',
      icon: Shield
    },
    {
      title: 'Care Management & Assessment Scales',
      description: 'Walk through care plan creation, 150+ standardized assessment scales, and multidisciplinary task routing.',
      category: 'Care Management',
      icon: Workflow
    },
    {
      title: 'Real-Time ADT Alert & TOC Cockpit',
      description: 'Tour real-time admission, discharge, and transfer alerting with 30-day post-discharge protocol triggers.',
      category: 'Care Transitions',
      icon: Tv
    },
    {
      title: 'Referral Manager & Geo-Mapping',
      description: 'Examine closed-loop PCP and specialist referral tracking with network provider geo-mapping.',
      category: 'CIN Routing',
      icon: Eye
    },
    {
      title: 'Telemedicine & Virtual Waiting Room',
      description: 'See 1-click browser-based video consults with integrated patient clinical history access.',
      category: 'Virtual Care',
      icon: Smartphone
    }
  ];

  const siblings = [
    { label: 'Insights & Perspectives', path: '/resources/insights', desc: 'Perspectives on healthcare data, clinical intelligence, and value-based strategy.' },
    { label: 'Educational Guides', path: '/resources/guides', desc: 'Practical executive reference guides and operational implementation frameworks.' },
    { label: 'Case Studies', path: '/resources/case-studies', desc: 'Verified Guardian capability evaluation frameworks and value delivery models.' },
    { label: 'Webinars', path: '/resources/webinars', desc: 'Educational presentation sessions covering value-based care and clinical intelligence.' },
    { label: 'Video Library', path: '/resources/videos', desc: 'Feature overview briefs and platform media briefings.' }
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#102d42] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0284c7]/25 via-[#38bdf8]/30 to-[#0891b2]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bae6fd] mb-6">
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0284c7]" />
            <span className="text-white">Guided Product Tours</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e0f2fe] mb-6">
              <Sparkles className="w-4 h-4 text-[#38bdf8]" />
              <span>Interactive Software Exploration // Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Guided Software Exploration & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bae6fd] via-[#38bdf8] to-[#0284c7]">Product Capabilities</span>
            </h1>

            <p className="text-base sm:text-lg text-[#e0f2fe] leading-relaxed mb-8">
              Take a guided visual tour of Guardian’s primary software modules—including the longitudinal Patient Master Chart, executive analytics cockpit, care management workspace, and referral manager.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-semibold text-sm shadow-lg shadow-[#0284c7]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Full Platform Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Platform Architecture</span>
                <ArrowUpRight className="w-4 h-4 text-[#bae6fd]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bae6fd] uppercase tracking-wider font-semibold">Core Software View</div>
                <div className="text-xl font-bold text-white mt-1">Patient 360 Chart</div>
              </div>
              <div>
                <div className="text-xs text-[#bae6fd] uppercase tracking-wider font-semibold">Analytics View</div>
                <div className="text-xl font-bold text-white mt-1">Executive Cockpit</div>
              </div>
              <div>
                <div className="text-xs text-[#bae6fd] uppercase tracking-wider font-semibold">Care Workspace</div>
                <div className="text-xl font-bold text-white mt-1">150+ Assessment Scales</div>
              </div>
              <div>
                <div className="text-xs text-[#bae6fd] uppercase tracking-wider font-semibold">Virtual Care</div>
                <div className="text-xl font-bold text-white mt-1">1-Click Telemedicine</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOUR PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1.5 rounded-full">
              Software Exploration Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Guided Software Walkthrough Framework
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How to explore key platform interfaces and point-of-care clinical tools.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tourFlow.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#f0f9ff] text-[#625b82] border-[#e9e5f0] hover:border-[#0284c7]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#0284c7] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#38bdf8]' : 'text-[#0284c7]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#f0f9ff] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${tourFlow[activeStepIndex].badgeColor}`}>
                    <span>STAGE {tourFlow[activeStepIndex].step} — {tourFlow[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {tourFlow[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {tourFlow[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {tourFlow[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Tour Deliverable:</span>
                    <span className="text-xs font-bold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-md">
                      {tourFlow[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#e0f2fe] text-[#0284c7]">
                      {React.createElement(tourFlow[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Software Feature Tour</h4>
                      <p className="text-xs text-[#706890]">Guardian Product Suite</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#f0f9ff] p-4 rounded-lg border border-[#e0f2fe] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Tour Stage:</span>
                      <span className="text-sky-700 font-bold">{tourFlow[activeStepIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Software Interface:</span>
                      <span className="text-emerald-600 font-bold">Verified Product UI</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Target Output:</span>
                      <span className="text-[#0284c7] font-bold">{tourFlow[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MULTI-SCREEN UI SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#f0f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1.5 rounded-full">
              Real Product Proof Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Explore Actual Software Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Select a platform module to inspect authentic software screens used by healthcare organizations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('patient360')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'patient360'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Patient 360 Chart
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Executive Cockpit
            </button>
            <button
              onClick={() => setActiveTab('caremgmt')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'caremgmt'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Care Management
            </button>
            <button
              onClick={() => setActiveTab('referrals')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'referrals'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Referral Manager
            </button>
            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'telemedicine'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Telemedicine
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'patient360' && (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Patient 360 Longitudinal Chart Interface</h3>
                    <p className="text-xs text-[#706890]">13 core clinical domains combining EHR encounters, claims, labs, pharmacy, and ADT events.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">ui-patient-360.png</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img src="/images/product-ui/ui-patient-360.png" alt="Guardian Patient 360 UI" className="w-full h-auto object-cover max-h-[600px]" />
                </div>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Executive Dashboard & Population Intelligence Cockpit</h3>
                    <p className="text-xs text-[#706890]">Real-time KPI monitoring, financial risk baselines, and quality performance scorecards.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">ui-dashboard-main.png</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img src="/images/product-ui/ui-dashboard-main.png" alt="Guardian Executive Dashboard UI" className="w-full h-auto object-cover max-h-[600px]" />
                </div>
              </div>
            )}

            {activeTab === 'caremgmt' && (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Care Management & Assessment Scales Interface</h3>
                    <p className="text-xs text-[#706890]">Care plan builder, 150+ assessment tools, and multidisciplinary task management.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">ui-care-management.png</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img src="/images/product-ui/ui-care-management.png" alt="Guardian Care Management UI" className="w-full h-auto object-cover max-h-[600px]" />
                </div>
              </div>
            )}

            {activeTab === 'referrals' && (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Referral Manager & Specialist Routing Workspace</h3>
                    <p className="text-xs text-[#706890]">Electronic referral tracking and PCP-specialist coordination within CIN networks.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">ui-referral-manager.png</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img src="/images/product-ui/ui-referral-manager.png" alt="Guardian Referral Manager UI" className="w-full h-auto object-cover max-h-[600px]" />
                </div>
              </div>
            )}

            {activeTab === 'telemedicine' && (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">1-Click Telemedicine Consult Workspace</h3>
                    <p className="text-xs text-[#706890]">Browser-based video consults with integrated patient clinical history access.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">ui-telemedicine.png</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img src="/images/product-ui/ui-telemedicine.png" alt="Guardian Telemedicine UI" className="w-full h-auto object-cover max-h-[600px]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. TOUR HIGHLIGHTS MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1.5 rounded-full">
              Platform Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Key Platform Modules Covered in Product Tours
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 featured across our software walkthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourHighlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f0f9ff] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#0284c7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#e0f2fe] text-[#0284c7]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0284c7] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e9e5f0] flex items-center justify-between text-xs text-[#706890]">
                    <span>Product Profile 6.0 Verified</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL CONTEXT */}
      <section className="py-20 sm:py-24 bg-[#f0f9ff] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Software Proof & Evaluation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Experiencing Guardian’s Connected User Interface
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare software must be intuitive, responsive, and tailored to clinician workflows. Evaluating how data moves from multi-source EMR integration to point-of-care care gap notifications requires clear visual evidence.
              </p>
              <p>
                Guardian Product Tours provide a guided walkthrough of authentic software screens—allowing healthcare leaders to inspect our longitudinal Patient Master Chart (PMC), executive population analytics, and care coordination tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Resources Navigation"
        kicker="Explore Resources Family"
        tagPrefix="RESOURCE"
        overviewLink="/resources"
        overviewText="View Resources Overview"
        actionText="View Resource"
      />

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e0f2fe] mb-6">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            <span>Schedule Live Product Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready for a Customized Live Product Demonstration?
          </h2>
          <p className="text-base sm:text-lg text-[#e0f2fe] max-w-2xl mx-auto mb-8">
            Schedule a personalized walkthrough tailored to your organization’s clinical, risk adjustment, and care management priorities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-bold text-sm shadow-xl shadow-[#0284c7]/30 transition-all flex items-center space-x-2 group"
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
