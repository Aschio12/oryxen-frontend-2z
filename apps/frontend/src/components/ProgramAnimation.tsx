'use client';

interface ProgramAnimationProps {
  phases: string[];
  intensity: number;
  duration: string;
}

export function ProgramAnimation({ phases, intensity, duration }: ProgramAnimationProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <svg viewBox="0 0 300 200" className="w-full max-w-sm h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="phaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.4" />
          </linearGradient>
          <filter id="phaseGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Line */}
        <line x1="30" y1="100" x2="270" y2="100" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

        {/* Phase Nodes */}
        {phases.map((phase, idx) => {
          const x = 30 + (idx * 240) / (phases.length - 1 || 1);
          const isActive = idx < Math.ceil(intensity / 25);
          return (
            <g key={idx}>
              <circle
                cx={x}
                cy={100}
                r={isActive ? 12 : 8}
                stroke="#C5A059"
                strokeWidth={isActive ? 2.5 : 1.5}
                fill={isActive ? "#C5A059" : "transparent"}
                fillOpacity={isActive ? 0.2 : 0}
                className={isActive ? "animate-phase-pulse" : ""}
                filter={isActive ? "url(#phaseGlow)" : undefined}
              />
              <text
                x={x}
                y={100}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isActive ? "#C5A059" : "#C5A059"}
                fillOpacity={isActive ? 1 : 0.4}
                fontSize="10"
                fontWeight="bold"
                fontFamily="monospace"
              >
                {idx + 1}
              </text>
              <text
                x={x}
                y={144}
                textAnchor="middle"
                fill="#C5A059"
                fillOpacity={isActive ? 0.8 : 0.4}
                fontSize="9"
                fontFamily="sans-serif"
                letterSpacing="2"
                textTransform="uppercase"
              >
                {phase.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Duration Badge */}
        <rect x="100" y="170" width="100" height="22" rx="11" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.3" fill="#C5A059" fillOpacity="0.05" />
        <text x="150" y="185" textAnchor="middle" fill="#C5A059" fillOpacity="0.7" fontSize="9" fontFamily="sans-serif" letterSpacing="2">
          {duration.toUpperCase()}
        </text>

        {/* Intensity Arc */}
        <path
          d="M 40 170 A 80 80 0 0 1 260 170"
          stroke="#C5A059"
          strokeWidth="1"
          strokeDasharray={`${intensity * 2.2} ${(100 - intensity) * 2.2}`}
          strokeOpacity="0.2"
          fill="none"
        />
        <circle cx={40 + (intensity * 220) / 100} cy={170} r="3" fill="#C5A059" className="animate-pulse" />

        {/* Pulse Dots */}
        <circle cx="30" cy="100" r="3" fill="#C5A059" fillOpacity="0.5" className="animate-pulse" />
        <circle cx="270" cy="100" r="3" fill="#C5A059" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
      </svg>
    </div>
  );
}
