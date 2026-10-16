import React, { useState, useEffect } from 'react';
import type { PageId } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { PlatformPage } from './pages/PlatformPage.tsx';
import { HowItWorksPage } from './pages/HowItWorksPage.tsx';
import { ArchitecturePage } from './pages/ArchitecturePage.tsx';
import { CapabilitiesPage } from './pages/CapabilitiesPage.tsx';
import { RoadmapPage } from './pages/RoadmapPage.tsx';
import { PricingPage } from './pages/PricingPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { QuotePage } from './pages/QuotePage.tsx';
import { CompliancePage } from './pages/CompliancePage.tsx';
import { IntegrationsPage } from './pages/IntegrationsPage.tsx';
import { GraphDetectionPage } from './pages/GraphDetectionPage.tsx';
import { TrustCenterPage } from './pages/TrustCenterPage.tsx';
import { StatusPage } from './pages/StatusPage.tsx';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').trim();
    const validPages: PageId[] = [
      'home',
      'platform',
      'how-it-works',
      'architecture',
      'capabilities',
      'roadmap',
      'pricing',
      'about',
      'quote',
      'compliance',
      'integrations',
      'graph-detection',
      'trust',
      'status',
    ];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'platform':
        return <PlatformPage onNavigate={handleNavigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case 'architecture':
        return <ArchitecturePage onNavigate={handleNavigate} />;
      case 'capabilities':
        return <CapabilitiesPage onNavigate={handleNavigate} />;
      case 'roadmap':
        return <RoadmapPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'quote':
        return <QuotePage onNavigate={handleNavigate} />;
      case 'compliance':
        return <CompliancePage onNavigate={handleNavigate} />;
      case 'integrations':
        return <IntegrationsPage onNavigate={handleNavigate} />;
      case 'graph-detection':
        return <GraphDetectionPage onNavigate={handleNavigate} />;
      case 'trust':
        return <TrustCenterPage onNavigate={handleNavigate} />;
      case 'status':
        return <StatusPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#0B0F1A] font-sans selection:bg-[#2F5FFF]/20 selection:text-[#2F5FFF]">
      {/* Fixed Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {renderPage()}
      </main>

      {/* Persistent Footer with links to all 14 pages */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
