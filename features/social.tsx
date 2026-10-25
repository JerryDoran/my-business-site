"use client";

import React from "react";
import StylizedLogoMark from "./stylized-logo-mark";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StarBackground from "./star-background";
import Image from "next/image";
import background from "./background.jpg";

import {
  FaDigitalOcean,
  FaFacebook,
  FaInstagram,
  FaCloudflare,
  FaTiktok,
  FaServer,
} from "react-icons/fa6";

export default function Social() {
  const socialIcons = [
    { name: <FaFacebook /> },
    { name: <FaInstagram /> },
    { name: <FaTiktok /> },
    { name: <FaServer /> },
    { name: <FaCloudflare /> },
    { name: <FaDigitalOcean /> },
  ];
 
  const containerRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: containerRef },
  );

  return (
    <div className="relative overflow-hidden px-4 py-10">
      <Image
        src={background}
        alt="background"
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-4xl text-balance text-center text-4xl font-medium sm:text-7xl">
          <span className="heading-gradient">Affordable</span> and unbeatable
          value
        </h2>

        <div className="hero-body mt-6 text-balance text-slate-300">
          <p className="prose prose-invert mx-auto mt-4 max-w-xl text-center text-lg sm:align-baseline md:text-xl">
            I can link your website with your social media accounts and can get
            it hosted on a variety of platforms.
          </p>
        </div>
        <div
          ref={containerRef}
          className="mt-20 flex flex-col items-center justify-center md:flex-row"
        >
          {socialIcons.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(socialIcons.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                {item.name}
              </div>
              {/* Checks if each div with a line is the last item in the array */}
              {index !== socialIcons.length - 1 && (
                <div
                  className={cn(
                    "signal-line",
                    index >= Math.floor(socialIcons.length / 2)
                      ? "rotate-180"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
