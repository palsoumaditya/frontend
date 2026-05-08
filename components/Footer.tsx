"use client";

import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/registry/magicui/interactive-hover-button";

interface FooterProps {
  hideCTA?: boolean;
}

export function Footer({ hideCTA = false }: FooterProps) {
  return (
    <footer className="py-24 px-4 bg-background">
      <div className="max-w-[1152px] mx-auto">
        {!hideCTA && (
          <div
            className={cn(
              "relative flex flex-col items-center justify-center overflow-hidden rounded-[3rem] p-12 md:p-24 text-center transition-all duration-500 mb-12",
              "bg-[#0a0a0a] border border-neutral-800"
            )}
          >
            <span className="text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase mb-8 font-bebas">
              Open the role
            </span>

            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.95] tracking-tighter uppercase font-bebas">
              Open the role. <br />
              <span className="text-[#99ff66] italic">Skip</span> the rest.
            </h2>

            <p className="max-w-xl font-archivo text-neutral-400 text-sm md:text-base leading-relaxed mb-12">
              Run /newjd in Slack. Draft today. Shortlist this week.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <InteractiveHoverButton className="bg-[#99ff66] text-black border-none px-10 py-5 text-[11px] font-bold uppercase tracking-widest font-bebas shadow-xl">
                Run /newjd in Slack
              </InteractiveHoverButton>
              <InteractiveHoverButton className="bg-transparent text-white border-white/20 px-10 py-5 text-[11px] font-bold uppercase tracking-widest font-bebas shadow-xl hover:bg-white/5">
                Open the Hiring Hub
              </InteractiveHoverButton>
            </div>
          </div>
        )}

        <div className={cn(
          "w-full pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6",
          hideCTA && "border-t-0 pt-0"
        )}>
          <div className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase font-bebas">
            PLUMB / BUILT INSIDE EMERGENCE SOFTWARE / 2026
          </div>

          <div className="flex items-center gap-8">
            {["FOR HMS"].map((link) => (
              <a
                key={link}
                href="/manager"
                className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground hover:text-[#99ff66] transition-colors font-bebas"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase font-bebas">
            Plumb. The hiring engine that does not sleep.
          </p>
        </div>
      </div>
    </footer>
  );
}

