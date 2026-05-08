"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const testimonials = [
  {
    body: "A brief on Monday turned into a ranked shortlist by Wednesday. The team got its week back.",
    author: "Hiring Manager, Engineering. Emergence Software.",
  },
  {
    body: "We stopped scrolling resumes. We started reading the top twenty.",
    author: "Hiring Manager, Operations. Emergence Software.",
  },
];

export function Quotes() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter font-bebas">
            Quiet wins, on record.
          </h2>
        </div>
        <div className="relative group">
          <div
            className={cn(
              "relative min-h-[500px] flex flex-col justify-center overflow-hidden rounded-[2.5rem] p-12 md:p-20 transition-all duration-500",
              "bg-[#0a0a0a] border border-neutral-800"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <blockquote className="text-2xl md:text-4xl font-archivo font-medium leading-relaxed italic text-neutral-200 tracking-tight">
                  &quot;{testimonials[current].body}&quot;
                </blockquote>
                <figcaption className="mt-12 flex items-center gap-3 text-[11px] font-bold tracking-[0.4em] uppercase text-neutral-500 font-bebas">
                  <span className="h-px w-8 bg-[#99ff66]" />
                  {testimonials[current].author}
                </figcaption>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 pointer-events-none">
              <button
                onClick={prev}
                className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-white transition-all hover:bg-neutral-800 hover:scale-110 active:scale-95 shadow-xl"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-white transition-all hover:bg-neutral-800 hover:scale-110 active:scale-95 shadow-xl"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={cn(
                    "h-2 transition-all duration-300 rounded-full",
                    current === idx ? "w-8 bg-[#99ff66]" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
