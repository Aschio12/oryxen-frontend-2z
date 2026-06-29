"use client";

import { useState, useMemo } from "react";
import { sportPrograms, exercises, nutritionPlans } from "@/data/fitness";
import Link from "next/link";

export default function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"programs" | "exercises" | "nutrition">("programs");
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState({
    level: "All",
    goal: "All",
    category: "All",
  });

  const allItems = [
    ...sportPrograms.map(p => ({ ...p, type: "program" as const })),
    ...exercises.map(e => ({ ...e, type: "exercise" as const })),
    ...nutritionPlans.map(n => ({ ...n, type: "nutrition" as const })),
  ];

  const filteredResults = useMemo(() => {
    let results = allItems.filter(item => {
      const searchLower = searchQuery.toLowerCase();
      
      if (item.type === "program") {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.focus.some(f => f.toLowerCase().includes(searchLower))
        );
      } else if (item.type === "exercise") {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.targetMuscles.some(m => m.toLowerCase().includes(searchLower))
        );
      } else if (item.type === "nutrition") {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.meals.some(m => m.name.toLowerCase().includes(searchLower))
        );
      }
      return false;
    });

    if (activeTab === "programs") {
      results = results.filter(r => r.type === "program");
      if (filters.level !== "All") results = results.filter(r => r.type !== "program" || r.level === filters.level);
      if (filters.goal !== "All") results = results.filter(r => r.type !== "program" || r.goal === filters.goal);
    } else if (activeTab === "exercises") {
      results = results.filter(r => r.type === "exercise");
      if (filters.level !== "All") results = results.filter(r => r.type !== "exercise" || r.level === filters.level);
    } else if (activeTab === "nutrition") {
      results = results.filter(r => r.type === "nutrition");
      if (filters.goal !== "All") results = results.filter(r => r.type !== "nutrition" || r.goal === filters.goal);
    }

    return results.slice(0, 8);
  }, [searchQuery, activeTab, filters]);

  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <header className="mb-12 motion-fade">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Search</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">
            Find Your Path.
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50">
            Intelligent search across all programs, exercises, and nutrition plans.
          </p>
        </header>

        {/* Search Bar */}
        <div className="relative mb-12 motion-reveal">
          <div className="relative rounded-lg border border-white/10 bg-[#0A0A0A] overflow-hidden">
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search programs, exercises, nutrition plans..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              className="w-full border-0 bg-transparent py-4 pl-12 pr-4 text-white placeholder:text-white/40 outline-none text-lg"
            />
          </div>

          {/* Search Results Dropdown */}
          {showResults && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-white/10 bg-[#0A0A0A] shadow-2xl z-40 max-h-96 overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="divide-y divide-white/5">
                  {filteredResults.map((item, idx) => (
                    <Link
                      key={idx}
                      href={
                        item.type === "program" ? `/programs/${item.id}` :
                        item.type === "exercise" ? `/exercises` :
                        `/nutrition`
                      }
                      className="block p-4 hover:bg-white/5 transition-all"
                      onClick={() => setShowResults(false)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">
                              {item.type === "program" ? "Program" : item.type === "exercise" ? "Exercise" : "Nutrition"}
                            </span>
                            {item.type === "program" && <span className="text-[9px] text-white/50">{item.level}</span>}
                          </div>
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="mt-1 text-xs text-white/50 line-clamp-1">
                            {item.type === "program" ? item.description : 
                             item.type === "exercise" ? item.targetMuscles.join(", ") :
                             item.description}
                          </p>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 flex-shrink-0 mt-1">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-white/60">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex gap-1 border-b border-white/5">
          {["programs", "exercises", "nutrition"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as typeof activeTab);
                setShowResults(false);
              }}
              className={`pb-4 px-1 text-[11px] uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "border-b-2 border-[#C5A059] text-[#C5A059]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab === "programs" && "Programs"}
              {tab === "exercises" && "Exercises"}
              {tab === "nutrition" && "Nutrition"}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {activeTab === "programs" && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilters({ ...filters, level: "All" })}
                className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                  filters.level === "All"
                    ? "bg-[#C5A059] text-black"
                    : "border border-white/10 text-white/60 hover:border-white/30"
                }`}
              >
                All Levels
              </button>
              {["Beginner", "Intermediate", "Elite"].map(level => (
                <button
                  key={level}
                  onClick={() => setFilters({ ...filters, level })}
                  className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                    filters.level === level
                      ? "bg-[#C5A059] text-black"
                      : "border border-white/10 text-white/60 hover:border-white/30"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Grid */}
        {searchQuery ? (
          <div className="motion-reveal">
            {filteredResults.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredResults.map((item, idx) => (
                  <Link
                    key={idx}
                    href={
                      item.type === "program" ? `/programs/${item.id}` :
                      item.type === "exercise" ? `/exercises` :
                      `/nutrition`
                    }
                    className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 hover:border-[#C5A059]/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-wider text-[#C5A059]">
                        {item.type === "program" ? "Program" : item.type === "exercise" ? "Exercise" : "Nutrition"}
                      </span>
                      {item.type === "program" && (
                        <span className="text-[9px] text-white/50">{item.level}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-light text-white mb-2">{item.name}</h3>
                    <p className="text-xs text-white/60 line-clamp-2">
                      {item.type === "program" ? item.description : 
                       item.type === "exercise" ? item.targetMuscles.join(", ") :
                       item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[9px] text-white/40">View Details</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/60">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-white/60 mb-4">Start typing to search across all content</p>
            <div className="grid grid-cols-3 gap-4 mt-8 opacity-50">
              <div className="h-32 bg-white/5 rounded-lg animate-pulse"></div>
              <div className="h-32 bg-white/5 rounded-lg animate-pulse"></div>
              <div className="h-32 bg-white/5 rounded-lg animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
