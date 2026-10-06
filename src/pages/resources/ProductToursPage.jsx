import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function ProductToursPage() {
  const capabilities = [
    {
      title: 'Patient Master Chart (PMC) Tour',
      description: 'See how the longitudinal record consolidates clinical history, labs, ADT events, and risk scores into a unified profile.',
      iconText: '01'
    },
    {
      title: 'Risk Adjustment & MRA Workspace Tour',
      description: 'Explore the HCC suspecting workflow, documentation queries, and RAF score tracking interface.',
      iconText: '02'
    },
    {
      title: 'Care Management Workspace Tour',
      description: 'Walk through care plan creation, standardized assessment tools (150+), and task management queues.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Select Feature', desc: 'Choose a platform area to explore (PMC, MRA, Care Plans, Analytics).' },
    { step: '02', title: 'Guided Overview', desc: 'Review key software interfaces and clinical data workflows.' },
    { step: '03', title: 'UI Deep-Dive', desc: 'Examine detailed feature functions and point-of-care tools.' },
    { step: '04', title: 'Personalized Demo', desc: 'Schedule a customized product demonstration for your team.' }
  ];

  const siblings = [
    { label: 'Platform Overview', path: '/platform' },
    { label: 'Case Studies', path: '/resources/case-studies' },
    { label: 'Webinars', path: '/resources/webinars' }
  ];

  return (
    <ChildPageLayout
      category="Resources"
      categoryPath="/resources"
      title="Product Tours"
      eyebrow="Software Walkthroughs"
      headline="Explore Guardian's Healthcare Intelligence Platform"
      supporting="Take a guided visual tour of Guardian's primary software capabilities and see how care teams interact with longitudinal patient records."
      capabilities={capabilities}
      capabilitiesTitle="Tour Highlights"
      capabilitiesSubtitle="Primary platform features highlighted in our product walkthroughs"
      journey={journey}
      journeyTitle="Product Exploration Flow"
      journeySubtitle="How to navigate and evaluate Guardian software features"
      siblings={siblings}
      closingHeadline="Ready for a Live Demonstration?"
      closingText="Schedule a customized walkthrough tailored to your organization's care management needs."
      ctaText="Request a Demo"
    />
  );
}
