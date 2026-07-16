'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ResourcesAnimation } from '@/components/ResourcesAnimation';

interface Article {
  id: string; title: string; excerpt: string; category: string; readTime: number; image: string;
}

const articles: Article[] = [
  { id: "a-1", title: "The Science of Progressive Overload", excerpt: "Understanding how to systematically increase training stress to drive continuous adaptation and strength gains.", category: "strength", readTime: 8, image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-2", title: "Periodization Models for Elite Performance", excerpt: "A deep dive into different periodization approaches and how to apply them to your training cycles for maximum results.", category: "programming", readTime: 12, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-3", title: "Macronutrient Timing and Body Composition", excerpt: "Optimizing when and how you consume proteins, carbs, and fats for maximum performance and physique improvements.", category: "nutrition", readTime: 10, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-4", title: "Recovery Protocols That Actually Work", excerpt: "Evidence-based recovery strategies including sleep optimization, mobility work, and stress management.", category: "recovery", readTime: 9, image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-5", title: "Aerobic Capacity Development Framework", excerpt: "Building a robust aerobic base with specific zone training protocols and adaptive techniques.", category: "conditioning", readTime: 11, image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-6", title: "Mobility Work for Longevity", excerpt: "Why mobility matters, how to assess your needs, and implementing effective mobility protocols.", category: "mobility", readTime: 7, image: "https://images.unsplash.com/photo-1577480643389-0e199dfc8d74?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-7", title: "Mental Toughness in Combat Sports", excerpt: "Psychological strategies for managing fear, pain, and fatigue in high-stress competitive environments.", category: "mindset", readTime: 10, image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=1200&q=90" },
  { id: "a-8", title: "The Role of Sleep in Athletic Performance", excerpt: "Deep dive into sleep architecture, circadian rhythms, and optimization strategies for elite athletes.", category: "recovery", readTime: 13, image: "https://images.unsplash.com/photo-1542022783-23a7b7e26d5f?auto=format&fit=crop&w=1200&q=90" },
];

export default function ResourceDetail({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === params.id);
  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center motion-pan-slow" style={{ backgroundImage: `url(${article.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
            <Link href="/resources" className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to resources
            </Link>
            <div className="flex items-center gap-3 motion-reveal mb-4">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{article.category}</span>
              <span className="rounded-sm bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-md">{article.readTime} min read</span>
            </div>
            <h1 className="font-serif text-4xl font-light md:text-6xl motion-reveal-delayed-1 max-w-4xl">{article.title}</h1>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl">
            {/* Resource Animation */}
            <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden mb-12 motion-reveal">
              <div className="relative h-[250px] bg-gradient-to-br from-[#C5A059]/5 via-[#0A0A0A] to-[#030303] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05),transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ResourcesAnimation category={article.category} readTime={article.readTime} />
                </div>
              </div>
            </div>

            <article className="space-y-8 motion-reveal">
              <p className="text-lg font-light text-white/80 leading-relaxed">{article.excerpt}</p>
              
              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-[#C5A059]/30 transition-all">
                <h2 className="font-serif text-2xl text-white mb-6">Introduction</h2>
                <p className="text-sm font-light text-white/70 leading-relaxed mb-4">
                  This comprehensive guide explores {article.title.toLowerCase()}. Whether you are a beginner or an elite athlete, understanding these principles will elevate your training methodology.
                </p>
                <p className="text-sm font-light text-white/70 leading-relaxed mb-4">
                  The concepts discussed here are backed by current sports science research and have been applied successfully by Oryxen athletes across multiple disciplines.
                </p>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  Take your time to work through each section and apply the principles to your own training regimen.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-[#C5A059]/30 transition-all">
                <h2 className="font-serif text-2xl text-white mb-6">Key Takeaways</h2>
                <div className="space-y-4">
                  {[
                    "Understand the fundamental principles that drive adaptation and progress.",
                    "Learn practical application strategies you can implement immediately.",
                    "Discover common pitfalls and how to avoid them in your training.",
                    "Access evidence-based protocols used by elite performers worldwide."
                  ].map((takeaway, idx) => (
                    <div key={idx} className="flex gap-3 group hover:bg-white/[0.02] p-2 -mx-2 rounded-lg transition-all">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C5A059]/20 text-xs text-[#C5A059] font-semibold flex-shrink-0 mt-0.5 group-hover:bg-[#C5A059]/30 transition-all">{idx + 1}</span>
                      <p className="text-sm font-light text-white/70 group-hover:text-white/80 transition-colors">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-[#C5A059]/30 transition-all">
                <h2 className="font-serif text-2xl text-white mb-6">Continue Learning</h2>
                <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                  This article is part of a comprehensive knowledge base designed for athletes committed to evidence-based training. Explore related resources to deepen your understanding.
                </p>
                <div className="flex gap-4">
                  <Link href="/resources" className="rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 px-6 py-3 text-[10px] uppercase tracking-wider text-[#C5A059] hover:bg-[#C5A059]/20 transition-all hover:scale-[1.02]">
                    Browse All Resources
                  </Link>
                  <Link href="/programs" className="rounded-lg border border-[#C5A059] bg-[#C5A059] px-6 py-3 text-[10px] uppercase tracking-wider text-black hover:bg-transparent hover:text-[#C5A059] transition-all hover:scale-[1.02]">
                    Explore Programs
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
