import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Lock, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  HeartHandshake, 
  Sparkles, 
  Layers, 
  Zap,
  Clock,
  Check
} from 'lucide-react';

function CountUpNumber({ target, prefix = '', suffix = '', duration = 4000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth quadratic/cubic ease-out for clear, elegant count-up
      const easeOutProgress = 1 - Math.pow(1 - progress, 2.8);
      const currentCount = Math.floor(easeOutProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CompanyOverviewPage() {
  const valueChain = [
    {
      num: '01',
      label: 'CONNECT',
      title: 'EHR & Claims Ingestion',
      desc: 'Bring information together across EHRs, claims, HIE feeds, and pharmacy systems.',
      ribbonBg: 'bg-gradient-to-r from-[#0d9488] to-[#14b8a6]',
      foldBorderColor: 'border-t-[#0f766e]',
      numberColor: 'text-[#0d9488]',
    },
    {
      num: '02',
      label: 'UNDERSTAND',
      title: 'Longitudinal Context',
      desc: 'Synthesize raw data into longitudinal patient charts, risk stratification, and cohort analytics.',
      ribbonBg: 'bg-gradient-to-r from-[#65a30d] to-[#84cc16]',
      foldBorderColor: 'border-t-[#4d7c0f]',
      numberColor: 'text-[#65a30d]',
    },
    {
      num: '03',
      label: 'PRIORITIZE',
      title: 'Risk & Gap Identification',
      desc: 'Surface high-risk patients, HEDIS care gaps, and MRA suspecting opportunities needing action.',
      ribbonBg: 'bg-gradient-to-r from-[#d97706] to-[#eab308]',
      foldBorderColor: 'border-t-[#a16207]',
      numberColor: 'text-[#d97706]',
    },
    {
      num: '04',
      label: 'ACT',
      title: 'Coordinated Workflows',
      desc: 'Equip multidisciplinary care teams with automated task routing, care plans, and point-of-care alerts.',
      ribbonBg: 'bg-gradient-to-r from-[#ff7a57] to-[#ea580c]',
      foldBorderColor: 'border-t-[#c2410c]',
      numberColor: 'text-[#ea580c]',
    },
    {
      num: '05',
      label: 'MEASURE',
      title: 'Clinical & Financial Impact',
      desc: 'Track quality score improvements, PMPY cost reductions, and shared savings growth.',
      ribbonBg: 'bg-gradient-to-r from-[#ec4899] to-[#db2777]',
      foldBorderColor: 'border-t-[#be185d]',
      numberColor: 'text-[#db2777]',
    }
  ];

  const companyPillars = [
    {
      id: 'about',
      title: 'About Guardian',
      path: '/company/about',
      tagline: 'MISSION & HEALTHCARE HISTORY',
      headline: 'Founded on deep value-based care and clinical data exchange experience.',
      description: 'Guardian was built from working within healthcare operations—not simply designing for it. Our history reflects a decade of connecting healthcare data, expanding event notifications, and delivering shared savings.',
      icon: Building2,
      gradient: 'from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7]',
      highlights: [
        'Medicare ACO & Value-Based Roots',
        'Statewide Event Notification (ENS)',
        '10M+ Connected Patient Records',
        'First $100M+ Shared Savings Milestone'
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership',
      path: '/company/leadership',
      tagline: 'HEALTHCARE EXECUTIVE TEAM',
      headline: 'Led by experienced healthcare executives, clinicians, and engineers.',
      description: 'Our leadership team combines decades of experience across clinical medicine, health plan administration, value-based care contracting, interoperability engineering, and data science.',
      icon: Users,
      gradient: 'from-[#4f46e5] via-[#6366f1] to-[#7c3aed]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.22)]',
      accentColor: 'text-[#4f46e5]',
      badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5]',
      highlights: [
        'Clinical & Operational Advisory Board',
        'Experienced Value-Based Care Executives',
        'Enterprise Interoperability Architects',
        'Payer & Provider Network Strategists'
      ]
    },
    {
      id: 'security-trust',
      title: 'Security & Trust',
      path: '/company/security-trust',
      tagline: 'CYBERSECURITY & COMPLIANCE',
      headline: 'HITRUST & SOC 2 aligned security with CMS MIPS Qualified Registry architecture.',
      description: 'Healthcare data requires uncompromising protection. Guardian operates on zero-trust cloud infrastructure aligned with HITRUST and SOC 2 security standards, and full HIPAA encryption.',
      icon: ShieldCheck,
      gradient: 'from-[#059669] via-[#10b981] to-[#0d9488]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.22)]',
      accentColor: 'text-[#059669]',
      badgeBg: 'bg-[#059669]/10 text-[#059669]',
      highlights: [
        'HITRUST & SOC 2 Security Frameworks',
        'HIPAA Privacy & Security Compliance',
        'CMS MIPS Qualified Registry Architecture',
        'CareQuality & eHealth Exchange'
      ]
    },
    {
      id: 'careers',
      title: 'Careers & Culture',
      path: '/company/careers',
      tagline: 'JOIN OUR MISSION',
      headline: 'Build the future of healthcare technology and care delivery.',
      description: 'We are a mission-driven team of software engineers, clinical care managers, data scientists, and healthcare leaders working together to improve patient lives and healthcare performance.',
      icon: Briefcase,
      gradient: 'from-[#ff7a57] via-[#f97316] to-[#ea580c]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(255,122,87,0.22)]',
      accentColor: 'text-[#ea580c]',
      badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c]',
      highlights: [
        'Remote-First & Collaborative Culture',
        'Engineering, Product & Clinical Roles',
        'Competitive Compensation & Benefits',
        'High-Impact Healthcare Mission'
      ]
    },
    {
      id: 'contact',
      title: 'Contact & Demos',
      path: '/company/contact',
      tagline: 'GET IN TOUCH WITH GUARDIAN',
      headline: 'Connect with Guardian for custom demos, sales, and support.',
      description: 'Whether you are looking for a tailored platform demonstration, exploring partnership opportunities, or seeking client support, our team is ready to assist.',
      icon: HeartHandshake,
      gradient: 'from-[#1c1636] via-[#2e1065] to-[#7b3fc7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#1c1636] text-white',
      highlights: [
        'Schedule Custom Platform Demos',
        'Payer & ACO Partnership Consultation',
        'Client Portal Access Support',
        'Executive & Clinical Contact'
      ]
    }
  ];

  const milestones = [
    { year: '2013', desc: 'Guardian founded to support Medicare ACO risk management and care coordination.' },
    { year: '2016', desc: 'Expanded into Statewide Event Notification Services (ENS) for hospital ADT alerts.' },
    { year: '2017', desc: 'Integrated with nationwide eHealth Exchange and CareQuality health data networks.' },
    { year: '2018', desc: 'Connected patient data foundation surpassed 1,000,000 active clinical records.' },
    { year: '2019', desc: 'Achieved first $100,000,000 in cumulative shared savings for client ACOs.' },
    { year: '2021', desc: 'Certified as an official CMS MIPS Qualified Registry for quality reporting.' }
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
            src="/images/experience-doctor.jpg" 
            alt="Guardian Healthcare leadership and clinical team" 
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/90 via-[#0d1527]/70 to-[#0d1527]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/80 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/35 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#ff7a57]/30 blur-[140px] rounded-full pointer-events-none" />
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>ABOUT GUARDIAN HEALTHCARE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Built from healthcare experience. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">Driven by human impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Guardian brings clinical domain expertise, connected healthcare data technology, and operational care services together to help healthcare organizations turn complex information into meaningful patient and financial action.
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
                  href="#company-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Explore Our Story</span>
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
              <div className="relative group lg:scale-108 transition-transform duration-300">
                {/* Glowing Backlight */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#7b3fc7]/50 via-[#8b5cf6]/40 to-[#ff7a57]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-2xl bg-[#1a1233]/90 border border-white/25 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-lg border border-white/10 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-[10px] text-purple-300 font-mono ml-2">company.itsguardian.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60">
                      Enterprise Credentials
                    </span>
                  </div>

                  <div className="space-y-3 text-white">
                    <div className="p-4 rounded-xl bg-white/12 border border-white/20 flex items-center justify-between shadow-md">
                      <div>
                        <span className="text-[10px] font-mono text-purple-200 block uppercase tracking-wider">Shared Savings Delivered</span>
                        <span className="text-2xl font-extrabold text-[#ff7a57] font-mono">
                          <CountUpNumber target={100000000} prefix="$" suffix="+" duration={4000} />
                        </span>
                      </div>
                      <Award className="w-7 h-7 text-[#ff7a57]" />
                    </div>

                    <div className="p-4 rounded-xl bg-white/12 border border-white/20 flex items-center justify-between shadow-md">
                      <div>
                        <span className="text-[10px] font-mono text-purple-200 block uppercase tracking-wider">Connected Records</span>
                        <span className="text-2xl font-extrabold text-[#10b981] font-mono">
                          <CountUpNumber target={10000000} suffix="+" duration={3600} />
                        </span>
                      </div>
                      <ShieldCheck className="w-7 h-7 text-[#10b981]" />
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> CMS MIPS Registry
                    </span>
                    <span className="text-purple-300 font-medium">HITRUST &amp; SOC 2 Alignment</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE GUARDIAN VALUE CHAIN (INFOGRAPHIC PATHWAY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>OUR VALUE CREATION PATHWAY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              From healthcare data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">synchronized clinical action.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Guardian’s operational methodology connects 5 core stages to bridge data silos and drive clinical and financial outcomes:
            </p>
          </div>

          {/* Infographic Connected 3D Folded Ribbon Pathway */}
          <div className="relative pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
              {valueChain.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
                  className="bg-white rounded-3xl border border-[#e9e4f0] shadow-[0_12px_35px_rgba(28,22,54,0.06)] hover:shadow-[0_20px_45px_rgba(28,22,54,0.12)] transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between group pt-0 pb-6 px-6"
                >
                  {/* Top 3D Folded Ribbon Bar Header */}
                  <div className="relative -mx-6 mb-6">
                    <div className={`relative -mr-3 px-3 py-2.5 ${step.ribbonBg} text-white shadow-md rounded-r-xs flex items-center justify-start gap-2.5 z-10`}>
                      {/* White Circular Step Number Badge */}
                      <div className={`w-8 h-8 rounded-full bg-white ${step.numberColor} font-mono font-extrabold text-xs flex items-center justify-center shadow-md shrink-0 border-2 border-white`}>
                        {step.num}
                      </div>

                      {/* Ribbon Category Label */}
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-white font-mono truncate">
                        {step.label}
                      </span>
                    </div>

                    {/* 3D Fold Triangle underneath the right hanging ribbon tail */}
                    <div className={`absolute right-[-12px] bottom-[-8px] w-0 h-0 border-t-[8px] ${step.foldBorderColor} border-r-[8px] border-r-transparent z-0`} />
                  </div>

                  {/* Card Content Body */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-[#1c1636] mb-2 leading-snug group-hover:text-[#7b3fc7] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#524b6b] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Step Indicator */}
                    <div className="mt-5 pt-3 border-t border-[#f0ebf8] flex items-center justify-between text-[11px] font-bold text-[#7b3fc7]">
                      <span>Step {step.num} of 05</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE 5 COMPANY PILLARS (INFOGRAPHIC RIBBON CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="company-overview" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
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
              <span>THE 5 COMPANY DIVISIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Connecting mission, leadership, security, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">and human expertise.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Explore the core divisions and canonical pages defining Guardian’s enterprise organization:
            </p>
          </motion.div>

          {/* 5 Core Company Division Cards (Distinct Executive Corporate Profile Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-4">
            {companyPillars.map((pil, index) => {
              const PilIcon = pil.icon;
              return (
                <motion.div 
                  key={pil.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                  className={`bg-white rounded-2xl border border-[#e9e4f0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group relative ${pil.shadowGlow}`}
                >
                  {/* Top Solid Accent Bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${pil.gradient}`} />

                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Header: Icon + Division Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pil.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                          <PilIcon className="w-6 h-6 stroke-[2.2]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#8e8a9f] px-2.5 py-1 rounded-full bg-[#f4f0fa] border border-[#e5deef]">
                          DIVISION 0{index + 1}
                        </span>
                      </div>

                      {/* Tagline Badge & Title */}
                      <div className="mb-3">
                        <span className={`text-[9.5px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${pil.badgeBg} inline-block mb-2`}>
                          {pil.tagline}
                        </span>
                        <h3 className="text-xl font-extrabold text-[#1c1636] leading-tight group-hover:text-[#7b3fc7] transition-colors">
                          {pil.title}
                        </h3>
                      </div>

                      <p className={`text-xs font-bold ${pil.accentColor} mb-2.5 leading-snug`}>
                        {pil.headline}
                      </p>
                      <p className="text-xs text-[#524b6b] leading-relaxed mb-6 font-normal">
                        {pil.description}
                      </p>

                      {/* Highlights Check List */}
                      <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                        <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#8e8a9f] mb-2.5">
                          Key Focus & Commitments:
                        </h4>
                        <div className="space-y-2">
                          {pil.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#1c1636]">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${pil.accentColor} shrink-0 mt-0.5`} />
                              <span className="font-medium text-[11px] leading-tight text-[#35304c]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-4 border-t border-[#f0ebf8] flex items-center justify-between">
                      <Link
                        to={pil.path}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold ${pil.accentColor} hover:opacity-80 transition-all group-hover:translate-x-1`}
                      >
                        <span>Explore {pil.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono font-bold text-[#8e8a9f] group-hover:text-[#1c1636] transition-colors">
                        Learn More &rarr;
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: COMPANY MILESTONES (TIMELINE)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>OUR JOURNEY & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              A decade of innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">in value-based care.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Guardian’s history reflects a long-term commitment to connecting healthcare data and delivering clinical and financial results:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="p-7 rounded-2xl bg-white border border-[#e9e4f0] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-extrabold text-[#7b3fc7] mb-2 font-mono flex items-center justify-between">
                  <span>{m.year}</span>
                  <Award className="w-5 h-5 text-[#ff7a57]" />
                </div>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed font-medium">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: ENTERPRISE TRUST & COMPLIANCE BAR
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#faf8fd] border border-[#e9e4f0] shadow-xs flex flex-wrap items-center justify-between gap-6">
            <span className="text-xs font-mono font-bold text-[#1c1636] uppercase tracking-wider">
              ENTERPRISE COMPLIANCE & RECOGNITION:
            </span>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#35304c] font-semibold">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CMS MIPS Qualified Registry Architecture
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> eHealth Exchange Interoperability
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7b3fc7]" /> CareQuality Framework Alignment
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#ff7a57]" /> HITRUST & HIPAA Security Alignment
              </span>
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
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff7a57]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
                <Building2 className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>PARTNER WITH GUARDIAN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Build a clearer path from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">healthcare data to action.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Discover how Guardian helps health plans, ACOs, CINs, and care management teams deliver measurable clinical and financial outcomes.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b3fc7] text-white font-semibold text-xs sm:text-sm hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <span>Talk to Guardian</span>
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
