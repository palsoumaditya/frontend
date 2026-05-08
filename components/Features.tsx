"use client";

import * as React from "react";
import { FileTextIcon, ActivityIcon, MailIcon, BarChart3Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/registry/magicui/bento-grid";
import { Marquee } from "@/registry/magicui/marquee";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { forwardRef, useRef } from "react";

const files = [
  {
    name: "senior_be_eng_brief.md",
    body: "Senior Backend Engineer. Expert in Node.js and distributed systems.",
  },
  {
    name: "backend_architect.docx",
    body: "Specialized in distributed systems, Go, and PostgreSQL. Reduced latency by 40%.",
  },
  {
    name: "product_designer.fig",
    body: "Expert in design systems and accessibility. Created award-winning user interfaces.",
  },
  {
    name: "data_scientist.pdf",
    body: "Ph.D. in Machine Learning. Implemented predictive models for high-volume trading.",
  },
];

// --- Animated List (Live AI Scoring) ---
const scoringNotifications = [
  { name: "Inbound batch scored", description: "Score: 92", time: "2m ago", icon: "✅", color: "#99ff66" },
  { name: "Outbound lead added", description: "Lead found", time: "5m ago", icon: "✅", color: "#00C9A7" },
  { name: "Inbound batch scored", description: "Score: 88", time: "10m ago", icon: "✅", color: "#99ff66" },
  { name: "Outbound lead added", description: "Lead found", time: "14m ago", icon: "✅", color: "#00C9A7" },
];

const expandedNotifications = Array.from({ length: 6 }, () => scoringNotifications).flat();

const ScoringItem = ({ name, description, icon, color, time }: typeof scoringNotifications[0]) => (
  <figure className={cn(
    "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-3",
    "transition-all duration-200 ease-in-out hover:scale-[102%]",
    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05)]",
    "dark:bg-neutral-900 dark:[border:1px_solid_rgba(255,255,255,.1)]",
  )}>
    <div className="flex flex-row items-center gap-3">
      <div className="flex size-8 items-center justify-center rounded-xl" style={{ backgroundColor: color }}>
        <span className="text-sm">{icon}</span>
      </div>
      <div className="flex flex-col overflow-hidden">
        <figcaption className="flex flex-row items-center whitespace-pre text-sm font-subheader font-medium dark:text-white">
          <span className="text-sm">{name}</span>
          <span className="mx-1">·</span>
          <span className="text-xs font-subtext text-gray-500">{time}</span>
        </figcaption>
        <p className="text-xs font-subtext font-normal text-neutral-500 dark:text-white/60">{description}</p>
      </div>
    </div>
  </figure>
);

// --- Animated Beam (Automated Outreach) ---
const BeamCircle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 items-center justify-center rounded-full border bg-white shadow-sm dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  )
);
BeamCircle.displayName = "BeamCircle";

const OutreachBeamViz = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 right-0 h-[65%] flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,#000_50%,transparent_100%)]"
    >
      <div className="flex size-full max-w-sm items-center justify-between px-10">
        <div className="flex flex-col gap-4">
          <BeamCircle ref={r1}><span className="text-xs font-bold text-blue-500">LI</span></BeamCircle>
          <BeamCircle ref={r2}><span className="text-xs font-bold text-sky-400">EM</span></BeamCircle>
          <BeamCircle ref={r3}><span className="text-xs font-bold text-green-500">GH</span></BeamCircle>
          <BeamCircle ref={r4}><span className="text-xs font-bold text-orange-400">IN</span></BeamCircle>
        </div>
        <BeamCircle ref={centerRef} className="size-14 border-2">
          <MailIcon className="h-5 w-5 text-neutral-600" />
        </BeamCircle>
      </div>
      <AnimatedBeam containerRef={containerRef} fromRef={r1} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={r2} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={r3} toRef={centerRef} />
      <AnimatedBeam containerRef={containerRef} fromRef={r4} toRef={centerRef} />
    </div>
  );
};

// --- Analytics bars (Analytics & Insights) ---
const AnalyticsBars = () => (
  <div className="absolute top-6 right-6 left-6 flex flex-col gap-2 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]">
    <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
      <span>Decisions logged</span>
      <span className="font-semibold text-neutral-700 dark:text-neutral-200">1,240</span>
    </div>
    {[80, 55, 90, 40, 70, 60].map((w, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="h-2 rounded-full bg-neutral-100 dark:bg-neutral-800" style={{ width: `${w}%` }} />
      </div>
    ))}
  </div>
);

const features = [
  {
    Icon: FileTextIcon,
    name: "Hours, back.",
    description: "Brief once in Slack. Skip the rewrite, the recruiter call, the resume pile. Get the week back.",
    href: "#how-it-works",
    cta: "How it works",
    className: "col-span-3 lg:col-span-1",
    hoverBorderColor: "hover:border-[#99ff66]/60",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-8 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] [--duration:25s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-36 cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-gray-200 bg-white/80 hover:bg-white",
              "dark:border-gray-700 dark:bg-neutral-800/80 dark:hover:bg-neutral-800",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out group-hover:blur-none"
            )}
          >
            <figcaption className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 truncate">{f.name}</figcaption>
            <blockquote className="mt-1 text-[10px] text-neutral-500 line-clamp-3">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: ActivityIcon,
    name: "Hidden talent, found.",
    description: "Plumb pulls from the channels that work for the role. Inbound and outbound, scored on one scale.",
    href: "#how-it-works",
    cta: "How it works",
    className: "col-span-3 lg:col-span-2",
    hoverBorderColor: "hover:border-[#99ff66]/60",
    background: (
      <div className="absolute top-6 right-4 left-4 h-[200px] overflow-hidden [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <AnimatedList delay={1500}>
          {expandedNotifications.map((item, idx) => (
            <ScoringItem {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    ),
  },
  {
    Icon: MailIcon,
    name: "Curated, not collected.",
    description: "Twenty to thirty names per batch, ranked. Proceed, Hold, Reject.",
    href: "#how-it-works",
    cta: "How it works",
    className: "col-span-3 lg:col-span-2",
    hoverBorderColor: "hover:border-[#99ff66]/60",
    background: <OutreachBeamViz />,
  },
  {
    Icon: BarChart3Icon,
    name: "Smarter every call.",
    description: "Every Yes and every No sharpens the next batch. The bar moves up.",
    className: "col-span-3 lg:col-span-1",
    href: "#how-it-works",
    cta: "How it works",
    hoverBorderColor: "hover:border-[#99ff66]/60",
    background: <AnalyticsBars />,
  },
];

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h3 className="text-sm font-subtext font-bold tracking-widest text-neutral-500 uppercase">
          Why teams keep it on
        </h3>
        <h2 className="mt-4 text-3xl md:text-4xl font-header font-bold text-neutral-900 dark:text-white">
          Four jobs Plumb does <br />
          <span className="text-neutral-400 italic">so you do not have to.</span>
        </h2>
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
