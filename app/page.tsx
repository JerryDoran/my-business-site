import Benefits from "@/features/benefits";
import ClientNeeds from "@/features/client-needs";
import ContactForm from "@/features/contact-form";
import FAQ from "@/features/faq";
import Hero from "@/features/hero";
import Projects from "@/features/projects";
import Showcase from "@/features/showcase";
import Social from "@/features/social";
import Testimonials from "@/features/testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ClientNeeds />
      <Showcase />
      <Projects />
      <Benefits />
      <FAQ />
      <Testimonials />
      <ContactForm
        title="Let’s kick off a chat about your website project!"
        className="mx-auto mb-16 max-w-7xl px-6"
      />
      <Social />
    </div>
  );
}
