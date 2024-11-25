import { Metadata } from "next";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import ContactForm from "@/features/contact-form";
import CTA from "@/components/cta";
import support from "@/assets/support/support-tech.jpg";
import { Lato } from "next/font/google";
import { supportAreas, supportServices } from "@/data/siteData";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Support & Maintenance | TheWebArchitech",
  description:
    "Keep your website running smoothly with our comprehensive support and maintenance services. We handle updates, security, and performance so you can focus on growing your business online.",
  keywords: [
    "website support",
    "web maintenance services",
    "website updates",
    "security and performance optimization",
    "small business website support",
    "TheWebArchitech support",
  ],
};
export default async function SupportPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <section aria-labelledby="hero-heading">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-y-2">
              <h1 className="text-balance text-4xl font-semibold sm:text-6xl">
                <span className="heading-gradient">Supporting</span> Your
                Business Needs
              </h1>

              <div className="w-[90%] text-slate-300">
                <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                  Offering support and maintenance ensures your site stays
                  secure, updated, and optimized, providing peace of mind while
                  you focus on your business..
                </p>
                <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                  I handle your website&apos;s updates, security, and
                  performance so you can focus on growing your business.
                </p>
              </div>
              <CTA className="ml-0 mt-8 flex py-3 md:text-lg" />
            </div>
            <div className="hero-image glass-container flex-1">
              <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
              <Image
                src={support}
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
          <hr className="w-4" /> Keeping You Online <hr className="w-4" />
        </div>
        <h2 className="font text-center text-4xl font-semibold">
          Website Maintenance That Keeps You&apos;re Website Running
        </h2>
        <p className="prose prose-invert mt-2 w-3/4 text-balance text-center text-lg md:text-xl">
          I provide reliable support and maintenance services, ensuring your
          website stays secure, up-to-date, and running smoothly to help your
          business thrive.
        </p>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-16 transition-all md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {supportAreas.map((item) => (
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
          <hr className="w-4" /> Core Website Support Services{" "}
          <hr className="w-4" />
        </div>
        <h2 className="font text-center text-4xl font-semibold">
          Genuine Commitment to Reliable Website Support
        </h2>
        <p className="prose prose-invert mt-2 w-3/4 text-balance text-center text-lg md:text-xl">
          I deliver dependable, proactive website support to keep your business
          online and thriving, with a focus on quality and care.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-10 transition-all md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {supportServices.map((item) => (
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
        <ContactForm title="I'm committed to servicing your site's needs" />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Support & Maintenance | Reliable Website Care | TheWebArchitech",
            description:
              "Ensure your website stays secure, updated, and optimized with our support and maintenance services. Let us handle the technical details so you can focus on your business.",
            url: "https://www.thewebarchitech.com/support",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Website Updates",
                  description:
                    "Regular updates to keep your website secure and up-to-date.",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Performance Optimization",
                  description:
                    "Enhancing your website's speed and functionality for a better user experience.",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Technical Support",
                  description:
                    "Assistance with troubleshooting and resolving website issues.",
                },
              ],
            },
            offers: {
              "@type": "Offer",
              description:
                "Professional support and maintenance services for small business websites.",
              url: "https://www.thewebarchitech.com/contact",
            },
            provider: {
              "@type": "Organization",
              name: "TheWebArchitech",
              url: "https://www.thewebarchitech.com",
            },
          }),
        }}
      />
    </Bounded>
  );
}
