"use client";

import { motion } from "framer-motion";

export function ManagerQuote() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-[1152px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#111111] rounded-[48px] p-12 md:p-24 shadow-2xl overflow-hidden"
        >
          {/* Accent Bar */}
          <div className="absolute left-0 top-12 bottom-12 w-2 bg-[#99ff66] rounded-r-full shadow-[0_0_20px_rgba(153,255,102,0.4)]" />
          
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 space-y-12 pl-4 md:pl-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-pt-serif italic leading-tight text-white max-w-4xl">
              "You keep the parts that matter: writing a great JD, meeting great people, making the call. Plumb handles the noise."
            </h2>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#99ff66]/50" />
              <p className="text-[12px] font-bold tracking-[0.4em] text-[#99ff66] uppercase">
                THE PLUMB PROMISE
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

