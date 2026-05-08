"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: "1",
    title: "Resume parsing",
    description: "Instantly extracts relevant data from inbound CVs, standardizing formats for the scoring engine.",
  },
  {
    id: "2",
    title: "Role matching",
    description: "Aligns candidate skills and history directly against the specific parameters of your open req.",
  },
  {
    id: "3",
    title: "Live Scoring",
    description: "Assigns a 1-100 value in under a second (600-1100ms), continuously updating as new data arrives.",
  },
  {
    id: "4",
    title: "Smart Shortlisting",
    description: "Filters out sub-70 scores and automatically promotes the top 5 candidates to your review dashboard.",
  },
  {
    id: "5",
    title: "Automated Outreach",
    description: "Triggers communication to top-tier candidates to secure their interest while the lead is hot.",
  },
  {
    id: "6",
    title: "Pipeline Analytics",
    description: "Live counters show exactly how many resumes were scanned, filtered, and promoted in real time.",
  },
];

export function ManagerFeatures() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
            FEATURES DEEP-DIVE
          </p>
          <h2 className="text-5xl md:text-6xl font-header font-bold text-foreground mb-4">
            Powerful for Ops.
          </h2>
          <p className="text-4xl md:text-5xl font-subheader italic text-muted-foreground mb-8">
            so you can stop wondering.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Six core capabilities running in the background to orchestrate your pipeline.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-6"
            >
              {/* Feature Number */}
              <div className="text-6xl font-bold text-[#99ff66] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                {feature.id}
              </div>
              
              {/* Feature Text */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
