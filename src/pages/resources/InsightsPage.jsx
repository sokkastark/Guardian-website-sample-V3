import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Shield,
  Layers,
  Search,
  ArrowUpRight,
  Cpu,
  Compass,
  FileText
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function InsightsPage() {
  const [activeTopic, setActiveTopic] = useState('all');
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Editorial Perspectives Pillars (Source-grounded inquiry areas)
  const pillars = [
    {
      step: '01',
      stage: 'DATA INTEROPERABILITY',
      title: 'Connecting Fragmented Healthcare Data',
      icon: Cpu,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Perspectives on harmonizing multi-EHR instances, claims feeds, and ADT event streams into a unified longitudinal record.',
      details: [
        'Breaking down vendor data silos across health systems and ACO networks',
        'Standardizing disparate terminologies (LOINC, RxNorm, ICD-10, CPT) for uniform analytics',
        'Resolving duplicate patient records through Master Patient Indexing (MPI)'
      ],
      output: 'Unified Data Foundation Perspective'
    },
    {
      step: '02',
      stage: 'CLINICAL INTELLIGENCE',
      title: 'Contextual Intelligence at the Point of Care',
      icon: Lightbulb,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Exploring how clinical knowledge graphs and machine learning convert raw data into actionable clinician insights.',
      details: [
        'Surfacing prospective HCC coding opportunities during live patient encounters',
        'Identifying open HEDIS and MIPS quality care gaps automatically',
        'Delivering real-time risk scores directly into care team workflows'
      ],
      output: 'Point-of-Care Intelligence Analysis'
    },
    {
      step: '03',
      stage: 'CARE NAVIGATION',
      title: 'Optimizing Multidisciplinary Care Execution',
      icon: Compass,
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      summary: 'Analysis of care management protocols, 30-day post-discharge transitions, and chronic disease intervention strategies.',
      details: [
        'Closing the critical 30-day window following hospital discharge using ADT alerts',
        'Standardizing assessment scales (150+ available) across care coordination teams',
        'Fostering closed-loop PCP and specialist referral tracking across CIN networks'
      ],
      output: 'Care Team Execution Framework'
    },
    {
      step: '04',
      stage: 'VALUE-BASED STRATEGY',
      title: 'Navigating Risk Contracts & Shared Savings',
      icon: TrendingUp,
      badgeColor: 'bg-blue-50 text-[#0284c7] border-blue-200',
      summary: 'Strategic analysis for ACOs, health plans, and CINs managing risk performance and population financial baselines.',
      details: [
        'Tracking PMPM cost baselines and benchmark performance under CMS MSSP',
        'Managing dual CMS-HCC V24 and V28 model transitions efficiently',
        'Aligning clinical quality metrics with shared savings performance goals'
      ],
      output: 'Value-Based Care Strategic Brief'
    }
  ];

  // Verified Topic Domains
  const topicFocusAreas = [
    {
      title: 'Healthcare Interoperability & Data Mesh',
      description: 'Analysis of multi-EHR connectivity, C-CDA parsing, HL7 ADT streams, and Master Patient Indexing.',
      category: 'Data Foundation',
      icon: Cpu
    },
    {
      title: 'Clinical Knowledge & Risk Stratification',
      description: 'Explorations in multidimensional risk scoring, cardiometabolic profiles, and predictive forecasting.',
      category: 'Intelligence',
      icon: Lightbulb
    },
    {
      title: 'Transition of Care & ADT Surveillance',
      description: 'Strategies for real-time hospital event alerts, 30-day TCM protocols, and readmission prevention.',
      category: 'Care Coordination',
      icon: Compass
    },
    {
      title: 'Risk Adjustment & CMS-HCC V24 / V28',
      description: 'Navigating prospective and retrospective risk adjustment, chart audits, and RAF score accuracy.',
      category: 'Risk Adjustment',
      icon: TrendingUp
    },
    {
      title: 'Quality Gap Closure & Star Ratings',
      description: 'Best practices for automated HEDIS/MIPS care gap detection and provider performance scorecards.',
      category: 'Quality Manager',
      icon: Shield
    },
    {
      title: 'Developer APIs & System Integration',
      description: 'Technical reference architectures covering FHIR R4 APIs, RESTful data exchange, and EMR connectors.',
      category: 'Developer APIs',
      icon: BookOpen
    }
  ];

  const siblings = [
    { label: 'Educational Guides', path: '/resources/guides', desc: 'Practical executive reference guides and operational implementation frameworks.' },
    { label: 'Case Studies', path: '/resources/case-studies', desc: 'Verified Guardian capability evaluation frameworks and value delivery models.' },
    { label: 'Webinars', path: '/resources/webinars', desc: 'Educational presentation sessions covering value-based care and clinical intelligence.' },
    { label: 'Product Tours', path: '/resources/product-tours', desc: 'Guided visual walkthroughs of Guardian platform software capabilities.' },
    { label: 'Video Library', path: '/resources/videos', desc: 'Feature overview briefs and platform media briefings.' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ff] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#241a45] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6366f1]/25 via-[#818cf8]/30 to-[#4f46e5]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#c7d2fe] mb-6">
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#6366f1]" />
            <span className="text-white">Insights & Perspectives</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e0e7ff] mb-6">
              <Sparkles className="w-4 h-4 text-[#818cf8]" />
              <span>Healthcare Thought Leadership // Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Perspectives & Industry Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c7d2fe] via-[#818cf8] to-[#6366f1]">Healthcare Transformation</span>
            </h1>

            <p className="text-base sm:text-lg text-[#e0e7ff] leading-relaxed mb-8">
              Explore Guardian perspectives on healthcare data interoperability, clinical artificial intelligence, value-based risk contracts, and the work of turning information into action.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#818cf8] hover:to-[#6366f1] text-white font-semibold text-sm shadow-lg shadow-[#6366f1]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Platform Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/guides"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Educational Guides</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7d2fe]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#c7d2fe] uppercase tracking-wider font-semibold">Publication Focus</div>
                <div className="text-xl font-bold text-white mt-1">Value-Based Care</div>
              </div>
              <div>
                <div className="text-xs text-[#c7d2fe] uppercase tracking-wider font-semibold">Data Standard</div>
                <div className="text-xl font-bold text-white mt-1">FHIR R4 & HL7</div>
              </div>
              <div>
                <div className="text-xs text-[#c7d2fe] uppercase tracking-wider font-semibold">Risk Models</div>
                <div className="text-xl font-bold text-white mt-1">HCC V24 & V28</div>
              </div>
              <div>
                <div className="text-xs text-[#c7d2fe] uppercase tracking-wider font-semibold">Care Engine</div>
                <div className="text-xl font-bold text-white mt-1">Real-Time ADT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#e0e7ff] px-3.5 py-1.5 rounded-full">
              Editorial Thought Leadership Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Core Inquiry Areas Shaping Healthcare Intelligence
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian analyzes key challenges across healthcare data, clinical workflows, and population risk performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activePillarIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#f5f3ff] text-[#625b82] border-[#e9e5f0] hover:border-[#6366f1]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#6366f1] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#818cf8]' : 'text-[#6366f1]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#f5f3ff] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillarIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${pillars[activePillarIndex].badgeColor}`}>
                    <span>PILLAR {pillars[activePillarIndex].step} — {pillars[activePillarIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {pillars[activePillarIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {pillars[activePillarIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {pillars[activePillarIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#6366f1] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Perspective Deliverable:</span>
                    <span className="text-xs font-bold text-[#6366f1] bg-[#e0e7ff] px-3 py-1 rounded-md">
                      {pillars[activePillarIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#e0e7ff] text-[#6366f1]">
                      {React.createElement(pillars[activePillarIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Editorial Research Focus</h4>
                      <p className="text-xs text-[#706890]">Guardian Knowledge Series</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#f5f3ff] p-4 rounded-lg border border-[#e0e7ff] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Publication Standard:</span>
                      <span className="text-indigo-700 font-bold">Executive Briefing</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Primary Theme:</span>
                      <span className="text-emerald-600 font-bold">{pillars[activePillarIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Core Focus:</span>
                      <span className="text-[#6366f1] font-bold">{pillars[activePillarIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#f5f3ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#e0e7ff] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Executive Analytics & Patient Master Chart Evidence
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual Guardian interface screens demonstrating population analytics and unified Patient 360 records.
            </p>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
              <div>
                <h3 className="text-base font-bold text-[#1c1636]">Executive Dashboard & Population Intelligence Cockpit</h3>
                <p className="text-xs text-[#706890]">Real-time KPI monitoring, financial risk baselines, and quality performance scorecards.</p>
              </div>
              <span className="text-xs font-semibold text-[#6366f1] bg-[#e0e7ff] px-3 py-1 rounded-full">
                ui-dashboard-main.png
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
              <img
                src="/images/product-ui/ui-dashboard-main.png"
                alt="Guardian Executive Dashboard UI"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOPIC FOCUS MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#e0e7ff] px-3.5 py-1.5 rounded-full">
              Knowledge Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Topics Explored in Guardian Insights
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Granular focus areas across data engineering, risk adjustment, quality performance, and care coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicFocusAreas.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f5f3ff] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#6366f1]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#e0e7ff] text-[#6366f1]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#6366f1] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {area.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {area.description}
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
      <section className="py-20 sm:py-24 bg-[#f5f3ff] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#e0e7ff] text-[#6366f1] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Thought Leadership Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Useful Ideas Should Lead to Actionable Questions
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare organizations face an unprecedented volume of clinical and financial data from disparate electronic health records, claims feeds, and diagnostic laboratories. Turning this raw information into meaningful operational progress requires clear strategic framing.
              </p>
              <p>
                Guardian Insights brings together perspectives designed to help healthcare executives, medical directors, and clinical leaders evaluate the intersection of data interoperability, clinical artificial intelligence, and care team execution.
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e0e7ff] mb-6">
            <Sparkles className="w-4 h-4 text-[#818cf8]" />
            <span>Connect Data & Healthcare Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Explore Guardian’s Healthcare Intelligence Platform?
          </h2>
          <p className="text-base sm:text-lg text-[#e0e7ff] max-w-2xl mx-auto mb-8">
            Schedule a personalized demonstration to see how Guardian unifies patient data, calculates risk scores, and drives care gap closure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#818cf8] hover:to-[#6366f1] text-white font-bold text-sm shadow-xl shadow-[#6366f1]/30 transition-all flex items-center space-x-2 group"
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
