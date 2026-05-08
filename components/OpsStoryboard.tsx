"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const scenes = [
  {
    id: "ops-funnel",
    num: "01",
    title: "One Funnel. Two Taps.",
    copy: "Everything starts in the funnel. Candidates arrive through two distinct paths: Inbound and Outbound. As an operator, you don't hunt for profiles; you manage the flow of those who arrive. Your job is to ensure the taps stay open and the water stays clean.",
    cta: "See the funnel mechanics",
  },
  {
    id: "ops-inbound",
    num: "02",
    title: "The Inbound Tap: Organic & LinkedIn.",
    copy: "Ashby and LinkedIn flow directly into the Hub. These are candidates who found us. The system captures every application, every LinkedIn 'Interested', and every referral. They land in your Screening queue within minutes of hitting our servers.",
    cta: "View inbound sources",
  },
  {
    id: "ops-outbound",
    num: "03",
    title: "The Outbound Tap: The Targeted Search.",
    copy: "When organic flow isn't enough, we turn on the search. This is targeted, outbound sourcing. It runs in the background, identifying high-signal profiles that match our bar. You don't need to source; you need to verify that the search is hitting the right signals.",
    cta: "Verify search signals",
  },
  {
    id: "ops-scores",
    num: "04",
    title: "Fit Scores Are Your Filter.",
    copy: "Every candidate gets a Fit Score (0-100) based on deep platform experience, signal strength, and location. You aren't responsible for the scoring quality—the system is. You are responsible for catching when a score is missing or when a high-scorer doesn't pass the 'eye test'.",
    cta: "Audit fit scores",
  },
  {
    id: "ops-hub",
    num: "05",
    title: "The Hub Is Your Command Center.",
    copy: "Two tabs run your day: Screening and Shortlisting. Screening is where you decide who the hiring manager sees. Shortlisting is where you bundle the yeses and ship. The Hub is the source of truth. If Ashby says one thing and the Hub says another, trust the Hub.",
    cta: "Enter the Command Center",
  },
  {
    id: "ops-decision",
    num: "06",
    title: "Screening Is A Decision, Not A Forward.",
    copy: "When you click 'Send for Screening', you are spending the hiring manager's attention budget. Pick the ones you would defend in a room. Curation is the job. Forwarding is not. Once sent, the clock starts: 48 hours for the HM to act.",
    cta: "Manage attention budget",
  },
  {
    id: "ops-coordination",
    num: "07",
    title: "Interview Coordination On A Clock.",
    copy: "Once the shortlist is in, sequencing is fast. Take HM availability, sequence rounds, and send slots. The soft rule is 24 hours from interview to feedback. Most slips happen here. Your nudge closes the seam. You carry the relationship.",
    cta: "View coordination timeline",
  },
  {
    id: "ops-watchtower",
    num: "08",
    title: "The Watch Tower.",
    copy: "Two channels matter: Slack surfaces missing scores, sourcing failures, and misses. Skim daily. You don't need to act on every line; you need to see the shape. Patterns over incidents. One missing score is a shrug; three rejected high-scorers is a calibration ticket.",
    cta: "Open Watch Tower",
  },
  {
    id: "ops-good",
    num: "09",
    title: "What Good Ops Looks Like.",
    copy: "A role you run well closes in five days, not five weeks. The HM saw a tight slate they trusted. Sourcing ran on both taps. Feedback came in inside 24 hours. Nothing here is heroic. It's just the playbook, run perfectly.",
    cta: "View the scoreboard",
  },
];

