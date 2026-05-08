"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [0.7, 1.1]);
  const opacity = useTransform(scrollY, [0, 200], [1, 1]); // Keep fully opaque if it's already visible
  const y = useTransform(scrollY, [0, 600], [0, -50]); // Subtle lift

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-10 px-4 text-center overflow-hidden">
      {/* AI Native Hiring Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Badge variant="outline" className="px-4 py-1.5 rounded-full border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-600 dark:text-neutral-400 font-subheader flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          PLUMB. THE HIRING ENGINE INSIDE EMERGENCE.
        </Badge>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mb-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-header tracking-tight leading-[1.1] md:leading-[1.1] text-[#1a1a1a] dark:text-white">
          <span className="relative inline-block">
            Less hiring.
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "110%" }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
              className="absolute left-[-5%] top-[55%] h-[0.08em] bg-red-500/60 dark:bg-red-400/40 rounded-full pointer-events-none"
            />
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <motion.span 
              initial={{ color: "currentColor" }}
              animate={{ color: "#000000" }}
              transition={{ delay: 1.8, duration: 0.2 }}
              className="relative z-10 italic"
            >
              More hires.
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-[-0.05em] -inset-x-4 bg-[#99ff66] origin-left rounded-sm shadow-[0_5px_15px_rgba(153,255,102,0.4)]"
            />
          </span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-500 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-subtext"
      >
        Brief once. Get a ranked shortlist back. Make the call. <br />
        Plumb is the engine that runs your funnel inside Slack.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mb-4"
      >
        <InteractiveHoverButton className="bg-[#99ff66] text-black border-none px-6 py-2.5 text-sm font-subheader">
          Run /newjd in Slack
        </InteractiveHoverButton>
        <InteractiveHoverButton 
          onClick={() => window.location.href = '/manager'}
          className="bg-white dark:bg-neutral-900 text-black dark:text-white border-gray-200 dark:border-neutral-800 px-6 py-2.5 text-sm font-subheader"
        >
          For Hiring Managers
        </InteractiveHoverButton>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-8 font-subtext"
      >
        No demo. No deck. Slack only. Email fallback recruitment at emsoft dot com.
      </motion.p>

      {/* Ratings removed as per docs */}

      {/* Video Container */}
      <motion.div
        style={{
          scale,
          y,
        }}
        className="relative w-full max-w-6xl rounded-[32px] shadow-2xl overflow-hidden mt-10 bg-[#020617] origin-top"
      >
        <div className="w-full h-full rounded-[32px] overflow-hidden relative group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          >
            <source src="/recruiterflow-v7b-low.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
