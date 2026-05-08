"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { HiringManual } from "./HiringManual";
import { BookOpen, Send, MoreVertical, Bell, Search } from "lucide-react";

const scenes = [
  {
    id: "hm-pain",
    num: "01",
    title: "The Old Way Ate Your Week.",
    highlight: "The Friction.",
    description: "Writing JDs twice. Begging for resumes. Skimming profiles with no shared rubric. The old loop ate your week and still came up short.",
    stats: [
      { label: "Manual Work", value: "80%" },
      { label: "Lost Time", value: "24h/wk" }
    ]
  },
  {
    id: "hm-newjd",
    num: "02",
    title: "It Starts With One Slack Command.",
    highlight: "The Input.",
    description: "Open Slack. Type /newjd. Fill it like you are texting a teammate. That is the heaviest lift you will do all week.",
    stats: [
      { label: "Setup Time", value: "< 2m" },
      { label: "Integration", value: "Slack" }
    ]
  },
  {
    id: "hm-draft",
    num: "03",
    title: "We Draft. You Stay The Editor.",
    highlight: "The AI Editor.",
    description: "The first draft lands in your DM. Approve, revise, or proceed. It reads like you wrote it on your best day.",
    stats: [
      { label: "Drafting", value: "Instant" },
      { label: "Accuracy", value: "98%" }
    ]
  },
  {
    id: "hm-promise",
    num: "04",
    title: "Days, Not Weeks.",
    highlight: "The Velocity.",
    description: "Most roles go from /newjd to a real shortlist inside a week. Compress the boring middle. Make the hire.",
    stats: [
      { label: "Shortlist", value: "48H" },
      { label: "Speed", value: "10x" }
    ]
  },
];

const sopSteps = [
  {
    you: "Run /newjd in Slack and fill form",
    plumb: "Drafting your JD in company voice. I'll have a version for you in seconds.",
    timing: "Minutes"
  },
  {
    you: "Looks great, but make it more 'founding engineer' vibe.",
    plumb: "Updated. High ownership, high impact. Better? Tap Approve to start sourcing.",
    timing: "Seconds"
  },
  {
    you: "Approve! Initiate hiring process.",
    plumb: "Funnel open. Sourcing and screening starting now across all platforms. ⚡",
    timing: "24H"
  },
  {
    you: "Just checked in. Any updates?",
    plumb: "Found 12 candidates. Screening 5 against your specific bar right now.",
    timing: "Always On"
  },
  {
    you: "Open the shortlist link",
    plumb: "Curated shortlist ready! 5 top-tier candidates synced to your Slack.",
    timing: "48H"
  },
  {
    you: "Proceed with Alex and Sam. Reject others.",
    plumb: "Done. Moving them to interviews today. Prep packs sent to your calendar.",
    timing: "Instant"
  },
  {
    you: "Alex was great. Sam lacked the technical depth.",
    plumb: "Feedback logged. Adjusting search for Sam's replacement instantly.",
    timing: "Continuous"
  },
  {
    you: "Made an offer to Alex! They accepted.",
    plumb: "Amazing! Closing the funnel and notifying the rest. Great hire. 🎉",
    timing: "Done"
  }
];

