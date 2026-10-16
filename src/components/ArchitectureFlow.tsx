import React, { useState, useEffect, useRef } from 'react';
import {
  Server,
  Network,
  Cpu,
  ShieldCheck,
  Webhook,
  Play,
  Pause,
  Zap,
  Activity,
  Layers,
  FileCode2,
  CheckCircle2,
} from 'lucide-react';

interface StageData {
  id: string;
  name: string;
  shortName: string;
  category: string;
  latency: string;
  technology: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  inputSchema: string;
  outputSchema: string;
  keyMetric: string;
}

export const ArchitectureFlow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStageId, setActiveStageId] = useState<string>('stage_graph');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [trafficMode, setTrafficMode] = useState<'nominal' | 'surge'>('nominal');
  const [progress, setProgress] = useState<number>(0);

  // Animation frame loop for continuous packet movement
  const reqRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    const speed = trafficMode === 'surge' ? 0.08 : 0.035;

    const animate = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (isPlaying) {
        setProgress((prev) => (prev + delta * speed) % 100);
      }

      reqRef.current = requestAnimationFrame(animate);
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [isPlaying, trafficMode]);

  const stages: StageData[] = [
    {
      id: 'stage_ingest',
      name: 'API Ingestion Gateway',
      shortName: 'Ingestion',
      category: 'Stage 01 · Ingress',
      latency: '< 6ms (median 3.2ms)',
      technology: 'Rust Edge Proxy / TLS 1.3 / HTTP/2',
      color: '#2F5FFF',
      icon: Server,
      description:
        'Validates mutual TLS certificates, deduplicates request idempotency keys, and tokenizes account references into HMAC-SHA256 salted hashes before memory buffer ingestion.',
      inputSchema: `{
  "event_id": "evt_91024_auth",
  "source_account": "NL40••1829",
  "target_account": "GB12••9044",
  "amount_minor": 240000,
  "currency": "EUR",
  "device_fingerprint": "fp_88c42b",
  "timestamp": "2026-10-16T18:50:00Z"
}`,
      outputSchema: `{
  "tx_token": "tok_hmac_8b19a",
  "src_vertex": "v_acc_nl_918",
  "dst_vertex": "v_acc_gb_044",
  "weight": 2400.0,
  "device_vertex": "v_dev_88c42b"
}`,
      keyMetric: 'Zero cleartext PII passed to inner mesh',
    },
    {
      id: 'stage_graph',
      name: 'In-Memory Graph Engine',
      shortName: 'Correlation',
      category: 'Stage 02 · Topology Traversal',
      latency: '< 16ms (median 11.4ms)',
      technology: 'Native C++ Graph Core / Zero GC',
      color: '#2DD4BF',
      icon: Network,
      description:
        'Traverses active entity subgraphs up to 4 degrees of separation. Computes real-time multi-account device linkages, temporal velocity decay, and circular flow cycles.',
      inputSchema: `{
  "src_vertex": "v_acc_nl_918",
  "target_vertex": "v_acc_gb_044",
  "time_horizon": "120s"
}`,
      outputSchema: `{
  "subgraph_id": "sg_cluster_904",
  "adjacent_degree": 4,
  "shared_device_detected": true,
  "cycle_detected": false,
  "fan_out_tree_ratio": 3.8,
  "cluster_density": 0.92
}`,
      keyMetric: 'Traverses 100,000+ edges per second',
    },
    {
      id: 'stage_ml',
      name: 'ML Detection Models',
      shortName: 'GNN Inference',
      category: 'Stage 03 · Graph Neural Net',
      latency: '< 12ms (median 8.6ms)',
      technology: 'SIMD-Accelerated Vector Runtime',
      color: '#818CF8',
      icon: Cpu,
      description:
        'Generates structural graph node embeddings and runs inference against trained mule network, account takeover, and synthetic identity anomaly vectors.',
      inputSchema: `{
  "subgraph_vector": [0.84, -0.22, 0.91, ...],
  "node_count": 4,
  "edge_count": 6
}`,
      outputSchema: `{
  "anomaly_class": "MULE_FAN_OUT_DISPERSION",
  "class_probability": 0.964,
  "embedding_distance": 0.041,
  "structural_drift": "HIGH"
}`,
      keyMetric: '96.4% confidence score generated in 8.6ms',
    },
    {
      id: 'stage_scoring',
      name: 'Risk Decision Engine',
      shortName: 'Risk Scoring',
      category: 'Stage 04 · Policy Evaluation',
      latency: '< 4ms (median 2.1ms)',
      technology: 'Deterministic Rule Matrix & Policy DSL',
      color: '#F59E0B',
      icon: ShieldCheck,
      description:
        'Combines topological anomaly metrics with customer-configured institutional risk thresholds. Formulates human-readable reason strings and pre-settlement directives.',
      inputSchema: `{
  "anomaly_score": 94,
  "class": "MULE_FAN_OUT_DISPERSION",
  "threshold_policy": "STRICT_PRE_SETTLEMENT"
}`,
      outputSchema: `{
  "verdict": "HOLD_FOR_REVIEW",
  "score": 94,
  "confidence": 0.964,
  "reason": "3 accounts linked to 1 device · $2,400 moved in 40s",
  "action": "INTERCEPT"
}`,
      keyMetric: 'Deterministic explainability audit trail',
    },
    {
      id: 'stage_webhook',
      name: 'Pre-Settlement Webhook Output',
      shortName: 'Output Webhook',
      category: 'Stage 05 · Egress',
      latency: '< 3ms (median 1.8ms)',
      technology: 'HTTP/2 Webhook / mTLS & Signature',
      color: '#10B981',
      icon: Webhook,
      description:
        'Dispatches cryptographically signed HMAC payload directly into customer payment gateway or core banking router before funds clear the network.',
      inputSchema: `{
  "verdict": "HOLD_FOR_REVIEW",
  "action": "INTERCEPT"
}`,
      outputSchema: `{
  "status": "DISPATCHED_TO_GATEWAY",
  "settlement_hold_enacted": true,
  "delivery_time_ms": 1.8,
  "signature": "sha256=9a8c7b..."
}`,
      keyMetric: 'Pre-settlement clearance guarantee',
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[1];

  // Coordinates for the 5 stage nodes on an 800 x 140 SVG track
  const nodeCoords = [
    { x: 80, y: 70 },
    { x: 240, y: 70 },
    { x: 400, y: 70 },
    { x: 560, y: 70 },
    { x: 720, y: 70 },
  ];

  // Generate packet positions along the path
  const totalLength = 640; // 720 - 80
  const packetOffsets = [
    (progress * 6.4) % totalLength,
    ((progress + 25) * 6.4) % totalLength,
    ((progress + 50) * 6.4) % totalLength,
    ((progress + 75) * 6.4) % totalLength,
  ];

  return (
    <div
      className={`relative w-full rounded-2xl bg-[#0B0F1A] text-white border border-slate-800 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Top Header & Simulation Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
              Live Architecture Flow
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white font-sans mt-0.5">
            API Ingestion to Pre-Settlement Webhook
          </h3>
        </div>

        {/* Interactive Simulation Controls */}
        <div className="flex items-center gap-3">
          {/* Traffic Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg text-xs font-mono border border-slate-700">
            <button
              onClick={() => setTrafficMode('nominal')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                trafficMode === 'nominal'
                  ? 'bg-slate-900 text-teal-300 font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1.2K tx/s
            </button>
            <button
              onClick={() => setTrafficMode('surge')}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer ${
                trafficMode === 'surge'
                  ? 'bg-[#2F5FFF] text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3 h-3 text-amber-300" />
              <span>45K tx/s Burst</span>
            </button>
          </div>

          {/* Pause / Play Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
            title={isPlaying ? 'Pause packet simulation' : 'Resume packet simulation'}
            aria-label={isPlaying ? 'Pause packet simulation' : 'Resume packet simulation'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* SVG Canvas with Moving SVG Dots along connecting lines */}
      <div className="p-4 sm:p-8 overflow-x-auto">
        <div className="min-w-[760px] relative">
          <svg
            className="w-full h-36 select-none"
            viewBox="0 0 800 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Circuit glow filter */}
              <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Linear gradient for the pipeline track */}
              <linearGradient id="pipeGradient" x1="80" y1="70" x2="720" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2F5FFF" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#2DD4BF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Base static connecting circuit track */}
            <path
              d="M 80 70 L 720 70"
              stroke="#1E293B"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Illuminated active line */}
            <path
              d="M 80 70 L 720 70"
              stroke="url(#pipeGradient)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            {/* Moving SVG Packets (dots moving along connector line) */}
            {packetOffsets.map((offset, i) => {
              const currentX = 80 + offset;
              const packetColors = ['#2DD4BF', '#2F5FFF', '#F59E0B', '#10B981'];
              const currentColor = packetColors[i % packetColors.length];

              return (
                <g key={i}>
                  {/* Outer glow ring for moving dot */}
                  <circle
                    cx={currentX}
                    cy={70}
                    r={trafficMode === 'surge' ? 6 : 5}
                    fill={currentColor}
                    opacity={0.3}
                    filter="url(#glow-teal)"
                  />
                  {/* Core moving SVG dot */}
                  <circle
                    cx={currentX}
                    cy={70}
                    r={trafficMode === 'surge' ? 3.5 : 3}
                    fill={currentColor}
                    className="transition-all duration-75"
                  />
                </g>
              );
            })}

            {/* Render Stage Nodes on SVG */}
            {stages.map((stg, idx) => {
              const coord = nodeCoords[idx];
              const isSelected = activeStageId === stg.id;

              return (
                <g
                  key={stg.id}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => setActiveStageId(stg.id)}
                >
                  {/* Selected halo */}
                  {isSelected && (
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r={28}
                      fill="none"
                      stroke={stg.color}
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="animate-spin origin-center"
                      style={{ transformOrigin: `${coord.x}px ${coord.y}px` }}
                    />
                  )}

                  {/* Outer node circle */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={22}
                    fill="#0F172A"
                    stroke={isSelected ? stg.color : '#334155'}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                  />

                  {/* Inner node indicator */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={7}
                    fill={stg.color}
                    opacity={isSelected ? 1 : 0.7}
                  />

                  {/* Stage number text */}
                  <text
                    x={coord.x}
                    y={coord.y + 4}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    0{idx + 1}
                  </text>

                  {/* Label below node */}
                  <text
                    x={coord.x}
                    y={coord.y + 40}
                    textAnchor="middle"
                    fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                    fontSize="11"
                    fontWeight={isSelected ? '600' : '500'}
                    fontFamily="sans-serif"
                  >
                    {stg.shortName}
                  </text>

                  {/* Latency badge above node */}
                  <text
                    x={coord.x}
                    y={coord.y - 32}
                    textAnchor="middle"
                    fill={stg.color}
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="monospace"
                  >
                    {stg.latency.split(' ')[0]} {stg.latency.split(' ')[1]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Interactive Stage Inspector Panel */}
      <div className="border-t border-slate-800 bg-slate-900/90 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Stage Information */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeStage.color }}
              />
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                {activeStage.category}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs font-mono text-slate-400">{activeStage.technology}</span>
            </div>

            <h4 className="text-2xl font-semibold text-white font-sans">
              {activeStage.name}
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeStage.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Execution Latency</span>
                <span className="text-teal-300 font-semibold">{activeStage.latency}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Security Standard</span>
                <span className="text-slate-200">{activeStage.keyMetric}</span>
              </div>
            </div>
          </div>

          {/* Right: Payload & Data Transformation Schema */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-teal-400" />
                <span>IN-FLIGHT DATA TRANSFORMATION</span>
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Validated In-Flight
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {/* Input payload */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block">Incoming Ingress Schema</span>
                <pre className="text-[11px] text-slate-300 overflow-x-auto leading-relaxed max-h-48">
                  <code>{activeStage.inputSchema}</code>
                </pre>
              </div>

              {/* Output payload */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-teal-400 uppercase block">Stage Egress Payload</span>
                <pre className="text-[11px] text-teal-300 overflow-x-auto leading-relaxed max-h-48">
                  <code>{activeStage.outputSchema}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom telemetry status bar */}
      <div className="px-6 py-3 bg-[#080B13] border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
        <div className="flex items-center gap-4">
          <span>End-to-End Budget: <strong className="text-white">&lt; 45ms P99</strong></span>
          <span className="text-slate-700">|</span>
          <span>Simulation Speed: <strong className="text-teal-300">{trafficMode === 'surge' ? 'High Throughput' : 'Nominal'}</strong></span>
        </div>
        <div className="text-slate-500 text-[11px]">
          Click any stage node to inspect in-flight schema transformation
        </div>
      </div>
    </div>
  );
};
