import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function Patient360Page() {
  const capabilities = [
    {
      title: 'Patient Master Chart (PMC)',
      description: 'Unified longitudinal record aggregating EHR, claims, ADT, and lab data into a single comprehensive view.',
      iconText: '01'
    },
    {
      title: 'Chronological Clinical Timeline',
      description: 'Interactive historical timeline tracking encounters, diagnoses, medications, procedures, and lab trends over time.',
      iconText: '02'
    },
    {
      title: 'Master Patient Index (MPI) Matching',
      description: 'Advanced patient matching algorithms linking fragmented records across disparate health systems and clinical sites.',
      iconText: '03'
    },
    {
      title: 'SDOH & Social Risk Factors',
      description: 'Integrated screening tools identifying social determinants of health to support holistic care planning.',
      iconText: '04'
    },
    {
      title: 'Consolidated Clinical Summaries',
      description: 'Point-of-care summary exports for providers, clinical care managers, and interdisciplinary care teams.',
      iconText: '05'
    }
  ];

  const journey = [
    { step: '01', title: 'Data Aggregation', desc: 'Ingest EHR, claims, ADT alerts, and lab records.' },
    { step: '02', title: 'Identity Resolution', desc: 'Apply Master Patient Index algorithms to unify patient records.' },
    { step: '03', title: 'Longitudinal View', desc: 'Present consolidated clinical timeline and PMC insights.' },
    { step: '04', title: 'Actionable Intelligence', desc: 'Deliver point-of-care clinical summaries and gap alerts.' }
  ];

  const siblings = [
    { label: 'Patient Intelligence Overview', path: '/platform/patient-intelligence' },
    { label: 'Risk Stratification', path: '/platform/risk-stratification' },
    { label: 'Care Management', path: '/platform/care-management' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform/patient-intelligence"
      title="Patient 360 / PMC"
      eyebrow="Patient Intelligence Suite"
      headline="Complete Longitudinal View of Every Patient"
      supporting="Guardian's Patient Master Chart (PMC) unifies clinical, claims, ADT, and social data into a single interactive 360-degree patient record designed for clinical decision-making."
      capabilities={capabilities}
      capabilitiesTitle="Core PMC Capabilities"
      capabilitiesSubtitle="Essential features of the Guardian Patient Master Chart"
      journey={journey}
      journeyTitle="Patient Record Consolidation Journey"
      journeySubtitle="How multi-source healthcare data becomes a single unified patient record"
      siblings={siblings}
      closingHeadline="Transform Fragmented Patient Data Into Action"
      closingText="Explore how Guardian's Patient Master Chart empowers care teams with longitudinal visibility."
      ctaText="Request a Demo"
    />
  );
}
