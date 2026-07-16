'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { exercises } from '@/data/fitness';
import { notFound } from 'next/navigation';

export default function ExerciseDetail({ params }: { params: { id: string } }) {
  const exercise = exercises.find(e => e.id === params.id);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);

  if (!exercise) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${exercise.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
        
        <div className="absolute inset-0 flex items-end pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
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
      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#030303]/98 backdrop-blur-xl px-4 md:px-6 lg:px-8 py-5 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Intensity</p>
              <p className="mt-1 text-lg font-light text-[#C5A059]">{exercise.intensity}%</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Difficulty</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.level}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Calories/Set</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.caloriesBurned}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Sets × Reps</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.prescription.sets} × {exercise.prescription.reps}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Rest</p>
              <p className="mt-1 text-lg font-light text-white">{exercise.prescription.restTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Exercise Animation */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden motion-reveal">
                <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-[#C5A059]/5 to-[#030303] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${exercise.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  
                  {/* Animated Exercise Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-64 md:w-64 md:h-80">
                      {/* Body silhouette */}
                      <svg viewBox="0 0 120 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className="animate-exercise-movement">
                          {/* Head */}
                          <circle cx="60" cy="18" r="12" stroke="#C5A059" strokeWidth="2" className="animate-glow-pulse" />
                          {/* Torso */}
                          <line x1="60" y1="30" x2="60" y2="90" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
                          {/* Arms */}
                          <line x1="60" y1="50" x2="35" y2="70" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-left" />
                          <line x1="60" y1="50" x2="85" y2="70" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-arm-right" />
                          {/* Legs */}
                          <line x1="60" y1="90" x2="35" y2="145" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-left" />
                          <line x1="60" y1="90" x2="85" y2="145" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" className="animate-leg-right" />
                          {/* Weight indicator */}
                          <circle cx="60" cy="110" r="8" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse-glow" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Movement Label */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]/80 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C5A059]/20">
                      Movement Pattern
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-[#C5A059]/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <span className="w-2 h-2 rounded-full bg-[#C5A059]/30 animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Muscles */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Target Muscles</h2>
                <div className="grid grid-cols-2 gap-4">
                  {exercise.targetMuscles.map((muscle, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                      <span className="text-white/80 font-light">{muscle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-8">Execution Protocol</h2>
                <div className="space-y-6">
                  {exercise.instructions.map((instruction, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40">
                          <span className="text-sm font-bold text-[#C5A059]">{idx + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/80 font-light leading-relaxed">{instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Performance Optimization</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-l-2 border-[#C5A059] pl-4">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Prescription</p>
                    <p className="mt-2 text-white font-light">
                      {exercise.prescription.sets} sets × {exercise.prescription.reps} repetitions
                    </p>
                    <p className="mt-1 text-[10px] text-white/60">Rest {exercise.prescription.restTime} between sets</p>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-4">
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
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C5A059]">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {eq}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#C5A059] to-[#d4a574] text-black font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-[#C5A059]/50 transition-all duration-300 text-sm uppercase tracking-wider">
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
