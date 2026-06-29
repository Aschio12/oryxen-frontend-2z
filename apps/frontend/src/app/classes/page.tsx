"use client";

import { useState } from "react";
import { classes } from "@/data/fitness";
import Link from "next/link";

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<typeof classes[0] | null>(null);
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");

  const upcomingClasses = classes.sort((a, b) => 
    new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getDayOfWeek = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const getCapacityColor = (current: number, capacity: number) => {
    const percent = (current / capacity) * 100;
    if (percent >= 90) return "#E74C3C";
    if (percent >= 70) return "#F39C12";
    return "#2ECC71";
  };

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Schedule</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Live Classes.</h1>
          <p className="mt-6 max-w-2xl text-sm font-light text-white/50">Join expert-led training sessions. From elite competition prep to mobility recovery, find your perfect class.</p>

          {/* View Toggle */}
          <div className="mt-8 flex gap-2">
            <button
              onClick={() => setViewMode("calendar")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                viewMode === "calendar"
                  ? "bg-[#C5A059] text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Calendar
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                viewMode === "list"
                  ? "bg-[#C5A059] text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              List
            </button>
          </div>
        </header>

        {/* Classes */}
        {viewMode === "list" ? (
          <div className="space-y-4">
            {upcomingClasses.map((cls) => {
              const capacityColor = getCapacityColor(cls.currentEnrollment, cls.capacity);
              const isFull = cls.currentEnrollment >= cls.capacity;
              return (
                <div
                  key={cls.id}
                  onClick={() => setSelectedClass(cls)}
                  className="group rounded-lg border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-[#C5A059]/30 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">{cls.category}</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/50">{cls.level}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-light text-white">{cls.className}</h3>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="text-sm font-light text-white/70">{getDayOfWeek(cls.startTime)}</span>
                        <span className="text-sm font-light text-white/70">{formatDate(cls.startTime)}</span>
                        <span className="text-sm font-semibold text-[#C5A059]">{formatTime(cls.startTime)}</span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="mb-3">
                        <p className="text-[10px] uppercase tracking-wider text-white/40">Capacity</p>
                        <p className="mt-1 font-light text-white">
                          {cls.currentEnrollment}/{cls.capacity}
                        </p>
                      </div>
                      <div className="h-2 w-32 rounded-full bg-white/10 overflow-hidden mb-2">
                        <div 
                          className="h-full transition-all"
                          style={{ width: `${(cls.currentEnrollment / cls.capacity) * 100}%`, backgroundColor: capacityColor }}
                        />
                      </div>
                      {isFull && cls.waitlistCount > 0 && (
                        <p className="text-[10px] text-orange-400">+{cls.waitlistCount} waitlist</p>
                      )}
                    </div>

                    <button className="rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 px-6 py-3 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all font-semibold">
                      {isFull ? "Join Waitlist" : "Enroll"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingClasses.map((cls) => {
              const capacityColor = getCapacityColor(cls.currentEnrollment, cls.capacity);
              const isFull = cls.currentEnrollment >= cls.capacity;
              return (
                <div
                  key={cls.id}
                  onClick={() => setSelectedClass(cls)}
                  className="group rounded-lg border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-[#C5A059]/30 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">{cls.category}</span>
                      <h3 className="mt-2 font-serif text-xl font-light text-white">{cls.className}</h3>
                    </div>
                    <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wider text-white/60">
                      {cls.level}
                    </span>
                  </div>

                  <div className="mb-4 space-y-2">
                    <p className="text-sm font-light text-white/70">{getDayOfWeek(cls.startTime)}</p>
                    <p className="text-2xl font-light text-[#C5A059]">{formatTime(cls.startTime)}</p>
                    <p className="text-xs text-white/50">{formatDate(cls.startTime)}</p>
                  </div>

                  <div className="mb-4 rounded-lg bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Enrollment</p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-light text-white">{cls.currentEnrollment}/{cls.capacity}</p>
                      <div className="h-2 w-20 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full"
                          style={{ width: `${(cls.currentEnrollment / cls.capacity) * 100}%`, backgroundColor: capacityColor }}
                        />
                      </div>
                    </div>
                    {isFull && cls.waitlistCount > 0 && (
                      <p className="mt-2 text-[10px] text-orange-400">+{cls.waitlistCount} on waitlist</p>
                    )}
                  </div>

                  <button className="w-full rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 py-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all font-semibold">
                    {isFull ? "Waitlist" : "Enroll"}
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="relative max-h-[90vh] max-w-2xl w-full overflow-y-auto rounded-xl border border-white/10 bg-[#030303] p-8">
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">{selectedClass.category}</span>
                  <h2 className="mt-2 font-serif text-4xl font-light text-white">{selectedClass.className}</h2>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70">
                  {selectedClass.level}
                </span>
              </div>

              <p className="text-sm font-light text-white/70">
                {getDayOfWeek(selectedClass.startTime)} • {formatDate(selectedClass.startTime)} • {formatTime(selectedClass.startTime)}
              </p>
            </div>

            {/* Details Grid */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Duration</p>
                <p className="mt-2 text-white font-light">
                  {Math.round((new Date(selectedClass.endTime).getTime() - new Date(selectedClass.startTime).getTime()) / 60000)} minutes
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-wider text-white/40">Capacity</p>
                <p className="mt-2 text-white font-light">{selectedClass.currentEnrollment}/{selectedClass.capacity}</p>
              </div>
            </div>

            {/* Enrollment Bar */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Class Fullness</p>
              <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-[#C5A059] to-[#E8D099]"
                  style={{ width: `${(selectedClass.currentEnrollment / selectedClass.capacity) * 100}%` }}
                />
              </div>
              <p className="text-xs text-white/60">
                {selectedClass.currentEnrollment >= selectedClass.capacity ? (
                  <>Class Full • {selectedClass.waitlistCount} on waitlist</>
                ) : (
                  <>{selectedClass.capacity - selectedClass.currentEnrollment} spots available</>
                )}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="mb-3 font-serif text-lg text-white">About This Class</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                {selectedClass.category === "Gym" && "High-intensity resistance training focused on building strength and muscle mass through structured programming."}
                {selectedClass.category === "HIIT" && "Explosive metabolic conditioning combining multiple movement patterns to maximize calorie burn and cardiovascular adaptation."}
                {selectedClass.category === "Combat" && "Combat sports training covering striking mechanics, footwork, conditioning, and fight preparation."}
                {selectedClass.category === "Recovery" && "Mobility-focused session designed to improve range of motion, reduce soreness, and enhance tissue quality."}
                {selectedClass.category === "Aerobics" && "Sustained effort training building aerobic capacity and endurance for long-duration athletic performance."}
                {selectedClass.category === "Education" && "Educational seminar covering training principles, nutrition strategies, and performance optimization."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-[10px] uppercase tracking-wider text-black font-semibold transition-all hover:bg-transparent hover:text-[#C5A059]">
                {selectedClass.currentEnrollment >= selectedClass.capacity ? "Join Waitlist" : "Enroll Now"}
              </button>
              <button 
                onClick={() => setSelectedClass(null)}
                className="flex-1 rounded-lg border border-white/20 bg-transparent py-3 text-[10px] uppercase tracking-wider text-white transition-all hover:border-white/40"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
