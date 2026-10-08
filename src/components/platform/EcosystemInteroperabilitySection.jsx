import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Activity, 
  Server, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Database, 
  FileText, 
  Sparkles,
  ArrowUpRight,
  Cpu,
  Share2,
  RefreshCw
} from 'lucide-react';

export default function EcosystemInteroperabilitySection() {
  const [activeTab, setActiveTab] = useState('all');

  const pillars = [
    {
      id: 'interop',
      title: 'Interoperability',
      subtitle: 'STANDARDS-BASED CONNECTIVITY',
      description: 'Connect healthcare information seamlessly across systems, EHRs, and healthcare organizations.',
      icon: Network,
      color: '#7b3fc7',
      gradient: 'from-[#7b3fc7] to-[#9333ea]',
      lightBg: 'bg-[#7b3fc7]/10',
      borderColor: 'border-[#7b3fc7]/20',
      badgeColor: 'text-[#7b3fc7] bg-[#7b3fc7]/10',
      diagramType: 'protocols',
      protocols: [
        { name: 'FHIR R4 APIs', desc: 'RESTful Resource Exchange', tag: 'Fast Healthcare Interoperability' },
        { name: 'HL7 v2 & ADT', desc: 'Real-Time Event Feeds', tag: 'Event Messaging' },
        { name: 'C-CDA Documents', desc: 'Longitudinal Chart Exchange', tag: 'Consolidated CDA' },
      ],
      capabilities: [
        'Multi-EHR bi-directional mapping',
        'Master Patient Index (MPI) deduplication',
        'Standardized code translation (LOINC, RxNorm, SNOMED)'
      ]
    },
    {
      id: 'exchange',
      title: 'Data Exchange',
      subtitle: 'SUB-SECOND REAL-TIME ROUTING',
      description: 'Move critical clinical information where it needs to go across the connected care continuum.',
      icon: Activity,
      color: '#0284c7',
      gradient: 'from-[#0284c7] to-[#06b6d4]',
      lightBg: 'bg-[#0284c7]/10',
      borderColor: 'border-[#0284c7]/20',
      badgeColor: 'text-[#0284c7] bg-[#0284c7]/10',
      diagramType: 'pipeline',
      pipeline: [
        { label: 'Event Trigger', detail: 'Hospital Inpatient ADT', time: '0.0s' },
        { label: 'Guardian Engine', detail: 'Normalized & Enriched', time: '+0.2s' },
        { label: 'Care Team Action', detail: 'Transitional Care Alert', time: '+0.5s' }
      ],
      capabilities: [
        'Nationwide Event Notification (ENS) feeds',
        'Sub-second clinical alert dispatching',
        'Automated care team task generation'
      ]
    },
    {
      id: 'infrastructure',
      title: 'Healthcare-Ready Infrastructure',
      subtitle: 'ENTERPRISE-GRADE RESILIENCE',
      description: 'Support the rigorous information security and compliance demands of enterprise health systems.',
      icon: Server,
      color: '#059669',
      gradient: 'from-[#059669] to-[#10b981]',
      lightBg: 'bg-[#059669]/10',
      borderColor: 'border-[#059669]/20',
      badgeColor: 'text-[#059669] bg-[#059669]/10',
      diagramType: 'security',
      securityStack: [
        { layer: 'Application', detail: 'Role-Based Access Control (RBAC) & 2FA' },
        { layer: 'Transport', detail: 'TLS 1.3 In-Flight Encryption' },
        { layer: 'Storage', detail: 'AES-256 At-Rest Encryption & Disaster Recovery' }
      ],
      capabilities: [
        'HIPAA Privacy & Security architecture',
        'Immutable point-of-care audit logging',
        'High-availability distributed cloud hosting'
      ]
    }
  ];

  const frameworks = [
    {
      title: 'CMS MIPS Qualified Registry',
      category: 'Clinical Quality Reporting',
      desc: 'Architecture aligned with CMS quality payment program and eCQM submission specifications.',
      icon: ShieldCheck,
      color: '#7b3fc7',
      tag: 'Registry Standards'
    },
    {
      title: 'eHealth Exchange Alignment',
      category: 'Nationwide Interoperability',
      desc: 'Integrated with federal and national health data exchange participants across 50 states.',
      icon: Globe,
      color: '#0284c7',
      tag: '50-State Network'
    },
    {
      title: 'CareQuality Framework',
      category: 'Health Data Trust',
      desc: 'Aligned with nationwide non-profit trust framework connecting clinicians across care settings.',
      icon: Share2,
      color: '#059669',
      tag: 'Ecosystem Trust'
    },
    {
      title: 'HITRUST & SOC 2 Security',
      category: 'Enterprise Protection',
      desc: 'Security controls aligned with rigorous HITRUST CSF and SOC 2 Type II assurance criteria.',
      icon: Lock,
      color: '#ea580c',
      tag: 'Encrypted Security'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#faf8fd] via-white to-[#faf8fd] border-b border-[#e9e4f0] relative overflow-hidden">
      {/* Ambient Radial Mesh Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#7b3fc7]/10 via-[#0284c7]/10 to-[#ff7a57]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] border border-[#d6cde2] text-xs font-bold text-[#7b3fc7] uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
            <span>INTEROPERABILITY & TRUST ARCHITECTURE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1c1636] tracking-tight mb-5 leading-tight">
            Designed for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#9333ea] to-[#ff7a57]">
              healthcare ecosystem.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
            Guardian’s platform is built around bi-directional healthcare data exchange, high-speed interoperability, and enterprise-grade trust — bridging disconnected clinical systems into actionable care workflows.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            GRAPHIC-RICH FEATURE: CONNECTED HEALTHCARE DATA FLOW HIGHWAY
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#e5e0ee] shadow-[0_12px_40px_rgba(28,22,54,0.06)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-[#f0ebf8]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7b3fc7] to-[#ff7a57] text-white flex items-center justify-center shadow-md">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1c1636]">
                  Unified Healthcare Data Exchange Highway
                </h3>
                <p className="text-xs text-[#716b89]">
                  Real-time synchronization across heterogeneous clinical and payer endpoints
                </p>
              </div>
            </div>

            {/* Live Status Indicators */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Event Ingestion
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                FHIR R4 & C-CDA Enabled
              </span>
            </div>
          </div>

          {/* Interactive Flow Grid Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-6">
            
            {/* Left: Input Endpoints */}
            <div className="md:col-span-4 space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#716b89] block mb-1">
                INCOMING DATA FEEDS
              </span>
              {[
                { name: 'Multi-EHR Clinical Charts', format: 'C-CDA / HL7 v2', color: 'border-l-purple-500' },
                { name: 'Payer CCLF & Claims EDI', format: '837 / 835 / Flat', color: 'border-l-blue-500' },
                { name: 'Hospital ADT Feeds', format: 'Real-Time HL7 Stream', color: 'border-l-emerald-500' },
                { name: 'Lab (LOINC) & Pharmacy (RxNorm)', format: 'REST / SFTP Batches', color: 'border-l-amber-500' }
              ].map((feed, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl bg-[#faf8fc] border border-[#ede7f6] ${feed.color} border-l-[3.5px] flex items-center justify-between text-xs hover:bg-white hover:shadow-xs transition-all`}
                >
                  <span className="font-semibold text-[#1c1636]">{feed.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#716b89] border border-[#e5e0ee]">
                    {feed.format}
                  </span>
                </div>
              ))}
            </div>

            {/* Center: Guardian Interoperability Core Hub */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden my-2 md:my-0">
              <div className="absolute inset-0 ambient-grid opacity-20 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7b3fc7] via-[#9333ea] to-[#ff7a57] p-0.5 shadow-lg mb-3">
                  <div className="w-full h-full rounded-[14px] bg-[#1c1636] flex items-center justify-center">
                    <Database className="w-7 h-7 text-purple-300" />
                  </div>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff7a57] font-bold">
                  GUARDIAN ENGINE
                </span>
                <h4 className="text-base font-bold text-white mt-1">
                  Master Patient Indexing & PMC Core
                </h4>
                <p className="text-[11px] text-purple-200/80 mt-1 max-w-[220px]">
                  Sub-second record linkage, deduplication, and terminology normalization
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-purple-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Bidirectional Stream Active</span>
                </div>
              </div>
            </div>

            {/* Right: Outgoing Care Team Action Channels */}
            <div className="md:col-span-4 space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#716b89] block mb-1">
                OUTGOING ACTION WORKFLOWS
              </span>
              {[
                { target: 'Point-of-Care EHR Gap Alerts', dest: 'PCP Clinic Desk', color: 'border-r-purple-500' },
                { target: 'Care Manager Worklist Queue', dest: 'Transitional Care', color: 'border-r-blue-500' },
                { target: 'Executive Value-Based Analytics', dest: 'ACO Leadership Cockpit', color: 'border-r-emerald-500' },
                { target: 'CMS Quality Registry Submissions', dest: 'MIPS / eCQM Portal', color: 'border-r-amber-500' }
              ].map((act, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl bg-[#faf8fc] border border-[#ede7f6] ${act.color} border-r-[3.5px] flex items-center justify-between text-xs hover:bg-white hover:shadow-xs transition-all`}
                >
                  <span className="font-semibold text-[#1c1636]">{act.target}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#716b89] border border-[#e5e0ee]">
                    {act.dest}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3 RICH PILLAR CARDS WITH EMBEDDED DIAGRAMS
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl border border-[#e5e0ee] shadow-[0_10px_30px_rgba(28,22,54,0.06)] hover:shadow-[0_22px_45px_rgba(28,22,54,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Colored Accent Stripe */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${pillar.gradient}`} />

                <div className="p-7">
                  {/* Card Header with Icon & Subtitle Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.lightBg} flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-white`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${pillar.badgeColor}`}>
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-[#1c1636] mb-2 group-hover:text-[#7b3fc7] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#524b6b] leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* ─────────────────────────────────────────────────────────
                      EMBEDDED MINI DIAGRAM WIDGET
                      ───────────────────────────────────────────────────────── */}
                  <div className="p-3.5 rounded-2xl bg-[#faf8fc] border border-[#ede8f5] mb-6">
                    {pillar.diagramType === 'protocols' && (
                      <div className="space-y-2">
                        {pillar.protocols.map((proto, pIdx) => (
                          <div key={pIdx} className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#ece7f4] text-xs">
                            <div>
                              <span className="font-bold text-[#1c1636] block text-[11px]">{proto.name}</span>
                              <span className="text-[10px] text-[#716b89]">{proto.desc}</span>
                            </div>
                            <span className="text-[9px] font-semibold text-[#7b3fc7] bg-purple-50 px-2 py-0.5 rounded">
                              Connected
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {pillar.diagramType === 'pipeline' && (
                      <div className="space-y-1.5 relative">
                        {pillar.pipeline.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#ece7f4] text-xs">
                            <span className="w-5 h-5 rounded-full bg-[#0284c7]/10 text-[#0284c7] font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                              {sIdx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-[#1c1636] block text-[11px] truncate">{step.label}</span>
                              <span className="text-[10px] text-[#716b89] truncate block">{step.detail}</span>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded">
                              {step.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {pillar.diagramType === 'security' && (
                      <div className="space-y-1.5">
                        {pillar.securityStack.map((sec, secIdx) => (
                          <div key={secIdx} className="p-2 rounded-lg bg-white border border-[#ece7f4] text-xs flex items-center justify-between">
                            <div>
                              <span className="font-bold text-[#1c1636] text-[11px] block">{sec.layer} Protection</span>
                              <span className="text-[10px] text-[#716b89]">{sec.detail}</span>
                            </div>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2">
                    {pillar.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-[#35304c]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-tight">{cap}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Footer Subtle Bar */}
                <div className="px-7 py-3.5 bg-[#faf8fd] border-t border-[#ede8f5] flex items-center justify-between text-xs font-semibold text-[#7b3fc7] group-hover:text-purple-700 transition-colors">
                  <span>Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            GRAPHIC-RICH CREDENTIALS & FRAMEWORKS CARDS (4 TILES)
            ───────────────────────────────────────────────────────────── */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#7b3fc7]" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1c1636]">
              Healthcare Industry Frameworks & Architecture Alignment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {frameworks.map((fw, idx) => {
              const Icon = fw.icon;

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-white border border-[#e5e0ee] shadow-xs hover:shadow-md hover:border-[#7b3fc7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: fw.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f4effa] text-[#7b3fc7]">
                        {fw.tag}
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold text-[#1c1636] mb-1">
                      {fw.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-[#7b3fc7] uppercase tracking-wider block mb-2">
                      {fw.category}
                    </span>
                    <p className="text-xs text-[#524b6b] leading-relaxed">
                      {fw.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede8f5] flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Framework Alignment</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
