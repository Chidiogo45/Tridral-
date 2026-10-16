import React, { useState } from 'react';
import type { PageId } from '../types/index.ts';
import {
  calculateVolumePricing,
  formatNumberCompact,
  formatCurrency,
} from '../utils/pricingCalculator.ts';
import { ArrowRight, Check, ShieldCheck, Zap, Server } from 'lucide-react';

export const PricingPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [volume, setVolume] = useState<number>(2500000);
  const estimate = calculateVolumePricing(volume);

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Transparent Commercials
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            Priced strictly by transaction volume.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            No seat licenses. No opaque enterprise add-ons. You only pay for transactions evaluated
            by the in-memory graph engine, with volume discounts as your payment throughput scales.
          </p>
        </div>
      </section>

      {/* Interactive Volume Estimator Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Monthly Evaluation Volume
                </span>
                <div className="text-3xl font-bold text-slate-900 font-mono tabular-nums mt-1">
                  {formatNumberCompact(volume)} transactions / month
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Effective Volume Rate
                </span>
                <div className="text-2xl font-bold text-[#2F5FFF] font-mono tabular-nums mt-1">
                  ${estimate.ratePerThousand.toFixed(2)}
                  <span className="text-xs font-normal text-slate-500 font-sans">
                    {' '}
                    / 1K evaluations
                  </span>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div className="my-8">
              <input
                type="range"
                min="50000"
                max="50000000"
                step="50000"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2F5FFF]"
                aria-label="Monthly transaction volume slider"
              />
              <div className="flex justify-between text-xs font-mono text-slate-400 mt-2">
                <span>50K</span>
                <span>500K</span>
                <span>2.5M</span>
                <span>10M</span>
                <span>50M+</span>
              </div>
            </div>

            {/* Calculated Breakdown Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-xl bg-slate-50 border border-slate-200 text-left my-8">
              <div>
                <span className="text-xs font-mono text-slate-500 block">Est. Monthly Cost</span>
                <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
                  {formatCurrency(estimate.estimatedMonthlyCost)}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Billed monthly on actual volume
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500 block">Target SLA Ceiling</span>
                <span className="text-2xl font-bold text-emerald-600 font-mono tabular-nums">
                  {estimate.slaTarget}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  End-to-end webhook delivery
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500 block">
                  Est. Prevented Fraud Losses
                </span>
                <span className="text-2xl font-bold text-[#2F5FFF] font-mono tabular-nums">
                  {formatCurrency(estimate.fraudPreventedEstimate)}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Conservative 0.12% anomaly capture
                </span>
              </div>
            </div>

            {/* Deployment topology notice */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700">
              <Server className="w-5 h-5 text-[#2F5FFF] shrink-0" />
              <div>
                <strong>Recommended Architecture:</strong> {estimate.recommendedTopology}. Includes
                isolated VPC peering and multi-AZ failover.
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => onNavigate('quote')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2F5FFF] text-white font-medium text-sm hover:bg-blue-600 active:scale-98 transition-all shadow-md shadow-blue-500/25 cursor-pointer"
              >
                Talk to us for an exact volume pilot quote &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Every Deployment Includes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 font-display">
            Standard with every Tridral deployment.
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            No gatekept enterprise tiers. Every customer gets full platform functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <h3 className="font-semibold text-slate-900 text-sm">Pre-Settlement Webhook</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Synchronous evaluation callbacks in under 45ms directly to your payment gateway or
              core banking router.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <h3 className="font-semibold text-slate-900 text-sm">Deterministic Explanations</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Human-readable rationale and exact subgraph node mappings included with every decision
              payload.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <h3 className="font-semibold text-slate-900 text-sm">Full Shadow Mode Trial</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Run Tridral alongside your existing rules engine for 30 days risk-free to benchmark
              accuracy against live traffic.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <h3 className="font-semibold text-slate-900 text-sm">Zero PII Storage</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pure HMAC-SHA256 tokenized graph topology. Never ingests customer names, plain card
              PANs, or raw government IDs.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <h3 className="font-semibold text-slate-900 text-sm">Dedicated Slack Support</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct access to Tridral systems engineers for pipeline tuning, model backtesting, and
              incident resolution.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              <h3 className="font-semibold text-slate-900 text-sm">99.99% Uptime Guarantee</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Financially backed SLA with active-active regional redundancy and sub-35ms edge ingress
              points.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
