'use client';

interface GalleryAnimationProps {
  category: string;
}

export function GalleryAnimation({ category }: GalleryAnimationProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 180" className="w-44 h-40 md:w-56 md:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="galleryGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2ECC71" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2ECC71" stopOpacity="0" />
          </radialGradient>
          <clipPath id="imgClip">
            <rect x="50" y="30" width="100" height="120" rx="8" />
          </clipPath>
        </defs>

        <circle cx="100" cy="90" r="80" fill="url(#galleryGlow)" className="animate-pulse" />

        <g className="animate-exercise-movement">
          {/* Image frame */}
          <rect x="50" y="30" width="100" height="120" rx="8" stroke="#2ECC71" strokeWidth="1.5" fill="#2ECC71" fillOpacity="0.03" />

          {/* Before/After split */}
          <rect x="50" y="30" width="50" height="120" rx="8" fill="#2ECC71" fillOpacity="0.06" clipPath="url(#imgClip)" />
          <line x1="100" y1="30" x2="100" y2="150" stroke="#2ECC71" strokeWidth="1" strokeDasharray="3 3" className="animate-transform-slider" />

          {/* Arrow indicators */}
          <text x="75" y="170" textAnchor="middle" fill="#2ECC71" fillOpacity="0.4" fontSize="7" letterSpacing="1">BEFORE</text>
          <text x="125" y="170" textAnchor="middle" fill="#2ECC71" fillOpacity="0.6" fontSize="7" letterSpacing="1">AFTER</text>

          {/* Growth chart */}
          <path d="M 30 140 L 45 130 L 55 110 L 70 120 L 85 100 L 100 80 L 115 60 L 130 50 L 145 40 L 160 30"
            stroke="#2ECC71" strokeWidth="1" fill="none" opacity="0.3" />

          {/* Highlight dot on chart */}
          <circle cx="160" cy="30" r="3" fill="#2ECC71" className="animate-pulse" />
        </g>
      </svg>
    </div>
  );
}
