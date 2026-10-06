import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function ClinicalKnowledgeGraphPage() {
  const capabilities = [
    {
      title: 'Connected Healthcare Data Architecture',
      description: 'Link diagnoses, medications, labs, encounters, and social factors into a unified relational graph.',
      iconText: '01'
    },
    {
      title: 'Semantic Code Normalization',
      description: 'Map disparate EHR and claims terminologies to standardized standards (ICD-10, CPT, LOINC, RxNorm).',
      iconText: '02'
    },
    {
      title: 'Longitudinal Relationship Context',
      description: 'Provide clinical context across encounters to surface underlying disease progressions and gaps in care.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Data Ingestion', desc: 'Ingest EHR, claims, ADT, and lab data streams.' },
    { step: '02', title: 'Semantic Normalization', desc: 'Map local codes to standard clinical terminologies.' },
    { step: '03', title: 'Graph Mapping', desc: 'Establish semantic relationships between clinical entities.' },
    { step: '04', title: 'Clinical Context', desc: 'Expose connected patient insights to analytics and workflows.' }
  ];

  const siblings = [
    { label: 'AI & Machine Learning', path: '/intelligence/ai' },
    { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence' },
    { label: 'Data Foundation', path: '/data-integration/data-foundation' }
  ];

  return (
    <ChildPageLayout
      category="Intelligence"
      categoryPath="/intelligence"
      title="Clinical Knowledge Graph"
      eyebrow="Data Mesh Architecture"
      headline="Semantic Data Mesh Connecting Clinical Entities"
      supporting="The Clinical Knowledge Graph connects siloed healthcare data streams into a structured relationship mesh that powers Guardian's intelligence and care workflows."
      capabilities={capabilities}
      capabilitiesTitle="Knowledge Graph Capabilities"
      capabilitiesSubtitle="How Guardian maps semantic healthcare data relationships"
      journey={journey}
      journeyTitle="Semantic Data Pipeline"
      journeySubtitle="From raw data ingestion to connected clinical relationship graphs"
      siblings={siblings}
      closingHeadline="Unlock Connected Clinical Data"
      closingText="Discover how Guardian's semantic data architecture powers healthcare intelligence."
      ctaText="Request a Demo"
    />
  );
}
