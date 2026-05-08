"use client";

import { motion } from "framer-motion";

export function ManagerCTA() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-[1152px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#99ff66]/5 blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-pt-serif font-bold text-white leading-[1.1] mb-12 max-w-4xl mx-auto">
              You have a role to fill. You have a Slack window already open. The fastest path to a great hire is a <span className="italic text-[#99ff66]">single command</span>.
            </h2>

            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="bg-[#99ff66] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#aaff77] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(153,255,102,0.2)]">
                  Run /newjd in Slack
                </button>
                <button className="bg-transparent text-white border border-white/20 hover:border-white/40 px-10 py-4 rounded-full font-bold text-lg transition-all">
                  Or email recruitment@emsoft.com
                </button>
              </div>
              <button className="text-white/60 hover:text-[#99ff66] transition-colors text-sm underline underline-offset-4 font-geist">
                Or skim the Hiring Manager SOP
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

