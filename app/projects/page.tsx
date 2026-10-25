import { Metadata } from "next";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import projects from "@/assets/projects.jpg";
import ContactForm from "@/features/contact-form";
import AllProjects from "@/features/all-projects";

export const metadata: Metadata = {
  title: "Projects | Helping Small Businesses Shine Online | TheWebArchitech",
  description:
    "Explore our portfolio of custom websites and web applications designed to help small businesses succeed online. From simple sites to advanced solutions, we bring your ideas to life.",
  keywords: [
    "web development projects",
    "small business websites",
    "custom web applications",
    "TheWebArchitech portfolio",
  ],
};

export default async function ProjectsPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <section aria-labelledby="hero-heading">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-2">
            <div className="flex flex-1 flex-col gap-y-2 max-lg:items-center">
              <h1
                id="hero-heading"
                className="text-balance text-4xl font-semibold sm:text-6xl"
              >
                Helping Small Businesses{" "}
                <span className="heading-gradient">Shine</span> Online
              </h1>

              <div className="text-slate-300">
                <p className="prose prose-invert mt-4 w-[90%] text-xl md:text-2xl">
                  Hi, I&apos;m Jerry, a web developer committed to helping small
                  businesses succeed through custom, modern websites and
                  applications. Whether you need a simple site to establish your
                  online presence or something more advanced, I&apos;m here to
                  bring your ideas to life.
                </p>
              </div>
            </div>
            <div className="hero-image glass-container flex-1">
              <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
              <Image
                src={projects}
                alt="Showcase of custom websites for small businesses"
                height={300}
                width={650}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
      <section aria-labelledby="projects-heading" className="mt-40 max-lg:mt-0">
        <h2 id="projects-heading" className="sr-only">
          Our Projects
        </h2>
        <AllProjects />
      </section>

      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto mt-10 w-full"
      >
        <h2 id="contact-form-heading" className="sr-only">
          Contact Us
        </h2>
        <ContactForm title="Ready to get the website your business deserves?" />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects | Helping Small Businesses Shine Online | TheWebArchitech",
            description:
              "Explore our portfolio of custom websites and web applications designed to help small businesses succeed online. From simple sites to advanced solutions, we bring your ideas to life.",
            url: "https://www.thewebarchitech.com/projects",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Custom Websites",
                  description:
                    "Tailored websites designed to showcase small businesses online",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Web Applications",
                  description:
                    "Advanced web solutions to streamline business operations",
                },
              ],
            },
            offers: {
              "@type": "Offer",
              description:
                "Custom web development services for small businesses",
              url: "https://www.thewebarchitech.com/contact",
            },
          }),
        }}
      />
    </Bounded>
  );
}
