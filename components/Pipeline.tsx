"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const pipelineSteps = [
  {
    id: "01",
    title: "Brief (yours)",
    description: "One command on Slack. JD draft back the same day. Revise in chat until it reads right.",
    yourPart: "Define the role",
    tags: ["Slack /newjd", "JD draft"]
  },
  {
    id: "02",
    title: "Find",
    description: "Plumb opens the funnel. Candidates funnel in!",
    yourPart: "Watch it run",
    tags: ["Inbound", "Outbound"]
  },
  {
    id: "03",
    title: "Sort",
    description: "Prospects land on your devices to pick and choose. Click Proceed, Hold, or Reject.",
    yourPart: "Review the best",
    tags: ["Shortlist", "600-1100ms"]
  },
  {
    id: "04",
    title: "Hire (yours)",
    description: "Pick the slot. Run the interview. Drop feedback. Make the call.",
    yourPart: "Meet the candidates",
    tags: ["Interview", "Decision"]
  }
];

export function Pipeline() {
  return (
    <section className="py-32 bg-background transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.3em] text-muted-foreground uppercase block mb-6 font-bebas"
          >
            How it works
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-[0.95] mb-8 tracking-tighter uppercase"
          >
            The Pipeline. <br />
            <span className="italic text-[#99ff66]">
              Live AI-powered candidate scoring.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl font-archivo leading-relaxed"
          >
            Candidates enter the pipeline, get automatically scored and ranked, and top performers bubble to the surface—all in real time.
          </motion.p>
        </div>

        {/* Pipeline List */}
        <div className="space-y-4">
          {pipelineSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 p-6 md:p-10 rounded-[2rem] transition-all duration-500 hover:bg-[#F9FAF8] dark:hover:bg-[#99ff66]/5 border border-transparent hover:border-[#99ff66]/20">
                
                {/* Number */}
                <div className="text-4xl font-bold text-[#99ff66] shrink-0 font-bebas tracking-tighter">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight uppercase">
                    {step.title}
                  </h3>
                  
                  <div className="space-y-3 max-w-xl">
                    <p className="text-muted-foreground text-base leading-relaxed font-archivo">
                      {step.description}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1 font-bebas">
                        Your part
                      </span>
                      <span className="text-foreground font-bold text-base italic font-archivo">
                        {step.yourPart}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-col gap-3 items-end shrink-0">
                  {step.tags.map((tag, tIdx) => (
                    <div 
                      key={tIdx}
                      className="px-6 py-2.5 bg-[#99ff66] text-black font-bold text-[11px] rounded-xl shadow-[4px_4px_0px_0px_#1a1a1a] dark:shadow-[4px_4px_0px_0px_#000] border border-black/10 flex items-center justify-center whitespace-nowrap font-bebas tracking-wider uppercase"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector line for list feel */}
              {idx !== pipelineSteps.length - 1 && (
                <div className="absolute bottom-[-2px] left-12 right-12 h-px bg-border/30 lg:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
