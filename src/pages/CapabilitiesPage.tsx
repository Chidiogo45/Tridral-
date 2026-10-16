import React from 'react';
import type { PageId } from '../types/index.ts';
import { ShieldAlert, Users, Network, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const CapabilitiesPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const capabilities = [
    {
      id: 'ato',
      title: 'Account Takeover Detection',
      mechanism:
        'Mechanism: Computes topological behavioral displacement when a trusted account suddenly associates with unfamiliar hardware entities and high-velocity counterparty nodes.',
      description:
        'When credentials are breached or SIM-swapping occurs, attackers bypass traditional OTP and static rule thresholds. Tridral detects that while the account credentials match, the topological link between the user, their device graph, and previous counterparty nodes has severed.',
      indicators: [
        'Sudden association with known mule destination nodes',
        'Abrupt shift in login hardware fingerprint alongside immediate liquidation transfers',
        'Simultaneous credential activity across conflicting network subnets',
        'Deviation from historical counterparty graph centrality',
      ],
      tag: 'Critical Vector',
    },
    {
      id: 'synthetic',
      title: 'Synthetic Identity Detection',
      mechanism:
        'Mechanism: Uncovers dense multi-entity clustering where distinct synthetic consumer profiles share subtle device attributes, recycled routing data, and micro-velocity patterns.',
      description:
        'Synthetic identities build clean credit profiles over months to evade KYC checks. Tridral exposes the hidden coordination: multiple unrelated accounts sharing proxy exit nodes, virtual bank identifiers, and synchronized application velocity across lending platforms.',
      indicators: [
        'Hidden graph clusters sharing hardware hashes across ostensibly unrelated profiles',
        'Coordinated balance-building and rapid synchronous cashout commands',
        'Recycling of common address, phone hash, and virtual bank routing elements',
        'Clustered repayment behaviors designed to spoof credit bureau scoring',
      ],
      tag: 'Hidden Vulnerability',
    },
    {
      id: 'mule',
      title: 'Mule-Network & Coordinated Fraud',
      mechanism:
        'Mechanism: Evaluates cycle detection, dispersion tree velocity, and rapid fan-out topologies across multi-tier accounts prior to settlement clearance.',
      description:
        'Organized syndicates disburse illicit funds through tiered networks of unwitting or complicit money mules. Tridral correlates transaction velocity across entire multi-hop chains, identifying dispersion patterns and circular laundering loops before money leaves the banking perimeter.',
      indicators: [
        'Rapid fan-out tree topologies (1 account dispersing into 8 mules within 90 seconds)',
        'Immediate cash-out velocity to offshore virtual asset service providers (VASPs)',
        'Cyclic fund routing designed to confuse traditional linear transaction rules',
        'Cross-merchant and cross-institution graph correlation',
      ],
      tag: 'Syndicate Defense',
    },
    {
      id: 'scoring',
      title: 'Real-Time Risk Scoring',
      mechanism:
        'Mechanism: Generates continuous 0-100 anomaly scores via in-memory vector embeddings dispatched via sub-45ms webhook callbacks to payment gateways.',
      description:
        'Static binary rules (allow/deny) generate high false decline rates that alienate legitimate spenders. Tridral outputs granular 0-100 scores with deterministic reason strings and confidence metrics, enabling tiered actions: seamless clearance, 2FA challenge, or pre-settlement hold.',
      indicators: [
        'Sub-45ms end-to-end evaluation SLA for real-time payment rails',
        'Granular confidence scoring (0.0 to 1.0) paired with every decision',
        'Deterministic reason codes explaining exact graph anomalies for compliance auditing',
        'Configurable risk tier thresholds aligned with institutional risk appetite',
      ],
      tag: 'Core Engine',
    },
  ];

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Targeted Detection
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Four focused capabilities. No generic feature bloat.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We focus exclusively on transaction-graph anomaly detection where coordinated networks
            defeat static rules. Each capability is backed by a specific graph-modeling mechanism.
          </p>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        {capabilities.map((cap, idx) => (
          <div
            key={cap.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs hover:border-slate-300 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#2F5FFF]">0{idx + 1}</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {cap.tag}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-sans">
                  {cap.title}
                </h2>

                {/* Explicit Mechanism highlight */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-[#0B0F1A] font-mono text-xs leading-relaxed">
                  <span className="font-bold text-[#2F5FFF] block mb-1">DETECTION MECHANISM</span>
                  {cap.mechanism}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-1">{cap.description}</p>
              </div>

              <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                  Key Topological Markers
                </h4>
                <ul className="space-y-2.5">
                  {cap.indicators.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Next Step Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#0B0F1A] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-normal font-display">
            Verify detection against your historical transaction logs.
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Provide an anonymized batch of historical transactions. We will run our graph models
            and demonstrate the fraud rings missed by your current rules engine.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-xl bg-[#2F5FFF] text-white font-medium text-xs hover:bg-blue-600 transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
            >
              Request Backtesting Evaluation &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
