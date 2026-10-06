import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function TransitionsOfCarePage() {
  const capabilities = [
    {
      title: 'Real-Time ADT Event Notifications',
      description: 'Receive real-time alerts when patients are admitted, discharged, or transferred across hospital settings.',
      iconText: '01'
    },
    {
      title: 'Post-Acute Discharge Protocols',
      description: 'Standardized discharge follow-up workflows ensuring timely outreach after inpatient or ED encounters.',
      iconText: '02'
    },
    {
      title: 'Care Team Notification & Coordination',
      description: 'Automate notifications to assigned primary care providers, care managers, and clinical team members.',
      iconText: '03'
    },
    {
      title: 'ED High-Utilizer Alerting',
      description: 'Identify frequent emergency department visits to trigger specialized care management interventions.',
      iconText: '04'
    }
  ];

  const journey = [
    { step: '01', title: 'Event Capture', desc: 'Ingest real-time ADT event feeds from hospital systems.' },
    { step: '02', title: 'Alert Dispatch', desc: 'Instantly notify primary care providers and care management teams.' },
    { step: '03', title: 'Care Protocol', desc: 'Initiate post-discharge follow-up care plans and medication reconciliation.' },
    { step: '04', title: 'Outcome Tracking', desc: 'Monitor patient recovery and post-acute follow-up completion.' }
  ];

  const siblings = [
    { label: 'Care Management', path: '/platform/care-management' },
    { label: 'HIE & ADT Integration', path: '/data-integration/hie-adt' },
    { label: 'Patient Engagement', path: '/platform/patient-engagement' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Transitions of Care / ADT"
      eyebrow="Event Monitoring & Care Transitions"
      headline="Real-Time Visibility During Critical Patient Transitions"
      supporting="Guardian delivers real-time ADT event alerts and automated transition of care workflows to ensure timely clinical follow-up after hospital admissions and discharges."
      capabilities={capabilities}
      capabilitiesTitle="Transitions of Care Capabilities"
      capabilitiesSubtitle="Essential tools for managing post-acute patient care transitions"
      journey={journey}
      journeyTitle="Transition of Care Workflow"
      journeySubtitle="From hospital admission notification to post-discharge care follow-up"
      siblings={siblings}
      closingHeadline="Close the Gap in Post-Discharge Care"
      closingText="Learn how real-time ADT alerts enable care teams to act immediately during patient transitions."
      ctaText="Request a Demo"
    />
  );
}
