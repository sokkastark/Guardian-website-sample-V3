import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Database,
  FileCode,
  Network,
  Activity,
  Layers,
  ArrowUpRight,
  Shield,
  Search,
  Share2,
  Workflow
} from 'lucide-react';

export default function InformationServicesPage() {
  const [activeTab, setActiveTab] = useState('chart');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // EHR Connectivity → Document Ingestion → Normalization → Patient Matching → Longitudinal Harmonization
  const clinicalPipeline = [
    {
      step: '01',
      stage: 'EHR CONNECTIVITY',
      title: 'Multi-Vendor EHR & Health System Connectivity',
      icon: Database,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Establish secure clinical data connections across multi-vendor EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, and Allscripts.',
      details: [
        'Multi-EHR data interface connectivity across ambulatory & inpatient sites',
        'C-CDA clinical document exchange & FHIR API integration',
        'Direct Secure Messaging (DSM) automated clinical record ingestion'
      ],
      output: 'Connected Multi-EHR Data Feed'
    },
    {
      step: '02',
      stage: 'DOCUMENT INGESTION',
      title: 'Clinical Chart & Document Ingestion',
      icon: FileCode,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Ingest C-CDA XML clinical summaries, physician progress notes, operative reports, and discharge summaries into a unified data repository.',
      details: [
        'Automated parsing of C-CDA structured clinical documents',
        'Extraction of encounter notes, problem lists, and medication histories',
        'Continuous clinical document upload and indexing'
      ],
      output: 'Parsed Clinical Document Corpus'
    },
    {
      step: '03',
      stage: 'NORMALIZATION',
      title: 'Semantic Code & Vocabulary Standardization',
      icon: Network,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Map local EHR code dictionaries and free-text terms into standardized healthcare terminologies including ICD-10, CPT, LOINC, and RxNorm.',
      details: [
        'Standardization of local lab and pharmacy codes to LOINC and RxNorm',
        'Harmonization of clinical diagnoses across disparate practice sites',
        'Elimination of duplicate clinical entity definitions'
      ],
      output: 'Normalized Semantic Clinical Database'
    },
    {
      step: '04',
      stage: 'PATIENT MATCHING',
      title: 'Master Patient Indexing & Chart Linking',
      icon: Search,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      summary: 'Apply probabilistic Master Patient Indexing (MPI) algorithms to link patient records across different clinics, hospitals, and health systems.',
      details: [
        'Probabilistic MPI matching engine across multi-site EHR feeds',
        'Deduplication of patient charts with audit-ready identity verification',
        'Cross-facility patient identity resolution'
      ],
      output: 'Unified Patient Master Identity'
    },
    {
      step: '05',
      stage: 'LONGITUDINAL HARMONIZATION',
      title: 'Longitudinal Patient Master Chart Creation',
      icon: Activity,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Synthesize years of clinical encounters into a single longitudinal Patient Master Chart (PMC) available across care management and population health tools.',
      details: [
        'Chronological encounter timeline assembly spanning all care settings',
        'Consolidated problem lists, medication active lists, and allergy rosters',
        'Real-time availability for analytics, care gap detection, and point-of-care alerts'
      ],
      output: 'Longitudinal Patient Master Chart'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Multi-EHR Feed Connectivity',
      description: 'Connect disparate ambulatory and acute EHR platforms into a single unified clinical integration network.',
      category: 'Interoperability',
      icon: Database
    },
    {
      title: 'C-CDA & FHIR Ingestion',
      description: 'Ingest and parse structured C-CDA XML documents, FHIR R4 resources, and clinical notes in real time.',
      category: 'Document Parsing',
      icon: FileCode
    },
    {
      title: 'Master Patient Indexing (MPI)',
      description: 'Advanced probabilistic matching algorithms that resolve patient identities across multi-site health systems.',
      category: 'Identity Resolution',
      icon: Search
    },
    {
      title: 'Longitudinal Patient Master Chart',
      description: 'Synthesize multi-source clinical data into a single chronological Patient Master Chart (PMC).',
      category: 'Chart Harmonization',
      icon: Activity
    },
    {
      title: 'Direct Secure Messaging (DSM)',
      description: 'Automated DSM integration for receiving clinical summary documents and referral attachments.',
      category: 'Secure Messaging',
      icon: Share2
    },
    {
      title: 'Bi-Directional Data Exchange',
      description: 'Route care plans, risk flags, and care gap notifications back into clinician EHR workflows.',
      category: 'Workflow Exchange',
      icon: Workflow
    }
  ];

  const siblings = [
    { label: 'Claims Integration', path: '/data-integration/claims-integration', desc: 'CMS CCLF, 837/835 EDI claims, and PMPM financial data normalization.' },
    { label: 'HIE & ADT Event Streams', path: '/data-integration/hie-adt', desc: 'Real-time HL7 ADT alerts for hospital admissions, discharges, and ER visits.' },
    { label: 'Labs, Pharmacy & Other Data', path: '/data-integration/labs-pharmacy-other', desc: 'LOINC lab feeds, RxNorm medication fills, and SDoH social factor mesh.' },
    { label: 'Data Foundation', path: '/data-integration/data-foundation', desc: 'Enterprise data architecture, multi-tenant security, and semantic graph.' },
    { label: 'APIs & Mobile Integration', path: '/data-integration/apis-mobile', desc: 'FHIR APIs, secure integration framework, and mobile app integration.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6366f1]/20 via-[#4f46e5]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/data-integration" className="hover:text-white transition-colors">Data & Integration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Clinical Integration</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Multi-EHR Connectivity // Phase 6D Data Foundation Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Multi-EHR Connectivity & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a5b4fc] via-[#818cf8] to-[#c084fc]">Clinical Data Harmonization</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian connects fragmented EHR systems, ingests C-CDA clinical documents, and harmonizes disparate patient charts into a single, unified longitudinal Patient Master Chart (PMC) across multi-site health systems.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#7c3aed] hover:to-[#5b21b6] text-white font-semibold text-sm shadow-lg shadow-[#6366f1]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Clinical Integration Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/patient-intelligence/patient-360"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Patient 360</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">EHR Connectivity</div>
                <div className="text-xl font-bold text-white mt-1">Multi-Vendor Ingestion</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Document Standard</div>
                <div className="text-xl font-bold text-white mt-1">C-CDA XML & FHIR R4</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Identity Resolution</div>
                <div className="text-xl font-bold text-white mt-1">Master Patient Index</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Harmonized Chart</div>
                <div className="text-xl font-bold text-white mt-1">Patient Master Chart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#eef2ff] px-3.5 py-1.5 rounded-full">
              Clinical Integration Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Multi-EHR Data Harmonization Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian transforms fragmented clinical data feeds into a unified longitudinal patient master chart.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {clinicalPipeline.map((item, idx) => {
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${clinicalPipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {clinicalPipeline[activeStepIndex].step} — {clinicalPipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {clinicalPipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {clinicalPipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {clinicalPipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#6366f1] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-md">
                      {clinicalPipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#eef2ff] text-[#6366f1]">
                      {React.createElement(clinicalPipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Clinical Integration Engine</h4>
                      <p className="text-xs text-[#706890]">Guardian Data Layer</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Pipeline State:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Feed</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Format Support:</span>
                      <span className="text-[#1c1636]">C-CDA XML & FHIR R4</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#6366f1] font-bold">{clinicalPipeline[activeStepIndex].output}</span>
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
              Longitudinal Clinical Master Chart View
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              See how multi-EHR clinical feeds consolidate into unified patient charts and executive platform dashboards.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'chart'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#eef2ff]'
              }`}
            >
              Patient 360 Master Chart
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#eef2ff]'
              }`}
            >
              Platform Data Dashboard
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'chart' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Patient Master Chart (PMC) Longitudinal View</h3>
                    <p className="text-xs text-[#706890]">Consolidated view of multi-source clinical encounters, diagnoses, and medication histories.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-full">
                    ui-patient-360.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-patient-360.png"
                    alt="Guardian Patient 360 Clinical Integration UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Main Platform Executive Dashboard</h3>
                    <p className="text-xs text-[#706890]">Overview of system-wide data ingestion rates, active EHR feeds, and patient counts.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#6366f1] bg-[#eef2ff] px-3 py-1 rounded-full">
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] bg-[#eef2ff] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Clinical Integration Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting multi-EHR connectivity and clinical data harmonization.
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
              <span>Interoperability Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Breaking Down Silos Across Multi-Practice Healthcare Systems
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare delivery across Clinically Integrated Networks (CINs) and ACOs suffers from data fragmentation. When primary care providers, specialists, and hospital systems operate on different EHR platforms, patient care histories remain isolated.
              </p>
              <p>
                Guardian’s Clinical Integration layer normalizes multi-source C-CDA XML documents, progress notes, and HL7 feeds into a single longitudinal Patient Master Chart (PMC). By resolving patient identities across clinics with Master Patient Indexing (MPI), Guardian provides care teams with complete clinical context without altering existing physician EHR workflows.
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
                className="group p-6 rounded-2xl bg-[#faf9fc] border border-[#e9e5f0] hover:border-[#6366f1] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#6366f1] uppercase tracking-wider">Data Layer</span>
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
            <span>Harmonize Your Clinical Data Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Connect Your Multi-EHR Infrastructure?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how Guardian’s Clinical Integration layer connects EHR systems, ingests C-CDA documents, and builds longitudinal patient charts.
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

