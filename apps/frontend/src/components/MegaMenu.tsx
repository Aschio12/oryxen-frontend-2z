"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "Programs",
    href: "/programs",
    items: [
      { name: "Strength Training", desc: "Build elite-level strength" },
      { name: "Endurance", desc: "Aerobic capacity development" },
      { name: "Calisthenics", desc: "Bodyweight mastery" },
      { name: "Yoga Flow", desc: "Flexibility & recovery" },
    ],
  },
  {
    title: "Training",
    href: "/exercises",
    items: [
      { name: "Exercises", desc: "500+ movement patterns" },
      { name: "Classes", desc: "Live & recorded sessions" },
      { name: "Workouts", desc: "Pre-built training plans" },
      { name: "Analytics", desc: "Track your progress" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    items: [
      { name: "Nutrition", desc: "Science-based meal plans" },
      { name: "Gallery", desc: "Transformation showcase" },
      { name: "Community", desc: "Connect with athletes" },
      { name: "Blog", desc: "Training insights & tips" },
    ],
  },
];

export function MegaMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex items-center gap-1">
      {menuItems.map((menu) => (
        <div
          key={menu.title}
          className="relative group"
          onMouseEnter={() => setOpenMenu(menu.title)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Link
            href={menu.href}
            className="relative px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-[#C5A059]"
          >
            {menu.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top ${
              openMenu === menu.title
                ? "opacity-100 visible scale-y-100"
                : "scale-y-95"
            }`}
          >
            <div className="glass-premium rounded-2xl p-6 min-w-max shadow-2xl border border-[#C5A059]/20">
              <div className="grid grid-cols-2 gap-6">
                {menu.items.map((item) => (
                  <Link
                    key={item.name}
                    href="#"
                    className="group/item"
                  >
                    <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white group-hover/item:text-[#C5A059] transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                      </div>
                      <div className="text-white/30 group-hover/item:text-[#C5A059] transition-colors">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
