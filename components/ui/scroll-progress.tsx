"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const ScrollProgress = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={cn("fixed top-0 left-0 right-0 h-2 z-[100] pointer-events-none overflow-hidden", className)}>
      <motion.div
        className="h-full bg-[#99ff66] origin-left relative"
        style={{ 
          scaleX,
          boxShadow: "0 0 20px #99ff66, 0 0 40px rgba(153,255,102,0.3)" 
        }}
      >
        {/* Animated Liquid Surface Shimmer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Liquid "head" (the charge bubble) */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent to-white/40 blur-sm" />
        <motion.div 
          className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
          style={{
            boxShadow: "0 0 15px #fff, 0 0 30px #99ff66"
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};
