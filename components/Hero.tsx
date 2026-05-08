"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-10 px-4 text-center overflow-hidden">
      {/* AI Native Hiring Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Badge variant="outline" className="px-4 py-1.5 rounded-full border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 font-medium flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          PLUMB — HIRING FUNNEL AUTOMATION
        </Badge>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mb-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-pt-serif tracking-tight leading-[1.1] md:leading-[0.9] text-[#1a1a1a] dark:text-white">
          <span className="block whitespace-nowrap">Plumb — Less hiring.</span>
          <span className="block italic whitespace-nowrap">More hires.</span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-500 dark:text-neutral-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
      >
        Plumb runs the hiring funnel. <br />
        You make the call.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <InteractiveHoverButton className="bg-[#99ff66] text-black border-none px-6 py-2.5 text-sm">
          Book a walkthrough
        </InteractiveHoverButton>
        <InteractiveHoverButton className="bg-white dark:bg-neutral-900 text-black dark:text-white border-gray-200 dark:border-neutral-800 px-6 py-2.5 text-sm">
          Download the playbook
        </InteractiveHoverButton>
      </motion.div>

      {/* Ratings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center gap-2 mb-16"
      >
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
          RATED 4.8 ON G2 AND CAPTERRA
        </p>
      </motion.div>

      {/* Video Container (Cream Box) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full max-w-5xl aspect-video rounded-[32px] shadow-2xl overflow-hidden"
      >
        <div className="w-full h-full rounded-[32px] overflow-hidden relative group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/recruiterflow-v7b-low.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
