import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  User,
  Database,
  FileText,
  Activity,
  Zap,
  ArrowUpRight,
  Layers,
  HeartPulse,
  Stethoscope,
  Shield,
  Search,
  Clock,
  ClipboardList
} from 'lucide-react';

export default function PatientIntelligencePage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Model: DATA SOURCES → PATIENT RECORD → CLINICAL CONTEXT → CARE ACTION
  const intelligencePipeline = [
    {
      step: '01',
      stage: 'DATA SOURCES',
      title: 'Multi-Source Clinical & Claims Aggregation',
      icon: Database,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Stream clinical EHR records, claims histories, ADT feeds, lab results, and HIE documents into a normalized repository.',
      details: [
        'EHR/EMR integration & CCD/C-CDA document exchange',
        'Claims & CCLF/BCDA data integration',
        'National and regional HIE cross-organization patient lookup'
      ],
      output: 'Normalized Multi-Source Data Stream'
    },
    {
      step: '02',
      stage: 'PATIENT RECORD',
      title: 'Unified Patient Master Chart (Patient 360)',
      icon: User,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Deduplicate patient identities via Master Patient Indexing (MPI) to assemble a single longitudinal patient chart.',
      details: [
        'Master Patient Index (MPI) matching & deduplication',
        '13 core clinical domain aggregation in one view',
        'Real-time demographic and coverage updates'
      ],
      output: 'Unified Master Patient Record'
    },
    {
      step: '03',
      stage: 'CLINICAL CONTEXT',
      title: 'Longitudinal Timeline & Risk Context',
      icon: Clock,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Surface longitudinal event histories, active problem lists, biomarker trends, and risk scores for comprehensive clinical context.',
      details: [
        'Chronological longitudinal event timeline view',
        'Active problem lists, medications, allergies, and vitals',
        'Integrated CMS HCC RAF scores and care gap alerts'
      ],
      output: '360-Degree Clinical Context'
    },
    {
      step: '04',
      stage: 'CARE ACTION',
      title: 'Point-of-Care Workflow Execution',
      icon: Zap,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Empower clinicians and care teams to initiate care plans, document encounters, close care gaps, and send secure messages.',
      details: [
        'Care plan builder & goal/intervention tracking',
        'Direct Secure Messaging (DSM) & referral creation',
        'Annual Wellness Visit (AWV) & HRA documentation'
      ],
      output: 'Coordinated Clinical Action'
    }
  ];

  // Product Profile 6.0 Features (Page 5: Patient Profile)
  const capabilities = [
    {
      title: 'Patient Master Chart (Patient 360)',
      description: 'Dynamic longitudinal record integrating clinical, claims, behavioral, and care coordination data into a single master view.',
      category: 'Longitudinal View',
      icon: User
    },
    {
      title: 'Claims & Utilization Profile',
      description: 'Historical claims view presenting cost patterns, service utilization, PMPM metrics, and prior auth history.',
      category: 'Financial Context',
      icon: FileText
    },
    {
      title: 'Longitudinal Timeline View',
      description: 'Chronological event stream capturing encounters, hospitalizations, lab results, and care team interactions.',
      category: 'Clinical History',
      icon: Clock
    },
    {
      title: '13 Core Clinical Domains',
      description: 'Demographics, Vitals, Problems, Medications, Allergies, Labs, Encounters, ADT, Documents, Scales, Family History, Immunizations, and Providers.',
      category: 'Data Breadth',
      icon: Layers
    },
    {
      title: 'Direct Secure Messaging (DSM) & HIE Search',
      description: 'Native DSM messaging and national HIE document lookup for cross-organization record aggregation.',
      category: 'Interoperability',
      icon: Search
    },
    {
      title: 'Care Plan & Care Gap Integration',
      description: 'Real-time visibility into open quality gaps, suspected MRA conditions, and active care management goals.',
      category: 'Workflow Integration',
      icon: ClipboardList
    }
  ];

  const siblings = [
    { label: 'Patient 360 Deep Dive', path: '/platform/patient-intelligence/patient-360', desc: 'Inspect the 13 core clinical domains of the Patient Master Chart.' },
    { label: 'Risk Stratification', path: '/platform/risk-stratification', desc: 'Categorize populations into actionable risk tiers and intervention lists.' },
    { label: 'Care Management', path: '/platform/care-management', desc: 'Centralized workspace to enroll, assess, and coordinate chronic care.' },
    { label: 'Analytics & Reporting', path: '/platform/analytics', desc: 'Executive cockpits with real-time KPI surveillance.' }
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
            <span className="text-white font-medium">Patient Intelligence</span>
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
                <span>Longitudinal Patient Intelligence & Patient 360</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Unified Longitudinal Record & 360-Degree View
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian unifies fragmented clinical, claims, and care coordination data into a single Patient Master Chart—giving care teams complete context across 13 core clinical domains at point of care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/20 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b3fc7]" />
                </Link>

                <Link
                  to="/platform/patient-intelligence/patient-360"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 shrink-0"
                >
                  <span>Explore Patient 360</span>
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
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-purple-300 font-mono ml-2">live.itsguardian.com/patient-360</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    Patient Master Chart
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-patient-360.png" 
                    alt="Guardian Patient 360 Master Chart" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL STORY: DATA SOURCES → PATIENT RECORD → CLINICAL CONTEXT → CARE ACTION */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-[#7b3fc7] text-xs font-bold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Patient Intelligence Flow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            DATA SOURCES → PATIENT RECORD → CLINICAL CONTEXT → CARE ACTION
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian aggregates multi-source healthcare data into a single point-of-care patient intelligence record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
          {intelligencePipeline.map((item, idx) => {
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
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${intelligencePipeline[activeStepIndex].badgeColor}`}>
                    Phase {intelligencePipeline[activeStepIndex].step}: {intelligencePipeline[activeStepIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {intelligencePipeline[activeStepIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {intelligencePipeline[activeStepIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {intelligencePipeline[activeStepIndex].details.map((d, dIdx) => (
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
                  {React.createElement(intelligencePipeline[activeStepIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">Patient Intelligence Milestone</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{intelligencePipeline[activeStepIndex].output}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-28 bg-white border-y border-[#e1e1e5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
              Patient Profile Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              Patient Master Chart Features
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Approved capabilities sourced directly from Product Profile 6.0 (Page 5: Patient Profile).
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
              Ready to Give Your Care Teams 360-Degree Patient Context?
            </h2>
            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Unify clinical data, claims histories, and care coordination into a single Master Patient Chart.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all"
              >
                <span>Schedule a Patient 360 Demo</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
