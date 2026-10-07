import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Building,
  Shield,
  Layers,
  Search,
  ArrowUpRight,
  Cpu,
  Workflow,
  Activity,
  HeartPulse
} from 'lucide-react';

export default function AboutPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // The Approved Guardian Value Chain
  const valueChain = [
    {
      step: '01',
      stage: 'CONNECT',
      title: 'Connecting Fragmented Healthcare Data',
      icon: Cpu,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Ingest multi-EHR instances, claims feeds, LOINC labs, RxNorm pharmacy records, and HL7 ADT streams into a unified repository.',
      details: [
        'Multi-EHR connectivity and C-CDA clinical document parsing',
        'Ingestion of monthly CMS CCLF (1-9) and 837/835 EDI claims streams',
        'Master Patient Indexing (MPI) deduplication across health system panels'
      ],
      output: 'Unified Data Repository'
    },
    {
      step: '02',
      stage: 'UNDERSTAND',
      title: 'Harmonizing Data into Patient Master Charts',
      icon: Layers,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Synthesize clinical and financial records into Guardian’s Patient Master Chart (PMC), mapping code sets to national standards.',
      details: [
        '13 core clinical domains presenting complete longitudinal patient histories',
        'Code set standardization converting local codes to ICD-10, CPT, LOINC, and RxNorm',
        'Integrated clinical knowledge graph connecting comorbidities and risk markers'
      ],
      output: 'Patient Master Chart (PMC)'
    },
    {
      step: '03',
      stage: 'PRIORITIZE',
      title: 'Risk Stratification & Opportunity Discovery',
      icon: Activity,
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      summary: 'Calculate continuous patient risk scores across 6 risk dimensions and identify prospective CMS-HCC coding opportunities.',
      details: [
        'Multidimensional risk scoring evaluating clinical, financial, and utilization trajectories',
        'Prospective risk adjustment gap suspecting across CMS-HCC V24 and V28 models',
        'Automated quality care gap detection for HEDIS, MIPS, and MSSP programs'
      ],
      output: 'Prioritized Patient Roster'
    },
    {
      step: '04',
      stage: 'ACT',
      title: 'Point-of-Care & Care Team Execution',
      icon: Workflow,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      summary: 'Deliver point-of-care care gap popups, 30-day TCM transition tasks, and multidisciplinary care plans directly to care teams.',
      details: [
        'Real-time HL7 ADT alerts triggering 30-day post-discharge care protocols',
        'Personalized care plan builder integrated with 150+ standardized assessment scales',
        'Closed-loop PCP and specialist referral tracking across CIN networks'
      ],
      output: 'Actionable Workflow Execution'
    },
    {
      step: '05',
      stage: 'MEASURE',
      title: 'Performance Monitoring & Value Tracking',
      icon: HeartPulse,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Track real-time PMPM cost baselines, quality scorecards, and shared savings metrics on executive dashboards.',
      details: [
        'Continuous PMPM financial spend tracking against historical contract baselines',
        'Provider and practice-level quality gap closure performance scorecards',
        'Readmission reduction tracking following transition of care interventions'
      ],
      output: 'Executive Performance Cockpit'
    }
  ];

  // Core Platform Principles Sourced from Product Profile 6.0
  const platformPrinciples = [
    {
      title: 'Built from Healthcare Reality',
      description: 'Engineered specifically around the operational needs of ACOs, health plans, CINs, and multidisciplinary care management teams.',
      category: 'Healthcare Design',
      icon: Building
    },
    {
      title: 'Technology Plus Healthcare Services',
      description: 'Combining cloud software with dedicated healthcare expertise, including Account Executives, Risk Coders, and Care Managers.',
      category: 'Hybrid Model',
      icon: HeartPulse
    },
    {
      title: 'Unified Patient Master Chart',
      description: 'Consolidating 13 core clinical domains into a single longitudinal record for complete patient visibility.',
      category: 'Patient 360',
      icon: Layers
    },
    {
      title: 'Real-Time Event Stream Engine',
      description: 'Continuous HL7 ADT hospital event streams driving immediate care manager alerts during post-discharge windows.',
      category: 'Real-Time Care',
      icon: Activity
    },
    {
      title: 'Prospective Risk & Quality Surveillance',
      description: 'Dual-engine CMS-HCC V24/V28 risk adjustment suspecting and automated HEDIS/MIPS gap identification.',
      category: 'Risk & Quality',
      icon: Shield
    },
    {
      title: 'Enterprise Interoperability Standards',
      description: 'Built on RESTful FHIR R4 APIs, C-CDA document exchange, and sub-second Master Patient Indexing (MPI).',
      category: 'Interoperability',
      icon: Cpu
    }
  ];

  const siblings = [
    { label: 'Leadership', path: '/company/leadership', desc: 'Meet the clinical, operational, and technology disciplines shaping Guardian.' },
    { label: 'Security & Trust', path: '/company/security-trust', desc: 'Explore Guardian’s security posture, HIPAA compliance, and data governance.' },
    { label: 'Careers', path: '/company/careers', desc: 'Join engineering, clinical care management, and risk operations teams at Guardian.' },
    { label: 'Contact Us', path: '/company/contact', desc: 'Connect with Guardian specialists to explore capabilities for your organization.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#100b24] via-[#1a1233] to-[#241744] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7b3fc7]/25 via-[#9565d2]/30 to-[#ff7a57]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-purple-200/70 mb-6">
            <Link to="/company" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span className="text-white">About Guardian</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200 mb-6">
              <Sparkles className="w-4 h-4 text-[#ff7a57]" />
              <span>Built from Healthcare. Designed for Action.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Guardian Health Service: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">Connecting Data to Healthcare Action</span>
            </h1>

            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed mb-8">
              Guardian Health Service, LLC brings multi-source healthcare data, clinical artificial intelligence, and dedicated healthcare expertise together—helping ACOs, health plans, and provider organizations make better-informed decisions and deliver measurable outcomes.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#632ca6] hover:from-[#9565d2] hover:to-[#7b3fc7] text-white font-semibold text-sm shadow-lg shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule a Demonstration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/company/leadership"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Leadership & Team</span>
                <ArrowUpRight className="w-4 h-4 text-purple-200" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-purple-200/70 uppercase tracking-wider font-semibold">Company Entity</div>
                <div className="text-xl font-bold text-white mt-1">Guardian Health Service</div>
              </div>
              <div>
                <div className="text-xs text-purple-200/70 uppercase tracking-wider font-semibold">Headquarters</div>
                <div className="text-xl font-bold text-white mt-1">Winter Park, FL</div>
              </div>
              <div>
                <div className="text-xs text-purple-200/70 uppercase tracking-wider font-semibold">Value Chain</div>
                <div className="text-xl font-bold text-white mt-1">5 Action Stages</div>
              </div>
              <div>
                <div className="text-xs text-purple-200/70 uppercase tracking-wider font-semibold">Operating Model</div>
                <div className="text-xl font-bold text-white mt-1">Software + Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GUARDIAN VALUE CHAIN PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              The Guardian Value Chain
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              5-Stage Healthcare Action Framework
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian moves from raw healthcare data intake to measurable clinical and financial results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {valueChain.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf8fc] text-[#625b82] border-[#e9e5f0] hover:border-[#7b3fc7]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#7b3fc7] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#ff7a57]' : 'text-[#7b3fc7]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#faf8fc] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${valueChain[activeStepIndex].badgeColor}`}>
                    <span>STAGE {valueChain[activeStepIndex].step} — {valueChain[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {valueChain[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {valueChain[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {valueChain[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Deliverable:</span>
                    <span className="text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-md">
                      {valueChain[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#f2ecf9] text-[#7b3fc7]">
                      {React.createElement(valueChain[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Guardian Value Chain</h4>
                      <p className="text-xs text-[#706890]">Core Operational Model</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf8fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Current Phase:</span>
                      <span className="text-[#7b3fc7] font-bold">{valueChain[activeStepIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Target Receiver:</span>
                      <span className="text-emerald-600 font-bold">Care Team & Executives</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Output Asset:</span>
                      <span className="text-[#7b3fc7] font-bold">{valueChain[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. REAL UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#faf8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Verified Executive Dashboard Interface
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual Guardian software screens illustrating our executive dashboard and population health analytics cockpit.
            </p>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
              <div>
                <h3 className="text-base font-bold text-[#1c1636]">Executive Dashboard & Population Intelligence Cockpit</h3>
                <p className="text-xs text-[#706890]">Real-time KPI monitoring, financial risk baselines, and quality performance scorecards.</p>
              </div>
              <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                ui-dashboard-main.png
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
              <img
                src="/images/product-ui/ui-dashboard-main.png"
                alt="Guardian Executive Dashboard UI"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM PRINCIPLES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Principles Driving Guardian Healthcare Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified platform principles grounded in Product Profile 6.0 capabilities and healthcare operational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformPrinciples.map((principle, idx) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf8fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#7b3fc7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#f2ecf9] text-[#7b3fc7]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#7b3fc7] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {principle.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#e9e5f0] flex items-center justify-between text-xs text-[#706890]">
                    <span>Product Profile 6.0 Sourced</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL CONTEXT */}
      <section className="py-20 sm:py-24 bg-[#faf8fc] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Healthcare First Design</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Technology is Only Valuable When Healthcare Teams Can Act
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare organizations do not need another passive dashboard or isolated data warehouse. They need a connected operational foundation that combines multi-source EMR ingestion, real-time ADT event stream alerts, and point-of-care care gap notifications.
              </p>
              <p>
                Guardian Health Service was created to bridge the gap between complex healthcare data and clinical care team execution. By combining high-performance cloud software with dedicated healthcare specialists, Guardian enables organizations to succeed under value-based risk contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7]">
              Explore Company Family
            </span>
            <h3 className="text-xl font-bold text-[#1c1636] mt-2">
              Company Navigation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siblings.map((sib, idx) => (
              <Link
                key={idx}
                to={sib.path}
                className="group p-6 rounded-2xl bg-[#faf8fc] border border-[#e9e5f0] hover:border-[#7b3fc7] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#7b3fc7] uppercase tracking-wider">Company</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#7b3fc7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#7b3fc7] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#7b3fc7] flex items-center space-x-1">
                  <span>Explore Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#100b24] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-[#ff7a57]" />
            <span>Connect with Guardian Health Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Build What’s Next for Your Organization?
          </h2>
          <p className="text-base sm:text-lg text-purple-100/90 max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to explore Guardian’s healthcare data platform, clinical solutions, and operational services.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#632ca6] hover:from-[#9565d2] hover:to-[#7b3fc7] text-white font-bold text-sm shadow-xl shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/company/security-trust"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Security & Trust</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
