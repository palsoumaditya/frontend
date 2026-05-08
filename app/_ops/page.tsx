import OpsHero from "../../components/OpsHero";
import { OpsCTA } from "../../components/OpsCTA";
import { OpsStoryboard } from "../../components/OpsStoryboard";
import { Footer } from "../../components/Footer";

export default function OpsPage() {
  return (
    <main className="min-h-screen bg-background">
      <OpsHero />
      <OpsStoryboard />
      <OpsCTA />
      <Footer hideCTA={true} />
    </main>
  );
}
