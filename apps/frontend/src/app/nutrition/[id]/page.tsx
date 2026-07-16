'use client';

import Link from 'next/link';
import { nutritionPlans } from '@/data/fitness';
import { notFound } from 'next/navigation';
import { NutritionAnimation } from '@/components/NutritionAnimation';

export default function NutritionDetail({ params }: { params: { id: string } }) {
  const plan = nutritionPlans.find(p => p.id === params.id);
  if (!plan) return notFound();

  const totalCals = plan.macros.protein * 4 + plan.macros.carbs * 4 + plan.macros.fats * 9;
  const macroPercentages = {
    protein: Math.round((plan.macros.protein * 4 / totalCals) * 100),
    carbs: Math.round((plan.macros.carbs * 4 / totalCals) * 100),
    fats: Math.round((plan.macros.fats * 9 / totalCals) * 100),
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-[#030303] to-[#030303]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(197,160,89,0.1),transparent_60%)]" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
            <Link href="/nutrition" className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to nutrition
            </Link>
            <div className="flex flex-wrap items-center gap-3 motion-reveal mb-4">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{plan.goal}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{plan.dailyCalories} kcal/day</span>
            </div>
            <h1 className="font-serif text-4xl font-light md:text-6xl motion-reveal-delayed-1">{plan.name}</h1>
            <p className="mt-4 max-w-2xl text-sm font-light text-white/60 motion-reveal-delayed-2">{plan.description}</p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#030303]/98 backdrop-blur-xl px-4 md:px-6 lg:px-8 py-4 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between">
          <div className="flex gap-6 text-sm">
            <div className="motion-stagger-1"><span className="text-[9px] uppercase tracking-widest text-white/40">Protein</span><p className="mt-1 text-[#FF6B6B] animate-counter">{plan.macros.protein}g</p></div>
            <div className="motion-stagger-2"><span className="text-[9px] uppercase tracking-widest text-white/40">Carbs</span><p className="mt-1 text-[#4ECDC4] animate-counter">{plan.macros.carbs}g</p></div>
            <div className="motion-stagger-3"><span className="text-[9px] uppercase tracking-widest text-white/40">Fats</span><p className="mt-1 text-[#FFB84D] animate-counter">{plan.macros.fats}g</p></div>
          </div>
          <button className="rounded-lg bg-[#C5A059] px-6 py-2 text-[10px] uppercase tracking-wider text-black font-semibold hover:bg-[#d4a574] transition-all hover:scale-[1.02] active:scale-[0.98]">
            Download Plan
          </button>
        </div>
      </section>

      <section className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-[1400px]">
          {/* Nutrition Animation */}
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden mb-12 motion-reveal">
            <div className="relative h-[280px] bg-gradient-to-br from-[#C5A059]/5 via-[#0A0A0A] to-[#030303] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)]" />
              <div className="absolute top-4 left-4">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059]/60 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C5A059]/15">
                  Macro Breakdown
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <NutritionAnimation
                  protein={plan.macros.protein}
                  carbs={plan.macros.carbs}
                  fats={plan.macros.fats}
                  dailyCalories={plan.dailyCalories}
                />
              </div>
            </div>
          </div>

          {/* Macro Overview */}
          <div className="grid gap-8 md:grid-cols-4 mb-12 motion-reveal">
            <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 text-center hover:border-[#C5A059]/30 transition-all motion-stagger-1">
              <p className="text-[10px] uppercase tracking-wider text-white/40">Total Calories</p>
              <p className="mt-2 font-serif text-3xl text-white">{plan.dailyCalories}</p>
              <p className="text-[10px] text-white/40">kcal/day</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 text-center hover:border-[#FF6B6B]/30 transition-all motion-stagger-2">
              <p className="text-[10px] uppercase tracking-wider text-white/40">Protein</p>
              <p className="mt-2 font-serif text-3xl text-[#FF6B6B]">{plan.macros.protein}g</p>
              <p className="text-[10px] text-white/40">{macroPercentages.protein}% of calories</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 text-center hover:border-[#4ECDC4]/30 transition-all motion-stagger-3">
              <p className="text-[10px] uppercase tracking-wider text-white/40">Carbs</p>
              <p className="mt-2 font-serif text-3xl text-[#4ECDC4]">{plan.macros.carbs}g</p>
              <p className="text-[10px] text-white/40">{macroPercentages.carbs}% of calories</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 text-center hover:border-[#FFB84D]/30 transition-all motion-stagger-4">
              <p className="text-[10px] uppercase tracking-wider text-white/40">Fats</p>
              <p className="mt-2 font-serif text-3xl text-[#FFB84D]">{plan.macros.fats}g</p>
              <p className="text-[10px] text-white/40">{macroPercentages.fats}% of calories</p>
            </div>
          </div>

          {/* Macro Bars */}
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 mb-12 motion-reveal">
            <h2 className="font-serif text-2xl text-white mb-8">Macronutrient Distribution</h2>
            <div className="space-y-6">
              {[
                { label: 'Protein', grams: plan.macros.protein, pct: macroPercentages.protein, color: '#FF6B6B', gradient: 'from-[#FF6B6B] via-[#FF8C8C] to-[#FF6B6B]' },
                { label: 'Carbohydrates', grams: plan.macros.carbs, pct: macroPercentages.carbs, color: '#4ECDC4', gradient: 'from-[#4ECDC4] via-[#6EDDD4] to-[#4ECDC4]' },
                { label: 'Fats', grams: plan.macros.fats, pct: macroPercentages.fats, color: '#FFB84D', gradient: 'from-[#FFB84D] via-[#FFC966] to-[#FFB84D]' },
              ].map((macro, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">{macro.label}</span>
                    <span className="text-xs font-light" style={{ color: macro.color }}>{macro.grams}g &bull; {macro.pct}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden border border-white/5">
                    <div className={`h-full bg-gradient-to-r ${macro.gradient} animate-progress-shift transition-all duration-1000`} style={{ width: `${macro.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meal Schedule */}
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 mb-12 motion-reveal">
            <h2 className="font-serif text-2xl text-white mb-8">Daily Meal Schedule</h2>
            <div className="space-y-4">
              {plan.meals.map((meal, idx) => (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-[#C5A059]/30 transition-all hover:bg-white/[0.07] hover:shadow-lg hover:shadow-[#C5A059]/5 group"
                  style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-semibold text-white group-hover:text-[#C5A059] transition-colors">{meal.name}</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059] mt-1">{meal.time}</p>
                    </div>
                    <span className="rounded-full bg-[#C5A059]/20 px-3 py-1 text-sm font-light text-[#C5A059]">{meal.calories} cal</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="border-l-2 border-[#FF6B6B] pl-3">
                      <p className="text-white/50">Protein</p>
                      <p className="mt-1 text-white font-semibold">{meal.protein}g</p>
                    </div>
                    <div className="border-l-2 border-[#4ECDC4] pl-3">
                      <p className="text-white/50">Carbs</p>
                      <p className="mt-1 text-white font-semibold">{meal.carbs}g</p>
                    </div>
                    <div className="border-l-2 border-[#FFB84D] pl-3">
                      <p className="text-white/50">Fats</p>
                      <p className="mt-1 text-white font-semibold">{meal.fats}g</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
            <h2 className="font-serif text-2xl text-white mb-6">Protocol Guidelines</h2>
            <div className="space-y-4">
              {plan.guidelines.map((guideline, idx) => (
                <div key={idx} className="flex gap-4 items-start group hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-all">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5A059]/20 text-xs text-[#C5A059] font-semibold flex-shrink-0 group-hover:bg-[#C5A059]/30 group-hover:scale-110 transition-all">{idx + 1}</span>
                  <p className="text-sm font-light text-white/70 leading-relaxed pt-0.5 group-hover:text-white/80 transition-colors">{guideline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
