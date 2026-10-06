import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function ReferralManagementPage() {
  const capabilities = [
    {
      title: 'In-Network vs. Out-of-Network Leakage Tracking',
      description: 'Monitor referral destinations to keep care within high-value provider networks and reduce leakage.',
      iconText: '01'
    },
    {
      title: 'Specialist Referral Authorization',
      description: 'Streamline authorization requests and routing between primary care providers and specialists.',
      iconText: '02'
    },
    {
      title: 'Prior Authorization Tracking & Alerts',
      description: 'Track prior authorization status in real time to prevent delays in necessary patient procedures.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Referral Order', desc: 'Capture specialist referral orders directly from care plans or EHRs.' },
    { step: '02', title: 'Network Verification', desc: 'Check network alignment and specialty availability.' },
    { step: '03', title: 'Authorization Tracking', desc: 'Monitor prior authorization approvals and pending statuses.' },
    { step: '04', title: 'Closing the Loop', desc: 'Confirm specialist encounter completion and record exchange.' }
  ];

  const siblings = [
    { label: 'Care Management', path: '/platform/care-management' },
    { label: 'Patient Engagement', path: '/platform/patient-engagement' },
    { label: 'Platform Overview', path: '/platform' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Referral Management"
      eyebrow="Network Optimization"
      headline="Streamline Specialist Referrals & Reduce Network Leakage"
      supporting="Guardian's Referral Management tools help healthcare organizations track specialist referral routing, monitor network alignment, and manage prior authorization statuses."
      capabilities={capabilities}
      capabilitiesTitle="Referral Management Capabilities"
      capabilitiesSubtitle="Verified features supporting specialist routing and network optimization"
      journey={journey}
      journeyTitle="Referral Coordination Workflow"
      journeySubtitle="How referral requests are ordered, verified, authorized, and completed"
      siblings={siblings}
      closingHeadline="Optimize Specialist Referral Workflows"
      closingText="See how Guardian helps keep care in-network while expediting specialist access."
      ctaText="Request a Demo"
    />
  );
}
