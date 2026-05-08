"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const statsData = [
  {
    category: "VOLUME ROLES",
    title: "Scaling the engineering team",
    description: "The bottleneck is rarely sourcing—it's the wait between stages. Emergence screens, ranks, and shortlists in parallel. The slowest part becomes the candidate's own response time.",
    stat: "10x",
    statLabel: "faster screening pipeline",
  },
  {
    category: "EFFICIENCY",
    title: "Eliminating the administrative middle",
    description: "Top performers bubble to the surface instantly. We remove the manual sorting and initial outreach so you only look at highly qualified, engaged profiles.",
    stat: "80%",
    statLabel: "reduction in manual work",
    highlight: true,
  },
  {
    category: "QUALITY CONTROL",
    title: "Calibrated matching",
    description: "Emergence pulls from the channels your team already trusts and ensures matching is perfectly aligned to your specific technical requirements.",
    stat: "98%",
    statLabel: "matching accuracy",
  },
  {
    category: "TIME TO HIRE",
    title: "Active interviews before the week ends",
    description: "New candidates flow in and are scored within milliseconds. We've compressed the timeline so you go from an open requisition to a calendar invite almost immediately.",
    stat: "< 48 hrs",
    statLabel: "avg. time to first interview",
  },
  {
    category: "VISIBILITY",
    title: "Live Engine Tracking",
    description: "Watch candidates flow through the funnel with live counters updating continuously. No more guessing where your talent pool stands.",
    stat: "Live",
    statLabel: "real-time funnel visibility",
  },
];

export function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl font-pt-serif font-bold text-neutral-900 dark:text-white mb-6">
            Where it earns its keep.
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The difference between a slow hire and a fast one is the difference between hitting a quarter and missing it. Here is how Plumb changes the math.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-neutral-200 bg-white overflow-hidden dark:bg-neutral-900 dark:border-neutral-800 shadow-sm">
          {statsData.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-10 md:p-12 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
                idx !== statsData.length - 1 && "border-b border-neutral-100 dark:border-neutral-800"
              )}
            >
              {/* Animated Side Bar on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#99ff66] scale-y-0 transition-transform duration-300 origin-top group-hover:scale-y-100" />
              
              <div className="md:col-span-4 transition-transform duration-300 group-hover:translate-x-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center">
                <span className="text-5xl font-bold text-[#99ff66] leading-none mb-2">
                  {item.stat}
                </span>
                <span className="text-xs font-medium text-neutral-400 text-left md:text-right">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
