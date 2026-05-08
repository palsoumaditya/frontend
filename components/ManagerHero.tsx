"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";
import { cn } from "@/lib/utils";

export default function ManagerHero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Main Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white dark:bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-14 border border-neutral-100 dark:border-neutral-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] dark:shadow-none flex flex-col justify-center min-h-[400px] md:min-h-[500px]"
        >
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-black dark:text-white leading-[1.1] md:leading-[1.05] tracking-tight">
              Less hiring. <br />
              <span className="relative inline-block italic">
                More hires.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-1 md:-bottom-2 left-0 h-2 md:h-3 bg-[#99ff66]/80 -z-10 rounded-full" 
                />
              </span>
            </h1>
            
            <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed font-subtext">
              Plumb runs the hiring funnel. You make the call. We orchestrate the entire recruiting pipeline—from sourcing through shortlisting to final decision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1 md:pt-2">
              <button className="h-11 md:h-12 px-7 md:px-8 bg-black dark:bg-[#99ff66] text-white dark:text-black rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                Start free
              </button>
              <button className="h-11 md:h-12 px-7 md:px-8 bg-white dark:bg-transparent text-black dark:text-white border-2 border-black/10 dark:border-white/10 rounded-full text-sm font-bold transition-all hover:border-black/30 dark:hover:border-white/30 hover:scale-105 active:scale-95">
                Request demo ↗
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-6">
          
          {/* Results & Metrics Card (Green) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#99ff66] rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-10 flex flex-col justify-between flex-1 shadow-lg shadow-[#99ff66]/10"
          >
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] text-black/30 uppercase mb-5 md:mb-6 block font-mono">
                RESULTS & METRICS
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-playfair font-bold text-black leading-tight mb-6 md:mb-8">
                10x faster <br /> screening
              </h3>
              
              {/* Visual Bar Chart */}
              <div className="flex items-end gap-2 md:gap-2.5 h-12 md:h-16 mb-6 md:mb-8">
                {[30, 45, 40, 55, 35, 100].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + (i * 0.1) }}
                    className={cn(
                      "flex-1 rounded-md",
                      i === 5 ? "bg-black shadow-lg" : "bg-black/10"
                    )}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-black text-[#99ff66] text-[10px] font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-full w-fit shadow-lg">
              48h to interview
            </div>
          </motion.div>

          {/* Live Engine Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-muted/30 dark:bg-[#0d0d0d] rounded-[2rem] md:rounded-[2.5rem] p-7 md:p-10 flex flex-col justify-between shadow-xl dark:shadow-2xl border border-border/50 dark:border-white/5 flex-1"
          >
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] text-muted-foreground dark:text-white/20 uppercase mb-5 md:mb-6 block font-mono">
                LIVE ENGINE
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-playfair font-bold text-foreground leading-tight mb-6 md:mb-8">
                80% less <br /> manual work
              </h3>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  {[
                    { val: 91, bg: "bg-[#99ff66]", text: "text-black" },
                    { val: 84, bg: "bg-blue-600", text: "text-white" },
                    { val: 72, bg: "bg-orange-500", text: "text-white" },
                    { val: 65, bg: "bg-red-500", text: "text-white" },
                  ].map((c, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.7 + (i * 0.1), type: "spring" }}
                      className={cn(
                        "size-9 md:size-10 rounded-full flex items-center justify-center text-[10px] md:text-[11px] font-black border-2 border-background dark:border-[#0d0d0d] shadow-xl", 
                        c.bg, c.text
                      )}
                    >
                      {c.val}
                    </motion.div>
                  ))}
                </div>
                
                <div className="px-4 md:px-5 py-2 rounded-full border border-border dark:border-white/10 bg-background/50 dark:bg-white/5 backdrop-blur-sm">
                  <span className="text-[10px] font-black text-[#99ff66] tracking-widest uppercase">98% accuracy</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



