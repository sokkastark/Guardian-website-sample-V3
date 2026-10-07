import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Bell, 
  Share2, 
  Users, 
  Rocket, 
  Target, 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const milestonesData = [
  {
    year: '2013',
    tag: 'FOUNDING',
    title: 'Medicare ACO Risk Management',
    desc: 'Guardian founded to support Medicare ACO risk management and care coordination.',
    color: '#ef4444', // Red
    borderColor: 'border-[#ef4444]',
    textColor: 'text-[#ef4444]',
    bgLight: 'bg-[#ef4444]/10',
    icon: Building2,
    position: 'bottom', // card below the line, outline year above
  },
  {
    year: '2016',
    tag: 'EXPANSION',
    title: 'Statewide ADT Notifications',
    desc: 'Expanded into Statewide Event Notification Services (ENS) for hospital ADT alerts.',
    color: '#f97316', // Orange
    borderColor: 'border-[#f97316]',
    textColor: 'text-[#f97316]',
    bgLight: 'bg-[#f97316]/10',
    icon: Bell,
    position: 'top', // card above the line, outline year below
  },
  {
    year: '2017',
    tag: 'NETWORK',
    title: 'National Health Exchange',
    desc: 'Integrated with nationwide eHealth Exchange and CareQuality health data networks.',
    color: '#f43f5e', // Coral / Salmon
    borderColor: 'border-[#f43f5e]',
    textColor: 'text-[#f43f5e]',
    bgLight: 'bg-[#f43f5e]/10',
    icon: Share2,
    position: 'bottom', // card below the line, outline year above
  },
  {
    year: '2018',
    tag: 'GROWTH',
    title: '1M+ Connected Records',
    desc: 'Connected patient data foundation surpassed 1,000,000 active clinical records.',
    color: '#f59e0b', // Amber / Yellow
    borderColor: 'border-[#f59e0b]',
    textColor: 'text-[#f59e0b]',
    bgLight: 'bg-[#f59e0b]/10',
    icon: Users,
    position: 'top', // card above the line, outline year below
  },
  {
    year: '2019',
    tag: 'IMPACT',
    title: '$100M+ Cumulative Savings',
    desc: 'Achieved first $100,000,000 in cumulative shared savings for client ACOs.',
    color: '#84cc16', // Lime / Chartreuse
    borderColor: 'border-[#84cc16]',
    textColor: 'text-[#84cc16]',
    bgLight: 'bg-[#84cc16]/10',
    icon: Rocket,
    position: 'bottom', // card below the line, outline year above
  },
  {
    year: '2021',
    tag: 'CERTIFIED',
    title: 'CMS MIPS Registry Architecture',
    desc: 'Certified as an official CMS MIPS Qualified Registry for quality reporting.',
    color: '#10b981', // Vibrant Green
    borderColor: 'border-[#10b981]',
    textColor: 'text-[#10b981]',
    bgLight: 'bg-[#10b981]/10',
    icon: Target,
    position: 'top', // card above the line, outline year below
  }
];

