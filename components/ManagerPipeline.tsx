"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const pipelineSteps = [
  {
    id: "01",
    title: "Sourcing",
    description: "Resume parsing and role matching algorithms ingest candidate data instantly.",
    yourPart: "Define the role",
    badge: "AI parsing",
  },
  {
    id: "02",
    title: "Live Scoring",
    description: "Scores update in real time: Score <70 = filtered (red), 70-84 = neutral (yellow), ≥85 = promoted (green).",
    yourPart: "Watch it run",
    badge: "600-1100ms",
  },
  {
    id: "03",
    title: "Shortlisting",
    description: "Review the top 5 candidates by score, ranked 01-05, complete with color-coded initials and detailed metrics.",
    yourPart: "Review the best",
    badge: "Top 5",
  },
  {
    id: "04",
    title: "Ready & Outreach",
    description: "Automated outreach connects with top candidates instantly while built-in analytics measure your pipeline health.",
    yourPart: "Meet the candidates",
    badge: "Automated",
  },
];

export function ManagerPipeline() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto border-t border-border pt-12">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
            HOW IT WORKS
          </p>
          <h2 className="text-6xl md:text-7xl font-header font-bold text-foreground mb-4">
            Less time.
          </h2>
          <p className="text-4xl md:text-5xl font-subheader italic text-muted-foreground leading-tight mb-8">
            Live AI-powered candidate scoring.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Candidates enter the pipeline, get automatically scored and ranked, and top performers bubble to the surface—all in real time.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          {pipelineSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className={cn(
                "flex flex-col md:flex-row items-start md:items-center gap-8 p-8 md:p-12 rounded-[2rem] transition-all duration-300 border border-transparent",
                "hover:bg-[#99ff66]/5 dark:hover:bg-[#99ff66]/10 hover:border-[#99ff66]/20"
              )}>
                {/* Number */}
                <div className="text-2xl font-mono font-bold text-[#99ff66] shrink-0">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-header font-bold text-foreground">
                    {step.title}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                    <p className="text-sm font-bold tracking-tight text-foreground/80">
                      <span className="text-muted-foreground font-medium">Your part:</span> {step.yourPart}
                    </p>
                  </div>
                </div>

                {/* Badge */}
                <div className="shrink-0">
                  <div className="bg-[#99ff66] text-black px-6 py-2 rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] font-mono text-xs font-bold whitespace-nowrap">
                    {step.badge}
                  </div>
                </div>
              </div>
              
              {/* Divider (visible when not hovered) */}
              {idx !== pipelineSteps.length - 1 && (
                <div className="absolute -bottom-2 left-12 right-12 h-px bg-border group-hover:opacity-0 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
