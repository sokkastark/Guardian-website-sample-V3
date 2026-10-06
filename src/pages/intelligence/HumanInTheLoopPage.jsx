import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function HumanInTheLoopPage() {
  const capabilities = [
    {
      title: 'Clinical Validation Workflows',
      description: 'Ensure automated risk suspecting, care gap flags, and NLP findings are reviewed by qualified clinicians.',
      iconText: '01'
    },
    {
      title: 'Technology-Enabled Care Augmentation',
      description: 'Support clinical care managers, risk coders, and navigators with software tools that enhance their efficiency.',
      iconText: '02'
    },
    {
      title: 'Provider Query & Verification',
      description: 'Streamline provider queries and clinical documentation verification prior to final coding and submission.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Automated Insight', desc: 'Software identifies potential risk, care gap, or clinical finding.' },
    { step: '02', title: 'Clinical Review', desc: 'Expert clinician or coder reviews context and chart records.' },
    { step: '03', title: 'Verification', desc: 'Confirm or refine clinical insight based on professional judgment.' },
    { step: '04', title: 'Validated Action', desc: 'Execute care plan update or chart documentation submission.' }
  ];

  const siblings = [
    { label: 'AI & Machine Learning', path: '/intelligence/ai' },
    { label: 'Intelligent Workflows', path: '/intelligence/intelligent-workflows' },
    { label: 'Care Management Teams', path: '/solutions/care-management-teams' }
  ];

  return (
    <ChildPageLayout
      category="Intelligence"
      categoryPath="/intelligence"
      title="Human-in-the-Loop"
      eyebrow="Clinical Oversight"
      headline="Technology-Enabled Software Supported by Expert Clinical Review"
      supporting="Guardian pairs advanced software capabilities with clinician oversight, ensuring that automated risk models and data insights are validated before clinical action."
      capabilities={capabilities}
      capabilitiesTitle="Human-in-the-Loop Principles"
      capabilitiesSubtitle="How Guardian combines software intelligence with professional clinical judgment"
      journey={journey}
      journeyTitle="Validation & Oversight Process"
      journeySubtitle="From automated data detection to expert clinical verification"
      siblings={siblings}
      closingHeadline="Technology + Healthcare Expertise"
      closingText="Discover how Guardian combines intelligent software with clinical review to drive healthcare outcomes."
      ctaText="Request a Demo"
    />
  );
}
