"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const scenes = [
  {
    id: "hm-pain",
    num: "01",
    title: "The Old Way Ate Your Week.",
    copy: "Writing the JD twice. Begging for resumes on a Sunday. Skimming hundreds of profiles with no shared rubric. The old loop ate your week and still came up short. Plumb rebuilt the loop. The noisy parts disappear. The parts that need a human get more room.",
    buildNotes: "Layout: split frame with a 'Before. After.' small caps caption. Left is a low-speed Marquee of mock candidate cards; right is a focused profile.",
    beforeCards: ["Candidate #412", "Resume.pdf", "LinkedIn Profile", "Screening Notes", "Follow up?"],
  },
  {
    id: "hm-newjd",
    num: "02",
    title: "It Starts With One Slack Command.",
    copy: "Open Slack. Type /newjd. A short form appears. Eight fields: your email, role title, company, seniority, location, salary range, responsibilities, must-haves. Fill it like you are texting a teammate. That is the heaviest lift you will do all week. Within hours a polished JD draft lands in your DM, in your company voice, ready for edits.",
    cta: "See the eight fields",
  },
  {
    id: "hm-draft",
    num: "03",
    title: "We Draft. You Stay The Editor.",
    copy: "The first draft is on us. It reads like you wrote it on your best day. Three options sit beneath: Revise, Reject, Create Doc and Proceed. Revise once, twice, ten times. Plumb adapts. Approve, and a clean Google Doc opens. Polish the last line, click Initiate Hiring Process, and the funnel opens.",
    cta: "See a sample JD draft",
  },
  {
    id: "hm-candidates",
    num: "04",
    title: "Candidates Show Up Ready For You.",
    copy: "A day or two later, candidates are already graded against your role. Not a generic rubric. Your must-haves, your level, your bar. Every profile gets the 3H litmus test: Hungry, Humble, High Standards. A recruiter reviews the top of the stack first. You get any number of candidates you desire in Slack, each as a one-page profile: snapshot, top achievement, watch-fors, fit score, LinkedIn, resume. No PDFs. No tabs to chase. One page, one decision.",
    cta: "Preview a sample one-pager",
  },
  {
    id: "hm-decisions",
    num: "05",
    title: "Yes. Hold. Reject. Move On.",
    copy: "You get a clean link in Slack. Open it between meetings. Each candidate is one page. Tap Proceed, Hold, or Reject. The next one slides in. The whole batch takes 20 minutes. Submit, and recruitment sequences every Proceed for interviews the same day. No PDFs. No spreadsheets. No guessing.",
    cta: "Preview a sample shortlist link",
  },
  {
    id: "hm-promise",
    num: "06",
    title: "Days, Not Weeks.",
    copy: "Most roles go from /newjd to a real shortlist inside a week. Some inside three days. You compress the boring middle. You keep the parts that matter: writing a great JD, meeting great people, making the call. Your interview calendar is already filling. Less hiring. More hires.",
    cta: "Or skim the Hiring Manager SOP",
  },
];

