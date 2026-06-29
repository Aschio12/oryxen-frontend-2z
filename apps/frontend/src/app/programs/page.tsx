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
      <div className="mx-auto max-w-7xl px-6">
        
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
            {filteredPrograms.map((program) => (
              <article
                key={program.id}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition-all hover:border-[#C5A059]/30"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${program.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute left-5 top-5 flex gap-2">
                    <span className="rounded-sm bg-black/60 px-2 py-1 text-[9px] uppercase tracking-wider text-[#C5A059] backdrop-blur-md">
                      {program.category}
                    </span>
                    <span className="rounded-sm bg-black/60 px-2 py-1 text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-serif text-2xl font-light text-white">{program.name}</h2>
                  <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-white/50">
                    {program.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/5 py-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/30">Goal</p>
                      <p className="mt-1 text-xs font-light text-white/90">{program.goal}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/30">Duration</p>
                      <p className="mt-1 text-xs font-light text-white/90">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/30">Intensity</p>
                      <p className="mt-1 text-xs font-light text-[#C5A059]">{program.intensity}%</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/30">Phases</p>
                      <p className="mt-1 text-xs font-light text-white/90">{program.phases.length}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/programs/${program.id}`}
                    className="mt-6 flex w-full justify-center rounded-sm border border-white/10 bg-white/5 py-3 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-all hover:bg-white hover:text-black"
                  >
                    View Protocol
                  </Link>
                </div>
              </article>
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
