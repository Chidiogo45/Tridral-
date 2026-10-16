import React from 'react';
import { TransactionGraphVisual } from '../components/TransactionGraphVisual.tsx';
import type { PageId } from '../types/index.ts';
import { Network, ArrowRight, Check, X, ShieldAlert, Cpu } from 'lucide-react';

export const GraphDetectionPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Technical Research Paper
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            The Case for Graph-Based Fraud Detection.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Why tabular relational databases and boolean rule lists fundamentally collapse when
            confronted with coordinated fraud syndicates, and how transaction-graph topology solves the
            problem in $O(1)$ memory time.
          </p>
        </div>
      </section>

      {/* Interactive Explorer Anchor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <TransactionGraphVisual />
      </section>

      {/* Deep Technical Explainer Essay */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left mb-20">
        {/* Thesis 1 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="text-xs font-mono text-[#2F5FFF] uppercase tracking-wider font-semibold">
            Section 01 · Mathematical Foundation
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 font-sans">
            The Tabular Blind Spot: Why Relational Tables Hide Syndicates
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            In standard financial databases, a transaction is recorded as a flat row:
          </p>
          <div className="bg-[#0B0F1A] text-teal-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">
            <code>[tx_id: 91024, src: acc_A, dst: acc_B, amount: $1,950.00, time: 14:02:11, ip: 198.51.100.2]</code>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            A static rule engine evaluates this row in complete isolation. It queries boolean
            heuristics:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 font-mono">
            <li>Is amount &gt; $5,000? (False)</li>
            <li>Is country code foreign? (False)</li>
            <li>Is velocity &gt; 3 tx/hour for acc_A? (False)</li>
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed">
            The transaction clears. But five seconds later, Account B transfers $1,900 to Account C,
            which transfers $1,850 to Account D. In a tabular database, discovering that Account A,
            Account B, Account C, and Account D share an emulated device fingerprint requires a
            recursive 4-way SQL join:
          </p>
          <div className="bg-slate-100 text-slate-800 p-4 rounded-xl font-mono text-xs overflow-x-auto">
            <code>SELECT * FROM transactions t1 JOIN transactions t2 ON ... JOIN devices d ON ...</code>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            In relational SQL or NoSQL document stores, multi-join queries scale exponentially ($O(N^k)$).
            Running this across millions of transactions takes seconds or minutes—far too slow for a
            payment gateway that must respond in under 50 milliseconds.
          </p>
        </div>

        {/* Thesis 2 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="text-xs font-mono text-teal-600 uppercase tracking-wider font-semibold">
            Section 02 · The Graph Alternative
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 font-sans">
            Graph Topology: Turning Traversals into In-Memory Pointers
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            In Tridral&apos;s graph model, transactions are not isolated rows in a table. They are directed,
            time-decayed edges connecting entity vertices:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 font-mono text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[#2F5FFF] font-bold block mb-1">Graph Vertices (V)</span>
              <span>Accounts, Device Hashes, Proxy Subnets, Virtual IBANs, Merchant IDs</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-teal-600 font-bold block mb-1">Graph Edges (E)</span>
              <span>Payment Transfers, Login Fingerprints, KYC Recycled Attributes</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Because entity relationships are stored as raw memory address pointers in C++, finding all
            accounts connected to a device or uncovering circular laundering paths is an $O(d)$ pointer
            traversal, where $d$ is vertex degree. What takes a SQL database 12 seconds takes Tridral
            under <strong>14 milliseconds</strong>.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900 font-sans">
            Direct Architecture Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 font-mono text-slate-500 uppercase">
                <tr>
                  <th className="py-3 px-4">Evaluation Dimension</th>
                  <th className="py-3 px-4">Static Rule Engine</th>
                  <th className="py-3 px-4 text-[#2F5FFF]">Tridral Graph Modeling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-sans font-medium text-slate-900">
                    Contextual Scope
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">1 single isolated transaction</td>
                  <td className="py-3.5 px-4 text-[#2F5FFF] font-semibold">
                    Multi-hop connected entity topology
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-sans font-medium text-slate-900">
                    Multi-Hop Ring Detection
                  </td>
                  <td className="py-3.5 px-4 text-rose-600">Impossible in-flight (&gt; 5s joins)</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">
                    Sub-15ms pointer traversal
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-sans font-medium text-slate-900">
                    Rule Maintenance Overhead
                  </td>
                  <td className="py-3.5 px-4 text-rose-600">
                    400+ fragile, contradictory rules
                  </td>
                  <td className="py-3.5 px-4 text-[#2F5FFF] font-semibold">
                    0 manual rules; structural graph models
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-sans font-medium text-slate-900">
                    False Decline Rate
                  </td>
                  <td className="py-3.5 px-4 text-amber-600">High (12%–22% industry average)</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-semibold">
                    Low (&lt; 1.4% due to network context)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-sans font-medium text-slate-900">
                    Settlement Intercept
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Often post-settlement batch reconciliation
                  </td>
                  <td className="py-3.5 px-4 text-[#2F5FFF] font-semibold">
                    Pre-settlement gateway webhook (&lt; 45ms)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => onNavigate('quote')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2F5FFF] text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
        >
          <span>Run a benchmark on your transaction topology</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
