import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Share2,
  MapPin,
  Users,
  Clock,
  CheckSquare,
  ArrowUpRight,
  Database,
  FileText,
  Building2,
  Search,
  Network
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function ProvidersPage() {
  const [activeTab, setActiveTab] = useState('referral');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Approved Storytelling Direction:
  // EMR Aggregation → Provider Geo-Mapping → Referral Routing → Specialist Coordination → Closed-Loop Performance
  const cinPipeline = [
    {
      step: '01',
      stage: 'EMR AGGREGATION',
      title: 'Multi-Practice EMR Connectivity & Network Setup',
      icon: Database,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      summary: 'Group provider practices by network group, connect multi-EMR clinical feeds, and maintain tenant isolation across participant sites.',
      details: [
        'Multi-practice EMR/EHR connectivity & C-CDA document exchange',
        'Group practices and provider users by network group',
        'Tenant data isolation and role-based access configuration'
      ],
      output: 'Connected Network Infrastructure'
    },
    {
      step: '02',
      stage: 'PROVIDER GEO-MAPPING',
      title: 'Network Provider Geo-Mapping & Directory Search',
      icon: MapPin,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Enable providers to locate in-network specialists using geo-mapping, clinical specialty, taxonomy, and zip code proximity search.',
      details: [
        'Provider geo-mapping across Clinically Integrated Network (CIN) groups',
        'Specialist search by provider name, specialty, and zip code',
        'Transparent in-network provider directory access for PCPs'
      ],
      output: 'In-Network Provider Selection'
    },
    {
      step: '03',
      stage: 'REFERRAL ROUTING',
      title: 'Electronic Referral Creation & DSM Ingestion',
      icon: Share2,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Automate electronic referral creation directly from EMR clinical charts or ingest incoming Direct Secure Messaging (DSM) requests.',
      details: [
        'Electronic referral management and automated workflow creation',
        'Automated referral creation from incoming Direct Secure Messaging (DSM)',
        'Clinical document attachment (PDF, Word, HTML, C-CDA format)'
      ],
      output: 'Electronic Referral Dispatched'
    },
    {
      step: '04',
      stage: 'SPECIALIST COORDINATION',
      title: 'PCP & Specialist Clinical Coordination',
      icon: Users,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Coordinate clinical context, progress notes, and diagnostic records between primary care physicians and specialist offices.',
      details: [
        'Bi-directional DSM messaging between EMRs and Guardian',
        'Appointment ingestion and EMR integration for scheduling',
        'Prior authorization documentation and clinical note sharing'
      ],
      output: 'Coordinated Specialist Consultation'
    },
    {
      step: '05',
      stage: 'CLOSED-LOOP PERFORMANCE',
      title: 'Closed-Loop Referral Tracking & Status Confirmation',
      icon: CheckSquare,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Monitor referral progress through completion and receive specialist consult notes back into the PCP chart to close the loop.',
      details: [
        'Real-time status monitoring (Pending, Scheduled, Completed)',
        'Consultation report retrieval & loop closure in Patient 360',
        'Network referral volume and turnaround time analytics'
      ],
      output: 'Closed-Loop Care Confirmed'
    }
  ];

  // Approved Features Sourced from Product Profile 6.0
  const capabilities = [
    {
      title: 'Closed-Loop Referral Tracking',
      description: 'Track referral status from initial order creation through appointment completion and specialist consult note filing.',
      category: 'Referral Manager',
      icon: CheckSquare
    },
    {
      title: 'CIN Provider Geo-Mapping',
      description: 'Network provider geo-mapping and specialist search directory filtering by provider name, specialty, and zip code.',
      category: 'Directory Search',
      icon: MapPin
    },
    {
      title: 'Direct Secure Messaging (DSM)',
      description: 'Guardian native DSM addresses supporting encrypted clinical message exchange between EMRs and Guardian.',
      category: 'Interoperability',
      icon: FileText
    },
    {
      title: 'PCP & Specialist Coordination',
      description: 'Collaborative clinical workspace enabling PCPs and specialists to share medical history, C-CDAs, and diagnostic files.',
      category: 'Care Coordination',
      icon: Users
    },
    {
      title: 'Multi-Practice EMR Connectivity',
      description: 'Group practices and users by network group with HL7 v2.x, FHIR R4, and C-CDA integration across disparate EMRs.',
      category: 'Network Architecture',
      icon: Network
    },
    {
      title: 'Referral Task & Network Analytics',
      description: 'Operational analytics monitoring referral completion status, turnaround times, and network participant metrics.',
      category: 'Network Analytics',
      icon: Building2
    }
  ];

  const siblings = [
    { label: 'ACO & Value-Based Care', path: '/solutions/aco-value-based-care', desc: 'CMS CCLF data integration, attribution tracking, and shared savings workflows.' },
    { label: 'Health Plans / Payers', path: '/solutions/health-plans', desc: 'Star ratings surveillance, MLR optimization, and payer data integration.' },
    { label: 'Care Management Teams', path: '/solutions/care-management-teams', desc: 'Personal care plan building, CCM/TCM/RPM programs, and care manager cockpits.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#141836] via-[#1c2247] to-[#141836] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b3fc7]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00b8a9]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-purple-200/70 mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <span className="text-white font-medium">CIN & Provider Organizations</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#00b8a9]" />
                <span>CIN & Provider Network Solution</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Closed-Loop Referrals & CIN Network Coordination
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                Guardian equips Clinically Integrated Networks (CIN) and provider groups with EMR integration, provider geo-mapping, Direct Secure Messaging (DSM), and closed-loop referral tracking.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request a CIN Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b3fc7]" />
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 shrink-0"
                >
                  <span>Solutions Overview</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl bg-[#1a1233] border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.5)] p-2.5 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-[#120b24] rounded-t-xl border-b border-white/10 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-teal-300 font-mono ml-2">live.itsguardian.com/solutions/cin-provider-organizations</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#00b8a9]/40 text-teal-200 border border-[#00b8a9]/60 font-mono">
                    Referral Console
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-referral-manager.png" 
                    alt="Guardian Referral Manager Interface" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL STORY PIPELINE */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f8f6] border border-[#b3ede8] text-[#00897b] text-xs font-bold uppercase tracking-wider mb-4">
            <Share2 className="w-3.5 h-3.5 text-[#00897b]" />
            <span>CIN Referral & Coordination Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
            EMR Aggregation → Geo-Mapping → Referral Routing → Coordination → Closed-Loop
          </h2>
          <p className="text-sm sm:text-base text-[#727272] mt-3 leading-relaxed">
            How Guardian connects PCPs, specialist directories, and network operations across Clinically Integrated Networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {cinPipeline.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={item.stage}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-white border-[#00b8a9] shadow-lg shadow-[#00b8a9]/10 ring-2 ring-[#00b8a9]/20 scale-[1.02]'
                    : 'bg-white/60 border-[#e1e1e5] hover:bg-white hover:border-teal-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${item.badgeColor}`}>
                    {item.stage}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#00897b]' : 'text-[#8e8c99]'}`} />
                </div>
                <p className={`text-xs font-bold leading-snug ${isSelected ? 'text-[#1c1636]' : 'text-[#58536e]'}`}>
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-[#e1e1e5] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${cinPipeline[activeStepIndex].badgeColor}`}>
                    Phase {cinPipeline[activeStepIndex].step}: {cinPipeline[activeStepIndex].stage}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-[#1c1636]">
                  {cinPipeline[activeStepIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-[#58536e] leading-relaxed">
                  {cinPipeline[activeStepIndex].summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  {cinPipeline[activeStepIndex].details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#e6f8f6] text-[#00897b] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#35304c] font-medium leading-snug">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#faf9fc] rounded-2xl border border-[#e1e1e5] p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#141836] to-[#00b8a9] text-white flex items-center justify-center shadow-md">
                  {React.createElement(cinPipeline[activeStepIndex].icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8e8c99]">CIN Workflow Output</p>
                  <p className="text-base font-bold text-[#1c1636] mt-1">{cinPipeline[activeStepIndex].output}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. PRODUCT PROOF SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#e1e1e5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00897b] bg-[#e6f8f6] px-3.5 py-1.5 rounded-full border border-[#b3ede8]">
              Product Proof
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
              Real Referral Manager & Network Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#727272]">
              Inspect live software UI interfaces for electronic referral management and closed-loop status tracking.
            </p>
          </div>

          <div className="relative rounded-2xl bg-[#141836] border border-[#232b57] p-3 sm:p-4 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center justify-between px-3 py-2 bg-[#0e122b] rounded-t-xl border-b border-white/10 mb-3">
              <span className="text-[11px] text-teal-300 font-mono">
                live.itsguardian.com/cin/referral-manager
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00b8a9]/40 text-teal-200 border border-[#00b8a9]/60 font-mono">
                Referral Manager
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden bg-white border border-[#e9e4f0]"
            >
              <img
                src="/images/product-ui/ui-referral-manager.png"
                alt="Guardian Referral Manager Console"
                className="w-full h-auto object-contain rounded-lg shadow-sm"
              />
            </motion.div>
            <p className="text-xs text-[#716b89] text-center mt-3 leading-relaxed italic">
              *Illustrative sample demonstration data. Patient records, metrics, and outcomes are for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEY CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00897b] bg-[#e6f8f6] px-3.5 py-1.5 rounded-full border border-[#b3ede8]">
            Approved Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
            Capabilities for CIN & Provider Organizations
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved features directly supported by Product Profile 6.0 and Phase 1 feature inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title + idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#faf9fc] border border-[#e1e1e5] hover:border-[#00b8a9]/40 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e6f8f6] text-[#00897b] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#00897b] uppercase tracking-wider font-mono">
                      {cap.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1636] mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#58536e] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. EDITORIAL HEALTHCARE CONTEXT */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#141836] to-[#1c2247] text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-300 mb-3 block">
              People + Technology Model
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
              Unifying PCPs, Network Specialists & Network Operations
            </h3>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal mb-8">
              Guardian connects Clinically Integrated Networks by combining multi-EMR integration with provider geo-mapping, native Direct Secure Messaging (DSM), and closed-loop referral tracking—ensuring seamless clinical coordination.
            </p>
            <Link
              to="/company/contact?intent=demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#e6f8f6] transition-all duration-200"
            >
              <span>Speak with a CIN Network Specialist</span>
              <ArrowRight className="w-4 h-4 text-[#00897b]" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Related Solution Domains"
        kicker="Solutions Architecture"
        tagPrefix="SOLUTION"
        overviewLink="/solutions"
        overviewText="View Solutions Overview"
        actionText="View Solution"
      />

      {/* 7. CLOSING CTA */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#141836] via-[#1c2247] to-[#00b8a9] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl border border-white/10"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-200 text-xs font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00b8a9]" />
              <span>Partner With Guardian</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Ready to Streamline CIN Referral Coordination?
            </h2>

            <p className="text-teal-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Equip your Clinically Integrated Network with EMR integration, provider geo-mapping, Direct Secure Messaging (DSM), and closed-loop referral tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#e6f8f6] shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule a CIN Demo</span>
                <ArrowRight className="w-4 h-4 text-[#00897b]" />
              </Link>

              <Link
                to="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
              >
                <span>Explore Solutions Overview</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
