'use client';

import Link from 'next/link';
import { classes, trainers } from '@/data/fitness';
import { notFound } from 'next/navigation';
import { ClassesAnimation } from '@/components/ClassesAnimation';

export default function ClassDetail({ params }: { params: { id: string } }) {
  const cls = classes.find(c => c.id === params.id);
  const trainer = cls ? trainers.find(t => t.id === cls.trainerId) : null;

  if (!cls) return notFound();

  const formatTime = (dateStr: string) =>
    new Date(dateStr).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const getDayOfWeek = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' });
  const duration = Math.round((new Date(cls.endTime).getTime() - new Date(cls.startTime).getTime()) / 60000);
  const isFull = cls.currentEnrollment >= cls.capacity;
  const capacityPercent = (cls.currentEnrollment / cls.capacity) * 100;

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/20 via-[#030303] to-[#030303]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,160,89,0.15),transparent_60%)]" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
            <Link href="/classes" className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to classes
            </Link>
            <div className="flex flex-wrap items-center gap-3 motion-reveal mb-4">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{cls.category}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{cls.level}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{duration} min</span>
            </div>
            <h1 className="font-serif text-4xl font-light md:text-6xl motion-reveal-delayed-1">{cls.className}</h1>
            <p className="mt-3 text-sm font-light text-white/60 motion-reveal-delayed-2">
              {getDayOfWeek(cls.startTime)} &middot; {formatDate(cls.startTime)} &middot; {formatTime(cls.startTime)}
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#030303]/98 backdrop-blur-xl px-4 md:px-6 lg:px-8 py-4 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between">
          <div className="flex gap-6 text-sm">
            <div className="motion-stagger-1"><span className="text-[9px] uppercase tracking-widest text-white/40">Spots</span><p className="mt-1 text-[#C5A059] animate-countdown">{cls.capacity - cls.currentEnrollment} left</p></div>
            <div className="motion-stagger-2"><span className="text-[9px] uppercase tracking-widest text-white/40">Time</span><p className="mt-1 text-white">{formatTime(cls.startTime)}</p></div>
          </div>
          <button className="rounded-lg bg-[#C5A059] px-6 py-2 text-[10px] uppercase tracking-wider text-black font-semibold hover:bg-[#d4a574] transition-all hover:scale-[1.02] active:scale-[0.98]">
            {isFull ? 'Join Waitlist' : 'Enroll Now'}
          </button>
        </div>
      </section>

      <section className="w-full px-4 md:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              {/* Class Animation */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden motion-reveal">
                <div className="relative h-[280px] bg-gradient-to-br from-[#C5A059]/5 via-[#0A0A0A] to-[#030303] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)]" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059]/60 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C5A059]/15">
                      Class Preview
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ClassesAnimation category={cls.category} level={cls.level} capacityPercent={capacityPercent} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-4">About This Class</h2>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {cls.category === "Gym" && "High-intensity resistance training focused on building strength and muscle mass through structured programming. Each session targets specific movement patterns with progressive overload methodology."}
                  {cls.category === "HIIT" && "Explosive metabolic conditioning combining multiple movement patterns to maximize calorie burn and cardiovascular adaptation. Designed for athletes seeking peak conditioning."}
                  {cls.category === "Combat" && "Combat sports training covering striking mechanics, footwork, conditioning, and fight preparation. Build the engine and skills for competitive combat."}
                  {cls.category === "Recovery" && "Mobility-focused session designed to improve range of motion, reduce soreness, and enhance tissue quality. Essential for longevity and injury prevention."}
                  {cls.category === "Aerobics" && "Sustained effort training building aerobic capacity and endurance for long-duration athletic performance. Perfect for endurance athletes."}
                  {cls.category === "Education" && "Educational seminar covering training principles, nutrition strategies, and performance optimization. Learn from industry experts."}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Class Details</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-l-2 border-[#C5A059] pl-4 motion-stagger-1">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Duration</p>
                    <p className="mt-2 text-white font-light">{duration} minutes</p>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-4 motion-stagger-2">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Level</p>
                    <p className="mt-2 text-white font-light capitalize">{cls.level}</p>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-4 motion-stagger-3">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Category</p>
                    <p className="mt-2 text-white font-light">{cls.category}</p>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-4 motion-stagger-4">
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">Capacity</p>
                    <p className="mt-2 text-white font-light">{cls.currentEnrollment}/{cls.capacity}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Enrollment Status</h2>
                <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-[#C5A059] to-[#E8D099] animate-progress-shift transition-all" style={{ width: `${capacityPercent}%` }} />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">{cls.currentEnrollment} enrolled</span>
                  <span className={`font-semibold ${isFull ? 'text-orange-400' : 'text-[#C5A059]'}`}>
                    {isFull ? `Full - ${cls.waitlistCount} waitlisted` : `${cls.capacity - cls.currentEnrollment} spots open`}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {trainer && (
                <Link href={`/trainers/${trainer.id}`} className="block rounded-xl border border-white/10 bg-[#0A0A0A] p-6 motion-reveal sticky top-32 hover:border-[#C5A059]/30 transition-all group hover:shadow-lg hover:shadow-[#C5A059]/5">
                  <h3 className="font-serif text-lg text-white mb-4">Your Coach</h3>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-cover bg-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ backgroundImage: `url(${trainer.imageUrl})` }} />
                    <div>
                      <p className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors">{trainer.name}</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#C5A059] mt-1">{trainer.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/50 group-hover:text-[#C5A059] transition-colors">
                    View Full Profile
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
