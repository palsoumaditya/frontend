"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarContext = React.createContext({ isScrolled: false });

export const useNavbar = () => React.useContext(NavbarContext);

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Convert MotionValue to percentage string for clip-path
  const [clipPath, setClipPath] = useState("inset(0 100% 0 0)");
  
  useEffect(() => {
    const unsubscribe = scaleX.on("change", (latest) => {
      setClipPath(`inset(0 ${100 - latest * 100}% 0 0)`);
    });
    return () => unsubscribe();
  }, [scaleX]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4",
        isScrolled ? "pt-2" : "pt-4",
        className
      )}
    >
      <NavbarContext.Provider value={{ isScrolled }}>
        <motion.div
          layout
          className={cn(
            "mx-auto relative overflow-hidden transition-all duration-500",
            isScrolled
              ? "max-w-3xl border border-white/20 shadow-[0_8px_30px_rgb(153,255,102,0.2)] py-2 px-6 rounded-2xl bg-neutral-900/80 backdrop-blur-xl"
              : "max-w-7xl border-none bg-transparent py-4 px-4 rounded-2xl"
          )}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* 1. Base Layer (Visible in the unfilled part) */}
          <div className={cn(
            "relative z-10 transition-colors duration-300",
            isScrolled ? "text-white/90" : ""
          )}>
            {children}
          </div>

          {/* 2. Progress Fill & Inverted Content Layer */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                style={{ clipPath }}
              >
                {/* The Green Fill */}
                <div className="absolute inset-0 bg-[#99ff66]" />
                
                {/* Shimmer Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Liquid "Head" Glow */}
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-white/20 blur-md" />

                {/* Inverted Text Layer (Black text on Green) */}
                <div className="relative z-30 py-2 px-6 text-black h-full flex items-center">
                  <div className="w-full">
                    {children}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </NavbarContext.Provider>
    </nav>
  );
};

export const NavBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("hidden md:flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
};

export const NavItems = ({ items, className }: { items: { name: string; link: string }[]; className?: string }) => {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-sm font-subheader font-medium transition-colors hover:opacity-70"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("md:hidden w-full", className)}>{children}</div>;
};

export const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2 font-header font-bold text-xl transition-colors">
      <div className="size-8 rounded-lg flex items-center justify-center text-lg transition-colors bg-current">
        <span className="mix-blend-difference text-white">P</span>
      </div>
      <span>Plumb</span>
    </div>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant === "primary" ? "default" : "outline"}
      className={cn(
        "rounded-xl px-5 h-9 font-subheader font-semibold transition-all",
        variant === "primary" ? "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200" : "bg-white dark:bg-neutral-900 text-black dark:text-white border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800",
        className
      )}
    >
      {children}
    </Button>
  );
};

export const MobileNavHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex items-center justify-between w-full", className)}>{children}</div>;
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button 
      onClick={onClick} 
      className="p-2 focus:outline-none transition-colors"
    >
      {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden mt-4 flex flex-col gap-4 pb-4"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
