"use client";

import { motion } from "framer-motion";

export function ManagerCTA() {
  return (
    <section className="py-24 px-4 bg-background text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#99ff66] text-black px-6 py-2 rounded-full border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] font-mono text-sm font-bold">
            <span className="text-lg">→</span> Try out now
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[48px] md:text-[64px] lg:text-[72px] font-pt-serif font-bold text-foreground leading-[1.1] mb-12"
        >
          Plumb runs the funnel.<br />
          You make the call.
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none">
            Start free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
