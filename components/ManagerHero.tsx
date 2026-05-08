"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ManagerHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-card rounded-[40px] p-12 lg:p-16 shadow-sm border border-border flex flex-col justify-between min-h-[500px] transition-colors duration-300"
        >
          <div>
            <h1 className="text-[64px] lg:text-[80px] font-pt-serif leading-[1.1] text-foreground mb-8">
              Less hiring.<br />
              <span className="relative">
                More hires.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-4 bg-[#99ff66]/60 -z-10"
                />
              </span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-md leading-relaxed font-geist">
              Plumb runs the hiring funnel. You make the call. We orchestrate the entire recruiting pipeline—from sourcing through shortlisting to final decision.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Start free
            </button>
            <button className="bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-xl font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
              Request demo <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Top Green Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#99ff66] rounded-[40px] p-10 flex flex-col justify-between h-[320px]"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
                RESULTS & METRICS
              </p>
              <h2 className="text-[44px] font-pt-serif leading-tight text-black">
                10x faster<br />screening
              </h2>
            </div>
            
            <div className="flex items-end justify-between">
              <div className="flex items-end gap-1.5 pb-2">
                <div className="w-6 h-4 bg-black/10 rounded-sm" />
                <div className="w-6 h-6 bg-black/10 rounded-sm" />
                <div className="w-6 h-8 bg-black/10 rounded-sm" />
                <div className="w-6 h-5 bg-black/10 rounded-sm" />
                <div className="w-6 h-12 bg-black rounded-sm" />
              </div>
              <div className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                48h to interview
              </div>
            </div>
          </motion.div>

          {/* Bottom Dark Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111111] dark:bg-muted rounded-[40px] p-10 flex flex-col justify-between h-[320px] text-white dark:text-foreground"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
                LIVE ENGINE
              </p>
              <h2 className="text-[44px] font-pt-serif leading-tight">
                80% less<br />manual work
              </h2>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 rounded-full bg-[#99ff66] flex items-center justify-center text-[10px] font-bold text-black border-2 border-[#111111]">91</div>
                <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#111111]">84</div>
                <div className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#111111]">72</div>
                <div className="w-8 h-8 rounded-full bg-[#ef4444] flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#111111]">65</div>
              </div>
              <div className="bg-white/10 dark:bg-foreground/10 text-[#99ff66] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider border border-white/10">
                98% accuracy
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
