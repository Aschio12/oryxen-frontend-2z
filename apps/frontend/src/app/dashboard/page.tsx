import { sportPrograms, nutritionPlans, classes } from "@/data/fitness";
import Link from "next/link";

export default function Dashboard() {
  const todayProgram = sportPrograms[0]; // Strength Prime
  const todayWorkout = todayProgram.weeklyPlan[0]; // Day 1
  
  const activeNutrition = nutritionPlans[1]; // Hypertrophy Fuel
  const nextMeal = activeNutrition.meals[1]; // Lunch

  const upcomingClass = classes[0];

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
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p className="mt-1 text-sm font-light text-white/80">Phase: Build / Week 3</p>
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Main Column (2 spans) */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            
            {/* Today's Plan */}
            <section className="motion-reveal-delayed-1 relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] p-8 shadow-2xl">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C5A059] opacity-[0.03] blur-3xl" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                  <h2 className="text-sm font-light uppercase tracking-[0.2em] text-white/90">Today's Protocol</h2>
                  <p className="mt-1 text-xs text-white/40">{todayProgram.name} • {todayWorkout.type}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A059]/30 text-[#C5A059]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-3xl font-light text-white">{todayWorkout.title}</h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="rounded-sm border border-white/10 bg-white/5 px-4 py-2">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Intensity</p>
                    <p className="mt-1 text-lg font-light text-[#C5A059]">{todayProgram.intensity}%</p>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/5 px-4 py-2">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Duration</p>
                    <p className="mt-1 text-lg font-light text-white/90">60 Min</p>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/5 px-4 py-2">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Focus</p>
                    <p className="mt-1 text-sm font-light text-white/90">{todayProgram.focus[0]}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="group relative w-full overflow-hidden rounded-sm border border-[#C5A059]/50 bg-transparent py-4 text-xs uppercase tracking-[0.2em] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black">
                    <span className="relative z-10">Initiate Session</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Nutrition Tracking */}
            <section className="motion-reveal-delayed-2 rounded-xl border border-white/5 bg-[#0A0A0A] p-8">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-sm font-light uppercase tracking-[0.2em] text-white/90">Metabolic State</h2>
                <Link href="/nutrition" className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors">View Plan</Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-sm bg-white/[0.02] p-5 border border-white/5">
                  <p className="text-xs text-white/50">{activeNutrition.name}</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-4xl font-light text-white">{activeNutrition.dailyCalories}</span>
                    <span className="mb-1 text-[10px] uppercase tracking-widest text-white/40">Kcal target</span>
                  </div>
                  
                  {/* Macros Bar */}
                  <div className="mt-6 flex h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="bg-[#C5A059]" style={{ width: '40%' }} />
                    <div className="bg-white/40" style={{ width: '35%' }} />
                    <div className="bg-white/20" style={{ width: '25%' }} />
                  </div>
                  <div className="mt-3 flex justify-between text-[9px] uppercase tracking-wider text-white/50">
                    <span>Pro {activeNutrition.macros.protein}g</span>
                    <span>Car {activeNutrition.macros.carbs}g</span>
                    <span>Fat {activeNutrition.macros.fats}g</span>
                  </div>
                </div>

                <div className="rounded-sm bg-[#C5A059]/[0.05] border border-[#C5A059]/20 p-5">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">Next Fueling</p>
                  <p className="mt-1 text-lg font-light text-white">{nextMeal.name}</p>
                  <div className="mt-4 flex gap-4 text-xs font-light text-white/70">
                    <span>{nextMeal.calories} kcal</span>
                    <span>•</span>
                    <span>{nextMeal.protein}g P</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (1 span) */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            
            {/* Class Schedule */}
            <section className="motion-reveal-delayed-1 rounded-xl border border-white/5 bg-[#0A0A0A] p-6">
               <h2 className="text-[10px] font-light uppercase tracking-[0.2em] text-white/50">Upcoming Class</h2>
               <div className="mt-6 border-l border-[#C5A059] pl-4">
                 <p className="text-xl font-light text-white">{upcomingClass.className}</p>
                 <p className="mt-1 text-xs text-[#C5A059]">{new Date(upcomingClass.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
               </div>
               <div className="mt-6 flex items-center justify-between rounded-sm bg-white/5 p-3 text-xs">
                 <span className="text-white/60">Enrollment</span>
                 <span className="text-white">{upcomingClass.currentEnrollment} / {upcomingClass.capacity}</span>
               </div>
            </section>

            {/* AI Recommendation */}
            <section className="motion-reveal-delayed-2 relative overflow-hidden rounded-xl border border-[#C5A059]/20 bg-gradient-to-b from-[#0A0A0A] to-[#C5A059]/5 p-6">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C5A059] opacity-10 blur-2xl" />
              <div className="flex items-center gap-2 text-[#C5A059]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                <h2 className="text-[10px] uppercase tracking-widest">Oryxen Intelligence</h2>
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/80">
                Based on your goal of <strong className="text-white">Muscle Gain</strong> and your recent sleep patterns, we recommend increasing your carbohydrate intake by 15% today to facilitate recovery from yesterday's heavy lower body session.
              </p>
              <button className="mt-5 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">
                Adjust Macros →
              </button>
            </section>
            
            {/* Compliance Ring Mock */}
            <section className="motion-reveal-delayed-2 flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] p-8 text-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-white/5">
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="64" cy="64" r="60" stroke="#C5A059" strokeWidth="4" fill="none" strokeDasharray="377" strokeDashoffset="40" className="transition-all duration-1000" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-white">88%</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/40">Compliance</span>
                </div>
              </div>
              <p className="mt-6 text-xs font-light text-white/60">You are on track to hit your weekly volume target.</p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
