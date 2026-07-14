"use client";

import { useState } from "react";
import { trainers } from "@/data/fitness";
import Link from "next/link";

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);

  const trainerStats = {
    "t-001": { rating: 4.9, reviews: 287, classesLed: 156, athletes: 142 },
    "t-002": { rating: 4.8, reviews: 198, classesLed: 124, athletes: 98 },
    "t-003": { rating: 4.95, reviews: 312, classesLed: 189, athletes: 167 },
    "t-004": { rating: 4.7, reviews: 156, classesLed: 98, athletes: 84 },
    "t-005": { rating: 4.85, reviews: 221, classesLed: 167, athletes: 121 },
    "t-006": { rating: 4.88, reviews: 267, classesLed: 145, athletes: 136 },
    "t-007": { rating: 4.92, reviews: 298, classesLed: 172, athletes: 154 },
    "t-008": { rating: 4.86, reviews: 245, classesLed: 134, athletes: 119 },
    "t-009": { rating: 4.91, reviews: 278, classesLed: 159, athletes: 148 },
  };

  const trainerSpecialties = {
    "t-001": ["Barbell Training", "Progressive Overload", "Strength Optimization", "Program Design"],
    "t-002": ["Mobility Work", "Joint Health", "Breathing Patterns", "Recovery Protocols"],
    "t-003": ["Combat Sports", "Conditioning", "Mental Toughness", "Striking Mechanics"],
    "t-004": ["Macro Calculation", "Body Composition", "Periodization", "Sport-Specific Nutrition"],
    "t-005": ["Aerobic Development", "Endurance Training", "VO2 Max Optimization", "Distance Training"],
    "t-006": ["Olympic Lifting", "Technical Coaching", "Competition Prep", "Injury Prevention"],
    "t-007": ["Calisthenics", "Muscle-ups", "Bodyweight Mastery", "Gymnastics Skills"],
    "t-008": ["Recovery Protocols", "Myofascial Release", "Injury Prevention", "Rehabilitation"],
    "t-009": ["Mental Resilience", "Visualization", "Peak Performance", "Competition Psychology"],
  };

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Experts</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Elite Trainers.</h1>
          <p className="mt-6 max-w-2xl text-sm font-light text-white/50">Learn from world-class coaches with decades of combined experience. Each trainer specializes in their discipline and brings proven methodology to every session.</p>
        </header>

        {/* Trainers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {trainers.map((trainer) => {
            const stats = trainerStats[trainer.id as keyof typeof trainerStats];
            const specialties = trainerSpecialties[trainer.id as keyof typeof trainerSpecialties] || [];
            return (
              <div
                key={trainer.id}
                onClick={() => setSelectedTrainer(trainer)}
                className="group cursor-pointer rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden transition-all hover:border-[#C5A059]/30"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden bg-white/5">
                  <img 
                    src={trainer.imageUrl} 
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">{trainer.role}</p>
                  <h3 className="mt-2 font-serif text-2xl font-light text-white">{trainer.name}</h3>
                  
                  <p className="mt-3 text-sm font-light text-white/70 line-clamp-2">
                    {trainer.bio}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 grid gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Rating</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-light text-[#C5A059]">{stats.rating}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill={i < Math.floor(stats.rating) ? "#C5A059" : "none"}
                              stroke="#C5A059"
                              strokeWidth="2"
                            >
                              <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.52 19.64 24.78 12 18.52 4.36 24.78 6.45 16.52 0 10.26 8.91 10.26" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Classes Led</span>
                      <span className="text-sm font-light text-white">{stats.classesLed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-white/40">Athletes Trained</span>
                      <span className="text-sm font-light text-white">{stats.athletes}</span>
                    </div>
                  </div>

                  {/* Specialties Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {specialties.slice(0, 2).map((spec, idx) => (
                      <span key={idx} className="text-[9px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 rounded-full px-2 py-1">
                        {spec}
                      </span>
                    ))}
                    {specialties.length > 2 && (
                      <span className="text-[9px] uppercase tracking-wider text-white/50 bg-white/5 rounded-full px-2 py-1">
                        +{specialties.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <button className="mt-4 w-full rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 py-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trainer Detail Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="relative max-h-[90vh] max-w-3xl w-full overflow-y-auto rounded-xl border border-white/10 bg-[#030303] overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTrainer(null)}
              className="absolute right-6 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059] bg-[#030303]/80 backdrop-blur"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            {/* Hero Image */}
            <div className="h-96 overflow-hidden bg-white/5">
              <img 
                src={selectedTrainer.imageUrl} 
                alt={selectedTrainer.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">{selectedTrainer.role}</p>
                <h2 className="mt-2 font-serif text-4xl font-light text-white">{selectedTrainer.name}</h2>
              </div>

              {/* Bio */}
              <p className="text-sm font-light text-white/70 leading-relaxed mb-8 max-w-2xl">
                {selectedTrainer.bio}
              </p>

              {/* Stats */}
              <div className="mb-8 grid gap-4 md:grid-cols-4">
                {[
                  { label: "Rating", value: `${trainerStats[selectedTrainer.id as keyof typeof trainerStats].rating}/5` },
                  { label: "Reviews", value: trainerStats[selectedTrainer.id as keyof typeof trainerStats].reviews },
                  { label: "Classes Led", value: trainerStats[selectedTrainer.id as keyof typeof trainerStats].classesLed },
                  { label: "Athletes Trained", value: trainerStats[selectedTrainer.id as keyof typeof trainerStats].athletes },
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{stat.label}</p>
                    <p className="mt-2 font-serif text-2xl font-light text-[#C5A059]">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Specialties */}
              <div className="mb-8">
                <h3 className="mb-4 font-serif text-lg text-white">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {trainerSpecialties[selectedTrainer.id as keyof typeof trainerSpecialties].map((spec, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 rounded-full px-3 py-1">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 font-serif text-lg text-white">Philosophy</h3>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {selectedTrainer.role.includes("Strength") && "My approach centers on progressive overload and compound movement mastery. Every program is individualized based on your current strength levels and goals. I believe in meeting athletes where they are and progressing them systematically."}
                  {selectedTrainer.role.includes("Mobility") && "Movement quality precedes load. I focus on restoring natural human movement patterns and building tissue resilience. My coaching emphasizes understanding how your body moves and why."}
                  {selectedTrainer.role.includes("Combat") && "Combat sports require physical AND mental fortitude. I build conditioning protocols that prepare you for the demands of actual competition, not just training."}
                  {selectedTrainer.role.includes("Nutrition") && "You cannot out-train a bad diet. I work with athletes to create sustainable, science-backed nutrition protocols that support their training and goals."}
                  {selectedTrainer.role.includes("Endurance") && "Endurance is built through systematic aerobic development. I apply exercise physiology principles to optimize your aerobic capacity and efficiency."}
                  {selectedTrainer.role.includes("Olympic") && "Technical precision in Olympic lifting determines both performance and longevity. I emphasize proper positioning and movement mechanics from day one."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-[10px] uppercase tracking-wider text-black font-semibold transition-all hover:bg-transparent hover:text-[#C5A059]">
                  Book Session
                </button>
                <button 
                  onClick={() => setSelectedTrainer(null)}
                  className="flex-1 rounded-lg border border-white/20 bg-transparent py-3 text-[10px] uppercase tracking-wider text-white transition-all hover:border-white/40"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
