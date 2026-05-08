"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";

export default function ManagerHero() {
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
            <span className="w-2 h-2 rounded-full bg-[#99ff66] animate-pulse" />
            FOR HIRING MANAGERS
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-pt-serif tracking-tight leading-[1.1] text-[#1a1a1a] dark:text-white">
            Less Hiring. <br />
            <span className="italic">More hires.</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          You have a role to fill. You do not have weeks. Type one Slack command and the work starts. Plumb compresses the hiring cycle so you can stay in your flow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <InteractiveHoverButton className="bg-[#99ff66] text-black border-none px-8 py-3 text-base">
            Run /newjd in Slack
          </InteractiveHoverButton>
          <InteractiveHoverButton className="bg-white dark:bg-neutral-900 text-black dark:text-white border-gray-200 dark:border-neutral-800 px-8 py-3 text-base">
            Skim the SOP
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
              /newjd --role "Senior Product Engineer" --team "Platform" --bar "3H"
            </TypingAnimation>

            <AnimatedSpan delay={2500} className="text-[#99ff66]">
              ✔ Initializing Plumb Sourcing Engine...
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-[#99ff66]">
              ✔ Mapping company voice from 12 past hires.
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-[#99ff66]">
              ✔ Benchmarking market salary: $160k - $210k.
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-[#99ff66]">
              ✔ Generating JD Draft V1.0 (Hungry, Humble, High Standards).
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-blue-400">
              ℹ Found 4 high-match candidates in passive pool.
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-[#99ff66]">
              ✔ Syncing with Google Docs & Slack.
            </AnimatedSpan>

            <TypingAnimation delay={6000} className="text-white/60">
              Success! JD drafted and Sourcing Loop initiated.
            </TypingAnimation>

            <TypingAnimation delay={7000} className="text-white/40 italic">
              Check your Slack DM to review the draft.
            </TypingAnimation>
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
}

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/magicui/terminal";


