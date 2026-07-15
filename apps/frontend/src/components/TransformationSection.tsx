"use client";

import { PremiumCard } from "./PremiumCard";

const transformations = [
  {
    id: 1,
    name: "David Chen",
    duration: "12 Weeks",
    beforeStats: "Body Fat: 25%, Strength: Beginner",
    afterStats: "Body Fat: 12%, Strength: Advanced",
    beforeImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=90",
    afterImage: "https://images.unsplash.com/photo-1552707881-20efab892c0b?auto=format&fit=crop&w=500&q=90",
    improvement: "Body Recomposition Success",
  },
  {
    id: 2,
    name: "Jessica Miller",
    duration: "16 Weeks",
    beforeStats: "Squat: 60kg, Bench: 40kg",
    afterStats: "Squat: 120kg, Bench: 75kg",
    beforeImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=90",
    afterImage: "https://images.unsplash.com/photo-1552707881-20efab892c0b?auto=format&fit=crop&w=500&q=90",
    improvement: "2x Strength Gains",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    duration: "8 Weeks",
    beforeStats: "No Skill, Beginners Mobility",
    afterStats: "Muscle-ups, Advanced Skills",
    beforeImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=90",
    afterImage: "https://images.unsplash.com/photo-1552707881-20efab892c0b?auto=format&fit=crop&w=500&q=90",
    improvement: "Skill Mastery Achieved",
  },
  {
    id: 4,
    name: "Rachel Foster",
    duration: "10 Weeks",
    beforeStats: "5K Time: 28 min, VO2 Max: 35",
    afterStats: "5K Time: 22 min, VO2 Max: 48",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=500&q=90",
    afterImage: "https://images.unsplash.com/photo-1552707881-20efab892c0b?auto=format&fit=crop&w=500&q=90",
    improvement: "Elite Endurance Reached",
  },
];

export function TransformationSection() {
  return (
    <section className="relative z-10 py-20 sm:py-28 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 motion-reveal">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">
            TRANSFORMATION SHOWCASE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
            Real <span className="text-[#C5A059]">Transformations</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-light">
            See the dramatic results achieved by athletes using Oryxen's
            precision coaching and data-driven programs.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {transformations.map((transformation, index) => (
            <PremiumCard
              key={transformation.id}
              variant="glass"
              className={`motion-stagger-${(index % 5) + 1} overflow-hidden`}
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={transformation.beforeImage}
                    alt="Before"
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">BEFORE</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={transformation.afterImage}
                    alt="After"
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#C5A059]/20 flex items-center justify-center">
                    <span className="text-[#C5A059] font-bold text-sm">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mb-6">
                <div className="mb-4">
                  <p className="text-[11px] uppercase tracking-widest text-white/50 font-light mb-1">
                    Before
                  </p>
                  <p className="text-white/70 font-light text-sm">
                    {transformation.beforeStats}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">
                    After
                  </p>
                  <p className="text-[#C5A059] font-semibold text-sm">
                    {transformation.afterStats}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#C5A059]/20 to-transparent mb-6" />

              {/* Athlete Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white text-sm">
                    {transformation.name}
                  </p>
                  <p className="text-white/50 text-[11px]">
                    Transformation: {transformation.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                    {transformation.improvement}
                  </p>
                </div>
              </div>

              {/* Success Badge */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-light">
                    Verified Success
                  </p>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
