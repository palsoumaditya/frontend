"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const scenes = [
  {
    id: "hm-pain",
    num: "01",
    title: "The Old Way Ate Your Week.",
    copy: "Writing the JD twice. Begging for resumes on a Sunday. Skimming hundreds of profiles with no shared rubric. The old loop ate your week and still came up short. Plumb rebuilt the loop. The noisy parts disappear. The parts that need a human get more room.",
    cta: "See the old loop",
  },
  {
    id: "hm-newjd",
    num: "02",
    title: "It Starts With One Slack Command.",
    copy: "Open Slack. Type /newjd. A short form appears. Eight fields: your email, role title, company, seniority, location, salary range, responsibilities, must-haves. Fill it like you are texting a teammate. That is the heaviest lift you will do all week. Within hours a polished JD draft lands in your DM.",
    cta: "See the eight fields",
  },
  {
    id: "hm-draft",
    num: "03",
    title: "We Draft. You Stay The Editor.",
    copy: "The first draft is on us. It reads like you wrote it on your best day. Three options sit beneath: Revise, Reject, Create Doc and Proceed. Plumb adapts. Approve, and a clean Google Doc opens. Polish the last line, click Initiate Hiring Process, and the funnel opens.",
    cta: "See a sample JD draft",
  },
  {
    id: "hm-candidates",
    num: "04",
    title: "Candidates Show Up Ready For You.",
    copy: "A day or two later, candidates are already graded against your role. Your must-haves, your level, your bar. Every profile gets the 3H litmus test: Hungry, Humble, High Standards. You get candidates in Slack, each as a one-page profile: snapshot, top achievement, LinkedIn, resume.",
    cta: "Preview a sample one-pager",
  },
  {
    id: "hm-decisions",
    num: "05",
    title: "Yes. Hold. Reject. Move On.",
    copy: "You get a clean link in Slack. Open it between meetings. Each candidate is one page. Tap Proceed, Hold, or Reject. The next one slides in. The whole batch takes 20 minutes. Submit, and recruitment sequences every Proceed for interviews the same day.",
    cta: "Preview a sample shortlist link",
  },
  {
    id: "hm-promise",
    num: "06",
    title: "Days, Not Weeks.",
    copy: "Most roles go from /newjd to a real shortlist inside a week. Some inside three days. You compress the boring middle. You keep the parts that matter: writing a great JD, meeting great people, making the call. Less hiring. More hires.",
    cta: "View the timeline",
  },
];

