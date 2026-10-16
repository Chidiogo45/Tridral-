import React from 'react';
import type { PageId } from '../types/index.ts';
import { ShieldCheck, FileText, CheckCircle2, AlertOctagon, Scale, ArrowRight, Eye } from 'lucide-react';

export const CompliancePage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const obligations = [
    {
      title: 'Automated Suspicious Activity Reporting (SAR / STR)',
      desc: 'Compliance officers spend hundreds of hours manually assembling account statements, IP logs, and counterparty records to file SARs with financial intelligence units. Tridral generates complete topological dossier exports in one click.',
      output: 'Includes entity linkage graphs, transaction velocity logs, and machine-generated plain-language factual narratives.',
    },
    {
      title: 'Multi-Hop Smurfing & Structuring Detection',
      desc: 'Criminal syndicates deliberately break deposits into micro-amounts below statutory reporting thresholds ($10,000 or local equivalents) and fan out across multiple newly opened accounts. Tridral aggregates multi-account structuring in real time.',
      output: 'Detects coordinated structuring rings across ostensibly unconnected customer accounts before funds leave.',
    },
    {
      title: 'Pre-Settlement Interception under Travel Rule Mandates',
      desc: 'FATF Recommendation 16 and global wire transfer regulations require financial institutions to verify counterparty originator and beneficiary information before funds are disbursed. Tridral evaluates counterparty risk before clearing.',
      output: 'Prevents transfers to sanctioned cluster nodes, known terrorist financing wallets, or high-risk unregistered VASPs.',
    },
    {
      title: 'Deterministic Model Explainability for Bank Examiners',
      desc: 'Banking regulators reject opaque deep learning models that cannot explain why a legitimate transaction was frozen or how an illicit payment escaped scrutiny. Tridral is fully deterministic.',
      output: 'Every decision maps to explicit graph topological metrics and clear mathematical thresholds that withstand exam audits.',
    },
  ];

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Regulatory Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Built for AML/CFT compliance and audit defense.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Written directly for Chief Compliance Officers, MLROs, and Financial Crime Directors.
            Tridral provides the structural evidence and deterministic audit trails required to satisfy
            banking examiners and supervisory authorities worldwide.
          </p>
        </div>
      </section>

      {/* Compliance Officer Summary Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {obligations.map((ob, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2F5FFF] flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 font-sans">{ob.title}</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{ob.desc}</p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                <span className="text-[#2F5FFF] font-bold block mb-0.5">COMPLIANCE DELIVERABLE</span>
                {ob.output}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample SAR Dossier Export Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0B0F1A] rounded-2xl border border-slate-800 p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block">
                AUDIT TRAIL SAMPLE
              </span>
              <h3 className="text-xl font-normal font-display mt-1">
                Automated Suspicious Activity Report Dossier
              </h3>
            </div>
            <span className="text-xs font-mono bg-slate-800 px-3 py-1.5 rounded text-slate-300">
              Format: FinCEN / FIU Standard XML & Narrative
            </span>
          </div>

          <div className="mt-6 font-mono text-xs text-slate-300 bg-slate-950 p-5 rounded-xl border border-slate-800 leading-relaxed space-y-3">
            <div className="text-slate-400">
              [TRIDRAL COMPLIANCE EXPORT ID: SAR-2026-10-89104]
            </div>
            <p>
              &quot;Subject entity cluster comprises 4 ostensibly unrelated deposit accounts (NL40••1829,
              DE88••3410, GB12••9044, FR76••5511) exhibiting shared hardware telemetry fingerprint
              &apos;fp_88c42b&apos; across a 40-second window. Cumulative disbursement of $2,400.00
              dispersed in a multi-hop fan-out topology to known high-velocity crypto gateway counterparty.
              All transactions executed prior to regular clearing cycle.&quot;
            </p>
            <div className="text-teal-400 pt-2 flex items-center justify-between border-t border-slate-800 text-[11px]">
              <span>Deterministic Model Confidence: 96.4%</span>
              <span>Regulatory Standard: FATF Wire Guidance & AMLD6</span>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Readiness Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-white rounded-2xl border border-slate-200/80 space-y-6">
          <h3 className="text-2xl font-normal text-slate-900 font-display">
            Enterprise Compliance Readiness
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-2">
              <span className="font-semibold text-slate-900 block text-sm">Model Governance</span>
              <p className="leading-relaxed">
                Full documentation of graph heuristics, embedding weights, and feature importance
                ready for internal model risk management (MRM) review.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-slate-900 block text-sm">Zero Data Retention Option</span>
              <p className="leading-relaxed">
                Configure Tridral in ephemeral stateless mode where transaction graphs live purely
                in volatile RAM, eliminating data residency cross-border compliance hurdles.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-slate-900 block text-sm">Immutable Audit Logs</span>
              <p className="leading-relaxed">
                Every authorization verdict is cryptographically hashed and chained to prevent
                tampering, providing unalterable defense during regulatory investigations.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-xl bg-[#2F5FFF] text-white text-xs font-semibold hover:bg-blue-600 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
            >
              Request Compliance Documentation Package &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
