import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Search, 
  Lightbulb, 
  Rocket, 
  Settings, 
  Target, 
  ArrowRight,
  User,
  Sparkles
} from 'lucide-react';

export default function SolutionsSection() {
  const [activeNode, setActiveNode] = useState(0);

  // 6 Solutions with Brand Gradients & Concise High-Impact Taglines
  const solutions = [
    // LEFT SIDE (Indices 0, 1, 2)
    {
      id: 'pop-health',
      idx: 0,
      side: 'left',
      title: 'POPULATION HEALTH',
      subtitle: 'Cardiometabolic Care',
      pillTagline: 'Longitudinal Cohort Risk & CMC',
      gradientId: 'grad-cyan',
      color: '#00b4d8',
      gradientCss: 'from-[#00b4d8] to-[#06b6d4]',
      icon: User,
      desc: 'Stratify population risk and monitor longitudinal trajectories across chronic cohorts.',
      midDeg: -120,
      dot: { x: 446, y: 136.5 },
      elbow: 'M 446 136.5 L 380 88 L 321 88',
      cardX: 25,
      cardY: 44
    },
    {
      id: 'analytics',
      idx: 1,
      side: 'left',
      title: 'ANALYTICS & INTELLIGENCE',
      subtitle: 'Analytics Hub',
      pillTagline: 'Executive Cockpits & Forecasts',
      gradientId: 'grad-purple',
      color: '#7b3fc7',
      gradientCss: 'from-[#7b3fc7] to-[#9333ea]',
      icon: Search,
      desc: 'Executive cockpits, network utilization patterns, and predictive contract forecasts.',
      midDeg: 180,
      dot: { x: 392, y: 230 },
      elbow: 'M 392 230 L 321 230',
      cardX: 25,
      cardY: 186
    },
    {
      id: 'engagement',
      idx: 2,
      side: 'left',
      title: 'PATIENT ENGAGEMENT',
      subtitle: 'Telemedicine Platform',
      pillTagline: 'Targeted Outreach & SDOH',
      gradientId: 'grad-emerald',
      color: '#10b981',
      gradientCss: 'from-[#10b981] to-[#059669]',
      icon: Lightbulb,
      desc: 'Targeted outreach overcoming SDOH barriers, transportation, and specialist booking.',
      midDeg: 120,
      dot: { x: 446, y: 323.5 },
      elbow: 'M 446 323.5 L 380 372 L 321 372',
      cardX: 25,
      cardY: 328
    },

    // RIGHT SIDE (Indices 3, 4, 5)
    {
      id: 'care-mgmt',
      idx: 3,
      side: 'right',
      title: 'CARE MANAGEMENT',
      subtitle: 'ADT & Referral Manager',
      pillTagline: 'Care Plans & 48h Workflows',
      gradientId: 'grad-indigo',
      color: '#8b5cf6',
      gradientCss: 'from-[#6366f1] to-[#8b5cf6]',
      icon: Rocket,
      desc: 'Orchestrate comprehensive care plans and transition workflows within 48 hours.',
      midDeg: -60,
      dot: { x: 554, y: 136.5 },
      elbow: 'M 554 136.5 L 620 88 L 671 88',
      cardX: 665,
      cardY: 44
    },
    {
      id: 'risk-adj',
      idx: 4,
      side: 'right',
      title: 'RISK ADJUSTMENT',
      subtitle: 'MRA Module',
      pillTagline: 'Pre-Encounter MRA Recapture',
      gradientId: 'grad-amber',
      color: '#f59e0b',
      gradientCss: 'from-[#f59e0b] to-[#d97706]',
      icon: Settings,
      desc: 'Pre-encounter clinical intelligence and compliant persistent condition recapture.',
      midDeg: 0,
      dot: { x: 608, y: 230 },
      elbow: 'M 608 230 L 671 230',
      cardX: 665,
      cardY: 186
    },
    {
      id: 'quality',
      idx: 5,
      side: 'right',
      title: 'QUALITY & PERFORMANCE',
      subtitle: 'Quality Manager Module',
      pillTagline: 'HEDIS & Gap Closure Prompts',
      gradientId: 'grad-pink',
      color: '#ec4899',
      gradientCss: 'from-[#ec4899] to-[#ff7a57]',
      icon: Target,
      desc: 'Real-time HEDIS surveillance, automated gap closure prompts, and MIPS compliance.',
      midDeg: 60,
      dot: { x: 554, y: 323.5 },
      elbow: 'M 554 323.5 L 620 372 L 671 372',
      cardX: 665,
      cardY: 328
    }
  ];

  const activeSolution = solutions[activeNode] || solutions[0];

  // Helper to generate thick SVG arc path
  const getArcPath = (cx, cy, rIn, rOut, midDeg, arcWidthDeg = 48) => {
    const startDeg = midDeg - arcWidthDeg / 2;
    const endDeg = midDeg + arcWidthDeg / 2;

    const startRad = (startDeg * Math.PI) / 180;
    const endRad = (endDeg * Math.PI) / 180;

    const x1_out = cx + rOut * Math.cos(startRad);
    const y1_out = cy + rOut * Math.sin(startRad);
    const x2_out = cx + rOut * Math.cos(endRad);
    const y2_out = cy + rOut * Math.sin(endRad);

    const x2_in = cx + rIn * Math.cos(endRad);
    const y2_in = cy + rIn * Math.sin(endRad);
    const x1_in = cx + rIn * Math.cos(startRad);
    const y1_in = cy + rIn * Math.sin(startRad);

    return `M ${x1_out} ${y1_out} A ${rOut} ${rOut} 0 0 1 ${x2_out} ${y2_out} L ${x2_in} ${y2_in} A ${rIn} ${rIn} 0 0 0 ${x1_in} ${y1_in} Z`;
  };

  return (
    <section 
      id="solutions" 
      className="relative py-8 sm:py-10 lg:py-12 bg-[#f8f7fc] text-[#1c1636] overflow-hidden select-none border-t border-[#f0edf7]"
    >
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#7b3fc7]/6 via-[#ff7a57]/4 to-transparent rounded-full blur-[120px]" />
        <div className="absolute inset-0 ambient-grid opacity-[0.03]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SECTION HEADER (With Explore Button placed compactly on the top right) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3edf9] border border-[#7b3fc7]/25 text-[#7b3fc7] text-[11px] font-semibold tracking-wider uppercase mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b3fc7] animate-pulse" />
              <span>SOLUTIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1c1636] leading-[1.15] mb-2">
              Built around the work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
                healthcare organizations need to get done.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#524b6b] leading-relaxed font-normal">
              From population health to quality, our solutions help you improve care, performance, and outcomes.
            </p>
          </div>

          {/* Top-Right Positioned Button */}
          <div className="shrink-0 pb-1">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7b3fc7] via-[#8b5cf6] to-[#a855f7] hover:from-[#8b5cf6] hover:to-[#c084fc] shadow-[0_4px_20px_rgba(123,63,199,0.3)] hover:shadow-[0_6px_25px_rgba(123,63,199,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
            >
              <span>Explore solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            INFOGRAPHIC DIAGRAM AREA
            Desktop (lg): SVG diagram layout (viewBox 0 0 1000 460)
            Mobile (<lg): Stacked cards + Interactive Wheel
            ───────────────────────────────────────────────────────────── */}
        <div className="relative pt-1 pb-1">
          
          {/* DESKTOP UNIFIED VIEW (lg+) */}
          <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[460px]">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1000 460"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Brand Linear Gradients */}
                <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b4d8" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7b3fc7" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>

                <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>

                <linearGradient id="grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>

                <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>

                <linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#ff7a57" />
                </linearGradient>

                <filter id="medallion-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1c1636" floodOpacity="0.22" />
                </filter>
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 6 Elbow Connector Lines */}
              {solutions.map((item) => {
                const isActive = activeNode === item.idx;
                return (
                  <g key={`elbow-${item.id}`}>
                    <path
                      d={item.elbow}
                      fill="none"
                      stroke={isActive ? item.color : "#cbd5e1"}
                      strokeWidth={isActive ? "2.5" : "1.75"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300"
                    />
                    {/* Circle Dot near Arc */}
                    <circle
                      cx={item.dot.x}
                      cy={item.dot.y}
                      r={isActive ? "9" : "7"}
                      fill={`url(#${item.gradientId})`}
                      className="transition-all duration-300 cursor-pointer"
                      onClick={() => setActiveNode(item.idx)}
                    />
                  </g>
                );
              })}

              {/* Outer Decorative Ring around Medallion */}
              <circle cx="500" cy="230" r="118" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />

              {/* 6 Curved Gradient Arc Segments */}
              {solutions.map((item) => {
                const isActive = activeNode === item.idx;
                const pathData = getArcPath(500, 230, 72, 98, item.midDeg, 48);
                return (
                  <path
                    key={`arc-${item.id}`}
                    d={pathData}
                    fill={`url(#${item.gradientId})`}
                    opacity={isActive ? 1 : 0.8}
                    filter={isActive ? "url(#glow-filter)" : undefined}
                    className="transition-all duration-300 cursor-pointer hover:opacity-100"
                    onClick={() => setActiveNode(item.idx)}
                  />
                );
              })}

              {/* Center Medallion Base Circle */}
              <circle 
                cx="500" 
                cy="230" 
                r="62" 
                fill="#ffffff" 
                stroke="#e2e8f0" 
                strokeWidth="6" 
                filter="url(#medallion-shadow)"
              />

              {/* Center Medallion Text Overlay */}
              <g className="pointer-events-none">
                <text x="500" y="215" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="800" letterSpacing="1">
                  GUARDIAN
                </text>
                <text x="500" y="228" textAnchor="middle" fill="#1c1636" fontSize="11" fontWeight="900" letterSpacing="0.5">
                  SOLUTIONS
                </text>
                <text x="500" y="240" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600" letterSpacing="1">
                  ENGINE
                </text>
                
                {/* 6 Colored Square Indicators */}
                {solutions.map((item, idx) => (
                  <rect
                    key={`sq-${item.id}`}
                    x={474 + idx * 9}
                    y="248"
                    width="5"
                    height="5"
                    rx="1"
                    fill={`url(#${item.gradientId})`}
                  />
                ))}
              </g>

              {/* 6 PILL CARDS (With concise high-impact taglines for clean spacious legibility) */}
              {solutions.map((item) => {
                const Icon = item.icon;
                const isActive = activeNode === item.idx;
                const isLeft = item.side === 'left';

                return (
                  <foreignObject
                    key={`card-fo-${item.id}`}
                    x={item.cardX}
                    y={item.cardY}
                    width="310"
                    height="88"
                    className="overflow-visible"
                  >
                    <div className="p-1.5 w-full h-full overflow-visible">
                      <div
                        onClick={() => setActiveNode(item.idx)}
                        className={`w-[290px] h-[76px] bg-white rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-between overflow-hidden group ${
                          isLeft ? 'pl-5 pr-0' : 'pl-0 pr-5'
                        } ${
                          isActive 
                            ? 'border-2 shadow-[0_12px_32px_rgba(28,22,54,0.18)] scale-[1.02]' 
                            : 'border-[#cbd5e1] hover:border-slate-400 shadow-[0_8px_24px_rgba(28,22,54,0.08)] hover:shadow-[0_10px_28px_rgba(28,22,54,0.12)]'
                        }`}
                        style={{ borderColor: isActive ? item.color : undefined }}
                      >
                        {/* Left Badge (for Right Pills) */}
                        {!isLeft && (
                          <div 
                            className={`w-14 h-full rounded-l-full flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:scale-105 mr-3 bg-gradient-to-r ${item.gradientCss}`}
                          >
                            <Icon className="w-5 h-5 stroke-[2.2]" />
                          </div>
                        )}

                        {/* Text Portion */}
                        <div className={`flex-1 ${isLeft ? 'pr-3' : ''}`}>
                          <h3 
                            className="text-xs font-extrabold tracking-tight leading-tight mb-1"
                            style={{ color: item.color }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-[#475569] leading-snug font-medium line-clamp-1">
                            {item.pillTagline}
                          </p>
                        </div>

                        {/* Right Badge (for Left Pills) */}
                        {isLeft && (
                          <div 
                            className={`w-14 h-full rounded-r-full flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:scale-105 bg-gradient-to-r ${item.gradientCss}`}
                          >
                            <Icon className="w-5 h-5 stroke-[2.2]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </foreignObject>
                );
              })}

            </svg>
          </div>

          {/* MOBILE / TABLET RESPONSIVE STACK (<lg) */}
          <div className="lg:hidden flex flex-col gap-4">
            {/* Interactive Wheel Preview on Mobile */}
            <div className="flex flex-col items-center justify-center py-2">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 240">
                  <circle cx="120" cy="120" r="105" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                  {solutions.map((item) => {
                    const isActive = activeNode === item.idx;
                    const pathData = getArcPath(120, 120, 78, 102, item.midDeg, 48);
                    return (
                      <path
                        key={`mob-arc-${item.id}`}
                        d={pathData}
                        fill={item.color}
                        opacity={isActive ? 1 : 0.75}
                        className="transition-all duration-300 cursor-pointer pointer-events-auto"
                        onClick={() => setActiveNode(item.idx)}
                      />
                    );
                  })}
                  <circle cx="120" cy="120" r="66" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
                </svg>
                <div className="relative z-10 text-center px-2 pointer-events-none">
                  <span className="text-[10px] font-extrabold tracking-wider text-[#475569] uppercase block">
                    GUARDIAN
                  </span>
                  <span className="text-[11px] font-black text-[#1c1636] uppercase block">
                    SOLUTIONS
                  </span>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {solutions.map((item) => (
                      <span 
                        key={`mob-sq-${item.id}`} 
                        className="w-1.5 h-1.5 rounded-xs"
                        style={{ backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* List of Mobile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solutions.map((item) => {
                const Icon = item.icon;
                const isActive = activeNode === item.idx;
                return (
                  <div
                    key={`mob-card-${item.id}`}
                    onClick={() => setActiveNode(item.idx)}
                    className={`p-3 bg-white rounded-2xl border flex items-center gap-3 cursor-pointer shadow-md transition-all ${
                      isActive ? 'border-2 shadow-lg' : 'border-[#cbd5e1]'
                    }`}
                    style={{ borderColor: isActive ? item.color : undefined }}
                  >
                    <div 
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs bg-gradient-to-r ${item.gradientCss}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 
                        className="text-xs font-extrabold uppercase tracking-wide"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#475569] line-clamp-1 mt-0.5 font-medium">
                        {item.pillTagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTIVE DRAWER / MODULE SPECIFICATION */}
          <div className="mt-3 p-4 rounded-xl bg-white border border-[#cbd5e1] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <div 
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm bg-gradient-to-r ${activeSolution.gradientCss}`}
              >
                <activeSolution.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#94a3b8] block">
                  ACTIVE SOLUTION MODULE:
                </span>
                <h4 className="text-sm font-extrabold text-[#1c1636]">
                  {activeSolution.title} — <span style={{ color: activeSolution.color }}>{activeSolution.subtitle}</span>
                </h4>
              </div>
            </div>

            <p className="text-xs text-[#475569] max-w-xl font-normal leading-relaxed">
              {activeSolution.desc}
            </p>
          </div>

          {/* HANDWRITTEN ANNOTATION */}
          <div className="w-full text-right mt-3 pr-2 sm:pr-4">
            <span className="font-['Caveat',cursive] text-xl sm:text-2xl text-[#7b3fc7]/85 -rotate-2 inline-block tracking-wide">
              Connected solutions. Real impact.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}




