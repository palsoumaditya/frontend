"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/magicui/terminal";

export default function OpsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-4 py-1.5 rounded-full border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 font-medium flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
            FOR TALENT OPERATIONS
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mb-6"
        >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-header tracking-tight leading-[1.1] md:leading-[1.1] text-[#1a1a1a] dark:text-white">
          Run the system. <br />
          <span className="relative inline-block mt-2">
            <motion.span 
              initial={{ color: "currentColor" }}
              animate={{ color: "#000000" }}
              transition={{ delay: 1.2, duration: 0.2 }}
              className="relative z-10 italic"
            >
              Make the call.
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-[-0.05em] -inset-x-4 bg-[#99ff66] origin-left rounded-sm shadow-[0_5px_15px_rgba(153,255,102,0.4)]"
            />
          </span>
        </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Plumb runs the funnel. You are the operator. Curation is the job, forwarding is not. Every click on "Send for Screening" is a decision on the hiring manager's attention budget.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <InteractiveHoverButton className="bg-[#99ff66] text-black border-none px-8 py-3 text-base">
            Open The Hiring Hub
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-white dark:bg-neutral-900 text-black dark:text-white border-gray-200 dark:border-neutral-800 px-8 py-3 text-base">
            Read The Runbook
          </InteractiveHoverButton>
        </motion.div>

        {/* Terminal Visual Mock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-4xl aspect-[16/10] md:aspect-[16/8]"
        >
          <Terminal>
            <TypingAnimation delay={500}>
              $ plumb ops-status --hub-sync
            </TypingAnimation>

            <AnimatedSpan delay={2500} className="text-[#99ff66]">
              ✔ Hiring Hub active: 12 roles tracking.
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-[#99ff66]">
              ✔ Screening queue: 42 candidates unscored.
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-[#99ff66]">
              ✔ Inbound Tap: Connected to Ashby & LinkedIn.
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-[#99ff66]">
              ✔ Outbound Tap: Search active on 8 channels.
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-blue-400">
              ℹ 3 Shortlists pending HM feedback (average age: 14h).
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-[#99ff66]">
              ✔ Watch Tower: 0 critical alerts in last 60m.
            </AnimatedSpan>

            <TypingAnimation delay={6000} className="text-white/60">
              System ready. Operating within 24h feedback window.
            </TypingAnimation>

            <TypingAnimation delay={7000} className="text-white/40 italic">
              {"Check your Slack DM to review the draft. Use 'plumb shortlist --role <role>' to batch yeses."}
            </TypingAnimation>
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
}
