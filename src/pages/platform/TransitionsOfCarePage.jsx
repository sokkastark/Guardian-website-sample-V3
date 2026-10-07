import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Bell,
  AlertTriangle,
  FileText,
  MessageSquare,
  CalendarCheck,
  Zap,
  ArrowUpRight,
  Activity,
  Layers,
  Hospital
} from 'lucide-react';

export default function TransitionsOfCarePage() {
  const [activeTab, setActiveTab] = useState('adt');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Model: ADT Event Alert → Risk Evaluation → Discharge Retrieval → Outreach → Post-Discharge Follow-up
  const adtPipeline = [
    {
      step: '01',
      stage: 'ADT ALERT',
      title: 'Real-Time ADT Event Notification',
      icon: Bell,
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      summary: 'Receive instant notifications when an attributed patient is admitted, transferred, or discharged from an emergency department or hospital.',
      details: [
        'Real-time ADT feeds across regional hospitals & health systems',
        'National HIE network admission & discharge notification',
        'Immediate care manager dashboard alert notification'
      ],
      output: 'Instant Event Alert'
    },
    {
      step: '02',
      stage: 'RISK EVALUATION',
      title: 'Readmission & Avoidable ER Risk Scoring',
      icon: AlertTriangle,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Evaluate patient readmission risk and 30-day utilization history to prioritize post-discharge care coordination resources.',
      details: [
        'Readmission risk identification algorithm calculation',
        'Avoidable ER utilization pattern analysis',
        'Patient risk tier assignment prior to discharge'
      ],
      output: 'Prioritized Transition Risk Score'
    },
    {
      step: '03',
      stage: 'DISCHARGE RETRIEVAL',
      title: 'Automated Hospital Discharge Summary Retrieval',
      icon: FileText,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Automatically pull hospital discharge summaries, inpatient medications, and diagnostic reports via national HIE connections.',
      details: [
        'Automated discharge summary retrieval from hospital EHRs',
        'C-CDA document parsing and reconciliation into Patient 360',
        'Inpatient medication reconciliation flag generation'
      ],
      output: 'Retrieved Discharge Summary'
    },
    {
      step: '04',
      stage: 'OUTREACH',
      title: 'Conversational Patient Outreach',
      icon: MessageSquare,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Initiate 24-48 hour automated conversational outreach (SMS/voice) to verify discharge status, symptoms, and medication access.',
      details: [
        'Automated 24-48 hour post-discharge patient outreach',
        'Symptom checker & medication access verification',
        'Automated escalation to care coordinator for red-flag responses'
      ],
      output: '24-48 Hour Outreach Log'
    },
    {
      step: '05',
      stage: 'FOLLOW-UP',
      title: 'Post-Discharge PCP Appointment Scheduling',
      icon: CalendarCheck,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Schedule timely 7-day or 14-day post-discharge primary care follow-up visits and complete TCM billing documentation.',
      details: [
        '7-day / 14-day TCM appointment scheduling',
        'Hospitalist & PCP coordination task routing',
        'TCM performance analytics & readmission avoidance tracking'
      ],
      output: 'Completed Transition of Care Visit'
    }
  ];

  // Product Profile 6.0 Features (Page 6: ADT / Transitions of Care)
  const capabilities = [
    {
      title: 'Real-Time ADT Notifications',
      description: 'Instant notification stream for hospital admissions, emergency department visits, and facility discharge events.',
      category: 'Surveillance',
      icon: Bell
    },
    {
      title: 'Automated Discharge Summary Retrieval',
      description: 'National and regional HIE connectivity enabling automated retrieval and parsing of inpatient discharge summaries.',
      category: 'Interoperability',
      icon: FileText
    },
    {
      title: 'Conversational Patient Outreach',
      description: 'Automated 24-hour conversational outreach verifying patient status, medication access, and post-discharge needs.',
      category: 'Patient Outreach',
      icon: MessageSquare
    },
    {
      title: 'Readmission Risk Identification',
      description: 'Predictive readmission risk scoring identifying high-risk discharges requiring 7-day follow-up encounters.',
      category: 'Predictive Analytics',
      icon: AlertTriangle
    },
    {
      title: 'Avoidable ER Identification',
      description: 'Surveillance of frequent emergency department utilization to initiate proactive care management intervention.',
      category: 'Utilization Analytics',
      icon: Activity
    },
    {
      title: 'TOC Performance Analytics',
      description: 'Executive analytics measuring 30-day readmission rates, 7/14-day follow-up compliance, and TCM billing metrics.',
      category: 'Performance',
      icon: Zap
    }
  ];

  const siblings = [
    { label: 'Care Management', path: '/platform/care-management', desc: 'Centralized workspace to enroll, assess, and coordinate chronic care.' },
    { label: 'Referral Management', path: '/platform/referral-management', desc: 'Closed-loop referral routing and specialist coordination.' },
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
            <span className="text-white font-medium">Transitions of Care / ADT</span>
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
                <span>Real-Time ADT Alerts & TCM Workflows</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Real-Time ADT Alerts & Transition Management
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian delivers instant admit, discharge, and transfer alerts combined with automated discharge summary retrieval and 24-hour conversational outreach to prevent hospital readmissions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request an ADT / TOC Demo</span>
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
                  <span className="text-[11px] text-purple-300 font-mono">live.itsguardian.com/transitions-of-care</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    ADT Feed
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-adt-notifications.png" 
                    alt="Guardian ADT Notification Center" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL STORY: ADT Event Alert → Risk Evaluation → Discharge Retrieval → Outreach → Post-Discharge Follow-up */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-[#7b3fc7] text-xs font-bold uppercase tracking-wider mb-4">
            <Bell className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Transition of Care Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            ADT Alert → Risk → Discharge Retrieval → Outreach → Follow-up
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian automates transition of care management from hospital event to PCP follow-up.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {adtPipeline.map((item, idx) => {
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
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${adtPipeline[activeStepIndex].badgeColor}`}>
                    Phase {adtPipeline[activeStepIndex].step}: {adtPipeline[activeStepIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {adtPipeline[activeStepIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {adtPipeline[activeStepIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {adtPipeline[activeStepIndex].details.map((d, dIdx) => (
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
                  {React.createElement(adtPipeline[activeStepIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">TOC Pipeline Output</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{adtPipeline[activeStepIndex].output}</p>
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
              Real-Time ADT Notifications & Transition Views
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Explore live interfaces for ADT event monitoring and post-discharge coordination.
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab('adt')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'adt'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                ADT Notifications Console
              </button>
              <button
                onClick={() => setActiveTab('toc')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'toc'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Transitions of Care Manager
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl bg-[#1c1636] border border-[#35295c] p-3 sm:p-4 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-3">
              <span className="text-[11px] text-purple-300 font-mono">
                {activeTab === 'adt' ? 'live.itsguardian.com/adt-notifications' : 'live.itsguardian.com/transitions-of-care'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                {activeTab === 'adt' ? 'ADT Feed' : 'TOC Module'}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'adt' ? (
                <motion.div
                  key="adt"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-adt-notifications.png"
                    alt="Guardian ADT Notifications"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="toc"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-transitions-of-care.png"
                    alt="Guardian Transitions of Care Manager"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              )}
            </AnimatePresence>
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
            Transitions of Care & ADT Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved features sourced directly from Product Profile 6.0 (Page 6: ADT / Transitions of Care).
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8e8c99]">
                Platform Architecture
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636]">
                Related Platform Modules
              </h3>
            </div>
            <Link
              to="/platform"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#7b3fc7] hover:underline self-start sm:self-auto"
            >
              <span>View Platform Overview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siblings.map((sibling) => (
              <Link
                key={sibling.path}
                to={sibling.path}
                className="group p-5 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#7b3fc7] font-semibold">
                      Platform Module
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8e8c99] group-hover:text-[#7b3fc7] transition-colors" />
                  </div>
                  <p className="text-base font-bold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors mb-2">
                    {sibling.label}
                  </p>
                  <p className="text-xs text-[#58536e] leading-relaxed">
                    {sibling.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              Prevent Readmissions with Real-Time ADT Intelligence
            </h2>
            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect hospital event feeds, retrieve discharge summaries automatically, and automate 24-hour outreach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all"
              >
                <span>Schedule an ADT / TOC Demo</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
