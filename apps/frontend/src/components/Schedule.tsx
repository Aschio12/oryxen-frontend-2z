"use client";

import { useState } from "react";
import { classes, trainers } from "@/data/fitness";

const CATEGORIES = ["All", "Gym", "Aerobics", "HIIT", "Combat", "Recovery"];

export default function Schedule() {
  const [filter, setFilter] = useState<string>("All");

  const filteredClasses = classes.filter((classItem) =>
    filter === "All" ? true : classItem.category === filter
  );

  return (
    <section id="schedule" className="border-t border-white/10 bg-[#080a0c] px-4 py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Live schedule</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Book the next training block.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-zinc-400">
            Capacity, level, coach, and sport are visible before booking so the
            athlete lands in the right room.
          </p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`min-h-10 shrink-0 rounded-md px-4 text-sm font-bold transition ${
                filter === category
                  ? "bg-[#d7ff46] text-black"
                  : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {filteredClasses.map((classItem) => {
            const isFull = classItem.currentEnrollment >= classItem.capacity;
            const seatsLeft = classItem.capacity - classItem.currentEnrollment;
            const startDate = new Date(classItem.startTime);
            const timeString = startDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            const dateString = startDate.toLocaleDateString([], {
              weekday: "short",
              month: "short",
              day: "numeric",
            });

            return (
              <article
                key={classItem.id}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ff46]">
                      {dateString}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">
                      {classItem.className}
                    </h3>
                  </div>
                  <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-bold text-zinc-200">
                    {classItem.level}
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-zinc-500">Time</dt>
                    <dd className="mt-1 font-bold text-white">{timeString}</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Sport</dt>
                    <dd className="mt-1 font-bold text-white">{classItem.category}</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Seats</dt>
                    <dd className="mt-1 font-bold text-white">
                      {isFull ? "Waitlist" : `${seatsLeft} left`}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Coach</dt>
                    <dd className="mt-1 font-bold text-white">
                      {trainers.find(t => t.id === classItem.trainerId)?.name || "Unknown"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full ${isFull ? "bg-red-400" : "bg-[#d7ff46]"}`}
                    style={{
                      width: `${Math.min(
                        100,
                        (classItem.currentEnrollment / classItem.capacity) * 100
                      )}%`,
                    }}
                  />
                </div>

                <button
                  disabled={isFull}
                  className={`mt-5 min-h-11 w-full rounded-md text-sm font-black transition ${
                    isFull
                      ? "cursor-not-allowed border border-red-400/30 bg-red-400/10 text-red-200"
                      : "bg-white text-black hover:bg-[#d7ff46]"
                  }`}
                >
                  {isFull ? "Join waitlist" : "Reserve"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
