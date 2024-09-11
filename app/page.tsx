import ClientNeeds from "@/features/client-needs";
import Hero from "@/features/hero";
import Projects from "@/features/projects";
import Showcase from "@/features/showcase";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ClientNeeds />
      <Showcase />
      <Projects />
    </div>
  );
}
