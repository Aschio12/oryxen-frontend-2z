"use client";

import Link from "next/link";

export default function AnalyticsPage() {
  const weeklyData = [
    { day: "Mon", volume: 28000, intensity: 82, sessions: 1, calories: 520 },
    { day: "Tue", volume: 32000, intensity: 88, sessions: 1, calories: 640 },
    { day: "Wed", volume: 0, intensity: 0, sessions: 0, calories: 0 },
    { day: "Thu", volume: 26000, intensity: 78, sessions: 1, calories: 480 },
    { day: "Fri", volume: 35000, intensity: 90, sessions: 1, calories: 720 },
    { day: "Sat", volume: 0, intensity: 0, sessions: 0, calories: 0 },
    { day: "Sun", volume: 12000, intensity: 55, sessions: 1, calories: 240 },
  ];

  const prStats = [
    { lift: "Bench Press", current: 285, previous: 275, increase: 10, unit: "lbs" },
    { lift: "Squat", current: 385, previous: 365, increase: 20, unit: "lbs" },
    { lift: "Deadlift", current: 455, previous: 445, increase: 10, unit: "lbs" },
    { lift: "Overhead Press", current: 185, previous: 175, increase: 10, unit: "lbs" },
  ];

  const bodyComposition = [
    { week: "Week 1", bodyFat: 18.5, muscleMass: 162, weight: 195 },
    { week: "Week 2", bodyFat: 18.3, muscleMass: 163, weight: 194 },
    { week: "Week 3", bodyFat: 18.1, muscleMass: 164, weight: 194 },
    { week: "Week 4", bodyFat: 17.9, muscleMass: 165, weight: 193 },
    { week: "Week 5", bodyFat: 17.6, muscleMass: 166, weight: 192 },
  ];

  const maxVolume = Math.max(...weeklyData.map(d => d.volume));

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Header */}
        <header className="mb-12">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-white mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Dashboard
          </Link>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Data & Insights</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Performance Analytics.</h1>
          <p className="mt-6 max-w-2xl text-sm font-light text-white/50">Track your progress across all dimensions. Volume, intensity, strength gains, and body composition all in one place.</p>
        </header>

        {/* Key Metrics */}
        <section className="mb-12 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Total Volume This Week</p>
            <p className="mt-2 font-serif text-3xl text-[#C5A059]">163k</p>
            <p className="mt-1 text-xs text-white/50">lbs moved</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 motion-stagger-1">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Average Intensity</p>
            <p className="mt-2 font-serif text-3xl text-white">82%</p>
            <p className="mt-1 text-xs text-white/50">+2% from last week</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 motion-stagger-2">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Sessions Completed</p>
            <p className="mt-2 font-serif text-3xl text-[#2ECC71]">5</p>
            <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-[#2ECC71] to-[#C5A059] animate-progress-shift rounded-full" />
            </div>
            <p className="mt-1 text-xs text-white/50">of 5 planned</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 motion-stagger-3">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Calories Burned</p>
            <p className="mt-2 font-serif text-3xl text-[#E74C3C]">2,600</p>
            <p className="mt-1 text-xs text-white/50">total this week</p>
          </div>
        </section>

        {/* Weekly Volume & Intensity Chart */}
        <section className="mb-12 rounded-lg border border-white/5 bg-[#0A0A0A] p-8">
          <h2 className="mb-6 font-serif text-2xl font-light text-white">Weekly Training Load</h2>
          <div className="flex items-end justify-between gap-2 h-64">
            {weeklyData.map((data, idx) => {
              const volumePercent = (data.volume / maxVolume) * 100;
              const hasData = data.volume > 0;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center gap-1">
                    {hasData ? (
                      <>
                        <div 
                          className="w-full bg-gradient-to-t from-[#C5A059] via-[#E8D099] to-[#F5E6B3] rounded-t transition-all hover:from-[#E8D099] hover:to-white" 
                          style={{ height: `${Math.max(volumePercent, 10)}px` }}
                        />
                        <span className="text-[9px] text-white/60 font-light">{data.intensity}%</span>
                      </>
                    ) : (
                      <div className="w-full h-8 rounded bg-white/5 flex items-center justify-center text-white/20 text-xs">REST</div>
                    )}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-white/40">{data.day}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm">
            <div className="border-l-2 border-[#C5A059] pl-4">
              <p className="text-white/60">Highest Volume Day</p>
              <p className="mt-1 font-light text-white">Friday: 35,000 lbs</p>
            </div>
            <div className="border-l-2 border-[#C5A059] pl-4">
              <p className="text-white/60">Target Weekly Volume</p>
              <p className="mt-1 font-light text-white">175,000 lbs (93% of goal)</p>
            </div>
          </div>
        </section>

        {/* Strength Progression */}
        <section className="mb-12 rounded-lg border border-white/5 bg-[#0A0A0A] p-8">
          <h2 className="mb-6 font-serif text-2xl font-light text-white">Strength Progression</h2>
          <div className="space-y-4">
            {prStats.map((stat, idx) => {
              const percentIncrease = (stat.increase / stat.previous) * 100;
              return (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">{stat.lift}</p>
                      <p className="text-xs text-white/60">Current 1RM estimate</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-2xl font-light text-[#C5A059]">{stat.current}</p>
                      <p className="text-xs text-[#2ECC71]">+{stat.increase} {stat.unit}</p>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#C5A059] to-[#E8D099]"
                      style={{ width: `${Math.min(((stat.current / 500) * 100), 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    {percentIncrease.toFixed(1)}% increase since last cycle
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Body Composition Trends */}
        <section className="mb-12 rounded-lg border border-white/5 bg-[#0A0A0A] p-8">
          <h2 className="mb-6 font-serif text-2xl font-light text-white">Body Composition Trends</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Body Weight */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">Body Weight</p>
              <div className="flex items-end justify-between gap-1 h-40 mb-4">
                {bodyComposition.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-[#3498DB] rounded-t transition-all hover:bg-[#2ECC71]"
                      style={{ height: `${((data.weight / 200) * 130)}px` }}
                    />
                    <span className="text-[8px] text-white/40">{data.week}</span>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#3498DB] pl-4">
                <p className="text-white/60 text-xs">Current: 192 lbs</p>
                <p className="text-white text-sm font-light mt-1">-3 lbs total</p>
              </div>
            </div>

            {/* Muscle Mass */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">Muscle Mass</p>
              <div className="flex items-end justify-between gap-1 h-40 mb-4">
                {bodyComposition.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-[#2ECC71] rounded-t transition-all hover:bg-[#27AE60]"
                      style={{ height: `${((data.muscleMass / 170) * 130)}px` }}
                    />
                    <span className="text-[8px] text-white/40">{data.week}</span>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#2ECC71] pl-4">
                <p className="text-white/60 text-xs">Current: 166 lbs</p>
                <p className="text-white text-sm font-light mt-1">+4 lbs gained</p>
              </div>
            </div>

            {/* Body Fat */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-4">Body Fat %</p>
              <div className="flex items-end justify-between gap-1 h-40 mb-4">
                {bodyComposition.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-[#E74C3C] rounded-t transition-all hover:bg-[#C0392B]"
                      style={{ height: `${((data.bodyFat / 20) * 130)}px` }}
                    />
                    <span className="text-[8px] text-white/40">{data.week}</span>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#E74C3C] pl-4">
                <p className="text-white/60 text-xs">Current: 17.6%</p>
                <p className="text-white text-sm font-light mt-1">-0.9% reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="rounded-lg border border-[#C5A059]/20 bg-gradient-to-b from-[#0A0A0A] to-[#C5A059]/5 p-8">
          <div className="flex items-center gap-2 text-[#C5A059] mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            <h3 className="text-[10px] uppercase tracking-widest font-semibold">AI Recommendations</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-light text-white/80">Your current progression shows +2% intensity improvement this week. Maintain this trajectory by:</p>
            <ul className="space-y-2 text-sm font-light text-white/70">
              <li className="flex gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Increasing weekly volume by 10% next cycle while maintaining intensity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Your body composition is improving - continue current nutrition protocol</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#C5A059]">•</span>
                <span>Schedule a deload week if intensity continues above 88% for 2+ weeks</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
