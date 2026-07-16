'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { exercises } from '@/data/fitness';
import { notFound } from 'next/navigation';
import { ExerciseAnimation } from '@/components/ExerciseAnimation';

export default function ExerciseDetail({ params }: { params: { id: string } }) {
  const exercise = exercises.find(e => e.id === params.id);

  if (!exercise) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center motion-pan-slow"
          style={{ backgroundImage: `url(${exercise.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
        
        <div className="absolute inset-0 flex items-end pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Link href="/exercises" className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to exercises
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 motion-reveal mb-6">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{exercise.sport}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{exercise.level}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{exercise.intensity}% Intensity</span>
            </div>
            
            <h1 className="font-serif text-5xl font-light md:text-7xl motion-reveal-delayed-1">{exercise.name}</h1>
            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/70 motion-reveal-delayed-2">
              Master this fundamental movement pattern with precision form and progressive loading strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#030303]/98 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-5 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div className="motion-stagger-1">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Intensity</p>
              <div className="mt-1 flex items-center gap-2">
                <p className="text-lg font-light text-[#C5A059]">{exercise.intensity}%</p>
                <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden max-w-[60px]">
                  <div className="h-full bg-[#C5A059] rounded-full animate-progress-shift" style={{ width: `${exercise.intensity}%` }} />
                </div>
              </div>
            </div>
            <div className="motion-stagger-2">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Difficulty</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.level}</p>
            </div>
            <div className="motion-stagger-3">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Calories/Set</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.caloriesBurned}</p>
            </div>
            <div className="motion-stagger-4">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Sets × Reps</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.prescription.sets} × {exercise.prescription.reps}</p>
            </div>
            <div className="motion-stagger-5">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Rest</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.prescription.restTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Exercise Animation */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden motion-reveal">
                <div className="relative h-[350px] md:h-[450px] bg-gradient-to-br from-[#C5A059]/5 via-[#0A0A0A] to-[#030303] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${exercise.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExerciseAnimation name={exercise.name} intensity={exercise.intensity} level={exercise.level} />
                  </div>
                </div>
              </div>

              {/* Target Muscles */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl text-white">Target Muscles</h2>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full">
                    {exercise.targetMuscles.length} muscles
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {exercise.targetMuscles.map((muscle, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/5 transition-all group"
                      style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="w-2 h-2 rounded-full bg-[#C5A059] group-hover:scale-150 transition-transform" />
                      <span className="text-white/80 font-light group-hover:text-white transition-colors">{muscle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-8">Execution Protocol</h2>
                <div className="space-y-6">
                  {exercise.instructions.map((instruction, idx) => (
                    <div key={idx} className="flex gap-4 group hover:bg-white/[0.02] p-3 -mx-3 rounded-lg transition-all">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 group-hover:bg-[#C5A059]/30 group-hover:scale-110 transition-all">
                          <span className="text-sm font-bold text-[#C5A059]">{idx + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/80 font-light leading-relaxed group-hover:text-white/90 transition-colors">{instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Performance Optimization</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-l-2 border-[#C5A059] pl-4 motion-stagger-1">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Prescription</p>
                    <p className="mt-2 text-white font-light">
                      {exercise.prescription.sets} sets × {exercise.prescription.reps} repetitions
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">Rest {exercise.prescription.restTime} between sets</p>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-4 motion-stagger-2">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Energy Expenditure</p>
                    <p className="mt-2 text-white font-light">
                      {exercise.caloriesBurned} calories per set
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">
                      ~{Math.round(exercise.caloriesBurned * exercise.prescription.sets)} total per session
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Equipment */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 motion-reveal sticky top-32">
                <h3 className="font-serif text-lg text-white mb-4">Requirements</h3>
                
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-3">Equipment</p>
                  <div className="space-y-2">
                    {exercise.equipment.map((eq, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C5A059] animate-equipment" style={{ animationDelay: `${idx * 0.3}s` }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {eq}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#C5A059] to-[#d4a574] text-black font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-[#C5A059]/50 transition-all duration-300 text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]">
                  Add to Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
