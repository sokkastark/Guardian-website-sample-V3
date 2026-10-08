import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Video,
  Play,
  Shield,
  Layers,
  Search,
  ArrowUpRight,
  Cpu,
  Workflow,
  Smartphone,
  FileText
} from 'lucide-react';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

export default function VideosPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Video Briefing Framework (4 Stages)
  const mediaBriefingFlow = [
    {
      step: '01',
      stage: 'PLATFORM OVERVIEW BRIEF',
      title: 'Connecting Clinical Data & Care Execution',
      icon: Video,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      summary: 'Executive briefing video explaining how Guardian unifies multi-EHR data, claims, and real-time ADT event streams.',
      details: [
        'High-level architectural overview of Guardian’s Patient Master Chart (PMC)',
        'Explanation of sub-second Master Patient Indexing (MPI) deduplication',
        'Overview of population health analytics and financial PMPM tracking'
      ],
      output: 'Executive Platform Briefing'
    },
    {
      step: '02',
      stage: 'FEATURE SPOTLIGHT BRIEF',
      title: 'Real-Time ADT Alerts & Risk Suspecting',
      icon: Cpu,
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
      summary: 'Focused technical clips demonstrating real-time hospital discharge alerting and prospective CMS-HCC risk gap discovery.',
      details: [
        'Demonstrating real-time HL7 v2 ADT event streams (A01, A03, A08)',
        'Walkthrough of dual CMS-HCC V24 and V28 model RAF score suspecting',
        'Demonstrating point-of-care HEDIS and MIPS care gap notification popups'
      ],
      output: 'Feature Spotlight Briefing'
    },
    {
      step: '03',
      stage: 'CLINICAL WORKFLOW BRIEF',
      title: 'Care Coordination & Telemedicine Demonstrations',
      icon: Workflow,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Clinical workflow briefings showing personalized care plan building, 150+ assessment scales, and 1-click telemedicine consults.',
      details: [
        'Care management task assignment and 30-day TCM protocol triggers',
        'Integrating 150+ validated clinical assessment scales into care plans',
        '1-click browser-based video visits with no software installation or patient login'
      ],
      output: 'Clinical Workflow Briefing'
    },
    {
      step: '04',
      stage: 'SOLUTION DEEP-DIVE',
      title: 'ACO, Health Plan & CIN Solution Briefs',
      icon: Layers,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Tailored briefings illustrating value-based care delivery models for ACOs, health plans, and CIN provider networks.',
      details: [
        'ACO shared savings alignment and MSSP benchmark tracking',
        'Health plan Star Ratings surveillance and prospective risk adjustment',
        'Closed-loop PCP and specialist referral tracking for CIN networks'
      ],
      output: 'Tailored Solution Briefing'
    }
  ];

  // Verified Video Briefing Categories
  const videoCategories = [
    {
      title: 'Platform Architecture & Data Integration Briefs',
      description: 'Concise briefings explaining multi-EHR connectivity, C-CDA parsing, Master Patient Indexing, and FHIR R4 APIs.',
      category: 'Data Foundation',
      icon: Cpu
    },
    {
      title: 'Real-Time ADT Event & TOC Briefings',
      description: 'Short feature overviews illustrating hospital admit, discharge, and transfer alerting with 30-day TCM triggers.',
      category: 'Care Transitions',
      icon: Video
    },
    {
      title: 'CMS-HCC Risk Suspecting & Quality Gap Clips',
      description: 'Technical video clips showing prospective RAF score suspecting, dual V24/V28 models, and HEDIS care gaps.',
      category: 'Risk & Quality',
      icon: Shield
    },
    {
      title: 'Care Management & 150+ Assessment Scales',
      description: 'Clinical briefings on care plan creation, chronic care management (CCM/TCM/RPM/PCM), and task queues.',
      category: 'Care Coordination',
      icon: Workflow
    },
    {
      title: 'Referral Manager & Geo-Mapping Briefings',
      description: 'Feature overviews on closed-loop PCP-specialist referral tracking and network provider geo-mapping.',
      category: 'CIN Routing',
      icon: Layers
    },
    {
      title: '1-Click Telemedicine Consult Briefings',
      description: 'Demonstrations of browser-based virtual video encounters with integrated clinical history access.',
      category: 'Virtual Care',
      icon: Smartphone
    }
  ];

  const siblings = [
    { label: 'Insights & Perspectives', path: '/resources/insights', desc: 'Perspectives on healthcare data, clinical intelligence, and value-based strategy.' },
    { label: 'Educational Guides', path: '/resources/guides', desc: 'Practical executive reference guides and operational implementation frameworks.' },
    { label: 'Case Studies', path: '/resources/case-studies', desc: 'Verified Guardian capability evaluation frameworks and value delivery models.' },
    { label: 'Webinars', path: '/resources/webinars', desc: 'Educational presentation sessions covering value-based care and clinical intelligence.' },
    { label: 'Product Tours', path: '/resources/product-tours', desc: 'Guided visual walkthroughs of Guardian platform software capabilities.' }
  ];

  return (
    <div className="min-h-screen bg-[#fff1f2] text-[#35304c] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#331422] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#f43f5e]/25 via-[#fb7185]/30 to-[#e11d48]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#fecdd3] mb-6">
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#f43f5e]" />
            <span className="text-white">Media Briefings & Video Library</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#ffe4e6] mb-6">
              <Sparkles className="w-4 h-4 text-[#fda4af]" />
              <span>Media Briefing Library // Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Healthcare Intelligence Video Briefings & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fecdd3] via-[#fda4af] to-[#f43f5e]">Media Library</span>
            </h1>

            <p className="text-base sm:text-lg text-[#ffe4e6] leading-relaxed mb-8">
              Explore feature overview briefings, platform architecture clips, and clinical workflow demonstrations illustrating how Guardian powers value-based care execution.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                to="/company/contact?intent=demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f43f5e] to-[#be123c] hover:from-[#fb7185] hover:to-[#f43f5e] text-white font-semibold text-sm shadow-lg shadow-[#f43f5e]/30 transition-all flex items-center space-x-2 group"
              >
                <span>Schedule Live Video Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/product-tours"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center space-x-2"
              >
                <span>Explore Product Tours</span>
                <ArrowUpRight className="w-4 h-4 text-[#fecdd3]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs text-[#fecdd3] uppercase tracking-wider font-semibold">Media Format</div>
                <div className="text-xl font-bold text-white mt-1">Feature Briefings</div>
              </div>
              <div>
                <div className="text-xs text-[#fecdd3] uppercase tracking-wider font-semibold">Real-Time Alert</div>
                <div className="text-xl font-bold text-white mt-1">HL7 ADT Stream</div>
              </div>
              <div>
                <div className="text-xs text-[#fecdd3] uppercase tracking-wider font-semibold">Virtual Consult</div>
                <div className="text-xl font-bold text-white mt-1">1-Click Telehealth</div>
              </div>
              <div>
                <div className="text-xs text-[#fecdd3] uppercase tracking-wider font-semibold">Care Engine</div>
                <div className="text-xl font-bold text-white mt-1">150+ Assessment Scales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEDIA BRIEFING PIPELINE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f43f5e] bg-[#ffe4e6] px-3.5 py-1.5 rounded-full">
              Media Briefing Structure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Guardian Media Briefing Framework
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              How Guardian structures feature overviews and clinical briefings.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {mediaBriefingFlow.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#1c1636] text-white border-[#1c1636] shadow-md scale-105'
                      : 'bg-[#fff1f2] text-[#625b82] border-[#e9e5f0] hover:border-[#f43f5e]/40 hover:bg-white'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${isActive ? 'bg-[#f43f5e] text-white' : 'bg-[#e9e5f0] text-[#35304c]'}`}>
                    {item.step}
                  </span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#fda4af]' : 'text-[#f43f5e]'}`} />
                  <span className="hidden sm:inline">{item.stage}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#fff1f2] border border-[#e9e5f0] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${mediaBriefingFlow[activeStepIndex].badgeColor}`}>
                    <span>BRIEF {mediaBriefingFlow[activeStepIndex].step} — {mediaBriefingFlow[activeStepIndex].stage}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636] mb-3">
                    {mediaBriefingFlow[activeStepIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#524b70] leading-relaxed mb-6">
                    {mediaBriefingFlow[activeStepIndex].summary}
                  </p>
                  <div className="space-y-3 mb-6">
                    {mediaBriefingFlow[activeStepIndex].details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#35304c]">
                        <CheckCircle2 className="w-4 h-4 text-[#f43f5e] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#e9e5f0] flex items-center justify-between">
                    <span className="text-xs text-[#706890] font-medium">Briefing Deliverable:</span>
                    <span className="text-xs font-bold text-[#f43f5e] bg-[#ffe4e6] px-3 py-1 rounded-md">
                      {mediaBriefingFlow[activeStepIndex].output}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-[#e9e5f0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#ffe4e6] text-[#f43f5e]">
                      {React.createElement(mediaBriefingFlow[activeStepIndex].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1c1636]">Media Briefing Module</h4>
                      <p className="text-xs text-[#706890]">Guardian Video Series</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-[#fff1f2] p-4 rounded-lg border border-[#ffe4e6] text-xs">
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Briefing Stage:</span>
                      <span className="text-rose-700 font-bold">{mediaBriefingFlow[activeStepIndex].stage}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Verification Standard:</span>
                      <span className="text-emerald-600 font-bold">Product Profile 6.0</span>
                    </div>
                    <div className="flex justify-between items-center text-[#524b70]">
                      <span className="font-semibold">Deliverable:</span>
                      <span className="text-[#f43f5e] font-bold">{mediaBriefingFlow[activeStepIndex].output}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT UI PROOF SHOWCASE */}
      <section className="py-20 sm:py-24 bg-[#fff1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f43f5e] bg-[#ffe4e6] px-3.5 py-1.5 rounded-full">
              Real Product Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Telemedicine Virtual Visit Interface Proof
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Explore actual product interface screens featured in Guardian video walkthroughs and telemedicine briefings.
            </p>
          </div>

          <div className="bg-white border border-[#e9e5f0] rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0ebf7]">
              <div>
                <h3 className="text-base font-bold text-[#1c1636]">1-Click Browser Telemedicine Workspace</h3>
                <p className="text-xs text-[#706890]">Secure video consults, virtual waiting room, and point-of-care clinical documentation.</p>
              </div>
              <span className="text-xs font-semibold text-[#f43f5e] bg-[#ffe4e6] px-3 py-1 rounded-full">
                ui-telemedicine.png
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e9e5f0] bg-[#1c1636]">
              <img
                src="/images/product-ui/ui-telemedicine.png"
                alt="Guardian Telemedicine UI"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VIDEO CATEGORIES MATRIX */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f43f5e] bg-[#ffe4e6] px-3.5 py-1.5 rounded-full">
              Video Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mt-4 mb-3">
              Media Briefing & Video Categories
            </h2>
            <p className="text-sm sm:text-base text-[#625b82]">
              Verified video overview categories derived from Product Profile 6.0 capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fff1f2] border border-[#e9e5f0] rounded-2xl p-6 hover:shadow-md hover:border-[#f43f5e]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#ffe4e6] text-[#f43f5e]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#f43f5e] bg-white border border-[#e9e5f0] px-2.5 py-1 rounded-md">
                        {cat.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c1636] mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524b70] leading-relaxed">
                      {cat.description}
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
      <section className="py-20 sm:py-24 bg-[#fff1f2] border-t border-[#e9e5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-[#e9e5f0] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ffe4e6] text-[#f43f5e] text-xs font-bold mb-6">
              <Shield className="w-4 h-4" />
              <span>Media Briefing Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c1636] mb-6">
              Clear Visual Explanations for Healthcare Teams
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#524b70] leading-relaxed">
              <p>
                Understanding how modern clinical software functions requires more than static product descriptions. Healthcare teams need concise, structured video briefings that illustrate how clinical charts, risk algorithms, and care workflows operate.
              </p>
              <p>
                Guardian Video Briefings provide focused overviews of our primary software modules—including real-time ADT event stream alerting, prospective CMS-HCC risk gap suspecting, and 1-click telemedicine consults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIBLING NAVIGATION */}
      <RelatedPlatformModules
        modules={siblings}
        title="Resources Navigation"
        kicker="Explore Resources Family"
        tagPrefix="RESOURCE"
        overviewLink="/resources"
        overviewText="View Resources Overview"
        actionText="View Resource"
      />

      {/* 7. DARK CLOSING CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1c1636] to-[#140f28] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#ffe4e6] mb-6">
            <Sparkles className="w-4 h-4 text-[#fda4af]" />
            <span>Schedule Live Media Briefing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Schedule a Live Video Briefing for Your Team?
          </h2>
          <p className="text-base sm:text-lg text-[#ffe4e6] max-w-2xl mx-auto mb-8">
            Schedule a personalized demonstration to see Guardian software capabilities demonstrated live for your care management and analytics teams.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/company/contact?intent=demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#f43f5e] to-[#be123c] hover:from-[#fb7185] hover:to-[#f43f5e] text-white font-bold text-sm shadow-xl shadow-[#f43f5e]/30 transition-all flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/resources"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center space-x-2"
            >
              <span>Explore Resources Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
