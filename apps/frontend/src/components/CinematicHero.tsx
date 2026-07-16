'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CinematicHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-[#030303] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/10 via-transparent to-[#C5A059]/5 animate-pulse" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(197, 160, 89, .1) 25%, rgba(197, 160, 89, .1) 26%, transparent 27%, transparent 74%, rgba(197, 160, 89, .1) 75%, rgba(197, 160, 89, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(197, 160, 89, .1) 25%, rgba(197, 160, 89, .1) 26%, transparent 27%, transparent 74%, rgba(197, 160, 89, .1) 75%, rgba(197, 160, 89, .1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 h-screen mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-16 pt-24 lg:pt-28">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 space-y-8 lg:pr-12">
          {/* Main heading with staggered reveals */}
          <div className="overflow-hidden">
            <h1
              className={`text-7xl lg:text-8xl font-serif font-light text-white tracking-tight transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{
                textShadow: `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(197, 160, 89, 0.1)`,
              }}
            >
              ELITE
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1
              className={`text-7xl lg:text-8xl font-serif font-light bg-gradient-to-r from-[#C5A059] to-[#e8d4a8] bg-clip-text text-transparent transition-all duration-1000 transform delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{
                transitionDelay: '200ms',
              }}
            >
              PERFORMANCE
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-lg lg:text-xl text-white/70 max-w-md leading-relaxed font-light transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: '400ms',
            }}
          >
            Unlock your full potential with elite training programs, world-class coaching, and cutting-edge performance science
          </p>

          {/* Animated accent line */}
          <div
            className={`h-1 bg-gradient-to-r from-[#C5A059] to-transparent w-24 transition-all duration-1000 transform ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{
              transitionDelay: '600ms',
              transformOrigin: 'left',
            }}
          />

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: '800ms',
            }}
          >
            <Link
              href="/programs"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#d4a574] text-black font-semibold rounded-none overflow-hidden hover:shadow-lg hover:shadow-[#C5A059]/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">EXPLORE PROGRAMS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4a574] to-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/exercises"
              className="px-8 py-4 border border-[#C5A059] text-[#C5A059] font-semibold hover:bg-[#C5A059]/10 transition-all duration-300 transform hover:scale-105"
            >
              BROWSE EXERCISES
            </Link>
          </div>

          {/* Stats line */}
          <div className="flex gap-8 pt-8 border-t border-white/10">
            <div className="animate-pulse">
              <p className="text-3xl font-serif font-light text-[#C5A059]">50K+</p>
              <p className="text-sm text-white/60">Active Athletes</p>
            </div>
            <div className="animate-pulse" style={{ animationDelay: '200ms' }}>
              <p className="text-3xl font-serif font-light text-[#C5A059]">100+</p>
              <p className="text-sm text-white/60">Expert Programs</p>
            </div>
            <div className="animate-pulse" style={{ animationDelay: '400ms' }}>
              <p className="text-3xl font-serif font-light text-[#C5A059]">24/7</p>
              <p className="text-sm text-white/60">Elite Support</p>
            </div>
          </div>
        </div>

        {/* Right side - Hero image with parallax */}
        <div className="hidden lg:block w-1/2 h-full relative">
          <div
            className="absolute inset-0 transition-transform duration-75 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          >
            {/* Hero image background */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#C5A059]/20 to-transparent" />
            
            {/* Main hero image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 to-[#030303]" />
            <Image
              src="/images/hero-athlete-main.png"
              alt="Elite athlete"
              fill
              className="object-contain object-right-bottom"
              priority
              quality={95}
              sizes="50vw"
            />

            {/* Floating glass card */}
            <div className="absolute bottom-20 left-8 glass-premium p-5 rounded-lg max-w-xs hover-lift cursor-pointer group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059]/50 transition-colors">
                  <span className="text-[#C5A059]">⚡</span>
                </div>
                <h3 className="text-white font-semibold text-sm">Peak Performance</h3>
              </div>
              <p className="text-white/60 text-xs">Reach your athletic potential</p>
            </div>


          </div>

          {/* Animated accent shapes */}
          <div className="absolute -top-20 -right-20 w-96 h-96 border border-[#C5A059]/20 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 border border-[#C5A059]/10 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
          isScrolled ? 'opacity-0 -translate-y-4' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#C5A059] text-sm font-light tracking-widest">SCROLL TO EXPLORE</p>
          <div className="animate-bounce">
            <svg
              className="w-5 h-5 text-[#C5A059]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
