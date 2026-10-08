import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Lock, Network, ArrowRight } from 'lucide-react';

export default function TrustSection() {
  const certifications = [
    {
      name: 'CMS MIPS Qualified Registry Architecture',
      badge: 'Federal Quality Reporting',
      image: '/images/cert-cms.webp',
      desc: 'Centers for Medicare & Medicaid Services qualified clinical data registry architecture.',
    },
    {
      name: 'eHealth Exchange Interoperability Alignment',
      badge: 'National Network',
      image: '/images/cert-ehealth.webp',
      desc: 'Active participant alignment with national health information exchange protocols.',
    },
    {
      name: 'CareQuality Framework Alignment',
      badge: 'Universal Framework',
      image: '/images/cert-carequality.webp',
      desc: 'Trusted exchange framework alignment connecting EHR networks and healthcare systems.',
    },
    {
      name: 'HITRUST & SOC 2 Security Alignment',
      badge: 'Cybersecurity Maturity',
      isHitrust: true,
      desc: 'Rigorous architectural alignment with HITRUST CSF and SOC 2 security controls protecting PHI.',
    },
  ];

  return (
    <div id="trust-root" className="select-none">
      {/* ─────────────────────────────────────────────────────────────
          PART 1: TRUST & SECURITY FRAMEWORKS SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="trust" className="relative py-24 sm:py-28 bg-[#faf8fd] text-[#1c1636] overflow-hidden border-t border-[#ede7f6]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Section Header: Left-aligned with CTA button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3edf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
                <span>TRUST & SECURITY FRAMEWORKS</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.15] mb-4">
                Built for healthcare.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                  Trusted by healthcare organizations.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed font-normal">
                Guardian adheres to the highest national healthcare standards for organizations and user data interoperability, and cybersecurity.
              </p>
            </motion.div>

            {/* Approach to Security CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="shrink-0"
            >
              <Link
                to="/company/security-trust"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(123,63,199,0.35)] hover:shadow-[0_8px_36px_rgba(123,63,199,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Our approach to security</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* 4 White Certification Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-white p-6 rounded-3xl border border-[#ede7f6] shadow-[0_8px_30px_rgba(28,22,54,0.05)] hover:border-[#7b3fc7]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-16 flex items-center justify-start mb-4">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="h-11 w-auto object-contain max-w-[130px] group-hover:scale-105 transition-transform"
                      />
                    ) : cert.isHitrust ? (
                      <div className="flex items-center gap-1.5 font-serif font-black text-xl text-[#b91c1c] tracking-wider">
                        <span className="text-2xl font-black text-[#dc2626]">HITRUST</span>
                      </div>
                    ) : (
                      <div className="p-3 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7]">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-bold text-[#1c1636] mb-2 tracking-tight">
                    {cert.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#524b6b] leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f0edf7] text-[10px] font-mono text-[#7b3fc7] font-semibold">
                  {cert.badge}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PART 2: PRE-FOOTER CONVERSION BANNER
          "Turn healthcare data into better action."
          Matching Master Mockup (media_1789147654036.png)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 bg-[#080511] text-white overflow-hidden">
        {/* Ambient atmospheric purple glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/20 blur-[170px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-[#ec4899]/10 blur-[160px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-7 max-w-xl"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a57] animate-pulse" />
                <span>LET'S BUILD A HEALTHIER TOMORROW</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
                Turn healthcare data into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-[#ff7a57]">
                  better action.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-purple-100/85 leading-relaxed font-normal mb-8">
                Connect the data. Understand the patient. Identify the opportunity. Take action — with Guardian.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/company/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-[#0c0919] bg-white hover:bg-purple-100 shadow-[0_6px_28px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
                >
                  <span>Talk to Guardian</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-purple-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-200"
                >
                  <span>Explore our platform</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column (col-span-5): Clinician Image + Handwritten Script */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
              className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative"
            >
              <div className="relative max-w-[340px] sm:max-w-[400px]">
                {/* Clinician Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 to-transparent">
                  <img
                    src="/images/challenge/nurse.jpg"
                    alt="Healthcare Professional with Stethoscope"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080511] via-transparent to-transparent opacity-60" />
                </div>

                {/* Handwritten Script Annotation */}
                <div className="pt-4 text-right pr-2">
                  <span className="font-['Caveat',cursive] text-2xl sm:text-3xl text-purple-200/90 -rotate-3 inline-block tracking-wide">
                    Better data. Brighter, healthier tomorrows.
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
