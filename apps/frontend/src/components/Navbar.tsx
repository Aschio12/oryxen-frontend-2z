import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030303]/60 px-6 py-4 backdrop-blur-2xl transition-all duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-4 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#C5A059]/30 bg-gradient-to-br from-[#C5A059]/10 to-transparent font-serif text-lg text-[#C5A059] transition-all duration-500 group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            O
          </span>
          <span className="text-sm font-light tracking-[0.3em] text-white/90 group-hover:text-white">
            ORYXEN
          </span>
        </Link>

        <div className="hidden items-center gap-10 text-[10px] font-light uppercase tracking-[0.2em] text-white/50 md:flex">
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

        <Link href="/dashboard" className="relative overflow-hidden rounded-full border border-[#C5A059]/40 bg-transparent px-6 py-2.5 text-[10px] font-light uppercase tracking-[0.2em] text-[#C5A059] transition-all duration-500 hover:bg-[#C5A059] hover:text-black">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
