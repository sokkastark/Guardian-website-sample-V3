import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Network,
  Database,
  Layers,
  FileCode,
  Activity,
  Share2,
  ArrowUpRight,
  Shield,
  Search,
  Cpu,
  Workflow
} from 'lucide-react';

export default function ClinicalKnowledgeGraphPage() {
  const [activeTab, setActiveTab] = useState('graph');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Data Ingestion → Semantic Normalization → Entity Linking → Clinical Context → Intelligence Query
  const graphPipeline = [
    {
      step: '01',
      stage: 'DATA INGESTION',
      title: 'Multi-Source Clinical Feed Ingestion',
      icon: Database,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Ingest multi-EHR clinical records, claims data, ADT hospital feeds, pharmacy fills, and SDoH social factors in real time.',
      details: [
        'C-CDA document exchange and FHIR API ingestion',
        'Medical & pharmacy claims data integration',
        'Real-time ADT admission, discharge, and transfer notifications'
      ],
      output: 'Raw Heterogeneous Data Streams'
    },
    {
      step: '02',
      stage: 'NORMALIZATION',
      title: 'Semantic Code & Standard Normalization',
      icon: FileCode,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Map disparate local EHR codes and billing terminologies into unified healthcare standards including ICD-10, CPT, LOINC, and RxNorm.',
      details: [
        'Automated mapping of local lab & medication codes to LOINC and RxNorm',
        'Standardization of clinical diagnoses to ICD-10-CM coding hierarchies',
        'Harmonization of multi-system clinical terminology across practice sites'
      ],
      output: 'Normalized Semantic Data Repository'
    },
    {
      step: '03',
      stage: 'ENTITY LINKING',
      title: 'Master Patient Indexing & Graph Mapping',
      icon: Network,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Connect clinical entities (diagnoses, procedures, medications, encounters, providers) into a unified relational graph tied to deduplicated patient charts.',
      details: [
        'Probabilistic Master Patient Indexing (MPI) for patient matching',
        'Bi-directional relationship mapping between diagnoses, treatments, and labs',
        'Incorporation of social determinants of health (SDoH) risk factors'
      ],
      output: 'Connected Patient Entity Graph'
    },
    {
      step: '04',
      stage: 'CLINICAL CONTEXT',
      title: 'Longitudinal Context & Relationship Engine',
      icon: Activity,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Provide longitudinal clinical context across episodes of care to evaluate disease progression and uncover underlying care gaps.',
      details: [
        'Chronological encounter sequencing across inpatient, ambulatory, and ER sites',
        'Cross-encounter condition progression and risk trajectory evaluation',
        'Contextual data enrichment for clinical decision support workflows'
      ],
      output: 'Longitudinal Patient Master Chart'
    },
    {
      step: '05',
      stage: 'INTELLIGENCE QUERY',
      title: 'Real-Time Graph Query & Workflow Access',
      icon: Cpu,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Expose connected graph relationship data to predictive algorithms, point-of-care alerts, and population health analytics.',
      details: [
        'High-performance graph query engine for real-time analytics',
        'Seamless integration with Guardian NLP and suspecting rules',
        'Role-based API access for care management and population health tools'
      ],
      output: 'Queryable Intelligence Layer'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Master Patient Indexing (MPI)',
      description: 'Advanced patient matching algorithms that deduplicate records across disparate EHR systems and claims feeds.',
      category: 'Patient Matching',
      icon: Search
    },
    {
      title: 'Semantic Code Normalization',
      description: 'Standardize local clinical terms to ICD-10, CPT, LOINC, and RxNorm standard healthcare terminologies.',
      category: 'Terminology',
      icon: FileCode
    },
    {
      title: 'Longitudinal Timeline Engine',
      description: 'Synthesize years of clinical encounters, lab results, and medication fills into a single chronological timeline.',
      category: 'Timeline Analysis',
      icon: Activity
    },
    {
      title: 'SDoH Social Risk Factor Mesh',
      description: 'Integrate zip-code level and individual social risk factors (PRAPARE, Z-codes) into the patient graph model.',
      category: 'Social Determinants',
      icon: Share2
    },
    {
      title: 'Multi-EHR Data Interoperability',
      description: 'Connect heterogeneous EHR architectures (Epic, Cerner, Athena, eCW) into one unified semantic data mesh.',
      category: 'Interoperability',
      icon: Network
    },
    {
      title: 'Graph Intelligence API Layer',
      description: 'Expose relationship data to downstream analytics engines, care gap detectors, and point-of-care tools.',
      category: 'API Infrastructure',
      icon: Cpu
    }
  ];

  const siblings = [
    { label: 'Artificial Intelligence & NLP', path: '/intelligence/ai', desc: 'Clinical NLP note parsing and prospective MRA/HEDIS suspecting.' },
    { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence', desc: '30-day readmission scoring and population risk forecasting.' },
    { label: 'Intelligent Workflows', path: '/intelligence/intelligent-workflows', desc: 'Automated task routing and point-of-care care gap notifications.' },
    { label: 'Human-in-the-Loop', path: '/intelligence/human-in-the-loop', desc: 'Clinician governance, auditable evidence, and human oversight.' }
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
            <span className="text-white">Clinical Knowledge Graph</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Semantic Data Mesh // Phase 6C Intelligence Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Semantic Data Mesh Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2bbf3] via-[#b692ec] to-[#9d5cee]">Clinical Entities & Patient Context</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              The Clinical Knowledge Graph connects fragmented healthcare data streams into a structured relationship mesh. It maps diagnoses, lab results, medications, encounters, and social factors to power Guardian’s intelligence and clinical workflows.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#602ea6] hover:from-[#8b4ad8] hover:to-[#6c35b8] text-white font-semibold text-sm shadow-lg shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Knowledge Graph Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/data-integration/data-foundation"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Data Foundation</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Patient Matching</div>
                <div className="text-xl font-bold text-white mt-1">Master Patient Index</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Code Standards</div>
                <div className="text-xl font-bold text-white mt-1">ICD-10 / LOINC / RxNorm</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Data Structure</div>
                <div className="text-xl font-bold text-white mt-1">Relational Graph Mesh</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Contextual View</div>
                <div className="text-xl font-bold text-white mt-1">Patient 360 View</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATA MESH PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Knowledge Graph Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Semantic Data Mesh Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian transforms heterogeneous raw healthcare feeds into a connected clinical graph.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {graphPipeline.map((item, idx) => {
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${graphPipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {graphPipeline[activeStepIndex].step} — {graphPipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {graphPipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {graphPipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {graphPipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-md">
                      {graphPipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#f2ecf9] text-[#7b3fc7]">
                      {React.createElement(graphPipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Graph Layer Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Data Mesh</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Pipeline State:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Engine</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Target Consumer:</span>
                      <span className="text-[#1c1636]">NLP & Analytics Engine</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#7b3fc7] font-bold">{graphPipeline[activeStepIndex].output}</span>
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
              Graph-Powered Patient 360 View
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              See how connected graph entity linking surfaces unified patient histories and cross-encounter relationships.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('graph')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'graph'
                  ? 'bg-[#7b3fc7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f2ecf9]'
              }`}
            >
              Patient 360 Master Chart
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#7b3fc7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f2ecf9]'
              }`}
            >
              Platform Data Dashboard
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'graph' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Patient Master Chart (PMC) Graph View</h3>
                    <p className="text-xs text-[#706890]">Longitudinal chart view displaying linked diagnoses, medications, and encounters.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                    ui-patient-360.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-patient-360.png"
                    alt="Guardian Patient 360 Knowledge Graph UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Main Platform Dashboard</h3>
                    <p className="text-xs text-[#706890]">Executive data platform overview showing population health and graph query feeds.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                    ui-dashboard-main.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-dashboard-main.png"
                    alt="Guardian Main Platform Dashboard UI"
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Knowledge Graph Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting semantic healthcare data integration.
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
              <Network className="w-4 h-4" />
              <span>Semantic Data Mesh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Solving Healthcare Data Fragmentation with Connected Context
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare organizations manage data scattered across EHR instances, claims clearinghouses, lab providers, and state health information exchanges (HIEs). Traditional relational tables isolate clinical episodes, obscuring critical relationships between diagnoses and treatment histories.
              </p>
              <p>
                Guardian’s Clinical Knowledge Graph constructs a semantic data mesh that preserves clinical relationships across space and time. By harmonizing local codes into standardized ICD-10, LOINC, and RxNorm hierarchies, Guardian establishes the foundational context required for artificial intelligence, predictive scoring, and targeted care coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7]">
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
                className="group p-6 rounded-2xl bg-[#faf9fc] border border-[#e9e5f0] hover:border-[#7b3fc7] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider">Intelligence</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#7b3fc7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#7b3fc7] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#7b3fc7] flex items-center space-x-1">
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
            <span>Connect Your Healthcare Data Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Connect Your Healthcare Data Mesh?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how Guardian’s Clinical Knowledge Graph connects diagnoses, labs, and encounters into actionable clinical intelligence.
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