export function OpsStoryboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
    <div ref={containerRef} className="relative h-[900vh] bg-background">
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
                  <div className="font-mono text-xs text-[#3b82f6] font-bold tracking-[0.4em] uppercase opacity-70">
                    Scene // {scenes[activeIdx].num}
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-header font-bold text-foreground leading-[1.1]">
                    {scenes[activeIdx].title}
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-subtext max-w-lg">
                    {scenes[activeIdx].copy}
                  </p>
                  {scenes[activeIdx].cta && (
                    <button className="text-foreground font-bold flex items-center gap-2 group text-sm uppercase tracking-widest border-b-2 border-[#3b82f6]/20 hover:border-[#3b82f6] transition-all pb-1 w-fit">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 via-transparent to-transparent opacity-50" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col items-center justify-center">
                    {/* Scene 1: Funnel Mechanics */}
                    {scenes[activeIdx].id === "ops-funnel" && (
                      <div className="w-full h-full flex flex-col items-center justify-center space-y-12">
                        <div className="flex gap-20">
                           <div className="flex flex-col items-center gap-4">
                             <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                               <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                             </div>
                             <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Inbound</span>
                           </div>
                           <div className="flex flex-col items-center gap-4">
                             <div className="w-16 h-16 rounded-full bg-[#99ff66]/20 border border-[#99ff66]/40 flex items-center justify-center">
                               <div className="w-2 h-2 rounded-full bg-[#99ff66] animate-ping" />
                             </div>
                             <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Outbound</span>
                           </div>
                        </div>
                        <div className="w-48 h-64 border-2 border-white/5 rounded-3xl bg-white/[0.02] flex items-center justify-center relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
                           <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">The Funnel</span>
                        </div>
                      </div>
                    )}

                    {/* Scene 2: Inbound Tap */}
                    {scenes[activeIdx].id === "ops-inbound" && (
                      <div className="w-full h-full flex flex-col p-4">
                        <div className="flex-1 bg-[#111111] border border-white/5 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                          <div className="flex justify-between items-center mb-12">
                            <div className="h-4 w-40 bg-white/10 rounded-full" />
                            <div className="bg-blue-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">Inbound</div>
                          </div>
                          <div className="space-y-6">
                            {[1,2,3,4,5].map(i => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]"
                              >
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20" />
                                <div className="h-2 flex-1 bg-white/10 rounded-full" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Scene 3: Outbound Tap */}
                    {scenes[activeIdx].id === "ops-outbound" && (
                      <div className="w-full h-full flex flex-col p-4">
                        <div className="flex-1 bg-[#111111] border border-white/5 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                          <div className="flex justify-between items-center mb-12">
                            <div className="h-4 w-40 bg-white/10 rounded-full" />
                            <div className="bg-[#99ff66] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase">Outbound</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {[1,2,3,4,5,6].map(i => (
                              <motion.div 
                                key={i}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="aspect-square border border-[#99ff66]/10 rounded-2xl bg-[#99ff66]/5 flex flex-col items-center justify-center p-4 gap-2"
                              >
                                <div className="w-10 h-10 rounded-full bg-[#99ff66]/20 border border-[#99ff66]/30" />
                                <div className="h-1.5 w-12 bg-white/10 rounded" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Scene 4: Fit Scores */}
                    {scenes[activeIdx].id === "ops-scores" && (
                      <div className="w-full flex flex-col items-center">
                         <div className="flex items-baseline gap-2">
                           <NumberTicker value={87} className="text-8xl font-subheader font-bold text-[#99ff66]" />
                           <span className="text-2xl font-subheader font-bold text-[#99ff66]/40">/100</span>
                         </div>
                         <div className="text-xs font-mono uppercase tracking-[0.5em] text-white/40 mb-12">Fit Score Signal</div>
                         <div className="flex gap-3">
                            {["deep platform exp", "ic signal strong", "us based"].map((label, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/60 uppercase tracking-widest"
                              >
                                {label}
                              </motion.div>
                            ))}
                         </div>
                      </div>
                    )}

                    {/* Scene 5: The Hub */}
                    {scenes[activeIdx].id === "ops-hub" && (
                      <div className="w-full h-full flex flex-col p-4">
                        <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 shadow-2xl relative flex flex-col">
                           <div className="flex gap-4 mb-8">
                             <div className="px-4 py-2 bg-blue-500 rounded-lg text-[10px] font-bold uppercase tracking-widest">Screening</div>
                             <div className="px-4 py-2 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white/40">Shortlisting</div>
                           </div>
                           <div className="flex-1 space-y-4">
                              {[1,2,3].map(i => (
                                <div key={i} className="h-20 border border-white/5 rounded-2xl bg-white/[0.02] p-4 flex items-center justify-between">
                                   <div className="flex items-center gap-4">
                                     <div className="w-10 h-10 rounded-xl bg-white/5" />
                                     <div className="space-y-2">
                                       <div className="h-2 w-24 bg-white/20 rounded" />
                                       <div className="h-1.5 w-16 bg-white/10 rounded" />
                                     </div>
                                   </div>
                                   <div className="w-12 h-6 rounded-full bg-[#99ff66]/20 border border-[#99ff66]/30" />
                                </div>
                              ))}
                           </div>
                           <BorderBeam />
                        </div>
                      </div>
                    )}

                    {/* Scene 6: Screening Decision */}
                    {scenes[activeIdx].id === "ops-decision" && (
                      <div className="relative w-full h-full flex flex-col items-center justify-center gap-12">
                         <div className="flex gap-8">
                            <motion.div 
                              animate={{ x: [0, 100, 0], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500 font-bold"
                            >
                              X
                            </motion.div>
                            <motion.div 
                              className="w-24 h-24 rounded-2xl bg-[#99ff66]/20 border border-[#99ff66]/40 flex items-center justify-center text-[#99ff66] font-bold text-2xl"
                            >
                              YES
                            </motion.div>
                         </div>
                         <div className="h-2 w-48 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: "100%" }}
                             transition={{ duration: 48, ease: "linear" }}
                             className="h-full bg-amber-500"
                           />
                         </div>
                         <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">HM Attention Clock: 48h</span>
                      </div>
                    )}

                    {/* Scene 7: Coordination */}
                    {scenes[activeIdx].id === "ops-coordination" && (
                      <div className="w-full flex flex-col items-center p-8">
                         <div className="w-full space-y-12 relative">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
                            {[
                              { label: "Round 1", status: "Done", color: "bg-[#99ff66]" },
                              { label: "Round 2", status: "Active", color: "bg-blue-500" },
                              { label: "Decision", status: "Pending", color: "bg-white/10" }
                            ].map((step, i) => (
                              <div key={i} className="flex items-center gap-8 relative z-10">
                                 <div className={cn("w-12 h-12 rounded-full border-2 border-background flex items-center justify-center", step.color)}>
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                 </div>
                                 <div className="space-y-1">
                                    <div className="text-sm font-bold text-white/80">{step.label}</div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">{step.status}</div>
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {/* Scene 8: Watch Tower */}
                    {scenes[activeIdx].id === "ops-watchtower" && (
                      <div className="w-full h-full flex flex-col gap-6 p-4">
                         <div className="flex-1 border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden relative">
                            <div className="p-4 border-b border-white/10 flex items-center justify-between">
                               <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">Alert Feed</span>
                               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            </div>
                            <Marquee vertical className="h-64 opacity-50" repeat={3}>
                               {[1,2,3,4,5].map(i => (
                                 <div key={i} className="p-4 border-b border-white/5 text-[10px] font-mono text-white/40">
                                   [CRITICAL] ROLE_ID_{i}02: MISSING_FIT_SCORE_THRESHOLD
                                 </div>
                               ))}
                            </Marquee>
                            <BorderBeam colorFrom="#ef4444" colorTo="#99ff66" />
                         </div>
                      </div>
                    )}

                    {/* Scene 9: Success */}
                    {scenes[activeIdx].id === "ops-good" && (
                      <div className="w-full flex flex-col items-center">
                         <div className="text-9xl font-header font-bold text-[#99ff66]">5</div>
                         <div className="text-xl font-subheader font-bold text-white/80 -mt-4">DAYS</div>
                         <div className="text-[10px] font-subtext font-mono uppercase tracking-[0.5em] text-white/40 mt-8">Avg. Time to Shortlist</div>
                         <div className="mt-16 w-full h-32 border border-white/10 rounded-2xl bg-[#99ff66]/5 flex items-center justify-center">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#99ff66]">Playbook: COMPLETED</span>
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

    {/* SOP Section - Operator's Daily Checklist */}
    <section id="ops-checklist" className="relative z-30 py-32 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none" />
      
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
              <div className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 text-[10px] font-bold tracking-[0.4em] uppercase inline-block">
                Daily Operations
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold leading-tight">
                The Operator <br />
                <span className="italic text-[#99ff66]">Checklist.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed font-subtext">
                Consistency is the only metric that matters. Run the playbook every morning.
              </p>
              
              <div className="pt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>VERSION 1.0 // OPS-RUNBOOK</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Checklist Cards */}
          <div className="lg:col-span-8 space-y-6">
            {[
              { task: "Skim Watch Tower", detail: "Check Slack for missing scores or sourcing misses.", timing: "09:00 AM" },
              { task: "Clear Screening Queue", detail: "Review all new inbound and outbound leads in the Hub.", timing: "Daily" },
              { task: "Shortlist & Ship", detail: "Bundle 'Yes' decisions and send to Hiring Managers.", timing: "Daily" },
              { task: "Audit High-Scorers", detail: "Check 80+ fit scores that haven't been screened.", timing: "Daily" },
              { task: "Nudge HM Stalls", detail: "Send Slack DMs for candidates past 48h in screening.", timing: "Continuous" },
              { task: "Coordination Sync", detail: "Sequence rounds for all approved shortlists.", timing: "Continuous" },
              { task: "System Calibration", detail: "File tickets if Hub disagrees with Ashby data.", timing: "As Needed" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all group-hover:border-blue-500/20">
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.timing}</div>
                      <div className="text-2xl font-subheader font-bold text-white/90 leading-tight">
                        {item.task}
                      </div>
                      <p className="text-white/40 text-sm font-subtext">{item.detail}</p>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Escalation Tree Section */}
    <section className="py-32 bg-background border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-header font-bold mb-6">Escalation Tree</h2>
             <p className="text-muted-foreground">Know who to call when the system breaks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Hub Bug", contact: "#hiring-alerts", desc: "System errors or UI bugs in the Hub." },
               { title: "Data Issue", contact: "Dev Team", desc: "Hub disagrees with Ashby source data." },
               { title: "HM Friction", contact: "Ops Lead", desc: "People issues with Hiring Managers." },
               { title: "Off-Hours", contact: "Morning Sync", desc: "It can wait unless an offer is blocked." }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-border rounded-3xl bg-card hover:border-blue-500/40 transition-colors">
                  <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-4">{item.title}</div>
                  <div className="text-xl font-bold mb-4">{item.contact}</div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
               </div>
             ))}
          </div>
       </div>
    </section>
    </>
  );
}
