import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  PieChart,
  Sliders,
  Database,
  Lightbulb,
  CheckSquare,
  Zap,
  LineChart,
  ArrowUpRight,
  Layers,
  FileText,
  DollarSign,
  Users
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('executive');
  const [activeCycleIndex, setActiveCycleIndex] = useState(0);

  // Visual Story: DATA → INSIGHT → DECISION → ACTION → MEASUREMENT
  const intelligenceCycle = [
    {
      id: 'data',
      step: '01',
      stage: 'DATA',
      title: 'Multi-Source Data Aggregation',
      icon: Database,
      badgeColor: 'bg-[#7b3fc7]/15 text-[#7b3fc7] border-[#7b3fc7]/30',
      summary: 'Ingest and normalize disparate EHR feeds, claims data, financial transactions, and utilization records into an integrated data model.',
      highlights: [
        'Multi-practice EHR and cross-payer claims ingestion',
        'Data normalization and Master Patient Indexing (MPI)',
        'Continuous synchronization across clinical and financial domains'
      ],
      output: 'Unified Analytics Foundation'
    },
    {
      id: 'insight',
      step: '02',
      stage: 'INSIGHT',
      title: 'Automated Insight Discovery',
      icon: Lightbulb,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Surveil clinical, financial, and operational indicators to detect cost drivers, risk migration, and quality measure gaps.',
      highlights: [
        'Real-time KPI surveillance across clinical & financial metrics',
        'PMPM / PMPY trend detection and risk score variation',
        'Predictive risk modeling for high-cost event forecasting'
      ],
      output: 'Real-Time KPI Intelligence'
    },
    {
      id: 'decision',
      step: '03',
      stage: 'DECISION',
      title: 'Executive & Clinical Decision Support',
      icon: CheckSquare,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Empower executive leaders and medical directors with role-based cockpits, provider scorecards, and drill-through root cause analysis.',
      highlights: [
        'Executive dashboards for financial and quality performance',
        'Provider & practice performance benchmarking',
        'Drill-down and drill-through capability for granular investigation'
      ],
      output: 'Actionable Executive Clarity'
    },
    {
      id: 'action',
      step: '04',
      stage: 'ACTION',
      title: 'Workflow Action Integration',
      icon: Zap,
      badgeColor: 'bg-[#ff7a57]/15 text-[#ff7a57] border-[#ff7a57]/30',
      summary: 'Translate analytical insights directly into operational workflows, care management tasks, gap closures, and outreach protocols.',
      highlights: [
        'Direct task routing to care managers and clinical teams',
        'Automated care gap notification at point of care',
        'Closed-loop referral and care plan assignment'
      ],
      output: 'Workflow-Embedded Execution'
    },
    {
      id: 'measurement',
      step: '05',
      stage: 'MEASUREMENT',
      title: 'Continuous Outcome Measurement',
      icon: LineChart,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Monitor financial savings, medical loss ratios, quality performance scores, and operational efficiency over time.',
      highlights: [
        'PMPM cost reduction tracking against risk-bearing contracts',
        'MIPS, HEDIS, and MSSP quality measure scorecards',
        'Scheduled report distribution and custom export capabilities'
      ],
      output: 'Measurable Value-Based ROI'
    }
  ];

  // Approved Key Capabilities from Product Profile 6.0 (Page 5: Analytics & Reporting)
  const capabilities = [
    {
      title: 'Executive Dashboards & KPI Monitoring',
      description: 'Comprehensive clinical, operational, financial, and quality performance cockpits with real-time KPI monitoring and drill-down views.',
      category: 'Executive Intelligence',
      icon: BarChart3
    },
    {
      title: 'PMPM / PMPY Financial & Cost Analytics',
      description: 'Track Per Member Per Month (PMPM) and Per Member Per Year (PMPY) expenditure trends across risk contracts and patient cohorts.',
      category: 'Financial Analytics',
      icon: DollarSign
    },
    {
      title: 'Provider & Practice Performance Analytics',
      description: 'Comparative scorecards evaluating provider performance across quality measures, utilization, RAF accuracy, and cost metrics.',
      category: 'Performance Management',
      icon: Users
    },
    {
      title: 'Utilization & Cost Pattern Analytics',
      description: 'Identify high-cost utilization patterns including avoidable ER visits, inpatient admissions, and post-acute readmissions.',
      category: 'Utilization Analytics',
      icon: TrendingUp
    },
    {
      title: 'Quality Measure & Star Ratings Analytics',
      description: 'Monitor HEDIS, MIPS, and MSSP quality performance, gap closure rates, and projected CMS Star Ratings in real time.',
      category: 'Quality Analytics',
      icon: PieChart
    },
    {
      title: 'Custom Reporting & Scheduled Distribution',
      description: 'Ad-hoc query engine, custom report builder, drill-through analysis, and automated scheduled report distribution.',
      category: 'Reporting & Data Export',
      icon: FileText
    }
  ];

  // Canonical Sibling Navigation
  const siblings = [
    { label: 'Population Health', path: '/platform/population-health', desc: 'Connect population data to identify risk, care gaps, and cardiometabolic insights.' },
    { label: 'Risk Stratification', path: '/platform/risk-stratification', desc: 'Categorize populations into actionable risk tiers and intervention lists.' },
    { label: 'Care Management', path: '/platform/care-management', desc: 'Centralized workspace to enroll, assess, and coordinate chronic care.' },
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
            <span className="text-white font-medium">Analytics & Intelligence</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>Executive Intelligence & Performance Cockpits</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Turn Healthcare Data Into Decisive Action
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian transforms multi-source healthcare data into clinical, financial, and operational intelligence—giving executive leaders and medical directors real-time KPI visibility, PMPM cost analytics, and actionable decision support.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/20 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Schedule a Demo</span>
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
                    Executive Intelligence
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-dashboard-main.png" 
                    alt="Guardian Executive Intelligence Dashboard" 
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

      {/* 2. VISUAL STORY: DATA → INSIGHT → DECISION → ACTION → MEASUREMENT */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-[#7b3fc7] text-xs font-bold uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>The Intelligence Cycle</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            DATA → INSIGHT → DECISION → ACTION → MEASUREMENT
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian bridges raw clinical and claims records with executive decision-making and measurable healthcare outcomes.
          </p>
        </div>

        {/* Intelligence Cycle Stage Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {intelligenceCycle.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeCycleIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCycleIndex(idx)}
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

        {/* Selected Stage Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCycleIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-[#e1e1e5] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${intelligenceCycle[activeCycleIndex].badgeColor}`}>
                    Phase {intelligenceCycle[activeCycleIndex].step}: {intelligenceCycle[activeCycleIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {intelligenceCycle[activeCycleIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {intelligenceCycle[activeCycleIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {intelligenceCycle[activeCycleIndex].highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#35304c] font-medium leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Graphic Output Badge */}
              <div className="lg:col-span-5 bg-[#faf9fc] rounded-2xl border border-[#e1e1e5] p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#1c1636] to-[#7b3fc7] text-white flex items-center justify-center shadow-md">
                  {React.createElement(intelligenceCycle[activeCycleIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">Intelligence Stage Output</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{intelligenceCycle[activeCycleIndex].output}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#e1e1e5] text-left text-xs text-[#58536e] space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono text-[#7b3fc7]">
                    <span>STATUS</span>
                    <span>ACTIVE SURVEILLANCE</span>
                  </div>
                  <p className="font-semibold text-[#1c1636]">{intelligenceCycle[activeCycleIndex].title}</p>
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
              Executive Cockpits & Performance Dashboards
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Explore live software UI interfaces built for real-time KPI monitoring, cost tracking, and drill-down analysis.
            </p>

            {/* Interface Switcher Tabs */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab('executive')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'executive'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Executive Performance Cockpit
              </button>
              <button
                onClick={() => setActiveTab('population')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'population'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Population & Cost Analytics
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
                  {activeTab === 'executive' ? 'live.itsguardian.com/analytics/executive-dashboard' : 'live.itsguardian.com/analytics/population-cost'}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                {activeTab === 'executive' ? 'Executive View' : 'Cost & PMPM Module'}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'executive' ? (
                <motion.div
                  key="executive"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-dashboard-main.png"
                    alt="Guardian Executive Performance Cockpit"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="population"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-pop-health-analytics.png"
                    alt="Guardian Population & Financial Analytics Dashboard"
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

      {/* 4. KEY CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
            Analytics Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
            Key Analytics & Reporting Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved features directly supported by Product Profile 6.0 (Page 5: Analytics & Reporting).
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
              Connecting Intelligence directly to Clinical Workflows
            </h3>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal mb-8">
              Data alone does not produce outcomes. Guardian bridges executive intelligence with care management workflows—ensuring that PMPM cost insights, risk score variations, and quality gap findings drive direct point-of-care actions.
            </p>
            <Link
              to="/company/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] transition-all duration-200"
            >
              <span>Speak with an Analytics Specialist</span>
              <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules modules={siblings} />

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
              Ready to Turn Healthcare Data Into Decisive Action?
            </h2>

            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
              Equip your executive leadership and care teams with real-time KPI monitoring, PMPM cost analytics, and actionable decision support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Schedule an Analytics Demo</span>
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
