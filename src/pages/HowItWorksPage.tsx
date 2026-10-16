import React, { useState } from 'react';
import type { PageId } from '../types/index.ts';
import { ArrowRight, Check, Code2, Cpu, Network, ShieldCheck } from 'lucide-react';

export const HowItWorksPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Connect',
      subtitle: 'Stream events via a single unified API',
      summary:
        'Plug into your transaction pipeline via REST API, Kafka consumer, or ISO 20022 webhook. Tridral requires zero changes to your core banking ledger or payment rails.',
      bullets: [
        'Ingest transaction authorizations in < 8ms',
        'Standard JSON schemas for card, bank transfer, and instant ACH/SEPA',
        'Built-in idempotent event deduplication and TLS 1.3 encryption',
        'Zero PII required: accepts tokenized account references and hashed hardware fingerprints',
      ],
      codeSample: `{
  "event_id": "evt_91024_auth",
  "source_account_ref": "acc_tok_9918",
  "target_account_ref": "acc_tok_4412",
  "amount_minor_units": 240000,
  "currency": "EUR",
  "device_fingerprint": "fp_sha256_88c42b",
  "ip_subnet": "198.51.100.0/24",
  "timestamp": "2026-10-16T18:24:01.120Z"
}`,
    },
    {
      num: '02',
      title: 'Correlate',
      subtitle: 'Map every transaction into a live multi-hop graph',
      summary:
        'Rather than storing events as flat database rows, Tridral instantly binds the transaction into an in-memory graph. Entities (accounts, devices, routing points) form connected nodes.',
      bullets: [
        'Traverses up to 4 degrees of separation in sub-15ms',
        'Detects shared hardware across unassociated customer profiles',
        'Identifies rapid cycle loops (Account A -> B -> C -> A) and dispersal trees',
        'Calculates real-time velocity half-lives per subgraph cluster',
      ],
      codeSample: `// Tridral Topology Correlation Output
{
  "subgraph_id": "sg_mule_ring_089",
  "cluster_density": 0.88,
  "shared_hardware_ref": "fp_sha256_88c42b",
  "linked_accounts": [
    "acc_tok_9918",
    "acc_tok_4412",
    "acc_tok_1029"
  ],
  "time_window_seconds": 40,
  "hop_depth": 3
}`,
    },
    {
      num: '03',
      title: 'Explain',
      subtitle: 'Plain-language rationale with full auditability',
      summary:
        'Every score includes human-readable reasoning detailing why the transaction was flagged, which entities contributed to the score, and the model confidence level.',
      bullets: [
        'Clear pattern attribution: Mule Network Fan-out, Account Takeover, or Synthetic Cluster',
        'Numeric confidence meter (e.g., 96.4% confidence score)',
        'Lists exact linked accounts and velocity metrics involved in the trigger',
        'Ready for compliance and SAR/STR suspicious activity audit logs',
      ],
      codeSample: `{
  "risk_score": 94,
  "risk_tier": "HIGH_RISK",
  "confidence": 0.964,
  "pattern": "COORDINATED_MULE_DISPERSION",
  "reason": "3 accounts linked to 1 device · $2,400 moved in 40 seconds",
  "affected_entities": 4,
  "traversal_time_ms": 13.8
}`,
    },
    {
      num: '04',
      title: 'Act',
      subtitle: 'Intervene before clearing and settlement',
      summary:
        'Tridral pushes verdicts directly to your webhook or returns synchronous responses to your authorization gateway. Your team retains full authority over final action thresholds.',
      bullets: [
        'Execute pre-settlement hold, synchronous decline, or 2FA step-up challenge',
        'Customizable rule policies: route borderline flags (60-79) to manual analyst queues',
        'Zero settlement lag: verdicts delivered before funds leave customer accounts',
        'Integrate with Zendesk, Slack, or internal risk dashboards via webhooks',
      ],
      codeSample: `// Gateway Response Payload
{
  "recommendation": "HOLD_FOR_REVIEW",
  "pre_settlement_intercept": true,
  "gateway_action": "PAYMENT_HOLD",
  "analyst_queue_id": "queue_mule_syndicate",
  "auto_expire_seconds": 3600
}`,
    },
  ];

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Step-by-Step Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            How Tridral works in four simple steps.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From API ingestion to pre-settlement decisioning: how our platform correlates
            transactions in real time without replacing your core banking systems.
          </p>
        </div>
      </section>

      {/* Step Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {steps.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-lg text-left transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-mono block text-[#2F5FFF]">STEP {st.num}</span>
              <span className="text-sm font-medium block truncate mt-0.5">{st.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F5FFF]">
                  STAGE {steps[activeTab].num}
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-sans mt-1">
                  {steps[activeTab].title}: {steps[activeTab].subtitle}
                </h2>
                <p className="text-base text-slate-600 mt-3 leading-relaxed">
                  {steps[activeTab].summary}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Key Operational Specifications
                </h4>
                <ul className="space-y-2.5">
                  {steps[activeTab].bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-[#2F5FFF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('quote')}
                  className="px-5 py-2.5 rounded-xl bg-[#0B0F1A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Test this stage in shadow mode &rarr;
                </button>
              </div>
            </div>

            {/* Right: Code / Payload Card */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#0B0F1A] text-slate-200 p-5 border border-slate-800 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-slate-300">
                      stage_{steps[activeTab].num.toLowerCase()}_payload.json
                    </span>
                  </div>
                  <span className="text-teal-400">Validated</span>
                </div>
                <pre className="pt-4 overflow-x-auto text-[12px] leading-relaxed text-teal-300">
                  <code>{steps[activeTab].codeSample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration timeline banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-[#0B0F1A] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-normal font-display">Ready to integrate within days?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Most engineering teams stand up Tridral in shadow mode in under 3 days using our
              standard REST webhook adapter or Kafka connector.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-3 rounded-xl bg-white text-[#0B0F1A] font-semibold text-xs hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Pilot Access
          </button>
        </div>
      </section>
    </div>
  );
};
