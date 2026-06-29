"use client";

import { trainers } from "@/data/fitness";

export default function CoachesPage() {
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
            The architects behind the programming. Meet the world-class coaches ensuring that every protocol is rooted in biomechanics and peak performance science.
          </p>
        </header>

        {/* Results Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-1">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="group relative overflow-hidden rounded-xl bg-[#0A0A0A]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
                  style={{ backgroundImage: `url(${trainer.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#C5A059]/10 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">
                    {trainer.role}
                  </span>
                  <h2 className="mt-2 font-serif text-3xl font-light text-white">
                    {trainer.name}
                  </h2>
                  <p className="mt-4 text-xs font-light leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100 md:-translate-y-4 md:group-hover:translate-y-0">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
