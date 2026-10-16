import React from 'react';
import { DataFlowDiagram } from '../components/DataFlowDiagram.tsx';
import type { PageId } from '../types/index.ts';
import { Check, ArrowRight, Zap, Network, Shield, Cpu, Layers, GitBranch } from 'lucide-react';

export const PlatformPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 w-full">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Platform Engine
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            A real-time graph engine built for in-flight transaction pipelines.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Legacy risk engines evaluate transactions as isolated events against rigid rule lists.
            Tridral builds an evolving in-memory topology of every entity in your ecosystem,
            evaluating relational proximity and structural velocity in under 45 milliseconds.
          </p>
        </div>
      </section>

      {/* Interactive Data Flow Architecture Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <DataFlowDiagram />
      </section>

      {/* Core Mechanism Comparison: Graph vs Rules */}
      <section className="bg-white py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider mb-2">
              The Architectural Shift
            </div>
            <h2 className="text-3xl font-normal text-slate-900 font-display">
              Static rule engines vs. transaction-graph modeling.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Why rule maintenance collapses as transaction complexity grows, and how graph topology
              eliminates combinatorial rule sprawl.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Static Rules */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-semibold text-slate-900 font-display text-lg">
                  Static Rule-Based Detection
                </span>
                <span className="text-xs font-mono text-slate-400">Legacy Approach</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>
                    <strong>Isolated evaluation:</strong> Only checks data points attached to the single
                    incoming transaction payload (amount, IP, timestamp).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>
                    <strong>Rule explosion:</strong> Fraud teams end up managing 400+ fragile boolean
                    conditions that contradict one another and increase false declines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>
                    <strong>Blind to multi-hop rings:</strong> Incapable of seeing if Account A and Account C
                    share an emulated device fingerprint through an intermediary Account B.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>
                    <strong>Lagging adaptation:</strong> Requires weeks of manual threshold tuning after an
                    attack has already cost millions in chargebacks.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Tridral Graph Engine */}
            <div className="p-8 rounded-2xl bg-[#0B0F1A] text-white border border-slate-800 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-semibold text-white font-display text-lg">
                  Tridral Graph Intelligence
                </span>
                <span className="text-xs font-mono text-teal-400">Next-Gen Architecture</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Full topological context:</strong> Evaluates the entire multi-hop subgraph
                    connecting counterparties, hardware footprints, and routing velocity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero manual rule drift:</strong> Structural graph algorithms identify
                    coordinated anomalies based on graph topology, not arbitrary static amounts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Instant ring exposure:</strong> Discovers circular laundering loops, fan-out
                    dispersion trees, and device cycling in real time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Sub-45ms decision SLA:</strong> Optimized C++ graph engine processes
                    100,000+ edge traversals per second before transaction clearance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engine Capabilities Summary */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <Cpu className="w-6 h-6 text-[#2F5FFF]" />
            <h3 className="text-lg font-semibold text-slate-900 font-sans">
              Distributed In-Memory Graph
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maintains temporal transaction subgraphs directly in RAM. Graph edges expire
              gracefully based on configurable velocity half-lives.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <GitBranch className="w-6 h-6 text-teal-600" />
            <h3 className="text-lg font-semibold text-slate-900 font-sans">
              Sub-graph Partitioning
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Partitions entity clusters dynamically so high-degree nodes never create traversal
              bottlenecks or latency spikes during payment surges.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <Shield className="w-6 h-6 text-indigo-600" />
            <h3 className="text-lg font-semibold text-slate-900 font-sans">
              Deterministic Explainability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Never a black box. Every risk decision outputs the exact subgraph trail and entity
              relationships that triggered the flag for audit and compliance.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('quote')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F5FFF] text-white text-sm font-medium hover:bg-blue-600 cursor-pointer shadow-md shadow-blue-500/20"
          >
            <span>Request technical pilot & architecture review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
