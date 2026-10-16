import React, { useState } from 'react';
import type { PageId } from '../types/index.ts';
import { CheckCircle2, Clock, Compass, ArrowRight } from 'lucide-react';

export const RoadmapPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'current' | 'near-term' | 'direction'>('all');

  const roadmapItems = [
    // Current Platform
    {
      stage: 'current',
      category: 'In-Memory Graph Core',
      title: 'Real-time multi-hop graph traversal engine (C++)',
      status: 'Functional Today',
      description:
        'Sub-45ms P99 latency SLA for real-time payments across 4 degrees of separation. Handles up to 100K transactions/sec.',
      specs: ['Distributed RAM clustering', 'Dynamic edge decay', 'HMAC tokenized node IDs'],
    },
    {
      stage: 'current',
      category: 'Detection Models',
      title: 'Mule network & coordinated dispersion tree detection',
      status: 'Functional Today',
      description:
        'Flags rapid fan-out dispersion patterns, cyclic fund loops, and multi-account hardware clustering.',
      specs: ['Deterministic confidence metric', 'Pre-settlement webhook', 'Plain-text reason codes'],
    },
    {
      stage: 'current',
      category: 'Integrations',
      title: 'REST API, Kafka topic consumers, & Webhook dispatchers',
      status: 'Functional Today',
      description:
        'Standard JSON event payloads for instant ACH, SEPA, card authorizations, and internal ledger transfers.',
      specs: ['HMAC SHA-256 signatures', 'Idempotent deduplication', 'TLS 1.3 mutual auth'],
    },

    // Ongoing Improvements
    {
      stage: 'near-term',
      category: 'Model Upgrades',
      title: 'Cross-institution anonymized federated graph learning',
      status: 'Near-Term Work',
      description:
        'Enables participating digital banks to detect cross-rail mule syndicates without sharing raw transaction records or customer data.',
      specs: ['Differential privacy guarantees', 'Encrypted vector sharing', 'Zero PII exchange'],
    },
    {
      stage: 'near-term',
      category: 'Operations',
      title: 'Visual fraud analyst investigation canvas',
      status: 'Near-Term Work',
      description:
        'Interactive web console for risk and compliance analysts to inspect flagged subgraphs, expand entity nodes, and export SAR dossiers.',
      specs: ['One-click SAR/STR narrative generator', 'Time-slider replay', 'Sub-graph export (JSON/CSV)'],
    },
    {
      stage: 'near-term',
      category: 'Core Protocols',
      title: 'Native ISO 20022 MX message stream parser',
      status: 'Near-Term Work',
      description:
        'Direct zero-overhead parsing of pacs.008, pacs.002, and camt.053 message flows for tier-1 clearing banks.',
      specs: ['Zero GC XML/JSON parser', 'Embedded routing correlation', 'FedNow & SEPA Instant ready'],
    },

    // Product Direction
    {
      stage: 'direction',
      category: 'Global Rails',
      title: 'Multi-jurisdictional pre-clearing sanctions & AML screening',
      status: 'Product Direction',
      description:
        'Correlating global PEP, OFAC, and regional law enforcement watchlists directly inside the transaction graph.',
      specs: ['Fuzzy phonetic entity matching', 'Indirect entity linkage', 'Automated STR audit trail'],
    },
    {
      stage: 'direction',
      category: 'Autonomous Response',
      title: 'Self-tuning institutional risk appetite policies',
      status: 'Product Direction',
      description:
        'Algorithmic adjustment of hold thresholds based on seasonal shopping peaks, merchant chargeback ratios, and clearing liquidity.',
      specs: ['Backtested policy simulation', 'Liquidity buffer optimization', 'Drift detection'],
    },
  ];

  const filtered =
    filter === 'all' ? roadmapItems : roadmapItems.filter((item) => item.stage === filter);

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Platform Trajectory
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Tridral engineering roadmap.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            What is operational in production today, what our core systems team is shipping in the
            near term, and where our transaction-graph research is headed.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-lg max-w-md border border-slate-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter('current')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'current'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Functional Today
          </button>
          <button
            onClick={() => setFilter('near-term')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'near-term'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Near-Term Work
          </button>
          <button
            onClick={() => setFilter('direction')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'direction'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Product Direction
          </button>
        </div>
      </section>

      {/* Roadmap Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => {
            const isCurrent = item.stage === 'current';
            const isNearTerm = item.stage === 'near-term';

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
                      {item.category}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold ${
                        isCurrent
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : isNearTerm
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-purple-50 text-purple-700 border border-purple-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 font-sans mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technical Specifications
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((sp, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Suggest feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-900 font-sans">
            Have a custom clearing rail or protocol requirement?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our engineering team collaborates directly with pilot fintechs on bespoke adapters and
            graph topologies.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="text-xs font-semibold text-[#2F5FFF] hover:underline cursor-pointer"
            >
              Discuss technical architecture with our founders &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
