"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, FileText, CheckCircle2, Clock, Phone, Mail, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HiringManualProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    id: "preface",
    title: "Start Here",
    icon: <ArrowRight className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-[#99ff66] font-bold text-sm uppercase tracking-widest">What this is</h4>
          <p className="text-foreground/80 leading-relaxed font-archivo">
            Emergence has built a recruitment engine that handles the end-to-end hiring process. Sourcing, scoring, scheduling, candidate communications: all of it runs without you having to manage it.
          </p>
          <p className="text-muted-foreground leading-relaxed italic border-l-2 border-[#99ff66]/30 pl-4 text-sm font-archivo">
            Your job is to define what great looks like for your role, review who we surface, and make the final call.
          </p>
        </div>
        <div className="bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-6 space-y-4">
          <h4 className="text-foreground font-bold text-sm underline underline-offset-4 decoration-[#99ff66]">What you own</h4>
          <ul className="space-y-3 text-sm text-foreground/70 font-archivo">
            <li className="flex gap-3"><span className="text-[#99ff66] font-bold">1.</span> The job description: defining the role with precision</li>
            <li className="flex gap-3"><span className="text-[#99ff66] font-bold">2.</span> Candidate screening: deciding who is worth your time</li>
            <li className="flex gap-3"><span className="text-[#99ff66] font-bold">3.</span> The hire decision: the final yes or no</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "step-1",
    title: "1. Create JD",
    icon: <MessageSquare className="w-5 h-5" />,
    content: (
      <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
        <div className="bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-6 space-y-4">
          <h4 className="text-[#99ff66] font-bold text-sm uppercase tracking-widest">How to start</h4>
          <p className="text-sm text-foreground/80 font-archivo">
            Open Slack and type <code className="bg-muted dark:bg-black/50 px-2 py-1 rounded text-[#99ff66] font-bold">/newjd</code> anywhere or use the "Message" section in the Emergence Hiring app.
          </p>
          <div className="space-y-3 pt-2">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Field Drivers</p>
            <div className="grid grid-cols-1 gap-2 text-[12px] font-archivo">
              <div className="text-muted-foreground"><span className="text-foreground font-bold">• Seniority:</span> Sets the experience bar for the entire JD.</div>
              <div className="text-muted-foreground"><span className="text-foreground font-bold">• Responsibilities:</span> Be specific. Generic inputs return generic candidates.</div>
              <div className="text-muted-foreground"><span className="text-foreground font-bold">• Required quals:</span> Only what you genuinely cannot hire without.</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-foreground font-bold text-sm">Reviewing the draft</h4>
          <p className="text-xs text-muted-foreground italic font-archivo">Approved drafts generate a Google Doc. Check these before handoff:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "Role title accuracy",
              "Understandable responsibilities",
              "Must-haves vs Nice-to-haves",
              "Salary visibility",
              "Equity/benefits accuracy"
            ].map((check, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-muted/30 dark:bg-white/5 rounded-lg text-[11px] text-muted-foreground border border-border/50 font-archivo">
                <div className="w-1 h-1 rounded-full bg-[#99ff66]" />
                {check}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "step-2",
    title: "2. Quick Sync",
    icon: <Clock className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed font-archivo">
          The team may follow up before going live to confirm configurations. Respond the same day to avoid gating the job.
        </p>
        <div className="bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-6 space-y-4">
          <h4 className="text-[#99ff66] font-bold text-sm uppercase tracking-widest">Config Questions</h4>
          <ul className="space-y-3 text-sm text-foreground/80 font-archivo">
            <li className="flex gap-3">• Salary visibility?</li>
            <li className="flex gap-3">• Interview format?</li>
            <li className="flex gap-3">• Technical assessment?</li>
            <li className="flex gap-3">• Hard constraints (visa/loc)?</li>
          </ul>
        </div>
        <p className="text-xs text-red-500/80 italic leading-relaxed font-archivo">
          Changes after handoff slow active sourcing down, so lock it in before you send.
        </p>
      </div>
    )
  },
  {
    id: "step-3",
    title: "3. Screening",
    icon: <FileText className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed font-archivo">
          Ops packages the strongest candidates into batches of 20 to 30.
        </p>
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 space-y-4">
          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-blue-500 shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-foreground">LinkedIn is the Reference</p>
              <p className="text-xs text-muted-foreground leading-relaxed font-archivo">If a candidate lacks a resume or score, use their LinkedIn as the primary decision point.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Proceed', 'Hold', 'Reject'].map(action => (
            <div key={action} className="p-3 bg-muted/30 dark:bg-white/5 border border-border dark:border-white/10 rounded-xl text-center">
              <div className="text-[10px] font-bold text-[#99ff66] uppercase">{action}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "step-4",
    title: "4. Confirm Slots",
    icon: <Clock className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed font-archivo">
          Share your availability quickly once the lineup is confirmed. Good candidates move fast.
        </p>
        <div className="bg-[#99ff66]/5 border border-[#99ff66]/20 rounded-2xl p-6">
          <p className="text-sm text-foreground/80 leading-relaxed font-archivo">
            The team handles all <span className="text-foreground font-bold">scheduling, calendar invites, and candidate communications.</span> Your only job is to be there.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "step-5",
    title: "5. Feedback",
    icon: <CheckCircle2 className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed font-archivo">
          Conduct interviews as scheduled. Fill in the feedback link within 24 hours.
        </p>
        <div className="bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl p-6 space-y-4">
          <h4 className="text-foreground font-bold text-sm italic font-archivo">The Decision</h4>
          <p className="text-sm text-muted-foreground leading-relaxed font-archivo">
            After all interviews, share your decision with the ops team: <span className="text-[#99ff66] font-bold">hire or no hire.</span>
          </p>
          <div className="text-[10px] text-muted-foreground/50 uppercase tracking-widest pt-2 border-t border-border/50 font-archivo">
            Feedback improves future lists and supports your record.
          </div>
        </div>
      </div>
    )
  },
  {
    id: "resources",
    title: "Timelines & Help",
    icon: <X className="w-5 h-5" />,
    content: (
      <div className="space-y-8 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
        <div className="space-y-4">
          <h4 className="text-[#99ff66] font-bold text-xs uppercase tracking-widest">SLA Timelines</h4>
          <div className="grid grid-cols-1 gap-2 text-[11px] font-archivo">
            <div className="flex justify-between p-3 bg-muted/30 dark:bg-white/5 border border-border/50 rounded-xl">
              <span className="text-muted-foreground">Job posted after approval</span>
              <span className="text-[#99ff66] font-bold">Within 24h</span>
            </div>
            <div className="flex justify-between p-3 bg-muted/30 dark:bg-white/5 border border-border/50 rounded-xl">
              <span className="text-muted-foreground">First screening list sent</span>
              <span className="text-[#99ff66] font-bold">24 - 48h</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest">Not Working?</h4>
          <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-xl">
            <p className="text-xs text-foreground font-bold mb-2">Quality off?</p>
            <p className="text-[11px] text-muted-foreground leading-relaxed font-archivo">Tell ops exactly what is off: wrong level, wrong domain. We recalibrate instantly.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-foreground font-bold text-xs uppercase tracking-widest">Contact</h4>
          <div className="space-y-2 text-[11px] font-archivo">
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-muted-foreground">Hiring POC</span>
              <span className="text-[#99ff66] font-bold">recruitment@emsoft.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">HR Ops</span>
              <span className="text-foreground/60">deane@emsoft.com</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export function HiringManual({ isOpen, onClose }: HiringManualProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Manual Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-background border border-border dark:border-white/10 rounded-[2.5rem] z-[101] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 md:px-12 border-b border-border flex items-center justify-between shrink-0 bg-muted/20">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#99ff66]" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">Emergence Talent</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">The Hiring Manager <span className="italic text-[#99ff66]">Manual.</span></h2>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/50 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              
              {/* Sidebar Navigation */}
              <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border p-6 md:p-8 shrink-0 overflow-y-auto bg-muted/10">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6 px-4">Standard Procedure</div>
                  {steps.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all text-left group",
                        activeStep === idx 
                          ? "bg-[#99ff66]/10 border border-[#99ff66]/20 text-[#99ff66]" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <span className={cn(
                        "shrink-0 transition-transform group-hover:scale-110",
                        activeStep === idx ? "text-[#99ff66]" : "text-muted-foreground/30"
                      )}>
                        {step.icon}
                      </span>
                      <span className="font-bold text-sm tracking-tight">{step.title}</span>
                      {activeStep === idx && (
                        <motion.div layoutId="active-indicator" className="ml-auto">
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-12 space-y-6 px-4 border-t border-border pt-8">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Ownership</div>
                  <div className="space-y-3">
                    {[
                      { label: "The JD", desc: "Defining the role with precision" },
                      { label: "Screening", desc: "Deciding who is worth your time" },
                      { label: "Decision", desc: "The final hire yes or no" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-[10px] font-bold text-foreground/80 font-bebas tracking-wider">{item.label}</div>
                        <div className="text-[9px] text-muted-foreground leading-tight font-archivo">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 space-y-6 px-4">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Who to reach</div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">Hiring POC</div>
                      <div className="flex items-center gap-2 text-[11px] text-[#99ff66] font-archivo">
                        <Mail className="w-3 h-3" />
                        <span>recruitment@emsoft.com</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">HR Ops</div>
                      <div className="flex items-center gap-2 text-[11px] text-foreground/60 font-archivo">
                        <Mail className="w-3 h-3" />
                        <span>deane@emsoft.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-background">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-2xl"
                  >
                    <div className="mb-12">
                      <div className="text-[10px] font-bold text-[#99ff66] uppercase tracking-[0.4em] mb-4">Phase // 0{activeStep + 1}</div>
                      <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        {steps[activeStep].title.includes('. ') ? steps[activeStep].title.split('. ')[1] : steps[activeStep].title}
                      </h3>
                      {steps[activeStep].content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Footer Navigation */}
            <div className="p-6 md:px-12 border-t border-border flex items-center justify-between shrink-0 bg-muted/10">
              <div className="flex items-center gap-6 text-[10px] font-mono text-muted-foreground uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Version 2.4
                </span>
                <span className="hidden md:inline">• Internal Document</span>
              </div>
              <div className="flex gap-4">
                {activeStep > 0 && (
                  <button 
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="px-6 py-3 rounded-xl border border-border text-muted-foreground text-[11px] font-bold uppercase tracking-widest hover:bg-muted transition-all font-bebas"
                  >
                    Back
                  </button>
                )}
                {activeStep < steps.length - 1 ? (
                  <button 
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="px-6 py-3 rounded-xl bg-[#99ff66] text-black text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-[#99ff66]/20 font-bebas"
                  >
                    Next Step <ArrowRight className="w-3 h-3" />
                  </button>
                ) : (
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-foreground text-background text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all font-bebas"
                  >
                    Got it, close manual
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
