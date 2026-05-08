"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Activity, UserPlus, Filter, Trophy, Star } from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";

const ROLES = ["Senior Frontend Engine", "Product Designer", "Backend Lead", "Data Scientist", "DevOps Engineer"];
const NAMES = ["James Wilson", "Elena Rodriguez", "Kevin Zhang", "Sarah O'Connor", "Aria Patel", "Leo Dubois", "Mina Sato", "Lucas Brown"];

interface Candidate {
  id: string;
  name: string;
  role: string;
  score: number;
  timestamp: string;
}

export function CandidateEngine() {
  const [candidates, setCandidates] = React.useState<Candidate[]>([]);
  const [shortlist, setShortlist] = React.useState<Candidate[]>([]);
  const [scanned, setScanned] = React.useState(347);
  const [filtered, setFiltered] = React.useState(220);
  const [topScore, setTopScore] = React.useState(97);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newScore = Math.floor(Math.random() * (98 - 42 + 1)) + 42;
      const newCandidate: Candidate = {
        id: Math.random().toString(36).substr(2, 9),
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        role: ROLES[Math.floor(Math.random() * ROLES.length)],
        score: newScore,
        timestamp: "just now",
      };

      setCandidates((prev) => [newCandidate, ...prev].slice(0, 10));
      setScanned((prev) => prev + 1);

      if (newScore >= 90) {
        setShortlist((prev) => [newCandidate, ...prev].slice(0, 4));
        if (newScore > topScore) setTopScore(newScore);
      } else if (newScore < 85) {
        setFiltered((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [topScore]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-[#99ff66]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-header font-bold text-neutral-900 dark:text-white mb-8 leading-[1.1]">
                The engine, <br />
                <span className="text-[#99ff66] italic">mid-shift.</span>
              </h2>
              <p className="text-lg font-subtext text-neutral-500 dark:text-neutral-400 leading-relaxed mb-12 max-w-lg">
                Resumes come in. Plumb does the rest and delivers quality!
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Scanned", value: scanned, icon: Activity, color: "text-blue-500" },
                  { label: "Filtered", value: filtered, icon: Filter, color: "text-amber-500" },
                  { label: "Top Score", value: `${topScore}%`, icon: Trophy, color: "text-[#99ff66]" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-subtext font-bold text-neutral-400 uppercase tracking-widest">
                      <stat.icon className={cn("h-3 w-3", stat.color)} />
                      {stat.label}
                    </div>
                    <div className="text-3xl font-subheader font-bold text-neutral-900 dark:text-white">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Inbound Stream */}
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.25em] flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Inbound Stream
              </div>

              <div className="h-[400px] overflow-hidden relative group">
                <AnimatedList delay={2000} className="gap-3">
                  {candidates.map((c) => (
                    <div
                      key={c.id}
                      className="w-full p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm flex items-center justify-between group/item hover:border-[#99ff66]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold border border-neutral-200 dark:border-neutral-700">
                          {c.name.charAt(0)}
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-sm font-subheader font-bold text-neutral-900 dark:text-white truncate">{c.name}</div>
                          <div className="text-[10px] font-subtext text-neutral-500 font-medium truncate">{c.role}</div>
                        </div>
                      </div>
                      <div className={cn(
                        "text-sm font-subheader font-bold",
                        c.score >= 85 ? "text-green-500" : c.score >= 70 ? "text-yellow-500" : "text-red-500"
                      )}>
                        {c.score}
                      </div>
                    </div>
                  ))}
                </AnimatedList>
                {/* Fade effect at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Shortlist */}
            <div className="space-y-6">
              <div className="text-[10px] font-bold text-[#99ff66] uppercase tracking-[0.25em] flex items-center gap-3">
                <Star className="h-3 w-3 fill-[#99ff66]" />
                Shortlist
              </div>

              <div className="flex flex-col gap-4">
                <AnimatePresence initial={false}>
                  {shortlist.map((c, idx) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      className="p-5 rounded-2xl border border-[#99ff66]/20 bg-[#99ff66]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(153,255,102,0.05)] flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[10px] font-bold text-[#99ff66]/60">0{idx + 1}</div>
                        <div className="h-10 w-10 rounded-full bg-[#99ff66] text-black flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(153,255,102,0.3)]">
                          {c.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-subheader font-bold text-neutral-900 dark:text-white group-hover:text-[#99ff66] transition-colors">
                            {c.name}
                          </div>
                          <div className="text-[10px] font-subtext text-[#99ff66]/80 font-bold uppercase tracking-wider">Shortlisted</div>
                        </div>
                      </div>
                      <div className="text-base font-subheader font-bold text-neutral-900 dark:text-white">{c.score}%</div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {shortlist.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-[320px] border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                      <Trophy className="h-6 w-6 text-neutral-400" />
                    </div>
                    <div className="text-sm font-subheader font-bold text-neutral-500 mb-1">Waiting on the next batch.</div>
                    <div className="text-[10px] font-subtext text-neutral-400 uppercase tracking-widest">Plumb is awake.</div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="text-[10px] font-subtext text-neutral-400 uppercase tracking-[0.2em]">
            Sample stream. Real candidates never appear on the public page.
          </p>
        </div>
      </div>
    </section>
  );
}
