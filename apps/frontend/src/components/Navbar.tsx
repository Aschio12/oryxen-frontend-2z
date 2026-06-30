"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-[#030303]/95 via-[#030303]/90 to-[#030303]/85 px-6 py-5 backdrop-blur-3xl transition-all duration-500 shadow-2xl shadow-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <Link href="/" className="group flex items-center gap-3 text-white flex-shrink-0">
          <span className="relative grid h-12 w-12 place-items-center rounded-full border border-[#C5A059]/40 bg-gradient-to-br from-[#C5A059]/15 to-[#C5A059]/5 font-serif text-xl text-[#C5A059] transition-all duration-500 group-hover:border-[#C5A059] group-hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] group-hover:scale-110">
            <span className="absolute inset-0 rounded-full bg-[#C5A059]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            O
          </span>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold tracking-[0.3em] text-white/95 group-hover:text-[#C5A059] transition-colors">
              ORYXEN
            </span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-[#C5A059]/60 font-light">
              Elite Performance
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <Link href="/search" className="hidden md:flex flex-1 max-w-sm items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 transition-all hover:border-[#C5A059]/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(197,160,89,0.1)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50 hover:text-[#C5A059] transition-colors">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-[11px] text-white/60 font-light">Search programs, exercises...</span>
        </Link>

        <div className="hidden items-center gap-8 text-[11px] font-light uppercase tracking-[0.15em] text-white/60 lg:flex">
          <Link href="/programs" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Programs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/exercises" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Exercises
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/classes" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Classes
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/trainers" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Trainers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/community" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Community
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/gallery" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/resources" className="relative group transition-all duration-300 hover:text-[#C5A059]">
            Resources
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/search" className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 hover:border-[#C5A059]/50 hover:text-[#C5A059] hover:bg-white/[0.08] transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,160,89,0.2)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>
          <Link href="/saved" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 hover:border-[#C5A059]/50 hover:text-[#C5A059] hover:bg-white/[0.08] transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,160,89,0.2)]" title="Saved Items">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </Link>
          <Link href="/dashboard" className="group relative overflow-hidden rounded-full border border-[#C5A059]/50 bg-gradient-to-r from-[#C5A059]/10 to-transparent px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] transition-all duration-500 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-black hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
            <span className="relative z-10">Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
