import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Sparkles, 
  Network, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  Cpu, 
  Server, 
  Activity, 
  Layers, 
  Zap, 
  Radio,
  FileCode,
  Smartphone,
  Globe
} from 'lucide-react';

export default function DataIntegrationOverviewPage() {
  const [activeTab, setActiveTab] = useState('clinical-integration');

  const pipelineSteps = [
    {
      num: '01',
      label: 'INGEST',
      title: 'Multi-Source Feed Ingestion',
      desc: 'Connect EHRs, claims (837/835), HIE feeds, ADT events, labs, and CCLF/BCDA bulk data.',
      gradient: 'from-[#4f46e5] to-[#7c3aed]'
    },
    {
      num: '02',
      label: 'PARSE & MAP',
      title: 'Format Parsing & MPI Matching',
      desc: 'Parse FHIR R4, HL7 v2, and C-CDA files with Master Patient Index (MPI) deterministic matching.',
      gradient: 'from-[#059669] to-[#10b981]'
    },
    {
      num: '03',
      label: 'NORMALIZE',
      title: 'Semantic Code Standardization',
      desc: 'Convert local EHR codes to standard ICD-10, CPT, LOINC, and RxNorm terminologies.',
      gradient: 'from-[#7b3fc7] to-[#9565d2]'
    },
    {
      num: '04',
      label: 'ENRICH',
      title: 'Longitudinal Record Synthesis',
      desc: 'Synthesize data into longitudinal patient charts, RAF calculators, and care gap engines.',
      gradient: 'from-[#ff7a57] to-[#ea580c]'
    },
    {
      num: '05',
      label: 'DELIVER',
      title: 'Real-time Workflow Delivery',
      desc: 'Expose real-time data to care manager workspaces, point-of-care alerts, and REST APIs.',
      gradient: 'from-[#0891b2] to-[#0284c7]'
    }
  ];

  const integrationPillars = [
    {
      id: 'clinical-integration',
      title: 'Clinical Integration',
      path: '/data-integration/clinical-integration',
      tagline: 'EHR INTEROPERABILITY & C-CDA',
      headline: 'Bi-directional clinical data exchange across top EHR platforms.',
      description: 'Connect EHR systems across hospital networks and ambulatory practices. Extract clinical encounters, progress notes, vital signs, and problem lists using C-CDA XML parsers and Direct Secure Messaging (DSM).',
      icon: Network,
      gradient: 'from-[#4f46e5] via-[#6366f1] to-[#7c3aed]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.22)]',
      accentColor: 'text-[#4f46e5]',
      badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5]',
      capabilities: [
        'Bi-Directional EHR Integration',
        'Direct Secure Messaging (DSM) Exchange',
        'C-CDA / CCD Document Parsers',
        'Direct Point-of-Care Data Ingestion'
      ]
    },
    {
      id: 'claims-integration',
      title: 'Claims Integration',
      path: '/data-integration/claims-integration',
      tagline: 'PAYER CLAIMS & BCDA FEEDS',
      headline: 'Ingest 837/835 claims, CCLF files, and payer feed streams.',
      description: 'Aggregate historical and real-time medical, pharmacy, and institutional claims. Ingest CMS Bulk BCDA and CCLF files to construct financial risk models and PMPY cost trajectories.',
      icon: FileText,
      gradient: 'from-[#059669] via-[#10b981] to-[#0d9488]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.22)]',
      accentColor: 'text-[#059669]',
      badgeBg: 'bg-[#059669]/10 text-[#059669]',
      capabilities: [
        'CMS BCDA & CCLF Bulk Data Connectors',
        '837/835 Claims File Parsers',
        'Historical Cost & Utilization Aggregation',
        'Financial Risk Feed Standardization'
      ]
    },
    {
      id: 'hie-adt',
      title: 'HIE & ADT Event Monitoring',
      path: '/data-integration/hie-adt',
      tagline: 'REAL-TIME ADT EVENT STREAMING',
      headline: 'Real-time ADT event alerts for admissions, discharges, and transfers.',
      description: 'Stream real-time ADT messages from regional HIEs, hospitals, and emergency departments. Automatically trigger transition-of-care protocols and high-utilizer alerts within seconds of discharge.',
      icon: Radio,
      gradient: 'from-[#ff7a57] via-[#f97316] to-[#ea580c]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(255,122,87,0.22)]',
      accentColor: 'text-[#ea580c]',
      badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c]',
      capabilities: [
        'Real-Time ADT Alert Streaming',
        'eHealth Exchange & CareQuality Feeds',
        'ED High-Utilizer Real-Time Alerts',
        'Automated Discharge Summary Retrieval'
      ]
    },
    {
      id: 'labs-pharmacy',
      title: 'Labs, Pharmacy & Other Data',
      path: '/data-integration/labs-pharmacy-other',
      tagline: 'DIAGNOSTIC & PHARMACY FEEDS',
      headline: 'Connect lab result feeds, pharmacy fill records, and SDOH data.',
      description: 'Integrate diagnostic lab result feeds (LOINC), pharmacy dispensing history (RxNorm), and social determinants of health (SDOH) screenings into the patient longitudinal record.',
      icon: Database,
      gradient: 'from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7]',
      capabilities: [
        'LOINC Lab Result Data Normalization',
        'RxNorm Pharmacy Fill & Adherence Feeds',
        'Radiology & Diagnostic Report Parsing',
        'SDOH Social Risk Screening Feeds'
      ]
    },
    {
      id: 'data-foundation',
      title: 'Data Foundation & Mesh',
      path: '/data-integration/data-foundation',
      tagline: 'CORE DATA MESH & SECURITY',
      headline: 'High-scale, HITRUST e1 certified healthcare data architecture.',
      description: 'The core operational data store housing Master Patient Index (MPI) matching, longitudinal record synthesis, enterprise encryption, and multi-tenant security controls.',
      icon: Server,
      gradient: 'from-[#1c1636] via-[#2e1065] to-[#7b3fc7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#1c1636] text-white',
      capabilities: [
        'Master Patient Index (MPI) Matching',
        'Longitudinal Patient Record Engine',
        'HITRUST e1 & SOC 2 Certified Cloud',
        'FHIR R4 Operational Data Store'
      ]
    },
    {
      id: 'apis-mobile',
      title: 'APIs & Mobile Integration',
      path: '/data-integration/apis-mobile',
      tagline: 'DEVELOPER APIS & WEBHST',
      headline: 'Secure RESTful APIs and webhooks for custom digital health apps.',
      description: 'Empower developer teams with secure REST APIs, FHIR endpoints, and real-time event webhooks to extend Guardian intelligence into custom portals and mobile applications.',
      icon: Smartphone,
      gradient: 'from-[#0891b2] via-[#06b6d4] to-[#0284c7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.22)]',
      accentColor: 'text-[#0891b2]',
      badgeBg: 'bg-[#0891b2]/10 text-[#0891b2]',
      capabilities: [
        'Secure RESTful & FHIR R4 APIs',
        'Real-Time Event Webhooks Engine',
        'Mobile SDK & Patient Portal Integration',
        'Developer Portal & Sandbox Environment'
      ]
    }
  ];

  const uiShowcase = [
    {
      id: 'clinical-integration',
      title: 'Real-Time ADT Alert Ingestion',
      path: '/data-integration/hie-adt',
      desc: 'Live streaming of emergency department visits and hospital discharge alerts across regional HIEs.',
      image: '/images/appliction images/ui-adt-notifications.png',
      highlights: ['Real-Time ADT Streaming', 'eHealth Exchange', 'Discharge Alerting']
    },
    {
      id: 'claims-integration',
      title: 'Patient 360 & Claims Aggregation',
      path: '/data-integration/claims-integration',
      desc: 'Synthesized longitudinal chart connecting clinical EHR records with payer 837/835 claims lines.',
      image: '/images/appliction images/ui-patient-360.png',
      highlights: ['Claims & Clinical Mesh', 'MPI Matching', 'Cost Trajectory']
    },
    {
      id: 'hie-adt',
      title: 'Population Data Ingestion Engine',
      path: '/data-integration/clinical-integration',
      desc: 'Multi-source ingestion pipeline aggregating CCLF, BCDA, and ambulatory EHR feeds into cohort analytics.',
      image: '/images/appliction images/ui-pop-health-analytics.png',
      highlights: ['Multi-Source Ingestion', 'LOINC/RxNorm Normalization', 'Cohort Builder']
    },
    {
      id: 'apis-mobile',
      title: 'Referral & Network Integration',
      path: '/data-integration/apis-mobile',
      desc: 'Specialist referral routing and prior authorization tracking integrated via secure REST APIs.',
      image: '/images/appliction images/ui-referral-manager.png',
      highlights: ['RESTful & FHIR APIs', 'In-Network Routing', 'Webhooks Engine']
    }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (PANORAMIC CORPORATE HERO BANNER)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0d1527] text-white overflow-hidden border-b border-[#1c1636]">
        
        {/* Full-Bleed Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/images/platform-hero-banner.jpg" 
            alt="Guardian Data & Integration Ingestion Infrastructure" 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/98 via-[#0d1527]/90 to-[#0d1527]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/90 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#059669]/25 blur-[160px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#4f46e5]/20 blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
                <Database className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN DATA & INTEGRATION SUITE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Connecting the healthcare ecosystem across <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-[#ff7a57]">EHRs, claims, HIEs, and APIs.</span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings disparate healthcare data streams together—normalizing clinical records, claims feeds, HL7/FHIR feeds, and lab results into a single, real-time operational foundation for value-based care.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#059669] hover:bg-[#10b981] shadow-[0_4px_25px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Request an Integration Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </Link>

                <a
                  href="#data-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Interoperability</span>
                </a>
              </div>
            </motion.div>

            {/* Right Compact Floating Live Dashboard Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative rounded-2xl bg-[#1a1233]/90 border border-white/20 backdrop-blur-xl p-3 shadow-2xl overflow-hidden group">
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#120b24] rounded-lg border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[10px] text-emerald-300 font-mono ml-2">data.itsguardian.com</span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#059669]/40 text-emerald-200 border border-[#059669]/60">
                    Integration Pipeline
                  </span>
                </div>

                <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/appliction images/ui-adt-notifications.png" 
                    alt="Guardian Real-Time ADT & Data Integration Suite" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-emerald-200 font-mono px-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> FHIR R4 & HL7 v2 Certified
                  </span>
                  <span className="text-emerald-300">Bi-Directional Exchange</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE INTEROPERABILITY PIPELINE (INFOGRAPHIC PATHWAY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#059669]/20 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE INTEROPERABILITY PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              From fragmented feeds to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#4f46e5] to-[#ff7a57]">synchronized data foundation.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Guardian’s ingestion engine transforms siloed healthcare data streams into a unified longitudinal record across 5 automated stages:
            </p>
          </div>

          {/* Infographic Connected Pathway */}
          <div className="relative pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {pipelineSteps.map((step) => (
                <div 
                  key={step.num}
                  className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between group"
                >
                  {/* Top Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${step.gradient} text-white shadow-2xs`}>
                        {step.num}
                      </span>
                      <span className="text-[9.5px] font-extrabold tracking-widest text-[#8e8a9f] uppercase truncate ml-1">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#1c1636] mb-2 leading-tight group-hover:text-[#059669] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Pathway Connector Indicator */}
                  <div className="mt-4 pt-3 border-t border-[#f0ebf8] flex items-center justify-between text-[11px] font-bold text-[#059669]">
                    <span>Step {step.num} of 05</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE 6 DATA INTEGRATION PILLARS (INTEROPERABILITY CONNECTOR CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="data-overview" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#059669]/20 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE 6 PILLARS OF DATA INTEGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Comprehensive interoperability <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#4f46e5] to-[#ff7a57]">built for modern healthcare.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Explore the 6 core data integration capabilities connecting Guardian across the healthcare ecosystem:
            </p>
          </div>

          {/* 6 High-Tech Data Connector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {integrationPillars.map((pil, idx) => {
              const PilIcon = pil.icon;
              return (
                <div 
                  key={pil.id} 
                  className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#059669]/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Solid Gradient Edge Stripe */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${pil.gradient}`} />

                  <div>
                    {/* Card Header: Icon & Status Tag */}
                    <div className="flex items-center justify-between mb-4 pt-1">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pil.gradient} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                          <PilIcon className="w-5.5 h-5.5 text-white" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#8e8a9f] uppercase block">
                            FEED 0{idx + 1}
                          </span>
                          <h3 className="text-xl font-extrabold text-[#1c1636]">
                            {pil.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${pil.badgeBg} inline-block mb-3`}>
                      {pil.tagline}
                    </span>

                    <p className={`text-xs font-bold ${pil.accentColor} mb-2 leading-snug`}>
                      {pil.headline}
                    </p>
                    <p className="text-xs text-[#524b6b] leading-relaxed mb-5 font-normal">
                      {pil.description}
                    </p>

                    {/* Connectors List Box */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#e9e4f0] mb-5">
                      <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#8e8a9f] mb-2">
                        Capabilities & Protocols:
                      </h4>
                      <div className="space-y-1.5">
                        {pil.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[#1c1636]">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${pil.accentColor} shrink-0 mt-0.5`} />
                            <span className="font-medium text-[11px] leading-tight text-[#35304c]">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-3.5 border-t border-[#e9e4f0] flex items-center justify-between">
                    <Link
                      to={pil.path}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${pil.accentColor} hover:opacity-80 transition-all group-hover:translate-x-1`}
                    >
                      <span>Explore {pil.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: INTEROPERABILITY UI PROOF & DEMONSTRATION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#059669]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>INTEROPERABILITY PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Enterprise connectors processing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#4f46e5] to-[#ff7a57]">millions of records daily.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Discover how Guardian’s Data & Integration connectors surface real-time events and longitudinal patient records:
            </p>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {uiShowcase.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#059669] shadow-md -translate-x-1' 
                        : 'bg-white/60 border-[#e9e4f0] hover:bg-white hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className={`text-base font-extrabold ${isActive ? 'text-[#059669]' : 'text-[#1c1636]'}`}>
                        {item.title}
                      </h3>
                      <Link 
                        to={item.path}
                        className="text-[11px] font-bold text-[#059669] hover:underline flex items-center gap-0.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-xs text-[#524b6b] leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#ecfdf5] text-[#059669] border border-[#059669]/20">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Display */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-[#1c1636] p-3.5 border border-[#2e1065] shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-xl border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-emerald-200 font-mono ml-2">
                      {uiShowcase.find(m => m.id === activeTab)?.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#059669] text-white">
                    Live Connector Proof
                  </span>
                </div>

                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src={uiShowcase.find(m => m.id === activeTab)?.image || '/images/appliction images/ui-adt-notifications.png'}
                    alt="Guardian Data Integration Interface Proof"
                    className="w-full h-auto object-contain max-h-[460px]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: ENTERPRISE SECURITY & STANDARDS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#059669]/20 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>ENTERPRISE COMPLIANCE & PROTOCOLS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Engineered for maximum <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10b981] to-[#7b3fc7]">HIPAA compliance and security.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Healthcare data exchange demands the highest security and compliance standards. Guardian is built on certified interoperability protocols and zero-trust cloud infrastructure:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">FHIR R4 & HL7 v2 Certified Protocols</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Full compliance with ONC Cures Act final rules, supporting FHIR R4 resources, C-CDA XML, and HL7 v2 messages.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">eHealth Exchange & CareQuality Implementer</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Direct network connectivity across national health data exchanges for instant cross-organization patient lookup.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">HITRUST e1 & SOC 2 Type II Certified Architecture</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">End-to-end TLS 1.3 encryption in transit and AES-256 encryption at rest with multi-tenant row-level access controls.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/company/security-trust"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#059669] hover:bg-[#10b981] shadow-md transition-all"
              >
                <span>Explore Security & Trust Credentials</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
              </Link>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e9e4f0] group">
                <img 
                  src="/images/platform-hero-banner.jpg" 
                  alt="Guardian Enterprise Security & Data Center Infrastructure" 
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#1c1636] block">HITRUST e1 Certified</span>
                      <span className="text-[11px] text-[#524b6b]">SOC 2 Type II Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FINAL EXECUTIVE CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#faf8fd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#059669]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7b3fc7]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Database className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>UNIFY YOUR DATA ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Turn fragmented healthcare data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-[#ff7a57]">real-time clinical action.</span>
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian's Data & Integration connectors synthesize EHRs, claims, and ADT feeds into a unified operational foundation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#059669] text-white font-semibold text-xs sm:text-sm hover:bg-[#10b981] shadow-[0_4px_25px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Request an Integration Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </Link>
                
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore Platform Capabilities</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
