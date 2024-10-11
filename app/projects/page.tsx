import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import projects from "@/assets/projects.jpg";
import ContactForm from "@/features/contact-form";

export default async function ContactPage() {
  return (
    <Bounded className="p-6 px-10">
      <div className="relative mt-8">
        <StarGrid />
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-2">
          <div className="flex flex-1 flex-col gap-y-2 max-lg:items-center max-lg:text-center">
            <h1 className="text-balance text-4xl font-semibold sm:text-6xl">
              Helping Small Businesses{" "}
              <span className="heading-gradient">Shine</span> Online
            </h1>

            <div className="w-[90%] text-slate-300">
              <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                Hi, I&apos;m Jerry, a web developer committed to helping small
                businesses succeed through custom, modern websites and
                applications. Whether you need a simple site to establish your
                online presence or something more advanceded, I&apos;m here to
                bring your ideas to life.
              </p>
            </div>
            {/* <CTA className="ml-0 mt-8 flex py-3 md:text-lg" /> */}
          </div>
          <div className="hero-image glass-container flex-1">
            <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
            <Image
              src={projects}
              alt="custom-website"
              height={300}
              width={650}
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
