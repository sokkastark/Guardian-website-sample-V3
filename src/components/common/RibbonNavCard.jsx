import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  HeartHandshake, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

/**
 * RibbonNavCard
 * 
 * An interactive 3D folded-ribbon navigation card inspired by the ribbon process style
 * but adapted specifically for page exploration and section navigation.
 * 
 * Features:
 * - Layer 1 (Front, z-30): Vibrant ribbon banner with circular icon medallion collar + category tag + arrow glyph.
 * - Layer 2 (Middle, z-10): Pure white card body, clean borders, high-contrast typography, and "Explore Page" footer.
 * - Layer 3 (Back, z-0): 3D triangle fold shape (SVG) tucked behind the card edge.
 * - Entire card acts as an accessible, responsive Link with smooth hover physics.
 */
export default function RibbonNavCard({
  title = '',
  desc = '',
  path = '#',
  tag = 'COMPANY',
  icon: Icon = Sparkles,
  ribbonBg = 'bg-[#7b3fc7]',
  foldColor = '#4c1d95',
  accentColor = 'text-[#7b3fc7]',
  hoverBorder = 'hover:border-[#7b3fc7]/50',
  index = 0,
  delay,
  className = ''
}) {
  const animationDelay = delay !== undefined ? delay : index * 0.06;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: animationDelay }}
      className={`relative group ${className}`}
    >
      {/* ─────────────────────────────────────────────────────────────
          LAYER 3: 3D RIBBON SHADOW TRIANGLE SHAPE (BACK LAYER - z-0)
          Folded paper illusion tucked behind right edge overhang
          ───────────────────────────────────────────────────────────── */}
      <svg 
        className="absolute -right-[15px] top-[48px] w-[16px] h-[16px] z-0 pointer-events-none filter drop-shadow-[1px_2px_3px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-105" 
        viewBox="0 0 16 16"
      >
        <polygon points="0,0 16,0 0,16" fill={foldColor} />
      </svg>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 2 & LINK CONTAINER: WHITE ELEVATED CARD BODY (z-10)
          ───────────────────────────────────────────────────────────── */}
      <Link
        to={path}
        className={`relative z-10 block h-full bg-white rounded-[22px] border border-[#e5e0ee] shadow-[0_8px_26px_rgba(28,22,54,0.06)] group-hover:shadow-[0_20px_40px_rgba(28,22,54,0.14)] ${hoverBorder} group-hover:-translate-y-1.5 transition-all duration-300 pt-3 pb-4 px-5 flex flex-col justify-between overflow-visible`}
      >
        <div>
          {/* ─────────────────────────────────────────────────────────────
              LAYER 1: TOP RIBBON BANNER WITH ICON MEDALLION (FRONT - z-30)
              ───────────────────────────────────────────────────────────── */}
          <div className="relative -mx-5 mt-1 mb-4 z-30">
            <div className="relative flex items-center pl-1">
              
              {/* Left Circular Icon Medallion Collar */}
              <div className={`w-10 h-10 rounded-full ${ribbonBg} shadow-[0_4px_10px_rgba(0,0,0,0.22)] flex items-center justify-center shrink-0 z-40 group-hover:scale-105 transition-transform duration-300`}>
                <div className={`w-7 h-7 rounded-full bg-white ${accentColor} flex items-center justify-center shadow-inner`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Horizontal Ribbon Bar Overhang */}
              <div className={`flex-1 h-[34px] ${ribbonBg} -ml-5 pl-5 pr-3 flex items-center justify-between text-white z-30 -mr-[15px] shadow-[0_4px_8px_rgba(0,0,0,0.16)]`}>
                <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.12em] uppercase text-white font-sans truncate">
                  {tag}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 ml-1" />
              </div>
            </div>
          </div>

          {/* Card Body Content */}
          <div className="pt-1">
            <h4 className={`text-base sm:text-lg font-extrabold text-[#1c1636] mb-1.5 leading-snug group-hover:${accentColor} transition-colors duration-200`}>
              {title}
            </h4>
            <p className="text-xs text-[#524b6b] leading-relaxed font-normal">
              {desc}
            </p>
          </div>
        </div>

        {/* Card Footer: Interactive "Explore Page" Callout */}
        <div className="mt-5 pt-3 border-t border-[#ede8f5] flex items-center justify-between text-xs font-semibold">
          <span className={`${accentColor} group-hover:underline`}>
            Explore Page
          </span>
          <div className={`w-6 h-6 rounded-full bg-[#f4effa] group-hover:${ribbonBg} flex items-center justify-center text-[#7b3fc7] group-hover:text-white transition-all duration-200`}>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/**
 * RibbonNavGrid
 * 
 * Reusable grid container for multiple RibbonNavCard items.
 */
export function RibbonNavGrid({ 
  items = [], 
  columns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  gap = 'gap-6',
  className = '' 
}) {
  return (
    <div className={`grid ${columns} ${gap} ${className}`}>
      {items.map((item, idx) => (
        <RibbonNavCard
          key={item.path || idx}
          index={idx}
          title={item.title || item.label}
          desc={item.desc || item.description}
          path={item.path}
          tag={item.tag || 'COMPANY'}
          icon={item.icon || Users}
          ribbonBg={item.ribbonBg || 'bg-[#7b3fc7]'}
          foldColor={item.foldColor || '#4c1d95'}
          accentColor={item.accentColor || 'text-[#7b3fc7]'}
          hoverBorder={item.hoverBorder || 'hover:border-[#7b3fc7]/50'}
        />
      ))}
    </div>
  );
}
