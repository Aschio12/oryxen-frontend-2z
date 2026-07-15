"use client";

import { PremiumCard } from "./PremiumCard";

const testimonials = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "Professional CrossFit Athlete",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=90",
    content:
      "Oryxen transformed my training. The precision coaching and data-driven approach helped me break through plateaus I thought were impossible. My competition times improved by 15% in just 8 weeks.",
    rating: 5,
    stats: "15% Performance Increase",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=90",
    content:
      "The recovery protocols and periodization strategies from Oryxen's elite coaches are next level. I've never felt more confident going into a major competition. This is the competitive edge I needed.",
    rating: 5,
    stats: "Qualified for Olympics",
  },
  {
    id: 3,
    name: "James Park",
    role: "Strength Competitor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=90",
    content:
      "The nutrition science and macro optimization at Oryxen is incredibly sophisticated. Combined with intelligent program design, I've added 40kg to my total in 6 months. Worth every penny.",
    rating: 5,
    stats: "40kg Total Increase",
  },
  {
    id: 4,
    name: "Jessica Chen",
    role: "Fitness Coach & Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=90",
    content:
      "Oryxen's coaching framework helped me elevate my entire training business. The systems are so well-designed that my clients see results faster than ever before. Highly recommend to anyone serious.",
    rating: 5,
    stats: "Coached 100+ Athletes",
  },
  {
    id: 5,
    name: "Marcus Thompson",
    role: "Olympic Weightlifter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=90",
    content:
      "The technical coaching precision through Oryxen is unmatched. Every micro-adjustment in my technique was explained with biomechanical analysis. Improved my snatch form significantly.",
    rating: 5,
    stats: "Personal Record +15kg",
  },
  {
    id: 6,
    name: "Elena Volkov",
    role: "Gymnastics Specialist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=90",
    content:
      "The calisthenics progressions and skill development framework is scientifically superior. Achieved muscle-ups and front levers faster than I ever imagined possible. Game-changing.",
    rating: 5,
    stats: "Advanced Skills Unlocked",
  },
];

export function TestimonialSection() {
  return (
    <section className="relative z-10 py-20 sm:py-28 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 motion-reveal">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">
            ★ ELITE RESULTS ★
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
            Trusted by <span className="text-[#C5A059]">Elite Athletes</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-light">
            Real transformations from real athletes. See how Oryxen has elevated
            performance for hundreds of elite performers worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <PremiumCard
              key={testimonial.id}
              variant="premium"
              className={`motion-stagger-${(index % 5) + 1} group`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#C5A059]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#C5A059]/20 to-transparent mb-6" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#C5A059]/30"
                />
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#C5A059] text-[11px] font-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stat Badge */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                  {testimonial.stats}
                </p>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
