import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  UserCheck,
  Shield,
  Eye,
  FileCheck,
  Lock,
  ArrowUpRight,
  Cpu,
  Workflow,
  CheckSquare
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function HumanInTheLoopPage() {
  const [activeTab, setActiveTab] = useState('caremgmt');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Algorithmic Discovery → Transparent Citation → Clinician Cockpit → Clinical Judgment → Auditable Action
  const governancePipeline = [
    {
      step: '01',
      stage: 'ALGORITHMIC DISCOVERY',
      title: 'Software Signal & Suspecting Discovery',
      icon: Cpu,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Software algorithms and NLP engines detect potential risk flags, open care gaps, and uncaptured chronic condition suspecting opportunities.',
      details: [
        'Automated screening across structured claims and unstructured EHR charts',
        'Identification of potential HCC risk adjustment suspecting candidates',
        'Detection of unclosed HEDIS and MSSP quality measures'
      ],
      output: 'Unvalidated Algorithmic Insight'
    },
    {
      step: '02',
      stage: 'TRANSPARENT CITATION',
      title: 'Sentence-Level Source Citation',
      icon: Eye,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Attach exact sentence-level text snippets, chart page numbers, and clinical rationale to every recommendation for human verification.',
      details: [
        'Direct linking to source progress notes, lab PDFs, and claims records',
        'Transparent clinical rationale explaining why an insight was flagged',
        'Elimination of "black box" automated decision making'
      ],
      output: 'Auditable Evidence Citation Package'
    },
    {
      step: '03',
      stage: 'CLINICIAN COCKPIT',
      title: 'Dedicated Professional Review Cockpit',
      icon: UserCheck,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Present findings directly into care manager, risk coder, and physician review workspaces designed for fast, informed evaluation.',
      details: [
        'Integrated chart review interface with side-by-side evidence preview',
        'Role-based task queues tailored for care managers and risk coders',
        'Single-click decision workflows (Accept, Modify, Reject)'
      ],
      output: 'Clinician Review Interface'
    },
    {
      step: '04',
      stage: 'CLINICAL JUDGMENT',
      title: 'Human Validation & Professional Judgment',
      icon: Shield,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Licensed healthcare professionals evaluate the cited evidence and apply clinical judgment to accept, adjust, or reject findings.',
      details: [
        'Final clinical decision making retained strictly by human professionals',
        'Option to add clinical documentation notes and intervention details',
        'Continuous feedback loops that refine software suspecting accuracy'
      ],
      output: 'Validated Clinical Decision'
    },
    {
      step: '05',
      stage: 'AUDITABLE ACTION',
      title: 'Audit-Ready Action & Record Update',
      icon: FileCheck,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Commit approved decisions into care plans, risk submissions, or EHR charts with complete audit logging and compliance tracking.',
      details: [
        'Immutable logging of clinician sign-off, timestamp, and user identity',
        'EHR chart update and care plan goal commitment',
        'Audit-ready submission compliance for CMS and payer reviews'
      ],
      output: 'Committed & Audited Clinical Action'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Clinician Review Workflows',
      description: 'Dedicated interfaces ensuring all automated risk flags and care gaps receive human review before clinical action.',
      category: 'Clinical Oversight',
      icon: UserCheck
    },
    {
      title: 'Sentence-Level Evidence Citation',
      description: 'Direct chart snippet highlighting and page referencing attached to every software suspecting recommendation.',
      category: 'Transparency',
      icon: Eye
    },
    {
      title: 'Role-Based Access Control',
      description: 'Configurable user permissions ensuring care managers, risk coders, and physicians access appropriate tools.',
      category: 'Security & Governance',
      icon: Lock
    },
    {
      title: 'Accept/Reject Feedback Loops',
      description: 'Structured feedback mechanisms that log clinician decisions to refine rule thresholds and suspecting algorithms.',
      category: 'Model Governance',
      icon: Cpu
    },
    {
      title: 'Immutable Compliance Audit Logs',
      description: 'Comprehensive audit trails tracking every software recommendation, clinician review timestamp, and final action.',
      category: 'Compliance Audit',
      icon: FileCheck
    },
    {
      title: 'Technology-Enabled Care Workspaces',
      description: 'Shared care coordination tools empowering care managers, navigators, and account executives to work efficiently.',
      category: 'Team Support',
      icon: Workflow
    }
  ];

  const siblings = [
    { label: 'Clinical Knowledge Graph', path: '/intelligence/clinical-knowledge-graph', desc: 'Semantic data mesh connecting diagnoses, labs, Rx, and social factors.' },
    { label: 'Artificial Intelligence & NLP', path: '/intelligence/ai', desc: 'Clinical NLP note parsing and prospective MRA/HEDIS suspecting.' },
    { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence', desc: '30-day readmission scoring and population risk forecasting.' },
    { label: 'Intelligent Workflows', path: '/intelligence/intelligent-workflows', desc: 'Automated task routing and point-of-care care gap notifications.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7b3fc7]/20 via-[#4e2882]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Human-in-the-Loop</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Clinical Governance // Phase 6C Intelligence Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Software Intelligence Supported by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2bbf3] via-[#b692ec] to-[#9d5cee]">Expert Clinical Governance</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian pairs data intelligence with human clinical expertise. Software algorithms surface insights, while licensed care managers, risk coders, and physicians maintain full control over clinical decisions and documentation accuracy.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#602ea6] hover:from-[#8b4ad8] hover:to-[#6c35b8] text-white font-semibold text-sm shadow-lg shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Governance Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions/care-management-teams"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Care Teams</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Clinical Control</div>
                <div className="text-xl font-bold text-white mt-1">Human Decision Authority</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Audit Model</div>
                <div className="text-xl font-bold text-white mt-1">Sentence-Level Links</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Governance</div>
                <div className="text-xl font-bold text-white mt-1">Role-Based Access</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Model Tuning</div>
                <div className="text-xl font-bold text-white mt-1">Accept/Reject Logs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GOVERNANCE PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Clinical Oversight Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Software Signal to Clinician Verification Flow
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian maintains clinician oversight at every step from initial algorithmic discovery to audited action.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {governancePipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#7b3fc7]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#7b3fc7] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#c7adfa]' : 'text-[#7b3fc7]'}`} />
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${governancePipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {governancePipeline[activeStepIndex].step} — {governancePipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {governancePipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {governancePipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {governancePipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-md">
                      {governancePipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#f2ecf9] text-[#7b3fc7]">
                      {React.createElement(governancePipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Governance Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Governance Framework</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Oversight Mode:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Human Validated</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Reviewer Role:</span>
                      <span className="text-[#1c1636]">Care Manager & Risk Coder</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#7b3fc7] font-bold">{governancePipeline[activeStepIndex].output}</span>
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Clinician & Care Team Workspaces
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual interface screens where healthcare professionals validate software recommendations and build care plans.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('caremgmt')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'caremgmt'
                  ? 'bg-[#7b3fc7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f2ecf9]'
              }`}
            >
              Care Team Workspace
            </button>
            <button
              onClick={() => setActiveTab('careplan')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'careplan'
                  ? 'bg-[#7b3fc7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f2ecf9]'
              }`}
            >
              Care Plan Builder Interface
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'caremgmt' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Care Team Coordination Cockpit</h3>
                    <p className="text-xs text-[#706890]">Prioritized patient queues and clinician validation workspaces.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                    ui-care-management.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-care-management.png"
                    alt="Guardian Care Management Workspace UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Personal Care Plan Builder Interface</h3>
                    <p className="text-xs text-[#706890]">Interactive clinician care plan authoring tool with 150+ standardized assessment tools.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                    ui-care-plan-builder.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-care-plan-builder.png"
                    alt="Guardian Care Plan Builder UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            )}
            <p className="text-xs text-[#716b89] text-center mt-3 leading-relaxed italic">
              *Illustrative sample demonstration data. Patient records, metrics, and outcomes are for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Clinical Governance & Oversight Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting clinician-in-the-loop validation and audit compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#7b3fc7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#f2ecf9] text-[#7b3fc7]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#7b3fc7] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Technology + Human Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Software Intelligence Grounded in Clinical Responsibility
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                In healthcare, software should augment human intelligence—never attempt to replace it. Guardian is built on the fundamental principle that licensed healthcare professionals must maintain ultimate authority over clinical care and documentation decisions.
              </p>
              <p>
                By providing sentence-level evidence citations, transparent rationale, and single-click approval workflows, Guardian enables care managers, nurses, and risk coders to operate at peak efficiency while guaranteeing full auditability and clinical safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Intelligence Navigation"
        kicker="Explore Intelligence Family"
        tagPrefix="AI"
        overviewLink="/intelligence"
        overviewText="View Intelligence Overview"
      />

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
            <Sparkles className="w-4 h-4 text-[#bd93f9]" />
            <span>Empower Your Healthcare Professionals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Combine Software Intelligence with Clinical Governance?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to discover how Guardian’s human-in-the-loop workflows streamline clinical operations while preserving complete auditability.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#602ea6] hover:from-[#8b4ad8] hover:to-[#6c35b8] text-white font-bold text-sm shadow-xl shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/intelligence"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Intelligence Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

