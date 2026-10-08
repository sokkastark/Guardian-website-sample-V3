import React, { useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import LeadershipEditorial from '../../components/sections/LeadershipEditorial';
import MeetTheTeamGallery from '../../components/sections/MeetTheTeamGallery';
import HowWeWorkPathway from '../../components/sections/HowWeWorkPathway';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

const exploreLinks = [
  {
    title: 'Our Story',
    desc: 'How Guardian evolved.',
    path: '/why-guardian/our-story'
  },
  {
    title: 'Healthcare Expertise',
    desc: 'The knowledge behind the technology.',
    path: '/why-guardian/healthcare-expertise'
  },
  {
    title: 'Certifications & Trust',
    desc: 'The foundation behind the work.',
    path: '/why-guardian/certifications-trust'
  }
];

export default function LeadershipPage() {
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleHeroMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Calm, subtle 6px max depth movement
    setHeroParallax({ x: x * 12, y: y * 12 });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1c1636] selection:bg-[#7b3fc7] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          01 — HERO: Calm, Confident Editorial Hero with Large Team Photo
          ───────────────────────────────────────────────────────────── */}
      <section 
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-[#100b24] via-[#1a1233] to-[#241744] text-white overflow-hidden"
      >
        {/* Subtle Ambient Illumination */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#7b3fc7]/20 via-[#ff7a57]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-purple-200/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link to="/company/about" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-semibold">Leadership</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Typography & Single Primary Action */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                  <span>Leadership</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
                  People shaping the future of healthcare.
                </h1>

                <p className="text-lg sm:text-xl text-purple-100/90 leading-relaxed font-normal max-w-xl mb-8">
                  Guardian brings together healthcare experience, technology, and operational expertise to help organizations move from information to action.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#meet-the-team"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/20 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <span>Meet the team</span>
                    <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
                  </a>
                  <Link
                    to="/company/contact?intent=demo"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] transition-all duration-200"
                  >
                    <span>Request Demo</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Large Human/Team Visual (Subtle 4–8px Parallax) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: heroParallax.x,
                  y: heroParallax.y
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/60 aspect-[16/11]"
              >
                <img
                  src="/images/care-team-collaboration.jpg"
                  alt="Guardian healthcare and technology team collaborating on patient care"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100b24]/80 via-transparent to-black/10 pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-white/90 pointer-events-none">
                  <span className="font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Clinical & Operations Leadership
                  </span>
                  <span className="font-mono text-white/70 text-[11px]">
                    Winter Park, FL
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02 — LEADERSHIP: Editorial Roster & Featured Profile
          ───────────────────────────────────────────────────────────── */}
      <LeadershipEditorial />

      {/* ─────────────────────────────────────────────────────────────
          03 — MEET THE TEAM: Signature Asymmetric Floating Constellation
          ───────────────────────────────────────────────────────────── */}
      <MeetTheTeamGallery />

      {/* ─────────────────────────────────────────────────────────────
          04 — HOW WE WORK: Connected Visual Pathway (Zero Cards)
          ───────────────────────────────────────────────────────────── */}
      <HowWeWorkPathway />

      {/* ─────────────────────────────────────────────────────────────
          05 — EXPLORE COMPANY SIBLINGS
          ───────────────────────────────────────────────────────────── */}
      <RelatedPlatformModules
        modules={[
          { title: 'About Guardian', desc: 'Built from healthcare. Designed for action.', path: '/company/about' },
          { title: 'Security & Trust', desc: 'HITRUST & SOC 2 aligned security architecture.', path: '/company/security-trust' },
          { title: 'Careers', desc: 'Building technology-enabled healthcare teams.', path: '/company/careers' },
          { title: 'Contact', desc: 'Start a conversation with Guardian.', path: '/company/contact' }
        ]}
        title="Explore the Guardian Company Family."
        kicker="Company Navigation"
        tagPrefix="COMPANY"
        overviewLink=""
        actionText="Explore"
      />

      {/* ─────────────────────────────────────────────────────────────
          06 — FINAL CTA: Compact & Focused
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-12 text-center text-white shadow-xl shadow-[#7b3fc7]/20 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Build what comes next with Guardian.
          </h2>
          <p className="text-sm sm:text-base text-purple-100/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Explore how healthcare expertise, technology, and operational teams work together to support forward-thinking healthcare organizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/company/contact?intent=demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Request a Demo
            </Link>
            <Link
              to="/company/about"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-medium text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
            >
              About Guardian
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
