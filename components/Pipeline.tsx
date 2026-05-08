"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Brief (yours)",
    description: "One command on Slack. JD draft back the same day. Revise in chat until it reads right.",
    image: "/sourcing.png",
    badges: [
      { text: "Slack /newjd", primary: true },
      { text: "JD draft", primary: false }
    ]
  },
  {
    id: "02",
    title: "Find",
    description: "Plumb opens the funnel. Candidates funnel in!",
    image: "/shortlisting.png",
    badges: [
      { text: "Inbound", primary: true },
      { text: "Outbound", primary: false }
    ]
  },
  {
    id: "03",
    title: "Sort",
    description: "Prospects land on your devices to pick and choose. Click Proceed, Hold, or Reject.",
    image: "/briefing.png",
    badges: [
      { text: "Shortlist", primary: true },
      { text: "Proceed / Hold / Reject", primary: false }
    ]
  },
  {
    id: "04",
    title: "Hire (yours)",
    description: "Pick the slot. Run the interview. Drop feedback. Make the call.",
    image: "/ready.png",
    badges: [
      { text: "Interview", primary: true },
      { text: "Decision", primary: false }
    ]
  }
];

export function Pipeline() {
  const [hoveredStep, setHoveredStep] = React.useState<string | null>(null);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-subtext font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-4"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-header font-bold text-neutral-900 dark:text-white leading-[1.1] mb-6"
          >
            Four steps. <br />
            <span className="italic font-normal text-neutral-500 dark:text-neutral-400">
              One of them is{" "}
              <span className="relative inline-block text-neutral-900 dark:text-white">
                yours.
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#99ff66] shadow-[0_0_10px_rgba(153,255,102,0.5)]"
                />
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 dark:text-neutral-400 text-lg font-subtext"
          >
            Step one is on you. The rest is on us.
          </motion.p>
        </div>

        {/* Stepper Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-16 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className="flex gap-8 md:gap-12 relative group/step"
              >
                {/* Step Circle */}
                <div
                  className="relative z-10 shrink-0 cursor-pointer"
                >
                  <motion.div
                    animate={hoveredStep === step.id ? { x: 4, y: 4 } : { x: 0, y: 0 }}
                    className={cn(
                      "w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#99ff66] border-2 border-black dark:border-white flex items-center justify-center transition-all",
                      "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]",
                      hoveredStep === step.id && "shadow-none"
                    )}
                  >
                    <span className="text-black text-sm md:text-base font-bold font-mono">
                      {step.id}
                    </span>
                  </motion.div>
                </div>

                {/* Step Content */}
                <div className="pt-2 md:pt-4 flex-1">
                  <h3 className="text-2xl md:text-3xl font-header font-bold text-neutral-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg mb-6 font-subtext">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {step.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className={cn(
                          "px-4 py-1.5 rounded-full text-xs font-subheader font-bold transition-all",
                          badge.primary
                            ? "bg-[#99ff66] text-black border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                            : "bg-transparent text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                        )}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Image Preview - Pushed to the far right whitespace */}
                <AnimatePresence>
                  {hoveredStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 60, rotate: 5 }}
                      animate={{ opacity: 1, scale: 1, x: 100, rotate: -2 }}
                      exit={{ opacity: 0, scale: 0.8, x: 60, rotate: 5 }}
                      className="absolute left-[650px] xl:left-[750px] top-0 z-50 pointer-events-none hidden lg:block"
                    >
                      <div className="w-72 md:w-80 aspect-video rounded-xl overflow-hidden border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] bg-white dark:bg-neutral-900">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
