import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function WebinarsPage() {
  const capabilities = [
    {
      title: 'Value-Based Care Strategy Sessions',
      description: 'Educational presentations exploring population health management, risk adjustment, and ACO success strategies.',
      iconText: '01'
    },
    {
      title: 'Clinical Workflow Discussions',
      description: 'Interactive sessions on care management best practices, ADT event tracking, and transitions of care.',
      iconText: '02'
    },
    {
      title: 'Technology & Interoperability Deep-Dives',
      description: 'Technical overviews covering health data integration, longitudinal records, and quality gap closure.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Browse Topics', desc: 'Select from value-based care, risk adjustment, and clinical care topics.' },
    { step: '02', title: 'Register / Access', desc: 'Access educational presentations and session recordings.' },
    { step: '03', title: 'Gain Insights', desc: 'Learn actionable strategies for healthcare population management.' },
    { step: '04', title: 'Connect with Experts', desc: 'Schedule follow-up discussions with Guardian specialists.' }
  ];

  const siblings = [
    { label: 'Insights & Articles', path: '/resources/insights' },
    { label: 'Case Studies', path: '/resources/case-studies' },
    { label: 'Educational Guides', path: '/resources/guides' }
  ];

  return (
    <ChildPageLayout
      category="Resources"
      categoryPath="/resources"
      title="Webinars"
      eyebrow="Educational Library"
      headline="Healthcare Intelligence Webinars & Presentations"
      supporting="Access Guardian's educational repository covering healthcare intelligence, population health strategies, and value-based care management."
      capabilities={capabilities}
      capabilitiesTitle="Webinar Topics"
      capabilitiesSubtitle="Core educational themes presented by Guardian specialists"
      journey={journey}
      journeyTitle="Educational Session Experience"
      journeySubtitle="How healthcare leaders gain actionable intelligence from Guardian sessions"
      siblings={siblings}
      closingHeadline="Stay Informed on Healthcare Trends"
      closingText="Explore our latest educational sessions and industry insights."
      ctaText="Contact Us"
    />
  );
}
