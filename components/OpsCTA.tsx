"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";

export function OpsCTA() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0a0a0a] rounded-[64px] p-12 md:p-32 text-center overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Internal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase">
                Ready to Operate.
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-header font-bold text-white leading-[1] mb-12 max-w-5xl">
              You have read the system. <br />
              <span className="italic text-[#99ff66]">Now run it.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
              <InteractiveHoverButton className="bg-[#99ff66] text-black border-none px-10 py-4 text-lg">
                Open The Hiring Hub
              </InteractiveHoverButton>
              <InteractiveHoverButton className="bg-white/5 text-white border-white/10 px-10 py-4 text-lg backdrop-blur-sm">
                Read The Runbook
              </InteractiveHoverButton>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-white/30 text-xs font-mono uppercase tracking-[0.3em]"
            >
              Plumb runs the funnel. You make the call.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
