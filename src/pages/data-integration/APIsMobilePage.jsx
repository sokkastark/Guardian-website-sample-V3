import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Code,
  Shield,
  Smartphone,
  Webhook,
  Key,
  ArrowUpRight,
  Layers,
  Cpu,
  Share2,
  Tv
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function APIsMobilePage() {
  const [activeTab, setActiveTab] = useState('telemedicine');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // API GATEWAY → API AUTHENTICATION & SECURITY → FHIR R4 ENDPOINTS → REAL-TIME DATA STREAM → APPLICATION INTEGRATION
  const pipeline = [
    {
      step: '01',
      stage: 'API GATEWAY & DISCOVERY',
      title: 'Developer Portal Gateway & Interface Discovery',
      icon: Code,
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      summary: 'Centralized developer gateway for discovering REST APIs, FHIR R4 schemas, and integration documentation across enterprise systems.',
      details: [
        'Interactive API documentation and OpenAPI 3.0 endpoint catalog',
        'Rate-limiting, throttling, and API key provisioning for enterprise developer teams',
        'Developer sandbox environment for pre-production integration testing'
      ],
      output: 'Provisioned Developer Gateway Credentials'
    },
    {
      step: '02',
      stage: 'API AUTHENTICATION & SECURITY',
      title: 'API Security & Role-Based Access Control',
      icon: Key,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Authenticate external systems and third-party applications securely using Guardian’s secure API and integration framework with role-based access policies.',
      details: [
        'Secure API framework for external system connectivity',
        'Role-Based Access Control (RBAC) token validation and session governance',
        'Comprehensive audit logging and privacy controls for API queries'
      ],
      output: 'Authenticated API System Credentials'
    },
    {
      step: '03',
      stage: 'FHIR R4 ENDPOINTS',
      title: 'RESTful FHIR R4 Resource Query & Exchange',
      icon: Cpu,
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      summary: 'Execute high-throughput FHIR R4 queries for Patient, Encounter, Condition, Observation, and DiagnosticReport resources.',
      details: [
        'Standardized JSON/FHIR R4 responses with optimized query latency',
        'Support for bulk FHIR exports supporting population-level analytics exchange',
        'Bi-directional FHIR write-back endpoints for care gaps and risk score sync'
      ],
      output: 'Normalized FHIR R4 Resource Payload'
    },
    {
      step: '04',
      stage: 'REAL-TIME DATA STREAM',
      title: 'Real-Time Event Stream & Notification Dispatch',
      icon: Webhook,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Stream real-time ADT events, clinical updates, and automated notifications to connected care management platforms.',
      details: [
        'Continuous real-time stream processing for admission, discharge, and transfer events',
        'Automated event notification dispatch for high-utilizer and care gap alerts',
        'Near real-time data synchronization across connected applications'
      ],
      output: 'Dispatched Event Notification Stream'
    },
    {
      step: '05',
      stage: 'APPLICATION & EMR INTEGRATION',
      title: 'Point-of-Care EMR & Mobile Application Connectors',
      icon: Smartphone,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Connect provider EMR scheduling workflows and mobile patient engagement applications directly to Guardian.',
      details: [
        'EMR integration for appointment scheduling and clinical data synchronization',
        'Mobile application connectors supporting SMS communication workflows',
        'API scheduling integration connecting external telehealth and referral platforms'
      ],
      output: 'Connected EMR & Mobile Link'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'FHIR R4 RESTful API Engine',
      description: 'Standardized FHIR R4 resources for programmatic query and bi-directional clinical data exchange.',
      category: 'API Engine',
      icon: Cpu
    },
    {
      title: 'Secure API & Integration Framework',
      description: 'Enterprise API framework featuring role-based access control, HIPAA compliance, and audit logging.',
      category: 'Security Framework',
      icon: Key
    },
    {
      title: 'Mobile Patient Engagement Connectors',
      description: 'Connect mobile apps, patient portals, SMS workflows, and remote intake tools directly to Guardian.',
      category: 'Mobile Integration',
      icon: Smartphone
    },
    {
      title: 'EMR Integration for Scheduling',
      description: 'Schedule patients programmatically via APIs and integrate appointment streams directly from EMRs.',
      category: 'EMR Integration',
      icon: Tv
    },
    {
      title: 'Real-Time Data Processing Stream',
      description: 'Stream real-time ADT events, clinical updates, and risk alerts to external healthcare platforms.',
      category: 'Real-Time Streams',
      icon: Webhook
    },
    {
      title: 'Developer API Gateway & Portal',
      description: 'Enterprise API management featuring rate-limiting, OpenAPI specifications, and sandbox testing.',
      category: 'Developer Gateway',
      icon: Code
    }
  ];

  const siblings = [
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration', desc: 'Multi-EHR connectivity, C-CDA document parsing, and longitudinal chart harmonization.' },
    { label: 'Claims Integration', path: '/data-integration/claims-integration', desc: 'CMS CCLF, 837/835 EDI claims, and PMPM financial data normalization.' },
    { label: 'HIE & ADT Integration', path: '/data-integration/hie-adt', desc: 'Real-time HL7 v2 ADT event streams, hospital ER notifications, and 30-day TCM protocols.' },
    { label: 'Labs, Pharmacy & Other Data', path: '/data-integration/labs-pharmacy-other', desc: 'LOINC lab feeds, RxNorm medication fills, and SDoH social factor mesh.' },
    { label: 'Data Foundation', path: '/data-integration/data-foundation', desc: 'Enterprise data architecture, multi-tenant security, and semantic graph.' }
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#122b40] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0284c7]/25 via-[#38bdf8]/30 to-[#0369a1]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#7dd3fc] mb-6">
            <Link to="/data-integration" className="hover:text-white transition-colors">Data & Integration</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0284c7]" />
            <span className="text-white">APIs & Mobile Integration</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e0f2fe] mb-6">
              <Sparkles className="w-4 h-4 text-[#38bdf8]" />
              <span>FHIR R4 APIs & Integration Framework // Phase 6D Data Foundation Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Developer APIs, Real-Time Streams & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bae6fd] via-[#38bdf8] to-[#0284c7]">Mobile Integration Connectors</span>
            </h1>

            <p className="text-base sm:text-lg text-[#e0f2fe] leading-relaxed mb-8">
              Guardian delivers secure RESTful FHIR R4 APIs, real-time data streaming, and EMR scheduling connectors—connecting point-of-care EHRs and mobile apps to the central data foundation.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-semibold text-sm shadow-lg shadow-[#0284c7]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule API & Mobile Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/patient-engagement"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Patient Engagement</span>
                <ArrowUpRight className="w-4 h-4 text-[#7dd3fc]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#7dd3fc] uppercase tracking-wider font-semibold">API Standard</div>
                <div className="text-xl font-bold text-white mt-1">FHIR R4 RESTful</div>
              </div>
              <div>
                <div className="text-xs text-[#7dd3fc] uppercase tracking-wider font-semibold">Security Framework</div>
                <div className="text-xl font-bold text-white mt-1">Secure API Framework</div>
              </div>
              <div>
                <div className="text-xs text-[#7dd3fc] uppercase tracking-wider font-semibold">Event Delivery</div>
                <div className="text-xl font-bold text-white mt-1">Real-Time Event Stream</div>
              </div>
              <div>
                <div className="text-xs text-[#7dd3fc] uppercase tracking-wider font-semibold">EHR Integration</div>
                <div className="text-xl font-bold text-white mt-1">EMR Scheduling APIs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. API PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1.5 rounded-full">
              Developer & Mobile Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              5-Stage Developer API & Mobile Integration Gateway
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How third-party applications, mobile devices, and EHR systems connect securely to Guardian.
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
                      : 'bg-[#f0f9ff] text-[#625b82] border-[#e9e5f0] hover:border-[#0284c7]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#0284c7] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#38bdf8]' : 'text-[#0284c7]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#f0f9ff] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                        <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Deliverable:</span>
                    <span className="text-xs font-bold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-md">
                      {pipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#e0f2fe] text-[#0284c7]">
                      {React.createElement(pipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">API Gateway Hub</h4>
                      <p className="text-xs text-[#706890]">Guardian Integration Engine</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#f0f9ff] p-4 rounded-lg border border-[#e0f2fe] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Endpoint Standard:</span>
                      <span className="text-sky-700 font-bold">FHIR R4 / JSON REST</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Security Framework:</span>
                      <span className="text-emerald-600 font-bold">Secure API Framework</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#0284c7] font-bold">{pipeline[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#f0f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Telemedicine & Referral Management Interface Proof
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              See how mobile telehealth sessions and referral management workflows interface seamlessly with Guardian APIs.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'telemedicine'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Telemedicine & Mobile Sessions
            </button>
            <button
              onClick={() => setActiveTab('referrals')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'referrals'
                  ? 'bg-[#0284c7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#e0f2fe]'
              }`}
            >
              Referral Routing Workspace
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'telemedicine' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Telemedicine & Mobile Session Interface</h3>
                    <p className="text-xs text-[#706890]">Mobile video encounters, remote patient intake, and digital care navigation.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">
                    ui-telemedicine.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-telemedicine.png"
                    alt="Guardian Telemedicine UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Referral Manager & Routing Workspace</h3>
                    <p className="text-xs text-[#706890]">Closed-loop referral routing integrated via secure API endpoints.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full">
                    ui-referral-manager.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-referral-manager.png"
                    alt="Guardian Referral Manager UI"
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              APIs & Mobile Integration Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting developer APIs, real-time data streams, and mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f0f9ff] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#0284c7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#e0f2fe] text-[#0284c7]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0284c7] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
      <section className="py-20 sm:py-24 bg-[#f0f9ff] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Interoperability Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Extending Clinical Intelligence Beyond System Boundaries
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Value-based healthcare requires seamless data availability across mobile apps, provider point-of-care toolbars, and third-party systems. Closed vendor ecosystems limit care team collaboration and frustrate digital transformation.
              </p>
              <p>
                Guardian’s APIs & Mobile Integration layer unlocks modern interoperability using FHIR R4 endpoints, RESTful data exchange, and real-time data streaming pipelines. By embedding actionable risk insights and care gap alerts directly into clinician workflows and mobile tools, Guardian powers connected care across healthcare networks.
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
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e0f2fe] mb-6">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            <span>Connect Applications via Secure FHIR APIs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Build on Guardian APIs & Mobile Connectors?
          </h2>
          <p className="text-base sm:text-lg text-[#e0f2fe] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to discover how Guardian’s FHIR R4 APIs, real-time data streams, and EMR connectors power seamless application integration.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-bold text-sm shadow-xl shadow-[#0284c7]/30 transition-all flex items-center space-x-2 group"
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
