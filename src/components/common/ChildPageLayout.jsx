import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import InteractiveWorkflowPipeline from '../workflow/InteractiveWorkflowPipeline';

export default function ChildPageLayout({
  category,
  categoryPath,
  title,
  eyebrow,
  headline,
  supporting,
  ctaText = 'Contact Us',
  journey = [],
  journeyTitle = 'Data to Action Journey',
  journeySubtitle = 'How Guardian connects information with action',
  capabilities = [],
  capabilitiesTitle = 'Key Capabilities',
  capabilitiesSubtitle = 'What Guardian helps healthcare organizations achieve',
  supportingHeadline,
  supportingText,
  milestones = [],
  credentials = [],
  siblings = [],
  closingHeadline,
  closingText,
  heroVisualBadge,
  heroImage,
  mockupUrl,
  contextType = 'default'
}) {
  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b3fc7]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7a57]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-purple-200/70 mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <Link to={categoryPath} className="hover:text-white transition-colors">{category}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <span className="text-white font-medium">{title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>{eyebrow || title}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                {headline}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                {supporting}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/20 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0" />
                </Link>

                <Link
                  to={categoryPath}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <span>{category} Overview</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Visual Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7"
            >
              {heroImage ? (
                <div className="relative rounded-2xl bg-[#1a1233] border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-2.5 overflow-hidden group transform lg:scale-105 origin-left sm:origin-center transition-transform duration-300">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-[11px] text-purple-300 font-mono ml-2">live.itsguardian.com</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                      Live Environment
                    </span>
                  </div>
                  <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                    <img 
                      src={heroImage} 
                      alt={`${title} Interface`} 
                      className="w-full h-auto object-contain rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative rounded-3xl bg-white/5 border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/30">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-200">
                      {category} // Architecture
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Connected
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <p className="text-xs text-purple-200/80 mb-1">Focus Area</p>
                      <p className="text-sm font-semibold text-white">{title}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <p className="text-xs text-purple-200/80 mb-1">Operational Mode</p>
                      <p className="text-sm font-semibold text-purple-100">People + Technology Enabled</p>
                    </div>
                    {heroVisualBadge && (
                      <div className="p-3.5 rounded-xl bg-[#7b3fc7]/20 border border-[#7b3fc7]/40">
                        <p className="text-xs text-purple-300 mb-0.5 font-mono uppercase">Key Foundation</p>
                        <p className="text-xs font-medium text-white">{heroVisualBadge}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-200/70">
                    <span>Guardian Health Service</span>
                    <span>Enterprise Ready</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE JOURNEY / INTERACTIVE WORKFLOW PIPELINE */}
      {journey.length > 0 && (
        <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
              Interactive Workflow Pipeline
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              {journeyTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              {journeySubtitle}
            </p>
          </div>

          <InteractiveWorkflowPipeline
            steps={journey}
            contextType={contextType}
            category={category}
            title={title}
          />
        </section>
      )}

      {/* 3. KEY CAPABILITIES / WHAT GUARDIAN HELPS WITH */}
      {capabilities.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-y border-[#e1e1e5]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
                Core Competencies
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
                {capabilitiesTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#727272]">
                {capabilitiesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {capabilities.map((cap, idx) => {
                const capText = typeof cap === 'string' ? cap : cap.title || cap.text;
                return (
                  <motion.div
                    key={capText + idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] hover:bg-white hover:border-[#7b3fc7]/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#f2ecf9] flex items-center justify-center shrink-0 mt-0.5 text-[#7b3fc7]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1c1636] leading-snug">
                        {capText}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. MILESTONES (FOR OUR STORY) */}
      {milestones.length > 0 && (
        <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
              Historical Evolution
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              Guardian Milestones
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              A journey rooted in healthcare experience and value-based care performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-white border border-[#e1e1e5] shadow-sm relative overflow-hidden"
              >
                <div className="text-3xl font-black text-[#7b3fc7] mb-2 font-mono">
                  {m.year}
                </div>
                <p className="text-base font-semibold text-[#1c1636] mb-1">
                  {m.title}
                </p>
                {m.description && (
                  <p className="text-xs text-[#727272] leading-relaxed">
                    {m.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 5. CREDENTIALS & TRUST (FOR CERTIFICATIONS PAGE) */}
      {credentials.length > 0 && (
        <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
              Credentials & Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              Industry Certifications & Trust
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Meeting rigorous healthcare security, interoperability, and registry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, idx) => (
              <motion.div
                key={cred.title + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#1c1636] mb-1">
                  {cred.title}
                </h3>
                {cred.description && (
                  <p className="text-xs text-[#727272] leading-relaxed">
                    {cred.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 6. SUPPORTING EDITORIAL SECTION */}
      {supportingHeadline && (
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 block">
                Healthcare Foundation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                {supportingHeadline}
              </h3>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal mb-8">
                {supportingText}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] transition-all duration-200"
              >
                <span>Partner with Guardian</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* 7. SIBLING NAVIGATION */}
      {siblings.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-[#e1e1e5]/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#adabb7]">
                  Related Capabilities
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636]">
                  More in {category}
                </h3>
              </div>
              <Link
                to={categoryPath}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7b3fc7] hover:underline self-start sm:self-auto"
              >
                <span>View all {category}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {siblings.map((sibling) => (
                <Link
                  key={sibling.path}
                  to={sibling.path}
                  className="group p-5 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] hover:border-[#7b3fc7]/40 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-[#7b3fc7] font-semibold">
                      {category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#adabb7] group-hover:text-[#7b3fc7] transition-colors" />
                  </div>
                  <p className="text-base font-bold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors">
                    {sibling.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. PAGE-SPECIFIC CLOSING CTA */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-[#7b3fc7]/20 border border-white/10"
        >
          {/* Subtle Ambient Radial Lighting within Card */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#ff7a57]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#7b3fc7]/40 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>Partner With Guardian</span>
            </div>

            {/* Dynamic Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              {closingHeadline || 'Turn healthcare data into better action.'}
            </h2>

            {/* Dynamic Subheading */}
            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
              {closingText || 'Connect the data. Understand the patient. Identify the opportunity. Take action.'}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Talk to Guardian</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>

              <Link
                to={categoryPath}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Explore {category} Overview</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
