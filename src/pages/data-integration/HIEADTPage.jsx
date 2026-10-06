import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function HIEADTPage() {
  const capabilities = [
    {
      title: 'Health Information Exchange (HIE) Feeds',
      description: 'Ingest clinical data feeds from regional and statewide HIE networks to maintain comprehensive record coverage.',
      iconText: '01'
    },
    {
      title: 'Real-Time ADT Event Parsing',
      description: 'Process admission, discharge, and transfer messages in real time to capture critical patient care events.',
      iconText: '02'
    },
    {
      title: 'HL7, FHIR R4 & C-CDA Standard Parsers',
      description: 'Support standard clinical messaging formats (HL7 v2, FHIR R4, C-CDA) for seamless data interoperability.',
      iconText: '03'
    },
    {
      title: 'Automated Alert Dispatch Engine',
      description: 'Trigger point-of-care alerts and care management task generation upon receiving ADT event updates.',
      iconText: '04'
    }
  ];

  const journey = [
    { step: '01', title: 'Feed Connection', desc: 'Establish secure connections with HIE networks and hospital ADT feeds.' },
    { step: '02', title: 'Message Parsing', desc: 'Parse and normalize inbound HL7 and FHIR clinical messages.' },
    { step: '03', title: 'Identity Linking', desc: 'Link incoming events to the Master Patient Index.' },
    { step: '04', title: 'Real-Time Notification', desc: 'Deliver actionable event notifications to care managers.' }
  ];

  const siblings = [
    { label: 'Data Foundation', path: '/data-integration/data-foundation' },
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration' },
    { label: 'Transitions of Care / ADT', path: '/platform/transitions-of-care-adt' }
  ];

  return (
    <ChildPageLayout
      category="Data & Integration"
      categoryPath="/data-integration"
      title="HIE & ADT Integration"
      eyebrow="Real-Time Data Connectors"
      headline="Seamless Interoperability with HIE & ADT Networks"
      supporting="Guardian's HIE & ADT integration architecture connects regional health information exchanges and hospital event feeds into a unified real-time alert engine."
      capabilities={capabilities}
      capabilitiesTitle="HIE & ADT Integration Capabilities"
      capabilitiesSubtitle="How Guardian ingests and normalizes real-time clinical event feeds"
      journey={journey}
      journeyTitle="HIE & ADT Data Pipeline"
      journeySubtitle="From inbound event transmission to real-time clinical alerting"
      siblings={siblings}
      closingHeadline="Connect Your Real-Time Data Ecosystem"
      closingText="Explore how Guardian's HIE & ADT integration infrastructure powers real-time care intelligence."
      ctaText="Request a Demo"
    />
  );
}
