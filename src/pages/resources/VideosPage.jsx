import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function VideosPage() {
  const capabilities = [
    {
      title: 'Platform Overview Videos',
      description: 'Concise videos explaining how Guardian connects clinical data, analytics, and care team execution.',
      iconText: '01'
    },
    {
      title: 'Feature Spotlight Clips',
      description: 'Short feature overviews highlighting real-time ADT alerting, risk suspecting, and quality gap closure.',
      iconText: '02'
    },
    {
      title: 'Educational Case Briefs',
      description: 'Explanations of value-based care concepts and technology-enabled population health strategies.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Browse Repository', desc: 'Select video topics matching your clinical or operational focus.' },
    { step: '02', title: 'Watch Overview', desc: 'View high-level feature explanations and solution briefings.' },
    { step: '03', title: 'Share with Team', desc: 'Share relevant video briefs with key healthcare stakeholders.' },
    { step: '04', title: 'Request Deep-Dive', desc: 'Connect with Guardian specialists for a full platform presentation.' }
  ];

  const siblings = [
    { label: 'Product Tours', path: '/resources/product-tours' },
    { label: 'Case Studies', path: '/resources/case-studies' },
    { label: 'Guides', path: '/resources/guides' }
  ];

  return (
    <ChildPageLayout
      category="Resources"
      categoryPath="/resources"
      title="Videos"
      eyebrow="Media Library"
      headline="Healthcare Intelligence Video Repository"
      supporting="Watch feature overviews and brief solution summaries illustrating Guardian's integrated population health platform."
      capabilities={capabilities}
      capabilitiesTitle="Video Categories"
      capabilitiesSubtitle="Video content covering Guardian's platform and solution capabilities"
      journey={journey}
      journeyTitle="Video Learning Flow"
      journeySubtitle="How to explore media briefings on Guardian technology"
      siblings={siblings}
      closingHeadline="Discover Guardian in Action"
      closingText="Contact us to request a live demonstration tailored to your organization."
      ctaText="Request a Demo"
    />
  );
}
