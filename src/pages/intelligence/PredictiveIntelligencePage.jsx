import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Activity,
  AlertTriangle,
  BarChart3,
  ArrowUpRight,
  Shield,
  Clock,
  Layers,
  Users
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function PredictiveIntelligencePage() {
  const [activeTab, setActiveTab] = useState('pophealth');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Storytelling Pipeline:
  // Data Ingestion → Risk Modeling → Cohort Segmentation → Intervention Trigger → Longitudinal Tracking
  const predictivePipeline = [
    {
      step: '01',
      stage: 'DATA INGESTION',
      title: 'Historical & Real-Time Data Aggregation',
      icon: Activity,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: 'Consolidate multi-year medical claims, real-time ADT hospital alerts, lab result trends, and medication adherence data.',
      details: [
        'Multi-year medical & pharmacy claims data integration',
        'Real-time ADT emergency & inpatient admission event feeds',
        'Longitudinal clinical encounter history and lab trend tracking'
      ],
      output: 'Aggregated Patient Clinical Baseline'
    },
    {
      step: '02',
      stage: 'RISK MODELING',
      title: 'Multidimensional Predictive Risk Scoring',
      icon: TrendingUp,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      summary: 'Evaluate predictive algorithms to calculate 30-day readmission probability, ED high-utilization risk, and CMS-HCC RAF trajectories.',
      details: [
        '30-day post-discharge readmission risk probability scoring',
        'ED high-utilizer probability identification based on historical patterns',
        'Prospective CMS-HCC RAF score trajectory forecasting'
      ],
      output: 'Calculated Risk Scores & Probability Indices'
    },
    {
      step: '03',
      stage: 'COHORT SEGMENTATION',
      title: 'Population Risk Stratification & Tiering',
      icon: Target,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: 'Stratify population panels into actionable risk tiers (High Risk, Rising Risk, Moderate Risk, Low Risk) for clinical review.',
      details: [
        'Dynamic risk tiering across attributed beneficiary populations',
        'Identification of rising-risk patients before acute decompensation occurs',
        'Condition-specific registry creation (CHF, COPD, Diabetes, Hypertension)'
      ],
      output: 'Stratified Population Risk Registries'
    },
    {
      step: '04',
      stage: 'INTERVENTION TRIGGER',
      title: 'Prioritized Care Management Dispatch',
      icon: AlertTriangle,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Automatically surface high-risk patients to clinical care managers, navigators, and transition-of-care teams.',
      details: [
        'Automated task dispatch to care managers upon risk score elevation',
        'TCM 30-day outreach window scheduling following hospital discharge',
        'Point-of-care risk alerts delivered directly to attending physicians'
      ],
      output: 'Targeted Clinical Intervention Tasks'
    },
    {
      step: '05',
      stage: 'LONGITUDINAL TRACKING',
      title: 'Risk Re-Evaluation & Outcome Audit',
      icon: BarChart3,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Continuously track patient risk score changes over time following care plan interventions and clinical outreach.',
      details: [
        'Longitudinal risk trajectory tracking over 30, 60, and 90-day intervals',
        'Evaluation of care plan goal completion against risk score movement',
        'Executive cockpits for population risk distribution monitoring'
      ],
      output: 'Updated Population Risk Profile'
    }
  ];

  // Sourced Capabilities from Product Profile 6.0
  const capabilities = [
    {
      title: '30-Day Readmission Risk Scoring',
      description: 'Predictive scoring model evaluating clinical risk factors following hospital discharge to identify patients needing TCM outreach.',
      category: 'Readmission Risk',
      icon: AlertTriangle
    },
    {
      title: 'ED High-Utilizer Model',
      description: 'Identify patients at risk of frequent emergency department visits based on historical utilization and chronic disease patterns.',
      category: 'Utilization Risk',
      icon: TrendingUp
    },
    {
      title: 'Real-Time RAF Trajectory Engine',
      description: 'Forecast CMS-HCC risk adjustment factor (RAF) scores prospective trajectories under V24 and V28 coding models.',
      category: 'Risk Adjustment',
      icon: BarChart3
    },
    {
      title: 'Population Risk Stratification',
      description: 'Automated population tiering into High Risk, Rising Risk, and Low Risk cohorts across attributed contracts.',
      category: 'Population Health',
      icon: Target
    },
    {
      title: 'Chronic Condition Progression',
      description: 'Track longitudinal disease trajectories across CHF, COPD, Diabetes, and Hypertension patient panels.',
      category: 'Clinical Analytics',
      icon: Activity
    },
    {
      title: 'ADT Event-Driven Scoring',
      description: 'Recalculate patient risk profiles immediately upon receiving inpatient admission or ER discharge ADT notifications.',
      category: 'Real-Time Alerts',
      icon: Clock
    }
  ];

  const siblings = [
    { label: 'Clinical Knowledge Graph', path: '/intelligence/clinical-knowledge-graph', desc: 'Semantic data mesh connecting diagnoses, labs, Rx, and social factors.' },
    { label: 'Artificial Intelligence & NLP', path: '/intelligence/ai', desc: 'Clinical NLP note parsing and prospective MRA/HEDIS suspecting.' },
    { label: 'Intelligent Workflows', path: '/intelligence/intelligent-workflows', desc: 'Automated task routing and point-of-care care gap notifications.' },
    { label: 'Human-in-the-Loop', path: '/intelligence/human-in-the-loop', desc: 'Clinician governance, auditable evidence, and human oversight.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#059669]/20 via-[#10b981]/30 to-[#9d5cee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#bca5e3] mb-6">
            <Link to="/intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8f75b9]" />
            <span className="text-white">Predictive Intelligence</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
              <Sparkles className="w-4 h-4 text-[#bd93f9]" />
              <span>Predictive Risk Scoring // Phase 6C Intelligence Layer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Proactive Risk Scoring & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7f3d0] via-[#6ee7b7] to-[#34d399]">Population Clinical Forecasting</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d5cbe8] leading-relaxed mb-8">
              Guardian’s Predictive Intelligence evaluates multi-year clinical histories, ADT event feeds, and utilization patterns to stratify population risk, score 30-day readmission likelihood, and highlight rising-risk cohorts before acute events occur.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-sm shadow-lg shadow-[#059669]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Predictive Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/platform/risk-stratification"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Risk Stratification</span>
                <ArrowUpRight className="w-4 h-4 text-[#c7adfa]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Readmission Model</div>
                <div className="text-xl font-bold text-white mt-1">30-Day Risk Scoring</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Utilization Alert</div>
                <div className="text-xl font-bold text-white mt-1">ED High-Utilizer Model</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Population Tiering</div>
                <div className="text-xl font-bold text-white mt-1">Risk Stratification</div>
              </div>
              <div>
                <div className="text-xs text-[#bca5e3] uppercase tracking-wider font-semibold">Financial Forecast</div>
                <div className="text-xl font-bold text-white mt-1">RAF Score Trajectory</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREDICTIVE PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#ecfdf5] px-3.5 py-1.5 rounded-full">
              Predictive Risk Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              End-to-End Risk Forecasting Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian transforms clinical & claims feeds into proactive risk scoring and care team prioritization.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {predictivePipeline.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#faf9fc] text-[#625b82] border-[#e9e5f0] hover:border-[#059669]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#059669] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#6ee7b7]' : 'text-[#059669]'}`} />
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
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${predictivePipeline[activeStepIndex].badgeColor}">
                    <span>STAGE {predictivePipeline[activeStepIndex].step} — {predictivePipeline[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {predictivePipeline[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {predictivePipeline[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {predictivePipeline[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Stage Output Deliverable:</span>
                    <span className="text-xs font-bold text-[#059669] bg-[#ecfdf5] px-3 py-1 rounded-md">
                      {predictivePipeline[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#ecfdf5] text-[#059669]">
                      {React.createElement(predictivePipeline[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Predictive Model Milestone</h4>
                      <p className="text-xs text-[#706890]">Guardian Risk Suite</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#faf9fc] p-4 rounded-lg border border-[#f0ebf7] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Model Status:</span>
                      <span className="text-emerald-600 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Scoring</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Workflow Destination:</span>
                      <span className="text-[#1c1636]">Care Management Queue</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#059669] font-bold">{predictivePipeline[activeStepIndex].output}</span>
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
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#ecfdf5] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Predictive Analytics Interfaces
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual interface screens powering population risk stratification and analytics cockpits.
            </p>
          </div>

          <div className="flex justify-center space-x-3 mb-8">
            <button
              onClick={() => setActiveTab('pophealth')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'pophealth'
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#ecfdf5]'
              }`}
            >
              Population Analytics Workspace
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'risk'
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'bg-white text-[#625b82] border border-[#e9e5f0] hover:bg-[#ecfdf5]'
              }`}
            >
              Risk Stratification Cockpit
            </button>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            {activeTab === 'pophealth' ? (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Population Health Analytics Interface</h3>
                    <p className="text-xs text-[#706890]">Population-level risk distribution, utilization trend tracking, and cohort registries.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] px-3 py-1 rounded-full">
                    ui-pop-health-analytics.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-pop-health-analytics.png"
                    alt="Guardian Population Health Analytics UI"
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
                  <div>
                    <h3 className="text-base font-bold text-[#1c1636]">Risk Stratification & Cohort Manager</h3>
                    <p className="text-xs text-[#706890]">Individual patient risk score breakdown and prospective CMS-HCC RAF indicators.</p>
                  </div>
                  <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] px-3 py-1 rounded-full">
                    ui-risk-stratification.png
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
                  <img
                    src="/images/product-ui/ui-risk-stratification.png"
                    alt="Guardian Risk Stratification UI"
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

      {/* 4. CAPABILITIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-[#ecfdf5] px-3.5 py-1.5 rounded-full">
              Sourced Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Predictive Intelligence Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified functionality from Product Profile 6.0 supporting clinical forecasting and proactive population management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9fc] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#059669]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#ecfdf5] text-[#059669]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#059669] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Proactive Risk Management</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Shifting Healthcare Workflows from Reactive to Proactive
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Healthcare systems historically react after an acute hospitalization or emergency event has already occurred. Predictive intelligence allows ACOs, health plans, and provider organizations to identify clinical signals before adverse events materialize.
              </p>
              <p>
                By linking 30-day post-discharge readmission risk scoring with real-time ADT event streams and chronic condition trajectory models, care teams can deploy targeted outreach during critical transition windows—ensuring patient safety and optimizing contract performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Intelligence Navigation"
        kicker="Explore Intelligence Family"
        tagPrefix="AI"
        overviewLink="/intelligence"
        overviewText="View Intelligence Overview"
      />

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#e1d5f6] mb-6">
            <Sparkles className="w-4 h-4 text-[#bd93f9]" />
            <span>Proactively Manage Population Risk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Implement Predictive Risk Scoring?
          </h2>
          <p className="text-base sm:text-lg text-[#d5cbe8] max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how Guardian’s predictive risk models prioritize care team outreach across high-risk patient panels.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10b981] hover:to-[#059669] text-white font-bold text-sm shadow-xl shadow-[#059669]/30 transition-all flex items-center space-x-2 group"
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

