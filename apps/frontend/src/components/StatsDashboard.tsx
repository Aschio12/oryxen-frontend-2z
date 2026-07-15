"use client";

import { PremiumCard } from "./PremiumCard";

const stats = [
  {
    id: 1,
    value: "1,250+",
    label: "Elite Athletes",
    subtext: "Worldwide",
    icon: "👥",
  },
  {
    id: 2,
    value: "94%",
    label: "Goal Achievement",
    subtext: "Success Rate",
    icon: "🎯",
  },
  {
    id: 3,
    value: "48",
    label: "Training Programs",
    subtext: "Specializations",
    icon: "📋",
  },
  {
    id: 4,
    value: "9",
    label: "Elite Coaches",
    subtext: "World-Class",
    icon: "🏆",
  },
  {
    id: 5,
    value: "50+",
    label: "Nutrition Plans",
    subtext: "Science-Based",
    icon: "🥗",
  },
  {
    id: 6,
    value: "24/7",
    label: "Platform Access",
    subtext: "Anytime, Anywhere",
    icon: "⏰",
  },
];

export function StatsDashboard() {
  return (
    <section className="relative z-10 py-20 sm:py-28 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 motion-reveal">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">
            BY THE NUMBERS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
            Oryxen <span className="text-[#C5A059]">Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-light">
            Proven results backed by data. Real athletes, real transformations,
            real excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <PremiumCard
              key={stat.id}
              variant="gradient"
              className={`motion-stagger-${(index % 5) + 1} text-center group cursor-pointer`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {stat.icon}
              </div>

              {/* Value */}
              <p className="text-4xl sm:text-5xl font-bold text-[#C5A059] mb-2">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>

              {/* Subtext */}
              <p className="text-white/60 text-sm font-light">{stat.subtext}</p>

              {/* Animated bottom border */}
              <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
