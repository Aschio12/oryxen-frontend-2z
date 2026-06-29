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
      <div className="mx-auto max-w-7xl px-6">
        
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-1">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="group relative overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-[#C5A059]/30 transition-all cursor-pointer"
              onClick={() => setSelectedCoach(trainer)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${trainer.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#C5A059]/10 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">
                      {trainer.role}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-3xl font-light text-white">
                      {trainer.name}
                    </h2>
                    <p className="mt-4 text-xs font-light leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100 md:-translate-y-4 md:group-hover:translate-y-0">
                      {trainer.bio}
                    </p>
                    <button className="mt-6 text-[10px] uppercase tracking-wider text-[#C5A059] opacity-0 transition-all duration-500 group-hover:opacity-100">
                      View Profile →
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
