import Hero from "@/components/Hero";
import { Pipeline } from "@/components/Pipeline";
import { CandidateEngine } from "@/components/CandidateEngine";
import { Features } from "@/components/Features";
import { Quotes } from "@/components/Quotes";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-4">
    <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Divider />
      <Pipeline />
      <Divider />
      <CandidateEngine />
      <Divider />
      <Features />
      <Divider />
      <Quotes />
      <Divider />
      <Stats />
      <Divider />
      <Footer />
    </main>
  );
}
