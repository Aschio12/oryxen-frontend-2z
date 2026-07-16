"use client";

import { useState } from "react";
import { nutritionPlans } from "@/data/fitness";
import Link from "next/link";

const GOALS = ["All", "Fat loss", "Muscle gain", "Endurance", "Performance"];

export default function NutritionPage() {
  const [activeGoal, setActiveGoal] = useState("All");
  const [favoritePlans, setFavoritePlans] = useState<string[]>([]);

  const filteredPlans = nutritionPlans.filter((plan) => {
    return activeGoal === "All" || plan.goal === activeGoal;
  });

  const toggleFavorite = (id: string) => {
    setFavoritePlans(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Calculate macro percentages
  const getMacroPercentages = (plan: typeof nutritionPlans[0]) => {
    const totalCals = plan.macros.protein * 4 + plan.macros.carbs * 4 + plan.macros.fats * 9;
    return {
      protein: Math.round((plan.macros.protein * 4 / totalCals) * 100),
      carbs: Math.round((plan.macros.carbs * 4 / totalCals) * 100),
      fats: Math.round((plan.macros.fats * 9 / totalCals) * 100),
    };
  };

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <header className="mb-16 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Nutrition</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Metabolic Architecture.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
            Fuel is the foundation of recovery and growth. Each plan is engineered to align perfectly with your physiological goals, meal-by-meal.
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
            {filteredPlans.map((plan, idx) => {
              const macroPercentages = getMacroPercentages(plan);
              return (
                <Link
                  key={plan.id}
                  href={`/nutrition/${plan.id}`}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition-all duration-500 hover:border-[#C5A059]/50 shadow-lg hover:shadow-[0_0_30px_rgba(197,160,89,0.1)] block"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[9px] uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1.5 rounded-full font-semibold border border-[#C5A059]/20">{plan.goal}</span>
                      <button
                        onClick={() => toggleFavorite(plan.id)}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                          favoritePlans.includes(plan.id)
                            ? "bg-[#C5A059]/20 border-[#C5A059]/50 text-[#C5A059]"
                            : "bg-white/5 border-white/10 text-white/50 hover:border-[#C5A059]/50 hover:bg-[#C5A059]/10"
                        }`}
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill={favoritePlans.includes(plan.id) ? "currentColor" : "none"}
                          stroke="currentColor" 
                          strokeWidth="1.5"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                      </button>
                    </div>
                    
                    <h2 className="font-serif text-3xl font-light text-white group-hover:text-[#C5A059] transition-colors">{plan.name}</h2>
                    <p className="mt-3 text-xs font-light leading-relaxed text-white/50">
                      {plan.description}
                    </p>

                    {/* Daily Calories */}
                    <div className="mt-8 flex items-end gap-2 border-b border-white/5 pb-6">
                      <span className="text-5xl font-light text-white">{plan.dailyCalories}</span>
                      <span className="mb-2 text-[10px] uppercase tracking-widest text-white/30">Kcal / Day</span>
                    </div>

                    {/* Macro Breakdown with Visual */}
                    <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                      {/* Macro Bars */}
                      <div className="space-y-4">
                        {/* Protein */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Protein</span>
                            <span className="text-xs font-light text-[#FF6B6B]">{plan.macros.protein}g • {macroPercentages.protein}%</span>
                          </div>
                          <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden border border-white/5">
                            <div 
                              className="h-full bg-gradient-to-r from-[#FF6B6B] via-[#FF8C8C] to-[#FF6B6B]" 
                              style={{ width: `${macroPercentages.protein}%` }}
                            />
                          </div>
                        </div>

                        {/* Carbs */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Carbohydrates</span>
                            <span className="text-xs font-light text-[#4ECDC4]">{plan.macros.carbs}g • {macroPercentages.carbs}%</span>
                          </div>
                          <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden border border-white/5">
                            <div 
                              className="h-full bg-gradient-to-r from-[#4ECDC4] via-[#6EDDD4] to-[#4ECDC4]" 
                              style={{ width: `${macroPercentages.carbs}%` }}
                            />
                          </div>
                        </div>

                        {/* Fats */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Fats</span>
                            <span className="text-xs font-light text-[#FFB84D]">{plan.macros.fats}g • {macroPercentages.fats}%</span>
                          </div>
                          <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden border border-white/5">
                            <div 
                              className="h-full bg-gradient-to-r from-[#FFB84D] via-[#FFC966] to-[#FFB84D]" 
                              style={{ width: `${macroPercentages.fats}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                      <span className="flex-1 rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-[#C5A059] group-hover:bg-[#C5A059]/20 transition-all block">
                        View Meals
                      </span>
                      <span className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-center text-[10px] uppercase tracking-[0.2em] text-black transition-all block">
                        Adopt
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
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
