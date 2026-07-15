'use client';

import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  className = '',
  threshold = 0.1,
  rootMargin = '-50px',
}: ScrollRevealProps) {
  const { ref, isVisible, scrollDirection } = useScrollAnimation({
    threshold,
    rootMargin,
  });

  const directionMap = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    scale: 'scale-90',
  };

  const directionMapReverse = {
    up: '-translate-y-12',
    down: 'translate-y-12',
    left: '-translate-x-12',
    right: 'translate-x-12',
    scale: 'scale-110',
  };

  // Different animations based on scroll direction
  const animationClass = scrollDirection === 'down' 
    ? directionMap[direction]
    : directionMapReverse[direction];

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : `opacity-0 ${animationClass}`
      }`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
}
