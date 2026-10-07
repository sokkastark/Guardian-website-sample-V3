import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Database,
  Shield,
  Layers,
  Search,
  Lock,
  Workflow,
  ArrowUpRight,
  Cpu,
  Share2,
  FileCheck
} from 'lucide-react';

export default function DataIntegrationPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // INGESTION ARCHITECTURE → MULTI-TENANT SECURITY → MASTER PATIENT INDEXING → SEMANTIC DATA MODEL → ENTERPRISE GOVERNANCE
  const pipeline = [
    {
      step: '01',
      stage: 'INGESTION ARCHITECTURE',
      title: 'Heterogeneous Real-Time & Batch Ingestion Engine',
      icon: Database,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      summary: 'Ingest multi-source healthcare feeds—including EHR C-CDAs, claims 837/835, HL7 ADT, LOINC labs, and pharmacy fill files—via unified pipeline pipelines.',
      details: [
        'Continuous ingestion supporting streaming HL7 v2 and RESTful FHIR R4 interfaces',
        'Automated batch ingestion for monthly CMS CCLF, BCDA, and payer EDI claims files',
        'Scalable pipeline architecture built for enterprise healthcare data volumes'
      ],
      output: 'Multi-Source Raw Ingestion Stream'
    },
    {
      step: '02',
      stage: 'MULTI-TENANT SECURITY',
      title: 'HIPAA-Compliant Multi-Tenant Isolation & Encryption',
      icon: Lock,
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      summary: 'Protect sensitive health data with enterprise-grade AES-256 encryption at rest, TLS 1.3 in transit, and strict multi-tenant data boundaries.',
      details: [
        'Cryptographic tenant isolation guaranteeing zero cross-organization data leaks',
        'Fine-grained Role-Based Access Control (RBAC) and attribute-based security policies',
        'Comprehensive HIPAA audit logging tracking every data query and access event'
      ],
      output: 'Encrypted Multi-Tenant Data Store'
    },
    {
      step: '03',
      stage: 'MASTER PATIENT INDEXING',
      title: 'Deterministic & Probabilistic MPI Matching',
      icon: Search,
      badgeColor: 'bg-blue-50 text-[#0284c7] border-blue-200',
      summary: 'Resolve duplicate patient records across disparate health system EMRs using sophisticated deterministic and probabilistic identity algorithms.',
      details: [
        'Multi-attribute matching using Demographics, SSN, DOB, Address, and Historic Identifiers',
        'Master Patient Indexing (MPI) identity resolution linking patient records across distinct EHR systems',
        'Automated collision handling and master enterprise master patient index (EMPI) creation'
      ],
      output: 'Resolved Enterprise Master Patient ID'
    },
    {
      step: '04',
      stage: 'SEMANTIC DATA MODEL',
      title: 'Unified Patient Master Chart (PMC) & Terminology Graph',
      icon: Layers,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Synthesize harmonized data into Guardian’s Patient Master Chart (PMC), mapping code sets to standard ICD-10, CPT, LOINC, RxNorm, and SNOMED terminologies.',
      details: [
        'Canonical clinical data schema representing full longitudinal patient histories',
        'Integrated terminology engine cross-walking local EHR codes to national standards',
        'Real-time semantic graph enabling real-time clinical queries across population panels'
      ],
      output: 'Unified Patient Master Chart (PMC)'
    },
    {
      step: '05',
      stage: 'ENTERPRISE GOVERNANCE',
      title: 'Data Distribution, Provenance & API Access',
      icon: Workflow,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Provide governed downstream access to normalized clinical intelligence via FHIR APIs, BI analytics data marts, and webhooks.',
      details: [
        'Full data provenance tracking source feeds, parsing timestamps, and transformation rules',
        'Secure FHIR R4 and RESTful API endpoints for application integration',
        'Automated data quality scorecards monitoring feed latency and mapping integrity'
      ],
      output: 'Governed Data Asset & API Layer'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Enterprise Master Patient Index (MPI)',
      description: 'Deterministic and probabilistic patient record deduplication across EHR and payer databases.',
      category: 'Identity Matching',
      icon: Search
    },
    {
      title: 'Multi-Tenant Security Architecture',
      description: 'Strict HIPAA-compliant data isolation with AES-256 encryption and fine-grained Role-Based Access Control (RBAC).',
      category: 'Security & Compliance',
      icon: Lock
    },
    {
      title: 'Patient Master Chart (PMC) Model',
      description: 'Unified canonical data model combining EHR clinical charts, claims, labs, pharmacy, and ADT event histories.',
      category: 'Semantic Model',
      icon: Layers
    },
    {
      title: 'Terminology Standardization Engine',
      description: 'Automatic code set mapping converting local vendor codes to ICD-10, CPT, LOINC, RxNorm, and SNOMED.',
      category: 'Normalization',
      icon: Cpu
    },
    {
      title: 'Real-Time Stream & Batch Architecture',
      description: 'High-performance ingestion pipelines supporting continuous HL7 ADT streams and monthly claims files.',
      category: 'Data Pipelines',
      icon: Database
    },
    {
      title: 'Governance & Data Audit Trail',
      description: 'Complete data lineage and audit logging documenting feed source provenance and user access events.',
      category: 'Governance',
      icon: FileCheck
    }
  ];

  const siblings = [
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration', desc: 'Multi-EHR connectivity, C-CDA document parsing, and longitudinal chart harmonization.' },
    { label: 'Claims Integration', path: '/data-integration/claims-integration', desc: 'CMS CCLF, 837/835 EDI claims, and PMPM financial data normalization.' },
    { label: 'HIE & ADT Integration', path: '/data-integration/hie-adt', desc: 'Real-time HL7 v2 ADT event streams, hospital ER notifications, and 30-day TCM protocols.' },
    { label: 'Labs, Pharmacy & Other Data', path: '/data-integration/labs-pharmacy-other', desc: 'LOINC lab feeds, RxNorm medication fills, and SDoH social factor mesh.' },
    { label: 'APIs & Mobile Integration', path: '/data-integration/apis-mobile', desc: 'FHIR APIs, secure integration framework, and mobile app integration.' }
  ];

  return (
    <div className="min-h-screen bg-[#f4f9f8] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#1c2938] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0d9488]/25 via-[#14b8a6]/30 to-[#0284c7]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#99f6e4] mb-6">
            <Link to="/data-integration" className="hover:text-white transition-colors">Data & Integration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0d9488]" />
            <span className="text-white">Data Foundation Architecture</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#ccfbf1] mb-6">
              <Sparkles className="w-4 h-4 text-[#5eead4]" />
              <span>Enterprise Data Architecture // Phase 6D Data Foundation Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              The Enterprise Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99f6e4] via-[#2dd4bf] to-[#0d9488]">Data Foundation Architecture</span>
            </h1>

            <p className="text-base sm:text-lg text-[#ccfbf1] leading-relaxed mb-8">
              Guardian provides the unified data architecture, Master Patient Indexing (MPI), multi-tenant security, and semantic data model that powers clinical workflows and intelligence across healthcare enterprises.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0d9488] to-[#0f766e] hover:from-[#14b8a6] hover:to-[#0d9488] text-white font-semibold text-sm shadow-lg shadow-[#0d9488]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Data Architecture Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/patient-intelligence"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Patient 360 Chart</span>
                <ArrowUpRight className="w-4 h-4 text-[#99f6e4]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#99f6e4] uppercase tracking-wider font-semibold">Identity Resolution</div>
                <div className="text-xl font-bold text-white mt-1">Master Patient Indexing</div>
              </div>
              <div>
                <div className="text-xs text-[#99f6e4] uppercase tracking-wider font-semibold">Data Security</div>
                <div className="text-xl font-bold text-white mt-1">Tenant Data Isolation</div>
              </div>
              <div>
                <div className="text-xs text-[#99f6e4] uppercase tracking-wider font-semibold">Data Model</div>
                <div className="text-xl font-bold text-white mt-1">Patient Master Chart</div>
              </div>
              <div>
                <div className="text-xs text-[#99f6e4] uppercase tracking-wider font-semibold">Compliance</div>
                <div className="text-xl font-bold text-white mt-1">HIPAA & RBAC Audit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURE PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0d9488] bg-[#ccfbf1] px-3.5 py-1.5 rounded-full">
              Enterprise Data Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              5-Stage Data Ingestion, Security & Normalization Engine
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian ingests multi-source healthcare data, enforces multi-tenant security, matches identities, and publishes canonical patient charts.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {pipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#f4f9f8] text-[#625b82] border-[#e9e5f0] hover:border-[#0d9488]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#0d9488] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#2dd4bf]' : 'text-[#0d9488]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#f4f9f8] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${pipeline[activeStepIndex].badgeColor}`}>
                    <span>STAGE {pipeline[activeStepIndex].step} — {pipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {pipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {pipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {pipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#0d9488] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#0d9488] bg-[#ccfbf1] px-3 py-1 rounded-md">
                      {pipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#ccfbf1] text-[#0d9488]">
                      {React.createElement(pipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Data Foundation Component</h4>
                      <p className="text-xs text-[#706890]">Guardian Core Engine</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#f4f9f8] p-4 rounded-lg border border-[#e2f1ee] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Security Standard:</span>
                      <span className="text-teal-700 font-bold">AES-256 / TLS Encryption</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">MPI Performance:</span>
                      <span className="text-emerald-600 font-bold">Master Patient Indexing</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Stage Output:</span>
                      <span className="text-[#0d9488] font-bold">{pipeline[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#f4f9f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0d9488] bg-[#ccfbf1] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Executive Dashboard & Patient 360 Master Chart Proof
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual platform screens demonstrating enterprise population health analytics and unified Patient Master Charts.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#0d9488] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#ccfbf1]'
              }`}
            >
              Enterprise Dashboard Cockpit
            </button>
            <button
              onClick={() => setActiveTab('patient360')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'patient360'
                  ? 'bg-[#0d9488] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#ccfbf1]'
              }`}
            >
              Unified Patient 360 Master Chart
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'dashboard' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Enterprise Executive Dashboard</h3>
                    <p className="text-xs text-[#706890]">High-level population metrics, clinical quality scorecards, and financial risk baselines.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0d9488] bg-[#ccfbf1] px-3 py-1 rounded-full">
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
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Patient 360 Master Chart View</h3>
                    <p className="text-xs text-[#706890]">Longitudinal record combining EHR encounters, claims, labs, pharmacy, and ADT events.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0d9488] bg-[#ccfbf1] px-3 py-1 rounded-full">
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
            )}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0d9488] bg-[#ccfbf1] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Data Foundation Architecture Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 underpinning Guardian’s enterprise data architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f4f9f8] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#0d9488]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#ccfbf1] text-[#0d9488]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0d9488] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
      <section className="py-20 sm:py-24 bg-[#f4f9f8] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ccfbf1] text-[#0d9488] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Enterprise Reliability</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Building Healthcare Intelligence on a Rock-Solid Foundation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Advanced artificial intelligence, predictive risk models, and clinical workflows are only as reliable as the underlying data foundation. Fragmented EHR instances, duplicate patient records, and inconsistent terminologies create friction that stalls value-based care initiatives.
              </p>
              <p>
                Guardian’s Data Foundation Architecture resolves record duplication with Master Patient Indexing (MPI), normalizes code sets across vendor platforms, and guarantees enterprise security through multi-tenant data isolation. The result is a unified, trusted longitudinal record that powers intelligent clinical operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0d9488]">
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
                className="group p-6 rounded-2xl bg-[#f4f9f8] border border-[#e9e5f0] hover:border-[#0d9488] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0d9488] uppercase tracking-wider">Data Layer</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#0d9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#0d9488] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#0d9488] flex items-center space-x-1">
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#ccfbf1] mb-6">
            <Sparkles className="w-4 h-4 text-[#5eead4]" />
            <span>Establish Your Enterprise Data Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Unify Your Healthcare Data Foundation?
          </h2>
          <p className="text-base sm:text-lg text-[#ccfbf1] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to explore Guardian’s enterprise data foundation, MPI deduplication engine, and semantic Patient Master Chart architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0d9488] to-[#0f766e] hover:from-[#14b8a6] hover:to-[#0d9488] text-white font-bold text-sm shadow-xl shadow-[#0d9488]/30 transition-all flex items-center space-x-2 group"
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
