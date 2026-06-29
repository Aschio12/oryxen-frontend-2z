import { sportPrograms } from "@/data/fitness";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProgramDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = sportPrograms.find(p => p.id === id);

  if (!program) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${program.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <Link href="/programs" className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to library
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 motion-reveal">
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{program.category}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{program.level}</span>
            </div>
            
            <h1 className="mt-4 font-serif text-5xl font-light md:text-7xl motion-reveal-delayed-1">{program.name}</h1>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          
          <div className="motion-reveal-delayed-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Protocol Overview</p>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/80 md:text-xl">
              {program.description}
            </p>

            <div className="mt-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Phase Architecture</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {program.phases.map((phase, i) => (
                  <div key={phase} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2">
                    <span className="text-[10px] font-bold text-[#C5A059]">0{i + 1}</span>
                    <span className="text-xs uppercase tracking-widest text-white/90">{phase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Weekly Structure</p>
              <div className="mt-8 space-y-4">
                {program.weeklyPlan.map((day) => (
                  <div key={day.day} className="group flex items-center justify-between rounded-sm border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-[#C5A059]/30">
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 w-12">{day.day}</span>
                      <span className="font-serif text-xl font-light text-white transition-colors group-hover:text-[#C5A059]">{day.title}</span>
                    </div>
                    <span className="hidden rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-[9px] uppercase tracking-widest text-white/60 md:block">
                      {day.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="motion-reveal-delayed-2">
            <div className="sticky top-32 rounded-xl border border-white/5 bg-[#0A0A0A] p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Duration</p>
                  <p className="mt-1 text-2xl font-light text-white">{program.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Intensity</p>
                  <p className="mt-1 text-2xl font-light text-[#C5A059]">{program.intensity}%</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Primary Goal</p>
                  <p className="mt-1 text-sm font-light text-white">{program.goal}</p>
                </div>
                
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Required Equipment</p>
                  <ul className="mt-2 space-y-1">
                    {program.equipment.map(eq => (
                      <li key={eq} className="flex items-center gap-2 text-sm font-light text-white/80">
                        <span className="h-1 w-1 rounded-full bg-[#C5A059]" />
                        {eq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Adaptation Focus</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {program.focus.map(f => (
                      <span key={f} className="rounded-sm bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/60">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="mt-10 w-full rounded-sm border border-[#C5A059] bg-[#C5A059] py-4 text-[10px] uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-[#C5A059]">
                Activate Protocol
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
