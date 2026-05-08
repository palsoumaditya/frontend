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
            <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-500 uppercase mb-8">
              CONVERSION
            </span>
            
            <h2 className="text-5xl md:text-7xl font-pt-serif font-bold text-white mb-8 leading-tight">
              Start screening smarter <br />
              <span className="text-[#99ff66]">today</span>
            </h2>
            
            <p className="max-w-xl text-neutral-400 text-sm md:text-base leading-relaxed mb-12">
              Plumb is in active deployment across teams hiring engineers, operators, and leadership. The fastest way to know if this fits is to see the engine in action.
            </p>
            
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-10">
              NO CREDIT CARD REQUIRED · 14-DAY FREE TRIAL
            </span>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <InteractiveHoverButton className="bg-transparent text-[#99ff66] border-[#99ff66]/30">
                Start free
              </InteractiveHoverButton>
              <InteractiveHoverButton className="bg-white text-black border-white">
                Request demo
              </InteractiveHoverButton>
            </div>
          </div>
        )}

        <div className={cn(
          "w-full pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6",
          hideCTA && "border-t-0 pt-0"
        )}>
          <div className="text-[10px] font-bold tracking-[0.1em] text-muted-foreground uppercase">
            PLUMB / HIRING FUNNEL AUTOMATION / 2026
          </div>
          
          <div className="flex items-center gap-8">
            {["PLATFORM", "METHODOLOGY", "SECURITY", "CONTACT"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-bold tracking-[0.1em] text-muted-foreground hover:text-[#99ff66] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

