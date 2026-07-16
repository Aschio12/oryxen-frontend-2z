"use client";

import { useState } from "react";
import Link from "next/link";

interface WorkoutExercise {
  id: string;
  name: string;
  setsCompleted: number;
  totalSets: number;
  repsPerSet: string;
  weight?: string;
  rpe: number;
  notes: string;
}

interface ActiveWorkout {
  id: string;
  programName: string;
  workoutName: string;
  startedAt: string;
  elapsedMinutes: number;
  exercises: WorkoutExercise[];
  intensity: number;
  caloriesBurned: number;
  heartRate: {
    current: number;
    average: number;
    max: number;
  };
}

export default function WorkoutPage() {
  const [activeWorkout] = useState<ActiveWorkout>({
    id: "session-001",
    programName: "Strength Prime",
    workoutName: "Push Mechanics - Day 1",
    startedAt: "2026-06-29T06:00:00Z",
    elapsedMinutes: 42,
    intensity: 84,
    caloriesBurned: 245,
    heartRate: {
      current: 132,
      average: 118,
      max: 154
    },
    exercises: [
      {
        id: "ex-1",
        name: "Barbell Bench Press",
        setsCompleted: 3,
        totalSets: 5,
        repsPerSet: "4-6",
        weight: "285 lbs",
        rpe: 8,
        notes: "Feeling strong, good bar speed"
      },
      {
        id: "ex-2",
        name: "Incline Dumbbell Press",
        setsCompleted: 2,
        totalSets: 4,
        repsPerSet: "8-10",
        weight: "80 lbs",
        rpe: 7,
        notes: "Smooth reps, controlled tempo"
      },
      {
        id: "ex-3",
        name: "Cable Flye",
        setsCompleted: 1,
        totalSets: 3,
        repsPerSet: "12-15",
        weight: "100 lbs",
        rpe: 6,
        notes: "Full stretch at bottom"
      }
    ]
  });

  const totalSets = activeWorkout.exercises.reduce((sum, ex) => sum + ex.totalSets, 0);
  const completedSets = activeWorkout.exercises.reduce((sum, ex) => sum + ex.setsCompleted, 0);
  const progressPercent = Math.round((completedSets / totalSets) * 100);

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Timer */}
        <header className="mb-12">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-white mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Dashboard
          </Link>

          <div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-8 mb-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">Active Session</p>
                <h1 className="mt-2 font-serif text-4xl font-light text-white">{activeWorkout.workoutName}</h1>
                <p className="mt-2 text-sm text-white/60">{activeWorkout.programName}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Elapsed Time</p>
                <p className="mt-1 font-serif text-4xl font-light text-white">{activeWorkout.elapsedMinutes}'</p>
              </div>
            </div>

            {/* Vital Stats */}
            <div className="grid gap-4 md:grid-cols-4 border-t border-white/5 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">Heart Rate</p>
                <p className="mt-2 font-serif text-2xl text-[#E74C3C]">{activeWorkout.heartRate.current} bpm</p>
                <p className="mt-1 text-xs text-white/50">avg: {activeWorkout.heartRate.average} / max: {activeWorkout.heartRate.max}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">Calories</p>
                <p className="mt-2 font-serif text-2xl text-[#2ECC71]">{activeWorkout.caloriesBurned}</p>
                <p className="mt-1 text-xs text-white/50">kcal burned</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">Intensity</p>
                <p className="mt-2 font-serif text-2xl text-[#C5A059]">{activeWorkout.intensity}%</p>
                <p className="mt-1 text-xs text-white/50">Target: 85%</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">Sets Progress</p>
                <p className="mt-2 font-serif text-2xl text-white">{completedSets}/{totalSets}</p>
                <p className="mt-1 text-xs text-white/50">{progressPercent}% complete</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] uppercase tracking-wider text-white/40">Workout Completion</p>
              <p className="text-sm font-light text-[#C5A059]">{progressPercent}%</p>
            </div>
            <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#C5A059] to-[#E8D099] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        {/* Exercise Tracking */}
        <section>
          <h2 className="mb-6 font-serif text-2xl font-light text-white">Exercise Breakdown</h2>
          <div className="space-y-4">
            {activeWorkout.exercises.map((exercise, idx) => {
              const exerciseProgress = (exercise.setsCompleted / exercise.totalSets) * 100;
              return (
                <div
                  key={exercise.id}
                  className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-[#C5A059]/30"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Exercise {idx + 1}</p>
                      <h3 className="mt-1 font-serif text-xl text-white">{exercise.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="rounded-full bg-[#C5A059]/20 px-3 py-1 text-xs text-[#C5A059]">
                        RPE {exercise.rpe}/10
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3 mb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Sets</p>
                      <p className="mt-1 text-lg font-light text-white">
                        {exercise.setsCompleted}/{exercise.totalSets}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Reps</p>
                      <p className="mt-1 text-lg font-light text-white">{exercise.repsPerSet}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Weight</p>
                      <p className="mt-1 text-lg font-light text-[#C5A059]">{exercise.weight}</p>
                    </div>
                  </div>

                  {/* Set Progress */}
                  <div className="mb-4">
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full bg-[#C5A059] transition-all duration-300"
                        style={{ width: `${exerciseProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  {exercise.notes && (
                    <div className="rounded-lg bg-white/5 p-3 border-l-2 border-[#C5A059]">
                      <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Notes</p>
                      <p className="text-sm font-light text-white/70">{exercise.notes}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 py-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all">
                      Log Set
                    </button>
                    <button className="flex-1 rounded-lg border border-white/10 bg-transparent py-2 text-[10px] uppercase tracking-wider text-white/60 hover:border-white/30 transition-all">
                      Edit
                    </button>
                    <button className="flex-1 rounded-lg border border-white/10 bg-transparent py-2 text-[10px] uppercase tracking-wider text-white/60 hover:border-white/30 transition-all">
                      Rest Timer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Session Actions */}
        <div className="mt-12 flex gap-3">
          <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-4 text-[10px] uppercase tracking-wider text-black font-semibold hover:bg-transparent hover:text-[#C5A059] transition-all">
            Complete Workout
          </button>
          <button className="flex-1 rounded-lg border border-white/20 bg-transparent py-4 text-[10px] uppercase tracking-wider text-white hover:border-white/40 transition-all">
            Pause Session
          </button>
          <button className="flex-1 rounded-lg border border-red-500/30 bg-red-500/10 py-4 text-[10px] uppercase tracking-wider text-red-500/70 hover:bg-red-500/20 transition-all">
            Exit Workout
          </button>
        </div>
      </div>
    </main>
  );
}
