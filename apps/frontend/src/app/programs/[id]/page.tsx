"use client";

import { useState } from "react";
import Link from "next/link";
import { sportPrograms } from "@/data/fitness";
import { notFound } from "next/navigation";

export default function ProgramDetail({ params }: { params: { id: string } }) {
  const program = sportPrograms.find(p => p.id === params.id);
  const [activeTab, setActiveTab] = useState<"overview" | "phases" | "schedule" | "guidelines" | "comparison">("overview");
  const [savedToFavorites, setSavedToFavorites] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState<"info" | "confirm">("info");

  if (!program) {
    return notFound();
  }

  const phaseWeeks = Math.ceil(parseInt(program.duration.split(" ")[0]) / program.phases.length);

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${program.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
        
        <div className="absolute inset-0 flex items-end pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
            <Link href="/programs" className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to library
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 motion-reveal mb-6">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{program.category}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{program.level}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{program.duration}</span>
            </div>
            
            <h1 className="font-serif text-5xl font-light md:text-7xl motion-reveal-delayed-1">{program.name}</h1>
            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/70 motion-reveal-delayed-2">
              {program.description}
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
              <p className="mt-1 text-lg font-light text-[#C5A059]">{program.intensity}%</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Duration</p>
              <p className="mt-1 text-lg font-light text-white">{program.duration}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Phases</p>
              <p className="mt-1 text-lg font-light text-white">{program.phases.length}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-white/40">Weekly</p>
              <p className="mt-1 text-lg font-light text-white">{program.weeklyPlan.length} sessions</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setSavedToFavorites(!savedToFavorites)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider transition-all ${
                  savedToFavorites 
                    ? "bg-[#C5A059] text-black" 
                    : "border border-white/20 bg-transparent text-white/60 hover:border-[#C5A059] hover:text-[#C5A059]"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill={savedToFavorites ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                {savedToFavorites ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Navigation */}
      <section className="border-b border-white/10 bg-[#0A0A0A]/50">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {["overview", "phases", "schedule", "guidelines", "comparison"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`pb-4 pt-6 px-1 text-[11px] uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-[#C5A059] text-[#C5A059]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab === "overview" && "Overview"}
                {tab === "phases" && "Phases"}
                {tab === "schedule" && "Weekly Schedule"}
                {tab === "guidelines" && "Guidelines"}
                {tab === "comparison" && "Comparison"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[3fr_1.2fr]">
          
          <div>
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-12 motion-reveal">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                    <h3 className="mb-4 font-serif text-xl text-white">Program Focus Areas</h3>
                    <div className="space-y-3">
                      {program.focus.map((focus, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-[#C5A059]" />
                          <span className="text-sm font-light text-white/70">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                    <h3 className="mb-4 font-serif text-xl text-white">Equipment Required</h3>
                    <div className="flex flex-wrap gap-2">
                      {program.equipment.map((eq, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white/5 px-4 py-2 text-sm font-light text-white/60"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                  <h3 className="mb-6 font-serif text-xl text-white">Program Architecture</h3>
                  <div className="space-y-4">
                    <p className="text-sm font-light text-white/70">
                      This {program.duration} protocol is engineered to progressively build your capabilities through {program.phases.length} strategic phases.
                      Each phase represents an adaptation cycle designed to maximize physiological gains while minimizing injury risk.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="border-l-2 border-[#C5A059] pl-4">
                        <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Total Duration</p>
                        <p className="mt-2 text-white">{program.duration}</p>
                      </div>
                      <div className="border-l-2 border-[#C5A059] pl-4">
                        <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Per-Phase Duration</p>
                        <p className="mt-2 text-white">{phaseWeeks} weeks</p>
                      </div>
                      <div className="border-l-2 border-[#C5A059] pl-4">
                        <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Weekly Sessions</p>
                        <p className="mt-2 text-white">{program.weeklyPlan.length} per week</p>
                      </div>
                      <div className="border-l-2 border-[#C5A059] pl-4">
                        <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Total Sessions</p>
                        <p className="mt-2 text-white">{parseInt(program.duration.split(" ")[0]) * program.weeklyPlan.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phases Tab */}
            {activeTab === "phases" && (
              <div className="space-y-6 motion-reveal">
                {program.phases.map((phase, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 transition-all hover:border-[#C5A059]/30">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">Phase {idx + 1} of {program.phases.length}</span>
                        <h3 className="mt-2 font-serif text-2xl text-white">{phase}</h3>
                      </div>
                      <div className="rounded-full bg-[#C5A059]/10 px-4 py-2 text-[10px] uppercase tracking-wider text-[#C5A059]">
                        {phaseWeeks} weeks
                      </div>
                    </div>

                    <p className="text-sm font-light text-white/60">
                      {phase === "Foundation" && "Establish movement patterns, build work capacity, and create the neurological foundation for heavier loading. Focus on movement quality and consistency."}
                      {phase === "Build" && "Progressive overload period. Systematically increase volume and intensity to drive adaptation. Track your numbers religiously."}
                      {phase === "Peak" && "Culmination phase. Test your limits and demonstrate the capabilities developed through prior phases. This is your proving ground."}
                      {phase === "Recovery" && "Deload and recovery emphasis. Consolidate gains and prepare for the next training cycle. Don't skip this phase."}
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Primary Focus</p>
                        <p className="mt-2 text-sm text-white/80">{program.focus[idx % program.focus.length]}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Expected Outcome</p>
                        <p className="mt-2 text-sm text-white/80">Measurable adaptation</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Difficulty Progression</p>
                        <div className="mt-2 flex gap-1">
                          {Array.from({ length: Math.min(idx + 2, 5) }).map((_, i) => (
                            <div key={i} className="h-2 w-3 rounded-sm bg-[#C5A059]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === "schedule" && (
              <div className="space-y-6 motion-reveal">
                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                  <h3 className="mb-6 font-serif text-2xl text-white">Weekly Training Architecture</h3>
                  <div className="space-y-3">
                    {program.weeklyPlan.map((day, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between border border-white/5 rounded-lg bg-white/[0.02] p-4 transition-all hover:border-[#C5A059]/30"
                      >
                        <div>
                          <p className="font-semibold text-white">{day.day}</p>
                          <p className="mt-1 text-sm text-white/60">{day.title}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="rounded-full bg-[#C5A059]/10 px-3 py-1 text-[10px] uppercase tracking-wider text-[#C5A059]">
                            {day.type}
                          </span>
                          <svg
                            className="text-white/30"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                  <h3 className="mb-4 font-serif text-xl text-white">Session Guidelines</h3>
                  <ul className="space-y-3 text-sm font-light text-white/70">
                    <li className="flex gap-3">
                      <span className="text-[#C5A059] flex-shrink-0">•</span>
                      <span>Warm up thoroughly before each session. Spend 10-15 minutes preparing your joints and nervous system.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#C5A059] flex-shrink-0">•</span>
                      <span>Rest periods are prescribed. Respect them for optimal nervous system recovery between sets.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#C5A059] flex-shrink-0">•</span>
                      <span>Track your numbers. Progressive overload is the cornerstone of adaptation.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#C5A059] flex-shrink-0">•</span>
                      <span>Mobility work on recovery days is non-negotiable. Your long-term capacity depends on it.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Guidelines Tab */}
            {activeTab === "guidelines" && (
              <div className="space-y-6 motion-reveal">
                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                  <h3 className="mb-6 font-serif text-2xl text-white">Protocol Requirements</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Commitment</p>
                      <p className="mt-3 text-sm font-light text-white/70">
                        This program demands discipline. You&apos;ll complete {program.weeklyPlan.length} sessions weekly for {program.duration}.
                        Consistency is non-negotiable. Missing sessions breaks momentum and compromises results.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Recovery & Nutrition</p>
                      <p className="mt-3 text-sm font-light text-white/70">
                        Training quality demands nutritional precision and adequate sleep. Aim for 8+ hours nightly and maintain proper caloric
                        balance aligned with your goal ({program.goal}).
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Progressive Overload</p>
                      <p className="mt-3 text-sm font-light text-white/70">
                        Every session should present mild challenge above your current capacity. Document your performance. Small improvements compound
                        into transformation.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Intensity Modulation</p>
                      <p className="mt-3 text-sm font-light text-white/70">
                        Your intensity rating of {program.intensity}% requires careful management. Listen to your body. If form degrades or joints
                        complain, scale back appropriately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                  <h3 className="mb-6 font-serif text-2xl text-white">Success Milestones</h3>
                  <div className="grid gap-4">
                    <div className="border-l-2 border-[#C5A059] pl-4">
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Weeks 1-2</p>
                      <p className="mt-2 text-sm text-white/70">Adaptation phase. Expect soreness and initial fatigue. This is completely normal.</p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-4">
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Weeks 3-4</p>
                      <p className="mt-2 text-sm text-white/70">Movement quality improves. Sessions feel more controlled and deliberate.</p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-4">
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Weeks 5-6</p>
                      <p className="mt-2 text-sm text-white/70">Measurable strength gains. You&apos;re moving more weight with better form.</p>
                    </div>
                    <div className="border-l-2 border-[#C5A059] pl-4">
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Weeks 7+</p>
                      <p className="mt-2 text-sm text-white/70">Significant transformation. Body composition changes and performance elevates markedly.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Tab */}
            {activeTab === "comparison" && (
              <div className="motion-reveal">
                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                  <h3 className="mb-6 font-serif text-2xl text-white">How This Program Compares</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">vs. Generic Programs</p>
                      <p className="mt-3 text-sm font-light text-white/70">
                        {program.name} is engineered specifically for {program.goal.toLowerCase()} with {program.intensity}% intensity—no generic cookie-cutter approach.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">vs. Other {program.category} Programs</p>
                      <p className="mt-3 text-sm font-light text-white/70">
                        Our {program.phases.length}-phase structure ensures progressive adaptation. Each phase builds on the last, preventing plateaus and ensuring continuous progress.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Unique Advantages</p>
                      <ul className="mt-3 space-y-2 text-sm font-light text-white/70">
                        <li className="flex gap-2">
                          <span className="text-[#C5A059]">✓</span>
                          <span>Designed by elite coaches with decades of combined experience</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C5A059]">✓</span>
                          <span>Intensity and volume properly periodized across all phases</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C5A059]">✓</span>
                          <span>Equipment and focus optimized for your specific goal</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-[#C5A059]">✓</span>
                          <span>Built for sustainability—quality over quantity approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div>
            <div className="sticky top-64 rounded-xl border border-white/5 bg-[#0A0A0A] p-8">
              <div className="mb-8 pb-8 border-b border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Goal</span>
                  <span className="text-sm font-light text-white">{program.goal}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Category</span>
                  <span className="text-sm font-light text-white">{program.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Level</span>
                  <span className="text-sm font-light text-white">{program.level}</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Required Equipment</p>
                  <ul className="mt-3 space-y-2">
                    {program.equipment.map(eq => (
                      <li key={eq} className="flex items-center gap-2 text-xs font-light text-white/80">
                        <span className="h-1 w-1 rounded-full bg-[#C5A059]" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Primary Focus</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {program.focus.map(f => (
                      <span key={f} className="rounded-sm bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/60">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {enrollmentStep === "info" ? (
                <button 
                  onClick={() => setEnrollmentStep("confirm")}
                  className="w-full rounded-lg border border-[#C5A059] bg-[#C5A059] py-4 text-[10px] uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-[#C5A059] font-semibold"
                >
                  Enroll Now
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-white/60">Confirm enrollment</p>
                    <p className="mt-2 font-serif text-lg text-white">{program.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setEnrollmentStep("info")}
                      className="flex-1 rounded-lg border border-white/20 bg-transparent py-3 text-[10px] uppercase tracking-wider text-white transition-all hover:border-white/40"
                    >
                      Cancel
                    </button>
                    <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-[10px] uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#C5A059]">
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
