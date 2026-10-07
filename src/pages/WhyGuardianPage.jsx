import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Layers, 
  BrainCircuit, 
  ArrowRight, 
  Building,
  Lock
} from 'lucide-react';

export default function WhyGuardianPage() {
  const pillars = [
    {
      title: 'Healthcare expertise',
      desc: 'Understand the work behind care, risk, quality, performance, and patient engagement.',
      icon: Award
    },
    {
      title: 'Connected technology',
      desc: 'Bring healthcare information together and turn it into usable intelligence.',
      icon: BrainCircuit
    },
    {
      title: 'Human support',
      desc: 'Help teams move from identified opportunities to practical action.',
      icon: HeartHandshake
    },
    {
      title: 'Healthcare focus',
      desc: 'Build capabilities around the realities of healthcare organizations and the people they serve.',
      icon: ShieldCheck
    }
  ];

  const milestones = [
    { year: '2013', desc: 'Guardian began with Medicare ACO work in Florida.' },
    { year: '2016', desc: 'Guardian expanded into Statewide Event Notification Services (ENS).' },
    { year: '2017', desc: 'Guardian expanded its connections with national healthcare data exchange networks.' },
    { year: '2018', desc: 'Guardian’s connected healthcare data environment reached more than one million records.' },
    { year: '2019', desc: 'Guardian reported its first $100 million in shared savings.' },
    { year: '2021', desc: 'Guardian became a CMS MIPS Registry.' }
  ];

  const valueChain = [
    { step: 'CONNECT', desc: 'Bring healthcare information together.' },
    { step: 'UNDERSTAND', desc: 'Create context around the patient and population.' },
    { step: 'IDENTIFY', desc: 'Find risks, gaps, needs, and opportunities.' },
    { step: 'ACT', desc: 'Support the people and workflows responsible for intervention.' },
    { step: 'OUTCOME', desc: 'Understand what changes and where improvement is possible.' }
  ];

  const whyChooseReasons = [
    { title: 'Healthcare-first perspective', desc: 'Capabilities are shaped around healthcare workflows and organizational needs.' },
    { title: 'Connected foundation', desc: 'Technology connects information across the healthcare ecosystem.' },
    { title: 'Action-oriented approach', desc: 'The goal is not simply to surface information, but to help teams use it.' },
    { title: 'Technology + services', desc: 'Platform capabilities can be complemented by healthcare expertise and operational support.' },
    { title: 'Long-term experience', desc: 'Guardian brings years of experience working across healthcare data, interoperability, quality, risk, and value-based care.' }
  ];

  const whatMakesDifferent = [
    { label: 'Data + context', desc: 'Healthcare information is more useful when it can be understood in context.' },
    { label: 'Technology + people', desc: 'Digital capabilities are strengthened by healthcare expertise and operational support.' },
    { label: 'Insight + action', desc: 'The value of intelligence is measured by what teams can do with it.' },
    { label: 'Care + performance', desc: 'Healthcare decisions and organizational performance are connected.' }
  ];

  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-[#120b24] via-[#1a1233] to-[#241744] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-gradient-to-tr from-[#7b3fc7]/25 via-[#9565d2]/15 to-transparent blur-[140px] rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-[550px] h-[380px] bg-[#ff7a57]/15 blur-[140px] rounded-full" />
          <div className="absolute inset-0 ambient-grid opacity-15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>WHY GUARDIAN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Built from healthcare. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-[#ff7a57]">Designed for action.</span>
            </h1>

            <p className="text-base sm:text-xl text-purple-100/90 leading-relaxed max-w-3xl mb-10 font-normal">
              Guardian brings healthcare expertise, connected technology, and human support together to help organizations turn healthcare information into meaningful action.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_20px_rgba(123,63,199,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Talk to Guardian</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Explore Our Platform</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE GUARDIAN DIFFERENCE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-3">
              Core Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-6">
              Healthcare technology is only valuable when it works in the real world.
            </h2>
            <p className="text-base sm:text-lg text-[#727272] leading-relaxed">
              Guardian was built around the work of healthcare organizations—not around technology for its own sake. Our approach brings data, intelligence, technology, healthcare expertise, and operational support together around the decisions and actions that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-7 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs hover:border-[#7b3fc7]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1636] mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: EXPERIENCE THAT SHAPES THE PLATFORM
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-4">
            Guardian’s technology comes from working with healthcare—not simply building for it.
          </h2>
          <p className="text-base text-[#727272] leading-relaxed mb-6 max-w-3xl mx-auto">
            Guardian’s history includes work across healthcare data exchange, interoperability, risk, quality, care coordination, and value-based care. That experience informs how the platform and services are designed.
          </p>
          <div className="inline-block p-4 rounded-xl bg-[#f2ecf9] border border-[#7b3fc7]/20 text-sm font-semibold text-[#7b3fc7]">
            Built around healthcare workflows. Designed to connect information with action.
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: OUR STORY (TIMELINE)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              A healthcare journey built around connected information.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian’s history reflects a long-term focus on connecting healthcare information and helping organizations use it to support better care and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="p-7 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
                <div className="text-2xl font-bold text-[#7b3fc7] mb-2 font-mono">{m.year}</div>
                <p className="text-sm text-[#35304c] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: FROM HEALTHCARE DATA TO HEALTHCARE ACTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              End-to-End Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Experience across the full path from information to intervention.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian’s experience connects the technical challenge of healthcare data with the operational challenge of acting on it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {valueChain.map((item, idx) => (
              <div key={item.step} className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <span className="text-xs font-mono text-[#adabb7] block mb-2">0{idx + 1}</span>
                <h3 className="text-sm font-bold text-[#7b3fc7] mb-2">{item.step}</h3>
                <p className="text-xs text-[#35304c] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: TECHNOLOGY + PEOPLE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1636] mb-4">
              The combination matters.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Guardian does not separate technology from the people who use it. The platform creates the information foundation; healthcare expertise and services help turn that foundation into action.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Technology</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Connect and organize healthcare information.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Intelligence</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Surface the information and opportunities that matter.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Expertise</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Bring healthcare knowledge into decisions and workflows.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <h3 className="text-base font-bold text-[#1c1636] mb-2">Services</h3>
              <p className="text-xs sm:text-sm text-[#727272]">Support the people and activities required to move work forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: BUILT FOR HEALTHCARE ORGANIZATIONS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              One foundation. Different healthcare responsibilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-lg font-bold text-[#7b3fc7] mb-2">Providers</h3>
              <p className="text-sm text-[#727272] leading-relaxed">
                Support care teams with connected information, intelligence, and services that help them understand patients and act on care opportunities.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-lg font-bold text-[#ff7a57] mb-2">Payers</h3>
              <p className="text-sm text-[#727272] leading-relaxed">
                Support population, network, quality, utilization, and performance decisions with connected healthcare information and intelligence.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
              <h3 className="text-lg font-bold text-[#1c1636] mb-2">Healthcare teams</h3>
              <p className="text-sm text-[#727272] leading-relaxed">
                Give the people doing the work the context and support they need to move from insight to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: TRUST & HEALTHCARE CREDENTIALS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#eae4f4]/40 border-b border-[#d6cde2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight mb-4">
              Built for an environment where information matters.
            </h2>
            <p className="text-base text-[#727272] leading-relaxed">
              Healthcare organizations need technology and services they can trust. Guardian’s existing credentials demonstrate experience across healthcare interoperability, quality reporting, and information security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <ShieldCheck className="w-8 h-8 text-[#7b3fc7] mb-4" />
              <h3 className="text-base font-bold text-[#1c1636] mb-1">CMS MIPS Registry</h3>
              <p className="text-xs text-[#727272]">Certified Registry status for quality and performance reporting.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <Layers className="w-8 h-8 text-[#7b3fc7] mb-4" />
              <h3 className="text-base font-bold text-[#1c1636] mb-1">eHealth Exchange</h3>
              <p className="text-xs text-[#727272]">Implementer of nationwide data exchange protocols.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <Building className="w-8 h-8 text-[#7b3fc7] mb-4" />
              <h3 className="text-base font-bold text-[#1c1636] mb-1">CareQuality</h3>
              <p className="text-xs text-[#727272]">Exchange Implementer connecting healthcare networks across the nation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#e1e1e5]">
              <Lock className="w-8 h-8 text-[#ff7a57] mb-4" />
              <h3 className="text-base font-bold text-[#1c1636] mb-1">HITRUST Aligned</h3>
              <p className="text-xs text-[#727272]">Rigorous cybersecurity and healthcare risk certification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: WHY ORGANIZATIONS CHOOSE GUARDIAN
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7b3fc7] block mb-2">
              Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1636] tracking-tight">
              A partner that understands the work behind the data.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-[#f8f6fc] border border-[#e1e1e5]">
                <h3 className="text-base font-bold text-[#1c1636] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#727272] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: WHAT MAKES GUARDIAN DIFFERENT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1636] mb-3">
              We connect the pieces others often separate.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatMakesDifferent.map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-white border border-[#e1e1e5] shadow-xs">
                <span className="text-xs font-mono font-bold text-[#7b3fc7] block mb-2">{item.label}</span>
                <p className="text-xs sm:text-sm text-[#35304c]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f6fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1c1636] to-[#2d1b54] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Build a clearer path from healthcare data to action.
              </h2>
              <p className="text-sm sm:text-base text-purple-100/90 mb-8">
                Connect the data. Understand the patient. Identify the opportunity. Put the right people and technology behind the action.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1c1636] font-medium text-sm hover:bg-[#f2ecf9] transition-all"
                >
                  <span>Talk to Guardian</span>
                  <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
                </Link>
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
