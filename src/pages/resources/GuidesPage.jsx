import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  FileCheck,
  Shield,
  Layers,
  Search,
  ArrowUpRight,
  Cpu,
  Workflow,
  Clock,
  Compass
} from 'lucide-react';

export default function GuidesPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Operational Playbook Steps
  const playbookSteps = [
    {
      step: '01',
      stage: 'DATA INTEGRATION ASSESS',
      title: 'Evaluating Healthcare Data Feeds & Connectivity',
      icon: Cpu,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Assessing organization-wide electronic medical record (EMR) instances, claims EDI files, and real-time ADT feeds.',
      details: [
        'Inventorying acute hospital ADT registration feeds and HIE interfaces',
        'Reviewing monthly CMS CCLF (1-9) and 837/835 EDI claims data ingestion requirements',
        'Establishing Master Patient Indexing (MPI) deduplication criteria across network panels'
      ],
      output: 'Data Readiness Assessment'
    },
    {
      step: '02',
      stage: 'RISK & QUALITY MODELING',
      title: 'Configuring CMS-HCC Risk & HEDIS / MIPS Measures',
      icon: Shield,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      summary: 'Establishing prospective and retrospective risk adjustment workflows and clinical quality measure management.',
      details: [
        'Aligning dual CMS-HCC V24 and V28 risk model suspecting rules',
        'Configuring automated care gap rules for MSSP, MIPS, and HEDIS quality programs',
        'Setting up risk coder chart audit protocols and clinical documentation workflows'
      ],
      output: 'Risk & Quality Configuration'
    },
    {
      step: '03',
      stage: 'CARE MANAGEMENT DEPLOY',
      title: 'Deploying Multidisciplinary Care Coordination',
      icon: Workflow,
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      summary: 'Configuring standardized clinical assessment scales, care plan templates, and automated ADT alert routing.',
      details: [
        'Integrating 150+ standardized assessment scales into clinical care plans',
        'Configuring 48-hour post-discharge contact tasks for 30-day TCM outreach',
        'Setting up chronic care management (CCM, TCM, RPM, PCM) enrollment queues'
      ],
      output: 'Care Coordination Protocol'
    },
    {
      step: '04',
      stage: 'PERFORMANCE EVALUATION',
      title: 'Executive KPI Monitoring & Shared Savings Alignment',
      icon: Clock,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Monitoring population PMPM financial trends, quality performance scorecards, and PCP gap closure status.',
      details: [
        'Tracking real-time PMPM cost baselines against CMS historical benchmarks',
        'Evaluating provider-level quality scorecards and gap closure compliance',
        'Measuring readmission reduction rates following 30-day TCM protocol triggers'
      ],
      output: 'Performance Scorecard Review'
    }
  ];

  // Verified Educational Guide Frameworks
  const guideFrameworks = [
    {
      title: 'Value-Based Care Data Integration Guide',
      description: 'Reference architecture covering multi-EHR connectivity, C-CDA document parsing, and Master Patient Indexing.',
      category: 'Interoperability',
      icon: Cpu
    },
    {
      title: 'CMS-HCC Risk Adjustment Playbook',
      description: 'Practical guide to managing dual V24/V28 model transitions, prospective gap suspecting, and chart audits.',
      category: 'Risk Adjustment',
      icon: Shield
    },
    {
      title: 'Transition of Care & ADT Alert Protocol',
      description: 'Operational roadmap for closing the 30-day post-discharge window and reducing hospital readmissions.',
      category: 'Care Transitions',
      icon: Clock
    },
    {
      title: 'Clinical Quality & Care Gap Management',
      description: 'Guide to establishing continuous surveillance for HEDIS, MIPS, and MSSP quality scorecards.',
      category: 'Quality Manager',
      icon: FileCheck
    },
    {
      title: 'Standardized Clinical Assessments Guide',
      description: 'Overview of implementing 150+ validated clinical assessment scales inside personalized care plans.',
      category: 'Care Coordination',
      icon: Workflow
    },
    {
      title: 'Developer APIs & Integration Architecture',
      description: 'Technical reference guide covering FHIR R4 APIs, RESTful endpoints, and point-of-care EMR connectors.',
      category: 'Developer APIs',
      icon: BookOpen
    }
  ];

  const siblings = [
    { label: 'Insights & Perspectives', path: '/resources/insights', desc: 'Perspectives on healthcare data, clinical intelligence, and value-based strategy.' },
    { label: 'Case Studies', path: '/resources/case-studies', desc: 'Verified Guardian capability evaluation frameworks and value delivery models.' },
    { label: 'Webinars', path: '/resources/webinars', desc: 'Educational presentation sessions covering value-based care and clinical intelligence.' },
    { label: 'Product Tours', path: '/resources/product-tours', desc: 'Guided visual walkthroughs of Guardian platform software capabilities.' },
    { label: 'Video Library', path: '/resources/videos', desc: 'Feature overview briefs and platform media briefings.' }
  ];

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#152e25] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#059669]/25 via-[#10b981]/30 to-[#0d9488]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#a7f3d0] mb-6">
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#059669]" />
            <span className="text-white">Educational & Operational Guides</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#d1fae5] mb-6">
              <Sparkles className="w-4 h-4 text-[#34d399]" />
              <span>Operational Playbooks // Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Practical Educational Guides & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7f3d0] via-[#34d399] to-[#059669]">Operational Playbooks</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d1fae5] leading-relaxed mb-8">
              Explore step-by-step operational guides designed to help healthcare organizations evaluate data integration readiness, configure CMS-HCC risk models, and standardize care management workflows.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-sm shadow-lg shadow-[#059669]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Platform Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/insights"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Insights</span>
                <ArrowUpRight className="w-4 h-4 text-[#a7f3d0]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#a7f3d0] uppercase tracking-wider font-semibold">Playbook Framework</div>
                <div className="text-xl font-bold text-white mt-1">Operational Steps</div>
              </div>
              <div>
                <div className="text-xs text-[#a7f3d0] uppercase tracking-wider font-semibold">Data Guidance</div>
                <div className="text-xl font-bold text-white mt-1">EMR & Claims Ingestion</div>
              </div>
              <div>
                <div className="text-xs text-[#a7f3d0] uppercase tracking-wider font-semibold">Risk Guidance</div>
                <div className="text-xl font-bold text-white mt-1">CMS-HCC V24 / V28</div>
              </div>
              <div>
                <div className="text-xs text-[#a7f3d0] uppercase tracking-wider font-semibold">Care Guidance</div>
                <div className="text-xl font-bold text-white mt-1">150+ Assessment Scales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLAYBOOK PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#d1fae5] px-3.5 py-1.5 rounded-full">
              Operational Implementation Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Actionable Value-Based Care Implementation Roadmap
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian Guides break down complex healthcare data, risk adjustment, and care management initiatives into clear execution stages.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {playbookSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#f0fdf4] text-[#625b82] border-[#e9e5f0] hover:border-[#059669]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#059669] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#34d399]' : 'text-[#059669]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#f0fdf4] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${playbookSteps[activeStepIndex].badgeColor}`}>
                    <span>STAGE {playbookSteps[activeStepIndex].step} — {playbookSteps[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {playbookSteps[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {playbookSteps[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {playbookSteps[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Deliverable:</span>
                    <span className="text-xs font-bold text-[#059669] bg-[#d1fae5] px-3 py-1 rounded-md">
                      {playbookSteps[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#d1fae5] text-[#059669]">
                      {React.createElement(playbookSteps[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Playbook Component</h4>
                      <p className="text-xs text-[#706890]">Guardian Operational Framework</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#f0fdf4] p-4 rounded-lg border border-[#d1fae5] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Framework Standard:</span>
                      <span className="text-emerald-700 font-bold">Product Profile 6.0</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Implementation Stage:</span>
                      <span className="text-teal-600 font-bold">{playbookSteps[activeStepIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Milestone Asset:</span>
                      <span className="text-[#059669] font-bold">{playbookSteps[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#d1fae5] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Care Management Workspace Evidence
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              See how standardized clinical assessment scales, care plans, and multidisciplinary tasks are managed in Guardian.
            </p>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
              <div>
                <h3 className="text-base font-bold text-[#1c1636]">Care Management & Multidisciplinary Workspace</h3>
                <p className="text-xs text-[#706890]">Care plan builder, assessment scale tracking, and care coordination task queues.</p>
              </div>
              <span className="text-xs font-semibold text-[#059669] bg-[#d1fae5] px-3 py-1 rounded-full">
                ui-care-management.png
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
              <img
                src="/images/product-ui/ui-care-management.png"
                alt="Guardian Care Management UI"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUIDES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#d1fae5] px-3.5 py-1.5 rounded-full">
              Reference Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Educational Reference Guide Playbooks
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified topic playbooks grounded in Product Profile 6.0 capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideFrameworks.map((guide, idx) => {
              const IconComponent = guide.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f0fdf4] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#059669]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#d1fae5] text-[#059669]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#059669] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {guide.description}
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
      <section className="py-20 sm:py-24 bg-[#f0fdf4] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d1fae5] text-[#059669] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Operational Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Making Complex Value-Based Care Workflows Manageable
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Navigating value-based care requires clear operational frameworks across multiple clinical domains. From configuring Master Patient Indexing (MPI) deduplication to standardizing 150+ clinical assessment scales, healthcare teams need structured guidance.
              </p>
              <p>
                Guardian Guides provide practical reference architectures designed to break down complex healthcare data, risk adjustment, and care management initiatives into clear, actionable steps.
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
              Explore Resources Family
            </span>
            <h3 className="text-xl font-bold text-[#1c1636] mt-2">
              Resources Navigation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siblings.map((sib, idx) => (
              <Link
                key={idx}
                to={sib.path}
                className="group p-6 rounded-2xl bg-[#f0fdf4] border border-[#e9e5f0] hover:border-[#059669] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">Resource Center</span>
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#d1fae5] mb-6">
            <Sparkles className="w-4 h-4 text-[#34d399]" />
            <span>Operationalize Healthcare Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Put Guardian Guides into Action?
          </h2>
          <p className="text-base sm:text-lg text-[#d1fae5] max-w-2xl mx-auto mb-8">
            Schedule a personalized demonstration to see how Guardian’s operational playbooks and software platform streamline care coordination.
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
