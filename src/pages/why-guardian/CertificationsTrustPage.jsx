import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  FileText, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Database,
  Server,
  UserCheck,
  Eye,
  Award
} from 'lucide-react';
import { RibbonStepGrid } from '../../components/common/RibbonStepCard';
import RelatedPlatformModules from '../../components/common/RelatedPlatformModules';

const trustPillars = [
  {
    id: 'alignment',
    title: 'Framework Alignment',
    eyebrow: 'SECURITY & COMPLIANCE',
    subtitle: 'Strict alignment with leading healthcare security standards',
    items: [
      {
        title: 'HITRUST & SOC 2 Aligned Architecture',
        desc: 'Engineered according to HITRUST Common Security Framework (CSF) control objectives and SOC 2 Type II trust service criteria.'
      },
      {
        title: 'HIPAA Privacy & Security Framework',
        desc: 'Comprehensive Administrative, Physical, and Technical Safeguards aligned with the HIPAA Privacy and Security Rules for all Protected Health Information (PHI).'
      },
      {
        title: 'CMS MIPS Qualified Registry Architecture',
        desc: 'Infrastructure designed for official MIPS performance measure calculation, clinical data aggregation, and registry data submission.'
      },
      {
        title: 'CareQuality & eHealth Exchange Alignment',
        desc: 'Standardized national interoperability alignment supporting Direct Secure Messaging (DSM), FHIR R4, and HL7 v2.x transactions.'
      }
    ]
  },
  {
    id: 'encryption',
    title: 'Data Encryption & Protection',
    eyebrow: 'DATA SAFEGUARDS',
    subtitle: 'Cryptographic protections across all data lifecycles',
    items: [
      {
        title: 'AES-256 Encryption at Rest',
        desc: 'All stored patient data, clinical databases, and analytical warehouse partitions are encrypted using FIPS 140-2 validated AES-256 algorithms.'
      },
      {
        title: 'TLS 1.3 Encryption in Transit',
        desc: 'End-to-end transport layer security protecting API calls, ADT feed ingestion, and user browser sessions from interception.'
      },
      {
        title: 'Cryptographic Key Management',
        desc: 'Automated key rotation and enterprise Hardware Security Modules (HSM) dedicated to cryptographic separation.'
      },
      {
        title: 'Data De-Identification & Masking',
        desc: 'Automatic PHI redaction and HIPAA Safe Harbor de-identification pipelines for research, benchmarking, and ML model training.'
      }
    ]
  },
  {
    id: 'isolation',
    title: 'Tenant Isolation & Access Control',
    eyebrow: 'ACCESS & GOVERNANCE',
    subtitle: 'Granular identity management and structural data separation',
    items: [
      {
        title: 'Multi-Tenant Data Isolation',
        desc: 'Logical and physical partition isolation ensuring zero cross-tenant data leakage between health plans, ACOs, and health systems.'
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Fine-grained permissions defining exactly which clinical users, care managers, or billers can view specific patient records.'
      },
      {
        title: 'Multi-Factor Authentication (MFA)',
        desc: 'Mandatory MFA and SSO (SAML 2.0 / OpenID Connect) integration supporting enterprise Identity Providers (Okta, Azure AD).'
      },
      {
        title: 'Comprehensive Audit Logging',
        desc: 'Immutable, tamper-evident audit logs capturing every read, write, export, and query action on PHI records for compliance reporting.'
      }
    ]
  }
];

const pipelineStages = [
  {
    num: '01',
    label: 'INGESTION',
    title: 'Ingestion & Encryption',
    icon: Lock,
    desc: 'TLS 1.3 encrypted data streams (EHR, Claims, ADT) ingested into isolated secure dropzones with cryptographic checksum validation.',
    ribbonBg: 'bg-[#10b981]',
    foldColor: '#047857',
    numberColor: 'text-[#047857]'
  },
  {
    num: '02',
    label: 'ISOLATION',
    title: 'Multi-Tenant Isolation',
    icon: Server,
    desc: 'Patient and clinical data separated into organization-specific logical partitions with strict database boundary security controls.',
    ribbonBg: 'bg-[#0284c7]',
    foldColor: '#0369a1',
    numberColor: 'text-[#0369a1]'
  },
  {
    num: '03',
    label: 'ACCESS',
    title: 'RBAC & Identity Verification',
    icon: UserCheck,
    desc: 'SAML 2.0 / OIDC SSO authentication enforcing granular role-based permissions before granting record access.',
    ribbonBg: 'bg-[#7b3fc7]',
    foldColor: '#4c1d95',
    numberColor: 'text-[#4c1d95]'
  },
  {
    num: '04',
    label: 'AUDIT',
    title: 'Continuous Audit Logging',
    icon: Eye,
    desc: 'Every system query, record view, and clinical action logged to immutable, time-stamped compliance audit trails.',
    ribbonBg: 'bg-[#f97316]',
    foldColor: '#c2410c',
    numberColor: 'text-[#c2410c]'
  },
  {
    num: '05',
    label: 'GOVERNANCE',
    title: 'Compliance & Quality Registry',
    icon: Award,
    desc: 'Standardized MIPS QCDR calculation and CareQuality interoperability exchange under verified governance protocols.',
    ribbonBg: 'bg-[#ec4899]',
    foldColor: '#be185d',
    numberColor: 'text-[#be185d]'
  }
];

