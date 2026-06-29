import { sportPrograms } from "@/data/fitness";

const heroImage = sportPrograms[2]?.imageUrl || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";
const abstractImage1 = "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop";
const abstractImage2 = "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 motion-pan-slow"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-[#030303]/40 to-[#030303]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
        </div>

        <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
          <span className="motion-reveal mb-6 rounded-full border border-[#C5A059]/20 bg-[#C5A059]/5 px-4 py-1.5 text-[10px] font-light uppercase tracking-[0.3em] text-[#C5A059] backdrop-blur-md">
            The Evolution of Performance
          </span>
          <h1 className="motion-reveal-delayed-1 font-serif text-5xl font-light leading-tight tracking-wide text-white/95 md:text-7xl lg:text-8xl">
            Sovereignty over <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E8D099]">mind & body.</span>
          </h1>
          <p className="motion-reveal-delayed-2 mt-8 max-w-2xl text-sm font-light leading-relaxed tracking-wide text-white/60 md:text-base">
            Oryxen is an exclusive intelligence platform designed for those who demand precision in their training, nutrition, and recovery. No noise. Only architecture for human potential.
          </p>
          
          <div className="motion-reveal-delayed-2 mt-12">
            <button className="group relative flex h-14 items-center overflow-hidden rounded-full border border-white/10 bg-white/5 pl-8 pr-2 transition-all duration-500 hover:border-[#C5A059]/50 hover:bg-white/10">
              <span className="text-[10px] font-light uppercase tracking-[0.2em] text-white/80 transition-all duration-500 group-hover:text-white">
                Initiate Journey
              </span>
              <span className="ml-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#C5A059] text-black transition-transform duration-500 group-hover:translate-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 motion-float-elegant">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="relative z-10 py-32 px-6 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
            <div className="relative motion-reveal">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm">
                <div 
                  className="h-full w-full scale-105 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
                  style={{ backgroundImage: `url(${abstractImage1})` }}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden aspect-square w-64 overflow-hidden rounded-sm border border-white/5 lg:block motion-float-elegant" style={{ animationDelay: '2s' }}>
                <div 
                  className="h-full w-full bg-cover bg-center grayscale"
                  style={{ backgroundImage: `url(${abstractImage2})` }}
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center motion-reveal">
              <span className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">01 / Philosophy</span>
              <h2 className="font-serif text-4xl font-light leading-snug md:text-5xl lg:text-6xl">
                Intentional design for the human machine.
              </h2>
              <div className="mt-10 space-y-8">
                <div className="group border-l border-white/10 pl-6 transition-colors hover:border-[#C5A059]">
                  <h3 className="text-lg font-light tracking-wider text-white/90">Precision Protocols</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                    Calculated regimens across eleven disciplines. Every rep, duration, and intensity matrix engineered for maximum adaptation.
                  </p>
                </div>
                <div className="group border-l border-white/10 pl-6 transition-colors hover:border-[#C5A059]">
                  <h3 className="text-lg font-light tracking-wider text-white/90">Metabolic Architecture</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                    Nutrition transcends counting. We structure caloric and macronutrient phases to match your performance demands.
                  </p>
                </div>
                <div className="group border-l border-white/10 pl-6 transition-colors hover:border-[#C5A059]">
                  <h3 className="text-lg font-light tracking-wider text-white/90">Elite Guidance</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                    World-class coaching intelligence, distilled into an interface that directs your focus entirely on the execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric CTA */}
      <section className="relative flex min-h-[70vh] items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#C5A059] opacity-[0.03] motion-pulse-glow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C5A059_0%,transparent_40%)] opacity-10" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center motion-reveal">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-[#C5A059]/30 text-2xl text-[#C5A059]">
            +
          </span>
          <h2 className="mt-10 font-serif text-4xl font-light md:text-5xl">
            The platform is ready.
          </h2>
          <p className="mt-6 max-w-md text-sm font-light text-white/50">
            Transition from the landing experience into the full Oryxen environment. Browse disciplines, nutrition, and coaching.
          </p>
          <button className="mt-10 border-b border-[#C5A059]/50 pb-2 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] transition-all hover:border-[#C5A059] hover:text-white hover:tracking-[0.4em]">
            Proceed to Application
          </button>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-[9px] uppercase tracking-[0.2em] text-white/30">
        Oryxen © {new Date().getFullYear()} — Human Performance Intelligence
      </footer>
    </main>
  );
}
