"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";
import { cn } from "@/lib/utils";

export default function ManagerHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Main Card - Dark Theme */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#0a0a0a] rounded-[2.5rem] p-12 md:p-16 border border-neutral-800 shadow-2xl flex flex-col justify-center min-h-[550px]"
        >
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white leading-[1.1] mb-8">
            Less hiring. <br />
            <span className="relative inline-block italic">
              More hires.
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#99ff66]/80 -z-10 rounded-full" />
            </span>
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Plumb runs the hiring funnel. You make the call. We orchestrate the entire recruiting pipeline—from sourcing through shortlisting to final decision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="flex items-center justify-center gap-3 bg-white text-black rounded-xl px-8 py-3.5 text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#99ff66] shadow-[0_0_8px_#99ff66]" />
              Start free
            </button>
            <button className="flex items-center justify-center gap-3 bg-[#1a1a1a] text-white border border-neutral-800 rounded-xl px-8 py-3.5 text-base font-bold transition-transform hover:scale-105 active:scale-95">
              <span className="w-2 h-2 rounded-full bg-[#99ff66] shadow-[0_0_8px_#99ff66]" />
              Request demo ↗
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Results & Metrics Card (Lime) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#99ff66] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[320px] shadow-xl"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase mb-6 block">
                RESULTS & METRICS
              </span>
              <h3 className="text-3xl md:text-4xl font-pt-serif font-bold text-black leading-tight mb-8">
                10x faster <br /> screening
              </h3>
              
              {/* Animated Progress Bars Visual */}
              <div className="flex items-end gap-2.5 h-16 mb-8">
                {[30, 45, 40, 55, 35, 100].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5 + (i * 0.1),
                      ease: "easeOut" 
                    }}
                    className={cn(
                      "w-6 rounded-md",
                      i === 5 ? "bg-black" : "bg-black/10"
                    )}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-black text-[#99ff66] text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full w-fit shadow-md">
              48H TO INTERVIEW
            </div>
          </motion.div>

          {/* Live Engine Section - Integrated into Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-4 py-6"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-6 block">
              LIVE ENGINE
            </span>
            <h3 className="text-3xl md:text-4xl font-pt-serif font-bold text-white leading-tight mb-8">
              80% less <br /> manual work
            </h3>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-2">
                {[
                  { val: 91, bg: "bg-[#99ff66]" },
                  { val: 84, bg: "bg-blue-500" },
                  { val: 72, bg: "bg-orange-500" },
                  { val: 65, bg: "bg-red-500" },
                ].map((c, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                    className={cn("size-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-xl", c.bg)}
                  >
                    {c.val}
                  </motion.div>
                ))}
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-full px-5 py-2 flex items-center backdrop-blur-sm shadow-sm">
                <span className="text-[10px] font-bold text-[#99ff66] tracking-wider uppercase">98% ACCURACY</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



