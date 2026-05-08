"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Eased progress — fast start, slow finish for polish
    let frame = 0;
    const totalFrames = 110;
    const raf = () => {
      frame++;
      const t = frame / totalFrames;
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setProgress(Math.min(Math.round(eased * 100), 100));
      if (frame < totalFrames) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = "unset";
      }, 900);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >


          {/* Main content */}
          <motion.div
            className="relative flex flex-col md:flex-row items-center gap-12 md:gap-20"
            animate={isExiting ? { y: -24, opacity: 0 } : {}}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Emergence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src="/68a3af5b4fa272e0c2d6a5e4_6855bb7ba72c05061eefe3dd_high-1-4-ezgif.com-optimize.gif"
                alt="Emergence Logo"
                className="h-16 md:h-24 w-auto"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
                className="text-[10px] tracking-[0.8em] text-white/30 font-subtext uppercase mt-4"
              >
                Emergence Software
              </motion.span>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
              className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top"
            />

            {/* Plumb */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
                  className="size-12 md:size-16 rounded-2xl bg-white flex items-center justify-center text-black text-2xl md:text-4xl font-header font-bold shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  P
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
                  className="text-4xl md:text-6xl font-header font-bold text-white tracking-tight"
                >
                  Plumb<span className="text-[#99ff66]">.</span>
                </motion.h2>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
                className="text-[10px] tracking-[0.8em] text-[#99ff66]/60 font-subtext uppercase mt-6"
              >
                Hiring Engine
              </motion.span>
            </motion.div>
          </motion.div>


        </motion.div>
      )}
    </AnimatePresence>
  );
}