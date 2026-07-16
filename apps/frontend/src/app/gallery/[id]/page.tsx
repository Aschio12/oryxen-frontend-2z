'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { GalleryAnimation } from '@/components/GalleryAnimation';

interface TransformationStory {
  id: string;
  name: string;
  category: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  metrics: { label: string; before: string; after: string; change: string }[];
  testimonial: string;
  program: string;
}

const stories: TransformationStory[] = [
  {
    id: "story-1", name: "Marcus - Strength Journey", category: "strength", duration: "16 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1518611505868-d7380f6f97f2?auto=format&fit=crop&w=600&q=90",
    afterImage: "https://images.unsplash.com/photo-1599058917212-d217368e6919?auto=format&fit=crop&w=600&q=90",
    metrics: [
      { label: "Bench Press", before: "225 lbs", after: "285 lbs", change: "+60 lbs" },
      { label: "Squat", before: "315 lbs", after: "385 lbs", change: "+70 lbs" },
      { label: "Deadlift", before: "385 lbs", after: "455 lbs", change: "+70 lbs" },
      { label: "Body Weight", before: "195 lbs", after: "210 lbs", change: "+15 lbs lean" }
    ],
    testimonial: "The Strength Prime program gave me a methodical path to consistent PRs. Never thought I'd reach elite strength levels but the progression is proven and works.",
    program: "Strength Prime"
  },
  {
    id: "story-2", name: "Sarah - Conditioning Transformation", category: "conditioning", duration: "12 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=600&q=90",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=90",
    metrics: [
      { label: "VO2 Max", before: "42 ml/kg/min", after: "49 ml/kg/min", change: "+18%" },
      { label: "1km Sprint", before: "3:42", after: "3:18", change: "-24 sec" },
      { label: "Power Output", before: "1240W", after: "1520W", change: "+280W" },
      { label: "Recovery HR", before: "78 bpm", after: "62 bpm", change: "-16 bpm" }
    ],
    testimonial: "Elite Engine completely changed my cardiovascular capacity. I went from winded after 5 minutes to crushing 30-minute efforts.",
    program: "Elite Engine"
  },
  {
    id: "story-3", name: "James - Fat Loss Mastery", category: "fat-loss", duration: "8 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=90",
    afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=90",
    metrics: [
      { label: "Body Weight", before: "220 lbs", after: "198 lbs", change: "-22 lbs" },
      { label: "Body Fat %", before: "24%", after: "12%", change: "-12%" },
      { label: "Muscle Mass", before: "168 lbs", after: "174 lbs", change: "+6 lbs" },
      { label: "Visible Abs", before: "None", after: "Full 6-pack", change: "Defined" }
    ],
    testimonial: "Shred Summit delivered real fat loss while keeping me strong. Lost 22 lbs but gained muscle. The nutrition protocols are precise.",
    program: "Shred Summit"
  },
  {
    id: "story-4", name: "Lisa - Mobility Recovery", category: "mobility", duration: "4 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=600&q=90",
    afterImage: "https://images.unsplash.com/photo-1577480643389-0e199dfc8d74?auto=format&fit=crop&w=600&q=90",
    metrics: [
      { label: "Shoulder ROM", before: "Limited", after: "Full range", change: "100%" },
      { label: "Hip Flexibility", before: "Tight", after: "Mobile", change: "Excellent" },
      { label: "Chronic Pain", before: "Severe", after: "None", change: "Resolved" },
      { label: "Sleep Quality", before: "6 hrs", after: "8 hrs", change: "+2 hrs" }
    ],
    testimonial: "Mobility Restore fixed my shoulder issues that physical therapy couldn't solve. The coaches understand how joints actually work.",
    program: "Mobility Restore"
  },
  {
    id: "story-5", name: "Alex - Endurance Beast Mode", category: "endurance", duration: "16 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=90",
    afterImage: "https://images.unsplash.com/photo-1598105492230-abf695f1ddc5?auto=format&fit=crop&w=600&q=90",
    metrics: [
      { label: "10K Time", before: "41:30", after: "38:15", change: "-3:15" },
      { label: "Marathon PR", before: "3:12", after: "2:58", change: "-14 min" },
      { label: "Aerobic Threshold", before: "160 bpm", after: "155 bpm", change: "-5 bpm" },
      { label: "Training Volume", before: "40 mi/week", after: "60 mi/week", change: "+50%" }
    ],
    testimonial: "Endurance Beast transformed how I think about aerobic training. My marathon time dropped 14 minutes.",
    program: "Endurance Beast"
  },
  {
    id: "story-6", name: "Nicole - Combat Readiness", category: "combat", duration: "12 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1520854221256-17a973ff141d?auto=format&fit=crop&w=600&q=90",
    afterImage: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=600&q=90",
    metrics: [
      { label: "Striking Power", before: "Basic", after: "Elite", change: "Mastered" },
      { label: "Conditioning Rounds", before: "Gassed at 3", after: "Fresh at 5", change: "+40%" },
      { label: "Footwork", before: "Sloppy", after: "Precise", change: "Technical" },
      { label: "Competition Result", before: "Untested", after: "Victory", change: "Won" }
    ],
    testimonial: "Combat Athlete program prepared me for actual fight day. Unlike anything else.",
    program: "Combat Athlete"
  }
];

