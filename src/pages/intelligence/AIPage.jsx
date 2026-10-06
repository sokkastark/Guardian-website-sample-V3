import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function AIPage() {
  const capabilities = [
    {
      title: 'Machine Learning Risk Models',
      description: 'Apply analytical algorithms to historical clinical and claims data to identify potential health risks.',
      iconText: '01'
    },
    {
      title: 'NLP Clinical Document Extraction',
      description: 'Extract clinical concepts, diagnoses, and insights from unstructured chart notes and documents.',
      iconText: '02'
    },
    {
      title: 'Workflow Recommendation Support',
      description: 'Assist care managers and risk coders by highlighting relevant clinical findings and potential gaps.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Data Processing', desc: 'Process structured records and unstructured chart documents.' },
    { step: '02', title: 'Feature Extraction', desc: 'Identify clinical terms, concepts, and utilization patterns.' },
    { step: '03', title: 'Pattern Recognition', desc: 'Evaluate clinical risk models and suspecting indicators.' },
    { step: '04', title: 'Care Assistance', desc: 'Surface findings to care teams for clinical review.' }
  ];

  const siblings = [
    { label: 'Clinical Knowledge Graph', path: '/intelligence/clinical-knowledge-graph' },
    { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence' },
    { label: 'Human-in-the-Loop AI', path: '/intelligence/human-in-the-loop' }
  ];

  return (
    <ChildPageLayout
      category="Intelligence"
      categoryPath="/intelligence"
      title="AI & Machine Learning"
      eyebrow="Healthcare AI Architecture"
      headline="Machine Learning & Clinical NLP Extraction"
      supporting="Guardian leverages machine learning models and natural language processing to analyze complex healthcare records and support clinical decision-making."
      capabilities={capabilities}
      capabilitiesTitle="AI Capabilities"
      capabilitiesSubtitle="Verified artificial intelligence and NLP extraction tools"
      journey={journey}
      journeyTitle="AI Analysis Workflow"
      journeySubtitle="How unstructured and structured healthcare data is evaluated for clinical insights"
      siblings={siblings}
      closingHeadline="Explore Guardian's AI Capabilities"
      closingText="See how machine learning and NLP assist care teams in managing complex patient populations."
      ctaText="Request a Demo"
    />
  );
}