export function ManagerStoryboard() {
  return (
    <div className="bg-background">
      {scenes.map((scene, idx) => (
        <section 
          key={scene.id} 
          id={scene.id}
          className="py-24 lg:py-32 px-4 border-t border-border/50 first:border-t-0"
        >
          <div className="max-w-[1152px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="font-mono text-sm text-[#99ff66] font-bold tracking-widest">
                {scene.num}
              </div>
              <h2 className="text-5xl lg:text-6xl font-pt-serif font-bold text-foreground leading-tight">
                {scene.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-geist">
                {scene.copy}
              </p>
              {scene.cta && (
                <button className="text-foreground font-medium flex items-center gap-2 group underline underline-offset-4 decoration-border hover:decoration-[#99ff66] transition-all">
                  {scene.cta}
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </button>
              )}
            </motion.div>

            {/* Visual Side (Mocks) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8"
            >
              {/* Scene Specific Visuals */}
              {scene.id === "hm-pain" && (
                <div className="w-full space-y-4">
                   <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-4 text-center">Before / After</div>
                   <div className="flex gap-4 h-48">
                      <div className="flex-1 opacity-30">
                        <Marquee vertical className="h-full" repeat={3}>
                          {scene.beforeCards?.map((card, i) => (
                            <div key={i} className="p-4 border border-border rounded-xl bg-muted/50 mb-4 text-xs font-mono">
                              {card}
                            </div>
                          ))}
                        </Marquee>
                      </div>
                      <div className="flex-[2] bg-background border-2 border-[#99ff66]/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(153,255,102,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 bg-[#99ff66]/10 text-[#66cc33] text-[10px] font-bold rounded-bl-lg">SCORING...</div>
                        <div className="space-y-3">
                          <div className="h-2 w-3/4 bg-muted rounded" />
                          <div className="h-2 w-1/2 bg-muted rounded" />
                          <div className="h-24 w-full bg-[#99ff66]/5 rounded-xl border border-[#99ff66]/20 mt-4 flex items-center justify-center">
                            <span className="text-[#99ff66] font-mono text-xl font-bold">87</span>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {scene.id === "hm-newjd" && (
                <div className="w-full max-w-sm space-y-4">
                  <div className="text-sm font-bold text-foreground mb-4">New role form</div>
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="h-10 bg-muted/50 border border-border rounded-lg flex items-center px-4">
                      <div className={cn("h-2 bg-muted-foreground/20 rounded", i % 2 === 0 ? "w-24" : "w-16")} />
                    </div>
                  ))}
                  <div className="h-10 bg-[#99ff66] rounded-lg mt-4 flex items-center justify-center text-black font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Submit to Slack
                  </div>
                </div>
              )}

              {scene.id === "hm-draft" && (
                <div className="w-full max-w-md bg-background border border-border rounded-xl p-8 shadow-sm space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-32 bg-muted rounded" />
                    <div className="bg-[#99ff66]/10 text-[#66cc33] text-[10px] font-bold px-2 py-1 rounded">DRAFT</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted/50 rounded" />
                    <div className="h-2 w-full bg-muted/50 rounded" />
                    <div className="h-2 w-3/4 bg-muted/50 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-8">
                    <div className="h-8 border border-border rounded flex items-center justify-center text-[10px] font-bold">REVISE</div>
                    <div className="h-8 border border-border rounded flex items-center justify-center text-[10px] font-bold">REJECT</div>
                    <div className="h-8 bg-[#99ff66] rounded flex items-center justify-center text-black text-[10px] font-bold">APPROVE</div>
                  </div>
                </div>
              )}

              {/* Placeholder for others to keep it brief but visible */}
              {!["hm-pain", "hm-newjd", "hm-draft"].includes(scene.id) && (
                <div className="text-muted-foreground/20 font-pt-serif italic text-4xl select-none uppercase tracking-widest">
                  Visual Mockup
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Mini SOP Section */}
      <section id="hm-sop" className="py-24 lg:py-32 px-4 bg-[#111111] text-white">
        <div className="max-w-[1152px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-pt-serif font-bold mb-4 text-[#99ff66]">Mini SOP.</h2>
            <p className="text-white/60 text-lg">What You Do Vs What We Handle</p>
          </div>
          
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 font-pt-serif text-xl border-r border-white/10">You</th>
                  <th className="p-6 font-pt-serif text-xl">We</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["Run /newjd in Slack and fill the eight-field form", "Draft your JD in your company voice within hours, sent to your DM"],
                  ["Tap Revise, Reject, or Create Doc and Proceed", "Iterate on revisions; generate a clean Google Doc on approve"],
                  ["Polish the Doc and click Initiate Hiring Process", "Open the funnel and start working the role inside 24 hours"],
                  ["Wait. Do your real job.", "System finds the right candidates for you"],
                  ["Open the shortlist link in Slack or Email", "A curated shortlist is shared for you to ponder upon"],
                  ["Tap Proceed, Hold, or Reject on each one-pager", "Decide on potential hires with a simple dropdown"],
                  ["Show up to interviews", "Short prep packs sent to help you find the right candidate"],
                  ["Submit the feedback link within 24 hours", "Share feedback to improve the system"],
                  ["Make the hire", "Close the loop and tidy up the rest"]
                ].map(([you, we], i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-sm text-white/80 border-r border-white/10 leading-relaxed">{you}</td>
                    <td className="p-6 text-sm text-white/80 leading-relaxed flex items-center justify-between group">
                      {we}
                      <span className="hidden group-hover:block text-[10px] font-bold text-[#99ff66] bg-[#99ff66]/10 px-2 py-0.5 rounded ml-4 whitespace-nowrap">
                        {i === 0 ? "HOURS" : i === 2 ? "24H" : "SAME DAY"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
