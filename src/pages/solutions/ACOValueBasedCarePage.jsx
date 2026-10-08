import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Zap,
  DollarSign,
  ArrowUpRight,
  BarChart3,
  Shield,
  Layers,
  Activity,
  FileText
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function ACOValueBasedCarePage() {
  const [activeTab, setActiveTab] = useState('executive');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Approved Storytelling Structure:
  // Risk Benchmarking → Attribution Aggregation → Opportunity Identification → Clinical Workflow → Shared Savings
  const vbcPipeline = [
    {
      step: '01',
      stage: 'RISK BENCHMARKING',
      title: 'Population Risk & Baseline Benchmarking',
      icon: TrendingUp,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Ingest historical claims, CMS CCLF data, and baseline cost benchmarks to evaluate initial population risk profiles.',
      details: [
        'CMS CCLF & BCDA data integration and historical claims ingestion',
        'Baseline PMPM/PMPY cost trend evaluation',
        'Population risk tiering across attributed beneficiary panels'
      ],
      output: 'Baseline Population Risk Benchmark'
    },
    {
      step: '02',
      stage: 'ATTRIBUTION AGGREGATION',
      title: 'Beneficiary Attribution & Network Normalization',
      icon: Users,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Normalize multi-practice EHR records and attribution rosters across disparate provider practices and payer contracts.',
      details: [
        'Multi-practice EHR connectivity & cross-payer data normalization',
        'Master Patient Indexing (MPI) for deduplicated beneficiary charts',
        'Attributed panel management across primary care physicians'
      ],
      output: 'Normalized ACO Attribution Roster'
    },
    {
      step: '03',
      stage: 'OPPORTUNITY DISCOVERY',
      title: 'Care Gap & Risk Opportunity Identification',
      icon: Target,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Surveil open quality gaps, uncaptured chronic condition documentation, and high-utilization patterns across the network.',
      details: [
        'MSSP quality measure gap surveillance & screening alerts',
        'CMS HCC V24 & V28 suspecting logic for documentation gaps',
        'High-cost utilization pattern detection (ER visits, readmissions)'
      ],
      output: 'Prioritized Value-Based Opportunities'
    },
    {
      step: '04',
      stage: 'CLINICAL WORKFLOW',
      title: 'Point-of-Care Workflow & Care Management',
      icon: Zap,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Route actionable insights directly to clinical care managers, navigators, and point-of-care provider workflows.',
      details: [
        'Personal Care Plan Builder with goal & intervention tracking',
        'Real-time ADT notifications for hospital admits & discharges',
        'Point-of-care care gap alerts during patient encounters'
      ],
      output: 'Embedded Clinical Execution'
    },
    {
      step: '05',
      stage: 'SHARED SAVINGS',
      title: 'Contract Performance & Shared Savings Tracking',
      icon: DollarSign,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Monitor financial performance, quality compliance scores, and risk-bearing contract benchmarks over time.',
      details: [
        'Real-time PMPM/PMPY cost surveillance against risk contracts',
        'MSSP & ACO quality measure performance tracking',
        'Executive cockpits for medical loss ratio & savings tracking'
      ],
      output: 'Measured Contract Performance'
    }
  ];

  // Approved Features Sourced from Product Profile 6.0
  const capabilities = [
    {
      title: 'Population & Attribution Analytics',
      description: 'CMS CCLF & BCDA data integration delivering unified panel tracking and beneficiary attribution across multi-practice networks.',
      category: 'Attribution',
      icon: Users
    },
    {
      title: 'PMPM / PMPY Cost Tracking',
      description: 'Track Per Member Per Month (PMPM) and Per Member Per Year (PMPY) expenditure trends across risk-bearing ACO contracts.',
      category: 'Financial Analytics',
      icon: DollarSign
    },
    {
      title: 'MSSP Quality Measure Management',
      description: 'Continuous surveillance of MSSP quality measures, HEDIS gaps, and automated point-of-care care gap alerts.',
      category: 'Quality Performance',
      icon: Target
    },
    {
      title: 'Real-Time ADT Hospital Notifications',
      description: 'Instant event alerts for emergency department visits and inpatient admissions to support timely transition of care outreach.',
      category: 'Surveillance',
      icon: Activity
    },
    {
      title: 'Risk Adjustment & RAF Accuracy',
      description: 'Integrated dual-engine CMS HCC V24 & V28 suspecting logic to support clinical documentation accuracy and appropriate risk capture.',
      category: 'Risk Management',
      icon: Shield
    },
    {
      title: 'Interdisciplinary Care Coordination',
      description: 'Shared care management workspace for care managers, nurses, and navigators to build care plans and track interventions.',
      category: 'Care Execution',
      icon: Layers
    }
  ];

  const siblings = [
    { label: 'Health Plans / Payers', path: '/solutions/health-plans', desc: 'Star ratings surveillance, MLR optimization, and payer data integration.' },
    { label: 'CIN & Provider Organizations', path: '/solutions/cin-provider-organizations', desc: 'Closed-loop referral routing and CIN provider geo-mapping.' },
    { label: 'Care Management Teams', path: '/solutions/care-management-teams', desc: 'Personal care plan building, CCM/TCM/RPM programs, and care manager cockpits.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
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
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <span className="text-white font-medium">ACO & Value-Based Care</span>
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
                <span>Value-Based Care Solution</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Empower ACOs to Excel in Value-Based Contracts
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian combines technology-enabled population health, CMS CCLF data integration, risk adjustment, and care coordination to help Accountable Care Organizations manage risk, quality, and contract performance.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request an ACO Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b3fc7]" />
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 shrink-0"
                >
                  <span>Solutions Overview</span>
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
                    <span className="text-[11px] text-purple-300 font-mono ml-2">live.itsguardian.com/solutions/aco-vbc</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    ACO Intelligence Cockpit
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-dashboard-main.png" 
                    alt="Guardian ACO Value-Based Care Dashboard" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL STORY PIPELINE */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-[#7b3fc7] text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Value-Based Contract Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            Benchmarking → Attribution → Discovery → Workflow → Performance
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian connects population risk benchmarking with clinical care execution across ACO networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {vbcPipeline.map((item, idx) => {
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
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${vbcPipeline[activeStepIndex].badgeColor}`}>
                    Phase {vbcPipeline[activeStepIndex].step}: {vbcPipeline[activeStepIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {vbcPipeline[activeStepIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {vbcPipeline[activeStepIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {vbcPipeline[activeStepIndex].details.map((d, dIdx) => (
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
                  {React.createElement(vbcPipeline[activeStepIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">VBC Pipeline Milestone</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{vbcPipeline[activeStepIndex].output}</p>
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
              Real ACO & Value-Based Care Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Inspect live software cockpits for population health management and ACO executive reporting.
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab('executive')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'executive'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Executive Performance Dashboard
              </button>
              <button
                onClick={() => setActiveTab('population')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'population'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Population Analytics Cockpit
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl bg-[#1c1636] border border-[#35295c] p-3 sm:p-4 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-3">
              <span className="text-[11px] text-purple-300 font-mono">
                {activeTab === 'executive' ? 'live.itsguardian.com/aco/executive-dashboard' : 'live.itsguardian.com/aco/population-analytics'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                {activeTab === 'executive' ? 'Executive Cockpit' : 'Population Cockpit'}
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
                    alt="Guardian ACO Executive Dashboard"
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
                    alt="Guardian Population Analytics Cockpit"
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
            Approved Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
            ACO & Value-Based Care Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved features directly supported by Product Profile 6.0 and Phase 1 feature inventory.
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
              Connecting Technology-Enabled Intelligence to ACO Workflows
            </h3>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal mb-8">
              Guardian supports Accountable Care Organizations by unifying CMS CCLF/BCDA data with real-time EHR feeds—enabling care teams to track PMPM/PMPY trends, close MSSP care gaps, and coordinate patient care across practice networks.
            </p>
            <Link
              to="/company/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] transition-all duration-200"
            >
              <span>Speak with an ACO Specialist</span>
              <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Related Solution Domains"
        kicker="Solutions Architecture"
        tagPrefix="SOLUTION"
        overviewLink="/solutions"
        overviewText="View Solutions Overview"
        actionText="View Solution"
      />

      {/* 7. CLOSING CTA */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl border border-white/10"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>Partner With Guardian</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Ready to Excel in Value-Based Contracts?
            </h2>

            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Equip your ACO with population intelligence, CMS CCLF data integration, and clinical care coordination tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule an ACO Demo</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>

              <Link
                to="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
              >
                <span>Explore Solutions Overview</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
