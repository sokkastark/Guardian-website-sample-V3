import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Pill,
  HeartHandshake,
  Activity,
  ArrowUpRight,
  Shield,
  FileCheck,
  Search,
  Database,
  Layers
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function LabsPharmacyPage() {
  const [activeTab, setActiveTab] = useState('cardiometabolic');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Data Feed Ingestion → Standardized Normalization → Entity Graph Mesh → Clinical Correlation → Care Gap Identification
  const pipeline = [
    {
      step: '01',
      stage: 'DATA FEED INGESTION',
      title: 'Multi-Source Diagnostic & Pharmacy Feed Ingestion',
      icon: FlaskConical,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Ingest lab results, pharmacy claims, prescription fills, and supplemental clinical feeds from reference labs, PBMs, and community partners.',
      details: [
        'Automated intake of laboratory result feeds from reference labs and health system LIS',
        'Ingestion of pharmacy prescription fill feeds from PBMs and pharmacies',
        'Capture of supplemental clinical assessments, diagnostic reports, and clinical feeds'
      ],
      output: 'Multi-Source Diagnostic Payload'
    },
    {
      step: '02',
      stage: 'STANDARDIZED NORMALIZATION',
      title: 'LOINC & RxNorm Code Set Normalization',
      icon: Layers,
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      summary: 'Map local lab codes and disparate pharmacy identifiers to canonical LOINC, RxNorm, and NDC code systems for cross-network harmonization.',
      details: [
        'Automated mapping of proprietary lab result test names to standard LOINC codes',
        'Normalization of prescription medication records to RxNorm concept unique identifiers (CUIs)',
        'Standardization of quantitative lab values, reference ranges, and unit measurements'
      ],
      output: 'Harmonized Code Model'
    },
    {
      step: '03',
      stage: 'ENTITY GRAPH MESH',
      title: 'Longitudinal Patient Master Chart Linking',
      icon: Database,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Attach normalized lab test trends and medication histories directly to the longitudinal Patient Master Chart via Master Patient Indexing (MPI).',
      details: [
        'Automated entity linking attaching lab results and fill history to unified patient IDs',
        'Historical trend construction tracking lab values (e.g., HbA1c, eGFR, LDL) over time',
        'Continuous synchronization between clinical chart entries and pharmacy fill events'
      ],
      output: 'Enriched Patient Master Chart'
    },
    {
      step: '04',
      stage: 'CLINICAL CORRELATION',
      title: 'Biometric & Medication Correlation Analysis',
      icon: Activity,
      badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
      summary: 'Correlate lab value trajectories and prescription refill cadence against clinical guidelines to evaluate medication effectiveness.',
      details: [
        'Automated correlation between lab target compliance and prescription refill frequency',
        'Detection of adverse lab trends in response to newly initiated therapy regimens',
        'Integration of biometric remote patient monitoring (RPM) feeds with lab thresholds'
      ],
      output: 'Clinical Correlation Intelligence'
    },
    {
      step: '05',
      stage: 'CARE GAP IDENTIFICATION',
      title: 'Automated Diagnostic & Adherence Gap Trigger',
      icon: HeartHandshake,
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
      summary: 'Flag overdue diagnostic screenings and non-adherence events, immediately creating care management tasks to close open care gaps.',
      details: [
        'Real-time identification of overdue diabetic kidney health or A1c lab surveillance',
        'Automated outreach task generation for patients with medication adherence drops',
        'Standardized assessment scale tracking to identify clinical factors impacting treatment'
      ],
      output: 'Actionable Care Gap & Outreach Task'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'LOINC-Standardized Lab Ingestion',
      description: 'Normalize incoming laboratory test results and diagnostic panel feeds to canonical LOINC terminologies.',
      category: 'Diagnostic Feeds',
      icon: FlaskConical
    },
    {
      title: 'RxNorm Pharmacy & Medication Adherence',
      description: 'Track prescription fill histories and medication adherence metrics using RxNorm CUIs.',
      category: 'Pharmacy Intelligence',
      icon: Pill
    },
    {
      title: 'Standardized Clinical Assessment Scales',
      description: 'Ingest standardized clinical assessment scales and forms (150+ available) to surface patient risk factors.',
      category: 'Clinical Scales',
      icon: HeartHandshake
    },
    {
      title: 'Diagnostic Imaging & Report Metadata',
      description: 'Integrate imaging metadata and pathology report summaries alongside quantitative lab result trends.',
      category: 'Diagnostic Reports',
      icon: FileCheck
    },
    {
      title: 'Biometric RPM Feed Integration',
      description: 'Stream remote patient monitoring device readings directly into the longitudinal patient risk profile.',
      category: 'Biometric Feeds',
      icon: Activity
    },
    {
      title: 'Supplemental Data Normalization Engine',
      description: 'Ingest and harmonize auxiliary clinical registries, health risk assessments, and community care feeds.',
      category: 'Supplemental Data',
      icon: Search
    }
  ];

  const siblings = [
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration', desc: 'Multi-EHR connectivity, C-CDA document parsing, and longitudinal chart harmonization.' },
    { label: 'Claims Integration', path: '/data-integration/claims-integration', desc: 'CMS CCLF, 837/835 EDI claims, and PMPM financial data normalization.' },
    { label: 'HIE & ADT Integration', path: '/data-integration/hie-adt', desc: 'Real-time HL7 v2 ADT event streams, hospital ER notifications, and 30-day TCM protocols.' },
    { label: 'Data Foundation', path: '/data-integration/data-foundation', desc: 'Enterprise data architecture, multi-tenant security, and semantic graph.' },
    { label: 'APIs & Mobile Integration', path: '/data-integration/apis-mobile', desc: 'FHIR APIs, secure integration framework, and mobile app integration.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf7fd] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#281c47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#9333ea]/20 via-[#a855f7]/30 to-[#7e22ce]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#d8b4fe] mb-6">
            <Link to="/data-integration" className="hover:text-white transition-colors">Data & Integration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#a855f7]" />
            <span className="text-white">Labs, Pharmacy & Other Data</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#f3e8ff] mb-6">
              <Sparkles className="w-4 h-4 text-[#c084fc]" />
              <span>Multi-Source Diagnostic & Pharmacy Mesh // Phase 6D Data Foundation Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Labs, Pharmacy & Supplemental <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#a855f7]">Clinical Data Integration</span>
            </h1>

            <p className="text-base sm:text-lg text-[#e9d5ff] leading-relaxed mb-8">
              Guardian ingests, normalizes, and correlates LOINC laboratory test results, RxNorm pharmacy fill histories, and SDoH social factor feeds—enriching the longitudinal patient record to drive timely gap closure.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9333ea] to-[#7e22ce] hover:from-[#a855f7] hover:to-[#9333ea] text-white font-semibold text-sm shadow-lg shadow-[#9333ea]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Labs & Pharmacy Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/quality-care-gaps"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Quality & Care Gaps</span>
                <ArrowUpRight className="w-4 h-4 text-[#d8b4fe]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#d8b4fe] uppercase tracking-wider font-semibold">Lab Standard</div>
                <div className="text-xl font-bold text-white mt-1">LOINC Terminology</div>
              </div>
              <div>
                <div className="text-xs text-[#d8b4fe] uppercase tracking-wider font-semibold">Drug Standard</div>
                <div className="text-xl font-bold text-white mt-1">RxNorm Standard</div>
              </div>
              <div>
                <div className="text-xs text-[#d8b4fe] uppercase tracking-wider font-semibold">Clinical Scales</div>
                <div className="text-xl font-bold text-white mt-1">150+ Assessment Scales</div>
              </div>
              <div>
                <div className="text-xs text-[#d8b4fe] uppercase tracking-wider font-semibold">Chart Link</div>
                <div className="text-xl font-bold text-white mt-1">Master Patient Indexing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LABS & PHARMACY PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9333ea] bg-[#f3e8ff] px-3.5 py-1.5 rounded-full">
              Diagnostic & Pharmacy Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Multi-Source Diagnostic & Pharmacy Ingestion Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian transforms disparate lab values and prescription fills into a unified clinical monitoring engine.
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
                      : 'bg-[#faf7fd] text-[#625b82] border-[#e9e5f0] hover:border-[#9333ea]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#9333ea] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#c084fc]' : 'text-[#9333ea]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#faf7fd] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                        <CheckCircle2 className="w-4 h-4 text-[#9333ea] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Deliverable:</span>
                    <span className="text-xs font-bold text-[#9333ea] bg-[#f3e8ff] px-3 py-1 rounded-md">
                      {pipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#f3e8ff] text-[#9333ea]">
                      {React.createElement(pipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Diagnostic Data Engine</h4>
                      <p className="text-xs text-[#706890]">Guardian Normalization Engine</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf7fd] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Code System:</span>
                      <span className="text-purple-700 font-bold">LOINC / RxNorm Standard</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Patient Matching:</span>
                      <span className="text-emerald-600 font-bold">Master Patient Indexing</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Output Asset:</span>
                      <span className="text-[#9333ea] font-bold">{pipeline[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#faf7fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9333ea] bg-[#f3e8ff] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Cardiometabolic & Care Management UI Proof
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              See how lab monitoring trajectories, pharmacy fill adherence, and clinical care plans are visualized inside Guardian.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('cardiometabolic')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'cardiometabolic'
                  ? 'bg-[#9333ea] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f3e8ff]'
              }`}
            >
              Cardiometabolic Lab & Drug Monitoring
            </button>
            <button
              onClick={() => setActiveTab('caremgmt')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'caremgmt'
                  ? 'bg-[#9333ea] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f3e8ff]'
              }`}
            >
              Care Management Workspace
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'cardiometabolic' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Cardiometabolic & Lab Monitoring Interface</h3>
                    <p className="text-xs text-[#706890]">Tracking HbA1c, lipid profiles, renal function labs, and medication compliance.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#9333ea] bg-[#f3e8ff] px-3 py-1 rounded-full">
                    ui-cardiometabolic-care.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-cardiometabolic-care.png"
                    alt="Guardian Cardiometabolic Lab UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Care Management Workspace</h3>
                    <p className="text-xs text-[#706890]">Multi-disciplinary care plan management driven by laboratory and pharmacy insights.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#9333ea] bg-[#f3e8ff] px-3 py-1 rounded-full">
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
            )}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9333ea] bg-[#f3e8ff] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Labs, Pharmacy & Supplemental Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified capabilities from Product Profile 6.0 supporting multi-source diagnostic and prescription data normalization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf7fd] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#9333ea]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#f3e8ff] text-[#9333ea]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#9333ea] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
      <section className="py-20 sm:py-24 bg-[#faf7fd] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f3e8ff] text-[#9333ea] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Multi-Dimensional Context</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Unifying Laboratory Results, Pharmacy Refills, and Social Determinants
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Clinical charts alone rarely paint a complete picture of patient health. Diagnostic lab trends and pharmacy fill cadence provide vital longitudinal indicators of chronic disease progression and treatment compliance.
              </p>
              <p>
                Guardian’s Labs, Pharmacy & Supplemental Data layer maps disparate local test names to LOINC standards and prescription records to RxNorm concepts. By linking these diagnostic feeds with SDoH assessment data, Guardian equips clinical teams with complete longitudinal patient context to close gaps in care effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Data & Integration Navigation"
        kicker="Explore Data & Integration Family"
        tagPrefix="DATA"
        overviewLink="/data-integration"
        overviewText="View Data Overview"
        actionText="View Module"
      />

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#f3e8ff] mb-6">
            <Sparkles className="w-4 h-4 text-[#c084fc]" />
            <span>Harmonize Multi-Source Diagnostic & Pharmacy Data</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Integrate Labs, Pharmacy & Supplemental Data?
          </h2>
          <p className="text-base sm:text-lg text-[#e9d5ff] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how Guardian normalizes LOINC labs, RxNorm prescription fills, and SDoH factors into an actionable clinical data foundation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#9333ea] to-[#7e22ce] hover:from-[#a855f7] hover:to-[#9333ea] text-white font-bold text-sm shadow-xl shadow-[#9333ea]/30 transition-all flex items-center space-x-2 group"
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
