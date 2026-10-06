import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function TelemedicinePage() {
  const capabilities = [
    {
      title: 'Virtual Care Visit Launch',
      description: 'Initiate secure telehealth video sessions directly from patient management workflows.',
      iconText: '01'
    },
    {
      title: 'Automated Outreach & Reminders',
      description: 'Deliver SMS and email appointment reminders, intake links, and follow-up notifications.',
      iconText: '02'
    },
    {
      title: 'Patient Portal Integration',
      description: 'Connect virtual encounter notes and patient-reported information with the Patient Master Chart.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Schedule Visit', desc: 'Schedule virtual appointments within clinical care management plans.' },
    { step: '02', title: 'Patient Reminder', desc: 'Send automated SMS reminders and secure virtual visit links.' },
    { step: '03', title: 'Virtual Encounter', desc: 'Conduct telehealth session with integrated record access.' },
    { step: '04', title: 'Record Documentation', desc: 'Capture encounter summaries within the longitudinal patient profile.' }
  ];

  const siblings = [
    { label: 'Patient Engagement', path: '/platform/patient-engagement' },
    { label: 'Care Management', path: '/platform/care-management' },
    { label: 'Platform Overview', path: '/platform' }
  ];

  return (
    <ChildPageLayout
      category="Platform"
      categoryPath="/platform"
      title="Telemedicine"
      eyebrow="Virtual Care Integration"
      headline="Integrated Telehealth & Remote Patient Engagement"
      supporting="Guardian's Telemedicine feature set connects digital virtual visits and patient communications into the unified clinical workflow."
      capabilities={capabilities}
      capabilitiesTitle="Telemedicine Features"
      capabilitiesSubtitle="Verified virtual care tools integrated with Guardian patient workflows"
      journey={journey}
      journeyTitle="Virtual Encounter Flow"
      journeySubtitle="From scheduling and patient notifications to documentation in the PMC"
      siblings={siblings}
      closingHeadline="Extend Care Beyond the Clinic"
      closingText="Learn how Guardian integrates virtual visits into everyday care management."
      ctaText="Request a Demo"
    />
  );
}
