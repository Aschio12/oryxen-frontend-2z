"use client";

import { useState } from "react";
import { nutritionPlans } from "@/data/fitness";

const GOALS = ["All", "Fat loss", "Muscle gain", "Endurance", "Performance"];

export default function NutritionPage() {
  const [activeGoal, setActiveGoal] = useState("All");

  const filteredPlans = nutritionPlans.filter((plan) => {
    return activeGoal === "All" || plan.goal === activeGoal;
  });

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-16 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Nutrition</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Metabolic Architecture.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
            Fuel is the foundation of recovery and growth. Browse our engineered nutrition tracks designed to perfectly align with your physiological objectives.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-12 space-y-6 motion-reveal-delayed-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/30 md:w-24">Objective</span>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setActiveGoal(goal)}
                  className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    activeGoal === goal
                      ? "border-[#C5A059] bg-[#C5A059] text-black"
                      : "border-white/10 bg-transparent text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredPlans.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
            {filteredPlans.map((plan) => (
              <article
                key={plan.id}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition-all hover:border-[#C5A059]/30"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A059]">{plan.goal}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </span>
                  </div>
                  
                  <h2 className="mt-4 font-serif text-3xl font-light text-white">{plan.name}</h2>
                  <p className="mt-3 text-xs font-light leading-relaxed text-white/50">
                    {plan.description}
                  </p>

                  <div className="mt-8 flex items-end gap-2 border-b border-white/5 pb-6">
                    <span className="text-5xl font-light text-white">{plan.dailyCalories}</span>
                    <span className="mb-2 text-[10px] uppercase tracking-widest text-white/30">Kcal / Day</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-light">
                      <span className="text-white/60">Protein</span>
                      <span className="text-white">{plan.macros.protein}g</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-light">
                      <span className="text-white/60">Carbohydrates</span>
                      <span className="text-white">{plan.macros.carbs}g</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-light">
                      <span className="text-white/60">Fats</span>
                      <span className="text-white">{plan.macros.fats}g</span>
                    </div>
                  </div>

                  <button className="mt-10 w-full rounded-sm border border-[#C5A059]/30 bg-transparent py-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black">
                    Adopt Protocol
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] text-center motion-reveal-delayed-2">
            <h3 className="font-serif text-2xl font-light text-white">No nutrition tracks found.</h3>
            <p className="mt-2 text-xs font-light text-white/50">Adjust your objective filter to expand the search.</p>
            <button 
              onClick={() => setActiveGoal("All")}
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
