import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  ClipboardList, 
  ShieldAlert, 
  Award, 
  MessageSquareHeart, 
  BarChart3, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SolutionsSection() {
  const [activeNode, setActiveNode] = useState(0);

  const satellites = [
    {
      id: 'pop-health',
      title: 'Population Health',
      moduleName: 'CMC (Cardiometabolic Care)',
      angle: -90, // Top
      color: '#a855f7',
      icon: HeartPulse,
      desc: 'Stratify population risk and monitor longitudinal trajectories across chronic cohorts.',
    },
    {
      id: 'care-mgmt',
      title: 'Care Management',
      moduleName: 'ADT & Referral Manager',
      angle: -30, // Top Right
      color: '#10b981',
      icon: ClipboardList,
      desc: 'Orchestrate comprehensive care plans and transition workflows within 48 hours.',
    },
    {
      id: 'risk-adj',
      title: 'Risk Adjustment',
      moduleName: 'MRA Module',
      angle: 30, // Bottom Right
      color: '#06b6d4',
      icon: ShieldAlert,
      desc: 'Pre-encounter clinical intelligence and compliant persistent condition recapture.',
    },
    {
      id: 'quality',
      title: 'Quality & Performance',
      moduleName: 'Quality Manager Module',
      angle: 90, // Bottom
      color: '#f97316',
      icon: Award,
      desc: 'Real-time HEDIS surveillance, automated gap closure prompts, and MIPS compliance.',
    },
    {
      id: 'engagement',
      title: 'Patient Engagement',
      moduleName: 'Telemedicine Platform',
      angle: 150, // Bottom Left
      color: '#3b82f6',
      icon: MessageSquareHeart,
      desc: 'Targeted outreach overcoming SDOH barriers, transportation, and specialist booking.',
    },
    {
      id: 'analytics',
      title: 'Analytics & Intelligence',
      moduleName: 'Analytics Hub',
      angle: 210, // Top Left
      color: '#8b5cf6',
      icon: BarChart3,
      desc: 'Executive cockpits, network utilization patterns, and predictive contract forecasts.',
    },
  ];

  return (
    <section 
      id="solutions" 
      className="relative py-24 sm:py-28 lg:py-32 bg-white text-[#1c1636] overflow-hidden select-none border-t border-[#f0edf7]"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#7b3fc7]/5 via-[#ff7a57]/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 ambient-grid opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Story Narrative & CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 max-w-lg"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3edf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#1c1636] leading-[1.15] mb-6">
              Built around the work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                healthcare organizations need to get done.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed font-normal mb-8">
              From population health to quality, our solutions help you improve care, performance, and outcomes.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_6px_28px_rgba(123,63,199,0.35)] hover:shadow-[0_8px_36px_rgba(123,63,199,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>Explore solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Active Satellite Summary Drawer */}
            <div className="mt-8 p-4 rounded-2xl bg-[#faf8fd] border border-[#ede7f6] text-xs text-[#524b6b]">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1c1636]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: satellites[activeNode].color }} />
                  <span>{satellites[activeNode].title}</span>
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] border border-[#7b3fc7]/20">
                  {satellites[activeNode].moduleName}
                </span>
              </div>
              <p>{satellites[activeNode].desc}</p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Radial Satellite Constellation Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]"
          >
            {/* Orbiting Radial Rings */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full border border-[#7b3fc7]/15 pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] lg:w-[340px] lg:h-[340px] rounded-full border border-dashed border-[#7b3fc7]/20 pointer-events-none" />

            {/* Center Core Node: Guardian Ecosystem */}
            <div className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#1c1636] via-[#2a1e4a] to-[#1c1636] border-2 border-white/20 shadow-[0_12px_40px_rgba(28,22,54,0.4)] flex flex-col items-center justify-center text-center p-3">
              <div className="w-8 h-8 rounded-full bg-[#7b3fc7]/30 flex items-center justify-center mb-1 border border-[#7b3fc7]/50">
                <Sparkles className="w-4 h-4 text-[#ff7a57]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight leading-tight">
                Guardian Engine
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-purple-200/70 block mt-0.5">
                Integrated Suite
              </span>
            </div>

            {/* 6 Peripheral Satellite Nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {satellites.map((sat, idx) => {
                const Icon = sat.icon;
                const isActive = activeNode === idx;
                const radius = 160;

                const rad = (sat.angle * Math.PI) / 180;
                const x = Math.round(Math.cos(rad) * radius);
                const y = Math.round(Math.sin(rad) * radius);

                return (
                  <div
                    key={sat.id}
                    className="absolute transition-transform duration-500 pointer-events-auto"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveNode(idx)}
                      className={`group relative flex items-center gap-2 p-2 sm:p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-white border-2 shadow-[0_8px_30px_rgba(123,63,199,0.35)] scale-110'
                          : 'bg-white/90 hover:bg-white border border-[#e5e0ee] shadow-sm hover:shadow-md'
                      }`}
                      style={{
                        borderColor: isActive ? sat.color : undefined,
                      }}
                    >
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs"
                        style={{ backgroundColor: sat.color }}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      <div className="flex items-center text-left max-w-[85px] sm:max-w-[110px] pr-1">
                        {sat.title === 'Population Health' ? (
                          <div className="flex items-center justify-between w-full text-[10px] sm:text-xs font-bold tracking-tight leading-tight">
                            <span className={`w-1/2 text-right pr-2.5 sm:pr-3 border-r border-[#e5e0ee] transition-colors ${
                              isActive ? 'text-[#1c1636]' : 'text-[#524b6b] group-hover:text-[#1c1636]'
                            }`}>
                              Population
                            </span>
                            <span className={`w-1/2 text-left pl-2.5 sm:pl-3 transition-colors ${
                              isActive ? 'text-[#1c1636]' : 'text-[#524b6b] group-hover:text-[#1c1636]'
                            }`}>
                              Health
                            </span>
                          </div>
                        ) : (
                          <div className="max-w-[90px] sm:max-w-[120px]">
                            <span className={`text-[10px] sm:text-xs font-bold tracking-tight block leading-tight transition-colors ${
                              isActive ? 'text-[#1c1636]' : 'text-[#524b6b] group-hover:text-[#1c1636]'
                            }`}>
                              {sat.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            {/* Handwritten Annotation */}
            <div className="w-full text-right pr-4 sm:pr-8 mt-6 sm:mt-10">
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl text-[#7b3fc7]/85 -rotate-3 inline-block tracking-wide">
                Connected solutions. Real impact.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
