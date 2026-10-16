import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import type { PageId } from '../types/index.ts';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryLinks: { id: PageId; label: string }[] = [
    { id: 'platform', label: 'Platform' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const secondaryLinks: { id: PageId; label: string; desc: string }[] = [
    { id: 'graph-detection', label: 'Case for Graph Detection', desc: 'Technical whitepaper on graph vs rule-based engines' },
    { id: 'compliance', label: 'Compliance & AML/CFT', desc: 'Regulatory fit for AML, SAR filings, and sanctions' },
    { id: 'integrations', label: 'Integrations', desc: 'Pre-built connectors for payment rails and core ledgers' },
    { id: 'roadmap', label: 'Roadmap', desc: 'Current features, near-term work, and platform direction' },
    { id: 'about', label: 'About Tridral', desc: 'Founder note on solving cross-institution fraud rings' },
    { id: 'trust', label: 'Trust Center', desc: 'Security protocols, privacy policy, and responsible AI' },
    { id: 'status', label: 'System Status', desc: 'Live API uptime, cluster health, and latency metrics' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single element brand wordmark + mark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5FFF] rounded-md"
          aria-label="Tridral Home"
        >
          <Logo size="md" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {primaryLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#2F5FFF] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F5FFF] rounded-full" />
                )}
              </button>
            );
          })}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
              className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer py-1 ${
                [
                  'graph-detection',
                  'compliance',
                  'integrations',
                  'roadmap',
                  'about',
                  'trust',
                  'status',
                ].includes(currentPage)
                  ? 'text-[#2F5FFF] font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-expanded={dropdownOpen}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 rounded-xl bg-white border border-slate-200 shadow-xl p-2 z-50">
                <div className="py-1">
                  {secondaryLinks.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(sub.id)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex flex-col cursor-pointer ${
                        currentPage === sub.id
                          ? 'bg-blue-50/70 text-[#2F5FFF]'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span className="font-semibold">{sub.label}</span>
                      <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                        {sub.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('quote')}
            className={`px-4.5 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-xs ${
              currentPage === 'quote'
                ? 'bg-[#2F5FFF] text-white shadow-md shadow-blue-500/20'
                : 'bg-[#0B0F1A] text-white hover:bg-slate-800 active:scale-98'
            }`}
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('quote')}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0B0F1A] text-white cursor-pointer"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-none rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="px-4 py-5 space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
              Core Platform
            </div>
            {primaryLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-blue-50 text-[#2F5FFF] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {currentPage === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F5FFF]" />
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                Deep Dive & Company
              </div>
              {secondaryLinks.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleNavClick(sub.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    currentPage === sub.id
                      ? 'bg-blue-50 text-[#2F5FFF] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{sub.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 pb-2">
              <button
                onClick={() => handleNavClick('quote')}
                className="w-full py-3 rounded-lg bg-[#2F5FFF] text-white font-medium text-sm text-center shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Request Pilot / Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
