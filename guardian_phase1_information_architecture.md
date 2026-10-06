# GUARDIAN HEALTHCARE WEBSITE — PHASE 1: INFORMATION ARCHITECTURE & MENU FINALIZATION (FINAL APPROVED)

**Document Version:** 1.3 (Final Approved & Metrics-Verified Information Architecture)  
**Status:** **FINAL / IMPLEMENTATION READY** (Approved by Stakeholder)  
**Date:** September 24, 2026  
**Source of Truth:** Finalized Guardian Menu & Product Profile 6.0  

---

## 1. FINAL TOP NAVIGATION

The finalized primary header navigation consists of 7 top-level links and 3 right-side action CTAs:

```
[Logo]   Home   Platform   Solutions   Intelligence   Data & Integration   Resources   Company       [See Guardian]   [Request a Demo]   [Login ↗]
```

### Top Navigation Items
1. **Home** (`/`)
2. **Platform** (`/platform`)
3. **Solutions** (`/solutions`)
4. **Intelligence** (`/intelligence`)
5. **Data & Integration** (`/data-integration`)
6. **Resources** (`/resources`)
7. **Company** (`/company`)

### Right-Side Actions (Utility CTAs)
- **See Guardian**: High-intent primary entry CTA (**STAKEHOLDER DECISION REQUIRED** for exact destination/behavior).
- **Request a Demo**: Lead capture conversion CTA (Routes to canonical `/company/contact?intent=demo`).
- **Login**: Client portal access button pointing to `https://live.itsguardian.com/` (**KEPT EXACTLY AS IMPLEMENTED**).

---

## 2. FINAL DROPDOWN NAVIGATION ARCHITECTURE

> **CRITICAL IA PRINCIPLE — NAVIGATION vs. READINESS:**  
> The navigation structure defined below is the **100% complete Source of Truth** containing **46 total URLs** (7 primary links + 39 dropdown sub-routes). Pages marked as "Deferred Content Implementation" remain fully active in the navigation hierarchy. Implementation readiness does NOT alter or shrink the approved navigation taxonomy.

```
Platform (12 Dropdown Items)
├── Platform Overview (/platform)
├── Population Health (/platform/population-health)
├── Analytics (/platform/analytics)
├── Patient Intelligence (/platform/patient-intelligence)
│   └── Patient 360 / PMC (/platform/patient-intelligence/patient-360)
├── Risk Stratification (/platform/risk-stratification)
├── Risk Adjustment / MRA (/platform/risk-adjustment)
├── Quality / Care Gaps (/platform/quality-care-gaps)
├── Care Management (/platform/care-management)
├── Transitions of Care / ADT (/platform/transitions-of-care-adt)
├── Referral Management (/platform/referral-management)
├── Patient Engagement (/platform/patient-engagement)
└── Telemedicine (/platform/telemedicine)

Solutions (4 Dropdown Items)
├── ACO & Value-Based Care (/solutions/aco-value-based-care)
├── Health Plans (/solutions/health-plans)
├── CIN & Provider Organizations (/solutions/cin-provider-organizations)
└── Care Management / Care Teams (/solutions/care-management-teams)

Intelligence (5 Dropdown Items)
├── Clinical Knowledge Graph (/intelligence/clinical-knowledge-graph)
├── AI (/intelligence/ai)
├── Predictive Intelligence (/intelligence/predictive-intelligence)
├── Intelligent Workflows (/intelligence/intelligent-workflows)
└── Human-in-the-Loop (/intelligence/human-in-the-loop)

Data & Integration (6 Dropdown Items)
├── Clinical Integration (/data-integration/clinical-integration)
├── Claims Integration (/data-integration/claims-integration)
├── HIE & ADT (/data-integration/hie-adt)
├── Labs / Pharmacy / Other Data (/data-integration/labs-pharmacy-other)
├── Data Foundation (/data-integration/data-foundation)
└── APIs / Mobile Integration (/data-integration/apis-mobile)

Resources (6 Dropdown Items)
├── Insights (/resources/insights)
├── Guides (/resources/guides)
├── Case Studies (/resources/case-studies)
├── Webinars (/resources/webinars)
├── Product Tours (/resources/product-tours)
└── Videos (/resources/videos)

Company (5 Dropdown Items)
├── About Guardian (/company/about)
├── Leadership (/company/leadership)
├── Security & Trust (/company/security-trust)
├── Careers (/company/careers)
└── Contact (/company/contact)
```

