export const navigationConfig = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Platform',
    path: '/platform',
    children: [
      { label: 'Platform Overview', path: '/platform' },
      { label: 'Population Health', path: '/platform/population-health' },
      { label: 'Analytics', path: '/platform/analytics' },
      {
        label: 'Patient Intelligence',
        path: '/platform/patient-intelligence',
        subchildren: [
          { label: 'Patient 360 / PMC', path: '/platform/patient-intelligence/patient-360' }
        ]
      },
      { label: 'Risk Stratification', path: '/platform/risk-stratification' },
      { label: 'Risk Adjustment / MRA', path: '/platform/risk-adjustment' },
      { label: 'Quality / Care Gaps', path: '/platform/quality-care-gaps' },
      { label: 'Care Management', path: '/platform/care-management' },
      { label: 'Transitions of Care / ADT', path: '/platform/transitions-of-care-adt' },
      { label: 'Referral Management', path: '/platform/referral-management' },
      { label: 'Patient Engagement', path: '/platform/patient-engagement' },
      { label: 'Telemedicine', path: '/platform/telemedicine' },
    ]
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'ACO & Value-Based Care', path: '/solutions/aco-value-based-care' },
      { label: 'Health Plans', path: '/solutions/health-plans' },
      { label: 'CIN & Provider Organizations', path: '/solutions/cin-provider-organizations' },
      { label: 'Care Management / Care Teams', path: '/solutions/care-management-teams' },
    ]
  },
  {
    label: 'Intelligence',
    path: '/intelligence',
    children: [
      { label: 'Clinical Knowledge Graph', path: '/intelligence/clinical-knowledge-graph' },
      { label: 'AI', path: '/intelligence/ai' },
      { label: 'Predictive Intelligence', path: '/intelligence/predictive-intelligence' },
      { label: 'Intelligent Workflows', path: '/intelligence/intelligent-workflows' },
      { label: 'Human-in-the-Loop', path: '/intelligence/human-in-the-loop' },
    ]
  },
  {
    label: 'Data & Integration',
    path: '/data-integration',
    children: [
      { label: 'Clinical Integration', path: '/data-integration/clinical-integration' },
      { label: 'Claims Integration', path: '/data-integration/claims-integration' },
      { label: 'HIE & ADT', path: '/data-integration/hie-adt' },
      { label: 'Labs / Pharmacy / Other Data', path: '/data-integration/labs-pharmacy-other' },
      { label: 'Data Foundation', path: '/data-integration/data-foundation' },
      { label: 'APIs / Mobile Integration', path: '/data-integration/apis-mobile' },
    ]
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Insights', path: '/resources/insights' },
      { label: 'Guides', path: '/resources/guides' },
      { label: 'Case Studies', path: '/resources/case-studies' },
      { label: 'Webinars', path: '/resources/webinars' },
      { label: 'Product Tours', path: '/resources/product-tours' },
      { label: 'Videos', path: '/resources/videos' },
    ]
  },
  {
    label: 'Company',
    path: '/company',
    children: [
      { label: 'About Guardian', path: '/company/about' },
      { label: 'Leadership', path: '/company/leadership' },
      { label: 'Security & Trust', path: '/company/security-trust' },
      { label: 'Careers', path: '/company/careers' },
      { label: 'Contact', path: '/company/contact' },
    ]
  }
];

export function isParentActive(currentPath, item) {
  if (!item || !item.path) return false;
  if (currentPath === item.path) return true;
  if (item.children) {
    return item.children.some(child => {
      if (child.path === currentPath) return true;
      if (child.subchildren) {
        return child.subchildren.some(sub => sub.path === currentPath);
      }
      return false;
    });
  }
  return false;
}

export function isChildActive(currentPath, childPath) {
  return currentPath === childPath;
}
