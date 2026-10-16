import React, { useState, useEffect } from 'react';
import { Database, Network, Cpu, ShieldCheck, Webhook, ArrowRight } from 'lucide-react';

export const DataFlowDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [packetOffset, setPacketOffset] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketOffset((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    {
      id: 0,
      title: '1. Ingestion',
      subtitle: 'Transaction Pipeline',
      icon: Database,
      latency: '< 8ms',
      detail: 'Asynchronous event stream ingestion via REST API, Kafka topic, or ISO 20022 webhook.',
      payloadKey: 'event_type',
      payloadVal: 'transaction.initiated',
      color: '#2F5FFF',
    },
    {
      id: 1,
      title: "2. Graph Engine",
      subtitle: 'Topology Correlation',
      icon: Network,
      latency: '< 16ms',
      detail: 'Traverses in-memory graph mapping counterparty accounts, device fingerprints, and shared routing nodes.',
      payloadKey: 'subgraph_nodes',
      payloadVal: '4 entities · 6 edges',
      color: '#2DD4BF',
    },
    {
      id: 2,
      title: '3. ML Detection',
      subtitle: 'Anomaly Models',
      icon: Cpu,
      latency: '< 12ms',
      detail: 'Evaluates structural graph embeddings for mule fan-out, account takeover, and synthetic identity markers.',
      payloadKey: 'inference_class',
      payloadVal: 'coordinated_mule_dispersion',
      color: '#818CF8',
    },
    {
      id: 3,
      title: '4. Risk Scoring',
      subtitle: 'Decision Engine',
      icon: ShieldCheck,
      latency: '< 4ms',
      detail: 'Calculates 0-100 score with plain-text explanation and recommended action based on client policy.',
      payloadKey: 'risk_decision',
      payloadVal: 'HOLD_FOR_REVIEW (score: 94)',
      color: '#F59E0B',
    },
    {
      id: 4,
      title: '5. Response',
      subtitle: 'Customer Webhook',
      icon: Webhook,
      latency: '< 3ms',
      detail: 'Dispatches pre-settlement verdict directly to your core ledger or payment gateway webhook.',
      payloadKey: 'gateway_action',
      payloadVal: 'intercept_pre_settlement',
      color: '#10B981',
    },
  ];

  return (
    <div
      className={`rounded-2xl bg-[#0B0F1A] text-white p-6 sm:p-8 border border-slate-800 shadow-2xl ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
              Live Pipeline Architecture
            </span>
          </div>
          <h3 className="text-xl font-medium text-white font-display mt-1">
            Real-Time In-Flight Graph Traversal
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono bg-slate-900/90 px-3.5 py-2 rounded-lg border border-slate-800">
          <div>
            <span className="text-slate-400 block text-[10px]">End-to-End SLA</span>
            <span className="text-teal-300 font-semibold">&lt; 45ms (p99)</span>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div>
            <span className="text-slate-400 block text-[10px]">Settlement State</span>
            <span className="text-amber-400 font-semibold">Pre-Settlement Intercept</span>
          </div>
        </div>
      </div>

      {/* SVG Pipeline Diagram with Animated Moving Packets */}
      <div className="my-8 relative overflow-x-auto">
        <div className="min-w-[720px] py-4">
          <div className="grid grid-cols-5 gap-3 relative">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 -translate-y-1/2 bg-slate-800 z-0 pointer-events-none">
              {/* Moving data packet */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#2DD4BF] shadow-[0_0_12px_#2DD4BF] transition-all duration-75"
                style={{
                  left: `${packetOffset}%`,
                  opacity: packetOffset > 95 || packetOffset < 5 ? 0 : 1,
                }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2F5FFF] shadow-[0_0_8px_#2F5FFF] transition-all duration-75"
                style={{
                  left: `${(packetOffset + 50) % 100}%`,
                  opacity: (packetOffset + 50) % 100 > 95 || (packetOffset + 50) % 100 < 5 ? 0 : 1,
                }}
              />
            </div>

            {stages.map((stg) => {
              const IconComp = stg.icon;
              const isSelected = activeStage === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`relative z-10 flex flex-col items-center text-center p-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-900 border-[#2F5FFF] ring-2 ring-[#2F5FFF]/30 scale-102 shadow-lg'
                      : 'bg-[#0B0F1A] border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 transition-colors"
                    style={{
                      backgroundColor: isSelected ? `${stg.color}25` : '#1E293B',
                      color: isSelected ? stg.color : '#94A3B8',
                    }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white block whitespace-nowrap">
                    {stg.title}
                  </span>
                  <span className="text-[11px] text-slate-400 block whitespace-nowrap mt-0.5">
                    {stg.subtitle}
                  </span>
                  <span className="inline-block mt-2 font-mono text-[10px] text-teal-400 bg-teal-950/40 px-1.5 py-0.5 rounded border border-teal-800/40">
                    {stg.latency}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail panel of selected stage */}
      <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium text-teal-400">
                STAGE {activeStage + 1} INSPECTION
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-300 font-semibold">
                {stages[activeStage].title} ({stages[activeStage].subtitle})
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              {stages[activeStage].detail}
            </p>
          </div>

          <div className="shrink-0 bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs w-full sm:w-auto">
            <span className="text-slate-500 block text-[10px] uppercase">Telemetry Sample</span>
            <div className="text-teal-300 mt-1">
              &quot;{stages[activeStage].payloadKey}&quot;: &quot;{stages[activeStage].payloadVal}&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
