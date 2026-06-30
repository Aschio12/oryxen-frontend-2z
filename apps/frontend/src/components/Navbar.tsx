"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-[#030303]/95 via-[#030303]/90 to-[#030303]/85 px-4 sm:px-6 lg:px-8 py-5 backdrop-blur-3xl transition-all duration-500 shadow-2xl shadow-black/50">
      <div className="mx-auto flex items-center justify-between gap-4 md:gap-8 lg:gap-12">
        <Link href="/" className="group flex items-center gap-3 sm:gap-4 text-white flex-shrink-0">
          <span className="relative grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full border border-[#C5A059]/50 bg-gradient-to-br from-[#C5A059]/20 to-[#C5A059]/5 font-serif text-2xl sm:text-3xl text-[#C5A059] transition-all duration-500 group-hover:border-[#C5A059] group-hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] group-hover:scale-110">
            <span className="absolute inset-0 rounded-full bg-[#C5A059]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            O
          </span>
          <div className="hidden sm:flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-[0.3em] text-white/95 group-hover:text-[#C5A059] transition-colors">
              ORYXEN
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-[#C5A059]/60 font-light">
              Elite Performance
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <Link href="/search" className="hidden md:flex flex-1 max-w-lg items-center gap-3 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-3.5 transition-all hover:border-[#C5A059]/60 hover:bg-white/[0.1] hover:shadow-[0_0_25px_rgba(197,160,89,0.15)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 hover:text-[#C5A059] transition-colors">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-sm text-white/70 font-light">Search programs, exercises...</span>
        </Link>

        <div className="hidden items-center gap-3 lg:gap-6 text-sm font-semibold uppercase tracking-widest text-white/70 lg:flex">
          <Link href="/programs" className={`relative group transition-all duration-300 ${isActive("/programs") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Programs
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/programs") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
          <Link href="/exercises" className={`relative group transition-all duration-300 ${isActive("/exercises") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Exercises
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/exercises") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
          <Link href="/classes" className={`relative group transition-all duration-300 ${isActive("/classes") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Classes
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/classes") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
          <Link href="/trainers" className={`relative group transition-all duration-300 ${isActive("/trainers") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Trainers
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/trainers") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
          <Link href="/community" className={`relative group transition-all duration-300 ${isActive("/community") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Community
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/community") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
          <Link href="/gallery" className={`relative group transition-all duration-300 ${isActive("/gallery") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Gallery
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/gallery") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
          <Link href="/resources" className={`relative group transition-all duration-300 ${isActive("/resources") ? "text-[#C5A059]" : "hover:text-[#C5A059]"}`}>
            Resources
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent transition-all duration-300 ${isActive("/resources") ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <Link href="/search" className="md:hidden flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-white/70 hover:border-[#C5A059]/60 hover:text-[#C5A059] hover:bg-white/[0.12] transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.25)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>
          <Link href="/saved" className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-white/70 hover:border-[#C5A059]/60 hover:text-[#C5A059] hover:bg-white/[0.12] transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.25)]" title="Saved Items">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </Link>
          <Link href="/dashboard" className={`group relative overflow-hidden rounded-full border px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-500 ${isActive("/dashboard") ? "border-[#C5A059] bg-[#C5A059] text-black shadow-[0_0_30px_rgba(197,160,89,0.4)]" : "border-[#C5A059]/60 bg-gradient-to-r from-[#C5A059]/15 to-transparent text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-black hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]"}`}>
            <span className="relative z-10">Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
