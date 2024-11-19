import { applicationAreas } from "@/data/siteData";
import { applicationServices } from "@/data/siteData";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import applications from "@/assets/applications/custom-websites.jpg";
import CTA from "@/components/cta";
import { Lato } from "next/font/google";
import ContactForm from "@/features/contact-form";
import { Metadata } from "next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Custom Web Applications | The Web Architech",
  description:
    "Tailored web application development services for your business needs. From concept to deployment, we create flexible, future-proof systems to help your business grow.",
  keywords: [
    "custom web applications",
    "business software",
    "web development",
    "TheWebArchitech",
    "tailored software solutions",
  ],
};

export default async function WebApplicationsPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <section aria-labelledby="hero-heading">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-y-2">
              <h1
                id="hero-heading"
                className="text-balance text-4xl font-semibold sm:text-6xl"
              >
                <span className="heading-gradient">Custom</span> applications
                for your business needs
              </h1>

              <div className="w-[90%] text-slate-300">
                <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                  Whether you&apos;re starting from scratch or need help getting
                  things back on track, I’ve got you covered!
                </p>
                <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                  With custom software development, I’ll build software tailored
                  exactly to your business needs from the ground up.
                </p>
              </div>
              <CTA className="ml-0 mt-8 flex py-3 md:text-lg" />
            </div>
            <div className="hero-image glass-container flex-1">
              <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
              <Image
                src={applications}
                alt="custom-website"
                height={300}
                width={650}
                className="rounded-lg max-lg:w-[1000px]"
              />
            </div>
          </div>
        </section>
      </div>
      <section
        aria-labelledby="services-heading"
        className="mx-auto mt-20 flex w-full flex-col items-center gap-y-4 lg:mt-40"
      >
        <div
          className={`${lato.className} flex items-center gap-x-2 text-sm uppercase tracking-wider`}
        >
          <hr className="w-4" /> Turn your vision into reality{" "}
          <hr className="w-4" />
        </div>
        <h2 className="font text-center text-4xl font-semibold">
          Custom Web Application Services
        </h2>
        <p className="prose prose-invert mt-2 w-3/4 text-center text-lg md:text-xl">
          Let’s work together to make your software work for you! Whether you
          need to build something new or improve and upgrade your current
          software, I&apos;ve got you covered.
        </p>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-16 transition-all md:grid-cols-2 lg:grid-cols-3">
          {applicationAreas.map((item) => (
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
        aria-labelledby="commitment-heading"
        className="mx-auto mt-20 flex w-full flex-col items-center gap-y-4 lg:mt-28"
      >
        <div
          className={`${lato.className} flex items-center gap-x-2 text-sm uppercase tracking-wider`}
        >
          <hr className="w-4" /> Dedicated to your success{" "}
          <hr className="w-4" />
        </div>
        <h2 className="font text-center text-4xl font-semibold">
          Work with a guy committed to your business needs
        </h2>
        <p className="prose prose-invert mt-2 w-3/4 text-center text-lg md:text-xl">
          I’m excited to build a flexible, future-proof system to help your
          business grow and reach its full potential!
        </p>
        <div className="mt-12 grid grid-cols-1 gap-10 transition-all md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {applicationServices.map((item) => (
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
      <div className="mx-auto mt-10 w-full">
        <ContactForm title="Let’s Create Your Perfect Custom Web App!" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Custom Web Applications | The Web Architech",
            description:
              "Tailored web application development services for your business needs. From concept to deployment, we create flexible, future-proof systems to help your business grow.",
            url: "https://www.thewebarchitech.com/web-applications",
            mainEntity: {
              "@type": "Service",
              name: "Custom Web Application Development",
              provider: {
                "@type": "Organization",
                name: "The Web Architech",
                url: "https://www.thewebarchitech.com",
              },
              serviceType: "Web Development",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              description:
                "Tailored web application development services for businesses of all sizes. We create custom, scalable, and user-friendly web applications to meet your specific needs.",
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
