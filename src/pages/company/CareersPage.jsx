import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function CareersPage() {
  const capabilities = [
    {
      title: 'Technology & Engineering',
      description: 'Build healthcare data pipelines, interactive patient interfaces, and secure interoperability tools.',
      iconText: '01'
    },
    {
      title: 'Clinical Care Management',
      description: 'Join clinical teams supporting value-based care programs, care coordination, and patient outreach.',
      iconText: '02'
    },
    {
      title: 'Risk Adjustment & Operations',
      description: 'Support risk coding accuracy, quality performance monitoring, and account management operations.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Explore Roles', desc: 'Review open opportunities across technology, clinical care, and operations.' },
    { step: '02', title: 'Submit Application', desc: 'Connect with our talent team regarding positions matching your experience.' },
    { step: '03', title: 'Interview Process', desc: 'Discuss your background and alignment with Guardian\'s mission.' },
    { step: '04', title: 'Join Guardian', desc: 'Collaborate with teams advancing technology-enabled healthcare.' }
  ];

  const siblings = [
    { label: 'About Guardian', path: '/company/about' },
    { label: 'Leadership', path: '/company/leadership' },
    { label: 'Security & Trust', path: '/company/security-trust' }
  ];

  return (
    <ChildPageLayout
      category="Company"
      categoryPath="/company"
      title="Careers"
      eyebrow="Career Opportunities"
      headline="Careers at Guardian Health Service"
      supporting="We are seeking passionate technology developers, healthcare specialists, and care managers committed to improving patient outcomes."
      capabilities={capabilities}
      capabilitiesTitle="Opportunity Areas"
      capabilitiesSubtitle="Primary team disciplines at Guardian Health Service"
      journey={journey}
      journeyTitle="Application Journey"
      journeySubtitle="How candidate applications are processed by our team"
      siblings={siblings}
      closingHeadline="Get in Touch with Our Team"
      closingText="Contact us to learn more about career opportunities at Guardian Health Service."
      ctaText="Contact Us"
    />
  );
}
