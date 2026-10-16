import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle, ArrowRight, RefreshCw, CheckCircle2, Eye } from 'lucide-react';

interface LiveFlagCardProps {
  className?: string;
  onExploreMore?: () => void;
}

export const LiveFlagCard: React.FC<LiveFlagCardProps> = ({ className = '', onExploreMore }) => {
  const [selectedNode, setSelectedNode] = useState<'node1' | 'node2' | 'node3' | 'device'>('node1');
  const [animationStep, setAnimationStep] = useState<number>(4);
  const [isHolding, setIsHolding] = useState<boolean>(false);
  const [actionDone, setActionDone] = useState<boolean>(false);

  // Trigger sequence on mount or manual replay
  const triggerSequence = () => {
    setAnimationStep(1);
    setActionDone(false);
    setIsHolding(false);

    const t1 = setTimeout(() => setAnimationStep(2), 350);
    const t2 = setTimeout(() => setAnimationStep(3), 700);
    const t3 = setTimeout(() => setAnimationStep(4), 1050);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  useEffect(() => {
    // Initial entrance complete
    setAnimationStep(4);
  }, []);

  const handleAction = () => {
    setIsHolding(true);
    setTimeout(() => {
      setIsHolding(false);
      setActionDone(true);
    }, 600);
  };

  return (
    <div
      className={`relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/5 border border-slate-200/80 transition-all duration-300 hover:border-slate-300 ${className}`}
    >
      {/* Top Header bar with clean status & action bar */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 ring-4 ring-rose-100" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
            Real-Time Anomaly Flag
          </span>
          <span className="text-xs text-slate-400 font-mono">TX-94021</span>
        </div>
        <button
          onClick={triggerSequence}
          title="Replay detection sequence"
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors py-1 px-2 rounded-md hover:bg-slate-100"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Replay</span>
        </button>
      </div>

      {/* Mini Interactive Graph Canvas */}
      <div className="my-5 relative rounded-xl bg-[#0B0F1A] p-4 text-white overflow-hidden shadow-inner">
        {/* Subtle coordinate grid backdrop */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #2DD4BF 1px, transparent 1px), linear-gradient(to bottom, #2DD4BF 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* SVG Graph Drawing */}
          <div className="relative w-48 h-36 shrink-0">
            <svg className="w-full h-full" viewBox="0 0 200 150">
              {/* Connector lines with drawing animation */}
              <line
                x1="100"
                y1="75"
                x2="35"
                y2="45"
                stroke="#2F5FFF"
                strokeWidth="2"
                strokeDasharray="4 2"
                className={`transition-opacity duration-500 ${animationStep >= 2 ? 'opacity-100' : 'opacity-20'}`}
              />
              <line
                x1="100"
                y1="75"
                x2="165"
                y2="45"
                stroke="#2F5FFF"
                strokeWidth="2"
                strokeDasharray="4 2"
                className={`transition-opacity duration-500 ${animationStep >= 2 ? 'opacity-100' : 'opacity-20'}`}
              />
              <line
                x1="100"
                y1="75"
                x2="100"
                y2="125"
                stroke="#F43F5E"
                strokeWidth="2.5"
                className={`transition-opacity duration-500 ${animationStep >= 3 ? 'opacity-100' : 'opacity-20'}`}
              />

              {/* Node: Center Device */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                onClick={() => setSelectedNode('device')}
              >
                <circle cx="100" cy="75" r="16" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
                <circle cx="100" cy="75" r="4" fill="#94A3B8" />
              </g>

              {/* Node 1: Account Alpha */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                onClick={() => setSelectedNode('node1')}
              >
                <circle cx="35" cy="45" r="13" fill="#0F172A" stroke="#2DD4BF" strokeWidth="2" />
                <circle cx="35" cy="45" r="3" fill="#2DD4BF" />
              </g>

              {/* Node 2: Account Beta */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                onClick={() => setSelectedNode('node2')}
              >
                <circle cx="165" cy="45" r="13" fill="#0F172A" stroke="#2DD4BF" strokeWidth="2" />
                <circle cx="165" cy="45" r="3" fill="#2DD4BF" />
              </g>

              {/* Node 3: Flagged Outflow Node (Pulsing Amber/Red) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                onClick={() => setSelectedNode('node3')}
              >
                {/* Radar pulse ring */}
                {animationStep >= 3 && (
                  <circle
                    cx="100"
                    cy="125"
                    r="15"
                    fill="none"
                    stroke="#F43F5E"
                    strokeWidth="1.5"
                    className="animate-radar origin-center"
                  />
                )}
                <circle cx="100" cy="125" r="15" fill="#4C0519" stroke="#F43F5E" strokeWidth="2.5" />
                <circle cx="100" cy="125" r="4" fill="#FDA4AF" />
              </g>
            </svg>
          </div>

          {/* Node detail callout inside the dark frame */}
          <div className="w-full text-left font-mono text-xs space-y-1.5 py-1">
            <div className="text-slate-400 text-[10px] uppercase tracking-wider">
              Correlated Topology
            </div>
            {selectedNode === 'node3' ? (
              <div className="bg-rose-950/40 border border-rose-800/60 rounded p-2 text-rose-200">
                <div className="font-semibold text-rose-300">Target Node (Flagged)</div>
                <div className="text-[11px] text-rose-200/80">Account: NL91••4012</div>
                <div className="text-[11px] text-rose-200/80">Rapid egress: $2,400.00</div>
              </div>
            ) : selectedNode === 'device' ? (
              <div className="bg-slate-800/80 border border-slate-700 rounded p-2 text-slate-300">
                <div className="font-semibold text-white">Shared Hardware Entity</div>
                <div className="text-[11px] text-slate-400">Device ID: fp_88c42b</div>
                <div className="text-[11px] text-teal-400">3 distinct logins &lt; 2m</div>
              </div>
            ) : (
              <div className="bg-slate-800/80 border border-slate-700 rounded p-2 text-slate-300">
                <div className="font-semibold text-white">Origin Feeder Account</div>
                <div className="text-[11px] text-slate-400">Account: DE44••9012</div>
                <div className="text-[11px] text-teal-400">Dispersal outbound</div>
              </div>
            )}
            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
              <span>Graph traversal: 3 hops</span>
              <span className="text-emerald-400">Latency: 14ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Human-readable status line */}
      <div
        className={`mb-4 transition-all duration-300 ${
          animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <p className="text-sm font-semibold text-slate-900 leading-snug">
          3 accounts linked to 1 device · $2,400 moved in 40 seconds
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Coordinated dispersion pattern identified across unassociated customer profiles.
        </p>
      </div>

      {/* Risk Badge and Confidence Meter */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 transition-all duration-300 ${
          animationStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {/* Risk Badge */}
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
          <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
          <div className="text-xs">
            <span className="font-semibold text-rose-950 block">High risk</span>
            <span className="text-rose-700 text-[11px]">Mule network pattern</span>
          </div>
        </div>

        {/* Confidence Indicator */}
        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-600 text-[11px] font-medium">Model Confidence</span>
            <span className="font-mono font-semibold text-slate-900 text-xs">96.4%</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#2F5FFF] h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: animationStep >= 4 ? '96.4%' : '0%' }}
            />
          </div>
        </div>
      </div>

      {/* Action Footer: real UI button tag with pre-settlement status */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="text-slate-400">Pre-settlement state:</span>
          <span className="font-medium text-slate-700">Pending gateway capture</span>
        </div>

        <div>
          {actionDone ? (
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Held for Compliance
            </span>
          ) : (
            <button
              onClick={handleAction}
              disabled={isHolding}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0F1A] text-white hover:bg-slate-800 active:scale-98 transition-all text-xs font-medium shadow-sm cursor-pointer disabled:opacity-60"
            >
              {isHolding ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Holding...</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>Hold for review</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
