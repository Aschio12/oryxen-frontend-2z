'use client';

interface TrainerAnimationProps {
  name: string;
  role: string;
}

export function TrainerAnimation({ name, role }: TrainerAnimationProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-52 md:h-52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="trainerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </radialGradient>
          <filter id="trainerGlowFilter">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glow */}
        <circle cx="100" cy="100" r="90" fill="url(#trainerGlow)" className="animate-pulse" />

        {/* Rings */}
        <circle cx="100" cy="100" r="85" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.3" className="animate-spin-slow" />
        <circle cx="100" cy="100" r="70" stroke="#C5A059" strokeWidth="1" opacity="0.15" />

        {/* Coach silhouette */}
        <g className="animate-exercise-movement" filter="url(#trainerGlowFilter)">
          {/* Head */}
          <circle cx="100" cy="45" r="16" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" />
          {/* Torso */}
          <path d="M 100 61 L 100 110" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
          {/* Arms - coaching gesture */}
          <path d="M 100 76 L 60 95 L 55 90" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-arm-left" />
          <path d="M 100 76 L 140 95 L 145 90" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-arm-right" />
          {/* Legs */}
          <path d="M 100 110 L 72 170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
          <path d="M 100 110 L 128 170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />

          {/* Whistle / Badge */}
          <circle cx="100" cy="68" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.2" className="animate-glint" />
        </g>

        {/* Training cones */}
        <g className="animate-equipment">
          <polygon points="30,170 38,155 46,170" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4" fill="#C5A059" fillOpacity="0.05" />
          <polygon points="170,170 178,155 186,170" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.4" fill="#C5A059" fillOpacity="0.05" />
        </g>

        {/* Small star achievements */}
        <g className="animate-star-sparkle">
          <text x="155" y="50" fill="#C5A059" fillOpacity="0.5" fontSize="14">★</text>
        </g>
        <g className="animate-star-sparkle" style={{ animationDelay: '0.5s' }}>
          <text x="170" y="70" fill="#C5A059" fillOpacity="0.3" fontSize="10">★</text>
        </g>

        {/* Initials badge */}
        <rect x="75" y="182" width="50" height="16" rx="8" stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.3" fill="#C5A059" fillOpacity="0.05" />
        <text x="100" y="193" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="7" fontFamily="sans-serif" letterSpacing="2">
          {initials}
        </text>
      </svg>
    </div>
  );
}
