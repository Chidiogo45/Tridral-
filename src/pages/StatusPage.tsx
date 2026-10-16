import React, { useState } from 'react';
import type { PageId, SystemServiceStatus } from '../types/index.ts';
import { CheckCircle2, Activity, Clock, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';

export const StatusPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const services: SystemServiceStatus[] = [
    {
      name: 'Global API Edge Ingress (REST & TLS 1.3)',
      status: 'operational',
      latencyMs: 14,
      uptime30d: '99.998%',
      region: 'Global Anycast (24 Edge PoPs)',
    },
    {
      name: 'Kafka & Event Stream Deserializer',
      status: 'operational',
      latencyMs: 8,
      uptime30d: '99.994%',
      region: 'Multi-Region Sharded',
    },
    {
      name: 'In-Memory C++ Subgraph Traversal Core',
      status: 'operational',
      latencyMs: 12,
      uptime30d: '99.999%',
      region: 'Dedicated Cluster RAM',
    },
    {
      name: 'Vector Anomaly Inference Models (GNN)',
      status: 'operational',
      latencyMs: 9,
      uptime30d: '99.992%',
      region: 'Hardware Accelerated SIMD',
    },
    {
      name: 'Pre-Settlement Webhook Dispatcher',
      status: 'operational',
      latencyMs: 3,
      uptime30d: '99.995%',
      region: 'Direct Gateway Egress',
    },
  ];

  const regions = [
    { name: 'North America (US-East / N. Virginia)', status: 'Operational', p99: '34ms' },
    { name: 'North America (US-West / Oregon)', status: 'Operational', p99: '38ms' },
    { name: 'Europe (EU-Central / Frankfurt)', status: 'Operational', p99: '29ms' },
    { name: 'Europe (EU-West / Ireland)', status: 'Operational', p99: '31ms' },
    { name: 'Asia Pacific (AP-Southeast / Singapore)', status: 'Operational', p99: '42ms' },
    { name: 'Latin America (SA-East / São Paulo)', status: 'Operational', p99: '44ms' },
  ];

  const incidents = [
    {
      date: 'October 12, 2026',
      title: 'Routine Graph Cluster Memory Compaction',
      status: 'Resolved',
      impact: 'Informational',
      desc: 'Scheduled zero-downtime memory maintenance executed across EU-Central cluster. Zero packet loss or latency increase detected.',
    },
    {
      date: 'September 24, 2026',
      title: 'Global Edge Ingress Route Optimization',
      status: 'Resolved',
      impact: 'Performance Improvement',
      desc: 'BGP anycast routes updated across 6 global network partners, reducing median transit latency by 3.4ms.',
    },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed('Updated just now');
    }, 450);
  };

  return (
    <div className="pt-28 pb-20 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-[#2F5FFF] uppercase tracking-wider">
            Live Service Health
          </div>
          <h1 className="text-4xl sm:text-5xl font-normal text-slate-900 font-display">
            System status & uptime.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real-time status of the Tridral global graph evaluation network, edge ingress APIs, and
            pre-settlement webhook delivery rails.
          </p>
        </div>
      </section>

      {/* Global Status Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-emerald-950/90 text-white rounded-2xl p-6 sm:p-8 border border-emerald-800/80 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-700/60">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-semibold font-sans text-white">
                All Global Systems Fully Operational
              </h2>
              <p className="text-xs text-emerald-200/90 mt-0.5">
                Current Global P99 Latency: <span className="font-mono font-bold text-white">36.2ms</span> (Well within 45ms SLA)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-300">{lastRefreshed}</span>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 transition-colors cursor-pointer"
              title="Refresh system status"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900 font-sans">
              Core Subsystem Availability
            </h3>
            <span className="text-xs font-mono text-slate-500">Target SLA: 99.99%</span>
          </div>

          <div className="divide-y divide-slate-100">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-900 text-sm font-sans">{srv.name}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-4 block mt-0.5">
                    {srv.region}
                  </span>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Current Latency</span>
                    <span className="text-[#2F5FFF] font-semibold">{srv.latencyMs}ms</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">30-Day Uptime</span>
                    <span className="text-slate-800 font-semibold">{srv.uptime30d}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">State</span>
                    <span className="text-emerald-600 font-semibold uppercase">Operational</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Cluster Performance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mb-6">
          <h3 className="text-xl font-normal text-slate-900 font-display">
            Regional Cluster Transit Latencies
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Measured from edge authorization gateways to pre-settlement decision callbacks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between"
            >
              <div>
                <span className="font-medium text-slate-900 text-xs font-sans block">{reg.name}</span>
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {reg.status}
                </span>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-slate-400 block text-[10px]">P99 Latency</span>
                <span className="text-[#2F5FFF] font-semibold">{reg.p99}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 90-Day Incident Log */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h3 className="text-lg font-semibold text-slate-900 font-sans">
              90-Day Incident History
            </h3>
            <span className="text-xs font-mono text-emerald-600 font-semibold">
              Zero Unplanned Outages
            </span>
          </div>

          <div className="space-y-6">
            {incidents.map((inc, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-slate-400 text-[11px]">{inc.date}</span>
                  <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {inc.status}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm font-sans">{inc.title}</h4>
                <p className="text-slate-600 leading-relaxed">{inc.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Want to subscribe to live status webhooks?</span>
            <button
              onClick={() => onNavigate('quote')}
              className="text-[#2F5FFF] font-semibold hover:underline cursor-pointer"
            >
              Contact Developer Operations &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
