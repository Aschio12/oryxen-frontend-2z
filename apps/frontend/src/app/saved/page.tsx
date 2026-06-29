"use client";

import { useState } from "react";
import Link from "next/link";
import { sportPrograms, exercises, nutritionPlans } from "@/data/fitness";

interface SavedItem {
  id: string;
  name: string;
  type: "program" | "exercise" | "nutrition";
  savedAt: Date;
  data: any;
}

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([
    {
      id: "strength-prime",
      name: "Strength Prime",
      type: "program",
      savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      data: sportPrograms[0],
    },
    {
      id: "hypertrophy-fuel",
      name: "Hypertrophy Fuel",
      type: "nutrition",
      savedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      data: nutritionPlans[1],
    },
  ]);

  const [activeTab, setActiveTab] = useState<"all" | "programs" | "exercises" | "nutrition">("all");

  const filteredItems = activeTab === "all" 
    ? savedItems 
    : savedItems.filter(item => item.type === activeTab);

  const removeItem = (id: string) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <header className="mb-16 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Collection</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Saved Protocols.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50 md:text-base">
            Your curated collection of programs, exercises, and nutrition plans. Quickly access your preferred methodologies.
          </p>
        </header>

        {/* Stats Bar */}
        <div className="mb-12 grid gap-4 md:grid-cols-4 motion-reveal-delayed-1">
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-4">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Total Saved</p>
            <p className="mt-2 font-serif text-2xl text-white">{savedItems.length}</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-4">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Programs</p>
            <p className="mt-2 font-serif text-2xl text-[#C5A059]">{savedItems.filter(i => i.type === "program").length}</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-4">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Exercises</p>
            <p className="mt-2 font-serif text-2xl text-[#C5A059]">{savedItems.filter(i => i.type === "exercise").length}</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0A0A0A] p-4">
            <p className="text-[10px] uppercase tracking-wider text-white/40">Nutrition Plans</p>
            <p className="mt-2 font-serif text-2xl text-[#C5A059]">{savedItems.filter(i => i.type === "nutrition").length}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-1 border-b border-white/5 motion-reveal-delayed-1">
          {["all", "programs", "exercises", "nutrition"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`pb-4 px-1 text-[11px] uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "border-b-2 border-[#C5A059] text-[#C5A059]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab === "all" && "All"}
              {tab === "programs" && "Programs"}
              {tab === "exercises" && "Exercises"}
              {tab === "nutrition" && "Nutrition"}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 motion-reveal-delayed-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] p-6 hover:border-[#C5A059]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">
                    {item.type === "program" ? "Program" : item.type === "exercise" ? "Exercise" : "Nutrition"}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-red-500 hover:text-red-500 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>

                <h3 className="font-serif text-xl font-light text-white mb-2">{item.name}</h3>
                
                <div className="mb-4 space-y-2 text-xs text-white/60">
                  {item.type === "program" && (
                    <>
                      <p>Goal: <span className="text-white">{item.data.goal}</span></p>
                      <p>Duration: <span className="text-white">{item.data.duration}</span></p>
                    </>
                  )}
                  {item.type === "nutrition" && (
                    <>
                      <p>Daily Calories: <span className="text-[#C5A059]">{item.data.dailyCalories}</span></p>
                      <p>Goal: <span className="text-white">{item.data.goal}</span></p>
                    </>
                  )}
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <span className="text-[9px] text-white/40">Saved {formatDate(item.savedAt)}</span>
                  <Link
                    href={
                      item.type === "program" ? `/programs/${item.id}` :
                      item.type === "exercise" ? `/exercises` :
                      `/nutrition`
                    }
                    className="text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-white transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-white/5 bg-[#0A0A0A] text-center motion-reveal-delayed-2">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/10 text-white/30 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </span>
            <h3 className="font-serif text-2xl font-light text-white">No saved items yet.</h3>
            <p className="mt-2 text-xs font-light text-white/50">Start saving programs, exercises, and nutrition plans to build your collection.</p>
            <div className="mt-8 flex gap-3">
              <Link href="/programs" className="rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 px-6 py-3 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all">
                Browse Programs
              </Link>
              <Link href="/exercises" className="rounded-lg border border-white/20 bg-transparent px-6 py-3 text-[10px] uppercase tracking-wider text-white hover:border-white/40 transition-all">
                View Exercises
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
