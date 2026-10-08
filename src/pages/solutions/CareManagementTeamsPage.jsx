import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Users,
  Target,
  FileText,
  Activity,
  Award,
  Bell,
  Layers,
  HeartPulse,
  Clock,
  ArrowUpRight,
  Shield,
  CheckSquare,
  BarChart3,
  UserCheck
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function CareManagementTeamsPage() {
  const [activeTab, setActiveTab] = useState('workspace');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Approved Storytelling Direction:
  // Patient Identification → Risk Prioritization → Assessment & Care Plan → Multi-Disciplinary Action → Outcome Tracking
  const carePipeline = [
    {
      step: '01',
      stage: 'PATIENT IDENTIFICATION',
      title: 'Real-Time Ingestion & ADT Event Alerts',
      icon: Bell,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      summary: 'Ingest inpatient/ER hospital ADT alerts, open care gap flags, and provider referrals into centralized care management queues in real time.',
      details: [
        'Real-time ADT event alerts for hospital admissions & ER visits',
        'Automatic routing of unassigned attributed patients into care queues',
        'Multi-source ingestion combining claims, EHR, and screening feeds'
      ],
      output: 'Centralized Patient Care Queue'
    },
    {
      step: '02',
      stage: 'RISK PRIORITIZATION',
      title: 'Risk Stratification & Program Qualification',
      icon: Target,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Sort patient lists dynamically by clinical risk tier, utilization frequency, and program qualification for CCM, TCM, RPM, and PCM.',
      details: [
        'Clinical risk score tiering and high-acuity patient tagging',
        'Program eligibility screening for CCM, TCM, RPM, and PCM',
        'Dynamic queue prioritization based on recent ADT alerts and care gaps'
      ],
      output: 'Prioritized Care Management Roster'
    },
    {
      step: '03',
      stage: 'ASSESSMENT & CARE PLAN',
      title: '150+ Standardized Scales & Care Plan Builder',
      icon: FileText,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Conduct clinical and SDoH evaluations with 150+ standardized assessment scales and construct personalized care plans with interventions.',
      details: [
        '150+ standardized assessment scale library (clinical & SDoH)',
        'Personal Care Plan Builder with goal, barrier, and intervention tracking',
        'Automated initial assessment scheduling and goal baselining'
      ],
      output: 'Individualized Clinical Care Plan'
    },
    {
      step: '04',
      stage: 'MULTI-DISCIPLINARY ACTION',
      title: 'Care Team Coordination & Task Automation',
      icon: Users,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Distribute structured care management tasks across care managers, nurses, navigators, and account executives in unified workspaces.',
      details: [
        'Interdisciplinary care team task dispatch and ownership assignment',
        'Integrated multi-channel patient outreach & follow-up tracking',
        'Shared care management cockpit connecting clinical & administrative roles'
      ],
      output: 'Coordinated Care Execution'
    },
    {
      step: '05',
      stage: 'OUTCOME TRACKING',
      title: 'Goal Progression & Longitudinal Monitoring',
      icon: CheckSquare,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Monitor goal attainment, task compliance, post-discharge 30-day transition tracking, and ongoing care plan updates over time.',
      details: [
        '30-day TCM transition window tracking to prevent readmissions',
        'Care plan goal completion auditing & longitudinal status tracking',
        'Comprehensive clinical progress reporting across patient panels'
      ],
      output: 'Verified Care Outcomes'
    }
  ];

  // Approved Features Sourced from Product Profile 6.0
  const capabilities = [
    {
      title: 'Personal Care Plan Builder',
      description: 'Create customized, patient-centered care plans with measurable goal tracking, barrier documentation, and structured interventions.',
      category: 'Care Planning',
      icon: FileText
    },
    {
      title: '150+ Standardized Assessment Scales',
      description: 'Library of 150+ validated clinical, behavioral, and SDoH assessment scales for baseline evaluations and longitudinal tracking.',
      category: 'Clinical Assessment',
      icon: Award
    },
    {
      title: 'CCM / TCM / RPM / PCM Programs',
      description: 'Structured workflows supporting Chronic Care Management (CCM), Transition Care (TCM), Remote Monitoring (RPM), and Principal Care (PCM).',
      category: 'Care Programs',
      icon: HeartPulse
    },
    {
      title: 'Real-Time ADT Hospital Alerts',
      description: 'Immediate event notifications for hospital admissions, discharges, and ER encounters to drive timely care navigation.',
      category: 'Hospital Surveillance',
      icon: Bell
    },
    {
      title: 'Risk-Based Patient Prioritization',
      description: 'Dynamic patient panel sorting based on clinical risk scores, chronic condition complexity, and recent hospital utilization.',
      category: 'Risk Prioritization',
      icon: Target
    },
    {
      title: 'Multi-Disciplinary Team Cockpit',
      description: 'Shared coordination workspaces connecting care managers, clinical navigators, account executives, and physicians.',
      category: 'Team Coordination',
      icon: Users
    }
  ];

  const siblings = [
    { label: 'ACO & Value-Based Care', path: '/solutions/aco-value-based-care', desc: 'CMS CCLF attribution, MSSP quality measures, and shared savings tracking.' },
    { label: 'Health Plans / Payers', path: '/solutions/health-plans', desc: 'Star ratings surveillance, MLR optimization, and payer data integration.' },
    { label: 'CIN & Provider Organizations', path: '/solutions/cin-provider-organizations', desc: 'Closed-loop referral routing and CIN provider geo-mapping.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7b3fc7]/20 via-[#4e2882]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Care Management Teams</span>
          </nav>

          <div className="max-w-3xl">
            {/* Live Environment Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Clinical Care Solutions // Phase 6B Approved Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Technology-Enabled Workflows for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2bbf3] via-[#b692ec] to-[#9d5cee]">Care Managers & Clinical Teams</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Equip care managers, clinical navigators, and multidisciplinary care teams with structured care plans, standardized assessment tools (150+ scales), real-time ADT hospital alerts, and automated task workflows across CCM, TCM, RPM, and PCM programs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#602ea6] hover:from-[#8b4ad8] hover:to-[#6c35b8] text-white font-semibold text-sm shadow-lg shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Care Management Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/care-management"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Platform Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Standardized Tools</div>
                <div className="text-xl font-bold text-white mt-1">150+ Assessment Scales</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Supported Programs</div>
                <div className="text-xl font-bold text-white mt-1">CCM / TCM / RPM / PCM</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Hospital Event Stream</div>
                <div className="text-xl font-bold text-white mt-1">Real-Time ADT Alerts</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Care Planning</div>
                <div className="text-xl font-bold text-white mt-1">Care Plan Builder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APPROVED STORYTELLING PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Care Management Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              End-to-End Care Team Workflow Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian supports care managers, navigators, and account executives from initial patient identification through continuous outcome tracking.
            </p>
          </div>

          {/* Workflow Stepper Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {carePipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#7b3fc7]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#7b3fc7] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#c7adfa]' : 'text-[#7b3fc7]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${carePipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {carePipeline[activeStepIndex].step} — {carePipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {carePipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {carePipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {carePipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#7b3fc7] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-md">
                      {carePipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#f2ecf9] text-[#7b3fc7]">
                      {React.createElement(carePipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Workflow Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Care Suite</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Step Status:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Stage</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Target User Roles:</span>
                      <span className="text-[#1c1636]">Care Managers & Navigators</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">System Output:</span>
                      <span className="text-[#7b3fc7] font-bold">{carePipeline[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. GUARDIAN UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Guardian Care Management UI Assets
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual interface screens powering clinical care teams, standardized assessments, and personal care plan creation.
            </p>
          </div>

          {/* Screenshot Switcher Tabs */}
          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('workspace')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'workspace'
                  ? 'bg-[#7b3fc7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f2ecf9]'
              }`}
            >
              Care Team Workspace
            </button>
            <button
              onClick={() => setActiveTab('careplan')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'careplan'
                  ? 'bg-[#7b3fc7] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#f2ecf9]'
              }`}
            >
              Care Plan Builder
            </button>
          </div>

          {/* Screenshot Container */}
          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'workspace' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Care Team Coordination Cockpit</h3>
                    <p className="text-xs text-[#706890]">Prioritized patient rosters, task assignments, and real-time hospital event notifications.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                    ui-care-management.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-care-management.png"
                    alt="Guardian Care Management Workspace UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Personal Care Plan Builder</h3>
                    <p className="text-xs text-[#706890]">Interactive care planning tool with clinical goals, barrier identification, and 150+ assessment scales.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1 rounded-full">
                    ui-care-plan-builder.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-care-plan-builder.png"
                    alt="Guardian Care Plan Builder UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            )}
            <p className="text-xs text-[#716b89] text-center mt-3 leading-relaxed italic">
              *Illustrative sample demonstration data. Patient records, metrics, and outcomes are for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT PROFILE 6.0 CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Care Management & Care Team Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting clinical care managers and multidisciplinary teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#7b3fc7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#f2ecf9] text-[#7b3fc7]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#7b3fc7] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
                    <span>Product Profile 6.0 Verified</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL CONTEXT SECTION */}
      <section className="py-20 sm:py-24 bg-[#faf9fc] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-bold mb-6">
              <UserCheck className="w-4 h-4" />
              <span>Multi-Disciplinary Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Empowering Healthcare Professionals Across the Care Continuum
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Modern care delivery requires close alignment between care managers, clinical navigators, account executives, and physicians. Guardian provides unified workflows that remove administrative barriers and standardize evidence-based care delivery.
              </p>
              <p>
                By connecting real-time hospital ADT event feeds directly to personal care plan templates and 150+ standardized assessment tools, clinical care teams can quickly identify rising-risk patients, intervene during critical 30-day post-discharge windows, and continuously measure goal progression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING SOLUTIONS NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Solutions Family Navigation"
        kicker="Explore Related Solutions"
        tagPrefix="SOLUTION"
        overviewLink="/solutions"
        overviewText="View Solutions Overview"
        actionText="View Solution"
      />

      {/* 7. DARK CLOSING CTA SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
            <Sparkles className="w-4 h-4 text-[#bd93f9]" />
            <span>Transform Clinical Care Coordination</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Empower Your Care Management Teams?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how Guardian’s structured care plans, 150+ assessment scales, and real-time ADT alerts streamline care team operations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7b3fc7] to-[#602ea6] hover:from-[#8b4ad8] hover:to-[#6c35b8] text-white font-bold text-sm shadow-xl shadow-[#7b3fc7]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/platform"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Platform Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