export function ManagerStoryboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to scene index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      Math.floor(latest * scenes.length),
      scenes.length - 1
    );
    if (idx !== activeIdx) {
      setActiveIdx(idx);
    }
  });

  return (
    <>
    <div ref={containerRef} className="relative h-[600vh] bg-background">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full items-center">
            
            {/* Left Content Area (Animated Swap) */}
            <div className="relative h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenes[activeIdx].id}
                  initial={{ opacity: 0, x: -40, rotateX: 20 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  exit={{ opacity: 0, x: 40, rotateX: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-8"
                >
                  <div className="font-mono text-xs text-[#99ff66] font-bold tracking-[0.4em] uppercase opacity-70">
                    Step // {scenes[activeIdx].num}
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-header font-bold text-foreground leading-[1.1]">
                    {scenes[activeIdx].title}
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-subtext max-w-lg">
                    {scenes[activeIdx].copy}
                  </p>
                  {scenes[activeIdx].cta && (
                    <button className="text-foreground font-bold flex items-center gap-2 group text-sm uppercase tracking-widest border-b-2 border-[#99ff66]/20 hover:border-[#99ff66] transition-all pb-1 w-fit">
                      {scenes[activeIdx].cta}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Visual Area (Animated Page Swap) */}
            <div className="hidden lg:block relative perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scenes[activeIdx].id}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 30, z: -100 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: -30, z: 100 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full aspect-square relative bg-card border border-border rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group border-white/5"
                >
                  {/* Spotlight Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#99ff66]/10 via-transparent to-transparent opacity-50" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col items-center justify-center">
                    {/* Visual Content (Reused from previous logic) */}
                    {scenes[activeIdx].id === "hm-pain" && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase text-center mb-8">Manual Loop / The Noise</div>
                        <div className="flex-1 relative">
                           <Marquee vertical className="h-full opacity-30 pointer-events-none" repeat={3}>
                             {[1,2,3,4,5].map(i => (
                               <div key={i} className="p-4 border border-border rounded-xl bg-muted/50 mb-4 text-xs font-mono">
                                 RESUME_PARSING_ERROR_{i}
                               </div>
                             ))}
                           </Marquee>
                           <div className="absolute inset-0 flex items-center justify-center">
                             <motion.div 
                               animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                               transition={{ duration: 2, repeat: Infinity }}
                               className="w-48 h-48 border border-[#99ff66]/20 rounded-full flex items-center justify-center bg-[#99ff66]/5"
                             >
                               <span className="text-[10px] font-bold text-[#99ff66] uppercase tracking-widest">Inefficient</span>
                             </motion.div>
                           </div>
                        </div>
                      </div>
                    )}

                    {scenes[activeIdx].id === "hm-newjd" && (
                      <div className="w-full max-w-xs space-y-4">
                        <div className="flex items-center justify-between mb-8">
                          <div className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50">Command Input</div>
                          <div className="w-3 h-3 rounded-full bg-[#99ff66] shadow-[0_0_15px_#99ff66]" />
                        </div>
                        {[1,2,3,4,5,6,7,8].map(i => (
                          <motion.div 
                            key={i}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="h-10 bg-muted/30 border border-border/50 rounded-xl flex items-center px-4"
                          >
                            <div className={cn("h-1.5 bg-[#99ff66]/10 rounded", i % 2 === 0 ? "w-24" : "w-16")} />
                          </motion.div>
                        ))}
                        <div className="h-14 bg-[#99ff66] rounded-2xl mt-8 flex items-center justify-center text-black font-bold text-xs uppercase tracking-[0.2em] shadow-2xl">
                          Initiate /newjd
                        </div>
                      </div>
                    )}

                    {scenes[activeIdx].id === "hm-draft" && (
                      <div className="w-full h-full flex flex-col p-4">
                        <div className="flex-1 bg-background/50 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                          <div className="flex justify-between items-center mb-12">
                            <div className="h-4 w-40 bg-white/10 rounded-full" />
                            <div className="bg-[#99ff66] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase">Review</div>
                          </div>
                          <div className="space-y-5">
                            {[1,2,3,4,5,6].map(i => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className={cn("h-2 bg-white/5 rounded-full", i === 4 ? "w-1/2" : "w-full")} 
                              />
                            ))}
                          </div>
                          <div className="absolute bottom-8 left-8 right-8">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="h-12 border border-white/10 rounded-2xl flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-white/40">Revise</div>
                              <div className="h-12 bg-[#99ff66] rounded-2xl flex items-center justify-center text-black text-[10px] font-bold uppercase tracking-widest">Approve</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {scenes[activeIdx].id === "hm-candidates" && (
                      <div className="w-full grid grid-cols-2 gap-6 h-full p-4">
                        <div className="space-y-4">
                          {[1,2,3,4].map(i => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-4 border border-white/5 rounded-2xl bg-white/[0.02] flex items-center gap-3"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#99ff66]/10 border border-[#99ff66]/20" />
                              <div className="h-1.5 w-12 bg-white/10 rounded" />
                            </motion.div>
                          ))}
                        </div>
                        <div className="bg-[#111111] border border-white/10 rounded-[32px] p-6 shadow-2xl relative">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 mb-6" />
                           <div className="h-3 w-24 bg-white/20 rounded-full mb-3" />
                           <div className="h-2 w-16 bg-[#99ff66]/30 rounded-full mb-8" />
                           <div className="space-y-3">
                             <div className="h-1.5 w-full bg-white/5 rounded-full" />
                             <div className="h-1.5 w-full bg-white/5 rounded-full" />
                             <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                           </div>
                           <div className="mt-auto absolute bottom-6 left-6 right-6 h-10 bg-[#99ff66] rounded-xl" />
                        </div>
                      </div>
                    )}

                    {scenes[activeIdx].id === "hm-decisions" && (
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <motion.div 
                          animate={{ y: [0, -20, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-56 aspect-[9/19] bg-[#0a0a0a] border-[8px] border-[#1a1a1a] rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                           <div className="h-full w-full p-6 pt-12 space-y-6">
                              <div className="h-32 w-full bg-white/5 rounded-3xl" />
                              <div className="space-y-2">
                                <div className="h-2 w-1/2 bg-white/20 rounded" />
                                <div className="h-2 w-3/4 bg-white/10 rounded" />
                              </div>
                              <div className="pt-8 grid grid-cols-3 gap-2">
                                <div className="h-10 bg-red-500/20 rounded-xl" />
                                <div className="h-10 bg-amber-500/20 rounded-xl" />
                                <div className="h-10 bg-[#99ff66] rounded-xl" />
                              </div>
                           </div>
                        </motion.div>
                      </div>
                    )}

                    {scenes[activeIdx].id === "hm-promise" && (
                      <div className="w-full flex flex-col items-center">
                         <div className="text-8xl font-header font-bold text-[#99ff66] mb-4">12</div>
                         <div className="text-xs font-mono uppercase tracking-[0.5em] text-white/40 mb-12">Days to Offer</div>
                         <div className="w-full space-y-4">
                            {[1,2,3].map(i => (
                              <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 2, delay: i * 0.3 }}
                                  className="h-full bg-gradient-to-r from-transparent to-[#99ff66]"
                                />
                              </div>
                            ))}
                         </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* SOP Section - Moved outside to prevent overlap and restore split layout */}
    <section id="hm-sop" className="relative z-30 py-32 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#99ff66]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3b82f6]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="px-4 py-1 rounded-full border border-[#99ff66]/30 bg-[#99ff66]/5 text-[#99ff66] text-[10px] font-bold tracking-[0.4em] uppercase inline-block">
                The Partnership
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold leading-tight">
                The Hiring <br />
                Manager <span className="italic text-[#99ff66]">SOP.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed font-subtext">
                We handle the noise. You handle the decisions. A clear breakdown of our shared mission.
              </p>
              
              <div className="pt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
                  <span>VERSION 2.4 // LATEST</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  <span>SECURE SLACK CHANNEL</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Comparison Cards */}
          <div className="lg:col-span-8 space-y-6">
            {[
              ["Run /newjd in Slack and fill form", "Draft your JD in company voice", "Minutes"],
              ["Tap Revise or Approve", "Iterate on revisions instantly", "Seconds"],
              ["Click Initiate Hiring Process", "Open the funnel inside 24 hours", "24H"],
              ["Wait. Do your real job.", "System finds the right candidates", "Always On"],
              ["Open the shortlist link", "Share curated shortlist in 48h", "48H"],
              ["Tap Proceed, Hold, or Reject", "Decide with a simple dropdown", "Instant"],
              ["Show up to interviews", "Send short prep packs for you", "Same Day"],
              ["Submit the feedback link", "Improve the system for next role", "Continuous"],
              ["Make the hire", "Close the loop and tidy up rest", "Done"]
            ].map(([you, plumb, timing], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                  {/* You Side */}
                  <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all group-hover:border-[#99ff66]/20">
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-[#99ff66] uppercase tracking-widest opacity-50">You</div>
                      <div className="text-lg font-subheader font-bold text-white/90 leading-tight">
                        {you}
                      </div>
                    </div>
                  </div>

                  {/* Plumb Side */}
                  <div className="flex-1 bg-[#99ff66]/[0.02] border border-[#99ff66]/10 rounded-2xl p-6 md:p-8 hover:bg-[#99ff66]/[0.05] transition-all group-hover:border-[#99ff66]/30">
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-3">
                        <div className="text-[10px] font-bold text-[#99ff66] uppercase tracking-widest">Plumb</div>
                        <div className="text-lg font-subheader font-bold text-white/80 leading-tight">
                          {plumb}
                        </div>
                      </div>
                      <div className="shrink-0 bg-[#99ff66]/10 border border-[#99ff66]/20 rounded-lg px-2 py-1 h-fit">
                        <div className="text-[9px] font-black text-[#99ff66] uppercase tracking-tighter">{timing}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-8 border-t border-white/5 text-center"
        >
           <p className="text-white/10 text-[10px] font-mono uppercase tracking-[0.5em]">End of Operating Procedure // Plumb Hiring Systems</p>
        </motion.div>
      </div>
    </section>
    </>
  );
}




