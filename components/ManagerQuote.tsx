"use client";

import { motion } from "framer-motion";

export function ManagerQuote() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-y border-border/50">
      {/* Background patterns - theme-aware opacity */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #99ff66 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1152px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pl-8 md:pl-16"
        >
          {/* Large decorative quote mark */}
          <div className="absolute -left-4 -top-8 text-[120px] font-playfair italic text-[#99ff66]/10 leading-none select-none">
            "
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair italic leading-[1.1] text-foreground">
              "You keep the parts that matter: meeting great people, making the call. <span className="text-[#99ff66]">Plumb handles the noise.</span>"
            </h2>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-px bg-[#99ff66]/50" />
              <div className="space-y-1">
                <p className="text-[12px] font-bold tracking-[0.4em] text-[#99ff66] uppercase">
                  THE PLUMB PROMISE
                </p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Efficiency / Execution / Scale
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

