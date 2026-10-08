import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  CheckCircle2, 
  FileText, 
  Video, 
  PlayCircle, 
  Compass, 
  Layers, 
  ChevronRight, 
  Users, 
  ShieldCheck, 
  Zap, 
  Lock,
  MessageSquare
} from 'lucide-react';
import { RibbonStepGrid } from '../components/common/RibbonStepCard';

export default function ResourcesPage() {
  const learningPathway = [
    {
      num: '01',
      label: 'LEARN',
      title: 'Industry Perspective',
      desc: 'Discover regulatory shifts (CMS V28, MIPS, ACO REACH) and interoperability standards.',
      ribbonBg: 'bg-[#10b981]',
      foldColor: '#047857',
      numberColor: 'text-[#047857]'
    },
    {
      num: '02',
      label: 'CONTEXTUALIZE',
      title: 'Healthcare Framework',
      desc: 'Frame industry insights within your organization’s specific clinical and financial contracts.',
      ribbonBg: 'bg-[#84cc16]',
      foldColor: '#4d7c0f',
      numberColor: 'text-[#4d7c0f]'
    },
    {
      num: '03',
      label: 'IDENTIFY',
      title: 'Opportunity Mapping',
      desc: 'Uncover immediate risk adjustment, care gap closure, and readmission reduction opportunities.',
      ribbonBg: 'bg-[#eab308]',
      foldColor: '#a16207',
      numberColor: 'text-[#a16207]'
    },
    {
      num: '04',
      label: 'APPLY',
      title: 'Workflow Execution',
      desc: 'Implement proven care management playbooks, automated task routing, and point-of-care alerts.',
      ribbonBg: 'bg-[#f97316]',
      foldColor: '#c2410c',
      numberColor: 'text-[#c2410c]'
    },
    {
      num: '05',
      label: 'MEASURE',
      title: 'Quantified Outcomes',
      desc: 'Track clinical quality score improvements, PMPY cost savings, and shared savings growth.',
      ribbonBg: 'bg-[#ec4899]',
      foldColor: '#be185d',
      numberColor: 'text-[#be185d]'
    }
  ];

  const resourceCenters = [
    {
      id: 'insights',
      title: 'Insights',
      path: '/resources/insights',
      tagline: 'EXECUTIVE PERSPECTIVES & ARTICLES',
      headline: 'Articles on healthcare data, AI, value-based care, and population health.',
      description: 'Perspectives written by clinical and technology experts exploring healthcare data interoperability, CMS policy changes, risk adjustment integrity, quality performance, and care team productivity.',
      icon: Sparkles,
      gradient: 'from-[#7b3fc7] via-[#9333ea] to-[#a855f7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#7b3fc7]/10 text-[#7b3fc7]',
      highlights: [
        'Healthcare Data & Interoperability',
        'Value-Based Care Strategy',
        'CMS-HCC V28 Transition Analysis',
        'Clinical AI & Decision Support'
      ]
    },
    {
      id: 'guides',
      title: 'Guides & Playbooks',
      path: '/resources/guides',
      tagline: 'PRACTICAL OPERATIONAL PLAYBOOKS',
      headline: 'Step-by-step guides for risk coders, care managers, and clinical leaders.',
      description: 'Practical playbooks and whitepapers designed to help healthcare teams navigate complex clinical workflows, HEDIS measure compliance, risk adjustment audits, and transition-of-care protocols.',
      icon: BookOpen,
      gradient: 'from-[#059669] via-[#10b981] to-[#0d9488]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.22)]',
      accentColor: 'text-[#059669]',
      badgeBg: 'bg-[#059669]/10 text-[#059669]',
      highlights: [
        'Risk Adjustment Documentation Playbook',
        'HEDIS Care Gap Closure Manual',
        '30-Day Readmission Reduction Protocol',
        '150+ Assessment Implementation Guide'
      ]
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      path: '/resources/case-studies',
      tagline: 'REAL-WORLD CLINICAL PROOF',
      headline: 'Real-world examples showcasing quantified clinical and financial outcomes.',
      description: 'In-depth case studies examining how health systems, ACOs, health plans, and CINs deploy Guardian technology and operational services to solve real clinical and financial challenges.',
      icon: TrendingUp,
      gradient: 'from-[#ff7a57] via-[#f97316] to-[#ea580c]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(255,122,87,0.22)]',
      accentColor: 'text-[#ea580c]',
      badgeBg: 'bg-[#ff7a57]/10 text-[#ea580c]',
      highlights: [
        'ED High-Utilizer Utilization Reduction',
        'PMPY Shared Savings Growth in ACO REACH',
        'Multi-EHR Clinical Integration Case Study',
        'Care Gap Closure Speed Acceleration'
      ]
    },
    {
      id: 'webinars',
      title: 'Webinars & Events',
      path: '/resources/webinars',
      tagline: 'EXPERT PANELS & BRIEFINGS',
      headline: 'Live and on-demand discussions with healthcare technology leaders.',
      description: 'Executive webinars, regulatory briefings, and interactive panel discussions featuring clinical leaders, health plan executives, and healthcare technology experts.',
      icon: MessageSquare,
      gradient: 'from-[#4f46e5] via-[#6366f1] to-[#7c3aed]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(79,70,229,0.22)]',
      accentColor: 'text-[#4f46e5]',
      badgeBg: 'bg-[#4f46e5]/10 text-[#4f46e5]',
      highlights: [
        'Live Executive Q&A Sessions',
        'CMS Policy & Regulatory Briefings',
        'Clinical AI & Governance Panels',
        'On-Demand Event Recordings Library'
      ]
    },
    {
      id: 'product-tours',
      title: 'Product Tours',
      path: '/resources/product-tours',
      tagline: 'INTERACTIVE PLATFORM DEMOS',
      headline: 'Guided interactive walkthroughs of Guardian platform modules.',
      description: 'Self-paced product tours showcasing Guardian’s Patient Master Chart (PMC), Risk Stratification Engine, Care Plan Generator, and Point-of-Care Gaps Notification tools.',
      icon: Compass,
      gradient: 'from-[#0891b2] via-[#06b6d4] to-[#0284c7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(6,182,212,0.22)]',
      accentColor: 'text-[#0891b2]',
      badgeBg: 'bg-[#0891b2]/10 text-[#0891b2]',
      highlights: [
        'Patient Master Chart 360 Tour',
        'MRA HCC Suspecting Engine Tour',
        'Individual Care Plan Generator Walkthrough',
        'Quality Gap Dashboard Interactive'
      ]
    },
    {
      id: 'videos',
      title: 'Videos & Demos',
      path: '/resources/videos',
      tagline: 'VIDEO DEMONSTRATIONS & OVERVIEWS',
      headline: 'Short video feature overviews showcasing platform capabilities.',
      description: 'Concise video demonstrations highlighting specific software capabilities, care team workflow automation, data ingestion pipelines, and client testimonial highlights.',
      icon: PlayCircle,
      gradient: 'from-[#1c1636] via-[#2e1065] to-[#7b3fc7]',
      shadowGlow: 'hover:shadow-[0_20px_40px_rgba(123,63,199,0.22)]',
      accentColor: 'text-[#7b3fc7]',
      badgeBg: 'bg-[#1c1636] text-white',
      highlights: [
        '2-Minute Platform Capability Shorts',
        'Clinician Care Plan Workflow Demos',
        'Architecture & Interoperability Videos',
        'Client Success & Testimonial Clips'
      ]
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
            src="/images/clinician-whitecoat.jpg" 
            alt="Healthcare professionals engaging with Guardian knowledge resources" 
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/90 via-[#0d1527]/75 to-[#0d1527]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1527]/80 via-transparent to-[#0d1527]" />
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/30 blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#ff7a57]/25 blur-[120px] rounded-full" />
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
                <BookOpen className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>GUARDIAN KNOWLEDGE & RESOURCE HUB</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                Ideas, evidence, and guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">value-based healthcare leaders.</span>
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Explore healthcare insights, whitepaper playbooks, real-world case studies, product tours, and expert webinars designed to help health systems, ACOs, and health plans move from data to outcome.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#resources-overview"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_25px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff7a57]" />
                </a>

                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <span>Talk to Guardian</span>
                </Link>
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
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#7b3fc7]/40 to-[#ff7a57]/30 rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative rounded-2xl bg-[#1a1233]/95 border border-white/30 backdrop-blur-xl p-3 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#120b24] rounded-lg border-b border-white/15 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/90 inline-block" />
                      <span className="text-[10px] text-purple-200 font-mono ml-2">resources.itsguardian.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-[#7b3fc7] text-white border border-purple-300/50 font-bold">
                      Knowledge Hub
                    </span>
                  </div>

                  <div className="relative rounded-md overflow-hidden bg-white border border-[#e9e4f0] p-4 text-[#1c1636] shadow-md">
                    <span className="text-[10px] font-mono font-bold text-[#7b3fc7] uppercase tracking-wider block mb-1">Featured Whitepaper</span>
                    <h3 className="text-base font-extrabold mb-2 text-[#1c1636]">CMS-HCC V28 Risk Adjustment Transition Playbook</h3>
                    <p className="text-xs text-[#524b6b] leading-relaxed mb-3 font-normal">Practical guidance for risk coding teams navigating CMS model changes and ethical documentation.</p>
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#7b3fc7] pt-2 border-t border-[#f0ebf8]">
                      <span>Download Playbook PDF</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-purple-200 font-mono px-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a57]" /> 6 Content Centers
                    </span>
                    <span className="text-purple-300 font-bold">Updated Weekly</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE LEARNING CONTINUUM (INFOGRAPHIC PATHWAY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>THE LEARNING TO ACTION PATHWAY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-4 leading-tight">
              How healthcare leaders translate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">knowledge into operational impact.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              Guardian resources are designed to help teams understand healthcare challenges, evaluate practical methodologies, and execute workflows that deliver results:
            </p>
          </div>

          {/* Infographic Connected 3D Folded Ribbon Pathway */}
          <div className="relative pt-2">
            <RibbonStepGrid steps={learningPathway} />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: THE 6 RESOURCE HUBS (INFOGRAPHIC RIBBON CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="resources-overview" className="py-20 sm:py-28 bg-white border-b border-[#e9e4f0]">
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
              <span>THE 6 RESOURCE CENTERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Curated content formats for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">every stage of your journey.</span>
            </h2>
            <p className="text-base text-[#524b6b] leading-relaxed">
              Explore the six canonical resource categories covering healthcare data, quality, risk, webinars, and platform walkthroughs:
            </p>
          </motion.div>

          {/* 6 Core Resource Editorial Cards (Distinct Media Library Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-4">
            {resourceCenters.map((res, index) => {
              const ResIcon = res.icon;
              return (
                <motion.div 
                  key={res.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                  className={`bg-white rounded-2xl border border-[#e9e4f0] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group relative ${res.shadowGlow}`}
                >
                  {/* Top Gradient Accent Line */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${res.gradient}`} />

                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Meta Bar: Icon + Format Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${res.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                          <ResIcon className="w-6 h-6 stroke-[2.2]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#8e8a9f] px-2.5 py-1 rounded-full bg-[#f4f0fa] border border-[#e5deef]">
                          FORMAT 0{index + 1}
                        </span>
                      </div>

                      {/* Tagline Badge & Title */}
                      <div className="mb-3">
                        <span className={`text-[9.5px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${res.badgeBg} inline-block mb-2`}>
                          {res.tagline}
                        </span>
                        <h3 className="text-xl font-extrabold text-[#1c1636] leading-tight group-hover:text-[#7b3fc7] transition-colors">
                          {res.title}
                        </h3>
                      </div>

                      <p className={`text-xs font-bold ${res.accentColor} mb-2.5 leading-snug`}>
                        {res.headline}
                      </p>
                      <p className="text-xs text-[#524b6b] leading-relaxed mb-6 font-normal">
                        {res.description}
                      </p>

                      {/* Featured Topics & Formats Checklist Box */}
                      <div className="p-4 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] mb-6">
                        <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#8e8a9f] mb-2.5">
                          Key Coverage & Resources:
                        </h4>
                        <div className="space-y-2">
                          {res.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#1c1636]">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${res.accentColor} shrink-0 mt-0.5`} />
                              <span className="font-medium text-[11px] leading-tight text-[#35304c]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Link Bar */}
                    <div className="pt-4 border-t border-[#f0ebf8] flex items-center justify-between">
                      <Link
                        to={res.path}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold ${res.accentColor} hover:opacity-80 transition-all group-hover:translate-x-1`}
                      >
                        <span>Explore {res.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] font-mono font-bold text-[#8e8a9f] group-hover:text-[#1c1636] transition-colors">
                        View Hub &rarr;
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
          SECTION 4: FEATURED CURATED HIGHLIGHTS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#faf8fd] border-b border-[#e9e4f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>CURATED HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1636] tracking-tight mb-3 leading-tight">
              Explore what matters now <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">across value-based care.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Highlight 1: Insights */}
            <div className="p-8 rounded-2xl bg-white border border-[#e9e4f0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7b3fc7] px-2.5 py-1 rounded bg-[#7b3fc7]/10 inline-block mb-4">
                  Featured Insight
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-3 leading-snug group-hover:text-[#7b3fc7] transition-colors">
                  Connecting Fragmented Healthcare Data Across Independent Networks
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6 font-normal">
                  An in-depth perspective on how longitudinal data aggregation transforms clinical patient context across siloed EHRs and health systems.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8]">
                <Link to="/resources/insights" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b3fc7] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Insight Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Highlight 2: Case Studies */}
            <div className="p-8 rounded-2xl bg-white border border-[#e9e4f0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ea580c] px-2.5 py-1 rounded bg-[#ff7a57]/10 inline-block mb-4">
                  Featured Case Study
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-3 leading-snug group-hover:text-[#ea580c] transition-colors">
                  30-Day Readmission Reduction via Real-Time ADT Workflows
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6 font-normal">
                  Examining how a regional CIN tracks and intervenes on avoidable readmissions using automated care manager alert dispatch.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8]">
                <Link to="/resources/case-studies" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] group-hover:translate-x-1 transition-transform">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Highlight 3: Guides */}
            <div className="p-8 rounded-2xl bg-white border border-[#e9e4f0] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#059669] px-2.5 py-1 rounded bg-[#059669]/10 inline-block mb-4">
                  Featured Guide
                </span>
                <h3 className="text-xl font-extrabold text-[#1c1636] mb-3 leading-snug group-hover:text-[#059669] transition-colors">
                  CMS-HCC V28 Risk Adjustment Transition & Documentation Playbook
                </h3>
                <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed mb-6 font-normal">
                  Practical guidance for clinicians and coding teams on maintaining ethical documentation integrity and HCC recapture during V28 model phase-in.
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0ebf8]">
                <Link to="/resources/guides" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] group-hover:translate-x-1 transition-transform">
                  <span>Download Free Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: NEWSLETTER SUBSCRIPTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e4f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <Mail className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-3">
            Stay connected to healthcare intelligence updates.
          </h2>
          <p className="text-xs sm:text-sm text-[#524b6b] mb-8 max-w-lg mx-auto font-normal">
            Receive approved Guardian research insights, regulatory briefings, and healthcare intelligence updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your professional email"
              className="w-full px-5 py-3.5 rounded-full border border-[#e9e4f0] bg-[#faf8fd] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7b3fc7] text-[#1c1636]"
            />
            <button
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#7b3fc7] text-white text-xs sm:text-sm font-semibold hover:bg-[#9565d2] transition-all shrink-0 shadow-md"
            >
              Subscribe
            </button>
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
                <BookOpen className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>EXPLORE HEALTHCARE PRIORITIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Have a healthcare challenge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">worth exploring?</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100/90 mb-8 leading-relaxed font-normal">
                Connect with Guardian's clinical and technology experts to discover how our platform and services address your value-based care priorities.
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
