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
            <span className="text-[10px] font-subtext font-bold tracking-[0.3em] text-neutral-500 uppercase mb-8">
              Open the role
            </span>

            <h2 className="text-5xl md:text-7xl font-header font-bold text-white mb-8 leading-tight">
              Open the role. <br />
              <span className="text-[#99ff66] italic">Skip</span> the rest.
            </h2>

            <p className="max-w-xl font-subtext text-neutral-400 text-sm md:text-base leading-relaxed mb-12">
              Run /newjd in Slack. Draft today. Shortlist this week.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <InteractiveHoverButton className="bg-[#99ff66] text-black border-none font-subheader">
                Run /newjd in Slack
              </InteractiveHoverButton>
              <InteractiveHoverButton className="bg-transparent text-white border-white/20 font-subheader">
                Open the Hiring Hub
              </InteractiveHoverButton>
            </div>
          </div>
        )}

        <div className={cn(
          "w-full pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6",
          hideCTA && "border-t-0 pt-0"
        )}>
          <div className="text-[10px] font-subtext font-bold tracking-[0.1em] text-muted-foreground uppercase">
            PLUMB / BUILT INSIDE EMERGENCE SOFTWARE / 2026
          </div>

          <div className="flex items-center gap-8">
            {["HOW IT WORKS", "FOR HMS", "FOR OPS", "CONTACT"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-subtext font-bold tracking-[0.1em] text-muted-foreground hover:text-[#99ff66] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-[10px] font-subtext font-bold tracking-[0.2em] text-neutral-500 uppercase">
            Plumb. The hiring engine that does not sleep.
          </p>
        </div>
      </div>
    </footer>
  );
}

