"use client";

import { trainers } from "@/data/fitness";
import Link from "next/link";

export default function CoachesPage() {

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
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
            <Link
              key={trainer.id}
              href={`/trainers/${trainer.id}`}
              className="group relative overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_40px_rgba(197,160,89,0.15)] block"
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
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
