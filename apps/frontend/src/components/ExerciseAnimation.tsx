'use client';

interface ExerciseAnimationProps {
  name: string;
  intensity: number;
  level: string;
}

export function ExerciseAnimation({ name, intensity, level }: ExerciseAnimationProps) {
  const isUpperBody = name.toLowerCase().includes('bench') || name.toLowerCase().includes('press') || name.toLowerCase().includes('push') || name.toLowerCase().includes('curl');
  const isLowerBody = name.toLowerCase().includes('squat') || name.toLowerCase().includes('deadlift') || name.toLowerCase().includes('lunge') || name.toLowerCase().includes('leg');
  const isPull = name.toLowerCase().includes('row') || name.toLowerCase().includes('pull') || name.toLowerCase().includes('chin');
  const isCore = name.toLowerCase().includes('plank') || name.toLowerCase().includes('crunch') || name.toLowerCase().includes('ab') || name.toLowerCase().includes('core');

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 260" className="w-48 h-60 md:w-60 md:h-80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="100" cy="130" r="90" fill="url(#glowGrad)" className="animate-pulse" />

        {isUpperBody && (
          <g className="animate-exercise-movement">
            <circle cx="100" cy="28" r="14" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" filter="url(#glow)" />
            <line x1="100" y1="42" x2="100" y2="100" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="100" y1="60" x2="60" y2="50" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-left" />
            <line x1="100" y1="60" x2="140" y2="50" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-right" />
            <line x1="100" y1="100" x2="65" y2="170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="100" x2="135" y2="170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            {isPull ? (
              <>
                <line x1="50" y1="85" x2="80" y2="70" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" className="animate-breath" />
                <line x1="150" y1="85" x2="120" y2="70" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" className="animate-breath" />
              </>
            ) : (
              <>
                <line x1="50" y1="45" x2="55" y2="55" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" className="animate-breath" />
                <line x1="150" y1="45" x2="145" y2="55" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" className="animate-breath" />
              </>
            )}
          </g>
        )}

        {isLowerBody && (
          <g className="animate-exercise-movement">
            <circle cx="100" cy="22" r="13" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" filter="url(#glow)" />
            <line x1="100" y1="35" x2="100" y2="95" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="100" y1="55" x2="65" y2="80" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="55" x2="135" y2="80" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="95" x2="65" y2="165" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-left" />
            <line x1="100" y1="95" x2="135" y2="170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-right" />
            <rect x="48" y="155" width="34" height="4" rx="2" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" className="animate-breath" />
            <rect x="118" y="160" width="34" height="4" rx="2" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" className="animate-breath" />
          </g>
        )}

        {isCore && (
          <g className="animate-exercise-movement">
            <circle cx="100" cy="18" r="12" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" filter="url(#glow)" />
            <line x1="100" y1="30" x2="100" y2="85" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="100" y1="45" x2="55" y2="60" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="45" x2="145" y2="60" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="85" x2="70" y2="150" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="85" x2="130" y2="150" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <rect x="80" y="80" width="40" height="18" rx="4" stroke="#C5A059" strokeWidth="1.5" fill="#C5A059" fillOpacity="0.1" className="animate-pulse" />
          </g>
        )}

        {!isUpperBody && !isLowerBody && !isCore && (
          <g className="animate-exercise-movement">
            <circle cx="100" cy="22" r="13" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" filter="url(#glow)" />
            <line x1="100" y1="35" x2="100" y2="100" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="100" y1="60" x2="60" y2="75" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-left" />
            <line x1="100" y1="60" x2="140" y2="75" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-right" />
            <line x1="100" y1="100" x2="65" y2="170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-left" />
            <line x1="100" y1="100" x2="135" y2="170" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-right" />
            <circle cx="100" cy="130" r="12" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" className="animate-breath" />
          </g>
        )}

        {/* Intensity Ring */}
        <circle
          cx="100"
          cy="130"
          r="82"
          stroke="#C5A059"
          strokeWidth="1"
          strokeDasharray={`${intensity * 5.1} ${(100 - intensity) * 5.1}`}
          strokeLinecap="round"
          className="animate-intensity-ring"
          opacity="0.3"
          transform="rotate(-90 100 130)"
        />

        {/* Level Badge Dots */}
        <g className="animate-date-pulse">
          {level === 'Beginner' && (
            <>
              <circle cx="50" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.3" />
              <circle cx="65" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.3" />
              <circle cx="80" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.3" />
            </>
          )}
          {level === 'Intermediate' && (
            <>
              <circle cx="50" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.5" />
              <circle cx="65" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.5" />
              <circle cx="80" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.3" />
            </>
          )}
          {(level === 'Advanced' || level === 'Elite') && (
            <>
              <circle cx="50" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" />
              <circle cx="65" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" />
              <circle cx="80" cy="225" r="4" stroke="#C5A059" strokeWidth="1" fill="#C5A059" />
            </>
          )}
        </g>
      </svg>

      {/* Floating Movement Description */}
      <div className="absolute top-6 right-2 md:right-6 animate-date-pulse">
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" style={{ animationDelay: '0.3s' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/30" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      <div className="absolute bottom-4 left-4">
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059]/60 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C5A059]/15">
          {isUpperBody ? 'Upper Body' : isLowerBody ? 'Lower Body' : isCore ? 'Core' : 'Full Body'}
        </span>
      </div>
    </div>
  );
}
