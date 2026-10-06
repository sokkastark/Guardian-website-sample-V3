import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function RiskStratificationPage() {
  const capabilities = [
    {
      title: 'Population Risk Tiering',
      description: 'Categorize populations into distinct risk tiers (low, moderate, high, complex) to optimize resource allocation.',
      iconText: '01'
    },
    {
      title: 'Clinical & Financial Stratification',
      description: 'Combine clinical conditions, utilization trends, and cost metrics for multi-dimensional risk scoring.',
      iconText: '02'
    },
    {
      title: 'Proactive Cohort Segmentation',
      description: 'Dynamic cohort builder enabling care teams to filter patient lists by risk tier, chronic conditions, and care gaps.',
      iconText: '03'
    },
    {
      title: 'Actionable Care Routing',
      description: 'Automatically route high-risk patients to targeted care management programs and intervention protocols.',
      iconText: '04'
    }
  ];

  const journey = [
    { step: '01', title: 'Data Ingestion', desc: 'Aggregate multi-source clinical, claims, and encounter data.' },
    { step: '02', title: 'Risk Calculation', desc: 'Apply clinical and utilization risk models across the population.' },
    { step: '03', title: 'Cohort Tiering', desc: 'Segment patients into actionable risk tiers and intervention lists.' },
    { step: '04', title: 'Care Intervention', desc: 'Trigger care management outreach for high-risk cohorts.' }
  ];

  const siblings = [
    { label: 'Risk Adjustment / MRA', path: '/platform/risk-adjustment' },
    { label: 'Population Health', path: '/platform/population-health' },
    { label: 'Analytics', path: '/platform/analytics' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Risk Stratification"
      eyebrow="Population Risk Intelligence"
      headline="Identify and Prioritize At-Risk Populations"
      supporting="Guardian's Risk Stratification engine categorizes patient populations into actionable risk tiers, combining clinical, financial, and utilization data to guide proactive interventions."
      capabilities={capabilities}
      capabilitiesTitle="Risk Stratification Capabilities"
      capabilitiesSubtitle="How Guardian identifies risk across healthcare populations"
      journey={journey}
      journeyTitle="Risk Identification to Intervention Flow"
      journeySubtitle="How population data is transformed into prioritized care lists"
      siblings={siblings}
      closingHeadline="Focus Care Resources Where They Matter Most"
      closingText="See how Guardian helps healthcare organizations prioritize patient care through risk stratification."
      ctaText="Request a Demo"
    />
  );
}
