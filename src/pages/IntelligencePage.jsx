import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Sparkles, 
  Network, 
  FileText, 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Cpu, 
  Target, 
  UserCheck, 
  Activity,
  Layers,
  Zap,
  Check
} from 'lucide-react';
import { RibbonStepGrid } from '../components/common/RibbonStepCard';

export default function IntelligencePage() {
  const [activeTab, setActiveTab] = useState('knowledge-graph');

  const continuumSteps = [
    {
      num: '01',
      label: 'KNOWLEDGE GRAPH',
      title: 'Semantic Data Mesh',
      desc: 'Link diagnoses, medications, labs, encounters, and social factors into a unified relational graph.',
      ribbonBg: 'bg-[#10b981]',
      foldColor: '#047857',
      numberColor: 'text-[#047857]'
    },
    {
      num: '02',
      label: 'AI & NLP ENGINE',
      title: 'Clinical Document Extraction',
      desc: 'Extract clinical concepts, suspect conditions, and map local EHR codes to standard terminologies.',
      ribbonBg: 'bg-[#84cc16]',
      foldColor: '#4d7c0f',
      numberColor: 'text-[#4d7c0f]'
    },
    {
      num: '03',
      label: 'PREDICTIVE RISK',
      title: 'Risk Stratification & Forecasts',
      desc: 'Forecast 30-day readmission risk, ED high-utilizer probability, and CMS-HCC RAF trajectory.',
      ribbonBg: 'bg-[#eab308]',
      foldColor: '#a16207',
      numberColor: 'text-[#a16207]'
    },
    {
      num: '04',
      label: 'INTELLIGENT WORKFLOWS',
      title: 'Automated Action Dispatch',
      desc: 'Deliver point-of-care gap alerts, care plan recommendations, and automated task routing.',
      ribbonBg: 'bg-[#f97316]',
      foldColor: '#c2410c',
      numberColor: 'text-[#c2410c]'
    },
    {
      num: '05',
      label: 'HUMAN-IN-THE-LOOP',
      title: 'Clinician Governance',
      desc: 'Keep care teams in control with transparent, auditable evidence and clinician override tools.',
      ribbonBg: 'bg-[#ec4899]',
      foldColor: '#be185d',
      numberColor: 'text-[#be185d]'
    }
  ];

  const intelligencePillars = [
    {
      id: 'knowledge-graph',
      title: 'Clinical Knowledge Graph',
      path: '/intelligence/clinical-knowledge-graph',
      tagline: 'SEMANTIC DATA MESH ARCHITECTURE',
      headline: 'Connect diagnoses, labs, Rx, and social determinants into a unified relational graph.',
      description: 'The Clinical Knowledge Graph connects siloed healthcare data streams into a structured relationship mesh. It maps disparate EHR and claims terminologies (ICD-10, CPT, LOINC, RxNorm) to provide longitudinal context across patient encounters.',
      icon: Network,
      gradient: 'from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7]',
      capabilities: [
        'Master Patient Index (MPI) Matching',
        'ICD-10, CPT, LOINC & RxNorm Mapping',
        'Chronological Clinical Timeline Engine',
        'SDOH Social Risk Factor Mesh'
      ]
    },
    {
      id: 'ai-nlp',
      title: 'Artificial Intelligence & NLP',
      path: '/intelligence/ai',
      tagline: 'CLINICAL NLP & SUSPECTING ENGINE',
      headline: 'Uncover hidden clinical insights from unstructured EHR chart notes.',
      description: 'Guardian applies machine learning and natural language processing (NLP) to parse physician notes, discharge summaries, and lab reports—automatically surfacing suspected chronic conditions and undocumented care gaps.',
      icon: BrainCircuit,
      gradient: 'from-[#4f46e5] via-[#6366f1] to-[#7c3aed]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.22)]',
      accentColor: 'text-[#4f46e5]',
      badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5]',
      capabilities: [
        'Unstructured Clinical Note Parsing',
        'MRA HCC Coding & Suspecting Engine',
        'HEDIS Care Gap Suspecting Rules',
        'Automated Chart Summarization'
      ]
    },
    {
      id: 'predictive-intel',
      title: 'Predictive Intelligence',
      path: '/intelligence/predictive-intelligence',
      tagline: 'RISK STRATIFICATION & FORECASTING',
      headline: 'Predict patient decompensation and readmission risk before events occur.',
      description: 'Predictive models evaluate historical clinical markers, ADT events, and utilization patterns to stratify population risk, flag impending 30-day readmissions, and calculate real-time CMS-HCC RAF scores.',
      icon: TrendingUp,
      gradient: 'from-[#059669] via-[#10b981] to-[#0d9488]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.22)]',
      accentColor: 'text-[#059669]',
      badgeBg: 'bg-[#059669]/10 text-[#059669]',
      capabilities: [
        '30-Day Readmission Risk Scoring',
        'ED High-Utilizer Probability Model',
        'Real-time RAF Score Calculator (V24/V28)',
        'Chronic Condition Trajectory Analysis'
      ]
    },
    {
      id: 'intelligent-workflows',
      title: 'Intelligent Workflows',
      path: '/intelligence/intelligent-workflows',
      tagline: 'AUTOMATED WORKFLOW DISPATCH',
      headline: 'Deliver actionable intelligence directly into care team tools.',
      description: 'Transform analytical insights into action by dispatching automated tasks, point-of-care gap alerts, and individualized care plan recommendations directly into clinician and care manager workspaces.',
      icon: Workflow,
      gradient: 'from-[#ff7a57] via-[#f97316] to-[#ea580c]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(255,122,87,0.22)]',
      accentColor: 'text-[#ea580c]',
      badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c]',
      capabilities: [
        'Point-of-Care Gap Notifications',
        'Automated Care Task & Follow-up Routing',
        'Individualized Care Plan Rules Engine',
        'Multi-Channel Provider Alerts'
      ]
    },
    {
      id: 'human-in-the-loop',
      title: 'Human-in-the-Loop AI',
      path: '/intelligence/human-in-the-loop',
      tagline: 'CLINICAL GOVERNANCE & SAFETY',
      headline: 'Empower clinicians with transparent, auditable AI decision support.',
      description: 'Guardian keeps healthcare professionals in complete control. Every AI-generated suspecting insight or risk flag includes clear clinical source citations, transparent rationale, and explicit clinician approval workflows.',
      icon: UserCheck,
      gradient: 'from-[#1c1636] via-[#2e1065] to-[#7b3fc7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#1c1636] text-white',
      capabilities: [
        'Clinician Validation & Verification UI',
        '100% Auditable Source Note Citations',
        'Explainable AI Evidence Panel',
        'HIPAA & Clinical Governance Protocol'
      ]
    }
  ];

  const uiShowcase = [
    {
      id: 'knowledge-graph',
      title: 'Clinical Knowledge Graph Engine',
      path: '/intelligence/clinical-knowledge-graph',
      desc: 'Relational data mesh linking clinical diagnoses, labs, and social determinants into a unified patient graph.',
      image: '/images/appliction images/ui-patient-360.png',
      highlights: ['Master Patient Index (MPI)', 'Longitudinal Timeline', 'Semantic Normalization']
    },
    {
      id: 'ai-nlp',
      title: 'AI & MRA Suspecting Engine',
      path: '/intelligence/ai',
      desc: 'NLP extraction algorithms parsing unstructured chart notes to surface undocumented HCC risk conditions.',
      image: '/images/appliction images/ui-risk-stratification.png',
      highlights: ['CMS-HCC V24/V28 Suspecting', 'Chart Note NLP Extraction', 'Recapture Audit']
    },
    {
      id: 'predictive-intel',
      title: 'Predictive Risk Stratification',
      path: '/intelligence/predictive-intelligence',
      desc: 'Machine learning algorithms forecasting readmissions, ED utilization, and high-risk patient cohorts.',
      image: '/images/appliction images/ui-pop-health-analytics.png',
      highlights: ['30-Day Readmission Risk', 'ED Utilizer Alerts', 'Cohort Trajectory']
    },
    {
      id: 'intelligent-workflows',
      title: 'Intelligent Care Workflows',
      path: '/intelligence/intelligent-workflows',
      desc: 'Automated care gap closure rules and task dispatch embedded in care manager workspaces.',
      image: '/images/appliction images/ui-quality-manager.png',
      highlights: ['Point-of-Care Gaps', 'Automated Care Plans', 'Provider Notifications']
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
            src="/images/people-technology-bg.jpg" 
            alt="Guardian Intelligence & Clinical Knowledge Mesh" 
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/90 via-[#0d1527]/75 to-[#0d1527]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/80 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/30 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#059669]/25 blur-[120px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-25" />
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
                <BrainCircuit className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN INTELLIGENCE SUITE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Clinical context, predictive insight, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">intelligent workflows.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian bridges the gap between raw healthcare data and clinical decision-making. Our AI engine, clinical knowledge graph, and human-in-the-loop architecture turn complex records into transparent, actionable intelligence.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Request an AI Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </Link>

                <a
                  href="#intelligence-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Intelligence Architecture</span>
                </a>
              </div>
            </motion.div>

            {/* Right Compact Floating Live Dashboard Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:block transform lg:scale-108 transition-transform duration-300"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#7b3fc7]/40 to-[#059669]/30 rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative rounded-2xl bg-[#1a1233]/95 border border-white/30 backdrop-blur-xl p-3 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#120b24] rounded-lg border-b border-white/15 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/90 inline-block" />
                      <span className="text-[10px] text-purple-200 font-mono ml-2">ai.itsguardian.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white border border-purple-300/50 font-bold">
                      Clinical AI Engine
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] shadow-md">
                    <img 
                      src="/images/appliction images/ui-risk-stratification.png" 
                      alt="Guardian Intelligence & Predictive AI Engine" 
                      className="w-full h-auto object-contain filter brightness-[1.06] contrast-[1.03]"
                    />
                  </div>

                  <p className="text-xs text-purple-200/70 text-center mt-2 leading-relaxed italic">
                    *Illustrative sample demonstration data. Metrics and records are for demonstration purposes only.
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> Human-in-the-Loop Architecture
                    </span>
                    <span className="text-purple-300 font-bold">Semantic Data Graph</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE INTELLIGENCE CONTINUUM (INFOGRAPHIC PATHWAY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE INTELLIGENCE CONTINUUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              From disconnected data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">synchronized clinical action.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Guardian’s intelligence engine connects 5 distinct stages to turn raw EHR records, claims feeds, and clinical notes into precise, auditable decision support:
            </p>
          </div>

          {/* Infographic Connected 3D Folded Ribbon Pathway */}
          <div className="relative pt-2">
            <RibbonStepGrid steps={continuumSteps} />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE 5 INTELLIGENCE PILLARS (NEURAL MESH & PILLAR MATRIX)
          ───────────────────────────────────────────────────────────── */}
      <section id="intelligence-overview" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE 5 INTELLIGENCE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Purpose-built AI and clinical intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">for value-based care.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Explore the five foundational pillars that power Guardian’s healthcare intelligence suite:
            </p>
          </motion.div>

          <div className="space-y-8">
            
            {/* Spotlight Banner Card: Clinical Knowledge Graph (Pillar 01) */}
            {(() => {
              const mainPil = intelligencePillars[0];
              const MainIcon = mainPil.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative rounded-3xl bg-gradient-to-r from-[#1c1636] via-[#241744] to-[#0d1527] text-white p-8 sm:p-10 border border-white/10 shadow-2xl overflow-hidden group"
                >
                  {/* Glowing Ambient Mesh */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b3fc7]/20 blur-[130px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4f46e5]/15 blur-[120px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#7b3fc7] text-white flex items-center justify-center shadow-lg shadow-[#7b3fc7]/40 shrink-0">
                          <MainIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 block">
                            PILLAR 01 — {mainPil.tagline}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            {mainPil.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base font-bold text-purple-200 mb-3">
                        {mainPil.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed mb-6 font-normal">
                        {mainPil.description}
                      </p>

                      <Link
                        to={mainPil.path}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-lg transition-all group-hover:translate-x-1"
                      >
                        <span>Explore {mainPil.title}</span>
                        <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                      </Link>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="p-6 rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-4 flex items-center justify-between">
                          <span>Core Mesh Capabilities</span>
                          <span className="text-[#ff7a57] font-bold">4 Modules</span>
                        </h4>
                        <div className="space-y-2.5">
                          {mainPil.capabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90 p-2 rounded-lg bg-white/5 border border-white/10">
                              <CheckCircle2 className="w-4 h-4 text-[#ff7a57] shrink-0" />
                              <span className="font-medium">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* 4 Satellite Pillar Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {intelligencePillars.slice(1).map((pil, idx) => {
                const PilIcon = pil.icon;
                return (
                  <motion.div 
                    key={pil.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
                    className="p-7 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header: Icon + Number Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-white text-[#1c1636] shadow-sm flex items-center justify-center border border-[#e9e4f0] group-hover:bg-[#7b3fc7] group-hover:text-white transition-colors`}>
                            <PilIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-[#8e8a9f] uppercase block">
                              PILLAR 0{idx + 2}
                            </span>
                            <h3 className="text-xl font-extrabold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors">
                              {pil.title}
                            </h3>
                          </div>
                        </div>
                        <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${pil.badgeBg}`}>
                          {pil.tagline.split(' ')[0]}
                        </span>
                      </div>

                      <p className={`text-xs font-bold ${pil.accentColor} mb-2 leading-snug`}>
                        {pil.headline}
                      </p>
                      <p className="text-xs text-[#524b6b] leading-relaxed mb-5 font-normal">
                        {pil.description}
                      </p>

                      {/* Pill Tag Capabilities */}
                      <div className="p-3.5 rounded-xl bg-white border border-[#e9e4f0] mb-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pil.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#35304c]">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${pil.accentColor} shrink-0 mt-0.5`} />
                              <span className="font-medium leading-tight">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Link */}
                    <div className="pt-3.5 border-t border-[#e9e4f0] flex items-center justify-between">
                      <Link
                        to={pil.path}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold ${pil.accentColor} hover:opacity-80 transition-all group-hover:translate-x-1`}
                      >
                        <span>Explore {pil.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: LIVE INTELLIGENCE UI PROOF & DEMONSTRATION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>LIVE INTELLIGENCE PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Transparent AI tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">designed for clinical precision.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Discover how Guardian’s AI and intelligence modules render clinical evidence directly into clinician workflows:
            </p>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {uiShowcase.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#7b3fc7] border-l-4 border-l-[#7b3fc7] shadow-lg -translate-x-1 ring-1 ring-[#7b3fc7]/15' 
                        : 'bg-white/65 border-[#e9e4f0] hover:bg-white hover:border-[#7b3fc7]/40 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#7b3fc7] animate-pulse" />
                        )}
                        <h3 className={`text-base font-extrabold ${isActive ? 'text-[#7b3fc7]' : 'text-[#1c1636]'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <Link 
                        to={item.path}
                        className="text-[11px] font-bold text-[#7b3fc7] hover:underline flex items-center gap-0.5"
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
                        <span 
                          key={i} 
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded border transition-colors ${
                            isActive 
                              ? 'bg-[#f2ecf9] text-[#7b3fc7] border-[#7b3fc7]/30' 
                              : 'bg-gray-100 text-[#524b6b] border-gray-200'
                          }`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Display (Stitched to Top) */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 self-start">
              <div className="relative rounded-2xl bg-[#1c1636] p-3.5 border border-[#2e1065] shadow-2xl overflow-hidden transition-all duration-300">
                {/* Browser / Application Window Top Bar */}
                <div className="flex items-center justify-between px-3 py-2.5 bg-[#120b24] rounded-xl border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-purple-200 font-mono ml-2 font-semibold truncate max-w-[200px] sm:max-w-none">
                      {uiShowcase.find(m => m.id === activeTab)?.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={uiShowcase.find(m => m.id === activeTab)?.path || '#'}
                      className="text-[10px] font-mono font-bold text-purple-200 hover:text-white px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors hidden sm:inline-flex items-center gap-1"
                    >
                      <span>Explore Page</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white font-medium">
                      Live AI Proof
                    </span>
                  </div>
                </div>

                {/* Image Viewport (Top Anchored, Smooth Crossfade) */}
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0] shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeTab}
                      src={uiShowcase.find(m => m.id === activeTab)?.image || '/images/appliction images/ui-risk-stratification.png'}
                      alt={`${uiShowcase.find(m => m.id === activeTab)?.title} Platform Interface Proof`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="w-full h-auto object-contain max-h-[520px] block"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Demonstration Data Disclaimer */}
              <p className="text-xs text-[#716b89] leading-relaxed italic text-right mt-2.5">
                *Illustrative sample demonstration data. Module records and metrics are for demonstration purposes only.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: CLINICAL TRUST & SAFETY ARCHITECTURE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#059669]/20 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>CLINICAL GOVERNANCE & SAFETY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Built on rigorous medical standards and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10b981] to-[#7b3fc7]">enterprise security.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Healthcare AI must be reliable, auditable, and safe. Guardian operates with strict clinical governance guidelines, ensuring AI recommendations empower clinicians without replacing medical judgment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Transparent Source Citations</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Every AI suspecting suggestion links directly to the specific encounter note, lab result, or claim line item.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Human-in-the-Loop Validation</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Providers and clinical coders retain 100% decision authority to accept, modify, or reject AI suspecting findings.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Enterprise Security & Compliance</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Data encrypted in transit and at rest aligned with HITRUST, SOC 2, and HIPAA privacy and security frameworks.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/intelligence/human-in-the-loop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md transition-all"
              >
                <span>Learn About Human-in-the-Loop Governance</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
              </Link>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e9e4f0] group">
                <img 
                  src="/images/clinician-whitecoat.jpg" 
                  alt="Clinician using Guardian Human-in-the-Loop AI decision support interface" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#1c1636] block">100% Auditable AI</span>
                      <span className="text-[11px] text-[#524b6b]">Clinical Evidence Logging</span>
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
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#059669]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <BrainCircuit className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>UNLEASH CLINICAL INTELLIGENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Turn complex healthcare data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">actionable clinical insight.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian’s Clinical Knowledge Graph and AI engine transform disparate patient records into transparent, auditable decision support.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Request an AI Demo</span>
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
