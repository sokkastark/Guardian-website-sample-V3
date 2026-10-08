import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Layers,
  Shield,
  Search,
  ArrowUpRight,
  Cpu,
  Workflow,
  Activity,
  Award
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('patient360');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Proven Capability Engagement Model (5 Stages)
  const methodology = [
    {
      step: '01',
      stage: 'DATA INGESTION',
      title: 'Multi-Source Clinical & Claims Integration',
      icon: Cpu,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Ingest multi-EHR C-CDA documents, claims 837/835 EDI feeds, CMS CCLF files, and HL7 v2 ADT event streams.',
      details: [
        'Connecting acute hospital registration systems and regional HIE networks',
        'Ingesting historical claims data to establish baseline financial utilization',
        'Standardizing local clinical code sets to canonical LOINC and RxNorm terminologies'
      ],
      output: 'Harmonized Multi-Source Repository'
    },
    {
      step: '02',
      stage: 'IDENTITY HARMONIZATION',
      title: 'Master Patient Indexing (MPI) Deduplication',
      icon: Search,
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      summary: 'Resolve duplicate patient records across disparate health system EMRs using deterministic and probabilistic identity algorithms.',
      details: [
        'Sub-second identity resolution linking patient records across distinct EHR systems',
        'Cross-referencing attributed beneficiary lists against clinical charts',
        'Creating the unified Patient Master Chart (PMC) longitudinal profile'
      ],
      output: 'Unified Patient Master Chart'
    },
    {
      step: '03',
      stage: 'RISK STRATIFICATION',
      title: 'Proprietary Multidimensional Risk Scoring',
      icon: Activity,
      badgeColor: 'bg-[#7c3aed]/10 text-[#7c3aed] border-[#7c3aed]/20',
      summary: 'Calculate continuous patient risk scores across 6 risk dimensions and run prospective CMS-HCC risk suspecting.',
      details: [
        'Calculating prospective RAF scores across CMS-HCC V24 and V28 models',
        'Identifying suspected chronic condition coding gaps for risk coder review',
        'Stratifying patient panels into high, rising, and stable risk cohorts'
      ],
      output: 'Risk-Stratified Population Roster'
    },
    {
      step: '04',
      stage: 'POINT-OF-CARE EXECUTION',
      title: 'Care Management & Quality Gap Closure',
      icon: Workflow,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      summary: 'Deliver point-of-care care gap notifications, 30-day TCM transition workflows, and standardized assessment scale tasks.',
      details: [
        'Triggering automated 30-day TCM care protocols upon hospital ADT discharge',
        'Surfacing open HEDIS and MIPS care gaps inside clinician toolbars',
        'Managing multidisciplinary care team tasks using 150+ assessment scales'
      ],
      output: 'Point-of-Care Workflow Action'
    },
    {
      step: '05',
      stage: 'CONTINUOUS EVALUATION',
      title: 'Executive Performance Cockpit Monitoring',
      icon: Award,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Track real-time population financial metrics, PMPM baselines, and quality scorecards across value-based contracts.',
      details: [
        'Monitoring PMPM financial spend against CMS historical benchmarks',
        'Evaluating PCP and specialist referral routing efficiency across CINs',
        'Tracking quality measure gap closure performance across attributed panels'
      ],
      output: 'Executive Performance Dashboard'
    }
  ];

  // Verified Evaluation Models
  const evaluationModels = [
    {
      title: 'ACO Value-Based Care Delivery Model',
      description: 'How Guardian integrates multi-EHR data, calculates RAF scores, and automates 30-day TCM transition workflows for ACOs.',
      category: 'ACO Solutions',
      icon: Award
    },
    {
      title: 'Health Plan Quality & RAF Surveillance Model',
      description: 'Prospective CMS-HCC V24/V28 gap suspecting and automated HEDIS/Star Ratings surveillance for payer organizations.',
      category: 'Health Plans',
      icon: Shield
    },
    {
      title: 'Clinically Integrated Network (CIN) Model',
      description: 'EHR data aggregation, closed-loop referral routing, and PCP-specialist coordination across CIN networks.',
      category: 'CIN Providers',
      icon: Workflow
    },
    {
      title: 'Care Management & Coordination Model',
      description: 'Multidisciplinary care coordination powered by 150+ standardized assessment scales and real-time ADT event alerts.',
      category: 'Care Teams',
      icon: Activity
    },
    {
      title: 'Data Foundation & MPI Evaluation Model',
      description: 'Enterprise data architecture, Master Patient Indexing (MPI), and multi-tenant security evaluation.',
      category: 'Data Foundation',
      icon: Cpu
    },
    {
      title: 'APIs & Modern Interoperability Model',
      description: 'Evaluation framework for FHIR R4 APIs, RESTful endpoints, and point-of-care EMR integration connectors.',
      category: 'Developer APIs',
      icon: Search
    }
  ];

  const siblings = [
    { label: 'Insights & Perspectives', path: '/resources/insights', desc: 'Perspectives on healthcare data, clinical intelligence, and value-based strategy.' },
    { label: 'Educational Guides', path: '/resources/guides', desc: 'Practical executive reference guides and operational implementation frameworks.' },
    { label: 'Webinars', path: '/resources/webinars', desc: 'Educational presentation sessions covering value-based care and clinical intelligence.' },
    { label: 'Product Tours', path: '/resources/product-tours', desc: 'Guided visual walkthroughs of Guardian platform software capabilities.' },
    { label: 'Video Library', path: '/resources/videos', desc: 'Feature overview briefs and platform media briefings.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf5ff] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#2a1740] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7c3aed]/25 via-[#a855f7]/30 to-[#e11d48]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#e9d5ff] mb-6">
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span className="text-white">Case Evaluation & Value Models</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#f3e8ff] mb-6">
              <Sparkles className="w-4 h-4 text-[#c084fc]" />
              <span>Proven Capability Frameworks // Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Verified Platform Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#7c3aed]">Value Delivery Frameworks</span>
            </h1>

            <p className="text-base sm:text-lg text-[#f3e8ff] leading-relaxed mb-8">
              Explore how Guardian’s integrated platform capabilities, Master Patient Indexing (MPI), risk stratification, and care management workflows combine to address real-world healthcare challenges.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white font-semibold text-sm shadow-lg shadow-[#7c3aed]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Capability Demonstration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/product-tours"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Take Product Tour</span>
                <ArrowUpRight className="w-4 h-4 text-[#e9d5ff]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#e9d5ff] uppercase tracking-wider font-semibold">Deployment Model</div>
                <div className="text-xl font-bold text-white mt-1">5-Stage Methodology</div>
              </div>
              <div>
                <div className="text-xs text-[#e9d5ff] uppercase tracking-wider font-semibold">Data Standard</div>
                <div className="text-xl font-bold text-white mt-1">Unified PMC Chart</div>
              </div>
              <div>
                <div className="text-xs text-[#e9d5ff] uppercase tracking-wider font-semibold">Risk Engine</div>
                <div className="text-xl font-bold text-white mt-1">HCC V24 & V28</div>
              </div>
              <div>
                <div className="text-xs text-[#e9d5ff] uppercase tracking-wider font-semibold">Event Speed</div>
                <div className="text-xl font-bold text-white mt-1">Real-Time ADT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METHODOLOGY PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c3aed] bg-[#f3e8ff] px-3.5 py-1.5 rounded-full">
              Proven 5-Stage Capability Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              How Guardian Value Delivery Models Operate
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              A structured evaluation model showing how technology, data integration, and clinical workflows come together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {methodology.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf5ff] text-[#625b82] border-[#e9e5f0] hover:border-[#7c3aed]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#7c3aed] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#c084fc]' : 'text-[#7c3aed]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#faf5ff] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${methodology[activeStepIndex].badgeColor}`}>
                    <span>STAGE {methodology[activeStepIndex].step} — {methodology[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {methodology[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {methodology[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {methodology[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Deliverable:</span>
                    <span className="text-xs font-bold text-[#7c3aed] bg-[#f3e8ff] px-3 py-1 rounded-md">
                      {methodology[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#f3e8ff] text-[#7c3aed]">
                      {React.createElement(methodology[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Capability Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Platform Engine</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf5ff] p-4 rounded-lg border border-[#f3e8ff] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Engagement Stage:</span>
                      <span className="text-purple-700 font-bold">{methodology[activeStepIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Verification Standard:</span>
                      <span className="text-emerald-600 font-bold">Product Profile 6.0</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Stage Output:</span>
                      <span className="text-[#7c3aed] font-bold">{methodology[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#faf5ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c3aed] bg-[#f3e8ff] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Patient 360 & Cardiometabolic Proof Showcase
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore verified product screens illustrating Guardian’s longitudinal Patient Master Chart and lab monitoring views.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('patient360')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'patient360'
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f3e8ff]'
              }`}
            >
              Patient 360 Longitudinal Chart
            </button>
            <button
              onClick={() => setActiveTab('cardiometabolic')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'cardiometabolic'
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f3e8ff]'
              }`}
            >
              Cardiometabolic Monitoring View
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'patient360' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Patient 360 Longitudinal Record Interface</h3>
                    <p className="text-xs text-[#706890]">13 core clinical domains combining EHR encounters, claims, labs, pharmacy, and ADT history.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7c3aed] bg-[#f3e8ff] px-3 py-1 rounded-full">
                    ui-patient-360.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-patient-360.png"
                    alt="Guardian Patient 360 UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Cardiometabolic & Clinical Risk Monitoring</h3>
                    <p className="text-xs text-[#706890]">Tracking HbA1c, lipid profiles, renal function, and chronic disease trajectories.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7c3aed] bg-[#f3e8ff] px-3 py-1 rounded-full">
                    ui-cardiometabolic-care.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-cardiometabolic-care.png"
                    alt="Guardian Cardiometabolic Care UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. EVALUATION MODELS MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c3aed] bg-[#f3e8ff] px-3.5 py-1.5 rounded-full">
              Value Delivery Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Organizational Capability Evaluation Models
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified evaluation frameworks derived directly from Product Profile 6.0 solution capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationModels.map((model, idx) => {
              const IconComponent = model.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf5ff] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#7c3aed]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#f3e8ff] text-[#7c3aed]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#7c3aed] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {model.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {model.description}
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
      <section className="py-20 sm:py-24 bg-[#faf5ff] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7c3aed] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Evidence-Based Evaluation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Understanding How Guardian Capabilities Deliver Impact
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Evaluating value-based care software requires assessing how technology, multi-source data ingestion, and point-of-care clinical tools combine to address organizational priorities.
              </p>
              <p>
                Guardian’s Case Evaluation Frameworks provide structured overviews of how our Patient Master Chart (PMC), real-time ADT alerting, and prospective CMS-HCC risk suspecting capabilities deploy across ACOs, health plans, and CIN provider networks.
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#f3e8ff] mb-6">
            <Sparkles className="w-4 h-4 text-[#c084fc]" />
            <span>Evaluate Guardian Platform Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Evaluate Guardian for Your Organization?
          </h2>
          <p className="text-base sm:text-lg text-[#f3e8ff] max-w-2xl mx-auto mb-8">
            Schedule a personalized demonstration to see how Guardian’s capability frameworks and software tools address your population health priorities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white font-bold text-sm shadow-xl shadow-[#7c3aed]/30 transition-all flex items-center space-x-2 group"
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
