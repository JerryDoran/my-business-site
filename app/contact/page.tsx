import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import build from "@/assets/build.jpg";
import ContactForm from "@/features/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TheWebArchitech | Let's Build Your Dream Website",
  description:
    "Ready to elevate your business with a new website? Contact TheWebArchitech today and let's start creating something amazing for your online presence.",
  keywords: [
    "contact",
    "web development",
    "custom websites",
    "TheWebArchitech",
    "business websites",
  ],
};

export default async function ContactPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <section aria-labelledby="contact-heading">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-8">
            <div className="flex flex-1 flex-col gap-y-2">
              <h1 className="text-balance text-4xl font-semibold sm:text-6xl">
                Let&apos;s <span className="heading-gradient">Build</span>{" "}
                Something Great Together
              </h1>

              <div className="w-[90%] text-slate-300">
                <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                  Ready to bring your vision to life? Whether you’re looking to
                  elevate your business with a new website or need answers
                  before making your next move, I’m here to help. Drop me a
                  message below, and let’s start creating something amazing!
                </p>
              </div>
              {/* <CTA className="ml-0 mt-8 flex py-3 md:text-lg" /> */}
            </div>
            <div className="glass-container flex-1">
              <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
              <Image
                src={build}
                alt="custom-website"
                height={300}
                width={650}
                className="w-full rounded-lg max-lg:w-[1000px]"
              />
            </div>
          </div>
        </section>
      </div>
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto mt-10 w-full"
      >
        <ContactForm title="Ready to get the website your business deserves?" />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact The Web Architech",
            description:
              "Contact page for The Web Architech, offering custom web development services for businesses.",
            url: "https://www.thewebarchitech.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "The Web Architech",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
    </Bounded>
  );
}