export default function GalleryDetail({ params }: { params: { id: string } }) {
  const story = stories.find(s => s.id === params.id);
  const [showBefore, setShowBefore] = useState(true);

  if (!story) return notFound();

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className={`flex-1 transition-all duration-1000 ${showBefore ? 'w-1/2' : 'w-0'}`}>
            <img src={story.beforeImage} alt="before" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 to-transparent" />
          </div>
          <div className={`flex-1 transition-all duration-1000 ${!showBefore ? 'w-1/2' : 'w-0'}`}>
            <img src={story.afterImage} alt="after" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#030303]/60 to-transparent" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />

        {/* Slider handle */}
        <button
          onClick={() => setShowBefore(!showBefore)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#C5A059] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {showBefore ? (
              <><path d="M9 18l6-6-6-6"/></>
            ) : (
              <><path d="M15 18l-6-6 6-6"/></>
            )}
          </svg>
        </button>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-[10px] uppercase tracking-wider text-white/60 bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm">
            {showBefore ? 'Before' : 'After'}
          </span>
        </div>

        <div className="absolute inset-0 flex items-end pb-16 lg:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
            <Link href="/gallery" className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to gallery
            </Link>
            <div className="flex items-center gap-3 motion-reveal mb-4">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{story.duration}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md capitalize">{story.category}</span>
            </div>
            <h1 className="font-serif text-4xl font-light md:text-6xl motion-reveal-delayed-1">{story.name}</h1>
            <p className="mt-3 text-sm font-light text-white/60 motion-reveal-delayed-2">Program: {story.program}</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="sticky top-16 z-40 border-b border-white/10 bg-[#030303]/98 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-4 shadow-lg shadow-black/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-4 gap-6 text-center">
            {story.metrics.map((metric, idx) => (
              <div key={idx} className="motion-stagger-1" style={{ animationDelay: `${idx * 0.15}s` }}>
                <p className="text-[9px] uppercase tracking-widest text-white/40">{metric.label}</p>
                <p className="mt-1 text-sm font-light text-[#2ECC71]">{metric.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              {/* Metrics Detail */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-8">Transformation Metrics</h2>
                <div className="grid gap-4">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border border-white/5 rounded-lg bg-white/[0.02] p-5 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/[0.02] transition-all group"
                      style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{metric.label}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-white/60">Before: <span className="text-white/80">{metric.before}</span></span>
                          <span className="text-[#C5A059]">→</span>
                          <span className="text-white/60">After: <span className="text-white">{metric.after}</span></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-light text-[#2ECC71] group-hover:scale-110 transition-transform">{metric.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Visual Comparison</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Before</p>
                    <img src={story.beforeImage} alt="before" className="w-full h-72 object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">After</p>
                    <img src={story.afterImage} alt="after" className="w-full h-72 object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Results Overview - Animated */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
                <h2 className="font-serif text-2xl text-white mb-6">Results Overview</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {story.metrics.map((metric, idx) => {
                    const val = parseInt(metric.change.replace(/[^0-9]/g, ''));
                    const maxVal = Math.max(...story.metrics.map(m => parseInt(m.change.replace(/[^0-9]/g, '')) || 100));
                    const pct = Math.min((val / maxVal) * 100, 100) || 50;
                    return (
                      <div key={idx} className="motion-stagger-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-white/60">{metric.label}</span>
                          <span className="text-xs text-[#2ECC71]">{metric.change}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#2ECC71] to-[#C5A059] animate-progress-shift rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Testimonial */}
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden motion-reveal sticky top-32">
                {/* Gallery Animation */}
                <div className="h-[180px] bg-gradient-to-br from-[#C5A059]/5 via-[#0A0A0A] to-[#030303] border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,204,113,0.05),transparent_70%)]" />
                  <div className="w-full h-full flex items-center justify-center">
                    <GalleryAnimation category={story.category} />
                  </div>
                </div>
                <div className="p-6">
                <div className="bg-gradient-to-br from-[#C5A059]/5 to-transparent rounded-lg p-6 -mb-2 mb-6">
                  <p className="text-[10px] uppercase tracking-wider text-[#C5A059] mb-4">Athlete Testimonial</p>
                  <div className="relative">
                    <span className="absolute -top-2 -left-1 text-3xl text-[#C5A059]/20 font-serif">"</span>
                    <p className="text-sm font-light text-white/80 leading-relaxed pl-4 italic">
                      {story.testimonial}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">Program</span>
                    <span className="text-sm font-light text-[#C5A059]">{story.program}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">Duration</span>
                    <span className="text-sm font-light text-white">{story.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">Category</span>
                    <span className="text-sm font-light text-white capitalize">{story.category}</span>
                  </div>
                </div>

                <Link
                  href="/programs"
                  className="block w-full rounded-lg bg-gradient-to-r from-[#C5A059] to-[#d4a574] text-black font-semibold py-3 text-center text-[10px] uppercase tracking-wider hover:shadow-lg hover:shadow-[#C5A059]/50 transition-all hover:scale-[1.02]"
                >
                  Start {story.program}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
