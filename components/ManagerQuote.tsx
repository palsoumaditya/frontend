"use client";

import { motion } from "framer-motion";

export function ManagerQuote() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-card border border-border rounded-[2.5rem] p-12 md:p-20 shadow-xl overflow-hidden"
        >
          {/* Accent Bar */}
          <div className="absolute left-0 top-12 bottom-12 w-1.5 bg-[#99ff66] rounded-r-full" />
          
          <div className="space-y-10 pl-4 md:pl-8">
            <h2 className="text-3xl md:text-5xl font-pt-serif italic leading-tight text-foreground">
              "Our core value: recruiters spend less time on manual screening and more time making great hires."
            </h2>
            
            <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
              — PLUMB PLATFORM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
