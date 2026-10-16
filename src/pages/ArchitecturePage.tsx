import React from 'react';
import { ArchitectureFlow } from '../components/ArchitectureFlow.tsx';
import type { PageId } from '../types/index.ts';
import { Server, Database, Network, Shield, Cpu, Lock, ArrowRight, Check } from 'lucide-react';

export const ArchitecturePage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const latencySteps = [
    { name: 'Gateway TLS Term & Ingress', budget: '6ms', target: '< 8ms' },
    { name: 'Tokenization & Graph Insertion', budget: '8ms', target: '< 10ms' },
    { name: 'Multi-hop In-Memory Subgraph Traversal', budget: '14ms', target: '< 18ms' },
    { name: 'ML Graph Embedding Vector Inference', budget: '9ms', target: '< 12ms' },
    { name: 'Risk Scoring & Policy Rule Resolution', budget: '3ms', target: '< 4ms' },
    { name: 'Webhook Signature & Dispatch', budget: '2ms', target: '< 3ms' },
  ];

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Technical Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Distributed in-memory transaction graphs with sub-45ms guarantees.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Engineered from first principles for payment networks and digital banks where every
            millisecond of authorization delay impacts conversion, and every false negative incurs
            irrecoverable settlement loss.
          </p>
        </div>
      </section>

      {/* Main Diagram with Moving SVG Packet Dots */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ArchitectureFlow />
      </section>

      {/* Deep Technical Pillars */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-normal text-slate-900 font-display">
              Core Architectural Invariants
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              How Tridral balances extreme read/write throughput with deterministic multi-hop graph
              traversal at global scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2F5FFF] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">
                Native C++ Graph Runtime
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than using general-purpose graph databases (Neo4j, JanusGraph) which carry JVM
                garbage collection pauses, Tridral runs on a custom zero-allocation C++ graph core
                optimized for cache locality and SIMD parallel vector scoring.
              </p>
              <div className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-200">
                P99 traversal: 14.2ms across 4 hops
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">
                Temporal Edge Decay
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transaction graphs risk unbounded memory inflation. Tridral applies exponential half-life
                weighting to edges. Inactive links age out of memory, while active coordinated mule
                paths dynamically strengthen their topological weight in real time.
              </p>
              <div className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-200">
                Configurable retention: 30 to 180 days
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 font-sans">
                Zero-PII Tokenized Topology
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tridral never ingests cleartext names, credit card PANs, or SSNs. The graph models
                structural relationships between cryptographic HMAC-SHA256 tokens and salted device
                hashes, maintaining absolute privacy by design.
              </p>
              <div className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-200">
                GDPR & Banking Secrecy compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latency Budget Breakdown Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider mb-2">
            Performance Budget
          </div>
          <h2 className="text-3xl font-normal text-slate-900 font-display">
            The sub-45ms in-flight latency budget.
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every authorization cycle is timed with strict deadline enforcement. If any stage
            exceeds its ceiling, safe fallback policies protect transaction throughput.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono text-slate-500 uppercase">
                <tr>
                  <th className="py-3.5 px-6">Execution Phase</th>
                  <th className="py-3.5 px-6">Measured Median</th>
                  <th className="py-3.5 px-6">Hard SLA Ceiling</th>
                  <th className="py-3.5 px-6">Architecture Subsystem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                {latencySteps.map((step, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-sans font-medium text-slate-900">{step.name}</td>
                    <td className="py-4 px-6 text-[#2F5FFF] font-semibold">{step.budget}</td>
                    <td className="py-4 px-6 text-slate-600">{step.target}</td>
                    <td className="py-4 px-6 text-slate-500 font-sans">
                      {idx < 2 ? 'Edge Gateway' : idx < 4 ? 'Graph Core' : 'Decision Dispatcher'}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-50/50 font-bold">
                  <td className="py-4 px-6 font-sans text-slate-900">Total End-to-End P99</td>
                  <td className="py-4 px-6 text-[#2F5FFF] font-mono text-sm">42ms</td>
                  <td className="py-4 px-6 text-slate-800 font-mono text-sm">&lt; 45ms</td>
                  <td className="py-4 px-6 text-emerald-600 font-sans">Strictly enforced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-3 rounded-xl bg-[#0B0F1A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Review Technical Whitepaper & Benchmarks &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
