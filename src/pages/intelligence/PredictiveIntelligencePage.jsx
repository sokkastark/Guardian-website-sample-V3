import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function PredictiveIntelligencePage() {
  const capabilities = [
    {
      title: '30-Day Readmission Risk Scoring',
      description: 'Evaluate patient clinical profiles to score readmission likelihood following hospital discharge.',
      iconText: '01'
    },
    {
      title: 'High-Utilizer Risk Identification',
      description: 'Analyze utilization patterns to identify patients at risk of frequent ED visits or inpatient stays.',
      iconText: '02'
    },
    {
      title: 'Chronic Condition Progression Tracking',
      description: 'Monitor clinical trends and risk score trajectories across high-risk chronic disease cohorts.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Data Ingestion', desc: 'Consolidate inpatient, claims, and clinical history.' },
    { step: '02', title: 'Risk Scoring', desc: 'Calculate readmission and utilization risk indicators.' },
    { step: '03', title: 'Prioritization', desc: 'Rank patients by intervention priority for clinical teams.' },
    { step: '04', title: 'Proactive Outreach', desc: 'Deploy care managers for targeted post-acute care.' }
  ];

  const siblings = [
    { label: 'Risk Stratification', path: '/platform/risk-stratification' },
    { label: 'Transitions of Care / ADT', path: '/platform/transitions-of-care-adt' },
    { label: 'AI & Machine Learning', path: '/intelligence/ai' }
  ];

  return (
    <ChildPageLayout
      category="Intelligence"
      categoryPath="/intelligence"
      title="Predictive Intelligence"
      eyebrow="Predictive Analytics"
      headline="Proactive Risk Scoring & Clinical Forecasting"
      supporting="Guardian's Predictive Intelligence evaluates clinical and utilization data to help healthcare organizations intervene before adverse health events occur."
      capabilities={capabilities}
      capabilitiesTitle="Predictive Capabilities"
      capabilitiesSubtitle="Verified risk forecasting and utilization scoring tools"
      journey={journey}
      journeyTitle="Risk Forecasting Workflow"
      journeySubtitle="How historical health data is evaluated to prioritize clinical care interventions"
      siblings={siblings}
      closingHeadline="Proactively Manage Health Risks"
      closingText="Learn how predictive risk scoring supports early clinical intervention."
      ctaText="Request a Demo"
    />
  );
}
