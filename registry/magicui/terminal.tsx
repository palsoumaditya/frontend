"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Terminal = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("w-full h-full bg-[#0a0a0a] rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm", className)}>
      <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="ml-4 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Plumb // Terminal</div>
      </div>
      <div className="p-8 space-y-3">
        {children}
      </div>
    </div>
  );
};

export const TypingAnimation = ({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(children.slice(0, i + 1));
        i++;
        if (i === children.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [children, delay]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-white/40 shrink-0">$</span>
      <span>{displayedText}</span>
      {displayedText.length < children.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="w-1.5 h-4 bg-[#99ff66]"
        />
      )}
    </div>
  );
};

export const AnimatedSpan = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn("flex items-center gap-2", className)}
    >
      {children}
    </motion.div>
  );
};
