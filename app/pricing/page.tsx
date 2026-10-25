import { Metadata } from "next";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import ContactForm from "@/features/contact-form";
import BasicWebsiteCard from "./_components/basic-website";
import AdvancedWebsiteCard from "./_components/advanced-website";
import CustomAppCard from "./_components/custom-app";

export const metadata: Metadata = {
  title: "Affordable Website Pricing | TheWebArchitech",
  description:
    "Explore our flexible and affordable website pricing plans. Choose from basic websites, advanced solutions, or custom web applications to suit your business needs.",
  keywords: [
    "website pricing",
    "affordable websites",
    "custom web applications",
    "TheWebArchitech",
    "web development costs",
  ],
};

export default async function PricingPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <section aria-labelledby="pricing-heading">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-y-2 max-lg:items-center max-lg:text-center">
              <h1
                id="pricing-heading"
                className="text-balance text-4xl font-semibold tracking-wide sm:text-5xl md:text-6xl"
              >
                <span className="heading-gradient">Affordable</span> Website
                Pricing
              </h1>

              <div className="w-3/4 text-slate-300">
                <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                  Choose a plan that works for your business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        aria-labelledby="plans-heading"
        className="mx-auto mt-4 flex w-full flex-col items-center gap-y-4 lg:mt-12"
      >
        <h2 id="plans-heading" className="sr-only">
          Our Pricing Plans
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 transition-all">
          <BasicWebsiteCard />
          <AdvancedWebsiteCard />
          <CustomAppCard />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl">
            Add-ons <span className="text-base">(Optional for all plans)</span>
          </h2>
          <ul className="ml-4 mt-4 flex list-disc flex-col gap-2 text-base text-neutral-300">
            <li>
              Ongoing website maintenance, hosting, domain management and
              updates: $30 - $50/month
            </li>
            <li>Additional pages: $100 per page</li>
            <li>Custom logo design: $100+</li>
          </ul>
          <p className="mt-4">
            *These pricing tiers provide flexibility for clients with different
            needs and ensure they understand the value at each level. Does this
            match your vision?
          </p>
        </div>
      </section>
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto mt-10 w-full"
      >
        <h2 id="contact-form-heading" className="sr-only">
          Contact Us
        </h2>
        <ContactForm title="Let's Update your Website" />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            name: "TheWebArchitech Website Pricing",
            description:
              "Flexible and affordable website pricing plans for businesses of all sizes.",
            url: "https://www.thewebarchitech.com/pricing",
            priceCurrency: "USD",
            minPrice: "500",
            maxPrice: "10000",
            offers: [
              {
                "@type": "Offer",
                name: "Basic Website",
                description:
                  "Simple, professional website for small businesses",
                price: "500",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Advanced Website",
                description: "Feature-rich website for growing businesses",
                price: "1500",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Custom Web Application",
                description:
                  "Tailored web application for specific business needs",
                price: "5000",
                priceCurrency: "USD",
              },
            ],
          }),
        }}
      />
    </Bounded>
  );
}