export function ManagerStoryboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoIdx, setAutoIdx] = useState(0);
  const [showPlumb, setShowPlumb] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  
  // Real-feel Chat Logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const runSequence = async () => {
      setShowPlumb(false);
      setIsTyping(false);
      await new Promise(r => setTimeout(r, 1500));
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 2000));
      setIsTyping(false);
      setShowPlumb(true);
      
      timer = setTimeout(() => {
        setAutoIdx((prev) => (prev + 1) % sopSteps.length);
      }, 4000);
    };

    runSequence();
    return () => clearTimeout(timer);
  }, [autoIdx]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [autoIdx, showPlumb, isTyping]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(Math.floor(latest * scenes.length), scenes.length - 1);
    if (idx !== activeIdx) setActiveIdx(idx);
  });

  return (
    <>
      {/* Sticky Scenes Section - Text Only Centered */}
      <div ref={containerRef} className="relative h-[400vh] bg-background">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Progress Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-border/20 z-50">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="w-full bg-[#99ff66] origin-top"
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-muted/20 text-muted-foreground text-[10px] font-black tracking-[0.3em] uppercase">
                    Step 0{activeIdx + 1}
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-playfair font-bold leading-tight tracking-tight">
                    {scenes[activeIdx].title} <br />
                    <span className="italic text-[#99ff66]">{scenes[activeIdx].highlight}</span>
                  </h2>
                  
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-subtext">
                    {scenes[activeIdx].description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12">
                  {scenes[activeIdx].stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SOP Section - Centered Stack with Auto-playing Phone Chat */}
      <section id="hm-sop" className="relative z-30 py-32 bg-background text-foreground overflow-hidden border-t border-border/50">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#99ff66]/10 dark:bg-[#99ff66]/5 blur-[120px] pointer-events-none opacity-30" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 h-full text-center">
          <div className="flex flex-col items-center gap-16 mb-24">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#99ff66]/30 bg-[#99ff66]/10 dark:bg-[#99ff66]/5 text-[#99ff66] text-[10px] font-black tracking-[0.3em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#99ff66] animate-pulse" />
                The Partnership
              </div>
              
              <h2 className="text-5xl md:text-7xl font-playfair font-bold leading-tight tracking-tight">
                The Hiring Manager <br />
                <span className="italic text-[#99ff66]">SOP.</span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-subtext">
                Watch the partnership in action. See how Plumb handles the heavy lifting while you stay in control.
              </p>

              <div className="pt-4 flex justify-center">
                <button 
                  onClick={() => setIsManualOpen(true)}
                  className="flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black rounded-xl px-8 py-4 text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl group"
                >
                  <BookOpen className="w-4 h-4 text-[#99ff66]" />
                  Read Full Manual
                </button>
              </div>
            </motion.div>

            {/* Custom Phone Frame with Auto-playing Chat */}
            <div className="relative w-full max-w-[400px] mx-auto">
              <div className="relative w-full aspect-[9/19.5] bg-[#0F0F0F] rounded-[55px] border-[10px] border-[#1F1F1F] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden text-left">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1F1F1F] ml-auto mr-4" />
                </div>

                <div className="absolute inset-0 bg-background pt-16 pb-8 px-4 flex flex-col">
                  <div className="flex items-center justify-between mb-8 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-black text-white">PL</div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-foreground">Plumb OS</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-[#99ff66]" />
                          <span className="text-[8px] text-muted-foreground uppercase">Active Now</span>
                        </div>
                      </div>
                    </div>
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-8 no-scrollbar pr-1 scroll-smooth">
                    <AnimatePresence initial={false}>
                      {sopSteps.slice(0, autoIdx).map((step, i) => (
                        <div key={`history-${i}`} className="space-y-6 opacity-40 grayscale-[0.5]">
                          <div className="flex flex-col items-start pr-8">
                            <div className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 ml-1">You</div>
                            <div className="bg-muted/50 border border-border rounded-2xl rounded-tl-none p-4 text-[13px] leading-relaxed font-bold italic">{step.you}</div>
                          </div>
                          <div className="flex flex-col items-end pl-8">
                            <div className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 mr-1 text-right">Plumb</div>
                            <div className="bg-[#99ff66]/10 border border-[#99ff66]/30 rounded-2xl rounded-tr-none p-4 text-[13px] leading-relaxed text-foreground font-bold text-right w-full">{step.plumb}</div>
                          </div>
                        </div>
                      ))}

                      <motion.div key={`active-${autoIdx}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <div className="flex flex-col items-start pr-8">
                          <div className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 ml-1">You</div>
                          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-muted/50 border border-border rounded-2xl rounded-tl-none p-4 text-[13px] leading-relaxed font-bold">{sopSteps[autoIdx].you}</motion.div>
                        </div>

                        {isTyping && (
                          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-end pl-8">
                            <div className="bg-[#99ff66]/5 border border-[#99ff66]/20 rounded-2xl rounded-tr-none p-4 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#99ff66] animate-bounce [animation-delay:-0.3s]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#99ff66] animate-bounce [animation-delay:-0.15s]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#99ff66] animate-bounce" />
                            </div>
                          </motion.div>
                        )}

                        {showPlumb && (
                          <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="flex flex-col items-end pl-8">
                            <div className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 mr-1 text-right">Plumb</div>
                            <div className="bg-[#99ff66]/10 border border-[#99ff66]/30 rounded-2xl rounded-tr-none p-4 text-[13px] leading-relaxed text-foreground font-bold text-right w-full shadow-lg shadow-[#99ff66]/5">
                              {sopSteps[autoIdx].plumb}
                              <div className="mt-2 flex items-center justify-end gap-1">
                                <span className="text-[8px] font-black text-[#99ff66] uppercase tracking-tighter bg-[#99ff66]/20 px-1.5 py-0.5 rounded">{sopSteps[autoIdx].timing}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    <div className="h-4" />
                  </div>

                  <div className="mt-auto h-12 bg-muted/20 border border-border/50 rounded-2xl flex items-center px-4 justify-between shrink-0">
                    <span className="text-[10px] text-muted-foreground">Auto-playing demo...</span>
                    <div className="flex items-center gap-1">
                       <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]" />
                       <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]" />
                       <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-32 pt-20 border-t border-border/50 text-center space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-header font-bold text-foreground">Ready to see the full spec?</h3>
              <p className="text-muted-foreground max-w-lg mx-auto">Dive deeper into our complete hiring methodology and standard operating procedures.</p>
            </div>
            <button onClick={() => setIsManualOpen(true)} className="flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl px-12 py-5 text-sm font-bold hover:scale-[1.05] active:scale-[0.95] transition-all shadow-2xl group mx-auto">
              <BookOpen className="w-5 h-5 text-[#99ff66]" />
              Read Full Hiring Manual
            </button>
            <p className="text-muted-foreground/30 text-[10px] font-mono uppercase tracking-[0.5em] pt-12">End of Operating Procedure // Plumb Hiring Systems</p>
          </motion.div>
        </div>
      </section>

      <HiringManual isOpen={isManualOpen} onClose={() => setIsManualOpen(false)} />
    </>
  );
}
