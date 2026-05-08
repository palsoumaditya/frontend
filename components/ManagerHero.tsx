"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ManagerHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Pattern - Simplified AnimatedGridPattern */}
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1152px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#99ff66]/20 text-[#66cc33] dark:text-[#99ff66] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-8 border border-[#99ff66]/30"
          >
            Hiring Manager Hub
          </motion.div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06
                }
              }
            }}
            className="text-[64px] lg:text-[80px] font-pt-serif leading-[1.1] text-foreground mb-8"
          >
            {"Less Hiring. ".split(" ").map((word, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                {word}{" "}
              </motion.span>
            ))}
            <motion.span 
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="italic"
            >
              More hires.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-geist mb-12"
          >
            You have a role to fill. You do not have weeks. Type one Slack command and the work starts. A few days later you walk into an interview with a shortlist worth your time. You stay in the chair. Plumb runs the rest.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5">
              Run /newjd in Slack
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 underline underline-offset-4 decoration-border">
              Or email recruitment@emsoft.com
            </button>
          </motion.div>
        </div>

        {/* Faux Slack Composer Pill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl mx-auto mt-20 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#99ff66]/20 via-[#3b82f6]/20 to-[#99ff66]/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl flex items-center gap-4 transition-colors duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#99ff66]/20 flex items-center justify-center text-[#66cc33] font-bold text-xl">
              S
            </div>
            <div className="flex-1 font-mono text-lg flex items-center gap-1 text-foreground/80">
              <span className="text-[#99ff66]">/</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1, delay: 2, ease: "linear" }}
                className="overflow-hidden whitespace-nowrap"
              >
                newjd
              </motion.span>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-0.5 h-6 bg-[#99ff66]"
              />
            </div>
            <div className="text-muted-foreground text-sm font-geist">
              Slack Command
            </div>
          </div>
          
          {/* Meteors Mock */}
          <div className="absolute -top-10 -right-10 w-20 h-px bg-gradient-to-l from-transparent via-[#99ff66]/50 to-[#99ff66] rotate-[30deg] opacity-40" />
          <div className="absolute -bottom-20 -left-20 w-32 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-[#3b82f6] -rotate-[15deg] opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}

