import { SiBasicattentiontoken } from "react-icons/si";
import { GiAtomicSlashes } from "react-icons/gi";

import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";

import ContactForm from "@/features/contact-form";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Link from "next/link";

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
        <div className="mt-12 grid gap-10 transition-all md:grid-cols-2 lg:grid-cols-3">
          {/* Pricing Card */}
          <div className="glass-container w-auto rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-6 text-center">
            <div className="flex flex-col items-center gap-y-4">
              <SiBasicattentiontoken className="size-10 text-center" />
              <h1 className="text-3xl font-semibold tracking-wide text-neutral-200">
                Basic Website
              </h1>
              <p className="text-sm italic text-neutral-400">
                For businesses needing an online presence
              </p>
            </div>

            <hr className="mt-4 border-neutral-700" />
            <div className="pt-8">
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Beautifully Designed Website
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Up to 5 pages
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Responsive design (mobile-friendly)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Basic SEO (Search Engine Optimization)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Social media links
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Basic website hosting setup (with guidance)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />2 revisions after launch
              </p>
            </div>
            <hr className="mt-8 border-neutral-700" />
            <p className="mt-4 text-center text-sm text-neutral-500">
              Up to 5 pages (Home, About, Services, Contact, etc.) $50 per
              additional website page
            </p>
            <p className="mb-8 pt-4">
              <span className="text-3xl font-semibold text-neutral-100">
                $500 - $1000
              </span>
            </p>
            <div className=""></div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400 px-4 py-2 transition hover:opacity-90"
            >
              Choose Plan
              <FaArrowRight />
            </Link>
          </div>
          {/* Pricing Card */}
          <div className="glass-container relative w-auto rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-6 text-center">
            <div className="flex flex-col items-center gap-y-4">
              <GiAtomicSlashes className="size-10 text-center" />
              <h1 className="text-3xl font-semibold tracking-wide text-neutral-200">
                Advanced Website
              </h1>
              <span className="rounded-full bg-gradient-to-br from-indigo-900 to-indigo-400 px-3 py-1 text-sm font-semibold text-white">
                Popular
              </span>
              <p className="text-sm italic text-neutral-400">
                For businesses looking to grow with a more dynamic and
                interactive site.
              </p>
            </div>

            <hr className="mt-4 border-neutral-700" />
            <div className="pt-8">
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Beautifully Designed Website
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Up to 5 pages
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Responsive design (mobile-friendly)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Basic SEO (Search Engine Optimization)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Social media links
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Basic website hosting setup (with guidance)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />2 revisions after launch
              </p>
            </div>
            <hr className="mt-8 border-neutral-700" />
            <p className="mt-4 text-center text-sm text-neutral-500">
              Up to 5 pages (Home, About, Services, Contact, etc.) $50 per
              additional website page
            </p>
            <p className="mb-8 pt-4">
              <span className="text-3xl font-semibold text-neutral-100">
                $500 - $1000
              </span>
            </p>
            <div className=""></div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400 px-4 py-2 transition hover:opacity-90"
            >
              Choose Plan
              <FaArrowRight />
            </Link>
          </div>
          {/* Pricing Card */}
          <div className="glass-container w-auto rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-6 text-center">
            <div className="flex flex-col items-center gap-y-4">
              <SiBasicattentiontoken className="size-10 text-center" />
              <h1 className="text-3xl font-semibold tracking-wide text-neutral-200">
                Basic Website
              </h1>
              <p className="text-sm italic text-neutral-400">
                For businesses needing an online presence
              </p>
            </div>

            <hr className="mt-4 border-neutral-700" />
            <div className="pt-8">
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Beautifully Designed Website
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Up to 5 pages
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Responsive design (mobile-friendly)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Basic SEO (Search Engine Optimization)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Social media links
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />
                Basic website hosting setup (with guidance)
              </p>
              <p className="flex items-center gap-2 py-2 text-sm font-semibold">
                <FaCheck className="text-indigo-500" />2 revisions after launch
              </p>
            </div>
            <hr className="mt-8 border-neutral-700" />
            <p className="mt-4 text-center text-sm text-neutral-500">
              Up to 5 pages (Home, About, Services, Contact, etc.) $50 per
              additional website page
            </p>
            <p className="mb-8 pt-4">
              <span className="text-3xl font-semibold text-neutral-100">
                $500 - $1000
              </span>
            </p>
            <div className=""></div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400 px-4 py-2 transition hover:opacity-90"
            >
              Choose Plan
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full">
        <ContactForm title="Let’s Update your Website" />
      </div>
    </Bounded>
  );
}
