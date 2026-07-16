'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';

interface Post {
  id: string;
  author: string;
  avatar: string;
  role: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  userLiked?: boolean;
  category: string;
}

const posts: Post[] = [
  {
    id: "p-1", author: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    role: "Premium Member", timestamp: "2 hours ago",
    content: "Just hit a new deadlift PR of 455 lbs! The Strength Prime program is absolutely crushing it. My technique has improved significantly and the progression is methodical but effective.",
    image: "https://images.unsplash.com/photo-1599058917212-d217368e6919?auto=format&fit=crop&w=600&q=90",
    likes: 247, comments: 24, userLiked: false, category: "Achievement"
  },
  {
    id: "p-2", author: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    role: "Coach", timestamp: "4 hours ago",
    content: "The importance of deload weeks cannot be overstated. Your nervous system needs recovery just as much as your muscles do. Quality over quantity always wins in the long game.",
    likes: 512, comments: 68, userLiked: true, category: "Education"
  },
  {
    id: "p-3", author: "James Rodriguez",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    role: "Premium Member", timestamp: "6 hours ago",
    content: "Completed 8 weeks of the Elite Engine program. Never felt my conditioning like this before. The interval programming is scientifically designed and it shows in the results.",
    likes: 189, comments: 42, userLiked: false, category: "Achievement"
  },
  {
    id: "p-4", author: "Maya Williams",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    role: "Member", timestamp: "8 hours ago",
    content: "Question: How do you all structure your deload weeks? I've been taking it easy but want to make sure I'm doing it right according to the Oryxen methodology.",
    likes: 64, comments: 31, userLiked: false, category: "Question"
  }
];

export default function CommunityPostDetail({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  const [userLiked, setUserLiked] = useState(post?.userLiked || false);
  const [likes, setLikes] = useState(post?.likes || 0);

  if (!post) return notFound();

  const toggleLike = () => {
    setUserLiked(!userLiked);
    setLikes(userLiked ? likes - 1 : likes + 1);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Achievement": return "#2ECC71";
      case "Education": return "#3498DB";
      case "Question": return "#F39C12";
      case "Announcement": return "#E74C3C";
      default: return "#C5A059";
    }
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#C5A059]/30">
      {/* Hero */}
      <section className="relative h-[30vh] min-h-[250px] w-full overflow-hidden bg-gradient-to-br from-[#C5A059]/10 via-[#030303] to-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,160,89,0.1),transparent_60%)]" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Link href="/community" className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors motion-fade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to community
            </Link>
            <div className="flex items-center gap-3 motion-reveal mb-3">
              <span className="rounded-sm bg-[#C5A059]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#C5A059] backdrop-blur-md">{post.category}</span>
            </div>
            <h1 className="font-serif text-3xl font-light md:text-5xl motion-reveal-delayed-1">Post</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 motion-reveal">
            {/* Author */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-cover bg-center flex-shrink-0 motion-rotate-in"
                  style={{ backgroundImage: `url(${post.avatar})` }}
                />
                <div>
                  <p className="font-serif text-xl text-white">{post.author}</p>
                  <p className="text-sm text-white/50 mt-1">{post.role} &bull; {post.timestamp}</p>
                </div>
              </div>
              <span
                className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-semibold"
                style={{ backgroundColor: `${getCategoryColor(post.category)}20`, color: getCategoryColor(post.category) }}
              >
                {post.category}
              </span>
            </div>

            {/* Post Content */}
            <div className="mb-6">
              <p className="text-lg font-light text-white/80 leading-relaxed">{post.content}</p>
            </div>

            {/* Image */}
            {post.image && (
              <div className="mb-6 rounded-lg overflow-hidden h-80 bg-white/5">
                <img src={post.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex gap-6">
                <button
                  onClick={toggleLike}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-wider transition-all group"
                  style={{ color: userLiked ? '#E74C3C' : 'rgba(255,255,255,0.5)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={userLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className="animate-counter" key={likes}>{likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/50 hover:text-[#3498DB] transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  {post.comments}
                </button>
              </div>
              <button className="text-[10px] uppercase tracking-wider text-white/50 hover:text-[#C5A059] transition-all">
                Share &rarr;
              </button>
            </div>
          </div>

          {/* Reply suggestion */}
          <div className="mt-8 rounded-xl border border-white/10 bg-[#0A0A0A] p-6 motion-reveal">
            <h3 className="font-serif text-lg text-white mb-4">Join the Conversation</h3>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#C5A059] to-[#E8D099] flex-shrink-0" />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Share your thoughts..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50"
                />
                <div className="mt-3 flex justify-end gap-2">
                  <button className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-[10px] uppercase tracking-wider text-white/60 hover:border-white/40 transition-all">
                    Cancel
                  </button>
                  <button className="rounded-lg border border-[#C5A059] bg-[#C5A059] px-4 py-2 text-[10px] uppercase tracking-wider text-black hover:bg-transparent hover:text-[#C5A059] transition-all">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/community" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#C5A059] hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
