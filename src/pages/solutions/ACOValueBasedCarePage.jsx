import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function ACOValueBasedCarePage() {
  const capabilities = [
    {
      title: 'Population Health Visibility',
      description: 'Unified population dashboards tracking attribution, utilization trends, and overall performance across ACO cohorts.',
      iconText: '01'
    },
    {
      title: 'Quality Measure & Gap Closure',
      description: 'Continuous monitoring of quality performance metrics and automated point-of-care care gap notifications.',
      iconText: '02'
    },
    {
      title: 'Risk Alignment & Coding Accuracy',
      description: 'Integrated MRA workflows supporting documentation accuracy and appropriate risk capture across attributed panels.',
      iconText: '03'
    },
    {
      title: 'Interdisciplinary Care Coordination',
      description: 'Equip care teams with shared workspaces to manage high-cost, high-risk patients efficiently.',
      iconText: '04'
    }
  ];

  const journey = [
    { step: '01', title: 'Attribution & Ingestion', desc: 'Aggregate attribution rosters, clinical data, and claims.' },
    { step: '02', title: 'Performance Monitoring', desc: 'Track utilization, quality gaps, and risk across patient panels.' },
    { step: '03', title: 'Care Team Execution', desc: 'Deploy clinical care managers and navigators for targeted interventions.' },
    { step: '04', title: 'Value-Based Outcomes', desc: 'Achieve quality compliance and population health goals.' }
  ];

  const siblings = [
    { label: 'Health Plans', path: '/solutions/health-plans' },
    { label: 'CIN & Provider Organizations', path: '/solutions/cin-provider-organizations' },
    { label: 'Care Teams', path: '/solutions/care-management-teams' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="ACO & Value-Based Care"
      eyebrow="Value-Based Care Solution"
      headline="Empower ACOs to Excel in Value-Based Care Contracts"
      supporting="Guardian combines technology-enabled population health, risk adjustment, and care management tools to help Accountable Care Organizations deliver coordinated, high-quality care."
      capabilities={capabilities}
      capabilitiesTitle="ACO Solutions Suite"
      capabilitiesSubtitle="Comprehensive tools supporting Accountable Care Organizations"
      journey={journey}
      journeyTitle="Value-Based Care Journey"
      journeySubtitle="Connecting population intelligence with clinical care management execution"
      siblings={siblings}
      closingHeadline="Drive Success in Value-Based Care"
      closingText="Discover how Guardian helps ACOs and healthcare networks manage risk, quality, and population health."
      ctaText="Request a Demo"
    />
  );
}
