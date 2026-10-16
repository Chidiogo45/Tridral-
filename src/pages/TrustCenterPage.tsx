import React, { useState } from 'react';
import type { PageId } from '../types/index.ts';
import { Shield, Lock, Eye, Database, Check, Server, FileText } from 'lucide-react';

export const TrustCenterPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<'security' | 'privacy' | 'ai' | 'data'>('security');

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Governance & Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Tridral Trust Center.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Plain-language documentation of our enterprise security architecture, privacy controls,
            responsible AI principles, and data handling practices.
          </p>
        </div>
      </section>

      {/* Navigation Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 max-w-2xl">
          <button
            onClick={() => setActiveSection('security')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeSection === 'security'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Security Practices
          </button>
          <button
            onClick={() => setActiveSection('privacy')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeSection === 'privacy'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Privacy Policy & Hashing
          </button>
          <button
            onClick={() => setActiveSection('ai')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeSection === 'ai'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Responsible AI
          </button>
          <button
            onClick={() => setActiveSection('data')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeSection === 'data'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4. Data Handling & Retention
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        {activeSection === 'security' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-8">
            <div>
              <div className="text-xs font-mono text-[#2F5FFF] uppercase tracking-wider mb-1">
                Section 1 · Enterprise Security
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 font-sans">
                Infrastructure Security & Penetration Testing
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Tridral is built to defend mission-critical financial backbones. Our security posture
                is designed around strict boundary isolation and defense in depth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 text-sm block">Isolated Tenant Workspaces</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every customer transaction graph is isolated in dedicated memory namespaces. No
                  cross-tenant data co-mingling in execution memory.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 text-sm block">TLS 1.3 & Mutual Auth (mTLS)</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All REST endpoints and Kafka connections mandate TLS 1.3 with forward secrecy.
                  PrivateLink and VPC peering available for high-throughput clients.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 text-sm block">SOC 2 Type II Alignment</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous automated compliance scanning across access management, change logs, and
                  cryptographic key rotations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 text-sm block">Bi-Annual Gray-Box Pentests</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Independent third-party penetration audits performed twice yearly covering API
                  ingress, memory boundaries, and webhook dispatching.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'privacy' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-8">
            <div>
              <div className="text-xs font-mono text-[#2F5FFF] uppercase tracking-wider mb-1">
                Section 2 · Privacy by Design
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 font-sans">
                Zero Cleartext PII & Mathematical Anonymization
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Tridral is designed to evaluate fraud risk without ever knowing who your users are.
                We operate strictly on entity hashes and network topology.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-mono text-slate-800">
                <span className="font-bold text-[#2F5FFF] block mb-1">THE TRIDRAL PRIVACY GUARANTEE</span>
                &quot;Customers never send raw consumer names, government tax IDs, cleartext credit card numbers,
                or physical street addresses to Tridral. All identifiers are irreversibly hashed or tokenized
                prior to transmission.&quot;
              </div>

              <h4 className="font-semibold text-slate-900 pt-2">How Tokenization Works:</h4>
              <p>
                When a payment occurs, your API gateway computes an HMAC-SHA256 hash using a secret key
                known only to your organization:
              </p>
              <div className="p-3 bg-slate-900 rounded-lg text-teal-300 font-mono text-xs">
                <code>acc_token = HMAC_SHA256(customer_internal_id, client_private_salt)</code>
              </div>
              <p>
                Tridral links the tokens in the graph. Even in the event of an adversary intercepting
                the graph payload, they only observe abstract connections between cryptographic strings
                that cannot be reversed to individual humans.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'ai' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-8">
            <div>
              <div className="text-xs font-mono text-[#2F5FFF] uppercase tracking-wider mb-1">
                Section 3 · Ethical & Deterministic AI
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 font-sans">
                Deterministic Explainability & Anti-Bias Framework
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                In financial crime detection, unexplained decisions violate regulatory duty and harm
                underbanked consumers. Here is how we enforce fairness and transparency.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 block text-sm">No Demographic Features</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our models never consume age, gender, postal code socio-economics, or nationality.
                  Scoring is strictly based on structural graph characteristics (velocity, degree,
                  dispersion cycles, and hardware repetition).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 block text-sm">Human-in-the-Loop Authority</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tridral does not unilaterally block accounts without customer mandate. We provide
                  verdicts and risk recommendations, but final execution thresholds remain under the
                  complete control of your risk operations policy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 block text-sm">Full Model Retesting & Drift Auditing</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every algorithm revision is backtested against hundreds of millions of historical
                  synthetic and real baseline transactions to verify that false decline rates never
                  spike.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'data' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs space-y-8">
            <div>
              <div className="text-xs font-mono text-[#2F5FFF] uppercase tracking-wider mb-1">
                Section 4 · Data Handling & Retention
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 font-sans">
                Configurable Retention & Regional Data Residency
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Control where your transaction data lives and how long graph relationships persist.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 block text-sm">Configurable Graph Edge Decay</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transaction edges in the graph automatically age out after a configurable period (30,
                  60, 90, or 180 days). Dormant entities are expunged from memory, ensuring compliance
                  with data minimization obligations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 block text-sm">Stateless RAM-Only Mode</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For institutions with strict cross-border data transfer laws, Tridral can be deployed
                  in stateless mode where transaction data is held only during the 45ms evaluation
                  window and immediately discarded from memory after webhook response.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-semibold text-slate-900 block text-sm">Customer-Managed Encryption Keys (CMEK)</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Encrypt all telemetry backups using keys hosted in your own AWS KMS or Google Cloud
                  KMS key vault. Revoke key access instantly at any time.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Security Document Request CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto space-y-3">
          <h3 className="text-lg font-semibold text-slate-900 font-sans">
            Need our full Security Architecture Whitepaper & Vendor Assessment?
          </h3>
          <p className="text-xs text-slate-600">
            Available under standard NDA for compliance and information security teams.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="text-xs font-semibold text-[#2F5FFF] hover:underline cursor-pointer"
            >
              Request Vendor Assessment Packet &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
