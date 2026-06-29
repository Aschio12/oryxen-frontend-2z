"use client";

import { useState } from "react";
import { exercises } from "@/data/fitness";

const SPORTS = ["All", "Gym", "HIIT", "Recovery", "Combat", "Aerobics", "Calisthenics"];
const LEVELS = ["All", "Beginner", "Intermediate", "Elite"];

export default function ExercisesPage() {
  const [activeSport, setActiveSport] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredExercises = exercises.filter((ex) => {
    const matchesSport = activeSport === "All" || ex.sport === activeSport;
    const matchesLevel = activeLevel === "All" || ex.level === activeLevel;
    return matchesSport && matchesLevel;
  });

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-16 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Library</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Movement Mechanics.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
            Deconstruct every movement. A comprehensive database of technical executions, categorized by discipline and mastery level.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-12 space-y-6 motion-reveal-delayed-1">
          {/* Sport Filter */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30 md:w-24">Discipline</span>
            <div className="flex flex-wrap gap-2">
              {SPORTS.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setActiveSport(sport)}
                  className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    activeSport === sport
                      ? "border-[#C5A059] bg-[#C5A059] text-black"
                      : "border-white/10 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {sport}
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
        {filteredExercises.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
            {filteredExercises.map((ex) => (
              <article
                key={ex.id}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-[#C5A059]/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A059]">{ex.sport}</span>
                    <h2 className="mt-1 font-serif text-2xl font-light text-white">{ex.name}</h2>
                  </div>
                  <span className="rounded-sm border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-widest text-white">
                    {ex.level}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {ex.targetMuscles.map(muscle => (
                    <span key={muscle} className="rounded-full bg-white/[0.03] px-3 py-1 text-[10px] text-white/60">
                      {muscle}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/30">Sets x Reps</p>
                    <p className="mt-1 text-sm font-light text-white/90">{ex.prescription.sets} x {ex.prescription.reps}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/30">Rest</p>
                    <p className="mt-1 text-sm font-light text-white/90">{ex.prescription.restTime}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/30">Burn</p>
                    <p className="mt-1 text-sm font-light text-[#C5A059]">{ex.caloriesBurned} kcal</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/30">Equipment</p>
                    <p className="mt-1 truncate text-sm font-light text-white/90" title={ex.equipment.join(", ")}>
                      {ex.equipment.length > 0 ? ex.equipment[0] : "Bodyweight"}
                      {ex.equipment.length > 1 && "+"}
                    </p>
                  </div>
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-sm bg-[#C5A059]/10 py-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>View Execution</span>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] text-center motion-reveal-delayed-2">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/10 text-white/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <h3 className="mt-6 font-serif text-2xl font-light text-white">No movements found.</h3>
            <p className="mt-2 text-xs font-light text-white/50">Adjust your mastery or discipline filters to expand the search.</p>
            <button 
              onClick={() => { setActiveSport("All"); setActiveLevel("All"); }}
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
