import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function LabsPharmacyPage() {
  const capabilities = [
    {
      title: 'Laboratory Data Ingestion',
      description: 'Ingest and normalize laboratory results, LOINC codes, and diagnostic feeds to track clinical trends.',
      iconText: '01'
    },
    {
      title: 'Claims & Prescription Data Ingestion',
      description: 'Process claims data (EDI 837/835, CCLF/BCDA) and prescription records to track clinical trends and medication profiles.',
      iconText: '02'
    },
    {
      title: 'Supplemental Data Feed Integration',
      description: 'Incorporate specialized clinical registries, SDOH data, and auxiliary data feeds into the patient record.',
      iconText: '03'
    },
    {
      title: 'Semantic Normalization',
      description: 'Map disparate code sets to standardized terminologies (LOINC, RxNorm, CPT, ICD-10) for uniform analytics.',
      iconText: '04'
    }
  ];

  const journey = [
    { step: '01', title: 'Feed Ingestion', desc: 'Capture lab results, claims data, and supplemental data files.' },
    { step: '02', title: 'Code Mapping', desc: 'Normalize local lab and drug codes to LOINC and RxNorm standards.' },
    { step: '03', title: 'Record Linking', desc: 'Attach normalized data points to the longitudinal Patient Master Chart.' },
    { step: '04', title: 'Clinical Analytics', desc: 'Power gap closure, care management, and quality scorecards.' }
  ];

  const siblings = [
    { label: 'Data Foundation', path: '/data-integration/data-foundation' },
    { label: 'Claims Integration', path: '/data-integration/claims-integration' },
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration' }
  ];

  return (
    <ChildPageLayout
      category="Data & Integration"
      categoryPath="/data-integration"
      title="Labs / Pharmacy / Other Data"
      eyebrow="Multi-Source Data Ingestion"
      headline="Comprehensive Laboratory & Pharmacy Data Integration"
      supporting="Guardian ingests, normalizes, and links laboratory test results, claims data, and supplemental feeds into the longitudinal patient record to support clinical decision-making."
      capabilities={capabilities}
      capabilitiesTitle="Lab & Pharmacy Integration Capabilities"
      capabilitiesSubtitle="Core features of Guardian's lab and prescription data ingestion engine"
      journey={journey}
      journeyTitle="Lab & Pharmacy Ingestion Journey"
      journeySubtitle="How disparate diagnostic and prescription records enrich the patient profile"
      siblings={siblings}
      closingHeadline="Enrich Your Healthcare Intelligence Foundation"
      closingText="See how Guardian combines multi-source lab and pharmacy data into an actionable clinical foundation."
      ctaText="Request a Demo"
    />
  );
}
