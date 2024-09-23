"use client";

import StarGrid from "@/components/star-grid";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Bounded from "@/components/bounded";
import CTA from "@/components/cta";
import Image from "next/image";
import hero from "@/assets/hero-image.webp";

export default function Hero() {
  const containerRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  return (
    <Bounded className="">
      <div className="relative mt-8" ref={containerRef}>
        <StarGrid />
        <div className="hero-heading">
          <h1 className="hero-heading text-balance text-4xl font-semibold sm:text-7xl">
            <span className="heading-gradient">Awesome</span> Websites for Small
            Businesses
          </h1>
        </div>

        <div className="hero-body mt-6 text-balance text-slate-300">
          <p className="prose prose-invert text-xl font-semibold md:text-2xl">
            I create amazing and affordable websites for small to medium-sized
            businesses. My sites are effective, easy to use and look great -
            your customers will love them!
          </p>
        </div>

        <div className="hero-buttons mt-10 flex items-center gap-6">
          <CTA className="ml-0 flex py-3 md:text-lg" />
          <Link
            href="/contact"
            className="rounded-xl border border-violet-200 px-4 py-3 text-sm transition hover:text-violet-400 md:px-6 md:text-xl"
          >
            Contact Me
          </Link>
        </div>
        <div className="hero-image glass-container mt-16 h-[500px] max-sm:h-80">
          <div className="hero-glow absolute inset-0 -z-10 bg-blue-500/40 blur-2xl filter" />

          <Image
            className="rounded-lg object-cover"
            src={hero}
            fill
            alt="hero image"
          />
        </div>
      </div>
    </Bounded>
  );
}
