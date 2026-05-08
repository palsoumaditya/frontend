"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { AppNavbar } from "@/components/Navbar";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [hasShownPreloader, setHasShownPreloader] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const shown = sessionStorage.getItem("hasShownPreloader");
    
    if (shown) {
      setShowContent(true);
      setHasShownPreloader(true);
      setSkipAnimation(true);
    } else {
      // Sync with Preloader duration (3200ms loading + some reveal time)
      const timer = setTimeout(() => {
        setShowContent(true);
        sessionStorage.setItem("hasShownPreloader", "true");
      }, 3200); 

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {!hasShownPreloader && <Preloader />}
      <AnimatePresence>
        {showContent && (
          <motion.div 
            initial={skipAnimation ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={skipAnimation ? { duration: 0 } : { duration: 1, ease: "easeOut" }}
            className="flex flex-col min-h-full"
          >
            <AppNavbar />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
