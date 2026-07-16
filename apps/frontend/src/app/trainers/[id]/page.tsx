'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trainers } from '@/data/fitness';
import { notFound } from 'next/navigation';
import { TrainerAnimation } from '@/components/TrainerAnimation';

export default function TrainerDetail({ params }: { params: { id: string } }) {
  const trainer = trainers.find(t => t.id === params.id);
  const [activeTab, setActiveTab] = useState<'about' | 'specialties' | 'reviews'>('about');

  if (!trainer) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center motion-pan-slow"
          style={{ backgroundImage: `url(${trainer.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]" />
        
        <div className="absolute inset-0 flex items-end pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Link href="/trainers" className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to coaches
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 motion-reveal mb-6">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{trainer.role}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">Elite Coach</span>
            </div>
            
            <h1 className="font-serif text-5xl font-light md:text-7xl motion-reveal-delayed-1">{trainer.name}</h1>
            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/70 motion-reveal-delayed-2">
              {trainer.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#030303]/98 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-5 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="motion-stagger-1">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Role</p>
              <p className="mt-1 text-lg font-light text-[#C5A059]">{trainer.role}</p>
            </div>
            <div className="motion-stagger-2">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Rating</p>
              <div className="mt-1 flex items-center gap-2">
                <p className="text-lg font-light text-white">4.9</p>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-[#C5A059] animate-star-sparkle" style={{ animationDelay: `${i * 0.2}s` }}>
                      <polygon points="12 2 15.09 10.26 23.77 10.36 17.13 16.01 19.09 24.29 12 18.59 4.91 24.29 6.87 16.01 0.23 10.36 8.91 10.26" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="motion-stagger-3">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Experience</p>
              <p className="mt-1 text-lg font-light text-white">15+ years</p>
            </div>
            <div className="motion-stagger-4">
              <p className="text-[9px] uppercase tracking-widest text-white/40">Athletes</p>
              <p className="mt-1 text-lg font-light text-white">500+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Navigation */}
      <section className="border-b border-white/10 bg-[#0A0A0A]/50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {['about', 'specialties', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`pb-4 pt-6 px-1 text-[11px] uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-[#C5A059] text-[#C5A059]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab === 'about' && 'About'}
                {tab === 'specialties' && 'Specialties'}
                {tab === 'reviews' && 'Reviews'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              {activeTab === 'about' && (
                <div className="space-y-8 motion-reveal">
                  <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-serif text-2xl text-white">Professional Summary</h2>
                      <span className="text-[9px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full animate-glint">Elite</span>
                    </div>
                    <p className="text-white/80 font-light leading-relaxed">
                      {trainer.bio}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                    <h2 className="font-serif text-2xl text-white mb-6">Certifications & Qualifications</h2>
                    <div className="space-y-3">
                      {[
                        'Certified Strength & Conditioning Specialist (CSCS)',
                        'Precision Nutrition Level 1 Certification',
                        'USA Weightlifting Coach',
                        'Movement Assessment Specialist'
                      ].map((cert, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/5 transition-all group"
                          style={{ animationDelay: `${idx * 0.1}s` }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#C5A059] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-white/80 font-light group-hover:text-white transition-colors">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Specialties */}
              {activeTab === 'specialties' && (
                <div className="space-y-8 motion-reveal">
                  <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                    <h2 className="font-serif text-2xl text-white mb-6">Training Specialties</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        { name: 'Strength Development', desc: 'Progressive loading protocols for maximal strength gains' },
                        { name: 'Conditioning', desc: 'Sport-specific conditioning and work capacity' },
                        { name: 'Movement Quality', desc: 'Precision coaching for optimal biomechanics' },
                        { name: 'Recovery Protocols', desc: 'Evidence-based recovery and regeneration strategies' }
                      ].map((spec, idx) => (
                        <div key={idx} className="border-l-2 border-[#C5A059] pl-4 py-2 hover:border-l-4 transition-all group">
                          <p className="text-[10px] uppercase tracking-wider text-[#C5A059] mb-2 group-hover:text-white transition-colors">{spec.name}</p>
                          <p className="text-white/70 font-light text-sm group-hover:text-white/90 transition-colors">{spec.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8">
                    <h2 className="font-serif text-2xl text-white mb-6">Training Methodologies</h2>
                    <div className="space-y-4">
                      {[
                        'Progressive Overload Programming',
                        'Movement Pattern Optimization',
                        'Periodized Training Cycles',
                        'Nutritional Coaching & Meal Planning',
                        'Recovery & Mobility Work'
                      ].map((method, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/5 transition-all group"
                          style={{ animationDelay: `${idx * 0.1}s` }}>
                          <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 group-hover:scale-150 transition-transform" />
                          <span className="text-white/80 font-light group-hover:text-white transition-colors">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews */}
              {activeTab === 'reviews' && (
                <div className="space-y-6 motion-reveal">
                  {[
                    {
                      name: 'Michael Chen',
                      rating: 5,
                      text: 'Exceptional coach. Personalized approach and constant feedback transformed my form and results.'
                    },
                    {
                      name: 'Sarah Williams',
                      rating: 5,
                      text: 'Best investment in my fitness journey. Technical expertise is unmatched.'
                    }
                  ].map((review, idx) => (
                    <div key={idx} className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/[0.02] transition-all animate-quote-fade"
                      style={{ animationDelay: `${idx * 0.2}s` }}>
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-semibold text-white">{review.name}</p>
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#C5A059] animate-star-sparkle" style={{ animationDelay: `${i * 0.2}s` }}>
                              <polygon points="12 2 15.09 10.26 23.77 10.36 17.13 16.01 19.09 24.29 12 18.59 4.91 24.29 6.87 16.01 0.23 10.36 8.91 10.26" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-white/70 font-light leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 motion-reveal sticky top-32">
                {/* Trainer Animation */}
                <div className="mb-6 -mx-2">
                  <TrainerAnimation name={trainer.name} role={trainer.role} />
                </div>

                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-3">Rating</p>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 5 ? "currentColor" : "none"} stroke="currentColor" className={i < 5 ? "text-[#C5A059]" : "text-white/20"}>
                          <polygon points="12 2 15.09 10.26 23.77 10.36 17.13 16.01 19.09 24.29 12 18.59 4.91 24.29 6.87 16.01 0.23 10.36 8.91 10.26" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-light">4.9</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Available Sessions</p>
                    <p className="text-white font-light">1-on-1 Coaching, Group Classes, Online Training</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#C5A059] to-[#d4a574] text-black font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-[#C5A059]/50 transition-all duration-300 text-sm uppercase tracking-wider mb-3 hover:scale-[1.02] active:scale-[0.98]">
                  Book a Session
                </button>
                <button className="w-full border border-[#C5A059] text-[#C5A059] font-semibold py-3 rounded-lg hover:bg-[#C5A059]/10 transition-all duration-300 text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]">
                  Contact Coach
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
