import ManagerHero from "@/components/ManagerHero";
import { ManagerCTA } from "@/components/ManagerCTA";
import { ManagerStoryboard } from "@/components/ManagerStoryboard";
import { ManagerQuote } from "@/components/ManagerQuote";
import { Footer } from "@/components/Footer";

export default function ManagerPage() {
  return (
    <main className="min-h-screen bg-background">
      <ManagerHero />
      <ManagerStoryboard />
      <ManagerQuote />
      <ManagerCTA />
      <Footer hideCTA={true} />
    </main>

  );
}

