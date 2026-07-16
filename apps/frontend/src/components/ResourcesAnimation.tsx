'use client';

interface ResourcesAnimationProps {
  category: string;
  readTime: number;
}

export function ResourcesAnimation({ category, readTime }: ResourcesAnimationProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 180" className="w-44 h-40 md:w-56 md:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="resourceGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="90" r="80" fill="url(#resourceGlow)" className="animate-pulse" />

        <g className="animate-exercise-movement">
          {/* Book / Document */}
          <rect x="60" y="40" width="80" height="100" rx="4" stroke="#C5A059" strokeWidth="1.5" fill="#C5A059" fillOpacity="0.03" />
          <line x1="75" y1="60" x2="125" y2="60" stroke="#C5A059" strokeWidth="1" opacity="0.4" />
          <line x1="75" y1="80" x2="125" y2="80" stroke="#C5A059" strokeWidth="1" opacity="0.3" />
          <line x1="75" y1="100" x2="110" y2="100" stroke="#C5A059" strokeWidth="1" opacity="0.2" />
          <line x1="100" y1="40" x2="100" y2="140" stroke="#C5A059" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 2" />

          {/* Reading icon */}
          <circle cx="100" cy="120" r="12" stroke="#C5A059" strokeWidth="1" fill="#C5A059" fillOpacity="0.08" className="animate-glint" />
          <path d="M 94 120 L 100 124 L 106 116" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Page turning dots */}
        <circle cx="100" cy="155" r="2" fill="#C5A059" fillOpacity="0.5" className="animate-pulse" />
        <circle cx="115" cy="155" r="2" fill="#C5A059" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="130" cy="155" r="2" fill="#C5A059" fillOpacity="0.15" className="animate-pulse" style={{ animationDelay: '0.6s' }} />

        {/* Category tag */}
        <text x="100" y="30" textAnchor="middle" fill="#C5A059" fillOpacity="0.5" fontSize="7" letterSpacing="2" textTransform="uppercase">
          {category.toUpperCase()}
        </text>

        {/* Read time */}
        <text x="100" y="170" textAnchor="middle" fill="#C5A059" fillOpacity="0.4" fontSize="7" letterSpacing="1">
          {readTime} MIN READ
        </text>
      </svg>
    </div>
  );
}
