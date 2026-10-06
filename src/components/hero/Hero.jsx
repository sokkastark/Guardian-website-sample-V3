import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Layers } from 'lucide-react';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import HeroDataPills from './HeroDataPills';
import HeroVisualCards from './HeroVisualCards';

export default function Hero() {
  // Normalized mouse coords from -1 to +1 with smooth spring damping
  const { x: mouseX, y: mouseY } = useMouseParallax(0.06);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-24 sm:pt-28 pb-0 lg:pt-32 lg:pb-0 overflow-hidden flex flex-col justify-between lg:justify-center bg-[#0d1527] text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          LAYER 0: Panoramic Hospital Skyline Background (Far Depth)
          Moves with INVERSE parallax relative to mouse position
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-[6%] -left-[6%] w-[112%] h-[112%] will-change-transform"
          style={{
            transform: `translate3d(${mouseX * -24}px, ${mouseY * -18}px, 0px) scale(1.04)`,
          }}
        >
          <img
            src="/images/hero-skyline-bg.jpg"
            alt="Modern Healthcare Tower with City Skyline View"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Ambient Darkened Gradient Veil ensuring text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/90 via-[#0d1527]/60 to-transparent w-full lg:w-[60%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527]/80 via-transparent to-[#0d1527]/30 z-10" />

        {/* Ambient Glowing Accents */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/20 blur-[150px] rounded-full pointer-events-none z-10" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#ff7a57]/15 blur-[140px] rounded-full pointer-events-none z-10" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 2: Main Character (Clinician Cutout) (Midplane Anchor)
          Positioned in FRONT of the left data pills (Layer 3)
          and BEHIND the holographic cards (Layer 1).
          ANCHORED FLUSH TO THE VERY BOTTOM OF THE HERO SECTION (-bottom-px)
          Guarantees ZERO gap on mobile, tablet, and desktop!
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute -bottom-px left-[0%] sm:left-[6%] lg:left-[34%] xl:left-[36%] lg:ml-[120px] pointer-events-none z-20">
        <div
          className="relative will-change-transform"
          style={{
            transform: `translate3d(${mouseX * 1.5}px, 0px, 0px)`,
          }}
        >
          <img
            src="/images/hero-clinician-cutout.png"
            alt="Guardian Healthcare Physician Specialist"
            className="h-[290px] sm:h-[350px] lg:h-[640px] xl:h-[700px] w-auto max-w-none object-contain object-bottom block drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            loading="eager"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CONTENT GRID:
          - Desktop (lg:): 3-column split (Text, Pills, Cards) + Absolute Doctor
          - Mobile (< lg): Stacked Text followed by Framed Mobile Visual Stage
          ───────────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center flex-1">
          
          {/* Left Column: Typography & Narrative CTAs (STAYS STILL, z-30) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-start pt-2 lg:pt-0 relative z-30"
            style={{
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping" />
              <span>GUARDIAN POPULATION HEALTH PLATFORM</span>
            </div>

            {/* Headline formatted into exactly two lines */}
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.14] mb-3 sm:mb-4">
              <span className="block text-white whitespace-nowrap">Healthcare data,</span>
              <span className="block mt-0.5 sm:mt-1 whitespace-nowrap">
                turned into <span className="text-[#a855f7]">action.</span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-base text-purple-100/90 leading-relaxed max-w-md mb-4 sm:mb-6 font-normal">
              Connect healthcare data, clinical intelligence, and healthcare expertise to help your organization understand, prioritize, and act.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-2.5 w-full sm:w-auto mb-4 sm:mb-8">
              <Link
                to="/platform"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-[#7b3fc7] to-[#9333ea] hover:from-[#9333ea] hover:to-[#a855f7] shadow-[0_4px_20px_rgba(147,51,234,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Guardian</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/company/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-xs transition-all duration-300 active:scale-95"
              >
                <span>Talk to us</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-3 sm:pt-6 border-t border-white/15 w-full max-w-md">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-purple-200/60 block mb-1.5 sm:mb-2.5">
                Healthcare Standards & Certifications
              </span>
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs text-purple-200/90">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span className="font-medium text-[10px] sm:text-[11px]">CMS MIPS</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#fb923c]" />
                  <span className="font-medium text-[10px] sm:text-[11px]">HITRUST e1</span>
                </div>
                <div className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span className="font-medium text-[10px] sm:text-[11px]">CareQuality</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              MOBILE INTERACTIVE STAGE (< lg screens)
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:hidden relative w-full h-[290px] sm:h-[350px] mb-0 select-none pointer-events-auto">
            {/* Mobile Layer 3: Right Holographic Cards (z-10) */}
            <div className="absolute top-0 right-0 w-[245px] sm:w-[280px] scale-[0.78] sm:scale-90 origin-top-right z-10 pointer-events-auto">
              <HeroVisualCards mouseX={mouseX} mouseY={mouseY} />
            </div>

            {/* Mobile Layer 1: Left Pills (z-30) */}
            <div className="absolute top-1 left-0 scale-[0.75] sm:scale-85 origin-top-left z-30 pointer-events-auto">
              <HeroDataPills mouseX={mouseX} mouseY={mouseY} maxItems={3} />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              DESKTOP LAYOUT (lg: screens)
              ───────────────────────────────────────────────────────────── */}
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 items-center justify-start lg:pl-1 relative z-30">
            <HeroDataPills mouseX={mouseX} mouseY={mouseY} />
          </div>

          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 relative w-full items-center justify-end z-10 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 -translate-y-[20px]">
            <HeroVisualCards mouseX={mouseX} mouseY={mouseY} />
          </div>

        </div>
      </div>
    </section>
  );
}
