import Bounded from "@/components/bounded";
import showcase from "@/assets/showcase-image.png";
import Image from "next/image";
import { PiGear } from "react-icons/pi";
import Link from "next/link";

const icons = {
  gear: <PiGear />
};

export default function Showcase() {
  return (
    <Bounded className="relative">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">Creating</span> websites with user
        experience in mind
      </h1>
      <div className="mx-auto mt-10 grid max-w-[70rem] grid-cols-1 items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 pl-10 backdrop-blur-sm md:mt-16 lg:grid-cols-2 lg:py-12 xl:grid-cols-3">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
            {icons.gear}
          </div>

          <div className="mt-6 text-2xl font-normal">
            <h2>User-focused websites</h2>
          </div>
          <div className="prose prose-invert mt-4 max-w-xl">
            <p className="mb-6">
              My mission is to create websites that are super effective and
              user-friendly, so you won&apos;t get frustrated when you visit
              them. I love creating effective and beautiful websites that people
              will enjoy, appreciate and understand thanks to great web design
              and user experience. Plus, I take pride in writing custom code
              that will give my clients the unique website that they envisioned.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-xl border border-violet-200 px-3 py-2 text-sm transition hover:text-violet-400 md:px-4 md:text-xl"
          >
            Contact Me
          </Link>
        </div>
        <Image
          src={showcase}
          alt="showcase"
          className="col-span-1 pt-10 opacity-90 shadow-2xl lg:-order-1 lg:translate-x-[-15%] lg:pt-0 xl:col-span-2"
        />
      </div>
    </Bounded>
  );
}
