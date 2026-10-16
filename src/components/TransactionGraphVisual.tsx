import React, { useState, useEffect } from 'react';

interface NodeData {
  id: string;
  name: string;
  type: 'account' | 'device' | 'ip' | 'card' | 'mule';
  x: number;
  y: number;
  status: 'clean' | 'flagged' | 'linked';
  details: string;
}

interface EdgeData {
  from: string;
  to: string;
  volume: string;
  type: 'transfer' | 'fingerprint' | 'network';
  flagged?: boolean;
}

export const TransactionGraphVisual: React.FC<{
  interactive?: boolean;
  className?: string;
  compact?: boolean;
}> = ({ interactive = true, className = '', compact = false }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('acc_3');
  const [pulsePhase, setPulsePhase] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePhase((p) => (p + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const nodes: NodeData[] = [
    {
      id: 'acc_1',
      name: 'Account NL40••1829',
      type: 'account',
      x: 120,
      y: 90,
      status: 'clean',
      details: 'Personal checking account · 14 months good history',
    },
    {
      id: 'acc_2',
      name: 'Account DE88••3410',
      type: 'account',
      x: 280,
      y: 60,
      status: 'clean',
      details: 'Business payroll account · Disbursing micro-transfers',
    },
    {
      id: 'dev_1',
      name: 'Device Fingerprint #918b',
      type: 'device',
      x: 230,
      y: 180,
      status: 'linked',
      details: 'Linux / Emulated WebGL fingerprint · 3 concurrent logins',
    },
    {
      id: 'acc_3',
      name: 'Account GB12••9044',
      type: 'mule',
      x: 410,
      y: 190,
      status: 'flagged',
      details: 'Target mule cash-out node · Rapid liquidation to crypto gateway',
    },
    {
      id: 'ip_1',
      name: 'IP Subnet 198.51.100.0/24',
      type: 'ip',
      x: 100,
      y: 250,
      status: 'linked',
      details: 'Datacenter proxy exit node · Sub-second routing hop',
    },
    {
      id: 'acc_4',
      name: 'Account FR76••5511',
      type: 'account',
      x: 350,
      y: 310,
      status: 'clean',
      details: 'Newly provisioned virtual IBAN · Velocity spike',
    },
  ];

  const edges: EdgeData[] = [
    { from: 'acc_1', to: 'dev_1', volume: 'Fingerprint link', type: 'fingerprint' },
    { from: 'acc_2', to: 'dev_1', volume: 'Fingerprint link', type: 'fingerprint' },
    { from: 'ip_1', to: 'dev_1', volume: 'TCP proxy', type: 'network' },
    { from: 'dev_1', to: 'acc_3', volume: '$2,400.00 (40s)', type: 'transfer', flagged: true },
    { from: 'acc_3', to: 'acc_4', volume: '$1,850.00 (15s)', type: 'transfer', flagged: true },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div
      className={`relative rounded-2xl bg-[#0B0F1A] text-white border border-slate-800 overflow-hidden shadow-2xl ${className}`}
    >
      {/* Dynamic graph header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-900/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
          <span className="text-xs font-mono text-teal-400">GRAPH TOPOLOGY EXPLORER</span>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          Nodes: <span className="text-white font-semibold">{nodes.length}</span> · Edges:{' '}
          <span className="text-white font-semibold">{edges.length}</span> · Depth:{' '}
          <span className="text-teal-400 font-semibold">3 hops</span>
        </div>
      </div>

      <div className="relative p-4 sm:p-6 flex flex-col lg:flex-row gap-6 items-center">
        {/* SVG Canvas */}
        <div className="w-full lg:w-3/5 aspect-[4/3] max-h-[360px] relative">
          <svg className="w-full h-full" viewBox="0 0 520 380">
            {/* Background grid lines */}
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E293B" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.6" />

            {/* Render Edges */}
            {edges.map((edge, idx) => {
              const fromNode = nodes.find((n) => n.id === edge.from);
              const toNode = nodes.find((n) => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              const isFlagged = edge.flagged;
              const strokeColor = isFlagged ? '#F43F5E' : '#2F5FFF';

              // Packet animation on edge
              const packetX = fromNode.x + ((toNode.x - fromNode.x) * (pulsePhase / 100));
              const packetY = fromNode.y + ((toNode.y - fromNode.y) * (pulsePhase / 100));

              return (
                <g key={idx}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={strokeColor}
                    strokeWidth={isFlagged ? 2.5 : 1.5}
                    strokeDasharray={isFlagged ? 'none' : '4 3'}
                    strokeOpacity={isFlagged ? 0.9 : 0.45}
                  />
                  {/* Animated data particle traveling along edge */}
                  <circle
                    cx={packetX}
                    cy={packetY}
                    r={isFlagged ? 3 : 2}
                    fill={isFlagged ? '#FDA4AF' : '#2DD4BF'}
                    opacity={pulsePhase > 90 || pulsePhase < 10 ? 0 : 0.9}
                  />
                </g>
              );
            })}

            {/* Render Nodes */}
            {nodes.map((node) => {
              const isSelected = activeNodeId === node.id;
              const isFlagged = node.status === 'flagged';
              const isLinked = node.status === 'linked';

              let fillColor = '#0F172A';
              let strokeColor = '#3B82F6';
              let radius = 16;

              if (isFlagged) {
                fillColor = '#4C0519';
                strokeColor = '#F43F5E';
                radius = 18;
              } else if (isLinked) {
                fillColor = '#042F2E';
                strokeColor = '#2DD4BF';
                radius = 16;
              }

              return (
                <g
                  key={node.id}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => interactive && setActiveNodeId(node.id)}
                >
                  {/* Outer selection ring */}
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius + 8}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  )}

                  {/* Pulsing ring for flagged node */}
                  {isFlagged && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius + 6}
                      fill="none"
                      stroke="#F43F5E"
                      strokeWidth="1"
                      className="animate-radar"
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                  />

                  {/* Center Dot */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={4}
                    fill={isFlagged ? '#FDA4AF' : isLinked ? '#2DD4BF' : '#93C5FD'}
                  />

                  {/* Node Label in Canvas */}
                  <text
                    x={node.x}
                    y={node.y + radius + 14}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Node Detail Inspector */}
        <div className="w-full lg:w-2/5 flex flex-col justify-between bg-slate-900/90 rounded-xl p-5 border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400">
                Selected Graph Entity
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                  activeNode.status === 'flagged'
                    ? 'bg-rose-950 text-rose-300 border border-rose-800'
                    : activeNode.status === 'linked'
                    ? 'bg-teal-950 text-teal-300 border border-teal-800'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                {activeNode.status.toUpperCase()}
              </span>
            </div>

            <h4 className="text-base font-semibold text-white font-display mb-1">
              {activeNode.name}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {activeNode.details}
            </p>

            <div className="space-y-2 border-t border-slate-800 pt-3 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Entity Type</span>
                <span className="text-slate-200 uppercase">{activeNode.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Correlation Degree</span>
                <span className="text-teal-400">k=3 adjacent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Model Inference</span>
                <span
                  className={
                    activeNode.status === 'flagged' ? 'text-rose-400 font-bold' : 'text-slate-300'
                  }
                >
                  {activeNode.status === 'flagged' ? 'Anomaly 94/100' : 'Baseline 12/100'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Click any node in graph to inspect</span>
            <span className="text-teal-400 font-mono">Sub-50ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
