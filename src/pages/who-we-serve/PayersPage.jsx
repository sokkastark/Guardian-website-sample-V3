import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Database,
  Award,
  Users,
  CheckSquare,
  BarChart3,
  ArrowUpRight,
  Shield,
  TrendingUp,
  MessageSquare,
  DollarSign,
  Activity
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function PayersPage() {
  const [activeTab, setActiveTab] = useState('quality');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Approved Storytelling Direction:
  // Payer Data Integration → Star / RAF Surveillance → Provider Engagement → Point-of-Care Gap Closure → Organizational Outcomes
  const payerPipeline = [
    {
      step: '01',
      stage: 'PAYER DATA INTEGRATION',
      title: 'Claims, CCLF & Clinical Data Aggregation',
      icon: Database,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Ingest and normalize medical claims, pharmacy data, CMS CCLF feeds, and clinical EHR records across attributed plan members.',
      details: [
        'Multi-format claims & CCLF/BCDA data ingestion',
        'Clinical document exchange (C-CDA) & EMR integration',
        'Master Patient Indexing (MPI) for deduplicated member charts'
      ],
      output: 'Unified Payer Member Database'
    },
    {
      step: '02',
      stage: 'STAR / RAF SURVEILLANCE',
      title: 'Star Ratings & Dual-Engine RAF Surveillance',
      icon: Award,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Monitor projected CMS Star Ratings, HEDIS measures, and dual-engine CMS HCC V24 & V28 risk scores in real time.',
      details: [
        'CMS Star Ratings & HEDIS quality measure surveillance',
        'Dual-engine CMS HCC V24 & V28 prospective risk scoring',
        'Uncaptured chronic condition suspecting & gap detection'
      ],
      output: 'Real-Time Star & RAF Intelligence'
    },
    {
      step: '03',
      stage: 'PROVIDER ENGAGEMENT',
      title: 'Provider Network Scorecards & Collaboration',
      icon: Users,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Share actionable quality scorecards, care gap lists, and documentation insights with contracted provider networks.',
      details: [
        'Provider & practice-level quality performance scorecards',
        'Direct Secure Messaging (DSM) communication with clinics',
        'Transparent gap closure tracking across network practices'
      ],
      output: 'Engaged Network Providers'
    },
    {
      step: '04',
      stage: 'POINT-OF-CARE GAP CLOSURE',
      title: 'Point-of-Care Gap Closure & Outreach',
      icon: CheckSquare,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Deliver point-of-care care gap alerts during clinical encounters and deploy automated communication workflows to schedule member screenings.',
      details: [
        'Point-of-care clinical care gap notifications',
        'Multichannel outreach (SMS, email, care coordinator) for screening reminders',
        'CMS MIPS Qualified Registry Architecture and exception tracking'
      ],
      output: 'Closed Member Care Gaps'
    },
    {
      step: '05',
      stage: 'ORGANIZATIONAL OUTCOMES',
      title: 'PMPM Cost Analytics & Financial Oversight',
      icon: BarChart3,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Track Per Member Per Month (PMPM) expenditure, utilization trends, and quality compliance metrics across health plan contracts.',
      details: [
        'PMPM & PMPY financial cost tracking dashboards',
        'Medical loss ratio (MLR) indicator surveillance',
        'Executive cockpits for value-based plan performance'
      ],
      output: 'Optimized Plan Performance'
    }
  ];

  // Approved Features Sourced from Product Profile 6.0
  const capabilities = [
    {
      title: 'CMS Star Ratings & HEDIS Surveillance',
      description: 'Continuous monitoring of projected CMS Star Ratings performance and HEDIS quality measures across health plan contracts.',
      category: 'Quality Management',
      icon: Award
    },
    {
      title: 'Dual-Engine CMS HCC V24 & V28 Risk Models',
      description: 'Prospective and retrospective risk adjustment factor (RAF) score calculation supporting CMS HCC V24 and V28 models.',
      category: 'Risk Adjustment',
      icon: Shield
    },
    {
      title: 'Claims, CCLF & Clinical Integration',
      description: 'Multi-source data ingestion pipeline integrating medical claims, pharmacy fills, CMS CCLF data, and EHR clinical feeds.',
      category: 'Interoperability',
      icon: Database
    },
    {
      title: 'Provider & Practice Quality Scorecards',
      description: 'Comparative performance scorecards evaluating contracted provider groups across quality gap closure rates and attribution.',
      category: 'Network Operations',
      icon: Users
    },
    {
      title: 'Multichannel Member Engagement',
      description: 'Automated outreach workflows (SMS and care manager communication) to remind members of preventive screenings and schedule appointments.',
      category: 'Member Outreach',
      icon: MessageSquare
    },
    {
      title: 'PMPM Cost & Utilization Analytics',
      description: 'Executive dashboards tracking Per Member Per Month (PMPM) expenditure, utilization patterns, and financial performance.',
      category: 'Financial Analytics',
      icon: DollarSign
    }
  ];

  const siblings = [
    { label: 'ACO & Value-Based Care', path: '/solutions/aco-value-based-care', desc: 'CMS CCLF data integration, attribution tracking, and shared savings workflows.' },
    { label: 'CIN & Provider Organizations', path: '/solutions/cin-provider-organizations', desc: 'Closed-loop referral routing and provider geo-mapping.' },
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
            <span className="text-white font-medium">Health Plans / Payers</span>
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
                <span>Health Plan & Payer Solution</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Turn Network Data Into Performance
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian connects claims data, clinical records, and network information to help health plans monitor CMS Star Ratings, manage HCC risk adjustment accuracy, and track PMPM cost metrics.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request a Payer Demo</span>
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
                    <span className="text-[11px] text-purple-300 font-mono ml-2">live.itsguardian.com/solutions/health-plans</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    Payer Intelligence
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-quality-manager.png" 
                    alt="Guardian Health Plan Quality Cockpit" 
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
            <Award className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>Health Plan Performance Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            Data Integration → Star/RAF Surveillance → Provider Engagement → Point-of-Care Closure → Outcomes
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian connects payer data streams with provider network execution and member quality closure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {payerPipeline.map((item, idx) => {
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
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${payerPipeline[activeStepIndex].badgeColor}`}>
                    Phase {payerPipeline[activeStepIndex].step}: {payerPipeline[activeStepIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {payerPipeline[activeStepIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {payerPipeline[activeStepIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {payerPipeline[activeStepIndex].details.map((d, dIdx) => (
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
                  {React.createElement(payerPipeline[activeStepIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">Payer Workflow Output</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{payerPipeline[activeStepIndex].output}</p>
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
              Real Quality & Risk Adjustment Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Explore live software UI interfaces for Quality Manager surveillance and HCC V24/V28 risk adjustment scoring.
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveTab('quality')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'quality'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                Quality & Star Ratings Cockpit
              </button>
              <button
                onClick={() => setActiveTab('risk')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'risk'
                    ? 'bg-[#1c1636] text-white shadow-md'
                    : 'bg-[#faf9fc] text-[#58536e] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                HCC V24 & V28 Risk Cockpit
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl bg-[#1c1636] border border-[#35295c] p-3 sm:p-4 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-3">
              <span className="text-[11px] text-purple-300 font-mono">
                {activeTab === 'quality' ? 'live.itsguardian.com/health-plans/quality-manager' : 'live.itsguardian.com/health-plans/risk-adjustment'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                {activeTab === 'quality' ? 'Quality Cockpit' : 'RAF Cockpit'}
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'quality' ? (
                <motion.div
                  key="quality"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-quality-manager.png"
                    alt="Guardian Quality Manager Interface"
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="risk"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
                >
                  <img
                    src="/images/product-ui/ui-risk-stratification.png"
                    alt="Guardian Risk Adjustment Cockpit"
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
            Key Capabilities for Health Plans & Payers
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
              Connecting Payer Analytics directly to Provider Workflows
            </h3>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal mb-8">
              Guardian bridges health plan data feeds with point-of-care provider tools—enabling payer organizations to share quality gap scorecards, support HCC V24/V28 risk adjustment, and engage members via multichannel care coordination outreach.
            </p>
            <Link
              to="/company/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] transition-all duration-200"
            >
              <span>Speak with a Payer Specialist</span>
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
              Ready to Turn Network Data Into Better Performance?
            </h2>

            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect claims and clinical data, monitor CMS Star Ratings, and support risk adjustment and provider quality closure across your network.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule a Payer Solutions Demo</span>
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
