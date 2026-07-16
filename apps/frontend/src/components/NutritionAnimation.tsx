'use client';

interface NutritionAnimationProps {
  protein: number;
  carbs: number;
  fats: number;
  dailyCalories: number;
}

export function NutritionAnimation({ protein, carbs, fats, dailyCalories }: NutritionAnimationProps) {
  const total = protein * 4 + carbs * 4 + fats * 9;
  const proteinPct = Math.round((protein * 4 / total) * 100);
  const carbsPct = Math.round((carbs * 4 / total) * 100);
  const fatsPct = Math.round((fats * 9 / total) * 100);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 220 180" className="w-48 h-40 md:w-60 md:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nutriGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="110" cy="90" r="80" fill="url(#nutriGlow)" className="animate-pulse" />

        {/* Plate */}
        <circle cx="110" cy="95" r="50" stroke="#C5A059" strokeWidth="1" opacity="0.2" />
        <circle cx="110" cy="95" r="48" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />

        {/* Macro Segments */}
        <g className="animate-exercise-movement">
          <path
            d="M 110 95 L 110 47 A 48 48 0 0 1 162 76 Z"
            fill="#FF6B6B"
            fillOpacity="0.15"
            stroke="#FF6B6B"
            strokeWidth="1.5"
            className="animate-breath"
          />
          <path
            d="M 110 95 L 162 76 A 48 48 0 0 1 147 136 Z"
            fill="#4ECDC4"
            fillOpacity="0.15"
            stroke="#4ECDC4"
            strokeWidth="1.5"
            className="animate-breath"
            style={{ animationDelay: '0.3s' }}
          />
          <path
            d="M 110 95 L 147 136 A 48 48 0 0 1 62 136 Z"
            fill="#FFB84D"
            fillOpacity="0.15"
            stroke="#FFB84D"
            strokeWidth="1.5"
            className="animate-breath"
            style={{ animationDelay: '0.6s' }}
          />
        </g>

        {/* Center dot */}
        <circle cx="110" cy="95" r="4" fill="#C5A059" fillOpacity="0.5" className="animate-pulse" />

        {/* Calories */}
        <text x="110" y="92" textAnchor="middle" fill="#C5A059" fillOpacity="0.7" fontSize="10" fontWeight="bold" fontFamily="monospace">
          {dailyCalories}
        </text>
        <text x="110" y="102" textAnchor="middle" fill="#C5A059" fillOpacity="0.4" fontSize="6" letterSpacing="1">
          KCAL
        </text>

        {/* Legend */}
        <rect x="10" y="150" width="8" height="8" rx="2" fill="#FF6B6B" fillOpacity="0.5" />
        <text x="22" y="157" fill="#FF6B6B" fillOpacity="0.7" fontSize="7" fontFamily="sans-serif">{proteinPct}% PRO</text>
        
        <rect x="75" y="150" width="8" height="8" rx="2" fill="#4ECDC4" fillOpacity="0.5" />
        <text x="87" y="157" fill="#4ECDC4" fillOpacity="0.7" fontSize="7" fontFamily="sans-serif">{carbsPct}% CARB</text>
        
        <rect x="148" y="150" width="8" height="8" rx="2" fill="#FFB84D" fillOpacity="0.5" />
        <text x="160" y="157" fill="#FFB84D" fillOpacity="0.7" fontSize="7" fontFamily="sans-serif">{fatsPct}% FAT</text>
      </svg>
    </div>
  );
}
