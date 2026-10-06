import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function APIsMobilePage() {
  const capabilities = [
    {
      title: 'Secure REST API Endpoints',
      description: 'Programmatic access to patient profiles, risk scores, and care gap data for authorized applications.',
      iconText: '01'
    },
    {
      title: 'Developer Webhooks & Event Notifications',
      description: 'Receive event webhooks for real-time ADT updates, care plan notifications, and status changes.',
      iconText: '02'
    },
    {
      title: 'Mobile-Responsive Patient Integration',
      description: 'Connect mobile-responsive patient portals, SMS communication suites, and remote intake tools.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'API Authentication', desc: 'Secure REST API authentication and role-based data authorization.' },
    { step: '02', title: 'Data Query', desc: 'Request structured patient, risk, or quality metrics via REST endpoints.' },
    { step: '03', title: 'Webhook Dispatch', desc: 'Stream real-time event webhooks to integrated mobile apps or portals.' },
    { step: '04', title: 'Mobile Integration', desc: 'Connect patient communication streams with the longitudinal record.' }
  ];

  const siblings = [
    { label: 'Data Foundation', path: '/data-integration/data-foundation' },
    { label: 'Clinical Integration', path: '/data-integration/clinical-integration' },
    { label: 'HIE & ADT Integration', path: '/data-integration/hie-adt' }
  ];

  return (
    <ChildPageLayout
      category="Data & Integration"
      categoryPath="/data-integration"
      title="APIs / Mobile Integration"
      eyebrow="Integration Architecture"
      headline="Developer APIs & Mobile Data Connectors"
      supporting="Guardian's integration architecture provides secure REST APIs, webhooks, and mobile connectors to extend healthcare data visibility across external applications."
      capabilities={capabilities}
      capabilitiesTitle="API & Mobile Capabilities"
      capabilitiesSubtitle="Verified developer interfaces and integration protocols"
      journey={journey}
      journeyTitle="Integration & Data Exchange Flow"
      journeySubtitle="How external systems securely connect with the Guardian platform"
      siblings={siblings}
      closingHeadline="Connect Your Custom Applications"
      closingText="Explore Guardian's developer interfaces and mobile integration capabilities."
      ctaText="Request a Demo"
    />
  );
}
