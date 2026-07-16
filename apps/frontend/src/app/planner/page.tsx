"use client";

import { useState } from "react";
import { sportPrograms, nutritionPlans } from "@/data/fitness";

export default function PlannerPage() {
  const [currentWeek, setCurrentWeek] = useState(3);
  
  // Using active protocols for the planner
  const program = sportPrograms[0];
  const nutrition = nutritionPlans[1];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Header */}
        <header className="mb-12 flex flex-col justify-between gap-6 border-b border-white/5 pb-10 md:flex-row md:items-end motion-fade">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Planner</p>
            <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">
              Microcycle Architect.
            </h1>
          </div>
          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-[#0A0A0A] px-4 py-2">
            <button 
              onClick={() => setCurrentWeek(Math.max(1, currentWeek - 1))}
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span className="w-24 text-center text-[10px] uppercase tracking-widest text-white">Week 0{currentWeek}</span>
            <button 
              onClick={() => setCurrentWeek(Math.min(8, currentWeek + 1))}
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </header>

        {/* Weekly Grid */}
        <div className="grid gap-4 md:grid-cols-7 motion-reveal-delayed-1">
          {days.map((dayName, i) => {
            // Distribute mock workouts somewhat realistically
            const workout = program.weeklyPlan[i]; 
            const isRest = !workout || workout.title === "Active recovery";
            
            return (
              <div key={dayName} className={`flex min-h-[500px] flex-col rounded-xl border p-4 transition-colors hover:border-[#C5A059]/20 motion-stagger-${i + 1} ${i === 0 ? 'border-[#C5A059]/30 bg-[#C5A059]/[0.02]' : 'border-white/5 bg-[#0A0A0A]'}`}>
                
                <div className="border-b border-white/5 pb-4">
                  <span className={`text-[10px] uppercase tracking-widest ${i === 0 ? 'text-[#C5A059]' : 'text-white/30'}`}>
                    {dayName}
                  </span>
                  <p className="mt-1 text-2xl font-light text-white">{i + 14}</p>
                </div>

                {/* Training Block */}
                <div className="mt-6 flex-1">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/30">Training</p>
                  {workout ? (
                    <div className="group cursor-pointer rounded-sm border border-white/10 bg-white/5 p-4 transition-all hover:border-[#C5A059]/50">
                      <div className="flex items-start justify-between">
                        <span className={`text-[8px] uppercase tracking-wider ${isRest ? 'text-blue-400' : 'text-[#C5A059]'}`}>
                          {workout.type}
                        </span>
                        {!isRest && (
                          <div className="flex gap-0.5">
                            <div className="h-2 w-1 bg-[#C5A059]" />
                            <div className="h-2 w-1 bg-[#C5A059]" />
                            <div className="h-2 w-1 bg-white/20" />
                          </div>
                        )}
                      </div>
                      <h3 className="mt-2 font-serif text-lg font-light text-white group-hover:text-[#C5A059] transition-colors">{workout.title}</h3>
                      {!isRest && <p className="mt-2 text-xs font-light text-white/50">60 Min</p>}
                    </div>
                  ) : (
                    <div className="flex h-24 items-center justify-center rounded-sm border border-dashed border-white/10 text-xs font-light text-white/20">
                      Rest Day
                    </div>
                  )}
                </div>

                {/* Nutrition Block */}
                <div className="mt-6">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/30">Metabolic Goal</p>
                  <div className="rounded-sm border border-white/5 bg-black p-3">
                    <p className="text-xs font-light text-white/80">{nutrition.name}</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] font-light">
                      <span className="text-[#C5A059]">{nutrition.dailyCalories} kcal</span>
                      <span className="text-white/40">{nutrition.macros.protein}g Pro</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
