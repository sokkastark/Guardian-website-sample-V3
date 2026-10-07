import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  FileText,
  DollarSign,
  TrendingUp,
  BarChart3,
  Users,
  ArrowUpRight,
  Shield,
  Search,
  Database,
  Layers
} from 'lucide-react';

export default function DataEnrichmentPage() {
  const [activeTab, setActiveTab] = useState('payer');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Claims Ingestion → Data Normalization → PMPM Costing → Claims Gap & Risk Suspecting → Attribution Aggregation
  const claimsPipeline = [
    {
      step: '01',
      stage: 'CLAIMS INGESTION',
      title: 'Multi-Payer Claims & CCLF Feed Ingestion',
      icon: Database,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Ingest multi-payer medical claims, pharmacy claims, CMS CCLF (1-9) feeds, and BCDA API streams across attributed health plan members.',
      details: [
        'CMS CCLF (1-9) data feed ingestion and historical claims loading',
        '837 / 835 EDI medical & institutional claims file processing',
        'Pharmacy claims feed integration'
      ],
      output: 'Raw Claims & CCLF Data Repository'
    },
    {
      step: '02',
      stage: 'DATA NORMALIZATION',
      title: 'Claims Normalization & Code Mapping',
      icon: FileText,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      summary: 'Standardize CPT/HCPCS procedure codes, ICD-10 diagnostic codes, and NDC medication numbers across commercial and Medicare claims.',
      details: [
        'Mapping of local billing codes to national ICD-10 and CPT standards',
        'Cross-payer claims data harmonization across disparate health plan formats',
        'Deduplication of overlapping claims lines and encounter billings'
      ],
      output: 'Normalized Claims Data Model'
    },
    {
      step: '03',
      stage: 'PMPM COSTING',
      title: 'PMPM / PMPY Cost Baseline Analytics',
      icon: DollarSign,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Calculate Per Member Per Month (PMPM) and Per Member Per Year (PMPY) cost baselines across risk-bearing contracts.',
      details: [
        'PMPM & PMPY financial expenditure calculation across attributed panels',
        'Inpatient, outpatient, emergency, and pharmacy cost distribution breakdown',
        'Baseline cost trend evaluation against contract benchmark targets'
      ],
      output: 'PMPM / PMPY Expenditure Baseline'
    },
    {
      step: '04',
      stage: 'CLAIMS GAP & RISK SUSPECTING',
      title: 'Claims-Based Care Gap & Suspecting Rules',
      icon: TrendingUp,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Cross-reference longitudinal claims history against prospective CMS-HCC risk models and HEDIS quality measure gap suspecting rules.',
      details: [
        'CMS-HCC V24 & V28 risk suspecting based on historical claims diagnoses',
        'Identification of unclosed annual wellness visits and screening gaps',
        'High-utilization claims pattern detection (repeat ER, readmissions)'
      ],
      output: 'Claims-Derived Suspecting Opportunities'
    },
    {
      step: '05',
      stage: 'ATTRIBUTION AGGREGATION',
      title: 'Multi-Payer Panel Attribution Management',
      icon: Users,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Aggregate attributed patient panels across Medicare Advantage, MSSP ACO, and commercial payer contracts into unified provider rosters.',
      details: [
        'Prospective and retrospective beneficiary attribution roster matching',
        'Primary care physician (PCP) panel assignment tracking',
        'Attribution roster reconciliation with clinical Master Patient Index (MPI)'
      ],
      output: 'Reconciled Attribution Panel Roster'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'CMS CCLF Feed Ingestion Engine',
      description: 'Ingest and process CMS CCLF (1-9) and BCDA data feeds for Medicare Advantage and MSSP ACO contract surveillance.',
      category: 'CCLF Ingestion',
      icon: Database
    },
    {
      title: 'EDI 837 / 835 Processing',
      description: 'Automated processing of EDI 837 professional and institutional claims and EDI 835 payment remittance files.',
      category: 'Claims Processing',
      icon: FileText
    },
    {
      title: 'Pharmacy Claims Integration',
      description: 'Integrate pharmacy claims feeds to track prescription fill history, medication adherence, and drug spend.',
      category: 'Pharmacy Claims',
      icon: Layers
    },
    {
      title: 'PMPM / PMPY Financial Analytics',
      description: 'Calculate Per Member Per Month (PMPM) financial expenditure and utilization metrics across value-based contracts.',
      category: 'Financial Analytics',
      icon: DollarSign
    },
    {
      title: 'Claims Risk & Gap Suspecting',
      description: 'Surveil claims histories for uncaptured chronic condition documentation and unclosed HEDIS care gaps.',
      category: 'Risk & Quality',
      icon: TrendingUp
    },
    {
      title: 'Attribution Roster Management',
      description: 'Reconcile multi-payer beneficiary rosters with clinical EHR records and provider panel assignments.',
      category: 'Panel Attribution',
      icon: Users
    }
  ];

  const siblings = [
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration', desc: 'Multi-EHR connectivity, C-CDA document parsing, and longitudinal chart harmonization.' },
    { label: 'HIE & ADT Event Streams', path: '/data-integration/hie-adt', desc: 'Real-time HL7 ADT alerts for hospital admissions, discharges, and ER visits.' },
    { label: 'Labs, Pharmacy & Other Data', path: '/data-integration/labs-pharmacy-other', desc: 'LOINC lab feeds, RxNorm medication fills, and SDoH social factor mesh.' },
    { label: 'Data Foundation', path: '/data-integration/data-foundation', desc: 'Enterprise data architecture, multi-tenant security, and semantic graph.' },
    { label: 'APIs & Mobile Integration', path: '/data-integration/apis-mobile', desc: 'FHIR APIs, secure integration framework, and mobile app integration.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#059669]/20 via-[#10b981]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/data-integration" className="hover:text-white transition-colors">Data & Integration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Claims Integration</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Claims Data Engine // Phase 6D Data Foundation Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Claims Data Ingestion & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7f3d0] via-[#6ee7b7] to-[#34d399]">PMPM Financial Analytics</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian ingests multi-payer medical claims, pharmacy data, CMS CCLF feeds, and EDI 837 files—normalizing billing histories into PMPM expenditure baselines, attribution rosters, and prospective risk suspecting models.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-sm shadow-lg shadow-[#059669]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Claims Integration Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions/health-plans"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Health Plans Solution</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">CMS Data Stream</div>
                <div className="text-xl font-bold text-white mt-1">CCLF 1-9 & BCDA</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">EDI Standards</div>
                <div className="text-xl font-bold text-white mt-1">837 / 835 Processing</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Cost Tracking</div>
                <div className="text-xl font-bold text-white mt-1">PMPM / PMPY Baseline</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Roster Matching</div>
                <div className="text-xl font-bold text-white mt-1">Attribution Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLAIMS PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#ecfdf5] px-3.5 py-1.5 rounded-full">
              Claims Integration Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Claims-to-Financial Analytics Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian ingests multi-payer claims feeds and transforms them into financial cost baselines and risk suspecting insights.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {claimsPipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#059669]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#059669] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#6ee7b7]' : 'text-[#059669]'}`} />
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${claimsPipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {claimsPipeline[activeStepIndex].step} — {claimsPipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {claimsPipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {claimsPipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {claimsPipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#059669] bg-[#ecfdf5] px-3 py-1 rounded-md">
                      {claimsPipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#ecfdf5] text-[#059669]">
                      {React.createElement(claimsPipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Claims Engine Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Financial Data Layer</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Engine State:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Batch & Stream</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">EDI Standards:</span>
                      <span className="text-[#1c1636]">837, 835 & CCLF 1-9</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#059669] font-bold">{claimsPipeline[activeStepIndex].output}</span>
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#ecfdf5] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Payer Claims & Financial Analytics Cockpit
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual interface screens powering claims-based PMPM cost analytics and population health dashboards.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('payer')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'payer'
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#ecfdf5]'
              }`}
            >
              Payer Analytics Cockpit
            </button>
            <button
              onClick={() => setActiveTab('pophealth')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'pophealth'
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#ecfdf5]'
              }`}
            >
              Population Cost Analytics
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'payer' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Payer Analytics & Star/RAF Cockpit</h3>
                    <p className="text-xs text-[#706890]">Claims-derived PMPM cost trends, MLR indicators, and RAF score surveillance.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] px-3 py-1 rounded-full">
                    ui-payer-analytics.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-payer-analytics.png"
                    alt="Guardian Payer Claims Analytics UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Population Health Cost Analytics</h3>
                    <p className="text-xs text-[#706890]">Expenditure distribution across inpatient, emergency, outpatient, and pharmacy claims.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] px-3 py-1 rounded-full">
                    ui-pop-health-analytics.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-pop-health-analytics.png"
                    alt="Guardian Population Cost Analytics UI"
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#ecfdf5] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Claims Integration Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting claims ingestion and PMPM financial analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#059669]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#ecfdf5] text-[#059669]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#059669] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Financial & Risk Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Empowering Health Plans & ACOs with Complete Claims Visibility
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Medical and pharmacy claims represent the primary financial substrate for value-based contracts. However, claims data arrives in disparate EDI formats and monthly CCLF feed drops that require complex normalization.
              </p>
              <p>
                Guardian’s Claims Integration engine ingests CMS CCLF (1-9) files, EDI 837/835 streams, and pharmacy fill records—transforming raw claims into PMPM cost baselines, attribution rosters, and prospective CMS-HCC risk suspecting insights that guide strategic population health management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669]">
              Explore Data & Integration Family
            </span>
            <h3 className="text-xl font-bold text-[#1c1636] mt-2">
              Data & Integration Navigation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siblings.map((sib, idx) => (
              <Link
                key={idx}
                to={sib.path}
                className="group p-6 rounded-2xl bg-[#faf9fc] border border-[#e9e5f0] hover:border-[#059669] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">Data Layer</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#059669] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#059669] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#059669] flex items-center space-x-1">
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
            <Sparkles className="w-4 h-4 text-[#bd93f9]" />
            <span>Optimize Value-Based Claims Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Connect Your Claims & CCLF Data Streams?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to discover how Guardian’s Claims Integration engine normalizes EDI files and CCLF feeds into actionable financial intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10b981] hover:to-[#059669] text-white font-bold text-sm shadow-xl shadow-[#059669]/30 transition-all flex items-center space-x-2 group"
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

