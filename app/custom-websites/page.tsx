import { customWebsites } from "@/data/siteData";
import { coreWebServices } from "@/data/siteData";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import custom from "@/assets/custom.jpg";
import CTA from "@/components/cta";
import { Lato } from "next/font/google";
import ContactForm from "@/features/contact-form";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export default async function CustomWebsitesPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
          <div className="flex flex-1 flex-col gap-y-2 max-lg:items-center max-lg:text-center">
            <h1 className="text-balance text-4xl font-semibold sm:text-6xl">
              <span className="heading-gradient">Design</span> Your Digital
              Brand
            </h1>

            <div className="w-[90%] text-slate-300">
              <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                I craft custom websites and optimize leading CMS platforms to
                bring your vision to life.
              </p>
              <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                Take complete control over your site&apos;s design, user
                experience, and functionality.
              </p>
            </div>
            <CTA className="ml-0 mt-8 flex py-3 md:text-lg" />
          </div>
          <div className="hero-image glass-container flex-1">
            <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
            <Image
              src={custom}
              alt="custom-website"
              height={300}
              width={650}
              className="h-auto w-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex w-full flex-col items-center gap-y-4 lg:mt-40">
        <div
          className={`${lato.className} flex items-center gap-x-2 text-sm uppercase tracking-wider`}
        >
          <hr className="w-4" /> Exceptional Digital Experiences{" "}
          <hr className="w-4" />
        </div>
        <h2 className="font text-center text-4xl font-semibold">
          Tailored Websites That Drive Engagement
        </h2>
        <p className="prose prose-invert mt-2 w-3/4 text-balance text-center text-lg md:text-xl">
          I create custom brand websites while implementing innovative features
          that enhance user interaction and boost your bottom line.
        </p>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-16 transition-all md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {customWebsites.map((item) => (
            <div
              className="mx-auto flex w-[300px] flex-col items-center gap-y-4 py-6 transition hover:scale-105 max-md:w-full"
              key={item.title}
            >
              <Image
                src={item.image}
                alt="custom website service"
                className="w-1/2"
              />
              <h2 className="text-center text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="prose prose-invert text-center text-lg text-gray-400">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-20 flex w-full flex-col items-center gap-y-4 lg:mt-28">
        <div
          className={`${lato.className} flex items-center gap-x-2 text-sm uppercase tracking-wider`}
        >
          <hr className="w-4" /> Core Web Development Services{" "}
          <hr className="w-4" />
        </div>
        <h2 className="font text-center text-4xl font-semibold">
          Build a conversion-centric website that keeps users coming back
        </h2>
        <p className="prose prose-invert mt-2 w-3/4 text-balance text-center text-lg md:text-xl">
          Expand your reach with a custom, mobile-friendly website that provides
          an excellent user experience.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-10 transition-all md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreWebServices.map((item) => (
            <div
              className="glass-container relative row-span-4 grid grid-rows-subgrid items-center gap-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-4 transition hover:scale-105"
              key={item.title}
            >
              <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
              <h2 className="text-center text-2xl font-semibold">
                {item.title}
              </h2>
              <Image
                src={item.image}
                alt="custom website service"
                className="m-auto w-12"
              />
              <p className="prose prose-invert text-center text-lg text-gray-400">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 w-full">
        <ContactForm title="Ready to get the website your business deserves?" />
      </div>
    </Bounded>
  );
}