export default function CertificationsTrustPage() {
  const [activeTab, setActiveTab] = useState('alignment');
  const currentPillar = trustPillars.find(p => p.id === activeTab) || trustPillars[0];

  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1c1636] selection:bg-[#7b3fc7] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          01 — HERO: Deep Technical Trust & Security Theme
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-[#0e091f] via-[#160f2d] to-[#20143d] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#7b3fc7]/20 via-[#4f2896]/20 to-transparent blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-purple-200/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link to="/company/about" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-semibold">Security & Trust</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>SECURITY, INTEROPERABILITY & TRUST</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Validated Healthcare Security & Interoperability.
            </h1>

            <p className="text-lg sm:text-xl text-purple-100/90 leading-relaxed font-normal max-w-2xl mb-8">
              Guardian is built to protect sensitive healthcare data, maintain rigorous compliance alignment, and support trusted nationwide clinical interoperability.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#trust-pillars"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Explore Trust Architecture</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </a>
              <Link
                to="/company/contact?intent=demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] transition-all duration-200"
              >
                <span>Request Security Overview</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02 — SECURITY PIPELINE: 5-Stage 3D Folded Ribbon Pathway (Light Section)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white text-[#1c1636] border-b border-[#e9e4f0] relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-[#7b3fc7]/5 via-[#0284c7]/5 to-[#ff7a57]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#7b3fc7]/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>Defense In Depth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c1636] leading-tight mb-3">
              End-to-End Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b3fc7] via-[#4f46e5] to-[#ff7a57]">Security Pipeline</span>
            </h2>
            <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
              How patient data is protected from initial ingestion through registry analytics and clinical exchange.
            </p>
          </div>

          <div className="relative pt-2">
            <RibbonStepGrid steps={pipelineStages} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03 — TRUST PILLARS: Interactive Tabbed Framework
          ───────────────────────────────────────────────────────────── */}
      <section id="trust-pillars" className="py-20 sm:py-28 bg-[#faf8fc] border-b border-[#edeaf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Compliance & Security Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Rigorous standards for enterprise healthcare.
            </h2>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#e1e1e5] mb-12 pb-4">
            {trustPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === pillar.id
                    ? 'bg-[#7b3fc7] text-white shadow-md shadow-[#7b3fc7]/20'
                    : 'bg-white text-[#554e6d] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                }`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentPillar.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs hover:border-[#7b3fc7]/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1636] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#554e6d] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04 — SIBLING NAVIGATION
          ───────────────────────────────────────────────────────────── */}
      <RelatedPlatformModules
        modules={[
          { title: 'About Guardian', desc: 'Built from healthcare. Designed for action.', path: '/company/about' },
          { title: 'Leadership', desc: 'People shaping the future of healthcare.', path: '/company/leadership' },
          { title: 'Careers', desc: 'Building technology-enabled healthcare teams.', path: '/company/careers' },
          { title: 'Contact', desc: 'Start a conversation with Guardian.', path: '/company/contact' }
        ]}
        title="Explore the Guardian Company Family."
        kicker="Company Navigation"
        tagPrefix="COMPANY"
        overviewLink=""
        actionText="Explore"
      />

      {/* ─────────────────────────────────────────────────────────────
          05 — FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-12 text-center text-white shadow-xl shadow-[#7b3fc7]/20 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Discuss Guardian Security & Compliance.
          </h2>
          <p className="text-sm sm:text-base text-purple-100/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Connect with our team to review security documentation, architecture whitepapers, or compliance alignment details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/company/contact?intent=demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Request Security Overview
            </Link>
            <Link
              to="/company/about"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-medium text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
            >
              About Guardian
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
