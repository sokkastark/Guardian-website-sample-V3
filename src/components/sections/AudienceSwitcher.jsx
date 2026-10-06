import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Eye, 
  Activity, 
  HeartPulse,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function AudienceSwitcher() {
  const [activeTab, setActiveTab] = useState('providers');

  const perspectives = {
    providers: {
      tag: 'PROVIDERS',
      headline: 'Give care teams the information to act.',
      description: 'Support clinicians with a complete patient view, care gaps, and actionable insights at the point of care.',
      linkText: 'Learn more',
      linkHref: '/solutions/cin-provider-organizations',
      cardTitle: 'Patient: Eleanor Vance',
      cardCategory: 'Upcoming:',
      items: [
        { title: 'Retinal Screening', due: 'Due Oct 08', icon: Eye, color: '#ec4899' },
        { title: 'A1C Test', due: 'Due Nov 12', icon: Activity, color: '#38bdf8' },
        { title: 'Annual Wellness Visit', due: 'Due Dec 03', icon: Calendar, color: '#10b981' },
      ],
      ctaText: 'View Care Plan',
    },
    payers: {
      tag: 'PAYERS',
      headline: 'Turn network data into better performance.',
      description: 'Help health plans and risk-bearing entities connect data, understand patterns, and support clinical quality benchmarks.',
      linkText: 'Explore payer solutions',
      linkHref: '/solutions/health-plans',
      cardTitle: 'Network: Valley Health ACO',
      cardCategory: 'Priority Measures:',
      items: [
        { title: 'HEDIS Gap Surveillance', due: '94% Met', icon: HeartPulse, color: '#8b5cf6' },
        { title: 'Post-Discharge Outreach', due: '< 48 Hours', icon: Calendar, color: '#38bdf8' },
        { title: 'RAF Recapture Audit', due: '99.2% Accurate', icon: Activity, color: '#10b981' },
      ],
      ctaText: 'View Network Dashboard',
    },
  };

  const current = perspectives[activeTab];

  return (
    <section 
      id="audiences" 
      className="relative py-24 sm:py-28 lg:py-32 bg-[#080511] text-white overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          CINEMATIC CLINICIAN BACKGROUND PHOTOGRAPHY
          Features Dr. with glasses examining digital tablet
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/who-we-serve-doctor.jpg"
          alt="Healthcare Expert Clinician examining digital tablet"
          className="w-full h-full object-cover object-[55%_center] lg:object-[50%_center] opacity-75 lg:opacity-85 brightness-105 contrast-105"
        />

        {/* Soft edge blend for top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080511] via-transparent via-50% to-[#080511]" />

        {/* Left side text backdrop for 100% crystal clear readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#080511] via-[#080511]/90 to-transparent" />

        {/* Right side subtle shade behind cards */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/3 bg-gradient-to-l from-[#080511]/50 via-transparent to-transparent hidden lg:block" />

        {/* Ambient Grid */}
        <div className="absolute inset-0 ambient-grid opacity-10 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            SECTION HEADER
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-2xl mb-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a57] animate-pulse" />
            <span>WHO WE SERVE</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4 drop-shadow-md">
            Tailored intelligence for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a57] to-[#ec4899]">
              Providers
            </span>{' '}
            &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#8b5cf6]">
              Payers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-purple-100/85 leading-relaxed font-normal mb-8">
            Different perspectives. A common goal — better outcomes.
          </p>

          {/* Audience Switcher Toggle Pill */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setActiveTab('providers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'providers'
                  ? 'bg-gradient-to-r from-[#7b3fc7] to-[#8b5cf6] text-white shadow-md'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Providers</span>
            </button>

            <button
              onClick={() => setActiveTab('payers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'payers'
                  ? 'bg-gradient-to-r from-[#7b3fc7] to-[#8b5cf6] text-white shadow-md'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Payers</span>
            </button>
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            MAIN TWO-COLUMN CONTENT
            Left: Dynamic Perspective Story
            Right: Floating Patient / Network Glass Card
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4">
          
          {/* Left Column Narrative */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 max-w-lg"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-4">
                {current.headline}
              </h3>
              <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed font-normal mb-8">
                {current.description}
              </p>

              <Link
                to={current.linkHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ff7a57] hover:text-[#ff967a] group transition-colors"
              >
                <span>{current.linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right Column: Floating Dark Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8 max-w-[380px] w-full lg:ml-auto"
          >
            <div className="relative rounded-2xl p-5 bg-[#0f0a22]/80 backdrop-blur-2xl border border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <span className="text-xs font-bold text-white tracking-tight">
                  {current.cardTitle}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Upcoming / Priority Label */}
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-200/60 block mb-3 font-semibold">
                {current.cardCategory}
              </span>

              {/* List Items */}
              <div className="space-y-2.5 mb-5">
                {current.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: `${item.color}25`, color: item.color }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-white">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-purple-200/70">
                        {item.due}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#a855f7] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
                <span>{current.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Handwritten Note matching Master Mockup */}
            <div className="pt-2 text-right pr-2">
              <span className="font-['Caveat',cursive] text-xl sm:text-2xl text-purple-200/80 -rotate-3 inline-block tracking-wide">
                Information to better care.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