export default function InfographicMilestoneTimeline() {
  const [hoveredYear, setHoveredYear] = useState(null);

  return (
    <div className="w-full">
      {/* Scrollable container for mobile/tablet, wide full-bleed view on desktop */}
      <div className="w-full overflow-x-auto pb-8 pt-4 scrollbar-thin scrollbar-thumb-purple-200">
        <div className="min-w-[960px] xl:min-w-full px-2 sm:px-4">
          
          {/* Main 6-Column Grid Layout */}
          <div className="grid grid-cols-6 gap-2 sm:gap-3 xl:gap-4 relative items-center">
            
            {milestonesData.map((item, idx) => {
              const isHovered = hoveredYear === item.year;
              const isCardTop = item.position === 'top';
              const IconComponent = item.icon;

              return (
                <div 
                  key={item.year}
                  className="flex flex-col items-center relative group cursor-pointer"
                  onMouseEnter={() => setHoveredYear(item.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  
                  {/* ─────────────────────────────────────────────────────────
                      UPPER ROW (CARD if top, OUTLINED YEAR if bottom)
                      ───────────────────────────────────────────────────────── */}
                  <div className="h-[230px] sm:h-[240px] w-full flex items-end justify-center pb-5">
                    {isCardTop ? (
                      /* Capsule Card on Top */
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className={`w-full max-w-[190px] sm:max-w-[200px] xl:max-w-[215px] bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-5.5 border transition-all duration-300 relative flex flex-col justify-start text-center ${
                          isHovered 
                            ? 'shadow-[0_20px_45px_rgba(28,22,54,0.14)] -translate-y-2 border-[#7b3fc7]/40' 
                            : 'shadow-[0_10px_30px_rgba(28,22,54,0.06)] border-[#ebe7f2] hover:border-[#ded7eb]'
                        }`}
                      >
                        {/* Tag / Header matching FEB, APR, JUN in image */}
                        <div className="mb-2.5">
                          <span 
                            className="text-base sm:text-lg font-black tracking-wider uppercase font-sans block"
                            style={{ color: isHovered ? item.color : '#1c1636' }}
                          >
                            {item.year}
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-[#7b3fc7] uppercase">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="text-[12px] sm:text-[13px] font-bold text-[#1c1636] leading-snug mb-1.5">
                          {item.title}
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#524b6b] leading-relaxed line-clamp-4 font-normal">
                          {item.desc}
                        </p>

                        {/* Bottom Arrow Indicator */}
                        <div 
                          className="w-1.5 h-1.5 rounded-full mx-auto mt-auto pt-2"
                          style={{ backgroundColor: item.color }}
                        />
                      </motion.div>
                    ) : (
                      /* Big Outlined Year on Top */
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="flex flex-col items-center justify-center h-full select-none"
                      >
                        <div 
                          className="font-black text-4xl sm:text-5xl xl:text-6xl tracking-tighter transition-all duration-300 font-sans"
                          style={{
                            WebkitTextStroke: isHovered ? `2.5px ${item.color}` : '2px #475569',
                            color: isHovered ? `${item.color}25` : 'transparent',
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                          }}
                        >
                          {item.year}
                        </div>
                        <div className="mt-2 flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                          <IconComponent className="w-4 h-4" style={{ color: item.color }} />
                          <span className="text-[11px] font-mono font-bold tracking-wider text-[#64748b]">
                            {item.tag}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>


                  {/* ─────────────────────────────────────────────────────────
                      MIDDLE ROW (CONNECTED ARROW LINE SEGMENTS)
                      ───────────────────────────────────────────────────────── */}
                  <div className="w-full h-8 relative flex items-center justify-start z-10">
                    
                    {/* Circle Node (Ring with white center) */}
                    <div 
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-[2.5px] shrink-0 z-20 transition-all duration-300 ${
                        isHovered ? 'scale-125 shadow-md' : ''
                      }`}
                      style={{ borderColor: item.color }}
                    />

                    {/* Connecting Colored Line */}
                    <div 
                      className="flex-1 h-[2.5px] transition-all duration-300 relative"
                      style={{ backgroundColor: item.color }}
                    >
                      {/* Sub-pulse glow when hovered */}
                      {isHovered && (
                        <div 
                          className="absolute inset-0 blur-[2px] opacity-80"
                          style={{ backgroundColor: item.color }}
                        />
                      )}
                    </div>

                    {/* Arrow Head (pointing right to next step) */}
                    <div className="shrink-0 -ml-1.5 z-10 flex items-center justify-center">
                      <svg 
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5" 
                        viewBox="0 0 16 16" 
                        fill="none"
                      >
                        <path 
                          d="M 5 3 L 11 8 L 5 13" 
                          stroke={item.color} 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                    </div>

                  </div>


                  {/* ─────────────────────────────────────────────────────────
                      LOWER ROW (CARD if bottom, OUTLINED YEAR if top)
                      ───────────────────────────────────────────────────────── */}
                  <div className="h-[230px] sm:h-[240px] w-full flex items-start justify-center pt-5">
                    {!isCardTop ? (
                      /* Capsule Card on Bottom */
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className={`w-full max-w-[190px] sm:max-w-[200px] xl:max-w-[215px] bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-5.5 border transition-all duration-300 relative flex flex-col justify-start text-center ${
                          isHovered 
                            ? 'shadow-[0_20px_45px_rgba(28,22,54,0.14)] translate-y-2 border-[#7b3fc7]/40' 
                            : 'shadow-[0_10px_30px_rgba(28,22,54,0.06)] border-[#ebe7f2] hover:border-[#ded7eb]'
                        }`}
                      >
                        {/* Top Indicator */}
                        <div 
                          className="w-1.5 h-1.5 rounded-full mx-auto mb-2"
                          style={{ backgroundColor: item.color }}
                        />

                        {/* Tag / Header matching JAN, MAR, MAY in image */}
                        <div className="mb-2.5">
                          <span 
                            className="text-base sm:text-lg font-black tracking-wider uppercase font-sans block"
                            style={{ color: isHovered ? item.color : '#1c1636' }}
                          >
                            {item.year}
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-[#7b3fc7] uppercase">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="text-[12px] sm:text-[13px] font-bold text-[#1c1636] leading-snug mb-1.5">
                          {item.title}
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#524b6b] leading-relaxed line-clamp-4 font-normal">
                          {item.desc}
                        </p>
                      </motion.div>
                    ) : (
                      /* Big Outlined Year on Bottom */
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        className="flex flex-col items-center justify-center h-full select-none"
                      >
                        <div 
                          className="font-black text-4xl sm:text-5xl xl:text-6xl tracking-tighter transition-all duration-300 font-sans"
                          style={{
                            WebkitTextStroke: isHovered ? `2.5px ${item.color}` : '2px #475569',
                            color: isHovered ? `${item.color}25` : 'transparent',
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                          }}
                        >
                          {item.year}
                        </div>
                        <div className="mt-2 flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                          <IconComponent className="w-4 h-4" style={{ color: item.color }} />
                          <span className="text-[11px] font-mono font-bold tracking-wider text-[#64748b]">
                            {item.tag}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* Subtle Mobile Swipe Hint */}
      <div className="block lg:hidden text-center mt-2 text-xs text-[#524b6b] font-medium">
        <span>← Swipe horizontally to explore all milestones →</span>
      </div>
    </div>
  );
}
