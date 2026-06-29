import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030303]/60 px-6 py-4 backdrop-blur-2xl transition-all duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-4 text-white flex-shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#C5A059]/30 bg-gradient-to-br from-[#C5A059]/10 to-transparent font-serif text-lg text-[#C5A059] transition-all duration-500 group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            O
          </span>
          <span className="text-sm font-light tracking-[0.3em] text-white/90 group-hover:text-white hidden sm:inline">
            ORYXEN
          </span>
        </Link>

        {/* Search Bar */}
        <Link href="/search" className="hidden md:flex flex-1 max-w-xs items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all hover:border-[#C5A059]/50 hover:bg-white/10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-[10px] text-white/50">Search...</span>
        </Link>

        <div className="hidden items-center gap-10 text-[10px] font-light uppercase tracking-[0.2em] text-white/50 lg:flex">
          <Link href="/programs" className="transition-all duration-300 hover:text-[#C5A059]">
            Programs
          </Link>
          <Link href="/exercises" className="transition-all duration-300 hover:text-[#C5A059]">
            Exercises
          </Link>
          <Link href="/nutrition" className="transition-all duration-300 hover:text-[#C5A059]">
            Nutrition
          </Link>
          <Link href="/coaches" className="transition-all duration-300 hover:text-[#C5A059]">
            Coaches
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/search" className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>
          <Link href="/dashboard" className="relative overflow-hidden rounded-full border border-[#C5A059]/40 bg-transparent px-6 py-2.5 text-[10px] font-light uppercase tracking-[0.2em] text-[#C5A059] transition-all duration-500 hover:bg-[#C5A059] hover:text-black">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
