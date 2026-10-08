import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CareManagementPage() {
  const journey = [
    { step: 'Identify', description: 'Find patients who may need attention.' },
    { step: 'Understand', description: 'Build a clearer picture of the patient.' },
    { step: 'Plan', description: 'Develop a focused approach to care.' },
    { step: 'Coordinate', description: 'Connect the people involved in care.' },
    { step: 'Engage', description: 'Support patient outreach and follow-up.' },
    { step: 'Measure', description: 'Track what happens next.' }
  ];

  const capabilities = [
    'Centralized Care Management Workspace & Care Plan Builder',
    '150+ Clinical Assessment Scales & Forms (Depression, Cognitive, Fall Risk, ADL, Custom Scoring)',
    'Real-time ADT event notifications & Hospital Discharge summary retrieval',
    'Transitions of Care (TOC) patient outreach workflows (SMS & care team follow-up) within 24 hours',
    'CCM, TCM, RPM & PCM multi-program patient tracking & task management',
    'Closed-loop Referral Management within Clinically Integrated Network (CIN)',
    'Medication management, polypharmacy adherence, and SDOH barrier mitigation'
  ];

  const siblings = [
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Patient Engagement', path: '/solutions/patient-engagement' },
    { label: 'Analytics & Intelligence', path: '/solutions/analytics-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Care Management"
      eyebrow="CARE MANAGEMENT & ADT"
      headline="Turn patient insight into coordinated care."
      supporting="Guardian brings patient information, clinical context, care opportunities, and workflows together to help care teams understand what patients need and support the next step."
      ctaText="Explore Care Management"
      journey={journey}
      journeyTitle="Care Management: Coordinated Care Journey"
      journeySubtitle="How Guardian connects patient insights with care team action"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps care teams achieve in care coordination"
      heroVisualBadge="TCM 48-Hour Protocol"
      heroImage="/images/product-ui/ui-care-management.png"
      mockupUrl="Care-Management"
      contextType="care-management"
      siblings={siblings}
      closingHeadline="Make every care decision more informed."
      closingText="Guardian brings patient information, clinical context, care opportunities, and workflows together to support coordinated care."
    />
  );
}
