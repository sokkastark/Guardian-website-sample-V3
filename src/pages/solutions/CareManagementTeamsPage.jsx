import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CareManagementTeamsPage() {
  const capabilities = [
    {
      title: 'Individualized Care Plan Builder',
      description: 'Create customized, patient-centered care plans with goal tracking and evidence-based interventions.',
      iconText: '01'
    },
    {
      title: 'Standardized Assessment Library (150+)',
      description: 'Access a comprehensive library of clinical and behavioral assessment tools for patient evaluations.',
      iconText: '02'
    },
    {
      title: 'Automated Task Routing & Follow-Up',
      description: 'Intelligent task distribution to care managers, clinical navigators, and support staff.',
      iconText: '03'
    },
    {
      title: 'Interdisciplinary Care Team Workspaces',
      description: 'Shared care coordination tools linking care managers, navigators, and account executives for seamless care delivery.',
      iconText: '04'
    }
  ];

  const journey = [
    { step: '01', title: 'Patient Identification', desc: 'Receive prioritized care lists based on risk and clinical needs.' },
    { step: '02', title: 'Clinical Assessment', desc: 'Conduct standardized assessments to establish baseline needs.' },
    { step: '03', title: 'Care Plan Creation', desc: 'Build individualized care plans with interdisciplinary action steps.' },
    { step: '04', title: 'Ongoing Management', desc: 'Track progress, manage follow-up tasks, and coordinate care.' }
  ];

  const siblings = [
    { label: 'Care Management Platform', path: '/platform/care-management' },
    { label: 'Patient Engagement', path: '/platform/patient-engagement' },
    { label: 'ACO & Value-Based Care', path: '/solutions/aco-value-based-care' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Care Management / Care Teams"
      eyebrow="Clinical Care Solutions"
      headline="Technology-Enabled Care Teams & Clinical Workflows"
      supporting="Guardian equips clinical care teams—including care managers, navigators, and account executives—with structured care plans, standardized assessment tools, and automated task workflows."
      capabilities={capabilities}
      capabilitiesTitle="Care Management & Team Capabilities"
      capabilitiesSubtitle="Integrated tools powering clinical care managers and support staff"
      journey={journey}
      journeyTitle="Care Coordination Flow"
      journeySubtitle="How care teams assess, plan, and deliver coordinated patient interventions"
      siblings={siblings}
      closingHeadline="Empower Your Clinical Care Teams"
      closingText="Learn how Guardian supports care management teams with technology-enabled care workflows."
      ctaText="Request a Demo"
    />
  );
}
