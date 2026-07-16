"use client";

import { useState } from "react";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles: Article[] = [
    {
      id: "a-1",
      title: "The Science of Progressive Overload",
      excerpt: "Understanding how to systematically increase training stress to drive continuous adaptation and strength gains.",
      category: "strength",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=800&q=90",
      featured: true
    },
    {
      id: "a-2",
      title: "Periodization Models for Elite Performance",
      excerpt: "A deep dive into different periodization approaches and how to apply them to your training cycles for maximum results.",
      category: "programming",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=90",
      featured: true
    },
    {
      id: "a-3",
      title: "Macronutrient Timing and Body Composition",
      excerpt: "Optimizing when and how you consume proteins, carbs, and fats for maximum performance and physique improvements.",
      category: "nutrition",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=90"
    },
    {
      id: "a-4",
      title: "Recovery Protocols That Actually Work",
      excerpt: "Evidence-based recovery strategies including sleep optimization, mobility work, and stress management.",
      category: "recovery",
      readTime: 9,
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=90"
    },
    {
      id: "a-5",
      title: "Aerobic Capacity Development Framework",
      excerpt: "Building a robust aerobic base with specific zone training protocols and adaptive techniques.",
      category: "conditioning",
      readTime: 11,
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=90"
    },
    {
      id: "a-6",
      title: "Mobility Work for Longevity",
      excerpt: "Why mobility matters, how to assess your needs, and implementing effective mobility protocols.",
      category: "mobility",
      readTime: 7,
      image: "https://images.unsplash.com/photo-1577480643389-0e199dfc8d74?auto=format&fit=crop&w=800&q=90"
    },
    {
      id: "a-7",
      title: "Mental Toughness in Combat Sports",
      excerpt: "Psychological strategies for managing fear, pain, and fatigue in high-stress competitive environments.",
      category: "mindset",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=800&q=90"
    },
    {
      id: "a-8",
      title: "The Role of Sleep in Athletic Performance",
      excerpt: "Deep dive into sleep architecture, circadian rhythms, and optimization strategies for elite athletes.",
      category: "recovery",
      readTime: 13,
      image: "https://images.unsplash.com/photo-1542022783-23a7b7e26d5f?auto=format&fit=crop&w=800&q=90"
    }
  ];

  const categories = ["all", "strength", "programming", "nutrition", "recovery", "conditioning", "mobility", "mindset"];
  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);
  
  const featuredArticles = articles.filter(a => a.featured);

  return (
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Knowledge</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Resources & Guides.</h1>
          <p className="mt-6 max-w-2xl text-sm font-light text-white/50">Science-backed articles, programming guides, and performance strategies from elite coaches and researchers.</p>
        </header>

        {/* Featured Articles */}
        {filteredArticles.some(a => a.featured) && selectedCategory === "all" && (
          <section className="mb-16">
            <h2 className="mb-6 font-serif text-2xl font-light text-white">Featured</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/resources/${article.id}`} className="group rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden hover:border-[#C5A059]/30 transition-all cursor-pointer block">
                  <div className="relative h-64 overflow-hidden bg-white/5">
                    <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]/80" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-1 rounded">Featured</span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">{article.readTime} min read</span>
                    </div>
                    <h3 className="font-serif text-2xl font-light text-white mb-3 group-hover:text-[#C5A059] transition-colors">{article.title}</h3>
                    <p className="text-sm font-light text-white/70 leading-relaxed">{article.excerpt}</p>
                    <span className="mt-4 inline-flex text-[10px] uppercase tracking-wider text-[#C5A059] group-hover:text-white transition-all">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#C5A059] text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              {cat === "all" ? "All Topics" : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <section>
          <h2 className="mb-6 font-serif text-2xl font-light text-white">
            {selectedCategory === "all" ? "All Articles" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Articles`}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link 
                key={article.id} 
                href={`/resources/${article.id}`}
                className="group rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden hover:border-[#C5A059]/30 transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">{article.readTime} min</span>
                  </div>
                  <h3 className="font-serif text-lg font-light text-white mb-2 leading-snug group-hover:text-[#C5A059] transition-colors">{article.title}</h3>
                  <p className="text-sm font-light text-white/60 leading-relaxed flex-1">{article.excerpt}</p>
                  <span className="mt-4 text-[10px] uppercase tracking-wider text-[#C5A059] group-hover:text-white transition-all self-start">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 rounded-lg border border-white/5 bg-[#0A0A0A] p-12 text-center">
          <h2 className="font-serif text-3xl font-light text-white mb-4">Get Expert Insights Weekly</h2>
          <p className="text-sm font-light text-white/60 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for science-backed training articles, programming updates, and elite performance strategies.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50"
            />
            <button className="rounded-lg border border-[#C5A059] bg-[#C5A059] px-6 py-3 text-[10px] uppercase tracking-wider text-black font-semibold hover:bg-transparent hover:text-[#C5A059] transition-all">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
