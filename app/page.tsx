import Hero from "@/components/Hero";
import { Pipeline } from "@/components/Pipeline";
import { CandidateEngine } from "@/components/CandidateEngine";
import { Features } from "@/components/Features";
import { Quotes } from "@/components/Quotes";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Pipeline />
      <CandidateEngine />
      <Features />
      <Quotes />
      <Stats />
      <Footer />
    </main>
  );
}
