"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const statsData = [
  {
    category: "JOB LIVE",
    title: "From JD approval to job live",
    description: "One slash command. Draft the same day. Approval flips the role live.",
    stat: "24h",
    statLabel: "JD approval to live role.",
  },
  {
    category: "FIRST BATCH",
    title: "From job live to first screening batch",
    description: "Inbound scored on arrival. First ranked batch lands in Slack inside two days.",
    stat: "24-48h",
    statLabel: "to first ranked batch.",
  },
  {
    category: "BATCH SIZE",
    title: "Curated, not collected",
    description: "Twenty to thirty names per batch, ranked. Proceed, Hold, Reject. No swamp to scroll.",
    stat: "20-30",
    statLabel: "candidates per HM batch.",
  },
  {
    category: "INTERVIEW-READY",
    title: "Median to interview-ready",
    description: "Brief Monday. First interview slot Friday. Tracking and improving. Not a brag.",
    stat: "5 days",
    statLabel: "median to interview-ready (Target).",
  },
  {
    category: "ALWAYS ON",
    title: "Running always",
    description: "The engine does not sleep. Inbound scored as it lands. Ops sees every move in the Hub.",
    stat: "Live",
    statLabel: "funnel visibility, end to end.",
  },
];

export function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 max-w-2xl">
          <span className="text-[11px] font-bold tracking-[0.3em] text-neutral-400 uppercase block mb-4 font-bebas">
            The clock, honest.
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-[0.95] tracking-tighter uppercase font-bebas">
            Real timelines from the SOP. Not vibes.
          </h2>
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
                <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3 block font-bebas">
                  {item.category}
                </span>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white leading-[1.1] uppercase font-bebas tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-base font-archivo text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center">
                <span className="text-5xl md:text-7xl font-bold text-[#99ff66] leading-none mb-2 font-bebas tracking-tighter">
                  {item.stat}
                </span>
                <span className="text-[10px] font-bold text-neutral-400 text-left md:text-right uppercase tracking-widest font-bebas">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-left">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest italic font-archivo opacity-50">
            Target means we are tracking it and improving it. Not a brag.
          </p>
        </div>
      </div>
    </section>
  );
}
