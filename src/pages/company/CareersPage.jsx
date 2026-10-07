import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  HeartPulse, 
  BarChart3, 
  ArrowRight, 
  ChevronRight, 
  Sparkles,
  CheckCircle2,
  Mail
} from 'lucide-react';

const disciplines = [
  {
    icon: Code2,
    title: 'Technology & Engineering',
    desc: 'Engineering health data pipelines, real-time ADT event handlers, clinical knowledge graphs, and intuitive patient intelligence interfaces.',
    highlights: ['Distributed Healthtech Systems', 'FHIR R4 / HL7 Data Engineering', 'Secure Cloud Architecture']
  },
  {
    icon: HeartPulse,
    title: 'Clinical Care Management',
    desc: 'Connecting registered nurses, care navigators, and clinical coordinators to support value-based care programs, TCM workflows, and patient engagement.',
    highlights: ['Multi-Disciplinary Care Coordination', 'Patient Outreach & Engagement', 'Evidence-Based Care Plans']
  },
  {
    icon: BarChart3,
    title: 'Risk Adjustment & Operations',
    desc: 'Supporting risk coding accuracy, quality performance monitoring, managed care analytics, and healthcare partner client success.',
    highlights: ['HCC Risk Adjustment & Coding', 'Quality & Star Ratings Surveillance', 'Value-Based Account Operations']
  }
];

const candidateSteps = [
  {
    step: '01',
    title: 'Explore Disciplines',
    desc: 'Review Guardian’s primary organizational areas across technology, clinical care, and value-based operations.'
  },
  {
    step: '02',
    title: 'Submit Inquiry',
    desc: 'Reach out to our team with your background, experience, and area of interest in technology-enabled healthcare.'
  },
  {
    step: '03',
    title: 'Team Interview',
    desc: 'Discuss your experience, technical skills, and alignment with Guardian’s healthcare action mission.'
  },
  {
    step: '04',
    title: 'Join Guardian',
    desc: 'Collaborate with cross-functional clinical and engineering teams building the future of value-based care.'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1c1636] selection:bg-[#7b3fc7] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          01 — HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-[#120b24] via-[#1a1233] to-[#241744] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#7b3fc7]/20 via-[#ff7a57]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-purple-200/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link to="/company/about" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-semibold">Careers</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
              <Users className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>CAREERS AT GUARDIAN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Building the future of technology-enabled healthcare.
            </h1>

            <p className="text-lg sm:text-xl text-purple-100/90 leading-relaxed font-normal max-w-2xl mb-8">
              Guardian brings together clinicians, software engineers, risk specialists, and healthcare operators committed to turning complex health data into actionable patient care.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/company/contact?intent=demo"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
              <a
                href="#disciplines"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
              >
                <span>Explore Disciplines</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02 — DISCIPLINES: Technology, Clinical & Operations
          ───────────────────────────────────────────────────────────── */}
      <section id="disciplines" className="py-20 sm:py-28 bg-[#faf8fc] border-b border-[#edeaf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Team Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              Where technology and clinical experience collide.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {disciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-[#e1e1e5] shadow-xs hover:border-[#7b3fc7]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1c1636] mb-3">{d.title}</h3>
                    <p className="text-sm text-[#554e6d] leading-relaxed mb-6">{d.desc}</p>
                  </div>

                  <div className="pt-6 border-t border-[#f0ecf6] space-y-2">
                    {d.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-[#1c1636]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7b3fc7] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03 — APPLICATION JOURNEY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#f2ecf9]/50 border-b border-[#e1d9ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Engagement Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636]">
              How we connect with prospective talent.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {candidateSteps.map((s) => (
              <div key={s.step} className="p-7 rounded-2xl bg-white border border-[#e1e1e5]">
                <span className="text-xs font-mono font-bold text-[#7b3fc7] block mb-2">{s.step}</span>
                <h3 className="text-base font-bold text-[#1c1636] mb-2">{s.title}</h3>
                <p className="text-xs text-[#554e6d] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04 — SIBLING NAVIGATION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#f8f7fb] text-[#1c1636] border-b border-[#edeaf2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] mb-3">
            Company Navigation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1636] mb-8">
            Explore the Guardian Company Family.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'About Guardian', desc: 'Built from healthcare. Designed for action.', path: '/company/about' },
              { title: 'Leadership', desc: 'People shaping the future of healthcare.', path: '/company/leadership' },
              { title: 'Security & Trust', desc: 'HITRUST & SOC 2 aligned security architecture.', path: '/company/security-trust' },
              { title: 'Contact', desc: 'Start a conversation with Guardian.', path: '/company/contact' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group py-4 border-b-2 border-[#e1e1e5] hover:border-[#7b3fc7] transition-all duration-200 block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-[#1c1636] group-hover:text-[#7b3fc7] transition-colors">
                    {link.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#adabb7] group-hover:text-[#7b3fc7] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-[#554e6d] mt-1 font-normal">
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          05 — FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-12 text-center text-white shadow-xl shadow-[#7b3fc7]/20 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Interested in joining Guardian?
          </h2>
          <p className="text-sm sm:text-base text-purple-100/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Reach out to our talent team to discuss career opportunities in healthcare technology, clinical care, and operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/company/contact?intent=demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get in Touch
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
