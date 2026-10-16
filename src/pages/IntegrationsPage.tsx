import React, { useState } from 'react';
import type { PageId } from '../types/index.ts';
import { Network, Database, Cpu, Server, Check, ArrowRight, Code } from 'lucide-react';

export const IntegrationsPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'curl' | 'node' | 'python'>('node');

  const categories = [
    {
      category: 'Event Streams & Message Buses',
      desc: 'High-throughput asynchronous ingestion adapters',
      systems: [
        { name: 'Apache Kafka', type: 'Topic consumer', note: 'Direct partition consumer with sub-5ms deserialization' },
        { name: 'AWS Kinesis', type: 'Event stream', note: 'Native IAM authentication and multi-shard scaling' },
        { name: 'Google Cloud Pub/Sub', type: 'Subscriber', note: 'Direct VPC peering integration' },
        { name: 'RabbitMQ / AMQP', type: 'Queue subscriber', note: 'Low-latency binary protocol support' },
      ],
    },
    {
      category: 'Payment Processors & Gateway Rails',
      desc: 'Pre-settlement authorization hooks and webhooks',
      systems: [
        { name: 'Stripe', type: 'Radar / Webhook API', note: 'Pre-capture intercept via custom payment intents' },
        { name: 'Adyen', type: 'Notification API', note: 'Real-time authorization advice webhook' },
        { name: 'Checkout.com', type: 'Flow Engine', note: 'Synchronous risk scoring integration' },
        { name: 'ISO 20022 Rails', type: 'FedNow / SEPA Instant', note: 'pacs.008 & pacs.002 messaging engine' },
      ],
    },
    {
      category: 'Core Banking Engines & Modern Ledgers',
      desc: 'Seamless balance hold and ledger coordination',
      systems: [
        { name: 'Thought Machine Vault', type: 'Smart Contracts', note: 'Pre-posting transaction hooks' },
        { name: 'Mambu', type: 'Core Banking API', note: 'Automated account freeze and review queues' },
        { name: 'Temenos Transact', type: 'Payment Hub', note: 'Direct event streaming adapter' },
        { name: 'Form3 Financial Cloud', type: 'Clearing Engine', note: 'Real-time payment scheme adapter' },
      ],
    },
  ];

  const codeSnippets = {
    curl: `curl -X POST https://api.tridral.io/v1/evaluations \\
  -H "Authorization: Bearer tridral_live_sk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "tx_20261016_94021",
    "source_account_id": "acc_tok_9918",
    "target_account_id": "acc_tok_4412",
    "amount_minor": 240000,
    "currency": "EUR",
    "device_hash": "fp_sha256_88c42b",
    "ip_subnet": "198.51.100.0/24"
  }'`,
    node: `import { TridralClient } from '@tridral/node';

const tridral = new TridralClient({ apiKey: process.env.TRIDRAL_API_KEY });

const verdict = await tridral.evaluations.evaluate({
  transactionId: 'tx_20261016_94021',
  sourceAccountId: 'acc_tok_9918',
  targetAccountId: 'acc_tok_4412',
  amountMinor: 240000,
  currency: 'EUR',
  deviceHash: 'fp_sha256_88c42b',
  ipSubnet: '198.51.100.0/24'
});

if (verdict.recommendation === 'HOLD_FOR_REVIEW') {
  await paymentGateway.holdPreSettlement(verdict.transactionId);
}`,
    python: `from tridral import Tridral

client = Tridral(api_key=os.environ["TRIDRAL_API_KEY"])

verdict = client.evaluations.evaluate(
    transaction_id="tx_20261016_94021",
    source_account_id="acc_tok_9918",
    target_account_id="acc_tok_4412",
    amount_minor=240000,
    currency="EUR",
    device_hash="fp_sha256_88c42b",
    ip_subnet="198.51.100.0/24"
)

if verdict.risk_score >= 80:
    logger.warning("Held suspicious mule transaction: %s", verdict.reason)
    payment_gateway.hold_pre_settlement(verdict.transaction_id)`,
  };

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Ecosystem Connectivity
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Works with your existing payment and ledger infrastructure.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tridral is designed as a drop-in evaluation layer. Ingest transactions through Kafka or
            REST webhooks without ripping out your core banking ledger.
          </p>
        </div>
      </section>

      {/* Code SDK Integration Sample */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0B0F1A] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono text-teal-400 block uppercase">
                Synchronous Pre-Settlement SDK
              </span>
              <h3 className="text-lg font-semibold font-sans mt-0.5">
                Evaluate transaction within 45ms
              </h3>
            </div>

            <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab('node')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  activeTab === 'node' ? 'bg-[#2F5FFF] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                TypeScript / Node
              </button>
              <button
                onClick={() => setActiveTab('python')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  activeTab === 'python' ? 'bg-[#2F5FFF] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setActiveTab('curl')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  activeTab === 'curl' ? 'bg-[#2F5FFF] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                cURL
              </button>
            </div>
          </div>

          <pre className="pt-4 overflow-x-auto text-xs font-mono text-teal-300 leading-relaxed">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>
      </section>

      {/* Systems Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 font-sans">{cat.category}</h2>
              <p className="text-xs text-slate-500 mt-1">{cat.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.systems.map((sys, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 text-sm font-sans">{sys.name}</h3>
                    <span className="text-[10px] font-mono text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                      Certified
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-500">{sys.type}</div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{sys.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Custom Connectors Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 max-w-3xl mx-auto space-y-3">
          <h3 className="text-lg font-semibold text-slate-900 font-sans">
            Need a custom proprietary message format or internal RPC bus?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We provide custom gRPC, Protocol Buffers, and FlatBuffers ingestion pipelines for
            high-scale payment networks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="text-xs font-semibold text-[#2F5FFF] hover:underline cursor-pointer"
            >
              Discuss protocol adapters with engineering &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