---

## 3. PLATFORM IA PRINCIPLE & EXPLICIT FEATURE INVENTORY STRATEGY

### Core Platform Principle: `PLATFORM = WHAT GUARDIAN CAN DO`

The Platform experience serves as the definitive showcase of Guardian's software capabilities. To prevent users from having to click through 12 separate subpages just to understand what the product can do, the main `/platform` landing page will follow a structured 5-part architecture:

1. **Platform Overview**: Executive narrative defining Guardian's integrated healthcare intelligence architecture.
2. **Capability Journey**: Visual end-to-end flow (*Data Ingestion → Patient Intelligence → Action & Care Workflows → Financial/Clinical Outcomes*).
3. **Major Capability Areas**: Interactive card grid highlighting core capability hubs leading to deeper storytelling subpages.
4. **Product UI Proof**: High-fidelity interactive UI component visual proofs (Patient Master Chart, MRA Suspecting, Care Plan Engine).
5. **Explore All Platform Capabilities (Detailed Feature Inventory)**: A comprehensive, searchable feature inventory matrix organizing every verified feature from Product Profile 6.0 into 9 logical groupings.

### Explicit Product Profile 6.0 Feature Inventory Matrix

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               EXPLORE ALL PLATFORM CAPABILITIES                                  │
├──────────────────────────┬──────────────────────────┬────────────────────────────────────────────┤
│ Category                 │ Capability Group         │ Verified Product Profile 6.0 Features      │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 1. Patient Profile       │ Patient Intelligence &   │ • Patient Master Chart (PMC)               │
│                          │ Longitudinal Record      │ • Unified Longitudinal Patient Record      │
│                          │                          │ • Master Patient Index (MPI) Matching      │
│                          │                          │ • Chronological Clinical Timeline          │
│                          │                          │ • SDOH Social Risk Factor Screening        │
│                          │                          │ • Consolidated Clinical Summary Export     │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 2. Analytics             │ Population Analytics &   │ • Executive Performance Dashboards         │
│                          │ Reporting                │ • Cost & Utilization Trend Analytics       │
│                          │                          │ • Quality Scorecards & Star Rating Tracker │
│                          │                          │ • Dynamic Cohort Builder & Filter Engine   │
│                          │                          │ • Custom Report Generator & Data Export    │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 3. Care Management       │ Clinical Workflows &     │ • Individualized Care Plan Builder         │
│                          │ Care Planning            │ • Standardized Assessment Library (150+)   │
│                          │                          │ • Automated Task & Follow-up Routing       │
│                          │                          │ • Interdisciplinary Care Team Workspace    │
│                          │                          │ • Clinical Protocol Compliance Tracking    │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 4. Risk Adjustment       │ MRA & Coding Engine      │ • HCC Coding & Suspecting Engine           │
│                          │                          │ • Recapture & Chart Audit Workflow         │
│                          │                          │ • Dual Model Support (CMS-HCC V24 & V28)   │
│                          │                          │ • Real-time RAF Score Calculator           │
│                          │                          │ • Provider Documentation Query Generator   │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 5. ADT / TOC             │ Transitions of Care &    │ • Real-Time ADT Alert Ingestion            │
│                          │ Event Monitoring         │ • Discharge & Transfer Event Tracking      │
│                          │                          │ • 30-Day Readmission Risk Scoring          │
│                          │                          │ • Post-Acute Transition Protocols          │
│                          │                          │ • Emergency Department High-Utilizer Alerts│
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 6. Quality Manager       │ Gaps in Care &           │ • HEDIS Care Gap Identification Engine     │
│                          │ Compliance               │ • MIPS Performance Tracker & Reporting     │
│                          │                          │ • Quality Measure Gap Closure Workflows    │
│                          │                          │ • Provider Point-of-Care Gaps Notification │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 7. Referral Manager      │ Network Optimization &   │ • In-Network vs Out-of-Network Leakage     │
│                          │ Referral Routing         │ • Specialist Referral Authorization Engine │
│                          │                          │ • Prior Authorization Tracking & Alerts    │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 8. Patient Engagement    │ Patient Communication &  │ • Automated SMS & Email Communication      │
│                          │ Digital Health           │ • Mobile-Responsive Patient Portal         │
│                          │                          │ • Telehealth Video Visit Integration       │
│                          │                          │ • Appointment Reminders & Intake Forms     │
├──────────────────────────┼──────────────────────────┼────────────────────────────────────────────┤
│ 9. Interoperability      │ Data Ingestion &         │ • Bi-directional EHR Integrations          │
│                          │ Data Foundation          │ • HL7, FHIR R4, & C-CDA Standard Parsers   │
│                          │                          │ • Claims Data Ingestion (837/835, CCLF/BCDA│
│                          │                          │ • Semantic Data Normalization Engine       │
│                          │                          │ • Secure REST APIs & Developer Webhooks    │
└──────────────────────────┴──────────────────────────┴────────────────────────────────────────────┘
```

---

## 4. CURRENT ROUTE INVENTORY & DISPOSITION AUDIT

The current codebase (`src/App.jsx` and `src/config/navigation.js`) contains exactly **32 active routes**.

| Route Path | Page Component File | Current Navigation Location | Current Purpose | Product Profile Relationship | Disposition Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `HomePage.jsx` | Top Nav (Home) | Homepage & Core Value Prop | Executive Summary / Hero | **KEEP** (1/8) |
| `/solutions` | `SolutionsPage.jsx` | Top Nav (Solutions) | Solutions Hub Page | Value-Based Care & Org Solutions | **KEEP** (2/8) |
| `/platform` | `PlatformPage.jsx` | Top Nav (Platform) | Platform Overview Landing | Technology Suite Overview | **KEEP** (3/8) |
| `/who-we-serve` | `WhoWeServePage.jsx` | Top Nav (Who We Serve) | Target Audiences Hub | Payers & Providers Overview | **REMOVE** (1/2) |
| `/services` | `ServicesPage.jsx` | Top Nav (Commented out) | Clinical Services Hub | Staff Augmentation / Managed Care | **REMOVE** (2/2) |
| `/why-guardian` | `WhyGuardianPage.jsx` | Top Nav (Why Guardian) | Company Hub Page | Brand & Story Overview | **RENAME** to `/company` (1/7) |
| `/resources` | `ResourcesPage.jsx` | Top Nav (Resources) | Resources Hub Landing | Resource Library | **KEEP** (4/8) |
| `/contact` | `ContactPage.jsx` | Top Nav CTA / Header | Contact Us Form | Contact & Demo Capture | **MOVE** to `/company/contact` (1/9) |
| `/solutions/population-health` | `PopulationHealthPage.jsx` | Dropdown (Solutions) | Pop Health Feature Page | Population Health Engine | **MOVE** to `/platform/population-health` (2/9) |
| `/solutions/care-management` | `CareManagementPage.jsx` | Dropdown (Solutions) | Care Mgmt Feature Page | Care Management Workspace | **MOVE** to `/platform/care-management` (3/9) |
| `/solutions/risk-adjustment` | `RiskAdjustmentPage.jsx` | Dropdown (Solutions) | Risk Adjustment Page | MRA & Coding Engine | **MOVE** to `/platform/risk-adjustment` (4/9) |
| `/solutions/quality-performance` | `QualityPerformancePage.jsx` | Dropdown (Solutions) | Quality Performance Page | Quality & Care Gaps | **RENAME** to `/platform/quality-care-gaps` (2/7) |
| `/solutions/patient-engagement` | `PatientEngagementPage.jsx` | Dropdown (Solutions) | Patient Engagement Page | Mobile & Patient Outreach | **MOVE** to `/platform/patient-engagement` (5/9) |
| `/solutions/analytics-intelligence` | `AnalyticsIntelligencePage.jsx` | Dropdown (Solutions) | Analytics Overview Page | Analytics & Reporting | **RENAME** to `/platform/analytics` (3/7) |
| `/platform/data-integration` | `DataIntegrationPage.jsx` | Dropdown (Platform) | Data Integration Page | Ingestion & Connectors | **RENAME** to `/data-integration/data-foundation` (4/7) |
| `/platform/data-enrichment` | `DataEnrichmentPage.jsx` | Dropdown (Platform) | Data Pipeline Page | Data Enrichment Engine | **MOVE** to `/data-integration/claims-integration` (6/9) |
| `/platform/information-services` | `InformationServicesPage.jsx` | Dropdown (Platform) | Info Services Page | Clinical Data Delivery | **MOVE** to `/data-integration/clinical-integration` (7/9) |
| `/platform/patient-intelligence` | `PatientIntelligencePage.jsx` | Dropdown (Platform) | Patient Intelligence Page | Patient 360 & PMC | **KEEP** under Platform (5/8) |
| `/who-we-serve/providers` | `ProvidersPage.jsx` | Dropdown (Who We Serve) | Provider Solutions Page | ACOs & Health Systems | **RENAME** to `/solutions/cin-provider-organizations` (5/7) |
| `/who-we-serve/payers` | `PayersPage.jsx` | Dropdown (Who We Serve) | Payer Solutions Page | Health Plans & MA | **RENAME** to `/solutions/health-plans` (6/7) |
| `/services/account-executives` | `AccountExecutivesPage.jsx` | Sub-route (Inactive) | AE Staffing Services | Managed Services | **MERGE** into Care Teams (1/6) |
| `/services/risk-coders` | `RiskCodersPage.jsx` | Sub-route (Inactive) | Risk Coding Services | MRA Coders | **MERGE** into Care Teams (2/6) |
| `/services/care-managers` | `CareManagersPage.jsx` | Sub-route (Inactive) | Care Mgmt Services | Clinical Staffing | **MERGE** into Care Teams (3/6) |
| `/services/care-navigators` | `CareNavigatorsPage.jsx` | Sub-route (Inactive) | Navigation Services | Community & Navigation | **MERGE** into Care Teams (4/6) |
| `/why-guardian/about` | `AboutPage.jsx` | Dropdown (Why Guardian) | About Guardian Page | Mission & Vision | **MOVE** to `/company/about` (8/9) |
| `/why-guardian/our-story` | `OurStoryPage.jsx` | Dropdown (Why Guardian) | Company History Page | History & Milestones | **MERGE** into About (5/6) |
| `/why-guardian/healthcare-expertise` | `HealthcareExpertisePage.jsx` | Dropdown (Why Guardian) | Domain Expertise Page | Clinical Leadership | **MERGE** into About (6/6) |
| `/why-guardian/leadership` | `LeadershipPage.jsx` | Dropdown (Why Guardian) | Leadership Team Page | Executive Profiles | **MOVE** to `/company/leadership` (9/9) |
| `/why-guardian/certifications-trust` | `CertificationsTrustPage.jsx` | Dropdown (Why Guardian) | Security & Compliance | HIPAA, SOC 2, HITRUST | **RENAME** to `/company/security-trust` (7/7) |
| `/resources/insights` | `InsightsPage.jsx` | Dropdown (Resources) | Blog & Articles Hub | Thought Leadership | **KEEP** (6/8) |
| `/resources/case-studies` | `CaseStudiesPage.jsx` | Dropdown (Resources) | Client Success Stories | Customer Results | **KEEP** (7/8) |
| `/resources/guides` | `GuidesPage.jsx` | Dropdown (Resources) | Whitepapers & Ebooks | Educational Content | **KEEP** (8/8) |

### Current Route Disposition Summary (Total: 32)
- **KEEP:** 8 routes
- **RENAME:** 7 routes
- **MERGE:** 6 routes
- **MOVE:** 9 routes
- **REMOVE:** 2 routes
- **Sum check:** $8 + 7 + 6 + 9 + 2 = 32$ active current routes.

---

## 5. PAGE READINESS CLASSIFICATION (19 NEW SITEMAP PAGES)

All 19 new pages required by the finalized sitemap remain active in the **Approved Navigation Architecture**. For development staging, implementation readiness is divided into two operational tiers:

### Tier A: READY FOR CONTENT IMPLEMENTATION (7 Pages)
*High content confidence backed by existing Product Profile 6.0 and codebase source materials. Built during initial Phase 2 route rollout.*

1. **Patient 360 / PMC** (`/platform/patient-intelligence/patient-360`)
2. **Risk Stratification** (`/platform/risk-stratification`)
3. **Transitions of Care / ADT** (`/platform/transitions-of-care-adt`)
4. **ACO & Value-Based Care** (`/solutions/aco-value-based-care`)
5. **Care Management / Care Teams** (`/solutions/care-management-teams`)
6. **HIE & ADT Integration** (`/data-integration/hie-adt`)
7. **Labs / Pharmacy / Other Data** (`/data-integration/labs-pharmacy-other`)

### Tier B: DEFERRED CONTENT IMPLEMENTATION (12 Pages)
*Fully present in the finalized navigation menu and routing tree. Deep standalone page content is deferred until stakeholder copy is provided; initial navigation links route to structural feature briefs or parent section anchors.*

8. **Referral Management** (`/platform/referral-management`) — *Navigation dropdown item retained; page content deferred.*
9. **Telemedicine** (`/platform/telemedicine`) — *Navigation dropdown item retained; page content deferred.*
10. **Careers** (`/company/careers`) — *Navigation dropdown item retained; page content deferred until ATS link / listings confirmed.*
11. **Clinical Knowledge Graph** (`/intelligence/clinical-knowledge-graph`) — *Content definition required.*
12. **AI** (`/intelligence/ai`) — *Content definition required.*
13. **Predictive Intelligence** (`/intelligence/predictive-intelligence`) — *Content definition required.*
14. **Intelligent Workflows** (`/intelligence/intelligent-workflows`) — *Content definition required.*
15. **Human-in-the-Loop** (`/intelligence/human-in-the-loop`) — *Content definition required.*
16. **APIs / Mobile Integration** (`/data-integration/apis-mobile`) — *Content definition required.*
17. **Webinars** (`/resources/webinars`) — *Content definition required.*
18. **Product Tours** (`/resources/product-tours`) — *Content definition required.*
19. **Videos** (`/resources/videos`) — *Content definition required.*

### Tier Summary Check
- **Tier A Pages:** 7
- **Tier B Pages:** 12
- **Total New Sitemap Pages:** $7 + 12 = 19$ new pages.

---

## 6. PRODUCT PROFILE CLAIM VERIFICATION MATRIX

The following marketing and technical claims in the Product Profile must be verified by stakeholders prior to publishing on production pages. **Do not invent, strengthen, or un-verify these claims.**

| Claim Category | Specific Product Profile Claim | Verification Status Required |
| :--- | :--- | :--- |
| **Security & Trust** | SOC 2 Type II Certification Status | Confirm if report is active and available under NDA or completed. |
| **Security & Trust** | HITRUST CSF Certification Scope | Confirm whether HITRUST is Certified, Validated, or In-Process. |
| **Legal / Compliance** | HIPAA Compliance & Business Associate Agreement (BAA) | Ensure precise legal phrasing (e.g. "HIPAA Compliant Platform Architecture"). |
| **Artificial Intelligence** | Proprietary AI Models & NLP Engine | Verify whether models are internal proprietary, fine-tuned, or API-orchestrated. |
| **Predictive Analytics** | Predictive Readmission & Risk Stratification Accuracy | Confirm whether specific percentage accuracy claims require disclaimers. |
| **Conversational AI** | Conversational AI Agent for Patient Engagement | Verify if live in production or roadmap feature. |
| **Quality Reporting** | CMS Qualified Registry / MIPS Direct Submission | Verify official CMS registry status for direct electronic submission. |
| **Risk Adjustment** | Dual Support for CMS-HCC V24 and V28 Models | Confirm active dual-model calculation engine capabilities. |
| **Clinical Content** | "150+ Standardized Assessment Scales" | Confirm accuracy of assessment count. |
| **Data Feeds** | Direct BCDA (Bulk CCLF) and Direct HIE Feed Connectors | Confirm live standard integrations list. |
| **Financial / ROI Claims** | Specific ROI savings or percentage reduction in readmissions | Confirm all stat callouts are backed by customer case studies. |

---

## 7. ROUTE MIGRATION & REDIRECT STRATEGY

To preserve SEO authority and existing user bookmarks, the following canonical routes and `301` HTTP redirects will be established:

| Current Route | Proposed Final Route | Action Type | Redirect Required? |
| :--- | :--- | :--- | :--- |
| `/contact` | `/company/contact` | **LEGACY ALIAS** | **YES (Redirect to `/company/contact`)** |
| `/solutions/analytics-intelligence` | `/platform/analytics` | **RENAME/MOVE** | **YES (Redirect to `/platform/analytics`)** |
| `/solutions/population-health` | `/platform/population-health` | MOVE | YES |
| `/solutions/care-management` | `/platform/care-management` | MOVE | YES |
| `/solutions/risk-adjustment` | `/platform/risk-adjustment` | MOVE | YES |
| `/solutions/quality-performance` | `/platform/quality-care-gaps` | RENAME/MOVE | YES |
| `/solutions/patient-engagement` | `/platform/patient-engagement` | MOVE | YES |
| `/platform/data-integration` | `/data-integration/data-foundation` | RENAME/MOVE | YES |
| `/platform/data-enrichment` | `/data-integration/claims-integration` | MERGE/MOVE | YES |
| `/platform/information-services` | `/data-integration/clinical-integration` | MERGE/MOVE | YES |
| `/who-we-serve` | `/solutions` | REDIRECT | YES |
| `/who-we-serve/payers` | `/solutions/health-plans` | RENAME/MOVE | YES |
| `/who-we-serve/providers` | `/solutions/cin-provider-organizations` | RENAME/MOVE | YES |
| `/services` | `/solutions/care-management-teams` | REDIRECT | YES |
| `/services/account-executives` | `/solutions/care-management-teams` | MERGE | YES |
| `/services/risk-coders` | `/platform/risk-adjustment` | MERGE | YES |
| `/services/care-managers` | `/solutions/care-management-teams` | MERGE | YES |
| `/services/care-navigators` | `/solutions/care-management-teams` | MERGE | YES |
| `/why-guardian` | `/company` | RENAME | YES |
| `/why-guardian/about` | `/company/about` | MOVE | YES |
| `/why-guardian/our-story` | `/company/about` | MERGE | YES |
| `/why-guardian/healthcare-expertise` | `/company/about` | MERGE | YES |
| `/why-guardian/leadership` | `/company/leadership` | MOVE | YES |
| `/why-guardian/certifications-trust` | `/company/security-trust` | RENAME/MOVE | YES |

---

## 8. UTILITY ACTION AUDIT: LOGIN & SEE GUARDIAN

### Login Button Audit
- **Current Route / Target:** `https://live.itsguardian.com/` (Target `_blank`)
- **Status:** **KEPT EXACTLY AS CURRENTLY IMPLEMENTED.**
- **Instruction:** Do not remove, do not rename, do not redesign, and do not change destination.

### "See Guardian" CTA Audit
- **Current Destination:** Unassigned / STAKEHOLDER DECISION REQUIRED.
- **Instruction:** Leave as `STAKEHOLDER DECISION REQUIRED`. Do not invent a destination or implement a trigger until stakeholder specifies preferred behavior.

---

## AUDIT SUMMARY METRICS (VERIFIED FINAL)

- **CURRENT ROUTES IN CODEBASE:** 32
- **CURRENT ROUTE DISPOSITION:**
  - **KEEP:** 8
  - **RENAME:** 7
  - **MERGE:** 6
  - **MOVE:** 9
  - **REMOVE:** 2
- **APPROVED NEW SITEMAP PAGES:** 19
  - **TIER A IMPLEMENTATION READY PAGES:** 7
  - **TIER B DEFERRED CONTENT PAGES:** 12
- **FINALIZED DROPDOWN NAVIGATION TAXONOMY URLS:** 46
- **CLAIMS REQUIRING VERIFICATION:** 11
- **STAKEHOLDER DECISIONS REQUIRED:** 2

---

## FINAL APPROVAL SUMMARY

Phase 1 Information Architecture is **FINALIZED AND APPROVED FOR IMPLEMENTATION PLANNING**.

1. **Metrics Verified:** 100% mathematical consistency across route inventory, disposition tables, and page readiness tiers.
2. **Navigation Structure Locked:** The 7-link top nav and 39 dropdown sub-routes (46 total URLs) are locked.
3. **Referral Management, Telemedicine, & Careers Retained:** Kept in navigation taxonomy (`/platform/referral-management`, `/platform/telemedicine`, `/company/careers`).
4. **Product Profile Feature Inventory:** Embedded 9-category feature matrix on `/platform`.
5. **No UI Code Modified:** Frontend code in `src/` remains untouched until Phase 2 is launched.
