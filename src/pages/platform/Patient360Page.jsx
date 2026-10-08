import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  User,
  Activity,
  FileText,
  Clock,
  Layers,
  Search,
  Shield,
  Stethoscope,
  HeartPulse,
  ArrowUpRight,
  Database,
  Pill,
  AlertCircle,
  FileSpreadsheet,
  Users,
  Building2
} from 'lucide-react';

export default function Patient360Page() {
  // 13 Core Clinical Domains from Product Profile 6.0 Page 5
  const clinicalDomains = [
    { title: 'Demographics & Coverage', desc: 'Core patient identity, contact information, insurance plan details, and contract attribution.', icon: User },
    { title: 'Vital Signs', desc: 'Blood pressure, heart rate, BMI, temperature, oxygen saturation, and longitudinal vital trends.', icon: Activity },
    { title: 'Problem List', desc: 'Active chronic conditions, ICD-10 diagnoses, onset dates, and clinical problem status.', icon: AlertCircle },
    { title: 'Medications', desc: 'Active medication lists, dosages, fill histories, adherence alerts, and reconciliation.', icon: Pill },
    { title: 'Allergies', desc: 'Documented drug, food, and environmental allergies with severity and reaction histories.', icon: Shield },
    { title: 'Lab Results', desc: 'Diagnostic panel outputs, biomarker lab values (HbA1c, lipids), and test result trends.', icon: Stethoscope },
    { title: 'Encounters', desc: 'Outpatient visits, inpatient admissions, specialist consults, and historical encounter logs.', icon: Building2 },
    { title: 'ADT Notifications', desc: 'Real-time hospital admission, discharge, and emergency department transfer alerts.', icon: HeartPulse },
    { title: 'HIE Search', desc: 'Cross-organization clinical document lookup across national and regional health exchanges.', icon: Search },
    { title: 'Direct Secure Messages (DSM)', desc: 'Encrypted clinical communication exchange between PCPs, specialists, and care teams.', icon: FileText },
    { title: 'Documents Upload', desc: 'Clinical PDFs, discharge summaries, progress notes, and imported diagnostic reports.', icon: FileSpreadsheet },
    { title: 'Scales, Logs & Forms', desc: 'Standardized assessment scales (150+), depression screenings, and clinical forms.', icon: Layers },
    { title: 'Providers & Care Team', desc: 'Attributed primary care physicians, specialists, care managers, and network contacts.', icon: Users }
  ];

  const siblings = [
    { label: 'Patient Intelligence Overview', path: '/platform/patient-intelligence', desc: 'Overview of longitudinal patient record aggregation.' },
    { label: 'Risk Stratification', path: '/platform/risk-stratification', desc: 'Categorize populations into actionable risk tiers and intervention lists.' },
    { label: 'Care Management', path: '/platform/care-management', desc: 'Centralized workspace to enroll, assess, and coordinate chronic care.' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#35304c] overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#1c1636] via-[#251b47] to-[#1c1636] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b3fc7]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7a57]/15 rounded-full blur-3xl pointer-events-none" />
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
            <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <Link to="/platform/patient-intelligence" className="hover:text-white transition-colors">Patient Intelligence</Link>
            <ChevronRight className="w-3.5 h-3.5 text-purple-300/40" />
            <span className="text-white font-medium">Patient 360 / PMC</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span>Patient Master Chart (PMC)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Patient 360: 13 Core Clinical Domains
              </h1>

              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal max-w-2xl">
                The Patient Master Chart aggregates 13 core clinical and administrative domains into a single unified record—providing clinicians and care managers with full longitudinal visibility.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/company/contact?intent=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Request a Patient 360 Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b3fc7]" />
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
                  <span className="text-[11px] text-purple-300 font-mono">live.itsguardian.com/patient-360/domains</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#7b3fc7]/40 text-purple-200 border border-[#7b3fc7]/60 font-mono">
                    PMC Interface
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white border border-[#e9e4f0]">
                  <img 
                    src="/images/product-ui/ui-patient-360.png" 
                    alt="Guardian Patient 360 Chart" 
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
                <p className="text-xs text-purple-200/70 text-center mt-2.5 leading-relaxed italic">
                  *Illustrative sample demonstration data. Patient records, metrics, and outcomes are for demonstration purposes only.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13 CORE CLINICAL DOMAINS GRID */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7b3fc7] bg-[#f2ecf9] px-3.5 py-1.5 rounded-full border border-[#d6cde2]">
            Comprehensive Data Inventory
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mt-4 mb-3 tracking-tight">
            13 Core Domains Sourced Across the Platform
          </h2>
          <p className="text-sm sm:text-base text-[#727272]">
            Approved domain structure directly supported by Product Profile 6.0 (Page 5: Patient Profile).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicalDomains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title + idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-6 rounded-2xl bg-white border border-[#e1e1e5] hover:border-[#7b3fc7]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1c1636] mb-2 leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-[#58536e] leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl border border-white/10"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              See the Patient 360 Master Chart Live
            </h2>
            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore how Guardian unifies patient data into a single, intuitive clinical record.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all"
              >
                <span>Schedule a Demonstration</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
