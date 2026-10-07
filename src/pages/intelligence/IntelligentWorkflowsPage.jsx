import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Workflow,
  Zap,
  CheckSquare,
  Bell,
  Users,
  ArrowUpRight,
  Shield,
  Layers,
  Share2,
  FileCheck
} from 'lucide-react';

export default function IntelligentWorkflowsPage() {
  const [activeTab, setActiveTab] = useState('quality');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Trigger Capture → Workflow Evaluation → Task Dispatch → Action Execution → Status Audit & Closure
  const workflowPipeline = [
    {
      step: '01',
      stage: 'TRIGGER CAPTURE',
      title: 'Clinical Event & Signal Capture',
      icon: Bell,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Capture real-time clinical events including ADT hospital alerts, unclosed HEDIS care gaps, elevated risk scores, and specialist referral requests.',
      details: [
        'Real-time ADT hospital admission & ER discharge alerts',
        'Automatic detection of open HEDIS/MSSP quality care gaps',
        'Ingestion of provider electronic referral requests'
      ],
      output: 'Captured Workflow Trigger Event'
    },
    {
      step: '02',
      stage: 'WORKFLOW EVALUATION',
      title: 'Rule Engine & Protocol Evaluation',
      icon: Zap,
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
      summary: 'Evaluate rules against standardized clinical protocols, care plan guidelines, and organizational task routing hierarchies.',
      details: [
        'Protocol rules evaluation for CCM, TCM, RPM, and PCM programs',
        'Matching of patient needs to role-based care team qualifications',
        'PCP and specialist network referral routing logic'
      ],
      output: 'Evaluated Workflow Instruction'
    },
    {
      step: '03',
      stage: 'TASK DISPATCH',
      title: 'Automated Interdisciplinary Task Routing',
      icon: Workflow,
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      summary: 'Dispatch targeted tasks directly into care manager worklists, clinical navigator cockpits, and provider EHR point-of-care alerts.',
      details: [
        'Intelligent task distribution across care managers, nurses, and navigators',
        'Point-of-care care gap notifications delivered into clinician EHR workflows',
        'Direct Secure Messaging (DSM) referral dispatch to specialist offices'
      ],
      output: 'Dispatched Task to Care Team'
    },
    {
      step: '04',
      stage: 'ACTION EXECUTION',
      title: 'Point-of-Care & Patient Outreach Execution',
      icon: Users,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Execute clinical interventions during patient encounters or deploy automated multi-channel patient communications (SMS/voice).',
      details: [
        'Clinician gap closure during ambulatory patient visits',
        'Conversational AI outreach for screening reminders & appointment scheduling',
        'Care plan goal updating and barrier documentation'
      ],
      output: 'Executed Clinical Action'
    },
    {
      step: '05',
      stage: 'STATUS AUDIT & CLOSURE',
      title: 'Closed-Loop Task Auditing & Confirmation',
      icon: FileCheck,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Audit task completion statuses in real time, update patient longitudinal master charts, and confirm closed-loop outcome verification.',
      details: [
        'Real-time task completion tracking (Pending, In-Progress, Completed)',
        'Consultation note retrieval & loop closure in Patient 360',
        'Performance metrics logging for quality compliance scorecards'
      ],
      output: 'Verified Closed-Loop Completion'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: 'Point-of-Care Gap Notifications',
      description: 'Deliver actionable care gap alerts directly into physician EHR workflows during clinical encounters.',
      category: 'Point-of-Care',
      icon: Bell
    },
    {
      title: 'Automated Care Task Dispatch',
      description: 'Intelligent task routing to care managers, clinical navigators, and support staff based on risk triggers.',
      category: 'Task Routing',
      icon: Workflow
    },
    {
      title: 'Care Plan Rules Engine',
      description: 'Automate initial care plan template generation and intervention scheduling based on 150+ standardized assessment tools.',
      category: 'Care Planning',
      icon: Zap
    },
    {
      title: 'Multi-Channel Alerting',
      description: 'Deliver notifications via in-app dashboards, email summaries, and Direct Secure Messaging (DSM).',
      category: 'Communication',
      icon: Share2
    },
    {
      title: 'Closed-Loop Performance Tracking',
      description: 'Monitor task resolution from initial trigger capture through final clinician sign-off and chart update.',
      category: 'Closed-Loop Audit',
      icon: FileCheck
    },
    {
      title: 'Referral Management Automation',
      description: 'Streamline electronic specialist referral routing with provider geo-mapping and consultation note tracking.',
      category: 'Referral Routing',
      icon: Users
    }
  ];

  const siblings = [
    { label: 'Clinical Knowledge Graph', path: '/intelligence/clinical-knowledge-graph', desc: 'Semantic data mesh connecting diagnoses, labs, Rx, and social factors.' },
    { label: 'Artificial Intelligence & NLP', path: '/intelligence/ai', desc: 'Clinical NLP note parsing and prospective MRA/HEDIS suspecting.' },
    { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence', desc: '30-day readmission scoring and population risk forecasting.' },
    { label: 'Human-in-the-Loop', path: '/intelligence/human-in-the-loop', desc: 'Clinician governance, auditable evidence, and human oversight.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#ff7a57]/20 via-[#f97316]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Intelligent Workflows</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Automated Action Dispatch // Phase 6C Intelligence Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Turning Data Intelligence into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffedd5] via-[#fed7aa] to-[#fb923c]">Coordinated Clinical Action</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian’s Intelligent Workflows convert analytical insights into direct care team action—automatically routing tasks, dispatching point-of-care gap alerts, and coordinating multidisciplinary care delivery.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7a57] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white font-semibold text-sm shadow-lg shadow-[#ff7a57]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Workflow Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/care-management"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Care Management</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Point-of-Care</div>
                <div className="text-xl font-bold text-white mt-1">EHR Gap Alerts</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Task Dispatch</div>
                <div className="text-xl font-bold text-white mt-1">Automated Routing</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Care Plans</div>
                <div className="text-xl font-bold text-white mt-1">Rules-Based Engine</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Audit Model</div>
                <div className="text-xl font-bold text-white mt-1">Closed-Loop Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORKFLOW PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ea580c] bg-[#fff7ed] px-3.5 py-1.5 rounded-full">
              Automated Workflow Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Trigger-to-Closure Workflow Cycle
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian routes clinical events from initial trigger capture through verified closed-loop completion.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {workflowPipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#ea580c]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#ea580c] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#fed7aa]' : 'text-[#ea580c]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${workflowPipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {workflowPipeline[activeStepIndex].step} — {workflowPipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {workflowPipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {workflowPipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {workflowPipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#ea580c] bg-[#fff7ed] px-3 py-1 rounded-md">
                      {workflowPipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#fff7ed] text-[#ea580c]">
                      {React.createElement(workflowPipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Workflow Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Workflow Engine</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Workflow Status:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Stage</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Recipient Role:</span>
                      <span className="text-[#1c1636]">Care Manager & PCP</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#ea580c] font-bold">{workflowPipeline[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ea580c] bg-[#fff7ed] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Workflow Management Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual screens powering quality gap management and electronic referral routing workflows.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('quality')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'quality'
                  ? 'bg-[#ea580c] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#fff7ed]'
              }`}
            >
              Quality & Care Gaps Cockpit
            </button>
            <button
              onClick={() => setActiveTab('referral')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'referral'
                  ? 'bg-[#ea580c] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#fff7ed]'
              }`}
            >
              Referral Management Cockpit
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'quality' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Quality Gap Manager & Alert Dispatch</h3>
                    <p className="text-xs text-[#706890]">Point-of-care care gap notification rules and automated action routing queues.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#ea580c] bg-[#fff7ed] px-3 py-1 rounded-full">
                    ui-quality-manager.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-quality-manager.png"
                    alt="Guardian Quality & Workflow Manager UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Electronic Referral Management Workspace</h3>
                    <p className="text-xs text-[#706890]">Closed-loop referral routing, status tracking, and specialist consultation ingestion.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#ea580c] bg-[#fff7ed] px-3 py-1 rounded-full">
                    ui-referral-manager.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-referral-manager.png"
                    alt="Guardian Referral Management UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ea580c] bg-[#fff7ed] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Intelligent Workflow Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting clinical task routing and closed-loop care execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#ea580c]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#fff7ed] text-[#ea580c]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#ea580c] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {cap.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {cap.description}
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
      <section className="py-20 sm:py-24 bg-[#faf9fc] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#fff7ed] text-[#ea580c] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Operational Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Bridging Analytical Insights and Clinical Operations
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare analytics engines frequently generate insights that sit unused in static dashboards. Intelligent Workflows solve this gap by immediately routing analytical findings into active clinician and care manager task queues.
              </p>
              <p>
                Whether delivering a point-of-care care gap notification during a routine office visit or triggering an automated 30-day TCM transition plan following a hospital discharge alert, Guardian ensures data intelligence drives measurable, closed-loop care execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <section className="py-16 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ea580c]">
              Explore Intelligence Family
            </span>
            <h3 className="text-xl font-bold text-[#1c1636] mt-2">
              Intelligence Navigation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siblings.map((sib, idx) => (
              <Link
                key={idx}
                to={sib.path}
                className="group p-6 rounded-2xl bg-[#faf9fc] border border-[#e9e5f0] hover:border-[#ea580c] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Intelligence</span>
                    <ArrowUpRight className="w-4 h-4 text-[#706890] group-hover:text-[#ea580c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1636] mb-2 group-hover:text-[#ea580c] transition-colors">
                    {sib.label}
                  </h4>
                  <p className="text-xs text-[#625b82] leading-relaxed">
                    {sib.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e9e5f0] text-xs font-semibold text-[#ea580c] flex items-center space-x-1">
                  <span>Explore Module</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
            <Sparkles className="w-4 h-4 text-[#bd93f9]" />
            <span>Automate Clinical Operations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Automate Your Clinical Workflows?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how Guardian’s Intelligent Workflows route tasks, dispatch gap alerts, and streamline care team operations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff7a57] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white font-bold text-sm shadow-xl shadow-[#ff7a57]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/intelligence"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Intelligence Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

