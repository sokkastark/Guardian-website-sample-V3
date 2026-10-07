import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Primary Landing & Category Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PlatformPage from './pages/PlatformPage';
import IntelligencePage from './pages/IntelligencePage';
import DataIntegrationOverviewPage from './pages/DataIntegrationOverviewPage';
import CompanyOverviewPage from './pages/CompanyOverviewPage';
import WhyGuardianPage from './pages/WhyGuardianPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

// Tier A Implemented Pages
import Patient360Page from './pages/platform/Patient360Page';
import RiskStratificationPage from './pages/platform/RiskStratificationPage';
import TransitionsOfCarePage from './pages/platform/TransitionsOfCarePage';
import ACOValueBasedCarePage from './pages/solutions/ACOValueBasedCarePage';
import CareManagementTeamsPage from './pages/solutions/CareManagementTeamsPage';
import HIEADTPage from './pages/data-integration/HIEADTPage';
import LabsPharmacyPage from './pages/data-integration/LabsPharmacyPage';

// Tier B Implemented Pages
import ReferralManagementPage from './pages/platform/ReferralManagementPage';
import TelemedicinePage from './pages/platform/TelemedicinePage';
import ClinicalKnowledgeGraphPage from './pages/intelligence/ClinicalKnowledgeGraphPage';
import AIPage from './pages/intelligence/AIPage';
import PredictiveIntelligencePage from './pages/intelligence/PredictiveIntelligencePage';
import IntelligentWorkflowsPage from './pages/intelligence/IntelligentWorkflowsPage';
import HumanInTheLoopPage from './pages/intelligence/HumanInTheLoopPage';
import APIsMobilePage from './pages/data-integration/APIsMobilePage';
import WebinarsPage from './pages/resources/WebinarsPage';
import ProductToursPage from './pages/resources/ProductToursPage';
import VideosPage from './pages/resources/VideosPage';
import CareersPage from './pages/company/CareersPage';

// Capability & Feature Pages
import PopulationHealthPage from './pages/platform/PopulationHealthPage';
import AnalyticsPage from './pages/platform/AnalyticsPage';
import CareManagementPage from './pages/platform/CareManagementPage';
import RiskAdjustmentPage from './pages/platform/RiskAdjustmentPage';
import QualityCareGapsPage from './pages/platform/QualityCareGapsPage';
import PatientEngagementPage from './pages/platform/PatientEngagementPage';

// Integration & Data Pages
import DataIntegrationPage from './pages/platform/DataIntegrationPage';
import DataEnrichmentPage from './pages/platform/DataEnrichmentPage';
import InformationServicesPage from './pages/platform/InformationServicesPage';
import PatientIntelligencePage from './pages/platform/PatientIntelligencePage';

// Audience / Segment Pages
import ProvidersPage from './pages/who-we-serve/ProvidersPage';
import PayersPage from './pages/who-we-serve/PayersPage';
import ServicesPage from './pages/ServicesPage';

// Company & Trust Pages
import AboutPage from './pages/why-guardian/AboutPage';
import LeadershipPage from './pages/why-guardian/LeadershipPage';
import CertificationsTrustPage from './pages/why-guardian/CertificationsTrustPage';

