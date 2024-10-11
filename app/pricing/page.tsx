import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";

import ContactForm from "@/features/contact-form";
import BasicWebsiteCard from "./_components/basic-website";
import AdvancedWebsiteCard from "./_components/advanced-website";
import CustomAppCard from "./_components/custom-app";

export default async function PricingPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
          <div className="flex flex-1 flex-col gap-y-2 max-lg:items-center max-lg:text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-wide sm:text-5xl md:text-6xl">
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
      </div>
      <div className="mx-auto mt-4 flex w-full flex-col items-center gap-y-4 lg:mt-12">
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
      </div>
      <div className="mx-auto mt-10 w-full">
        <ContactForm title="Let’s Update your Website" />
      </div>
    </Bounded>
  );
}
