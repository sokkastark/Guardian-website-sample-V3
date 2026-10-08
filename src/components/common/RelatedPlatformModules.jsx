import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  HeartHandshake, 
  BarChart3, 
  Users, 
  Activity, 
  Award, 
  Video, 
  Share2, 
  Calculator, 
  Globe, 
  Database,
  Cpu,
  Brain,
  Workflow,
  UserCheck,
  Network,
  Sparkles,
  FileText,
  Receipt,
  FlaskConical,
  Code2,
  BookOpen,
  FileCheck,
  Compass,
  Lightbulb,
  Building2,
  ShieldCheck,
  Briefcase,
  MessageSquare,
  Users2,
  TrendingUp,
  Hospital
} from 'lucide-react';

/**
 * 5 Curated Accent Themes matching the modern reference:
 * 1: Lime Green
 * 2: Vibrant Orange
 * 3: Violet / Purple
 * 4: Sky / Cyan
 * 5: Charcoal / Slate
 */
const ACCENT_STYLES = [
  {
    bracketColor: '#84cc16', // Lime green
    badgeBorder: 'border-[#84cc16]/40',
    badgeBg: 'bg-[#84cc16]/10',
    badgeText: 'text-[#65a30d]',
    labelColor: 'text-[#65a30d]'
  },
  {
    bracketColor: '#f97316', // Vibrant orange
    badgeBorder: 'border-[#f97316]/40',
    badgeBg: 'bg-[#f97316]/10',
    badgeText: 'text-[#ea580c]',
    labelColor: 'text-[#ea580c]'
  },
  {
    bracketColor: '#8b5cf6', // Violet / Purple
    badgeBorder: 'border-[#8b5cf6]/40',
    badgeBg: 'bg-[#8b5cf6]/10',
    badgeText: 'text-[#7c3aed]',
    labelColor: 'text-[#7c3aed]'
  },
  {
    bracketColor: '#0284c7', // Sky / Cyan
    badgeBorder: 'border-[#0284c7]/40',
    badgeBg: 'bg-[#0284c7]/10',
    badgeText: 'text-[#0284c7]',
    labelColor: 'text-[#0284c7]'
  },
  {
    bracketColor: '#334155', // Charcoal / Slate
    badgeBorder: 'border-[#334155]/40',
    badgeBg: 'bg-[#334155]/10',
    badgeText: 'text-[#1e293b]',
    labelColor: 'text-[#334155]'
  }
];

function resolveModuleIcon(label, customIcon) {
  if (customIcon) return customIcon;
  const l = (label || '').toLowerCase();
  
  // Platform & Clinical
  if (l.includes('risk strat')) return Layers;
  if (l.includes('care manag')) return HeartHandshake;
  if (l.includes('analytics') || l.includes('report')) return BarChart3;
  if (l.includes('patient intel') || l.includes('360')) return Users;
  if (l.includes('transition') || l.includes('adt')) return Activity;
  if (l.includes('quality') || l.includes('gap')) return Award;
  if (l.includes('telemed') || l.includes('virtual')) return Video;
  if (l.includes('referral')) return Share2;
  if (l.includes('risk adjust') || l.includes('mra')) return Calculator;
  if (l.includes('population health')) return Globe;

  // Intelligence & AI
  if (l.includes('artificial') || l.includes('nlp')) return Cpu;
  if (l.includes('predictive')) return Brain;
  if (l.includes('workflow')) return Workflow;
  if (l.includes('human-in') || l.includes('loop')) return UserCheck;
  if (l.includes('clinical knowledge') || l.includes('graph')) return Network;

  // Data & Integration
  if (l.includes('clinical integrat')) return FileText;
  if (l.includes('claims')) return Receipt;
  if (l.includes('lab') || l.includes('pharmacy')) return FlaskConical;
  if (l.includes('foundation') || l.includes('data enrich') || l.includes('information')) return Database;
  if (l.includes('api') || l.includes('mobile')) return Code2;

  // Solutions
  if (l.includes('aco') || l.includes('value-based')) return TrendingUp;
  if (l.includes('payer') || l.includes('health plan')) return ShieldCheck;
  if (l.includes('cin') || l.includes('provider')) return Hospital;
  if (l.includes('care team')) return Users2;

  // Resources
  if (l.includes('guide')) return BookOpen;
  if (l.includes('case stud')) return FileCheck;
  if (l.includes('webinar')) return Video;
  if (l.includes('video')) return Video;
  if (l.includes('tour')) return Compass;
  if (l.includes('insight')) return Lightbulb;

  // Company
  if (l.includes('about')) return Building2;
  if (l.includes('security') || l.includes('trust')) return ShieldCheck;
  if (l.includes('leadership')) return Users2;
  if (l.includes('career')) return Briefcase;
  if (l.includes('contact')) return MessageSquare;

  return null;
}

