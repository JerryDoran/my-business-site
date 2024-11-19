import Benefits from "@/features/benefits";
import ClientNeeds from "@/features/client-needs";
import ContactForm from "@/features/contact-form";
import FAQ from "@/features/faq";
import Hero from "@/features/hero";
import Projects from "@/features/projects";
import Showcase from "@/features/showcase";
import Social from "@/features/social";
import Testimonials from "@/features/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "The Web Architech | Web Development & Digital Marketing",
    template: "%s | The Web Architech",
  },
  description:
    "Professional website design, fullstack development, digital marketing, and custom software applications for small to medium size businesses.",
  keywords: [
    "website design",
    "fullstack development",
    "digital marketing",
    "custom software",
    "web development",
  ],
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Professional Web Development & Digital Marketing Services",
            description:
              "Expert website design, fullstack development, and digital marketing solutions tailored for your business needs. Boost your online presence with our custom software applications.",
            url: "https://www.thewebarchitech.com",
            mainEntity: [
              {
                "@type": "Service",
                name: "Web Development",
                description: "Custom website design and development services",
                provider: {
                  "@type": "Organization",
                  name: "The Web Architech",
                },
              },
              {
                "@type": "Service",
                name: "Digital Marketing",
                description: "Comprehensive digital marketing solutions",
                provider: {
                  "@type": "Organization",
                  name: "The Web Architech",
                },
              },
              {
                "@type": "Service",
                name: "Custom Software Development",
                description:
                  "Tailored software applications for your business needs",
                provider: {
                  "@type": "Organization",
                  name: "The Web Architech",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
