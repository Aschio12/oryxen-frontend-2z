import { sportPrograms } from "@/data/fitness";

const heroImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2560&auto=format&fit=crop&h=1440";
const abstractImage1 = "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1600&auto=format&fit=crop&h=2000";
const abstractImage2 = "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop&h=900";
const statImage1 = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop";
const statImage2 = "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=800&auto=format&fit=crop";
const statImage3 = "https://images.unsplash.com/photo-1577221084712-56ceb4ee3dbb?q=80&w=800&auto=format&fit=crop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30 pt-20">
      {/* Hero Section - Premium Redesign */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden">
        {/* Animated background with gradient mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#0A0505] to-[#030303]" />
          
          {/* Animated orb effects */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#C5A059]/20 to-[#C5A059]/0 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-[#C5A059]/15 to-transparent rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(197, 160, 89, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          {/* Premium badge */}
          <div className="motion-reveal mb-6 sm:mb-8 lg:mb-12 flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-gradient-to-r from-[#C5A059]/10 to-[#C5A059]/5 px-5 sm:px-6 py-2.5 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
              Performance Intelligence
            </span>
          </div>

          {/* Main heading with enhanced typography */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="motion-reveal-delayed-1 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[1.1] sm:leading-[1.15] tracking-tight text-white mb-6 sm:mb-8">
              <span className="block mb-3 sm:mb-4">Sovereignty</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#E8D099] to-[#C5A059] animate-pulse">
                Over Mind & Body
              </span>
            </h1>

            <p className="motion-reveal-delayed-2 mt-8 sm:mt-10 lg:mt-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide text-white/70">
              An exclusive intelligence platform engineered for elite athletes. Precision in every training cycle, nutrition protocol, and recovery day. No compromise. Only architectural excellence for those who refuse mediocrity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="motion-reveal-delayed-3 mt-12 sm:mt-14 lg:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full px-2">
            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-sm sm:text-base transition-all duration-500 border-2 border-[#C5A059] bg-[#C5A059] text-black hover:bg-transparent hover:text-[#C5A059] hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] w-full sm:w-auto">
              Start Elite Training
            </button>
            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-sm sm:text-base transition-all duration-500 border-2 border-[#C5A059]/50 bg-transparent text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/5 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] w-full sm:w-auto">
              Explore Programs
            </button>
          </div>

          {/* Statistics row */}
          <div className="motion-reveal-delayed-4 mt-16 sm:mt-20 lg:mt-24 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl border-y border-white/10 py-8 sm:py-12">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C5A059] mb-2">500+</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-white/50 font-light">Elite Athletes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C5A059] mb-2">94%</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-white/50 font-light">Goal Achievement</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C5A059] mb-2">48</p>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-white/50 font-light">Specializations</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 motion-float-elegant opacity-60">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-light">Scroll to explore</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="relative z-10 py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-12 md:gap-16 lg:gap-20 lg:grid-cols-2 lg:gap-32">
            <div className="relative motion-reveal">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-white/5">
                <div 
                  className="h-full w-full scale-110 bg-cover bg-center transition-transform duration-[20s] hover:scale-125"
                  style={{ backgroundImage: `url(${abstractImage1})` }}
                />
              </div>
              <div className="absolute -bottom-12 -right-12 hidden aspect-square w-72 overflow-hidden rounded-lg border-4 border-[#C5A059]/10 lg:block motion-float-elegant shadow-2xl" style={{ animationDelay: '2s' }}>
                <div 
                  className="h-full w-full bg-cover bg-center"
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

      {/* Testimonials Section */}
      <section className="relative z-10 py-32 px-6 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center motion-reveal">
            <span className="mb-4 inline-block text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">02 / Results</span>
            <h2 className="font-serif text-4xl font-light leading-snug md:text-5xl lg:text-6xl">
              Elite Athletes. Real Results.
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-sm font-light text-white/50">
              Testimonials from athletes who transformed their performance through precision training and elite coaching.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Marcus Johnson",
                role: "Strength Athlete",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                quote: "Hit a new deadlift PR of 455 lbs with the Strength Prime program. The progression is methodical, intelligent, and produces results.",
                metric: "+170 lbs Deadlift"
              },
              {
                name: "Sarah Chen",
                role: "Endurance Athlete",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
                quote: "Oryxen transformed my understanding of aerobic training. My VO2 max increased 18% in 12 weeks. The methodology is real.",
                metric: "+18% VO2 Max"
              },
              {
                name: "James Rodriguez",
                role: "Combat Athlete",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
                quote: "The conditioning protocols prepared me for actual competition. No platform has given me training this precise and this effective.",
                metric: "Competition Ready"
              },
              {
                name: "Maya Williams",
                role: "Body Composition",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
                quote: "Lost 8 lbs of fat while gaining muscle. The nutrition architecture is precisely calibrated. I've never felt better or stronger.",
                metric: "-8 lbs Fat / +3 lbs Muscle"
              },
              {
                name: "Alex Thompson",
                role: "Multi-Sport",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                quote: "The variety and depth of programs means I never plateau. Every cycle brings new challenges and new adaptations.",
                metric: "Consistent Progress"
              },
              {
                name: "Jessica Park",
                role: "Recovery Focus",
                image: "https://images.unsplash.com/photo-1554080221-cbf9d3fb3b5e?auto=format&fit=crop&w=150&q=80",
                quote: "The mobility protocols fixed chronic shoulder issues I had for years. The coaches understand biomechanics at the deepest level.",
                metric: "Pain-Free Training"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="group motion-reveal-delayed-1 rounded-lg border border-white/5 bg-[#0A0A0A] p-8 transition-all hover:border-[#C5A059]/30 hover:bg-[#0A0A0A]/80">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-[#C5A059]/20"
                      style={{ backgroundImage: `url(${testimonial.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C5A059" stroke="#C5A059" strokeWidth="1">
                        <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.52 19.64 24.78 12 18.52 4.36 24.78 6.45 16.52 0 10.26 8.91 10.26" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-light text-white/70 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="rounded-lg bg-[#C5A059]/10 px-3 py-2 border border-[#C5A059]/20">
                  <p className="text-[10px] uppercase tracking-wider text-[#C5A059] font-semibold">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Images */}
      <section className="relative z-10 py-16 sm:py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center motion-reveal">
            <span className="mb-4 inline-block text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">03 / Performance</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-snug">
              Platform Intelligence
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {[
              {
                stat: "500+",
                label: "Athletes Trained",
                desc: "Global performance optimization",
                image: statImage1
              },
              {
                stat: "48",
                label: "Specializations",
                desc: "Complete training methodologies",
                image: statImage2
              },
              {
                stat: "94%",
                label: "Goal Achievement",
                desc: "Verified outcome rate",
                image: statImage3
              }
            ].map((item, idx) => (
              <div key={idx} className="group motion-reveal-delayed-1 rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden hover:border-[#C5A059]/30 transition-all duration-500">
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="font-serif text-4xl font-light text-[#C5A059]">{item.stat}</p>
                  <p className="mt-2 font-semibold uppercase tracking-wider text-white">{item.label}</p>
                  <p className="mt-3 text-xs font-light text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-[9px] uppercase tracking-[0.2em] text-white/30">
        Oryxen © {new Date().getFullYear()} — Human Performance Intelligence
      </footer>
    </main>
  );
}
