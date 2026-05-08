"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <motion.div
        layout
        className={cn(
          "mx-auto border border-transparent",
          isScrolled 
            ? "max-w-4xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-neutral-200/50 dark:border-neutral-800/50 shadow-lg py-2 px-6 rounded-3xl" 
            : "max-w-7xl bg-transparent py-4 px-4 rounded-2xl"
        )}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
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
          className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
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
    <div className="flex items-center gap-2 font-bold text-xl font-garamond dark:text-white">
      <div className="size-8 rounded-lg bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-lg">
        L
      </div>
      <span>Loop</span>
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
        "rounded-xl px-5 h-9 font-semibold transition-all",
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
    <button onClick={onClick} className="p-2 text-neutral-600 dark:text-neutral-400 focus:outline-none">
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
