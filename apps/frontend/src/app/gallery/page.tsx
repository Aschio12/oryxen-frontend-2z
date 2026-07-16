"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TransformationStory {
  id: string;
  name: string;
  category: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    change: string;
  }[];
  testimonial: string;
  program: string;
}

export default function GalleryPage() {
  const [selectedStory, setSelectedStory] = useState<TransformationStory | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const stories: TransformationStory[] = [
    {
      id: "story-1",
      name: "Marcus - Strength Journey",
      category: "strength",
      duration: "16 Weeks",
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
      id: "story-2",
      name: "Sarah - Conditioning Transformation",
      category: "conditioning",
      duration: "12 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=600&q=90",
      afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=90",
      metrics: [
        { label: "VO2 Max", before: "42 ml/kg/min", after: "49 ml/kg/min", change: "+18%" },
        { label: "1km Sprint", before: "3:42", after: "3:18", change: "-24 sec" },
        { label: "Power Output", before: "1240W", after: "1520W", change: "+280W" },
        { label: "Recovery HR", before: "78 bpm", after: "62 bpm", change: "-16 bpm" }
      ],
      testimonial: "Elite Engine completely changed my cardiovascular capacity. I went from winded after 5 minutes to crushing 30-minute efforts. The science behind the programming is real.",
      program: "Elite Engine"
    },
    {
      id: "story-3",
      name: "James - Fat Loss Mastery",
      category: "fat-loss",
      duration: "8 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=90",
      afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=90",
      metrics: [
        { label: "Body Weight", before: "220 lbs", after: "198 lbs", change: "-22 lbs" },
        { label: "Body Fat %", before: "24%", after: "12%", change: "-12%" },
        { label: "Muscle Mass", before: "168 lbs", after: "174 lbs", change: "+6 lbs" },
        { label: "Visible Abs", before: "None", after: "Full 6-pack", change: "Defined" }
      ],
      testimonial: "Shred Summit delivered real fat loss while keeping me strong. Lost 22 lbs but gained muscle. The nutrition protocols are precise and easy to follow.",
      program: "Shred Summit"
    },
    {
      id: "story-4",
      name: "Lisa - Mobility Recovery",
      category: "mobility",
      duration: "4 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=600&q=90",
      afterImage: "https://images.unsplash.com/photo-1577480643389-0e199dfc8d74?auto=format&fit=crop&w=600&q=90",
      metrics: [
        { label: "Shoulder ROM", before: "Limited", after: "Full range", change: "100%" },
        { label: "Hip Flexibility", before: "Tight", after: "Mobile", change: "Excellent" },
        { label: "Chronic Pain", before: "Severe", after: "None", change: "Resolved" },
        { label: "Sleep Quality", before: "6 hrs", after: "8 hrs", change: "+2 hrs" }
      ],
      testimonial: "Mobility Restore fixed my shoulder issues that physical therapy couldn't solve. The coaches understand how joints actually work. Game-changer for my recovery.",
      program: "Mobility Restore"
    },
    {
      id: "story-5",
      name: "Alex - Endurance Beast Mode",
      category: "endurance",
      duration: "16 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=90",
      afterImage: "https://images.unsplash.com/photo-1598105492230-abf695f1ddc5?auto=format&fit=crop&w=600&q=90",
      metrics: [
        { label: "10K Time", before: "41:30", after: "38:15", change: "-3:15" },
        { label: "Marathon PR", before: "3:12", after: "2:58", change: "-14 min" },
        { label: "Aerobic Threshold", before: "160 bpm", after: "155 bpm", change: "-5 bpm" },
        { label: "Training Volume", before: "40 mi/week", after: "60 mi/week", change: "+50%" }
      ],
      testimonial: "Endurance Beast transformed how I think about aerobic training. My marathon time dropped 14 minutes. The periodization is exact and scientific.",
      program: "Endurance Beast"
    },
    {
      id: "story-6",
      name: "Nicole - Combat Readiness",
      category: "combat",
      duration: "12 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1520854221256-17a973ff141d?auto=format&fit=crop&w=600&q=90",
      afterImage: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=600&q=90",
      metrics: [
        { label: "Striking Power", before: "Basic", after: "Elite", change: "Mastered" },
        { label: "Conditioning Rounds", before: "Gassed at 3", after: "Fresh at 5", change: "+40%" },
        { label: "Footwork", before: "Sloppy", after: "Precise", change: "Technical" },
        { label: "Competition Result", before: "Untested", after: "Victory", change: "Won" }
      ],
      testimonial: "Combat Athlete program prepared me for actual fight day. Unlike anything else - it combines technical work with real conditioning demands.",
      program: "Combat Athlete"
    }
  ];

  const categories = ["all", "strength", "conditioning", "fat-loss", "mobility", "endurance", "combat"];
  
  const filteredStories = activeFilter === "all" 
    ? stories 
    : stories.filter(story => story.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <header className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-white mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back Home
          </Link>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Results</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Transformation Gallery.</h1>
          <p className="mt-6 max-w-2xl text-sm font-light text-white/50">Real athletes. Real transformations. Real results from Oryxen's precision training methodology.</p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? "bg-[#C5A059] text-black"
                    : "border border-white/20 text-white/60 hover:border-white/40"
                }`}
              >
                {cat === "all" ? "All" : cat.replace("-", " ")}
              </button>
            ))}
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group cursor-pointer rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden transition-all hover:border-[#C5A059]/30"
            >
              {/* Before/After Images */}
              <div className="relative h-80 overflow-hidden bg-white/5">
                <div className="absolute inset-0 flex">
                  <div className="flex-1 overflow-hidden">
                    <img src={story.beforeImage} alt="before" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 flex-1 overflow-hidden group-hover:w-2/3 transition-all duration-300">
                    <img src={story.afterImage} alt="after" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent to-[#030303]/20 group-hover:w-1/3 transition-all duration-300" />
                </div>

                {/* Labels */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-wider text-white/60 bg-black/40 px-2 py-1 rounded">Before</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] bg-black/40 px-2 py-1 rounded">After</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">{story.duration}</p>
                    <h3 className="mt-1 font-serif text-xl font-light text-white">{story.name}</h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 rounded-full px-3 py-1">
                    {story.program}
                  </span>
                </div>

                {/* Metrics Preview */}
                <div className="grid gap-2 mb-4">
                  {story.metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-white/60">{metric.label}</span>
                      <span className="font-light text-[#2ECC71]">{metric.change}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/gallery/${story.id}`}
                  className="block w-full rounded-lg border border-[#C5A059] bg-[#C5A059] py-2 text-[10px] uppercase tracking-wider text-black font-semibold text-center hover:bg-transparent hover:text-[#C5A059] transition-all"
                >
                  View Full Story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="relative max-h-[90vh] max-w-4xl w-full overflow-y-auto rounded-xl border border-white/10 bg-[#030303] p-8">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            {/* Before/After Comparison */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="relative">
                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Before</p>
                <img src={selectedStory.beforeImage} alt="before" className="w-full rounded-lg h-80 object-cover" />
              </div>
              <div className="relative">
                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">After</p>
                <img src={selectedStory.afterImage} alt="after" className="w-full rounded-lg h-80 object-cover" />
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-wider text-[#C5A059]">{selectedStory.duration}</p>
              <h2 className="mt-2 font-serif text-4xl font-light text-white">{selectedStory.name}</h2>
              <p className="mt-2 text-sm text-white/60">Program: <span className="text-[#C5A059]">{selectedStory.program}</span></p>
            </div>

            {/* Metrics */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              {selectedStory.metrics.map((metric, idx) => (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">{metric.label}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-white/70">Before: <span className="text-white">{metric.before}</span></p>
                      <p className="text-xs text-white/70">After: <span className="text-white">{metric.after}</span></p>
                    </div>
                    <p className="text-lg font-light text-[#2ECC71] ml-4">{metric.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="rounded-lg border-l-2 border-[#C5A059] bg-[#C5A059]/10 p-6 mb-8">
              <p className="text-[10px] uppercase tracking-wider text-[#C5A059] mb-2">Testimonial</p>
              <p className="text-sm font-light text-white/80 leading-relaxed">"{selectedStory.testimonial}"</p>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg border border-[#C5A059] bg-[#C5A059] py-3 text-[10px] uppercase tracking-wider text-black font-semibold transition-all hover:bg-transparent hover:text-[#C5A059]">
                Start {selectedStory.program}
              </button>
              <button 
                onClick={() => setSelectedStory(null)}
                className="flex-1 rounded-lg border border-white/20 bg-transparent py-3 text-[10px] uppercase tracking-wider text-white transition-all hover:border-white/40"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
