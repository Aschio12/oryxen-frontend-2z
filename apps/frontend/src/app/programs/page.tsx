"use client";

import { useState } from "react";
import Link from "next/link";
import { sportPrograms } from "@/data/fitness";

const CATEGORIES = ["All", "Gym", "HIIT", "Recovery", "Combat", "Aerobics", "Calisthenics", "Yoga"];
const LEVELS = ["All", "Beginner", "Intermediate", "Elite"];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredPrograms = sportPrograms.filter((program) => {
    const matchesCategory = activeCategory === "All" || program.category === activeCategory;
    const matchesLevel = activeLevel === "All" || program.level === activeLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <header className="mb-16 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Disciplines</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Training Architectures.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
            Select a discipline engineered for your specific physiological goals. Filter by modality and mastery level to find the exact stimulus your body requires.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-12 space-y-6 motion-reveal-delayed-1">
          {/* Category Filter */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30 md:w-24">Modality</span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-[#C5A059] bg-[#C5A059] text-black"
                      : "border-white/10 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30 md:w-24">Mastery</span>
            <div className="flex flex-wrap gap-2">
              {LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setActiveLevel(lvl)}
                  className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    activeLevel === lvl
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
            {filteredPrograms.map((program, idx) => (
              <Link
                key={program.id}
                href={`/programs/${program.id}`}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition-all duration-500 hover:border-[#C5A059]/50 hover:shadow-[0_0_30px_rgba(197,160,89,0.1)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#C5A059]/20 to-[#030303]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125"
                    style={{ backgroundImage: `url(${program.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-80" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-lg bg-[#C5A059]/25 px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md border border-[#C5A059]/40 font-semibold">{program.category}</span>
                    <span className="rounded-lg bg-white/15 px-3 py-1.5 text-[9px] uppercase tracking-widest text-white/80 backdrop-blur-md border border-white/20 font-semibold">{program.level}</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 right-4 space-y-1 text-right">
                    <p className="text-[8px] uppercase tracking-widest text-white/50">Duration</p>
                    <p className="text-lg font-light text-white font-serif">{program.duration}</p>
                    <div className="mt-2 flex items-center justify-end gap-1 text-[#C5A059]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                      <span className="text-[9px] font-semibold">{program.intensity}%</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="font-serif text-2xl font-light text-white group-hover:text-[#C5A059] transition-colors flex-1">
                      {program.name}
                    </h2>
                    <div className="h-8 w-8 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059]/100 group-hover:bg-[#C5A059]/10 transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-light leading-relaxed text-white/70 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {program.focus.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-[8px] uppercase tracking-wider text-[#C5A059]/70 bg-[#C5A059]/10 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-white/40">Intensity</p>
                        <p className="mt-1 text-lg font-light text-[#C5A059] font-serif">{program.intensity}%</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-white/40">Phases</p>
                        <p className="mt-1 text-lg font-light text-white font-serif">{program.phases.length}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-white/40">Weekly</p>
                        <p className="mt-1 text-lg font-light text-white font-serif">{program.weeklyPlan.length}x</p>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] text-center motion-reveal-delayed-2">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/10 text-white/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <h3 className="mt-6 font-serif text-2xl font-light text-white">No active protocols found.</h3>
            <p className="mt-2 text-xs font-light text-white/50">Adjust your mastery or modality filters to expand the search.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setActiveLevel("All"); }}
              className="mt-6 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
