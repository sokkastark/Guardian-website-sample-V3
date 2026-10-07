import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Activity,
  Users,
  TrendingUp,
  Target,
  Zap,
  ArrowUpRight,
  BarChart3,
  HeartPulse,
  Stethoscope,
  Shield,
  Layers,
  Search,
  Filter,
  Sliders
} from 'lucide-react';

export default function PopulationHealthPage() {
  const [activeTab, setActiveTab] = useState('cardiometabolic');
  const [activeStep, setActiveStep] = useState(0);

  // Workflow Visual Story: Population -> Segmentation -> Risk -> Opportunity -> Action
  const storySteps = [
    {
      id: 'population',
      number: '01',
      title: 'Population Aggregation',
      subtitle: 'Multi-Source Data Ingestion',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Ingest and harmonize multi-practice, cross-payer EHR feeds, claims data, lab results, and encounter records into a single population record.',
      details: [
        'Multi-practice EHR connectivity & cross-payer data normalization',
        'Master Patient Indexing (MPI) to deduplicate records across systems',
        'Continuous clinical and administrative data synchronization'
      ]
    },
    {
      id: 'segmentation',
      number: '02',
      title: 'Cohort Segmentation',
      subtitle: 'Targeted Cohort Identification',
      icon: Filter,
      color: 'from-indigo-500 to-purple-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Segment populations into precise clinical and operational cohorts based on disease states, utilization patterns, and demographic parameters.',
      details: [
        'Cardiometabolic & chronic disease cohort classification',
        'Multi-condition filtering (CHF, BP, Diabetes, COPD, Obesity)',
        'Customizable cohort builder for specific population initiatives'
      ]
    },
    {
      id: 'risk',
      number: '03',
      title: 'Risk Stratification',
      subtitle: 'Multidimensional Scoring',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      badgeBg: 'bg-pink-50 text-pink-700 border-pink-200',
      summary: 'Evaluate risk trajectories across clinical, utilization, and biomarker dimensions to detect rising-risk patients before acute events occur.',
      details: [
        'Longitudinal risk score calculation combining clinical & claims data',
        'Biomarker risk tracking (HbA1c, blood pressure, lipid profiles)',
        'Predictive event risk modeling for emergency and readmission risk'
      ]
    },
    {
      id: 'opportunity',
      number: '04',
      title: 'Opportunity Discovery',
      subtitle: 'Care & Lab Gap Identification',
      icon: Target,
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Automatically surface actionable care opportunities, lab gaps, and candidates for specialized Remote Patient Monitoring (RPM) programs.',
      details: [
        'Proactive lab gap detection and automated test recommendations',
        'Quality measure gap surveillance (HEDIS, MIPS, MSSP)',
        'RPM candidate identification for chronic disease management'
      ]
    },
    {
      id: 'action',
      number: '05',
      title: 'Coordinated Action',
      subtitle: 'Targeted Outreach & Workflows',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Transform population insights into targeted outreach campaigns, standardized care plans, and point-of-care clinician task routing.',
      details: [
        'Targeted campaign engine for tailored patient outreach lists',
        'Care plan builder integration with goal & intervention tracking',
        'Direct task assignment to care management & clinical teams'
      ]
    }
  ];

  // Approved Key Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Cardiometabolic Care (CMC)',
      description: 'Biomarker tracking, cardiovascular risk insights, and longitudinal risk profiling tailored for cardiometabolic disease states.',
      category: 'Clinical Intelligence',
      icon: HeartPulse
    },
    {
      title: 'Remote Patient Monitoring (RPM)',
      description: 'Integrated device & clinical monitoring for congestive heart failure (CHF), elevated blood pressure, diabetes, COPD, and obesity.',
      category: 'Chronic Care',
      icon: Activity
    },
    {
      title: 'Proactive Lab Gap Closure',
      description: 'Surveillance of missing or overdue diagnostic testing with intelligent, point-of-care clinical lab recommendations.',
      category: 'Quality & Diagnostics',
      icon: Stethoscope
    },
    {
      title: 'Longitudinal Population Risk Stratification',
      description: 'Multi-dimensional risk scoring categorizing patients across risk tiers using combined clinical, claims, and encounter data.',
      category: 'Risk Management',
      icon: BarChart3
    },
    {
      title: 'Targeted Campaign Management',
      description: 'Cohort segmentation engine enabling care teams to create specific patient outreach lists, log interventions, and track progress.',
      category: 'Patient Engagement',
      icon: Target
    },
    {
      title: 'Multi-Practice & Cross-Payer Overview',
      description: 'Unified data ingestion delivering a single, normalized population picture across disparate EMRs and payer contracts.',
      category: 'Interoperability',
      icon: Layers
    }
  ];

  // Canonical Sibling Navigation
  const siblings = [
    { label: 'Risk Stratification', path: '/platform/risk-stratification', desc: 'Categorize populations into actionable risk tiers and intervention lists.' },
    { label: 'Care Management', path: '/platform/care-management', desc: 'Centralized workspace to enroll, assess, and coordinate chronic care.' },
    { label: 'Analytics & Reporting', path: '/platform/analytics', desc: 'Executive intelligence cockpits with real-time KPI monitoring.' },
    { label: 'Patient Intelligence', path: '/platform/patient-intelligence', desc: 'Unified longitudinal patient record and 360-degree clinical view.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b3fc7]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7a57]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Nav */}
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
            <span className="text-white font-medium">Population Health</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Left Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>Cardiometabolic & Population Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                See the Bigger Picture Across Your Population
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian connects healthcare data across patients, practices, and payers to help organizations understand population risk, identify high-impact care opportunities, prioritize interventions, and support data-driven care decisions.
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
                  to="/platform"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 shrink-0"
                >
                  <span>Platform Overview</span>
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Visual Showcase */}
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
                    <span className="text-[11px] text-purple-300 font-mono ml-2">live.itsguardian.com</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    Population Overview
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-pop-health-analytics.png" 
                    alt="Guardian Population Health Analytics Dashboard" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL STORY PIPELINE SECTION */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-[#7b3fc7] text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Population Health Workflow Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            Population → Segmentation → Risk → Opportunity → Action
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian connects fragmented health data into an actionable population workflow for clinical and care management teams.
          </p>
        </div>

        {/* Step Flow Buttons (Desktop & Mobile Horizontal Bar) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {storySteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-white border-[#7b3fc7] shadow-lg shadow-[#7b3fc7]/10 ring-2 ring-[#7b3fc7]/20 scale-[1.02]'
                    : 'bg-white/60 border-[#e1e1e5] hover:bg-white hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${step.badgeBg}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#7b3fc7]' : 'text-[#8e8c99]'}`} />
                </div>
                <p className={`text-xs font-bold leading-snug ${isSelected ? 'text-[#1c1636]' : 'text-[#58536e]'}`}>
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-[#e1e1e5] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${storySteps[activeStep].badgeBg}`}>
                    Step {storySteps[activeStep].number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7]">
                    {storySteps[activeStep].subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {storySteps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {storySteps[activeStep].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {storySteps[activeStep].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#35304c] font-medium leading-snug">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Graphic Visual Box */}
              <div className="lg:col-span-5 bg-[#faf9fc] rounded-2xl border border-[#e1e1e5] p-6 text-center space-y-4">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${storySteps[activeStep].color} text-white flex items-center justify-center shadow-md`}>
                  {React.createElement(storySteps[activeStep].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">Guardian Workflow Pipeline</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{storySteps[activeStep].title}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#e1e1e5] text-left text-xs text-[#58536e] space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono text-[#7b3fc7]">
                    <span>STATUS</span>
                    <span>ACTIVE PIPELINE</span>
                  </div>
                  <p className="font-semibold text-[#1c1636]">{storySteps[activeStep].subtitle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. PRODUCT PROOF SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#e1e1e5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
              Product Proof
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              Real Product Capabilities in Action
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Explore live software UI interfaces designed to streamline population management and cardiometabolic care.
            </p>

            {/* Interface Switcher Tabs */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab('cardiometabolic')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'cardiometabolic'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Cardiometabolic Care (CMC)
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'analytics'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Population Analytics Overview
              </button>
            </div>
          </div>

          {/* Interface Visual */}
          <div className="relative rounded-2xl bg-[#1c1636] border border-[#35295c] p-3 sm:p-4 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-[11px] text-purple-300 font-mono ml-2">
                  {activeTab === 'cardiometabolic' ? 'live.itsguardian.com/platform/cardiometabolic-care' : 'live.itsguardian.com/platform/population-analytics'}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                {activeTab === 'cardiometabolic' ? 'CMC Module' : 'Analytics Engine'}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'cardiometabolic' ? (
                <motion.div
                  key="cmc"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-cardiometabolic-care.png"
                    alt="Guardian Cardiometabolic Care Dashboard"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-pop-health-analytics.png"
                    alt="Guardian Population Analytics Cockpit"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. KEY CAPABILITIES GRID */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
            Platform Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
            Key Population Health Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved capabilities built directly into the Guardian enterprise platform.
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
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e1e1e5] hover:border-[#7b3fc7]/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
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

      {/* 5. EDITORIAL HEALTHCARE CONTEXT */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 block">
              People + Technology Model
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
              Designed to Empower Care Management Teams
            </h3>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal mb-8">
              Guardian combines real-time data ingestion with intuitive workflow automation, enabling ACOs, health plans, and CINs to streamline chronic disease monitoring, close care gaps, and focus clinical effort where it makes the greatest impact.
            </p>
            <Link
              to="/company/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] transition-all duration-200"
            >
              <span>Speak with a Guardian Specialist</span>
              <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 sm:py-20 border-t border-[#e1e1e5]/80 bg-white">
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

      {/* 7. CLOSING CTA */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-[#7b3fc7]/20 border border-white/10"
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#ff7a57]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#7b3fc7]/40 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>Partner With Guardian</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Ready to Elevate Your Population Health Strategy?
            </h2>

            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
              Connect population data across your network, identify high-impact opportunities, and equip your clinical teams to take proactive action.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Schedule a Demonstration</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>

              <Link
                to="/platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Explore Platform Overview</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
