import React from 'react';
import { motion } from 'framer-motion';

/**
 * RibbonStepCard
 * 
 * A 3D folded-ribbon step card component following the 1-2-3 layer stacking:
 * Layer 1 (Front, z-30): Ribbon bar and circular number collar badge with drop shadow.
 * Layer 2 (Middle, z-10): Pure white card body with clean borders and soft shadow.
 * Layer 3 (Back, z-0): 3D triangle fold shape (SVG) tucked behind both card and ribbon.
 * 
 * Props:
 * - num: string (e.g. '01')
 * - label: string (e.g. 'CONNECT')
 * - title: string (e.g. 'EHR & Claims Ingestion')
 * - desc: string (e.g. 'Bring information together...')
 * - ribbonBg: string (Tailwind class, e.g. 'bg-[#10b981]')
 * - foldColor: string (Hex color for the fold triangle, e.g. '#047857')
 * - numberColor: string (Tailwind class, e.g. 'text-[#047857]')
 * - delay: number (Framer Motion delay in seconds)
 * - index: number (Alternative to delay: idx * 0.05)
 * - minHeight: string (Tailwind min-h class, default: 'min-h-[210px] sm:min-h-[220px]')
 * - className: string (Extra container classes)
 * - children: ReactNode (Custom body content instead of standard title + desc)
 */
export default function RibbonStepCard({
  num = '01',
  label = 'STEP',
  title = '',
  desc = '',
  ribbonBg = 'bg-[#7b3fc7]',
  foldColor = '#4c1d95',
  numberColor = 'text-[#7b3fc7]',
  delay,
  index = 0,
  minHeight = 'min-h-[210px] sm:min-h-[220px]',
  className = '',
  icon: Icon,
  children
}) {
  const animationDelay = delay !== undefined ? delay : index * 0.05;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: animationDelay }}
      className={`relative group transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${className}`}
    >
      {/* ─────────────────────────────────────────────────────────────
          LAYER 3: RIBBON SHADOW TRIANGLE SHAPE (BACK LAYER - z-0)
          Tucked behind both the card and the ribbon overhang.
          ───────────────────────────────────────────────────────────── */}
      <svg 
        className="absolute -right-[16px] top-[48px] w-[18px] h-[18px] z-0 pointer-events-none filter drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]" 
        viewBox="0 0 18 18"
      >
        <polygon points="0,0 18,0 0,18" fill={foldColor} />
      </svg>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 2: WHITE CARD BODY (MIDDLE LAYER - z-10)
          ───────────────────────────────────────────────────────────── */}
      <div className={`relative z-10 bg-white rounded-[22px] border border-[#e5e0ee] shadow-[0_10px_30px_rgba(28,22,54,0.06)] group-hover:shadow-[0_18px_40px_rgba(28,22,54,0.12)] transition-shadow duration-300 pt-3 pb-5 px-5 ${minHeight} flex flex-col justify-between overflow-visible h-full flex-1`}>
        
        {/* ─────────────────────────────────────────────────────────────
            LAYER 1: RIBBON BAR HEADER (FRONT LAYER - z-30)
            Sits on top of the card and overhanging the right edge.
            ───────────────────────────────────────────────────────────── */}
        <div className="relative -mx-5 mt-1 mb-4 z-30">
          <div className="relative flex items-center pl-1">
            {/* Left Circular Ring Collar Badge */}
            <div className={`w-10 h-10 rounded-full ${ribbonBg} shadow-[0_3px_8px_rgba(0,0,0,0.22)] flex items-center justify-center shrink-0 z-40`}>
              <div className={`w-7 h-7 rounded-full bg-white ${numberColor} font-mono font-extrabold text-[11px] flex items-center justify-center shadow-inner`}>
                {num}
              </div>
            </div>

            {/* Main Horizontal Ribbon Bar with Square Right Edge Overhang */}
            <div className={`flex-1 h-[34px] ${ribbonBg} -ml-5 pl-5 pr-2 flex items-center justify-center text-white z-30 -mr-[16px] rounded-none shadow-[0_4px_8px_rgba(0,0,0,0.16)]`}>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.08em] sm:tracking-[0.12em] uppercase text-white font-sans text-center truncate">
                {label}
              </span>
            </div>
          </div>
        </div>

        {/* Card Content Body */}
        {children ? (
          children
        ) : (
          <div className="flex-1 flex flex-col justify-start pt-0.5">
            {Icon && (
              <div className="w-8 h-8 rounded-lg bg-[#7b3fc7]/10 text-[#7b3fc7] flex items-center justify-center mb-2.5">
                <Icon className="w-4 h-4" />
              </div>
            )}
            {title && (
              <h3 className="text-sm sm:text-base font-extrabold text-[#1c1636] mb-1.5 leading-snug group-hover:text-[#7b3fc7] transition-colors">
                {title}
              </h3>
            )}
            {desc && (
              <p className="text-[11.5px] text-[#524b6b] leading-relaxed font-normal">
                {desc}
              </p>
            )}
          </div>
        )}

      </div>
    </motion.div>
  );
}

/**
 * RibbonStepGrid
 * 
 * Reusable grid container for multiple RibbonStepCard components.
 */
export function RibbonStepGrid({ 
  steps = [], 
  columns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
  gap = 'gap-5 xl:gap-6',
  className = '' 
}) {
  return (
    <div className={`grid ${columns} ${gap} ${className}`}>
      {steps.map((step, idx) => (
        <RibbonStepCard
          key={step.num || idx}
          index={idx}
          num={step.num}
          label={step.label}
          title={step.title}
          desc={step.desc}
          icon={step.icon}
          ribbonBg={step.ribbonBg}
          foldColor={step.foldColor}
          numberColor={step.numberColor}
        />
      ))}
    </div>
  );
}