// Resources Pages
import InsightsPage from './pages/resources/InsightsPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import GuidesPage from './pages/resources/GuidesPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#35304c] flex flex-col selection:bg-[#f2ecf9] selection:text-[#7b3fc7]">
        {/* Sticky Global Navigation */}
        <Header />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            {/* ── TOP-LEVEL CANONICAL HUB ROUTES ── */}
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/intelligence" element={<IntelligencePage />} />
            <Route path="/data-integration" element={<DataIntegrationOverviewPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/company" element={<CompanyOverviewPage />} />

            {/* ── PLATFORM CANONICAL ROUTES ── */}
            <Route path="/platform/population-health" element={<PopulationHealthPage />} />
            <Route path="/platform/analytics" element={<AnalyticsPage />} />
            <Route path="/platform/patient-intelligence" element={<PatientIntelligencePage />} />
            <Route path="/platform/patient-intelligence/patient-360" element={<Patient360Page />} />
            <Route path="/platform/risk-stratification" element={<RiskStratificationPage />} />
            <Route path="/platform/risk-adjustment" element={<RiskAdjustmentPage />} />
            <Route path="/platform/quality-care-gaps" element={<QualityCareGapsPage />} />
            <Route path="/platform/care-management" element={<CareManagementPage />} />
            <Route path="/platform/transitions-of-care-adt" element={<TransitionsOfCarePage />} />
            <Route path="/platform/referral-management" element={<ReferralManagementPage />} />
            <Route path="/platform/patient-engagement" element={<PatientEngagementPage />} />
            <Route path="/platform/telemedicine" element={<TelemedicinePage />} />

            {/* ── SOLUTIONS CANONICAL ROUTES ── */}
            <Route path="/solutions/aco-value-based-care" element={<ACOValueBasedCarePage />} />
            <Route path="/solutions/health-plans" element={<PayersPage />} />
            <Route path="/solutions/cin-provider-organizations" element={<ProvidersPage />} />
            <Route path="/solutions/care-management-teams" element={<CareManagementTeamsPage />} />

            {/* ── INTELLIGENCE CANONICAL ROUTES (TIER B) ── */}
            <Route path="/intelligence/clinical-knowledge-graph" element={<ClinicalKnowledgeGraphPage />} />
            <Route path="/intelligence/ai" element={<AIPage />} />
            <Route path="/intelligence/predictive-intelligence" element={<PredictiveIntelligencePage />} />
            <Route path="/intelligence/intelligent-workflows" element={<IntelligentWorkflowsPage />} />
            <Route path="/intelligence/human-in-the-loop" element={<HumanInTheLoopPage />} />

            {/* ── DATA & INTEGRATION CANONICAL ROUTES ── */}
            <Route path="/data-integration/clinical-integration" element={<InformationServicesPage />} />
            <Route path="/data-integration/claims-integration" element={<DataEnrichmentPage />} />
            <Route path="/data-integration/hie-adt" element={<HIEADTPage />} />
            <Route path="/data-integration/labs-pharmacy-other" element={<LabsPharmacyPage />} />
            <Route path="/data-integration/data-foundation" element={<DataIntegrationPage />} />
            <Route path="/data-integration/apis-mobile" element={<APIsMobilePage />} />

            {/* ── RESOURCES CANONICAL ROUTES ── */}
            <Route path="/resources/insights" element={<InsightsPage />} />
            <Route path="/resources/guides" element={<GuidesPage />} />
            <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources/webinars" element={<WebinarsPage />} />
            <Route path="/resources/product-tours" element={<ProductToursPage />} />
            <Route path="/resources/videos" element={<VideosPage />} />

            {/* ── COMPANY CANONICAL ROUTES ── */}
            <Route path="/company/about" element={<AboutPage />} />
            <Route path="/company/leadership" element={<LeadershipPage />} />
            <Route path="/company/security-trust" element={<CertificationsTrustPage />} />
            <Route path="/company/careers" element={<CareersPage />} />
            <Route path="/company/contact" element={<ContactPage />} />

            {/* ── LEGACY REDIRECTS (APPROVED MIGRATION MATRIX) ── */}
            <Route path="/contact" element={<Navigate to="/company/contact" replace />} />
            <Route path="/solutions/analytics-intelligence" element={<Navigate to="/platform/analytics" replace />} />
            <Route path="/solutions/population-health" element={<Navigate to="/platform/population-health" replace />} />
            <Route path="/solutions/care-management" element={<Navigate to="/platform/care-management" replace />} />
            <Route path="/solutions/risk-adjustment" element={<Navigate to="/platform/risk-adjustment" replace />} />
            <Route path="/solutions/quality-performance" element={<Navigate to="/platform/quality-care-gaps" replace />} />
            <Route path="/solutions/patient-engagement" element={<Navigate to="/platform/patient-engagement" replace />} />
            <Route path="/platform/data-integration" element={<Navigate to="/data-integration/data-foundation" replace />} />
            <Route path="/platform/data-enrichment" element={<Navigate to="/data-integration/claims-integration" replace />} />
            <Route path="/platform/information-services" element={<Navigate to="/data-integration/clinical-integration" replace />} />
            <Route path="/who-we-serve" element={<Navigate to="/solutions" replace />} />
            <Route path="/who-we-serve/payers" element={<Navigate to="/solutions/health-plans" replace />} />
            <Route path="/who-we-serve/providers" element={<Navigate to="/solutions/cin-provider-organizations" replace />} />
            <Route path="/services" element={<Navigate to="/solutions/care-management-teams" replace />} />
            <Route path="/services/account-executives" element={<Navigate to="/solutions/care-management-teams" replace />} />
            <Route path="/services/risk-coders" element={<Navigate to="/platform/risk-adjustment" replace />} />
            <Route path="/services/care-managers" element={<Navigate to="/solutions/care-management-teams" replace />} />
            <Route path="/services/care-navigators" element={<Navigate to="/solutions/care-management-teams" replace />} />
            <Route path="/why-guardian" element={<Navigate to="/company" replace />} />
            <Route path="/why-guardian/about" element={<Navigate to="/company/about" replace />} />
            <Route path="/why-guardian/our-story" element={<Navigate to="/company/about" replace />} />
            <Route path="/why-guardian/healthcare-expertise" element={<Navigate to="/company/about" replace />} />
            <Route path="/why-guardian/leadership" element={<Navigate to="/company/leadership" replace />} />
            <Route path="/why-guardian/certifications-trust" element={<Navigate to="/company/security-trust" replace />} />
            <Route path="/careers" element={<Navigate to="/company/careers" replace />} />

            {/* Fallback Catch-All Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
