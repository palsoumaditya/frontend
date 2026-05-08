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
    id: "step-1",
    title: "1. Create your JD",
    icon: <MessageSquare className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-white/60 leading-relaxed">
          Everything downstream runs on the job description you create. A sharp JD produces sharp candidates.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
          <h4 className="text-[#99ff66] font-bold text-sm uppercase tracking-widest">How to start</h4>
          <p className="text-sm text-white/80">
            Open Slack and type <code className="bg-black/50 px-2 py-1 rounded text-[#99ff66]">/newjd</code> anywhere or use the Emergence app.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-[13px] text-white/50 space-y-2">
              <li>• Hiring manager email</li>
              <li>• Role title</li>
              <li>• Company</li>
              <li>• Seniority</li>
              <li>• Location & Work model</li>
            </ul>
            <ul className="text-[13px] text-white/50 space-y-2">
              <li>• Salary range</li>
              <li>• Responsibilities (Be specific)</li>
              <li>• Required qualifications</li>
              <li>• Nice-to-haves</li>
              <li>• Paste existing JD draft</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm">Reviewing the draft</h4>
          <div className="grid grid-cols-3 gap-3">
            {['Revise', 'Reject', 'Approve'].map((opt) => (
              <div key={opt} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-[11px] font-bold uppercase tracking-wider text-white/40">
                {opt}
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 italic">Approved drafts generate a Google Doc for final polish before you "Initiate Hiring Process".</p>
        </div>
      </div>
    )
  },
  {
    id: "step-2",
    title: "2. Ops Sync",
    icon: <Clock className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-white/60 leading-relaxed">
          The team follows up before going live to lock in configurations. Respond the same day to avoid gating the job.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h4 className="text-[#99ff66] font-bold text-sm uppercase tracking-widest mb-4">Configuration Questions</h4>
          <ul className="space-y-4">
            {[
              "Should salary be visible on the public posting?",
              "How many interview rounds and in what format?",
              "Is there a technical assessment or take-home?",
              "Any hard constraints on location or visa status?"
            ].map((q, i) => (
              <li key={i} className="flex gap-4 text-sm text-white/80">
                <span className="text-[#99ff66] font-mono">Q{i+1}</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "step-3",
    title: "3. Screen Candidates",
    icon: <FileText className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-white/60 leading-relaxed">
          Ops team packages the strongest candidates into batches of 20 to 30.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            <h4 className="text-white font-bold text-[13px]">What you see</h4>
            <ul className="text-xs text-white/50 space-y-2">
              <li>• Name & LinkedIn Profile</li>
              <li>• Resume (where available)</li>
              <li>• Fit Score against your JD</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            <h4 className="text-white font-bold text-[13px]">What you do</h4>
            <div className="flex flex-wrap gap-2">
              {['Proceed', 'Hold', 'Reject'].map(action => (
                <span key={action} className="px-3 py-1 bg-[#99ff66]/10 border border-[#99ff66]/20 rounded-full text-[#99ff66] text-[10px] font-bold uppercase">
                  {action}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/40">Submit decisions quickly. Candidates are usually in multiple processes.</p>
          </div>
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
        <p className="text-white/60 leading-relaxed">
          Share your availability quickly once the lineup is confirmed.
        </p>
        <div className="bg-[#99ff66]/5 border border-[#99ff66]/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#99ff66] flex items-center justify-center text-black font-bold text-xs italic">!</div>
            <p className="text-sm font-bold text-white">Speed is your competitive advantage.</p>
          </div>
          <p className="text-xs text-white/50 leading-relaxed">
            The team handles all scheduling, calendar invites, and candidate communications. Your only job is to be present and prepared.
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
        <p className="text-white/60 leading-relaxed">
          Fill in the feedback link within 24 hours of every interview.
        </p>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-bold text-sm mb-4">Feedback Impact</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="text-[#99ff66] font-bold text-[10px] uppercase">Decision</div>
                <p className="text-xs text-white/50">Tells us if the candidate moves forward.</p>
              </div>
              <div className="space-y-2">
                <div className="text-[#99ff66] font-bold text-[10px] uppercase">Learning</div>
                <p className="text-xs text-white/50">Improves quality of future lists.</p>
              </div>
              <div className="space-y-2">
                <div className="text-[#99ff66] font-bold text-[10px] uppercase">Record</div>
                <p className="text-xs text-white/50">Supports your final hire decision.</p>
              </div>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Manual Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] z-[101] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 md:px-12 border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#99ff66]" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Emergence Talent</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white">The Hiring Manager <span className="italic text-[#99ff66]">Manual.</span></h2>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              
              {/* Sidebar Navigation */}
              <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/5 p-6 md:p-8 shrink-0 overflow-y-auto">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-6 px-4">Standard Procedure</div>
                  {steps.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all text-left group",
                        activeStep === idx 
                          ? "bg-[#99ff66]/10 border border-[#99ff66]/20 text-[#99ff66]" 
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className={cn(
                        "shrink-0 transition-transform group-hover:scale-110",
                        activeStep === idx ? "text-[#99ff66]" : "text-white/20"
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

                <div className="mt-12 space-y-6 px-4">
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Ownership</div>
                  <div className="space-y-3">
                    {[
                      { label: "The JD", desc: "Defining the role with precision" },
                      { label: "Screening", desc: "Deciding who is worth your time" },
                      { label: "Decision", desc: "The final hire yes or no" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-[10px] font-bold text-white/80">{item.label}</div>
                        <div className="text-[9px] text-white/40 leading-tight">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 space-y-6 px-4">
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Who to reach</div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">Hiring POC</div>
                      <div className="flex items-center gap-2 text-[11px] text-[#99ff66]">
                        <Mail className="w-3 h-3" />
                        <span>recruitment@emsoft.com</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">HR Ops</div>
                      <div className="flex items-center gap-2 text-[11px] text-white/60">
                        <Mail className="w-3 h-3" />
                        <span>deane@emsoft.com</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">Platform</div>
                      <div className="flex items-center gap-2 text-[11px] text-white/60">
                        <Mail className="w-3 h-3" />
                        <span>rishabh@emsoft.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white/[0.01]">
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
                      <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                        {steps[activeStep].title.split('. ')[1]}
                      </h3>
                      {steps[activeStep].content}
                    </div>

                    {/* Timeline Table Integration for relevant steps or as a global footer */}
                    {activeStep === 4 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 pt-12 border-t border-white/5"
                      >
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Service Level Timelines</h4>
                        <div className="border border-white/10 rounded-2xl overflow-hidden">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-white/5 text-white/40">
                              <tr>
                                <th className="px-6 py-4 font-bold uppercase tracking-widest">Action</th>
                                <th className="px-6 py-4 font-bold uppercase tracking-widest">Expectation</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-white/60">
                              <tr>
                                <td className="px-6 py-4">Job Posted</td>
                                <td className="px-6 py-4 text-[#99ff66]">Within 24 Hours</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4">First Screening List</td>
                                <td className="px-6 py-4 text-[#99ff66]">24 - 48 Hours</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4">Interview Lineup</td>
                                <td className="px-6 py-4 text-[#99ff66]">24 - 48 Hours</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Footer Navigation */}
            <div className="p-6 md:px-12 border-t border-white/5 flex items-center justify-between shrink-0 bg-black">
              <div className="flex items-center gap-6 text-[10px] font-mono text-white/20 uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Version 2.4
                </span>
                <span className="hidden md:inline">• Internal Document</span>
              </div>
              <div className="flex gap-4">
                {activeStep > 0 && (
                  <button 
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="px-6 py-3 rounded-xl border border-white/10 text-white/60 text-[11px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                  >
                    Back
                  </button>
                )}
                {activeStep < steps.length - 1 ? (
                  <button 
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="px-6 py-3 rounded-xl bg-[#99ff66] text-black text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2"
                  >
                    Next Step <ArrowRight className="w-3 h-3" />
                  </button>
                ) : (
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all"
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
