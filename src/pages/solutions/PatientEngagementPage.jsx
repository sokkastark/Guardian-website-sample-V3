import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function PatientEngagementPage() {
  const journey = [
    { step: 'Identify', description: 'Understand who needs attention.' },
    { step: 'Inform', description: 'Give patients relevant information.' },
    { step: 'Engage', description: 'Support meaningful interactions.' },
    { step: 'Coordinate', description: 'Connect engagement with care workflows.' },
    { step: 'Follow Up', description: 'Keep the next step visible.' },
    { step: 'Measure', description: 'Understand engagement activity.' }
  ];

  const capabilities = [
    'Telemedicine: Secure 1-Click Browser Video Consults & Virtual Waiting Rooms (No Login/App Required)',
    'Multichannel Patient Communication & Automated Follow-Up Scheduling',
    'Patient Population Campaigns Engine & Targeted Cohort Segmentation',
    'Real-Time Patient Clinical History Access During Virtual Consultation Visits',
    'Targeted Outreach Overcoming SDOH Barriers, Transportation & Specialist Booking',
    'Integrated SMS & Email Notifications with Clinical Visit Documentation'
  ];

  const siblings = [
    { label: 'Care Management', path: '/solutions/care-management' },
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Analytics & Intelligence', path: '/solutions/analytics-intelligence' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Patient Engagement"
      eyebrow="TELEMEDICINE & ENGAGEMENT"
      headline="Connect patients to the next step in their care."
      supporting="Guardian combines patient information, healthcare workflows, and engagement capabilities to help organizations support meaningful interactions throughout the care journey."
      ctaText="Explore Patient Engagement"
      journey={journey}
      journeyTitle="Patient Engagement: Meaningful Interaction Journey"
      journeySubtitle="How Guardian connects patient information with effective outreach and care follow-up"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps healthcare teams achieve in patient engagement"
      heroVisualBadge="Real-Time Video Consultations"
      heroImage="/images/product-ui/ui-telemedicine.png"
      mockupUrl="Telemedicine"
      contextType="patient-engagement"
      siblings={siblings}
      closingHeadline="Turn patient information into meaningful action."
      closingText="Patient engagement becomes more effective when the right information reaches the right people at the right point in the care journey."
    />
  );
}
