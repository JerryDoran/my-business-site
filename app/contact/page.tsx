import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import build from "@/assets/build.jpg";
import CTA from "@/components/cta";
import { Lato } from "next/font/google";
import ContactForm from "@/features/contact-form";

export default async function ContactPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
          <div className="flex flex-1 flex-col gap-y-2 max-lg:items-center max-lg:text-center">
            <h1 className="text-balance text-4xl font-semibold sm:text-6xl">
              Let&apos;s <span className="heading-gradient">Build</span>{" "}
              Something Great Together
            </h1>

            <div className="w-3/4 text-slate-300">
              <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                Ready to bring your vision to life? Whether you’re looking to
                elevate your business with a new website or need answers before
                making your next move, I’m here to help. Drop me a message
                below, and let’s start creating something amazing!
              </p>
            </div>
            {/* <CTA className="ml-0 mt-8 flex py-3 md:text-lg" /> */}
          </div>
          <div className="hero-image glass-container flex-1">
            <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
            <Image
              src={build}
              alt="custom-website"
              height={300}
              width={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full">
        <ContactForm title="Ready to get the website your business deserves?" />
      </div>
    </Bounded>
  );
}
