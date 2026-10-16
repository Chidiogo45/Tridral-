import React from 'react';
import { LiveFlagCard } from '../components/LiveFlagCard.tsx';
import { TransactionGraphVisual } from '../components/TransactionGraphVisual.tsx';
import type { PageId } from '../types/index.ts';
import {
  ArrowRight,
  ShieldAlert,
  Network,
  Zap,
  Building2,
  CreditCard,
  Wallet,
  CheckCircle,
  Activity,
  Layers,
  Terminal,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#EFF4FB]">
        {/* Subtle graph background lattice */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, subhead, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Unboxed category label */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wider text-[#2F5FFF] uppercase">
                <span>Real-Time Graph Intelligence</span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <span>Pre-Settlement Intercept</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0B0F1A] font-display leading-[1.12] tracking-tight">
                Detect coordinated fraud before transactions settle.
              </h1>

              <p className="text-lg sm:text-xl text-[#5B6472] font-normal leading-relaxed max-w-2xl">
                Tridral connects to your transaction pipeline via API. Our transaction-graph model
                correlates accounts, devices, and behavior patterns in real time to stop account
                takeover, synthetic identities, and mule networks in under 45 milliseconds.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('quote')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F5FFF] text-white font-medium text-sm hover:bg-blue-600 active:scale-98 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  <span>Request pilot access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-medium text-sm border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                >
                  <span>See how it works</span>
                </button>
              </div>

              {/* Adjacency proof: concrete quantitative indicators */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B0F1A] text-sm tabular-nums">&lt; 45ms</span>
                  <span>in-flight evaluation SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B0F1A] text-sm tabular-nums">0</span>
                  <span>core ledger changes required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B0F1A] text-sm tabular-nums">100%</span>
                  <span>deterministic graph explainability</span>
                </div>
              </div>
            </div>

            {/* Right Column: Revised Live Flag Product Card Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <LiveFlagCard onExploreMore={() => onNavigate('platform')} />
            </div>
          </div>
        </div>
      </section>

      {/* Capability Snapshot Row: Detect / Correlate / Act */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2F5FFF] flex items-center justify-center shrink-0 font-display font-semibold text-base">
                01
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-slate-900 font-sans">
                  Detect in real time
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ingest incoming authorization requests asynchronously. Score velocity, device
                  fingerprints, and amount anomalies before money moves.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 font-display font-semibold text-base">
                02
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-slate-900 font-sans">
                  Correlate across entities
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Traverse connected nodes across accounts, cards, proxies, and hardware entities to
                  expose coordinated mule syndicates.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-display font-semibold text-base">
                03
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-slate-900 font-sans">
                  Act before settlement
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct webhook verdicts directly into your payment gateway or ledger. Hold, review,
                  or decline without interrupting legitimate customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section: Why Static Rules Fail */}
      <section className="py-20 md:py-28 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider mb-2">
              The Fraud Vulnerability
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-display">
              Modern fraud attacks happen across networks, not isolated transactions.
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Static rules check whether a single transaction exceeds an amount threshold or comes
              from an unfamiliar IP. Organized syndicates exploit this blind spot by fragmenting
              amounts across dozens of coordinated accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Account Takeover */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Pattern 01</span>
                <span className="text-xs text-rose-600 font-medium">Critical Threat</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Account takeover (ATO)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Attackers use credential stuffing and session hijacking to compromise valid accounts.
                Static rules see a verified account; Tridral detects sudden shifts in device
                association, routing velocity, and counterparty graph topology.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2F5FFF]">
                Graph mechanism: sudden edge re-weighting on trusted nodes
              </div>
            </div>

            {/* Card 2: Synthetic Identities */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Pattern 02</span>
                <span className="text-xs text-rose-600 font-medium">Under-the-radar</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Synthetic identities</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fraud rings stitch real and fabricated credentials to build clean credit histories over
                months before cashing out simultaneously. Tridral spots the hidden linkage clusters:
                shared device fingerprints, cyclic payment routing, and common proxy subnets.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2F5FFF]">
                Graph mechanism: dense entity clustering across unrelated identity pools
              </div>
            </div>

            {/* Card 3: Mule Networks */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Pattern 03</span>
                <span className="text-xs text-rose-600 font-medium">Complex Ring</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Coordinated mule networks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stolen funds are dispersed rapidly through fan-out layers of mule accounts before
                withdrawing at crypto exchanges or offshore cards. Tridral maps the flow structure in
                real time, stopping multi-hop egress before completion.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2F5FFF]">
                Graph mechanism: cycle detection and rapid dispersion tree analysis
              </div>
            </div>

            {/* Card 4: Post-Settlement Lag */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase">Pattern 04</span>
                <span className="text-xs text-amber-600 font-medium">Structural Lag</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Delayed post-settlement detection</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Legacy fraud tools analyze batch data hours or days after transactions clear. Once
                funds settle across borders, recovery rates drop below 6%. Tridral delivers decisions
                in-flight, prior to clearing.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2F5FFF]">
                Graph mechanism: sub-45ms in-memory graph traversal via optimized C++ engine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Transaction-Graph Section */}
      <section className="py-20 md:py-28 bg-[#0B0F1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
                Under the Hood
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-white font-display">
                How transaction-graph modeling sees what static rules miss.
              </h2>
              <p className="text-base text-slate-400 mt-3 leading-relaxed">
                Explore an actual in-flight subgraph below. Notice how isolated transactions appear
                benign until their shared hardware entity and rapid cycle velocity are correlated.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('graph-detection')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-teal-300 text-xs font-medium hover:bg-slate-700 transition-colors border border-slate-700 cursor-pointer"
              >
                <span>Read the technical graph whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <TransactionGraphVisual />
        </div>
      </section>

      {/* How It Works Preview (Condensed 4-step sequence) */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider mb-2">
              Implementation Flow
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-display">
              Four steps from API connection to pre-settlement defense.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#2F5FFF] font-semibold">STEP 01</span>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">Connect</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect your authorization stream via single REST endpoint or Kafka topic. No changes
                to existing payment gateways.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-teal-600 font-semibold">STEP 02</span>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">Correlate</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every transaction maps into a live graph of accounts, devices, and behavior patterns
                in real time.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-indigo-600 font-semibold">STEP 03</span>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">Explain</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Flags include plain-language rationale: exact pattern type, confidence level, and
                affected subgraphs.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-600 font-semibold">STEP 04</span>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">Act</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hold, block, or release before settlement. Your risk operations team retains full
                policy control.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5FFF] hover:text-blue-700 cursor-pointer"
            >
              <span>Explore the full technical walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Built For / Audience Section */}
      <section className="py-20 md:py-28 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider mb-2">
              Audience & Scale
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-display">
              Built for high-velocity transaction infrastructure.
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Designed for institutions where transaction volumes make manual review impossible and
              settlement lag is unacceptable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2F5FFF] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Digital banks & neobanks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protect customer accounts from ATO without adding friction to legitimate mobile
                logins. Expose internal mule rings across newly opened consumer accounts.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Key fit: Instant ACH / SEPA / Faster Payments pre-settlement
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Payment processors & gateways</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Detect card testing, merchant fraud, and synthetic account cashouts across tens of
                thousands of concurrent merchants at scale.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Key fit: Multi-merchant graph correlation & chargeback defense
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 font-sans">Fintech lenders & microfinance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Identify coordinated loan application rings recycling identity attributes, burner
                bank accounts, and device fingerprints during onboarding.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500">
                Key fit: Disbursement-stage fraud interception
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2F5FFF]">
            Start Evaluating Your Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-slate-900 font-display max-w-3xl mx-auto leading-tight">
            Stop losing funds to coordinated fraud rings.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Run Tridral in shadow mode alongside your existing pipeline. Test detection accuracy
            against historical data or live traffic without operational risk.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2F5FFF] text-white font-medium text-sm hover:bg-blue-600 active:scale-98 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              Request pilot access
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-100 text-slate-800 font-medium text-sm hover:bg-slate-200 transition-colors cursor-pointer"
            >
              View volume pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
