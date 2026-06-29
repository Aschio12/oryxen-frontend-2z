"use client";

import { useState } from "react";
import { sportPrograms, nutritionPlans, classes } from "@/data/fitness";
import Link from "next/link";

export default function Dashboard() {
  const [weeklyStats] = useState({
    sessionsCompleted: 4,
    sessionsPlanned: 5,
    avgIntensity: 82,
    totalVolume: 42000,
    caloriesBurned: 2840,
    averageRHR: 52,
  });

  const [weeklyProgress] = useState([68, 72, 75, 78, 82, 0, 0]);
  const [nutritionTracking] = useState({
    caloriesConsumed: 1950,
    caloriesTarget: 2850,
    proteinConsumed: 168,
    proteinTarget: 190,
    completed: 65,
  });

  const todayProgram = sportPrograms[0];
  const todayWorkout = todayProgram.weeklyPlan[0];
  
  const activeNutrition = nutritionPlans[1];
  const nextMeal = activeNutrition.meals[1];

  const upcomingClass = classes[0];

  const getDateInfo = () => {
    const now = new Date();
    const week = Math.ceil(((now.getDate()) - now.getDay() + 6) / 7);
    return {
      date: now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
      week,
      phase: 'Build',
    };
  };

  const dateInfo = getDateInfo();

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-12 motion-fade">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Overview</p>
              <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">
                Command Center.
              </h1>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                {dateInfo.date}
              </p>
              <p className="mt-1 text-sm font-light text-white/80">Phase: {dateInfo.phase} / Week {dateInfo.week}</p>
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Main Column (2 spans) */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            
            {/* Weekly Stats Overview */}
            <section className="motion-reveal-delayed-1 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 hover:border-[#C5A059]/20 transition-all">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Sessions</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-serif text-3xl font-light text-[#C5A059]">{weeklyStats.sessionsCompleted}</span>
                  <span className="text-xs text-white/50">/ {weeklyStats.sessionsPlanned}</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 bg-[#C5A059]" />
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 hover:border-[#C5A059]/20 transition-all">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Avg Intensity</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-serif text-3xl font-light text-white">{weeklyStats.avgIntensity}</span>
                  <span className="text-xs text-white/50">%</span>
                </div>
                <p className="mt-3 text-xs text-white/60">Optimal for gains</p>
              </div>

              <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 hover:border-[#C5A059]/20 transition-all">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Calories Burned</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-serif text-3xl font-light text-[#E74C3C]">{weeklyStats.caloriesBurned}</span>
                  <span className="text-xs text-white/50">kcal</span>
                </div>
                <p className="mt-3 text-xs text-white/60">This week</p>
              </div>
            </section>

            {/* Today's Workout */}
            <section className="motion-reveal-delayed-1 relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C5A059] opacity-[0.03] blur-3xl" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                <div>
                  <h2 className="text-sm font-light uppercase tracking-[0.2em] text-white/90">Today's Protocol</h2>
                  <p className="mt-1 text-xs text-white/40">{todayProgram.name} • {todayWorkout.type}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A059]/30 text-[#C5A059]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <h3 className="font-serif text-4xl font-light text-white">{todayWorkout.title}</h3>
              
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Intensity</p>
                  <p className="mt-2 text-2xl font-light text-[#C5A059]">{todayProgram.intensity}%</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Duration</p>
                  <p className="mt-2 text-2xl font-light text-white/90">60 min</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Focus</p>
                  <p className="mt-2 text-sm font-light text-white/90">{todayProgram.focus[0]}</p>
                </div>
              </div>
              
              <button className="mt-8 w-full rounded-lg border border-[#C5A059] bg-[#C5A059] py-4 text-xs uppercase tracking-[0.2em] text-black font-semibold transition-all hover:bg-transparent hover:text-[#C5A059]">
                Initiate Workout Session
              </button>
            </section>

            {/* Weekly Progress Chart */}
            <section className="motion-reveal-delayed-2 rounded-xl border border-white/5 bg-[#0A0A0A] p-8">
              <h3 className="font-serif text-xl font-light text-white mb-6">Weekly Intensity Progression</h3>
              
              <div className="flex items-end justify-between gap-3 h-48">
                {weeklyProgress.map((value, idx) => {
                  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                  const hasData = value > 0;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div className="w-full flex flex-col items-center gap-2">
                        {hasData ? (
                          <div className="w-full flex flex-col items-center">
                            <div 
                              className="w-full bg-gradient-to-t from-[#C5A059] to-[#E8D099] rounded-t transition-all hover:from-[#E8D099] hover:to-[#F5E6B3]" 
                              style={{ height: `${(value / 100) * 160}px` }}
                            />
                            <span className="mt-2 text-[10px] font-light text-white/80">{value}%</span>
                          </div>
                        ) : (
                          <div className="w-full h-20 rounded bg-white/5 flex items-center justify-center text-white/20">-</div>
                        )}
                      </div>
                      <span className="mt-2 text-[9px] uppercase tracking-wider text-white/40">{days[idx]}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Nutrition Tracking */}
            <section className="motion-reveal-delayed-2 rounded-xl border border-white/5 bg-[#0A0A0A] p-8">
              <div className="flex items-center justify-between pb-6 mb-8">
                <h2 className="text-sm font-light uppercase tracking-[0.2em] text-white/90">Metabolic State</h2>
                <Link href="/nutrition" className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors">View Plan →</Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white/[0.02] border border-white/5 p-6">
                  <p className="text-xs text-white/50">{activeNutrition.name}</p>
                  <div className="mt-4 flex items-end gap-2 mb-6">
                    <span className="font-serif text-4xl font-light text-white">{nutritionTracking.caloriesConsumed}</span>
                    <span className="mb-1 text-[10px] uppercase tracking-widest text-white/40">/ {nutritionTracking.caloriesTarget} kcal</span>
                  </div>
                  
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full bg-gradient-to-r from-[#3498DB] via-[#2ECC71] to-[#F39C12]" style={{ width: `${(nutritionTracking.caloriesConsumed / nutritionTracking.caloriesTarget) * 100}%` }} />
                  </div>
                </div>

                <div className="rounded-lg bg-[#C5A059]/[0.05] border border-[#C5A059]/20 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">Next Meal</p>
                  <p className="mt-2 text-xl font-light text-white">{nextMeal.name}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-light text-white/70">
                    <span>{nextMeal.calories} kcal</span>
                    <span className="text-right text-[#C5A059]">{nextMeal.protein}g protein</span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-[#C5A059]/20 hover:bg-[#C5A059]/30 text-[10px] uppercase tracking-wider text-[#C5A059] py-2 transition-all">
                    Log Meal
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (1 span) */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            
            {/* Compliance Ring */}
            <section className="motion-reveal-delayed-1 flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] p-8 text-center">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="70" stroke="#ffffff" strokeWidth="8" fill="none" opacity="0.1" />
                  <circle 
                    cx="80" 
                    cy="80" 
                    r="70" 
                    stroke="#C5A059" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeDasharray={`${(88 / 100) * 440} 440`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="flex flex-col z-10">
                  <span className="font-serif text-4xl font-light text-white">88%</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Weekly</span>
                </div>
              </div>
              <p className="mt-6 text-xs font-light text-white/60">On track to hit volume target</p>
            </section>

            {/* Class Schedule */}
            <section className="motion-reveal-delayed-1 rounded-xl border border-white/5 bg-[#0A0A0A] p-6">
              <h2 className="text-[10px] font-light uppercase tracking-[0.2em] text-white/50 mb-6">Upcoming Class</h2>
              <div className="border-l-2 border-[#C5A059] pl-4 mb-6">
                <p className="font-serif text-2xl font-light text-white">{upcomingClass.className}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-[#C5A059]">
                  {new Date(upcomingClass.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-white/5 p-3 text-xs">
                  <span className="text-white/60">Capacity</span>
                  <span className="text-white font-semibold">{upcomingClass.currentEnrollment} / {upcomingClass.capacity}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#C5A059]" style={{ width: `${(upcomingClass.currentEnrollment / upcomingClass.capacity) * 100}%` }} />
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 py-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all">
                Reserve Spot
              </button>
            </section>

            {/* AI Recommendation */}
            <section className="motion-reveal-delayed-2 relative overflow-hidden rounded-xl border border-[#C5A059]/20 bg-gradient-to-b from-[#0A0A0A] to-[#C5A059]/5 p-6">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C5A059] opacity-10 blur-2xl" />
              <div className="flex items-center gap-2 text-[#C5A059] mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                <h2 className="text-[10px] uppercase tracking-widest font-semibold">AI Insight</h2>
              </div>
              <p className="text-sm font-light leading-relaxed text-white/80">
                Your recovery score suggests increasing sleep by 30 minutes tonight. Combined with your protein intake, this will maximize hypertrophy adaptation from today's session.
              </p>
              <button className="mt-5 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">
                View Details →
              </button>
            </section>

            {/* Quick Actions */}
            <section className="motion-reveal-delayed-2 rounded-xl border border-white/5 bg-[#0A0A0A] p-6">
              <h2 className="text-[10px] uppercase tracking-widest text-white/50 mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Link href="/programs" className="block rounded-lg border border-white/10 hover:border-[#C5A059]/50 bg-white/5 hover:bg-white/10 p-3 text-[10px] uppercase tracking-wider text-white/70 hover:text-[#C5A059] transition-all">
                  View Programs
                </Link>
                <Link href="/exercises" className="block rounded-lg border border-white/10 hover:border-[#C5A059]/50 bg-white/5 hover:bg-white/10 p-3 text-[10px] uppercase tracking-wider text-white/70 hover:text-[#C5A059] transition-all">
                  Exercise Library
                </Link>
                <Link href="/coaches" className="block rounded-lg border border-white/10 hover:border-[#C5A059]/50 bg-white/5 hover:bg-white/10 p-3 text-[10px] uppercase tracking-wider text-white/70 hover:text-[#C5A059] transition-all">
                  Meet Coaches
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
