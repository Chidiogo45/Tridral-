import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor,
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Signature 3-node transaction-graph mark */}
      <svg
        className={`${iconSizes[size]} shrink-0 transition-transform duration-200 group-hover:scale-105`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#0B0F1A" stroke="#1E293B" strokeWidth="1" />
        {/* Graph Edges */}
        <path
          d="M9 22L16 9L23 22"
          stroke="#2F5FFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="9"
          y1="22"
          x2="23"
          y2="22"
          stroke="#2DD4BF"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        {/* Nodes */}
        <circle cx="16" cy="9" r="3.2" fill="#2F5FFF" />
        <circle cx="9" cy="22" r="2.8" fill="#2DD4BF" />
        <circle cx="23" cy="22" r="2.8" fill="#2F5FFF" />
        {/* Core highlight dot */}
        <circle cx="16" cy="9" r="1.2" fill="#FFFFFF" />
      </svg>
      {showText && (
        <span
          className={`font-semibold tracking-tight ${textColor || 'text-[#0B0F1A]'} ${textSizes[size]} font-display select-none`}
        >
          Tridral
        </span>
      )}
    </div>
  );
};
