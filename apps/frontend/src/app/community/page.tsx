"use client";

import { useState } from "react";

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

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "p-1",
      author: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      role: "Premium Member",
      timestamp: "2 hours ago",
      content: "Just hit a new deadlift PR of 455 lbs! The Strength Prime program is absolutely crushing it. My technique has improved significantly and the progression is methodical but effective.",
      image: "https://images.unsplash.com/photo-1599058917212-d217368e6919?auto=format&fit=crop&w=600&q=90",
      likes: 247,
      comments: 24,
      userLiked: false,
      category: "Achievement"
    },
    {
      id: "p-2",
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      role: "Coach",
      timestamp: "4 hours ago",
      content: "The importance of deload weeks cannot be overstated. Your nervous system needs recovery just as much as your muscles do. Quality over quantity always wins in the long game.",
      likes: 512,
      comments: 68,
      userLiked: true,
      category: "Education"
    },
    {
      id: "p-3",
      author: "James Rodriguez",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
      role: "Premium Member",
      timestamp: "6 hours ago",
      content: "Completed 8 weeks of the Elite Engine program. Never felt my conditioning like this before. The interval programming is scientifically designed and it shows in the results.",
      likes: 189,
      comments: 42,
      userLiked: false,
      category: "Achievement"
    },
    {
      id: "p-4",
      author: "Maya Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      role: "Member",
      timestamp: "8 hours ago",
      content: "Question: How do you all structure your deload weeks? I've been taking it easy but want to make sure I'm doing it right according to the Oryxen methodology.",
      likes: 64,
      comments: 31,
      userLiked: false,
      category: "Question"
    }
  ]);

  const toggleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, userLiked: !post.userLiked, likes: post.userLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
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
    <main className="min-h-screen bg-[#030303] pt-28 pb-20 selection:bg-[#C5A059]/30">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Community</p>
          <h1 className="mt-2 font-serif text-4xl font-light text-white md:text-5xl">Elite Community.</h1>
          <p className="mt-6 max-w-2xl text-sm font-light text-white/50">Connect with fellow athletes. Share your achievements, ask questions, and learn from the community's collective experience.</p>
        </header>

        {/* Create Post Box */}
        <div className="mb-12 rounded-lg border border-white/5 bg-[#0A0A0A] p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#C5A059] to-[#E8D099]" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Share your achievement or ask the community..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]/50"
              />
              <div className="mt-4 flex gap-2 justify-end">
                <button className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-[10px] uppercase tracking-wider text-white/60 hover:border-white/40 transition-all">
                  Cancel
                </button>
                <button className="rounded-lg border border-[#C5A059] bg-[#C5A059] px-4 py-2 text-[10px] uppercase tracking-wider text-black hover:bg-transparent hover:text-[#C5A059] transition-all">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="rounded-lg border border-white/5 bg-[#0A0A0A] p-6 transition-all hover:border-[#C5A059]/20">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.avatar})` }}
                  />
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-xs text-white/50">{post.role} • {post.timestamp}</p>
                  </div>
                </div>
                <span 
                  className="rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-semibold"
                  style={{ backgroundColor: `${getCategoryColor(post.category)}20`, color: getCategoryColor(post.category) }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <p className="text-sm font-light text-white/80 leading-relaxed mb-4">
                {post.content}
              </p>

              {/* Image */}
              {post.image && (
                <div className="mb-4 rounded-lg overflow-hidden h-64 bg-white/5">
                  <img src={post.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Engagement */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex gap-6">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/50 hover:text-[#E74C3C] transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={post.userLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/50 hover:text-[#3498DB] transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    {post.comments}
                  </button>
                </div>
                <button className="text-[10px] uppercase tracking-wider text-white/50 hover:text-[#C5A059] transition-all">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="rounded-lg border border-white/20 bg-transparent px-8 py-3 text-[10px] uppercase tracking-wider text-white hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
            Load More Posts
          </button>
        </div>
      </div>
    </main>
  );
}