export default function RelatedPlatformModules({
  modules = [],
  title = 'Related Platform Modules',
  kicker = 'Platform Architecture',
  tagPrefix = 'MODULE',
  overviewLink = '/platform',
  overviewText = 'View Platform Overview',
  className = '',
  actionText = 'Explore Module'
}) {
  if (!modules || modules.length === 0) return null;

  // Grid responsiveness based on count: 3 cards -> 3-col, 4 cards -> 4-col, 5 cards -> 5-col
  const gridClass = modules.length === 3
    ? 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6'
    : modules.length === 5
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-5'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7';

  return (
    <section className={`py-16 sm:py-22 border-t border-[#e1e1e5]/80 bg-white relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8e8c99] mb-1">
              {kicker}
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] tracking-tight">
              {title}
            </h3>
          </div>
          {overviewLink && (
            <Link
              to={overviewLink}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7b3fc7] hover:text-[#9565d2] transition-colors self-start sm:self-auto group"
            >
              <span>{overviewText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Dynamic Responsive Bracket Cards Grid */}
        <div className={`grid ${gridClass} items-stretch`}>
          {modules.map((module, idx) => {
            const accent = ACCENT_STYLES[idx % ACCENT_STYLES.length];
            const itemTitle = module.label || module.title;
            const Icon = resolveModuleIcon(itemTitle, module.icon);
            const stepNum = String(idx + 1).padStart(2, '0');

            return (
              <div key={module.path || idx} className="relative flex flex-col h-full">
                
                {/* Connecting Right-Pointing Flow Arrow (Desktop only, between items) */}
                {idx < modules.length - 1 && (
                  <div 
                    className="hidden lg:flex absolute -right-3.5 xl:-right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5 text-[#cbd5e1]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M4.5 2.8c0-.6.7-.9 1.1-.5l6.5 5.2c.4.3.4.9 0 1.2L5.6 13.9c-.4.4-1.1.1-1.1-.5V2.8z" />
                    </svg>
                  </div>
                )}

                {/* Card Container with Corner Brackets */}
                <Link
                  to={module.path}
                  className="group relative flex-1 flex flex-col p-1 focus:outline-none focus:ring-2 focus:ring-[#7b3fc7]/40 rounded-[24px]"
                >
                  {/* Top-Left Bracket Accent */}
                  <svg
                    className="absolute -top-2 -left-2 w-14 h-14 pointer-events-none z-0 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M 58 5 H 24 C 13.5 5 5 13.5 5 24 V 58"
                      stroke={accent.bracketColor}
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Bottom-Right Bracket Accent */}
                  <svg
                    className="absolute -bottom-2 -right-2 w-14 h-14 pointer-events-none z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M 6 59 H 40 C 50.5 59 59 50.5 59 40 V 6"
                      stroke={accent.bracketColor}
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Rectangular Solid White Card Body */}
                  <div className="relative z-10 bg-white rounded-[20px] border border-[#ece8f2] py-5 px-4 sm:px-5 shadow-[0_8px_20px_rgba(28,22,54,0.05)] group-hover:shadow-[0_16px_32px_rgba(28,22,54,0.11)] group-hover:border-[#d9d2e6] transition-all duration-300 h-full flex flex-col justify-between text-center min-h-[190px]">
                    
                    <div>
                      {/* Top Circular Ring Collar Badge with Matching Accent Border */}
                      <div className={`w-10 h-10 rounded-full border-2 ${accent.badgeBorder} ${accent.badgeBg} ${accent.badgeText} flex items-center justify-center mx-auto mb-2.5 shadow-2xs group-hover:scale-105 transition-transform`}>
                        {Icon ? (
                          <Icon className="w-4 h-4" />
                        ) : (
                          <span className="font-mono font-bold text-xs">
                            {stepNum}
                          </span>
                        )}
                      </div>

                      {/* Step Subtitle / Label */}
                      <span className={`text-[9.5px] font-bold font-mono tracking-wider uppercase block mb-1 ${accent.labelColor}`}>
                        {tagPrefix} {stepNum}
                      </span>

                      {/* Main Title */}
                      <h4 className="text-sm sm:text-base font-extrabold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors mb-1.5 leading-snug">
                        {itemTitle}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-[#524b6b] leading-relaxed line-clamp-3">
                        {module.desc}
                      </p>
                    </div>

                    {/* Bottom Micro Action Affordance */}
                    <div className="mt-3.5 pt-2.5 border-t border-[#f4f0f8] flex items-center justify-center gap-1.5 text-xs font-semibold text-[#7b3fc7] group-hover:text-[#ff7a57] transition-colors">
                      <span>{actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>

                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
