import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Cpu, 
  Layers, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function WhyGuardian() {
  const pillars = [
    {
      title: 'Healthcare Expertise',
      desc: 'Led by clinicians, for real-world care.',
      icon: Stethoscope,
      color: '#7b3fc7',
    },
    {
      title: 'Connected Technology',
      desc: 'Interoperable, scalable, and secure.',
      icon: Cpu,
      color: '#8b5cf6',
    },
    {
      title: 'Integrated Data',
      desc: 'A complete, longitudinal patient view.',
      icon: Layers,
      color: '#ec4899',
    },
    {
      title: 'Human Operational Support',
      desc: 'People who understand the work.',
      icon: Users,
      color: '#38bdf8',
    },
    {
      title: 'Value-Based Care Alignment',
      desc: 'Built for better outcomes.',
      icon: ShieldCheck,
      color: '#10b981',
    },
  ];

  return (
    <section 
      id="why-guardian" 
      className="relative py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-[#faf8fd] via-white to-[#faf8fd] text-[#1c1636] overflow-hidden select-none border-t border-[#f0edf7]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[650px] h-[550px] bg-[#7b3fc7]/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Story Narrative & CTA Button (col-span-4)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-4 max-w-md"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3edf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>WHY GUARDIAN</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.15] mb-5">
              Built from healthcare.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                Designed for action.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#524b6b] leading-relaxed font-normal mb-8">
              We combine healthcare expertise, connected technology, and operational support to help you turn complex data into meaningful action.
            </p>

            {/* CTA Button */}
            <Link
              to="/company/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(123,63,199,0.35)] hover:shadow-[0_8px_36px_rgba(123,63,199,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>Learn more about Guardian</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              CENTER COLUMN: Collaboration Photo Card (col-span-4)
              With caption: "Real conversations. Real solutions."
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(28,22,54,0.12)] border border-[#ede7f6] group h-[380px] sm:h-[420px]">
              <img
                src="/images/care-team-collaboration.jpg"
                alt="Healthcare Care Team in Real Discussion"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0919] via-[#0c0919]/40 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-white font-bold text-base sm:text-lg block tracking-tight leading-snug">
                  Real conversations.
                </span>
                <span className="text-purple-200/90 text-sm font-medium block">
                  Real solutions.
                </span>
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: 5 Sleek Horizontal Pill Cards (col-span-4)
              ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-4 space-y-2.5"
          >
            {pillars.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white hover:bg-[#faf8fd] border border-[#ede7f6] shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#727272] truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-[#adabb7] group-hover:text-[#7b3fc7] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
