import React from 'react';
import { Logo } from './Logo.tsx';
import type { PageId } from '../types/index.ts';
import { Shield, Activity, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F1A] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="text-white">
              <Logo size="md" textColor="text-white" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Real-time transaction-graph anomaly detection for digital banks, fintechs, and payment
              processors. Intercept coordinated mule networks and account takeover before settlement.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => handleNav('status')}
                className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-md border border-emerald-800/40 hover:bg-emerald-900/40 transition-colors cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Systems Operational (p99 &lt; 38ms)</span>
              </button>
            </div>
          </div>

          {/* Col 1: Platform & Technology */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('platform')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Core Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('capabilities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('architecture')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Volume Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Research & Technical */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Research & Tech
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('graph-detection')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Case for Graph Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('integrations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Integrations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('roadmap')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Product Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('compliance')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Compliance & AML/CFT
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Governance & Access
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Tridral
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('trust')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trust Center & Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('status')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Status Console
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quote')}
                  className="hover:text-teal-400 font-semibold transition-colors cursor-pointer"
                >
                  Get a Quote / Pilot &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Tridral Technologies Inc.</span>
            <span>·</span>
            <span>Globally distributed transaction graph infrastructure</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('trust')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Security Policy
            </button>
            <button
              onClick={() => handleNav('trust')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Data Handling
            </button>
            <button
              onClick={() => handleNav('quote')}
              className="hover:text-slate-200 transition-colors cursor-pointer font-medium text-teal-400"
            >
              Contact Engineering
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
