import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  HeartPulse,
  UserPlus,
  ClipboardCheck,
  FileCheck,
  Users,
  Zap,
  ArrowUpRight,
  Layers,
  Activity,
  Sliders
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function CareManagementPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Model: Identification → Enrollment → Assessment → Personal Care Plan → Care Coordination
  const cmPipeline = [
    {
      step: '01',
      stage: 'IDENTIFICATION',
      title: 'Risk-Based Patient Identification',
      icon: UserPlus,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Automatically flag high-risk and rising-risk patients across claims, clinical records, and ADT hospital alerts.',
      details: [
        'Risk-based patient prioritization & cohort identification',
        'Real-time ADT admission & discharge alert triggers',
        'Cardiometabolic & chronic condition cohort surveillance'
      ],
      output: 'Prioritized Patient Enrollment List'
    },
    {
      step: '02',
      stage: 'ENROLLMENT',
      title: 'Program Enrollment & Program Routing',
      icon: HeartPulse,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Enroll qualified patients into specialized programs including CCM, TCM, RPM, and Principal Care Management (PCM).',
      details: [
        'CCM (Chronic Care Management) program enrollment',
        'TCM (Transitions of Care Management) post-discharge routing',
        'RPM (Remote Patient Monitoring) device & clinical assignment'
      ],
      output: 'Enrolled Program Roster'
    },
    {
      step: '03',
      stage: 'ASSESSMENT',
      title: 'Comprehensive Patient Assessments',
      icon: ClipboardCheck,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Administer standardized clinical assessments using Guardian library of 150+ validated clinical scales and surveys.',
      details: [
        '150+ standardized clinical assessment scales (PHQ-9, GAD-7, ADL)',
        'Custom risk assessment forms & electronic questionnaires',
        'Automated assessment scoring & risk baseline updates'
      ],
      output: 'Completed Baseline Clinical Profile'
    },
    {
      step: '04',
      stage: 'CARE PLAN',
      title: 'Personalized & AI-Assisted Care Planning',
      icon: FileCheck,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Build tailored care plans with measurable clinical goals, patient barriers, interventions, and care team task assignments.',
      details: [
        'Interactive Care Plan Builder with goal & intervention tracking',
        'AI-assisted care plan recommendations based on assessment outputs',
        'Medication reconciliation & care barrier identification'
      ],
      output: 'Active Personalized Care Plan'
    },
    {
      step: '05',
      stage: 'COORDINATION',
      title: 'Multi-Disciplinary Care Coordination',
      icon: Users,
      badgeColor: 'bg-[#7b3fc7]/15 text-[#7b3fc7] border-[#7b3fc7]/30',
      summary: 'Coordinate patient care across PCPs, specialists, care managers, and community resources with closed-loop tracking.',
      details: [
        'Care Manager dashboards with real-time notification alerts',
        'Direct Secure Messaging (DSM) & specialist referral tracking',
        'Patient outreach & longitudinal outcome measurement'
      ],
      output: 'Coordinated Care & Longitudinal Tracking'
    }
  ];

  // Product Profile 6.0 Features (Page 5: Care Management)
  const capabilities = [
    {
      title: 'Patient Identification & Enrollment',
      description: 'Centralized workspace to identify, stratify, and enroll patients into targeted care management initiatives.',
      category: 'Enrollment',
      icon: UserPlus
    },
    {
      title: 'Personalized Care Plan Builder',
      description: 'Structured care plan creation supporting individualized goals, interventions, care team assignments, and barrier tracking.',
      category: 'Care Planning',
      icon: FileCheck
    },
    {
      title: 'CCM, TCM, RPM & PCM Program Support',
      description: 'Native support for Chronic Care Management, Transitional Care, Remote Patient Monitoring, and Principal Care Management.',
      category: 'Clinical Programs',
      icon: HeartPulse
    },
    {
      title: '150+ Standardized Assessment Scales',
      description: 'Extensive assessment library including depression screenings, cognitive evaluations, fall risk scales, and custom forms.',
      category: 'Assessments',
      icon: ClipboardCheck
    },
    {
      title: 'Goal & Intervention Tracking',
      description: 'Continuous tracking of patient clinical goals, care interventions, status updates, and care manager task completion.',
      category: 'Workflow',
      icon: Zap
    },
    {
      title: 'Care Manager Dashboards & Alerts',
      description: 'Role-based dashboards providing care managers with real-time task queues, patient alerts, and outreach logs.',
      category: 'Management Cockpit',
      icon: Activity
    }
  ];

  const siblings = [
    { label: 'Transitions of Care / ADT', path: '/platform/transitions-of-care-adt', desc: 'Real-time hospital admit/discharge alerts & post-discharge follow-up.' },
    { label: 'Quality / Care Gaps', path: '/platform/quality-care-gaps', desc: 'Monitor HEDIS, MIPS, and Star Ratings performance.' },
    { label: 'Risk Stratification', path: '/platform/risk-stratification', desc: 'Categorize populations into actionable risk tiers.' },
    { label: 'Patient Intelligence', path: '/platform/patient-intelligence', desc: 'Unified longitudinal patient record and 360-degree clinical view.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b3fc7]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7a57]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-purple-200/70 mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <span className="text-white font-medium">Care Management</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>CCM, TCM, RPM & PCM Programs</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Centralized Workspace for Coordinated Care
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian's Care Management suite empowers care teams to identify, enroll, assess, monitor, and coordinate care for high-risk chronic patients across CCM, TCM, RPM, and PCM programs.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request a Care Management Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b3fc7]" />
                </Link>

                <Link
                  to="/platform"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 shrink-0"
                >
                  <span>Platform Overview</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl bg-[#1a1233] border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-2.5 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-2">
                  <span className="text-[11px] text-purple-300 font-mono">live.itsguardian.com/care-management</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    Care Management Suite
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-care-management.png" 
                    alt="Guardian Care Management Dashboard" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
                <p className="text-xs text-purple-200/70 text-center mt-2.5 leading-relaxed italic">
                  *Illustrative sample demonstration data. Patient records, metrics, and outcomes are for demonstration purposes only.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL STORY: Identification → Enrollment → Assessment → Personal Care Plan → Care Coordination */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-[#7b3fc7] text-xs font-bold uppercase tracking-wider mb-4">
            <HeartPulse className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Care Coordination Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            Identification → Enrollment → Assessment → Care Plan → Coordination
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian connects patient identification with chronic care plan execution.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {cmPipeline.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={item.stage}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-white border-[#7b3fc7] shadow-lg shadow-[#7b3fc7]/10 ring-2 ring-[#7b3fc7]/20 scale-[1.02]'
                    : 'bg-white/60 border-[#e1e1e5] hover:bg-white hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${item.badgeColor}`}>
                    {item.stage}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#7b3fc7]' : 'text-[#8e8c99]'}`} />
                </div>
                <p className={`text-xs font-bold leading-snug ${isSelected ? 'text-[#1c1636]' : 'text-[#58536e]'}`}>
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-[#e1e1e5] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${cmPipeline[activeStepIndex].badgeColor}`}>
                    Phase {cmPipeline[activeStepIndex].step}: {cmPipeline[activeStepIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {cmPipeline[activeStepIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {cmPipeline[activeStepIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {cmPipeline[activeStepIndex].details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#35304c] font-medium leading-snug">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#faf9fc] rounded-2xl border border-[#e1e1e5] p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#1c1636] to-[#7b3fc7] text-white flex items-center justify-center shadow-md">
                  {React.createElement(cmPipeline[activeStepIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">Workflow Milestone Output</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{cmPipeline[activeStepIndex].output}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* PRODUCT PROOF SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#e1e1e5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
              Product Proof
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              Care Management & Care Plan Builder Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Inspect live software interfaces for care coordination and personalized care plan construction.
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'dashboard'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Care Manager Dashboard
              </button>
              <button
                onClick={() => setActiveTab('plan')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'plan'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Care Plan Builder
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl bg-[#1c1636] border border-[#35295c] p-3 sm:p-4 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-3">
              <span className="text-[11px] text-purple-300 font-mono">
                {activeTab === 'dashboard' ? 'live.itsguardian.com/care-management/dashboard' : 'live.itsguardian.com/care-management/plan-builder'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                {activeTab === 'dashboard' ? 'Dashboard View' : 'Plan Builder Engine'}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' ? (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-care-management.png"
                    alt="Guardian Care Management Dashboard"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="plan"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-care-plan-builder.png"
                    alt="Guardian Care Plan Builder"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-xs text-[#716b89] text-center mt-3 leading-relaxed italic">
              *Illustrative sample demonstration data. Patient records, metrics, and outcomes are for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
            Approved Features
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
            Care Management Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved features sourced directly from Product Profile 6.0 (Page 5: Care Management).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title + idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#7b3fc7] uppercase tracking-wider font-mono">
                      {cap.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1636] mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#58536e] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SIBLING NAV */}
      <RelatedPlatformModules modules={siblings} />

      {/* CLOSING CTA */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl border border-white/10"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Streamline Chronic Care Management Across Your Network
            </h2>
            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Empower care managers with personalized care planning, goal tracking, and automated patient outreach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all"
              >
                <span>Schedule a Care Management Demo</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
