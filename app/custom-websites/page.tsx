import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import custom from "@/assets/custom.jpg";
import CTA from "@/components/cta";

export default async function CustomWebsitesPage() {
  return (
    <Bounded className="p-6">
      <div className="relative mt-16">
        <StarGrid />
        <div className="flex flex-col items-center gap-16 md:gap-6 lg:flex-row">
          <div className="flex flex-1 flex-col gap-y-6 max-lg:items-center max-lg:text-center">
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
              <span className="heading-gradient">Design</span> Your Digital
              Brand
            </h1>

            <div className="text-slate-300">
              <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                I craft custom websites and optimize leading CMS platforms to
                bring your vision to life.
              </p>
              <p className="prose prose-invert mt-4 text-xl md:text-2xl">
                Take complete control over your site&apos;s design, user
                experience, and functionality.
              </p>
            </div>
            <CTA className="ml-0 mt-4 flex py-3 md:text-lg" />
          </div>
          <div className="hero-image glass-container flex-1">
            <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
            <Image src={custom} alt="custom-website" height={300} width={600} />
          </div>
        </div>
      </div>
    </Bounded>
  );
}
