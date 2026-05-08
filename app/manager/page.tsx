import ManagerHero from "@/components/ManagerHero";
import { ManagerCTA } from "@/components/ManagerCTA";
import { ManagerPipeline } from "@/components/ManagerPipeline";
import { ManagerQuote } from "@/components/ManagerQuote";
import { ManagerFeatures } from "@/components/ManagerFeatures";
import { Footer } from "@/components/Footer";

export default function ManagerPage() {
  return (
    <main className="min-h-screen bg-background">
      <ManagerHero />
      <ManagerCTA />
      <ManagerPipeline />
      <ManagerQuote />
      <ManagerFeatures />
      <Footer />
    </main>
  );
}
