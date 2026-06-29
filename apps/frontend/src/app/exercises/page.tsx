"use client";

import { useState } from "react";
import { exercises } from "@/data/fitness";

const SPORTS = ["All", "Gym", "HIIT", "Recovery", "Combat", "Aerobics", "Calisthenics"];
const LEVELS = ["All", "Beginner", "Intermediate", "Elite"];
const MUSCLE_GROUPS = ["All", "Quads", "Glutes", "Core", "Chest", "Back", "Arms", "Shoulders", "Calves", "Lungs"];

export default function ExercisesPage() {
  const [activeSport, setActiveSport] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  const [activeMuscle, setActiveMuscle] = useState("All");
  const [selectedExercise, setSelectedExercise] = useState<typeof exercises[0] | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredExercises = exercises.filter((ex) => {
    const matchesSport = activeSport === "All" || ex.sport === activeSport;
    const matchesLevel = activeLevel === "All" || ex.level === activeLevel;
    const matchesMuscle = activeMuscle === "All" || ex.targetMuscles.includes(activeMuscle);
    return matchesSport && matchesLevel && matchesMuscle;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

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
            Deconstruct every movement. A comprehensive database of technical executions with detailed form cues and progression variants.
          </p>

          {/* View Toggle */}
          <div className="mt-8 flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                viewMode === "grid"
                  ? "bg-[#C5A059] text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                viewMode === "list"
                  ? "bg-[#C5A059] text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              List
            </button>
          </div>
        </header>

        {/* Filters */}
        <div className="mb-12 space-y-6 motion-reveal-delayed-1">
          {/* Discipline Filter */}
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

          {/* Mastery Filter */}
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

          {/* Muscle Group Filter */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30 md:w-24">Target</span>
            <div className="flex flex-wrap gap-2">
              {MUSCLE_GROUPS.map((muscle) => (
                <button
                  key={muscle}
                  onClick={() => setActiveMuscle(muscle)}
                  className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    activeMuscle === muscle
                      ? "border-[#C5A059]/60 bg-[#C5A059]/10 text-[#C5A059]"
                      : "border-white/10 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {muscle}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 flex items-center justify-between motion-reveal-delayed-2">
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            {filteredExercises.length} movement{filteredExercises.length !== 1 ? "s" : ""} found
          </p>
          {favorites.length > 0 && (
            <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">
              {favorites.length} saved
            </p>
          )}
        </div>

        {/* Results */}
        {filteredExercises.length > 0 ? (
          <>
            {viewMode === "grid" ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
                {filteredExercises.map((ex) => (
                  <article
                    key={ex.id}
                    className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition-all hover:border-[#C5A059]/30"
                  >
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden bg-white/5">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${ex.imageUrl})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                      <button
                        onClick={() => toggleFavorite(ex.id)}
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur transition-all hover:bg-[#C5A059]"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill={favorites.includes(ex.id) ? "currentColor" : "none"}
                          stroke="currentColor" 
                          strokeWidth="2"
                          className={favorites.includes(ex.id) ? "text-[#C5A059]" : ""}
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-[#C5A059]">{ex.sport}</span>
                          <h2 className="mt-1 font-serif text-xl font-light text-white">{ex.name}</h2>
                        </div>
                        <span className="rounded-sm border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-widest text-white/80">
                          {ex.level}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1">
                        {ex.targetMuscles.map(muscle => (
                          <span key={muscle} className="rounded-full bg-white/[0.03] px-2 py-0.5 text-[9px] text-white/50">
                            {muscle}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/5 pt-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-white/30">Sets x Reps</p>
                          <p className="mt-1 text-xs font-light text-white/90">{ex.prescription.sets} x {ex.prescription.reps}</p>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-white/30">Rest</p>
                          <p className="mt-1 text-xs font-light text-white/90">{ex.prescription.restTime}</p>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-white/30">Burn</p>
                          <p className="mt-1 text-xs font-light text-[#C5A059]">{ex.caloriesBurned} kcal</p>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-white/30">Intensity</p>
                          <p className="mt-1 text-xs font-light text-white/90">{ex.intensity}%</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setSelectedExercise(ex)}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 py-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        <span>Details</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="space-y-3 motion-reveal-delayed-2">
                {filteredExercises.map((ex) => (
                  <div
                    key={ex.id}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0A0A0A] p-4 transition-all hover:border-[#C5A059]/30"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div 
                        className="h-16 w-16 rounded-lg bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${ex.imageUrl})` }}
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-light text-white">{ex.name}</h3>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-[9px] uppercase tracking-wider text-[#C5A059]">{ex.sport}</span>
                          <span className="text-[9px] uppercase tracking-wider text-white/50">{ex.level}</span>
                          <span className="text-[9px] uppercase tracking-wider text-white/50">{ex.intensity}% intensity</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Prescription</p>
                        <p className="mt-1 text-sm text-white">{ex.prescription.sets} x {ex.prescription.reps}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Calories</p>
                        <p className="mt-1 text-sm text-[#C5A059]">{ex.caloriesBurned} kcal</p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(ex.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[#C5A059] hover:bg-[#C5A059]/10"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill={favorites.includes(ex.id) ? "currentColor" : "none"}
                          stroke="currentColor" 
                          strokeWidth="2"
                          className={favorites.includes(ex.id) ? "text-[#C5A059]" : "text-white/60"}
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                      </button>
                      <button 
                        onClick={() => setSelectedExercise(ex)}
                        className="rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 px-4 py-2 text-[10px] uppercase tracking-wider text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] text-center motion-reveal-delayed-2">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/10 text-white/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <h3 className="mt-6 font-serif text-2xl font-light text-white">No movements found.</h3>
            <p className="mt-2 text-xs font-light text-white/50">Adjust your filters to expand the search.</p>
            <button 
              onClick={() => { setActiveSport("All"); setActiveLevel("All"); setActiveMuscle("All"); }}
              className="mt-6 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Exercise Detail Modal */}
      {selectedExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="relative max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-[#030303] p-8">
            <button
              onClick={() => setSelectedExercise(null)}
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            <div className="mb-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">{selectedExercise.sport}</span>
                <h2 className="mt-2 font-serif text-3xl font-light text-white">{selectedExercise.name}</h2>
              </div>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
                {selectedExercise.level}
              </span>
            </div>

            <div className="mb-8 h-64 overflow-hidden rounded-lg bg-gradient-to-br from-[#C5A059]/10 to-transparent"
              style={{ backgroundImage: `url(${selectedExercise.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-serif text-lg text-white">Target Muscles</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExercise.targetMuscles.map(muscle => (
                    <span key={muscle} className="rounded-full bg-[#C5A059]/10 px-4 py-2 text-sm text-[#C5A059]">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Prescription</p>
                  <p className="mt-2 text-lg text-white">{selectedExercise.prescription.sets} x {selectedExercise.prescription.reps}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Rest Period</p>
                  <p className="mt-2 text-lg text-white">{selectedExercise.prescription.restTime}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Calories Burned</p>
                  <p className="mt-2 text-lg text-[#C5A059]">{selectedExercise.caloriesBurned} kcal</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Intensity</p>
                  <p className="mt-2 text-lg text-white">{selectedExercise.intensity}%</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-lg text-white">Equipment</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExercise.equipment.map(eq => (
                    <span key={eq} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/70">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-serif text-lg text-white">Execution Instructions</h3>
                <ol className="space-y-3">
                  {selectedExercise.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex gap-3 text-sm font-light text-white/70">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A059]/20 text-xs text-[#C5A059] font-semibold">
                        {idx + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex gap-3 pt-6">
                <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-[10px] uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#C5A059]">
                  Add to Workout
                </button>
                <button 
                  onClick={() => setSelectedExercise(null)}
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
