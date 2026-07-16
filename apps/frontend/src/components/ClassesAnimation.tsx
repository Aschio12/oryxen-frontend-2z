'use client';

interface ClassesAnimationProps {
  category: string;
  level: string;
  capacityPercent: number;
}

export function ClassesAnimation({ category, level, capacityPercent }: ClassesAnimationProps) {
  const isGym = category === 'Gym';
  const isHiit = category === 'HIIT';
  const isCombat = category === 'Combat';
  const isRecovery = category === 'Recovery';
  const isAerobics = category === 'Aerobics';

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 180" className="w-44 h-40 md:w-56 md:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="classGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="90" r="80" fill="url(#classGlow)" className="animate-pulse" />

        {/* Barbell / Gym */}
        {isGym && (
          <g className="animate-exercise-movement">
            <rect x="35" y="80" width="130" height="6" rx="3" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="40" cy="83" r="10" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <circle cx="160" cy="83" r="10" stroke="#C5A059" strokeWidth="1.5" fill="none" />
            <rect x="92" y="60" width="16" height="20" rx="2" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.1" />
            <text x="100" y="120" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="8" letterSpacing="2">STRENGTH</text>
          </g>
        )}

        {/* HIIT - Lightning */}
        {isHiit && (
          <g className="animate-exercise-movement">
            <path d="M 110 30 L 90 80 L 110 80 L 85 145" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-glow-pulse" />
            <circle cx="60" cy="140" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.3" className="animate-pulse" />
            <circle cx="140" cy="140" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <text x="100" y="168" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="8" letterSpacing="2">EXPLOSIVE</text>
          </g>
        )}

        {/* Combat - Gloves */}
        {isCombat && (
          <g className="animate-exercise-movement">
            <circle cx="70" cy="70" r="18" stroke="#C5A059" strokeWidth="2" className="animate-arm-left" />
            <circle cx="120" cy="50" r="18" stroke="#C5A059" strokeWidth="2" className="animate-arm-right" />
            <circle cx="70" cy="70" r="8" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.15" />
            <circle cx="120" cy="50" r="8" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.15" />
            <text x="100" y="130" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="8" letterSpacing="2">COMBAT</text>
          </g>
        )}

        {/* Recovery - Lotus */}
        {isRecovery && (
          <g className="animate-breath">
            <path d="M 100 40 C 60 60, 40 100, 60 130 C 80 160, 120 160, 140 130 C 160 100, 140 60, 100 40Z" stroke="#C5A059" strokeWidth="1.5" fill="#C5A059" fillOpacity="0.05" />
            <circle cx="100" cy="100" r="8" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.2" />
            <circle cx="100" cy="100" r="20" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" className="animate-spin-slow" />
            <text x="100" y="150" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="8" letterSpacing="2">RECOVERY</text>
          </g>
        )}

        {/* Aerobics - Heart */}
        {isAerobics && (
          <g className="animate-breath">
            <path d="M 100 50 C 60 30, 30 80, 100 140 C 170 80, 140 30, 100 50Z" stroke="#C5A059" strokeWidth="2" fill="#C5A059" fillOpacity="0.08" className="animate-glow-pulse" />
            <path d="M 80 75 L 95 95 L 110 82" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="100" y="165" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="8" letterSpacing="2">ENDURANCE</text>
          </g>
        )}

        {/* Default */}
        {!isGym && !isHiit && !isCombat && !isRecovery && !isAerobics && (
          <g className="animate-exercise-movement">
            <circle cx="100" cy="50" r="16" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" />
            <path d="M 100 66 L 100 110" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <path d="M 100 76 L 60 90" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-left" />
            <path d="M 100 76 L 140 90" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-right" />
            <path d="M 100 110 L 70 160" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-left" />
            <path d="M 100 110 L 130 160" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-right" />
            <text x="100" y="175" textAnchor="middle" fill="#C5A059" fillOpacity="0.6" fontSize="8" letterSpacing="2">TRAINING</text>
          </g>
        )}

        {/* Capacity Ring */}
        <circle
          cx="100"
          cy="90"
          r="78"
          stroke="#C5A059"
          strokeWidth="0.5"
          strokeDasharray={`${capacityPercent * 4.9} ${(100 - capacityPercent) * 4.9}`}
          opacity="0.3"
          transform="rotate(-90 100 90)"
        />
      </svg>
    </div>
  );
}
