import { customWebsites } from "@/data/siteData";
import { coreWebServices } from "@/data/siteData";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import custom from "@/assets/custom.jpg";
import CTA from "@/components/cta";
import { Lato } from "next/font/google";
import ContactForm from "@/features/contact-form";
import { Metadata } from "next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Custom Websites | Design Your Digital Brand | TheWebArchitech",
  description:
    "Craft your unique online presence with TheWebArchitech. We create custom websites and optimize leading CMS platforms to bring your vision to life, ensuring complete control over design, user experience, and functionality.",
  keywords: [
    "custom websites",
    "web design",
    "digital brand",
    "CMS optimization",
    "user experience",
    "TheWebArchitech",
  ],
};

export default async function CustomWebsitesPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <section aria-labelledby="hero-heading">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-y-2">
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
                className="h-auto rounded-lg max-lg:w-[1000px]"
                priority
              />
            </div>
          </div>
        </section>
      </div>
      <section
        aria-labelledby="tailored-websites-heading"
        className="mx-auto mt-20 flex w-full flex-col items-center gap-y-4 lg:mt-40"
      >
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
      </section>
      <section
        aria-labelledby="core-services-heading"
        className="mx-auto mt-20 flex w-full flex-col items-center gap-y-4 lg:mt-28"
      >
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
      </section>
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
            "@type": "WebPage",
            name: "Custom Websites | Design Your Digital Brand | The Web Architech",
            description:
              "Craft your unique online presence with The Web Architech. I create custom websites and optimize leading CMS platforms to bring your vision to life, ensuring complete control over design, user experience, and functionality.",
            url: "https://www.thewebarchitech.com/custom-websites",
            mainEntity: {
              "@type": "Service",
              name: "Custom Website Design",
              provider: {
                "@type": "Organization",
                name: "The Web Architech",
                url: "https://www.thewebarchitech.com",
              },
              serviceType: "Web Design and Development",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              description:
                "Custom website design and development services tailored for businesses of all sizes. We create unique, engaging, and functional websites that drive user engagement and conversions.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: "1000.00",
                priceCurrency: "USD",
              },
            },
          }),
        }}
      />
    </Bounded>
  );
}
