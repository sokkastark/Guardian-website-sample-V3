import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function OurStoryPage() {
  const milestones = [
    { year: '2013', title: 'First Medicare ACO in Florida', description: 'Pioneered accountable care organization participation under CMS shared savings initiatives.' },
    { year: '2016', title: 'State ENS Integration', description: 'Connected to Florida State Emergency Notification System for real-time encounter tracking.' },
    { year: '2017', title: 'National Data Exchanges', description: 'Expanded nationwide connectivity across clinical networks and health information exchanges.' },
    { year: '2018', title: '1 Million Records Milestone', description: 'Reached over one million longitudinal patient health records unified on the platform.' },
    { year: '2019', title: 'First $100M Shared Savings', description: 'Surpassed one hundred million dollars in aggregate shared savings generated for client partners.' },
    { year: '2021', title: 'CMS MIPS Registry Architecture', description: 'Achieved CMS MIPS Qualified Registry architecture status for performance reporting.' }
  ];

  const capabilities = [
    'Healthcare experience',
    'Connected data',
    'Technology development',
    'Operational expertise',
    'Continued evolution'
  ];

  const siblings = [
    { label: 'About Guardian', path: '/why-guardian/about' },
    { label: 'Healthcare Expertise', path: '/why-guardian/healthcare-expertise' },
    { label: 'Certifications & Trust', path: '/why-guardian/certifications-trust' },
    { label: 'Leadership', path: '/why-guardian/leadership' }
  ];

  return (
    <ChildPageLayout
      category="Why Guardian"
      categoryPath="/why-guardian"
      title="Our Story"
      eyebrow="OUR STORY"
      headline="A healthcare journey built around action."
      supporting="Guardian's story is rooted in healthcare and in the continued effort to connect information, technology, and people around better care and performance."
      ctaText="Explore Our Story"
      milestones={milestones}
      capabilities={capabilities}
      capabilitiesTitle="Strategic Evolution Areas"
      capabilitiesSubtitle="How Guardian continues to advance value-based healthcare"
      supportingHeadline="From healthcare experience to connected intelligence."
      supportingText="Guardian has evolved alongside the changing healthcare landscape, building technology and services around the practical needs of healthcare organizations."
      heroVisualBadge="Over a Decade in Value-Based Care"
      siblings={siblings}
      closingHeadline="The story continues."
      closingText="See how Guardian brings healthcare data, technology, and expertise together today."
    />
  );
}
