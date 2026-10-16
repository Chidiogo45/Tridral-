import React from 'react';
import type { PageId } from '../types/index.ts';
import { ArrowRight, ShieldCheck, Terminal, Compass, Layers } from 'lucide-react';

export const AboutPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Origins & Philosophy
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Why we built Tridral.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A note from the founders on the fundamental flaw in modern transaction fraud detection,
            and why relational graphs are the only math capable of solving coordinated financial crime.
          </p>
        </div>
      </section>

      {/* Founder Note Essay Block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-8 text-left">
          {/* Note metadata */}
          <div className="border-b border-slate-100 pb-6 flex items-center justify-between text-xs text-slate-500">
            <div>
              <span className="font-semibold text-slate-900">Founding Engineering Note</span>
              <span className="mx-2">·</span>
              <span>Architectural Rationale</span>
            </div>
            <div className="font-mono text-teal-600">Global Financial Infrastructure</div>
          </div>

          {/* Section 1: The Problem Observed */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 font-sans">
              1. The problem we observed
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Every modern fintech engineering team we spoke with was fighting 2026 fraud syndicates
              with 2008 architecture.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Organized fraud is no longer an isolated attacker typing bad credit card numbers into a
              checkout form. Today, financial crime is industrialized. Syndicates open dozens of
              mule accounts across digital banks, harvest synthetic identity fragments over quarters,
              and coordinate sudden, multi-hop liquidity sweeps that clear faster than humans can
              review.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Meanwhile, traditional fraud tooling still evaluates transactions as solitary events
              against static lists of rules: <em>&quot;If amount &gt; $2,000 AND IP is new, flag.&quot;</em>
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Syndicates simply disperse $1,900 across ten accounts within forty seconds. To a static
              rule engine, every single one of those transactions looks completely benign. By the
              time batch reconciliation runs the next morning, the money has crossed borders, converted
              into untraceable assets, and settled. Recovery rates are near zero.
            </p>
          </div>

          {/* Section 2: Why Rule Engines Collapse */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 font-sans">
              2. Why adding more rules makes the problem worse
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              When rule engines miss fraud, teams write more rules. Within eighteen months, risk
              operations teams find themselves maintaining hundreds of conflicting boolean rules.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              The inevitable result is false-decline bloat. Legitimate customers get blocked when
              buying gifts or traveling. Friction increases, conversion plummets, and actual fraud
              rings still slip through the seams between disconnected rules.
            </p>
          </div>

          {/* Section 3: The Graph Approach */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 font-sans">
              3. The approach we took: Transaction-Graph Modeling
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Fraud is not a property of a single transaction. Fraud is a property of the network.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              We built Tridral to treat transactions as edges in a living, evolving entity graph. When
              an authorization request hits our API, our engine does not look at the dollar amount in a
              vacuum. It evaluates the surrounding topology:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
              <li>Has this device fingerprint been associated with other accounts in the past 120 seconds?</li>
              <li>Is this transfer part of a rapid fan-out dispersion tree?</li>
              <li>Does the counterparty node exhibit circular laundering loop characteristics?</li>
            </ul>
            <p className="text-base text-slate-700 leading-relaxed pt-2">
              Crucially, we spent eighteen months optimizing our core engine in C++ so these multi-hop
              graph traversals execute in <strong>under 45 milliseconds</strong>. That means decisions
              are delivered synchronously before transactions clear.
            </p>
          </div>

          {/* Founder sign-off */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div>
              <span className="font-semibold text-slate-900 block text-sm">Tridral Engineering Team</span>
              <span className="text-slate-500">Autonomous Transaction Security</span>
            </div>
            <div className="text-slate-400 font-mono">Published for Global Partners</div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 font-display">
            Our engineering principles.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
            <span className="text-xs font-mono text-[#2F5FFF] font-bold">PRINCIPLE 01</span>
            <h3 className="text-base font-semibold text-slate-900 font-sans">
              Pre-settlement or nothing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detection after settlement is just expensive bookkeeping. If our system cannot
              evaluate a transaction before it settles, it has failed its primary duty.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
            <span className="text-xs font-mono text-teal-600 font-bold">PRINCIPLE 02</span>
            <h3 className="text-base font-semibold text-slate-900 font-sans">
              No black boxes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Risk officers and compliance auditors cannot accept an unexplained number from an opaque
              model. Every flag must output the exact entity graph and plain-text mechanism.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
            <span className="text-xs font-mono text-indigo-600 font-bold">PRINCIPLE 03</span>
            <h3 className="text-base font-semibold text-slate-900 font-sans">
              Zero PII exposure
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We model topology, not personal identities. We intentionally design our graph to operate
              on anonymized hashes, protecting end-user privacy by mathematical guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => onNavigate('quote')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2F5FFF] text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
        >
          <span>Schedule an engineering briefing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
