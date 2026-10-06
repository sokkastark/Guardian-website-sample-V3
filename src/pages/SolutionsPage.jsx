import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Activity, 
  FileText, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  HeartPulse,
  LineChart,
  CheckCircle2,
  Lock,
  TrendingUp,
  Workflow,
  Target,
  Database,
  ChevronRight,
  Layers,
  Building2,
  UserCheck,
  Zap,
  Check
} from 'lucide-react';

export default function SolutionsPage() {
  const [activeCapabilityTab, setActiveCapabilityTab] = useState('pop-health');

  const progressionSteps = [
    { 
      num: '01', 
      label: 'SEE', 
      title: 'Data Visibility',
      desc: 'Bring EHR, claims, HIE feeds, and pharmacy data into a single unified view.',
      gradient: 'from-[#4f46e5] to-[#7c3aed]'
    },
    { 
      num: '02', 
      label: 'UNDERSTAND', 
      title: 'Longitudinal Context',
      desc: 'Synthesize data into longitudinal patient charts, risk stratification, and cohort analytics.',
      gradient: 'from-[#7b3fc7] to-[#9565d2]'
    },
    { 
      num: '03', 
      label: 'PRIORITIZE', 
      title: 'Risk & Gap Identification',
      desc: 'Identify high-risk patients, HEDIS care gaps, and MRA suspecting opportunities needing attention.',
      gradient: 'from-[#059669] to-[#10b981]'
    },
    { 
      num: '04', 
      label: 'ACT', 
      title: 'Coordinated Workflows',
      desc: 'Equip care teams with automated task routing, care plans, and point-of-care alerts.',
      gradient: 'from-[#ff7a57] to-[#ea580c]'
    },
    { 
      num: '05', 
      label: 'MEASURE', 
      title: 'Value-Based Outcomes',
      desc: 'Track quality measure compliance, readmission reductions, and shared savings performance.',
      gradient: 'from-[#1c1636] to-[#7b3fc7]'
    }
  ];

  const solutionAreas = [
    {
      id: 'aco-vbc',
      title: 'ACO & Value-Based Care',
      path: '/solutions/aco-value-based-care',
      tagline: 'SHARED SAVINGS & RISK MANAGEMENT',
      headline: 'Maximize shared savings and risk performance across value-based contracts.',
      description: 'Equip Accountable Care Organizations with population health analytics, RAF score tracking, ADT event notifications, and transition-of-care workflows to reduce PMPY costs and excel in risk-bearing arrangements.',
      icon: TrendingUp,
      gradient: 'from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
      borderHover: 'hover:border-[#7b3fc7]/50',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7]',
      capabilities: [
        'CMS-HCC RAF Scoring (V24 & V28)',
        '30-Day Readmission Risk Scoring',
        'ED High-Utilizer Real-Time Alerts',
        'PMPY Cost & Shared Savings Analytics'
      ]
    },
    {
      id: 'health-plans',
      title: 'Health Plans',
      path: '/solutions/health-plans',
      tagline: 'QUALITY RATINGS & RISK ADJUSTMENT',
      headline: 'Drive HEDIS Star ratings and compliant risk adjustment at scale.',
      description: 'Bring payer claims, lab feeds, and EHR records together to automate quality gap identification, streamline Star Rating management, and optimize MRA coding precision for Medicare Advantage and Commercial plans.',
      icon: ShieldCheck,
      gradient: 'from-[#059669] via-[#10b981] to-[#0d9488]',
      borderHover: 'hover:border-[#059669]/50',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.22)]',
      accentColor: 'text-[#059669]',
      badgeBg: 'bg-[#059669]/10 text-[#059669]',
      capabilities: [
        'HEDIS Care Gap Closure Workflows',
        'HCC Suspecting & Recapture Engine',
        'Payer Claims & CCLF Feed Ingestion',
        'Star Ratings & Quality Scorecards'
      ]
    },
    {
      id: 'cin-providers',
      title: 'CIN & Provider Organizations',
      path: '/solutions/cin-provider-organizations',
      tagline: 'CLINICAL INTEGRATION & NETWORK ALIGNMENT',
      headline: 'Enable clinical integration and reduce network leakage.',
      description: 'Connect independent practices and health systems within Clinically Integrated Networks (CINs) to deliver point-of-care gap alerts, track specialist referral leakage, and provide a single Patient 360 chart.',
      icon: Users,
      gradient: 'from-[#4f46e5] via-[#6366f1] to-[#7c3aed]',
      borderHover: 'hover:border-[#4f46e5]/50',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.22)]',
      accentColor: 'text-[#4f46e5]',
      badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5]',
      capabilities: [
        'Longitudinal Patient Master Chart (PMC)',
        'In-Network vs Out-of-Network Leakage',
        'Point-of-Care Gaps Notification',
        'Multi-EHR Interoperability & FHIR'
      ]
    },
    {
      id: 'care-teams',
      title: 'Care Management Teams',
      path: '/solutions/care-management-teams',
      tagline: 'WORKFLOW & PATIENT ENGAGEMENT',
      headline: 'Supercharge care team productivity and patient outreach.',
      description: 'Provide care managers, navigators, and clinical coordinators with 150+ standardized assessments, automated task dispatch, multidisciplinary workspaces, and mobile patient engagement tools.',
      icon: HeartPulse,
      gradient: 'from-[#ff7a57] via-[#f97316] to-[#ea580c]',
      borderHover: 'hover:border-[#ff7a57]/50',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(255,122,87,0.22)]',
      accentColor: 'text-[#ea580c]',
      badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c]',
      capabilities: [
        '150+ Standardized Assessment Library',
        'Individualized Care Plan Generator',
        'Automated Task & Follow-up Routing',
        'Mobile SMS & Telehealth Engagement'
      ]
    }
  ];

  const capabilityModules = [
    {
      id: 'pop-health',
      title: 'Population Health',
      path: '/platform/population-health',
      desc: 'Turn population data into clear risk stratification, cohort registries, and cost trend insights.',
      image: '/images/appliction images/ui-pop-health-analytics.png',
      highlights: ['Cohort Analytics Builder', 'Risk Stratification Models', 'Utilization Trend Tracking']
    },
    {
      id: 'care-mgmt',
      title: 'Care Management',
      path: '/platform/care-management',
      desc: 'Coordinate patient care with individualized care plans, 150+ assessments, and task routing.',
      image: '/images/appliction images/ui-care-management.png',
      highlights: ['Individual Care Plans', '150+ Assessment Scales', 'Multidisciplinary Workspace']
    },
    {
      id: 'risk-adj',
      title: 'Risk Adjustment',
      path: '/platform/risk-adjustment',
      desc: 'Identify undocumented chronic conditions and streamline chart review for CMS-HCC models.',
      image: '/images/appliction images/ui-risk-stratification.png',
      highlights: ['Dual CMS-HCC V24 & V28 Engine', 'Recapture Chart Audit Workflow', 'RAF Score Calculator']
    },
    {
      id: 'quality-perf',
      title: 'Quality & Care Gaps',
      path: '/platform/quality-care-gaps',
      desc: 'Monitor HEDIS and MIPS performance, close gaps proactively, and alert providers at point-of-care.',
      image: '/images/appliction images/ui-quality-manager.png',
      highlights: ['HEDIS Gap Closure Engine', 'MIPS Performance Tracker', 'Point-of-Care Notifications']
    },
    {
      id: 'patient-intel',
      title: 'Patient Intelligence / PMC',
      path: '/platform/patient-intelligence/patient-360',
      desc: 'Synthesize EHR, claims, and lab data into a single longitudinal Patient Master Chart.',
      image: '/images/appliction images/ui-patient-360.png',
      highlights: ['Patient Master Chart (PMC)', 'Master Patient Index (MPI)', 'Clinical Timeline Export']
    },
    {
      id: 'engagement',
      title: 'Patient Engagement',
      path: '/platform/patient-engagement',
      desc: 'Connect patients and care teams with automated SMS outreach, reminders, and telehealth visits.',
      image: '/images/appliction images/ui-telemedicine.png',
      highlights: ['Automated SMS & Email Outreach', 'Telehealth Video Visits', 'Intake & Reminders']
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
            src="/images/who-we-serve-doctor.jpg" 
            alt="Healthcare professionals using Guardian platform solutions" 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/98 via-[#0d1527]/90 to-[#0d1527]/75" />
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
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN HEALTHCARE SOLUTIONS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Built for the work healthcare organizations <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">need to get done.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings connected healthcare data, clinical intelligence, technology, and operational services together to empower health plans, ACOs, CINs, and care management teams to move from insight to synchronized action.
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
                  href="#solutions-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Solution Areas</span>
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
                    <span className="text-[10px] text-purple-300 font-mono ml-2">solutions.itsguardian.com</span>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60">
                    Enterprise Suite
                  </span>
                </div>

                <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/appliction images/Main Platform Dashboard.png" 
                    alt="Guardian Population Health & Solutions Dashboard" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> 4 Core Stakeholder Solutions
                  </span>
                  <span className="text-purple-300">VBC & CIN Orchestration</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE REALITY & SOLUTION PATHWAY (EDITORIAL INFOGRAPHIC)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE HEALTHCARE REALITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              Healthcare has no shortage of data. The challenge is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">turning it into action.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Healthcare teams are expected to manage risk, close care gaps, improve quality, coordinate care, engage patients, and track financial performance—often across disconnected EHRs and manual spreadsheets. Guardian solutions bridge that gap with a connected 5-step pathway:
            </p>
          </div>

          {/* Infographic Connected Pathway */}
          <div className="relative pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {progressionSteps.map((step, idx) => (
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
                      <span className="text-[10px] font-extrabold tracking-widest text-[#8e8a9f] uppercase">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#1c1636] mb-2 leading-tight group-hover:text-[#7b3fc7] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Pathway Connector Indicator */}
                  <div className="mt-4 pt-3 border-t border-[#f0ebf8] flex items-center justify-between text-[11px] font-bold text-[#7b3fc7]">
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
          SECTION 3: FOUR CORE SOLUTION AREAS (CORPORATE STAKEHOLDER HUBS)
          ───────────────────────────────────────────────────────────── */}
      <section id="solutions-overview" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>WHO WE SERVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Purpose-built solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">every value-based healthcare stakeholder.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian’s solution portfolio is organized around the operational models, clinical workflows, and performance contracts of modern healthcare organizations:
            </p>
          </div>

          {/* 4 Corporate Stakeholder Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {solutionAreas.map((sol) => {
              const SolIcon = sol.icon;
              return (
                <div 
                  key={sol.id} 
                  className="p-8 rounded-3xl bg-[#faf8fd] border border-[#e9e4f0] hover:border-[#7b3fc7]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Solid Gradient Edge Stripe */}
                  <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${sol.gradient}`} />

                  <div>
                    {/* Header: Badge & Icon */}
                    <div className="flex items-center justify-between mb-5 pt-1">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${sol.gradient} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                          <SolIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${sol.badgeBg} block mb-0.5`}>
                            {sol.tagline}
                          </span>
                          <h3 className="text-2xl font-extrabold text-[#1c1636]">
                            {sol.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className={`text-sm font-bold ${sol.accentColor} mb-3 leading-snug`}>
                      {sol.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6 font-normal">
                      {sol.description}
                    </p>

                    {/* Capabilities Matrix Box */}
                    <div className="p-4.5 rounded-2xl bg-white border border-[#e9e4f0] mb-6">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8e8a9f] mb-3">
                        Key Capabilities & Workflows:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sol.capabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-[#1c1636]">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${sol.accentColor} shrink-0 mt-0.5`} />
                            <span className="font-medium text-[11.5px] leading-tight text-[#35304c]">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link Button */}
                  <div className="pt-4 border-t border-[#e9e4f0] flex items-center justify-between">
                    <Link
                      to={sol.path}
                      className={`inline-flex items-center gap-2 text-xs font-extrabold ${sol.accentColor} hover:opacity-80 transition-all group-hover:translate-x-1`}
                    >
                      <span>Explore {sol.title} Solutions</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CAPABILITY PORTFOLIO WITH PRODUCT UI PROOF
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>CAPABILITY PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Integrated capabilities <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">powering healthcare delivery.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian combines platform technology capabilities with specialized clinical modules to support your organization’s goals:
            </p>
          </div>

          {/* Interactive Capability Module Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Capability Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {capabilityModules.map((mod) => {
                const isActive = activeCapabilityTab === mod.id;
                return (
                  <div
                    key={mod.id}
                    onClick={() => setActiveCapabilityTab(mod.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#7b3fc7] shadow-md -translate-x-1' 
                        : 'bg-white/60 border-[#e9e4f0] hover:bg-white hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className={`text-base font-extrabold ${isActive ? 'text-[#7b3fc7]' : 'text-[#1c1636]'}`}>
                        {mod.title}
                      </h3>
                      <Link 
                        to={mod.path}
                        className="text-[11px] font-bold text-[#7b3fc7] hover:underline flex items-center gap-0.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-xs text-[#524b6b] leading-relaxed mb-3">
                      {mod.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {mod.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f2ecf9] text-[#7b3fc7] border border-[#7b3fc7]/20">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Product UI Screenshot Proof Display */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-[#1c1636] p-3.5 border border-[#2e1065] shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-xl border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-purple-200 font-mono ml-2">
                      {capabilityModules.find(m => m.id === activeCapabilityTab)?.title} Module
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white">
                    Live UI Preview
                  </span>
                </div>

                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src={capabilityModules.find(m => m.id === activeCapabilityTab)?.image || '/images/appliction images/Main Platform Dashboard.png'}
                    alt="Guardian Healthcare Solution UI Capability Showcase"
                    className="w-full h-auto object-contain max-h-[460px]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: HUMAN + TECHNOLOGY WORKFLOW STORY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e9e4f0] group">
                <img 
                  src="/images/care-team-collaboration.jpg" 
                  alt="Multidisciplinary care team collaborating using Guardian solution tools" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1636]/80 via-transparent to-transparent" />
                
                {/* Floating Metric Badge 1 */}
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7b3fc7] text-white flex items-center justify-center shrink-0">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-[#1c1636] block">Care Team Workspace</span>
                      <span className="text-[11px] text-[#524b6b]">150+ Standardized Assessments</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 */}
                <div className="absolute top-6 right-6 p-3 rounded-xl bg-[#1c1636]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono shadow-lg">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> Real-Time ADT Alerts
                  </span>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7a57]/10 text-[#ea580c] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#ff7a57]/20 shadow-2xs">
                <UserCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>PEOPLE + TECHNOLOGY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
                Solutions backed by more than technology. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] to-[#ff7a57]">Amplifying care teams.</span>
              </h2>

              <p className="text-base text-[#524b6b] leading-relaxed mb-6 font-normal">
                Guardian combines platform technology capabilities with healthcare expertise and operational care management support. Technology connects and organizes data; experienced clinical teams turn that data into meaningful patient action.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Intelligent Software Automation</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Automates risk suspecting, HEDIS care gap identification, and patient task dispatch so clinicians focus on care.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Clinical Domain Expertise</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Deep understanding of VBC contracts, CMS regulations, ACO REACH, and quality measure governance.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff7a57]/10 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1636] mb-1">Care Team Operational Services</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed">Augmenting clinical staff capacity with experienced care managers, coders, and navigators when needed.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/solutions/care-management-teams"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-md transition-all"
              >
                <span>Explore Care Management Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: ENTERPRISE TRUST & COMPLIANCE CREDENTIALS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#e9e4f0] shadow-sm flex flex-wrap items-center justify-between gap-6">
            <span className="text-xs font-mono font-bold text-[#1c1636] uppercase tracking-wider">
              BUILT ON HEALTHCARE EXPERIENCE & TRUST:
            </span>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#35304c] font-semibold">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CMS MIPS Certified Registry
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> eHealth Exchange Implementer
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CareQuality Exchange Implementer
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#ff7a57]" /> HITRUST e1 Certified Architecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: FINAL EXECUTIVE CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#faf8fd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#0d1527] text-white shadow-2xl relative overflow-hidden border border-white/10">
            
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7b3fc7]/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff7a57]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>TRANSFORM VBC OPERATIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Turn complex data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">decisive action.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian helps your organization connect disparate data, empower care teams, and deliver measurable clinical and financial outcomes.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Request a Custom Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a57]" />
                </Link>
                
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
