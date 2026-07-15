"use client";

export function CtaBanner() {
  return (
    <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Premium CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/20 via-transparent to-[#C5A059]/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.15)_0%,transparent_70%)]" />
          </div>

          {/* Content */}
          <div className="relative px-6 sm:px-10 lg:px-16 py-12 sm:py-16 border border-[#C5A059]/30 glass-premium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side */}
              <div className="motion-slide-in-left">
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">
                  START YOUR TRANSFORMATION
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
                  Join Elite <span className="text-[#C5A059]">Performers</span>
                </h3>
                <p className="text-base text-white/70 font-light leading-relaxed max-w-md">
                  Access precision coaching, scientific training programs, and a community of elite athletes. Transform your performance today.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div>
                    <p className="text-2xl font-bold text-[#C5A059]">1250+</p>
                    <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Athletes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C5A059]">94%</p>
                    <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C5A059]">48</p>
                    <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Programs</p>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="motion-slide-in-right flex flex-col items-center lg:items-end gap-4">
                <div className="flex flex-col gap-4 w-full lg:w-auto">
                  <button className="group relative px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-500 border-2 border-[#C5A059] bg-[#C5A059] text-black hover:bg-transparent hover:text-[#C5A059] hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] w-full lg:w-auto">
                    Start Free Trial
                  </button>
                  <button className="group relative px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-500 border-2 border-[#C5A059]/50 bg-transparent text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/5 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] w-full lg:w-auto">
                    View Programs
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-col items-center lg:items-end gap-3 mt-4 pt-4 border-t border-white/10 w-full">
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-light">
                    Trusted by elite athletes worldwide
                  </p>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center text-xs text-[#C5A059] font-bold">
                      ★
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center text-xs text-[#C5A059] font-bold">
                      ★
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center text-xs text-[#C5A059] font-bold">
                      ★
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
