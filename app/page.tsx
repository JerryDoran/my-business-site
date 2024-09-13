import Benefits from "@/features/benefits";
import ClientNeeds from "@/features/client-needs";
import FAQ from "@/features/faq";
import Hero from "@/features/hero";
import Projects from "@/features/projects";
import Showcase from "@/features/showcase";
import Social from "@/features/social";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ClientNeeds />
      <Showcase />
      <Projects />
      <Benefits />
      <FAQ />
      <Social />
    </div>
  );
}
