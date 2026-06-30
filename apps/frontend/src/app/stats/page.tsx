"use client";

import { useState } from "react";
import Link from "next/link";

export default function StatsPage() {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("month");

  const stats = {
    week: {
      totalWorkouts: 5,
      totalVolume: 163000,
      avgIntensity: 82,
      caloriesBurned: 2600,
      personalRecords: 2,
      streak: 12
    },
    month: {
      totalWorkouts: 22,
      totalVolume: 682000,
      avgIntensity: 79,
      caloriesBurned: 11480,
      personalRecords: 8,
      streak: 12
    },
    year: {
      totalWorkouts: 287,
      totalVolume: 8976000,
      avgIntensity: 76,
      caloriesBurned: 152400,
      personalRecords: 94,
      streak: 12
    }
  };

  const currentStats = stats[timeRange];

  const topLifts = [
    { lift: "Deadlift", weight: "455 lbs", date: "2 weeks ago", pr: true },
    { lift: "Bench Press", weight: "285 lbs", date: "1 week ago", pr: true },
    { lift: "Squat", weight: "385 lbs", date: "3 days ago", pr: false },
  ];

  const workoutDistribution = [
    { program: "Strength Prime", count: 8, color: "#3498DB" },
    { program: "Elite Engine", count: 6, color: "#E74C3C" },
    { program: "Shred Summit", count: 5, color: "#2ECC71" },
    { program: "Mobility Restore", count: 3, color: "#F39C12" },
  ];

  const trainingLoad = [
    { week: "W1", load: 42 },
    { week: "W2", load: 38 },
    { week: "W3", load: 45 },
    { week: "W4", load: 41 },
  ];

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-12">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-white mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Dashboard
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Statistics</p>
              <h1 className="mt-2 font-serif text-4xl font-light text-white">Training Stats.</h1>
            </div>
            <div className="flex gap-2">
              {["week", "month", "year"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range as any)}
                  className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                    timeRange === range
                      ? "bg-[#C5A059] text-black"
                      : "border border-white/20 text-white/60 hover:border-white/40"
                  }`}
                >
                  {range === "week" ? "This Week" : range === "month" ? "This Month" : "This Year"}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Key Metrics */}
        <section className="mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Workouts</p>
            <p className="mt-3 font-serif text-3xl font-light text-[#C5A059]">{currentStats.totalWorkouts}</p>
            <p className="mt-1 text-xs text-white/50">sessions</p>
          </div>

          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Total Volume</p>
            <p className="mt-3 font-serif text-3xl font-light text-white">{(currentStats.totalVolume / 1000).toFixed(0)}k</p>
            <p className="mt-1 text-xs text-white/50">lbs moved</p>
          </div>

          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Avg Intensity</p>
            <p className="mt-3 font-serif text-3xl font-light text-white">{currentStats.avgIntensity}%</p>
            <p className="mt-1 text-xs text-white/50">average</p>
          </div>

          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Calories Burned</p>
            <p className="mt-3 font-serif text-3xl font-light text-[#E74C3C]">{currentStats.caloriesBurned.toLocaleString()}</p>
            <p className="mt-1 text-xs text-white/50">kcal</p>
          </div>

          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Personal Records</p>
            <p className="mt-3 font-serif text-3xl font-light text-[#2ECC71]">{currentStats.personalRecords}</p>
            <p className="mt-1 text-xs text-white/50">achieved</p>
          </div>

          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Consistency</p>
            <p className="mt-3 font-serif text-3xl font-light text-[#F39C12]">{currentStats.streak}</p>
            <p className="mt-1 text-xs text-white/50">day streak</p>
          </div>
        </section>

        {/* Charts Row */}
        <section className="mb-12 grid gap-6 lg:grid-cols-2">
          
          {/* Program Distribution */}
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-8">
            <h2 className="mb-6 font-serif text-2xl font-light text-white">Program Distribution</h2>
            <div className="space-y-4">
              {workoutDistribution.map((prog, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-light text-white">{prog.program}</p>
                      <span className="text-sm font-light text-white/60">{prog.count} sessions</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full"
                        style={{ width: `${(prog.count / 22) * 100}%`, backgroundColor: prog.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Load Trend */}
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-8">
            <h2 className="mb-6 font-serif text-2xl font-light text-white">Training Load Trend</h2>
            <div className="flex items-end justify-between gap-2 h-48 mb-4">
              {trainingLoad.map((week, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-[#C5A059] to-[#E8D099] rounded-t transition-all hover:from-[#E8D099] hover:to-white"
                    style={{ height: `${Math.max(week.load, 20)}px` }}
                  />
                  <span className="text-[9px] uppercase tracking-wider text-white/40">{week.week}</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-white/50 text-center">Average Load: 41.5</div>
          </div>
        </section>

        {/* Top Lifts */}
        <section className="rounded-lg border border-white/5 bg-[#0A0A0A] p-8">
          <h2 className="mb-6 font-serif text-2xl font-light text-white">Recent Personal Records</h2>
          <div className="space-y-4">
            {topLifts.map((lift, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 hover:border-[#C5A059]/30 transition-all">
                <div>
                  <p className="font-semibold text-white">{lift.lift}</p>
                  <p className="text-xs text-white/50 mt-1">{lift.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl font-light text-[#C5A059]">{lift.weight}</p>
                  {lift.pr && (
                    <span className="text-[10px] uppercase tracking-wider text-[#2ECC71] font-semibold">PR</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="mt-12 rounded-lg border border-[#C5A059]/20 bg-gradient-to-b from-[#0A0A0A] to-[#C5A059]/5 p-8">
          <div className="flex items-center gap-2 text-[#C5A059] mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            <h3 className="text-[10px] uppercase tracking-widest font-semibold">Performance Insights</h3>
          </div>
          <div className="space-y-3 text-sm font-light text-white/80">
            <p>✓ Your consistency is excellent - 12-day streak maintained</p>
            <p>✓ Total volume trending up - great progression this month</p>
            <p>✓ 8 personal records achieved - keep the momentum going</p>
            <p>✓ Average intensity at 79% - well-balanced training load</p>
          </div>
        </section>
      </div>
    </main>
  );
}
