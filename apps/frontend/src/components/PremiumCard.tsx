"use client";

import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "gradient" | "dark" | "premium";
  hover?: boolean;
  animated?: boolean;
}

export function PremiumCard({
  children,
  className = "",
  variant = "glass",
  hover = true,
  animated = true,
}: PremiumCardProps) {
  const baseStyles =
    "rounded-2xl p-6 sm:p-8 transition-all duration-500 border";

  const variants = {
    glass: "glass border-white/10 hover:border-[#C5A059]/30",
    gradient:
      "bg-gradient-to-br from-[#C5A059]/10 to-transparent border-[#C5A059]/20 hover:border-[#C5A059]/40",
    dark: "bg-[#0A0A0A]/80 border-white/5 hover:border-[#C5A059]/20",
    premium:
      "glass-premium border-[#C5A059]/20 hover:border-[#C5A059]/50 hover:shadow-[0_20px_60px_rgba(197,160,89,0.2)]",
  };

  const hoverClass = hover ? "hover-lift" : "";
  const animationClass = animated ? "motion-scale-up" : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverClass} ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}
