import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Network, 
  Award
} from 'lucide-react';

export default function EnterpriseComplianceBar() {
  const complianceItems = [
    {
      title: 'CMS MIPS Qualified Registry Architecture',
      icon: Award,
      color: '#7b3fc7'
    },
    {
      title: 'eHealth Exchange Alignment',
      icon: Network,
      color: '#4f46e5'
    },
    {
      title: 'CareQuality Framework Alignment',
      icon: ShieldCheck,
      color: '#059669'
    },
    {
      title: 'HITRUST & SOC 2 Security Alignment',
      icon: Lock,
      color: '#ea580c'
    }
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-white rounded-[32px] sm:rounded-[40px] border border-[#e5e0ee] shadow-[0_12px_36px_rgba(28,22,54,0.08)] overflow-hidden flex items-stretch group hover:shadow-[0_18px_45px_rgba(28,22,54,0.12)] transition-all duration-300"
      >
        {/* Left Purple End-Cap */}
        <div className="w-6 sm:w-9 md:w-11 bg-gradient-to-b from-[#7b3fc7] via-[#6d28d9] to-[#5b21b6] shrink-0" />

        {/* Main Card Body */}
        <div className="flex-1 p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-center gap-5 sm:gap-6">
          
          {/* Outline Shield Badge on Left */}
          <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7b3fc7]/10 border border-[#7b3fc7]/20 flex items-center justify-center text-[#7b3fc7] shadow-2xs">
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          {/* Content Area */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-black text-[#7b3fc7] tracking-wider uppercase mb-1.5 font-sans">
              ENTERPRISE SECURITY & FRAMEWORK ALIGNMENT
            </h3>
            <p className="text-xs sm:text-[13px] text-[#524b6b] leading-relaxed mb-3.5 max-w-4xl font-normal">
              Guardian maintains rigorous architectural alignment with zero-trust healthcare data frameworks, CMS MIPS Qualified Registry standards, and national health information networks.
            </p>

            {/* Badges List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
              {complianceItems.map((item) => {
                const IconComp = item.icon;
                return (
                  <span 
                    key={item.title}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8fd] border border-[#e9e4f0] text-[11px] sm:text-xs font-semibold text-[#1c1636] hover:bg-white hover:border-[#7b3fc7]/30 hover:shadow-2xs transition-all duration-200"
                  >
                    <IconComp className="w-3.5 h-3.5" style={{ color: item.color }} />
                    {item.title}
                  </span>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Purple End-Cap */}
        <div className="w-6 sm:w-9 md:w-11 bg-gradient-to-b from-[#7b3fc7] via-[#6d28d9] to-[#5b21b6] shrink-0" />
      </motion.div>
    </div>
  );
}
