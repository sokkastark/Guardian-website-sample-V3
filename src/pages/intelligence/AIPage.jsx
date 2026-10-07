import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  BrainCircuit,
  FileText,
  Search,
  CheckSquare,
  FileSearch,
  ArrowUpRight,
  Shield,
  Cpu,
  Layers,
  Award
} from 'lucide-react';

export default function AIPage() {
  const [activeTab, setActiveTab] = useState('mra');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Document Ingestion → Clinical NLP → Suspecting Logic → Evidence Linking → Decision Support
  const aiPipeline = [
    {
      step: '01',
      stage: 'DOCUMENT PARSING',
      title: 'Unstructured Chart & Document Ingestion',
      icon: FileText,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Ingest unstructured clinical charts, physician progress notes, hospital discharge summaries, and lab PDF reports from multi-EHR feeds.',
      details: [
        'Multi-format clinical document ingestion (C-CDA, PDF, text notes)',
        'Optical Character Recognition (OCR) for scanned medical records',
        'Document classification and provider note structure parsing'
      ],
      output: 'Parsed Clinical Document Corpus'
    },
    {
      step: '02',
      stage: 'CLINICAL NLP',
      title: 'Medical Concept & Entity Extraction',
      icon: Search,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Apply Natural Language Processing (NLP) models to extract clinical diagnoses, symptoms, lab values, and medication regimens from chart text.',
      details: [
        'Clinical entity recognition for chronic conditions & comorbidities',
        'Contextual negation detection (e.g. "no history of diabetes")',
        'Mapping of unstructured narrative terms to standard ICD-10 & SNOMED codes'
      ],
      output: 'Extracted Clinical Entities & Annotations'
    },
    {
      step: '03',
      stage: 'SUSPECTING LOGIC',
      title: 'Dual-Engine CMS-HCC & HEDIS Suspecting',
      icon: Cpu,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Cross-reference extracted clinical entities against prospective CMS-HCC (V24 & V28) and HEDIS quality measure suspecting rules.',
      details: [
        'Dual-engine CMS-HCC V24 & V28 prospective risk suspecting',
        'HEDIS quality care gap suspecting and screening identification',
        'Detection of uncaptured chronic conditions needing clinical validation'
      ],
      output: 'Prioritized Suspecting Opportunities'
    },
    {
      step: '04',
      stage: 'EVIDENCE LINKING',
      title: 'Sentence-Level Source Citation',
      icon: FileSearch,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Attach exact sentence-level text snippets and chart page numbers to every AI suspecting insight for auditability and verification.',
      details: [
        'Direct chart text snippet highlighting and page referencing',
        'Transparent clinical rationale for every suspecting recommendation',
        'Audit-ready proof trails for risk coders and clinical reviewers'
      ],
      output: 'Auditable Evidence Packages'
    },
    {
      step: '05',
      stage: 'DECISION SUPPORT',
      title: 'Point-of-Care & Reviewer Workflows',
      icon: CheckSquare,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Deliver actionable suspecting findings into clinician EHR point-of-care alerts and risk coding review dashboards for final human approval.',
      details: [
        'Point-of-care gap notifications during patient encounters',
        'Integrated risk coder chart review cockpits',
        'Clinician accept/reject feedback loops with full governance'
      ],
      output: 'Validated Clinical Documentation'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Unstructured Note Parsing',
      description: 'NLP models trained on clinical terminology to extract diagnoses and findings from progress notes and discharge summaries.',
      category: 'Clinical NLP',
      icon: FileText
    },
    {
      title: 'Dual CMS-HCC Engine (V24 & V28)',
      description: 'Prospective risk adjustment suspecting supporting both legacy V24 and current V28 CMS-HCC coding models.',
      category: 'Risk Adjustment',
      icon: Cpu
    },
    {
      title: 'HEDIS Gap Suspecting Rules',
      description: 'Automated rules engine identifying unclosed quality measures and screening gaps across attributed patient panels.',
      category: 'Quality Performance',
      icon: Award
    },
    {
      title: 'Sentence-Level Evidence Citation',
      description: 'Every suspecting flag includes exact text snippet citations and chart page numbers for complete audit transparency.',
      category: 'Clinical Governance',
      icon: FileSearch
    },
    {
      title: 'Chart Summarization Assistant',
      description: 'Synthesize years of longitudinal clinical records into structured summaries for care managers and physicians.',
      category: 'Workflow Support',
      icon: Search
    },
    {
      title: 'Conversational Outreach NLP',
      description: 'Natural language parsing for automated patient SMS/voice outreach, scheduling, and preventive screening reminders.',
      category: 'Patient Engagement',
      icon: BrainCircuit
    }
  ];

  const siblings = [
    { label: 'Clinical Knowledge Graph', path: '/intelligence/clinical-knowledge-graph', desc: 'Semantic data mesh connecting diagnoses, labs, Rx, and social factors.' },
    { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence', desc: '30-day readmission scoring and population risk forecasting.' },
    { label: 'Intelligent Workflows', path: '/intelligence/intelligent-workflows', desc: 'Automated task routing and point-of-care care gap notifications.' },
    { label: 'Human-in-the-Loop', path: '/intelligence/human-in-the-loop', desc: 'Clinician governance, auditable evidence, and human oversight.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6366f1]/20 via-[#4f46e5]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Artificial Intelligence & NLP</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Healthcare AI & NLP // Phase 6C Intelligence Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Clinical NLP & Prospective <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a5b4fc] via-[#818cf8] to-[#c084fc]">Documentation Intelligence</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian applies machine learning and natural language processing (NLP) to parse unstructured physician notes, discharge summaries, and lab reports—surfacing uncaptured chronic conditions and prospective quality care gaps with transparent evidence citations.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white font-semibold text-sm shadow-lg shadow-[#6366f1]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Healthcare AI Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/risk-adjustment"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Risk Adjustment</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">NLP Parsing</div>
                <div className="text-xl font-bold text-white mt-1">Unstructured Charts</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Risk Engine</div>
                <div className="text-xl font-bold text-white mt-1">CMS-HCC V24 & V28</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Evidence Model</div>
                <div className="text-xl font-bold text-white mt-1">Sentence Citations</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Clinical Control</div>
                <div className="text-xl font-bold text-white mt-1">Human Decision Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#eef2ff] px-3.5 py-1.5 rounded-full">
              Clinical NLP Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Document Parsing & Suspecting Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian converts unstructured chart narratives into validated, auditable clinical documentation insights.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {aiPipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#6366f1]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#6366f1] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#a5b4fc]' : 'text-[#6366f1]'}`} />
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${aiPipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {aiPipeline[activeStepIndex].step} — {aiPipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {aiPipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {aiPipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {aiPipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#6366f1] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-md">
                      {aiPipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#eef2ff] text-[#6366f1]">
                      {React.createElement(aiPipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">NLP Engine Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Intelligence Suite</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Engine Status:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Stage</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Governance Mode:</span>
                      <span className="text-[#1c1636]">Auditable Citation Link</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Output:</span>
                      <span className="text-[#6366f1] font-bold">{aiPipeline[activeStepIndex].output}</span>
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#eef2ff] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Guardian NLP & Suspecting Interface
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual screens powering prospective risk adjustment suspecting and quality gap identification.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('mra')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'mra'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#eef2ff]'
              }`}
            >
              Risk Adjustment Suspecting
            </button>
            <button
              onClick={() => setActiveTab('quality')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'quality'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#eef2ff]'
              }`}
            >
              Quality & Care Gaps Manager
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'mra' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Risk Adjustment & HCC Suspecting Cockpit</h3>
                    <p className="text-xs text-[#706890]">Dual-engine CMS-HCC V24/V28 suspecting interface with chart snippet evidence links.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-full">
                    ui-risk-stratification.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-risk-stratification.png"
                    alt="Guardian Risk Adjustment & Suspecting UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Quality & Care Gaps Cockpit</h3>
                    <p className="text-xs text-[#706890]">HEDIS and MIPS care gap suspecting dashboard with automated point-of-care alert rules.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-full">
                    ui-quality-manager.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-quality-manager.png"
                    alt="Guardian Quality & Care Gaps UI"
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#eef2ff] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Healthcare AI & NLP Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting clinical decision support and documentation intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#6366f1]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#eef2ff] text-[#6366f1]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#6366f1] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eef2ff] text-[#6366f1] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Responsible Healthcare AI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Transparent, Auditable Clinical Decision Support
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                In healthcare, artificial intelligence must operate with strict transparency. Unverifiable "black box" models create clinical liability and compliance risks. Guardian’s AI engine operates strictly as a clinician assistance tool, surfacing evidence-backed recommendations for human review.
              </p>
              <p>
                Every suspecting flag generated by Guardian’s NLP model includes sentence-level text citations, chart page links, and explicit clinical rationale. Physicians and risk coders maintain full control over documentation decisions, ensuring compliance with CMS and commercial payer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1]">
              Explore Intelligence Family
            </span>
            <h3 className="text-xl font-bold text-[#1c1636] mt-2">
              Intelligence Navigation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siblings.map((sib, idx) => (
              <Link
                key={idx}
                to={sib.path}
                className="group p-6 rounded-2xl bg-[#faf9fc] border border-[#e9e5f0] hover:border-[#6366f1] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#6366f1] uppercase tracking-wider">Intelligence</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#6366f1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#6366f1] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#6366f1] flex items-center space-x-1">
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
            <span>Elevate Your Clinical Documentation Precision</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to See Guardian’s Healthcare AI in Action?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to discover how Guardian’s NLP and prospective suspecting tools assist care teams while preserving clinical governance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white font-bold text-sm shadow-xl shadow-[#6366f1]/30 transition-all flex items-center space-x-2 group"
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

