import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Database, 
  Sparkles, 
  UserCheck, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Server, 
  ArrowRight,
  BrainCircuit,
  Lock,
  Network,
  Activity,
  CheckCircle2,
  Users,
  FileText,
  Clock,
  HeartPulse,
  LineChart,
  ChevronRight,
  Target,
  BarChart3,
  Sliders,
  Check,
  Zap,
  Globe,
  Lightbulb
} from 'lucide-react';
import PlatformFeatureInventory from '../components/platform/PlatformFeatureInventory';

export default function PlatformPage() {
  const [hoveredStageId, setHoveredStageId] = useState('connect');
  const [activePmcDomain, setActivePmcDomain] = useState('Care Gaps');

  const sixPillars = [
    {
      id: 'connect',
      num: '01',
      title: 'Connect',
      subtitle: 'Bring healthcare data together.',
      desc: 'Connect information from across the healthcare ecosystem to create a unified foundation for care.',
      icon: Network,
      frameColor: 'bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#7b3fc7]', // Indigo to Royal Purple
      accentColor: 'text-[#4f46e5]',
      badgeColor: 'bg-[#4f46e5] text-white',
      color: 'bg-[#eef2ff] text-[#4f46e5] border-[#c7d2fe]',
      items: ['EHR Systems', 'Claims Data', 'HIE Networks', 'Payer Feeds', 'Labs & Pharmacy', 'ADT Alerts', 'FHIR / HL7 / C-CDA']
    },
    {
      id: 'understand',
      num: '02',
      title: 'Understand',
      subtitle: 'Create a longitudinal view of every patient.',
      desc: 'Transform connected data into clinical context to understand the patient journey rather than isolated encounters.',
      icon: UserCheck,
      frameColor: 'bg-gradient-to-br from-[#7b3fc7] via-[#9333ea] to-[#a855f7]', // Royal Purple to Bright Violet
      accentColor: 'text-[#7b3fc7]',
      badgeColor: 'bg-[#7b3fc7] text-white',
      color: 'bg-[#f3e8ff] text-[#7b3fc7] border-[#e9d5ff]',
      items: ['Patient Master Chart', 'Cohort Analytics', 'Risk Stratification', 'Clinical History', 'Claims & Utilization', 'MRA & HCC Gaps']
    },
    {
      id: 'identify',
      num: '03',
      title: 'Identify',
      subtitle: 'Find the patients who need attention.',
      desc: 'Organize and enrich healthcare information to detect risk, care gaps, quality opportunities, and utilization patterns.',
      icon: Target,
      frameColor: 'bg-gradient-to-br from-[#059669] via-[#10b981] to-[#0d9488]', // Emerald to Teal Green
      accentColor: 'text-[#059669]',
      badgeColor: 'bg-[#059669] text-white',
      color: 'bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]',
      items: ['Risk Stratification', 'HEDIS Care Gaps', 'High-Utilizer Alerts', 'MRA Recapture', 'Readmission Risk', 'Transitions of Care']
    },
    {
      id: 'manage',
      num: '04',
      title: 'Manage',
      subtitle: 'Coordinate individualized care.',
      desc: 'Put intelligence directly into care team workflows to support care planning, outreach, follow-up, and documentation.',
      icon: Workflow,
      frameColor: 'bg-gradient-to-br from-[#0891b2] via-[#06b6d4] to-[#0284c7]', // Teal to Ocean Cyan
      accentColor: 'text-[#0891b2]',
      badgeColor: 'bg-[#0891b2] text-white',
      color: 'bg-[#ecfeff] text-[#0891b2] border-[#a5f3fc]',
      items: ['Care Management', 'Individualized Care Plans', 'Tasks & Follow-ups', '150+ Assessments', 'Clinical Protocols', 'Care Team Workspace']
    },
    {
      id: 'engage',
      num: '05',
      title: 'Engage',
      subtitle: 'Connect patients and providers.',
      desc: 'Empower patients and providers with the communication tools and insights needed to move care forward efficiently.',
      icon: Activity,
      frameColor: 'bg-gradient-to-br from-[#ff7a57] via-[#f97316] to-[#ea580c]', // Guardian Coral to Vibrant Orange
      accentColor: 'text-[#ea580c]',
      badgeColor: 'bg-[#ea580c] text-white',
      color: 'bg-[#fff7ed] text-[#ea580c] border-[#fed7aa]',
      items: ['Patient Engagement', 'Outreach Campaigns', 'Telemedicine Visits', 'Referral Routing', 'Transitions of Care', 'Provider Communication']
    },
    {
      id: 'measure',
      num: '06',
      title: 'Measure',
      subtitle: 'Track performance and outcomes.',
      desc: 'Measure real-world impact across quality, risk, utilization, financial performance, and patient outcomes.',
      icon: BarChart3,
      frameColor: 'bg-gradient-to-br from-[#1c1636] via-[#2e1065] to-[#7b3fc7]', // Deep Navy to Deep Purple
      accentColor: 'text-[#7b3fc7]',
      badgeColor: 'bg-[#1c1636] text-white',
      color: 'bg-[#f2ecf9] text-[#7b3fc7] border-[#ded7ea]',
      items: ['Quality Performance', 'Financial Reporting', 'PMPY Trends', 'Utilization Tracking', 'RAF & Risk Scores', 'Benchmark Analytics']
    }
  ];

  const journeyStages = [
    {
      id: 'connect',
      stage: 'STEP 01',
      title: 'Data Ingestion & Integration',
      desc: 'Connect EHRs, claims, HIE feeds, lab results, and pharmacy data across FHIR & HL7 standards.',
      icon: Database,
      bgColor: 'bg-[#f4f7fc]',
      borderColor: 'border-[#c7d2fe]',
      stepColor: 'text-[#4f46e5]',
      iconBg: 'bg-[#4f46e5] text-white',
      badgeColor: 'bg-[#4f46e5]',
      items: ['EHR Systems', 'Claims Data', 'HIE Networks', 'Lab & ADT Feeds']
    },
    {
      id: 'understand',
      stage: 'STEP 02',
      title: 'Intelligence & Clinical Context',
      desc: 'Synthesize data into longitudinal charts with AI condition suspecting and risk stratification.',
      icon: BrainCircuit,
      bgColor: 'bg-[#f0fdfa]',
      borderColor: 'border-[#a7f3d0]',
      stepColor: 'text-[#059669]',
      iconBg: 'bg-[#059669] text-white',
      badgeColor: 'bg-[#059669]',
      items: ['Patient Master Chart', 'Cohort Analytics', 'Risk Stratification', 'MRA & HCC Gaps']
    },
    {
      id: 'manage',
      stage: 'STEP 03',
      title: 'Workflow & Coordinated Action',
      desc: 'Empower care teams with real-time gap alerts, care plans, and automated patient outreach.',
      icon: Workflow,
      bgColor: 'bg-[#fff7ed]',
      borderColor: 'border-[#fed7aa]',
      stepColor: 'text-[#ea580c]',
      iconBg: 'bg-[#ea580c] text-white',
      badgeColor: 'bg-[#ea580c]',
      items: ['Care Management', 'Individual Care Plans', 'Tasks & Follow-ups', 'Care Team Workspace']
    },
    {
      id: 'measure',
      stage: 'STEP 04',
      title: 'Outcomes & Financial Value',
      desc: 'Track quality outcomes (HEDIS/MIPS), readmission reductions, and PMPY savings.',
      icon: TrendingUp,
      bgColor: 'bg-[#f5f3ff]',
      borderColor: 'border-[#ddd6fe]',
      stepColor: 'text-[#7c3aed]',
      iconBg: 'bg-[#7c3aed] text-white',
      badgeColor: 'bg-[#7c3aed]',
      items: ['Quality Performance', 'Financial Reporting', 'PMPY Trends', 'Utilization Tracking']
    }
  ];

  const foundationTiers = [
    {
      num: '01',
      title: 'Data Integration',
      headline: 'Connect the healthcare ecosystem.',
      description: 'Bring information together from the systems and sources that contribute to the patient’s healthcare journey.',
      icon: Database,
      items: [
        'Healthcare interoperability',
        'Data aggregation',
        'Data exchange',
        'Connected care environments'
      ]
    },
    {
      num: '02',
      title: 'Data Enrichment',
      headline: 'Make healthcare data more useful.',
      description: 'Transform connected information into structured, meaningful data that can support analysis, identification, and action.',
      icon: Sparkles,
      items: [
        'Data quality and organization',
        'Clinical context',
        'Risk information',
        'Quality information',
        'Care opportunities'
      ]
    },
    {
      num: '03',
      title: 'Information Services',
      headline: 'Put the right information where it matters.',
      description: 'Turn connected and enriched information into usable views, reports, and workflows for healthcare teams.',
      icon: Server,
      items: [
        'Patient intelligence',
        'Dashboards and reporting',
        'Care coordination',
        'Operational insight',
        'Decision support'
      ]
    }
  ];

  const pmcDomains = [
    { name: 'Diagnoses', detail: 'ICD-10 & Chronic Conditions' },
    { name: 'Medications', detail: 'Active Rx & Adherence Gaps' },
    { name: 'Vitals', detail: 'BP, BMI, SpO2 & Trend Charts' },
    { name: 'Lab Results', detail: 'HbA1c, Lipid & Panel History' },
    { name: 'Procedures', detail: 'Surgical & Clinical Log' },
    { name: 'Care Gaps', detail: 'HEDIS & Preventative Gaps' },
    { name: 'MRA Gaps', detail: 'HCC Suspecting & Recapture' },
    { name: 'Risk Scores', detail: 'CMS-HCC RAF & Readmission' }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (FULL-BLEED PANORAMIC HERO BANNER)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#0d1527] text-white overflow-hidden border-b border-[#1c1636]">
        
        {/* Full-Bleed Background Image (Edge-to-Edge Left Viewport to Right Viewport) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/images/platform-hero-banner.jpg" 
            alt="Guardian Health Platform Command & Intelligence Center" 
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          />
          {/* Deep Cinematic Gradient Overlay for Maximum Readability and Header Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/98 via-[#0d1527]/85 to-[#0d1527]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/90 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/25 blur-[160px] rounded-full" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#ff7a57]/20 blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
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
                <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>THE GUARDIAN PLATFORM</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                The operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">value-based care.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings together the data, intelligence, and workflows required to move from population insight to patient action. Our platform combines healthcare data, advanced analytics, clinical intelligence, and care management in one unified solution.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </Link>

                <a
                  href="#platform-capabilities"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Platform Capabilities</span>
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
                    <span className="text-[10px] text-purple-300 font-mono ml-2">live.itsguardian.com</span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60">
                    Live Platform
                  </span>
                </div>

                <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/appliction images/Main Platform Dashboard.png" 
                    alt="Guardian Population Health Platform Dashboard" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> 11 Application Modules
                  </span>
                  <span className="text-purple-300">VBC & CIN Workflow</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE SIX PILLARS (ALL PILLARS VISIBLE DIRECTLY)
          ───────────────────────────────────────────────────────────── */}
      <section id="six-pillars" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#7b3fc7]/20 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE SIX PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1636] tracking-tight mb-4 leading-tight">
              One platform. The complete value-based care lifecycle.
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Each pillar works together to help you connect data, understand your population, identify what matters, and take action — so you can measure real outcomes:
            </p>
          </motion.div>

          {/* All 6 Pillars Grid - All 6 in One Single Horizontal Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 lg:gap-4 xl:gap-5">
            {sixPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
                  className={`p-2.5 sm:p-3 rounded-[1.8rem] ${pillar.frameColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative group`}
                >
                  {/* Top Notch Cutout handle from Infographic Design */}
                  <div className="w-14 h-2.5 bg-white rounded-b-lg mx-auto -mt-2.5 sm:-mt-3 mb-2 shadow-xs" />

                  {/* Inner Content Box */}
                  <div className="bg-white rounded-[1.3rem] p-4 xl:p-4.5 flex flex-col justify-between h-full border border-black/5 shadow-xs">
                    <div>
                      {/* Header: Icon + Pillar Title & Number */}
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#f0ebf8]">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${pillar.color} shadow-xs shrink-0`}>
                            <PillarIcon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${pillar.accentColor} block`}>
                              PILLAR {pillar.num}
                            </span>
                            <h3 className="text-base xl:text-lg font-extrabold text-[#1c1636] leading-tight">
                              {pillar.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Subtitle & Description */}
                      <p className={`text-[11px] font-bold ${pillar.accentColor} mb-1.5 leading-snug`}>
                        {pillar.subtitle}
                      </p>
                      <p className="text-[11px] text-[#524b6b] leading-relaxed mb-4">
                        {pillar.desc}
                      </p>

                      {/* Divider & Capabilities */}
                      <div className="pt-2.5 border-t border-[#f0ebf8]">
                        <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#8e8a9f] mb-2 flex items-center justify-between">
                          <span>Capabilities</span>
                          <span className={`${pillar.accentColor} font-bold`}>{pillar.items.length} Included</span>
                        </h4>
                        <div className="space-y-1.5">
                          {pillar.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#1c1636]">
                              <CheckCircle2 className={`w-3 h-3 ${pillar.accentColor} shrink-0 mt-0.5`} />
                              <span className="font-medium text-[11px] text-[#2d2744] leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom link to Directory */}
                    <div className="mt-4 pt-2.5 border-t border-[#f0ebf8]">
                      <a
                        href="#platform-capabilities"
                        className={`inline-flex items-center gap-1 text-[11px] font-bold ${pillar.accentColor} hover:opacity-80 transition-opacity group-hover:translate-x-0.5 transition-transform`}
                      >
                        <span>Explore Capabilities</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Bottom Tab Cutout handle from Infographic Design */}
                  <div className="w-16 h-2.5 bg-white rounded-t-lg mx-auto -mb-2.5 sm:-mb-3 mt-2 shadow-xs" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: HOW IT WORKS (HIGH-IMPACT CINEMATIC GLASSMORPHIC SHOWCASE)
          ───────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-[#0b0819] text-white relative overflow-hidden border-y border-[#1c1636]">
        
        {/* Ambient Lighting & Glow FX */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7b3fc7]/20 blur-[180px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#ff7a57]/15 blur-[160px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#4f46e5]/15 blur-[160px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 ambient-grid opacity-10 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/20 border border-[#7b3fc7]/40 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(123,63,199,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57] animate-pulse" />
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
              From data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">better decisions.</span>
            </h2>
            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed max-w-2xl font-normal">
              The Guardian platform connects multiple data sources, turns them into actionable intelligence, and delivers the right information to the right people at the right time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center">
            
            {/* Left Column: STEP 01 & STEP 02 */}
            <div className="order-1 lg:order-1 lg:col-span-4 space-y-4">
              {journeyStages.slice(0, 2).map((stg) => {
                const StageIcon = stg.icon;
                return (
                  <div
                    key={stg.id}
                    className="p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-purple-400/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_40px_rgba(123,63,199,0.25)] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`w-10 h-10 rounded-xl ${stg.iconBg} flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(123,63,199,0.4)] group-hover:scale-105 transition-transform`}>
                        <StageIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${stg.stepColor} block`}>
                          {stg.stage}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-purple-200 transition-colors leading-tight">
                          {stg.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-purple-100/75 leading-relaxed mb-3.5 font-normal">
                      {stg.desc}
                    </p>

                    {/* 4 High-Impact Glass Badges */}
                    <div className="grid grid-cols-2 gap-2">
                      {stg.items.map((item, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-[11px] font-semibold text-white/90 hover:bg-white/[0.12] hover:border-white/20 transition-all flex items-center gap-1.5 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Column: Floating Animated 3D Orbit Engine */}
            <div className="order-2 lg:order-2 lg:col-span-4 flex flex-col items-center justify-center">
              
              <div className="relative w-full max-w-[380px] xl:max-w-[420px] aspect-square mx-auto flex items-center justify-center p-2">
                
                {/* Glowing Core Engine Medallion */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#7b3fc7] via-[#2e1065] to-[#ff7a57] text-white flex flex-col items-center justify-center text-center p-2.5 shadow-[0_0_50px_rgba(123,63,199,0.8)] z-20 ring-4 ring-white/20 relative">
                  <ShieldCheck className="w-8 h-8 text-[#ff7a57] mb-0.5 animate-pulse" />
                  <span className="text-xs sm:text-sm font-extrabold leading-tight tracking-wide text-white">Guardian</span>
                  <span className="text-xs sm:text-sm font-extrabold leading-tight tracking-wide text-purple-200">Platform</span>
                </div>

                {/* Animated Rotating Glowing Dashed SVG Ring & Flow Arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7b3fc7" />
                      <stop offset="50%" stopColor="#ff7a57" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                    <marker id="circleArrowDark" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff7a57" />
                    </marker>
                  </defs>

                  {/* Smooth Rotating Group for Orbit Lines and Arrow Heads */}
                  <g className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                    {/* Outer Orbit Light Glow Circle */}
                    <circle cx="200" cy="200" r="130" fill="none" stroke="url(#orbitGlow)" strokeWidth="2" strokeDasharray="8 8" opacity="0.6" />
                    
                    {/* Inner Pulse Ring */}
                    <circle cx="200" cy="200" r="80" fill="none" stroke="#7b3fc7" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                    {/* Curved Connecting Loop Lines with Neon Markers */}
                    <path d="M 235,75 A 130,130 0 0,1 325,165" fill="none" stroke="url(#orbitGlow)" strokeWidth="2.5" opacity="0.85" markerEnd="url(#circleArrowDark)" />
                    <path d="M 325,235 A 130,130 0 0,1 235,325" fill="none" stroke="url(#orbitGlow)" strokeWidth="2.5" opacity="0.85" markerEnd="url(#circleArrowDark)" />
                    <path d="M 165,325 A 130,130 0 0,1 75,235" fill="none" stroke="url(#orbitGlow)" strokeWidth="2.5" opacity="0.85" markerEnd="url(#circleArrowDark)" />
                    <path d="M 75,165 A 130,130 0 0,1 165,75" fill="none" stroke="url(#orbitGlow)" strokeWidth="2.5" opacity="0.85" markerEnd="url(#circleArrowDark)" />
                  </g>
                </svg>

                {/* 6 Radial Glass Node Cards with Neon Pointer Badges */}
                {/* 1. Connect (Top Center) */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#150f2e]/90 border border-purple-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(123,63,199,0.4)] flex flex-col items-center justify-center p-1 hover:scale-110 hover:border-[#ff7a57] transition-all cursor-pointer group/node">
                    <div className="w-6 h-6 rounded-full bg-[#4f46e5]/20 text-[#818cf8] flex items-center justify-center mb-0.5 group-hover/node:bg-[#4f46e5] group-hover/node:text-white transition-colors">
                      <Network className="w-3 h-3" />
                    </div>
                    <span className="text-[9.5px] font-extrabold text-white">Connect</span>
                  </div>
                  <span className="text-[9px] font-bold text-purple-200 mt-0.5 text-center bg-[#150f2e]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-purple-400/30 shadow-md whitespace-nowrap">
                    Bring data together
                  </span>
                </div>

                {/* 2. Understand (Top Right) */}
                <div className="absolute top-[16%] right-[1%] flex flex-col items-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#150f2e]/90 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center p-1 hover:scale-110 hover:border-emerald-400 transition-all cursor-pointer group/node">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-0.5 group-hover/node:bg-emerald-500 group-hover/node:text-white transition-colors">
                      <UserCheck className="w-3 h-3" />
                    </div>
                    <span className="text-[9.5px] font-extrabold text-white">Understand</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-300 mt-0.5 text-center bg-[#150f2e]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-400/30 shadow-md whitespace-nowrap">
                    Longitudinal view
                  </span>
                </div>

                {/* 3. Identify (Bottom Right) */}
                <div className="absolute bottom-[16%] right-[1%] flex flex-col items-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#150f2e]/90 border border-purple-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] flex flex-col items-center justify-center p-1 hover:scale-110 hover:border-purple-400 transition-all cursor-pointer group/node">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center mb-0.5 group-hover/node:bg-purple-500 group-hover/node:text-white transition-colors">
                      <Target className="w-3 h-3" />
                    </div>
                    <span className="text-[9.5px] font-extrabold text-white">Identify</span>
                  </div>
                  <span className="text-[9px] font-bold text-purple-300 mt-0.5 text-center bg-[#150f2e]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-purple-400/30 shadow-md whitespace-nowrap">
                    Find patient risk
                  </span>
                </div>

                {/* 4. Manage (Bottom Center) */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#150f2e]/90 border border-cyan-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col items-center justify-center p-1 hover:scale-110 hover:border-cyan-400 transition-all cursor-pointer group/node">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-0.5 group-hover/node:bg-cyan-500 group-hover/node:text-white transition-colors">
                      <Workflow className="w-3 h-3" />
                    </div>
                    <span className="text-[9.5px] font-extrabold text-white">Manage</span>
                  </div>
                  <span className="text-[9px] font-bold text-cyan-300 mt-0.5 text-center bg-[#150f2e]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-cyan-400/30 shadow-md whitespace-nowrap">
                    Coordinate care
                  </span>
                </div>

                {/* 5. Engage (Bottom Left) */}
                <div className="absolute bottom-[16%] left-[1%] flex flex-col items-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#150f2e]/90 border border-orange-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] flex flex-col items-center justify-center p-1 hover:scale-110 hover:border-orange-400 transition-all cursor-pointer group/node">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center mb-0.5 group-hover/node:bg-orange-500 group-hover/node:text-white transition-colors">
                      <Activity className="w-3 h-3" />
                    </div>
                    <span className="text-[9.5px] font-extrabold text-white">Engage</span>
                  </div>
                  <span className="text-[9px] font-bold text-orange-300 mt-0.5 text-center bg-[#150f2e]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-orange-400/30 shadow-md whitespace-nowrap">
                    Connect providers
                  </span>
                </div>

                {/* 6. Measure (Top Left) */}
                <div className="absolute top-[16%] left-[1%] flex flex-col items-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#150f2e]/90 border border-sky-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] flex flex-col items-center justify-center p-1 hover:scale-110 hover:border-sky-400 transition-all cursor-pointer group/node">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center mb-0.5 group-hover/node:bg-sky-500 group-hover/node:text-white transition-colors">
                      <BarChart3 className="w-3 h-3" />
                    </div>
                    <span className="text-[9.5px] font-extrabold text-white">Measure</span>
                  </div>
                  <span className="text-[9px] font-bold text-sky-300 mt-0.5 text-center bg-[#150f2e]/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-sky-400/30 shadow-md whitespace-nowrap">
                    Track outcomes
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column: STEP 03 & STEP 04 */}
            <div className="order-3 lg:order-3 lg:col-span-4 space-y-4">
              {journeyStages.slice(2, 4).map((stg) => {
                const StageIcon = stg.icon;
                return (
                  <div
                    key={stg.id}
                    className="p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-purple-400/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_40px_rgba(123,63,199,0.25)] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`w-10 h-10 rounded-xl ${stg.iconBg} flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(123,63,199,0.4)] group-hover:scale-105 transition-transform`}>
                        <StageIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${stg.stepColor} block`}>
                          {stg.stage}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-purple-200 transition-colors leading-tight">
                          {stg.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-purple-100/75 leading-relaxed mb-3.5 font-normal">
                      {stg.desc}
                    </p>

                    {/* 4 High-Impact Glass Badges */}
                    <div className="grid grid-cols-2 gap-2">
                      {stg.items.map((item, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-[11px] font-semibold text-white/90 hover:bg-white/[0.12] hover:border-white/20 transition-all flex items-center gap-1.5 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: WHY IT MATTERS (INFOGRAPHIC RIBBON CARDS MATCHING BRAND GRADIENTS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>WHY IT MATTERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              A unified platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">Greater impact.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed max-w-2xl font-normal">
              By bringing your data, teams, and workflows together, Guardian helps you achieve consistent outcomes across your care delivery organization:
            </p>
          </div>

          {/* 4 Platform Outcome Cards (Distinct 2x2 High-Impact Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 pt-4">
            {[
              {
                id: 'quality',
                num: '01',
                title: 'Improve care quality',
                subtitle: 'Proactive Risk & Care Gap Closure',
                desc: 'Identify risks and close care gaps proactively before they become bigger problems for patients across population cohorts.',
                icon: Target,
                gradient: 'from-[#ff7a57] via-[#f97316] to-[#ea580c]',
                shadowGlow: 'hover:shadow-[0_20px_40px_rgba(255,122,87,0.18)]',
                accentColor: 'text-[#ea580c]',
                badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c]',
                tag: 'OUTCOME 01'
              },
              {
                id: 'efficiency',
                num: '02',
                title: 'Increase efficiency',
                subtitle: 'Automated Workflow Dispatch',
                desc: 'Reduce manual clinician work and streamline care coordination with automated task routing and point-of-care alerts.',
                icon: Workflow,
                gradient: 'from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
                shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.18)]',
                accentColor: 'text-[#7b3fc7]',
                badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7]',
                tag: 'OUTCOME 02'
              },
              {
                id: 'financial',
                num: '03',
                title: 'Drive financial performance',
                subtitle: 'Value-Based Contract Optimization',
                desc: 'Manage risk, improve utilization tracking, and grow shared savings under Medicare ACO REACH and commercial risk contracts.',
                icon: TrendingUp,
                gradient: 'from-[#059669] via-[#10b981] to-[#0d9488]',
                shadowGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.18)]',
                accentColor: 'text-[#059669]',
                badgeBg: 'bg-[#059669]/10 text-[#059669]',
                tag: 'OUTCOME 03'
              },
              {
                id: 'experience',
                num: '04',
                title: 'Deliver better patient experiences',
                subtitle: 'Longitudinal Care Context',
                desc: 'Provide the right care, at the right time, for the right patient with complete longitudinal clinical charts across care sites.',
                icon: HeartPulse,
                gradient: 'from-[#4f46e5] via-[#6366f1] to-[#7c3aed]',
                shadowGlow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.18)]',
                accentColor: 'text-[#4f46e5]',
                badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5]',
                tag: 'OUTCOME 04'
              }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
                  className={`bg-white rounded-2xl p-7 border border-[#e9e4f0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between ${item.shadowGlow}`}
                >
                  {/* Top Edge Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`} />

                  <div className="flex flex-col sm:flex-row items-start gap-5 mb-4 pt-1">
                    {/* Left Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                      <ItemIcon className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    {/* Right Narrative */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[9.5px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${item.badgeBg}`}>
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-[#8e8a9f]">
                          {item.subtitle}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-[#1c1636] leading-tight group-hover:text-[#7b3fc7] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed font-normal mb-4">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-[#f0ebf8] flex items-center justify-between text-xs font-bold text-[#7b3fc7]">
                    <span className={`text-xs font-bold ${item.accentColor}`}>Platform Capability</span>
                    <span className="text-[11px] font-mono text-[#8e8a9f] group-hover:text-[#1c1636] transition-colors flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: PATIENT 360 / PMC (INTERACTIVE VISUAL PROOF)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#120b24] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[450px] bg-[#7b3fc7]/25 blur-[160px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/15">
                <UserCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>PATIENT 360° & PATIENT MASTER CHART</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Complete longitudinal context at the point of care.
              </h2>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed mb-6 font-normal">
                Guardian unifies patient data through two complementary pillars: the <strong>Patient Master Chart (PMC)</strong> as the longitudinal clinical repository across 13 domains, and <strong>Patient 360°</strong> as the dynamic, real-time intelligence cockpit for point-of-care action.
              </p>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-sm font-medium text-purple-200 mb-8">
                PMC: Longitudinal Clinical Records • Patient 360°: Real-Time Intelligence
              </div>

              <Link
                to="/platform/patient-intelligence/patient-360"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7b3fc7] hover:bg-[#9565d2] text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>Explore Patient 360 & PMC</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Interactive UI Proof */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-[#1a1233] border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-3 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-purple-300 font-mono ml-2">live.itsguardian.com</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    Active: {activePmcDomain}
                  </span>
                </div>

                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-patient-360.png" 
                    alt="Guardian Patient Master Chart 360° View" 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Interactive PMC Domain Tabs */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono text-center">
                  {pmcDomains.map((dom) => (
                    <button
                      key={dom.name}
                      onClick={() => setActivePmcDomain(dom.name)}
                      className={`p-1.5 rounded transition-all cursor-pointer ${
                        activePmcDomain === dom.name
                          ? 'bg-[#7b3fc7] text-white font-bold border border-[#9565d2]'
                          : 'bg-white/5 border border-white/10 text-purple-200 hover:bg-white/10'
                      }`}
                    >
                      {dom.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: TECHNOLOGY FOUNDATION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              CORE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              The technology foundation behind connected care.
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Guardian’s platform brings together three core technology tiers that move healthcare information from source systems toward usable intelligence and action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {foundationTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div 
                  key={tier.num}
                  className="p-8 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs flex flex-col justify-between hover:border-[#7b3fc7]/40 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#7b3fc7]">{tier.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center">
                        <TierIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1c1636] mb-1">{tier.title}</h3>
                    <p className="text-xs font-semibold text-[#7b3fc7] mb-3">{tier.headline}</p>
                    <p className="text-sm text-[#524b6b] leading-relaxed mb-6">{tier.description}</p>

                    <div className="pt-4 border-t border-[#e9e4f0] space-y-2">
                      {tier.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-[#35304c]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: COMPLETE FEATURE INVENTORY (PRODUCT PROFILE 6.0)
          ───────────────────────────────────────────────────────────── */}
      <PlatformFeatureInventory />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: TECHNOLOGY + PEOPLE (HUMAN + TECH STORY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e9e4f0] group">
                <img 
                  src="/images/care-team-collaboration.jpg" 
                  alt="Guardian Care Team Collaboration" 
                  className="w-full h-80 sm:h-[400px] object-cover filter brightness-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono font-bold text-[#ff7a57] uppercase tracking-wider block mb-1">
                    Human + Technology Synergy
                  </span>
                  <h4 className="text-lg font-bold">Empowering Clinical Leadership</h4>
                </div>
              </div>
            </div>

            {/* Right Story Copy */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
                THE CRITICAL SYNERGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] leading-tight mb-4">
                The platform doesn’t work alone.
              </h2>
              <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed mb-8">
                Technology is most valuable when healthcare teams can act on the information it provides. Guardian combines connected technology with healthcare expertise and operational support to move insight into action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Technology</h4>
                  <p className="text-xs text-[#524b6b]">Connects and organizes healthcare information.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Clinical Intelligence</h4>
                  <p className="text-xs text-[#524b6b]">Helps teams understand what matters.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Workflow Dispatch</h4>
                  <p className="text-xs text-[#524b6b]">Moves insight into the work that needs to happen.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0]">
                  <h4 className="text-sm font-bold text-[#1c1636] mb-1">Care Teams</h4>
                  <p className="text-xs text-[#524b6b]">Supports the people responsible for taking action.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: TRUST & CREDENTIALS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              INTEROPERABILITY & TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Designed for the healthcare ecosystem.
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian’s platform is built around healthcare data exchange and interoperability, supporting the flow of information across systems and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Interoperability</h3>
              <p className="text-xs text-[#524b6b] leading-relaxed">Connect healthcare information seamlessly across systems and organizations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Data Exchange</h3>
              <p className="text-xs text-[#524b6b] leading-relaxed">Move information where it needs to go across the connected care environment.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-xs">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Healthcare-Ready Infrastructure</h3>
              <p className="text-xs text-[#524b6b] leading-relaxed">Support the information and compliance needs of enterprise healthcare organizations.</p>
            </div>
          </div>

          {/* Credentials Bar */}
          <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <span className="text-xs font-semibold text-[#1c1636] uppercase tracking-wider">
              Healthcare Industry Credentials & Frameworks:
            </span>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#35304c] font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CMS MIPS Certified Registry</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> eHealth Exchange Implementer</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CareQuality Exchange Implementer</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#ff7a57]" /> HITRUST Aligned Security</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: FINAL CTA (PREMIUM WEBSITE CLOSING BANNER)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2a1d48] to-[#120b24] text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Copy & Actions */}
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold text-[#ff7a57] uppercase tracking-wider block mb-3">
                  READY TO SEE IT IN ACTION?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                  See how the Guardian platform can work for your organization.
                </h2>
                <p className="text-base sm:text-lg text-purple-100/90 mb-8 leading-relaxed">
                  Discover how our platform connects your data, intelligence, and care workflows to help you achieve better outcomes — for your population and your patients.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/company/contact?intent=demo"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1c1636] font-semibold text-xs sm:text-sm hover:bg-[#f2ecf9] transition-all shadow-md group"
                  >
                    <span>Request a Demo</span>
                    <ArrowRight className="w-4 h-4 text-[#7b3fc7] group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <span>Explore Solutions</span>
                  </Link>
                </div>
              </div>

              {/* Right Photography Integration */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                  <img 
                    src="/images/who-we-serve-doctor.jpg" 
                    alt="Guardian Healthcare Professional" 
                    className="w-full h-80 object-cover filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120b24]/60 via-transparent to-transparent" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
