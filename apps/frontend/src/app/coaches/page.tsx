"use client";

import { useState } from "react";
import { trainers } from "@/data/fitness";

interface CoachSpecialty {
  name: string;
  description: string;
}

const coachSpecialties: Record<string, CoachSpecialty[]> = {
  "t-001": [
    { name: "Barbell Movements", description: "Olympic lifting, powerlifting, competition prep" },
    { name: "Strength Programming", description: "Periodized strength cycles and progression" },
    { name: "Performance Enhancement", description: "Athletic development and explosive power" },
  ],
  "t-002": [
    { name: "Joint Mobility", description: "Range of motion development and tissue quality" },
    { name: "Movement Flow", description: "Kinesthetic awareness and biomechanical efficiency" },
    { name: "Longevity Training", description: "Sustainable practice for lifetime athleticism" },
  ],
  "t-003": [
    { name: "Combat Mechanics", description: "Striking technique, footwork, and conditioning" },
    { name: "Anaerobic Conditioning", description: "High-intensity intervals and lactate threshold" },
    { name: "Mental Toughness", description: "Championship psychology and performance under pressure" },
  ],
};

export default function CoachesPage() {
  const [selectedCoach, setSelectedCoach] = useState<typeof trainers[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <header className="mb-16 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Intelligence</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Elite Guidance.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
            The architects behind every protocol. Meet the world-class coaches designing programs rooted in biomechanics, sports science, and proven results.
          </p>
        </header>

        {/* Coaches Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-1">
          {trainers.map((trainer, idx) => (
            <article
              key={trainer.id}
              className="group relative overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_40px_rgba(197,160,89,0.15)]"
              onClick={() => setSelectedCoach(trainer)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#C5A059]/10 to-[#030303]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125"
                  style={{ backgroundImage: `url(${trainer.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                <div className="absolute inset-0 bg-[#C5A059]/0 group-hover:bg-[#C5A059]/5 transition-all duration-500 mix-blend-overlay" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] bg-[#C5A059]/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-[#C5A059]/30 font-semibold">
                      Expert Coach
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">{trainer.role}</p>
                    </div>
                    <h2 className="font-serif text-3xl font-light text-white group-hover:text-[#C5A059] transition-colors">
                      {trainer.name}
                    </h2>
                    <p className="text-xs font-light leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100 line-clamp-3">
                      {trainer.bio}
                    </p>
                    <button className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-wider text-[#C5A059] opacity-0 transition-all duration-500 group-hover:opacity-100 font-semibold hover:gap-3">
                      View Profile
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Coach Detail Modal */}
      {selectedCoach && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="relative max-h-[90vh] max-w-2xl w-full overflow-y-auto rounded-xl border border-white/10 bg-[#030303] p-8">
            <button
              onClick={() => setSelectedCoach(null)}
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            <div className="mb-8">
              <div className="flex items-start gap-6 mb-6">
                <div
                  className="h-32 w-32 rounded-lg bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${selectedCoach.imageUrl})` }}
                />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">{selectedCoach.role}</span>
                  <h2 className="mt-2 font-serif text-3xl font-light text-white">{selectedCoach.name}</h2>
                  <p className="mt-3 text-sm font-light text-white/70">{selectedCoach.bio}</p>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h3 className="mb-4 font-serif text-xl text-white">Core Specializations</h3>
              <div className="space-y-4">
                {coachSpecialties[selectedCoach.id]?.map((specialty, idx) => (
                  <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">{specialty.name}</p>
                    <p className="mt-2 text-sm font-light text-white/70">{specialty.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="mb-4 font-serif text-xl text-white">Background & Experience</h3>
              <div className="space-y-3 text-sm font-light text-white/70">
                <p>With over 15 years of professional coaching experience, {selectedCoach.name} brings world-class expertise to every program design.</p>
                <p>Specialized training in biomechanics and evidence-based methodology ensures that all protocols are both effective and sustainable.</p>
                <p>Personal achievement record includes mentoring 50+ athletes to national/international competition, with consistent podium finishes.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Athletes Coached</p>
                <p className="mt-2 font-serif text-2xl text-[#C5A059]">150+</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Competition Wins</p>
                <p className="mt-2 font-serif text-2xl text-[#C5A059]">47</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Years Experience</p>
                <p className="mt-2 font-serif text-2xl text-[#C5A059]">15+</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-[10px] uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#C5A059]">
                Book Consultation
              </button>
              <button 
                onClick={() => setSelectedCoach(null)}
                className="flex-1 rounded-lg border border-white/20 bg-transparent py-3 text-[10px] uppercase tracking-wider text-white transition-all hover:border-white/40"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
