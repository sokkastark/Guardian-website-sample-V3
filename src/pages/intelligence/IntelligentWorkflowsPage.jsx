import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function IntelligentWorkflowsPage() {
  const capabilities = [
    {
      title: 'Automated Care Task Routing',
      description: 'Automatically assign follow-up tasks, assessments, and patient outreach to appropriate care managers.',
      iconText: '01'
    },
    {
      title: 'Point-of-Care Gaps Notifications',
      description: 'Deliver real-time care gap notifications to providers and clinical staff during patient encounters.',
      iconText: '02'
    },
    {
      title: 'Protocol Compliance Automation',
      description: 'Track patient completion of individualized care plans and clinical protocol milestones.',
      iconText: '03'
    }
  ];

  const journey = [
    { step: '01', title: 'Trigger Event', desc: 'Capture clinical event, risk update, or care gap identification.' },
    { step: '02', title: 'Workflow Evaluation', desc: 'Evaluate rule-based workflow protocols and task criteria.' },
    { step: '03', title: 'Task Assignment', desc: 'Route actionable tasks to assigned care team members.' },
    { step: '04', title: 'Closure Tracking', desc: 'Monitor task completion and update patient record status.' }
  ];

  const siblings = [
    { label: 'Care Management', path: '/platform/care-management' },
    { label: 'Quality / Care Gaps', path: '/platform/quality-care-gaps' },
    { label: 'Human-in-the-Loop AI', path: '/intelligence/human-in-the-loop' }
  ];

  return (
    <ChildPageLayout
      category="Intelligence"
      categoryPath="/intelligence"
      title="Intelligent Workflows"
      eyebrow="Workflow Automation"
      headline="Automated Task Routing & Clinical Operations"
      supporting="Guardian's Intelligent Workflows connect data intelligence with clinical operations, automating task distribution and ensuring critical care gaps are addressed."
      capabilities={capabilities}
      capabilitiesTitle="Workflow Capabilities"
      capabilitiesSubtitle="Verified automation features for clinical care operations"
      journey={journey}
      journeyTitle="Automated Workflow Cycle"
      journeySubtitle="How clinical data triggers actionable task routing for care teams"
      siblings={siblings}
      closingHeadline="Streamline Clinical Operations"
      closingText="See how Guardian automates routine care tasks so clinical teams can focus on patient care."
      ctaText="Request a Demo"
    />
  );
}
