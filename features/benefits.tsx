import Bounded from "@/components/bounded";
import { benefits } from "@/data/siteData";
import Image from "next/image";

export default function Benefits() {
  return (
    <Bounded>
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">How</span> I can help
      </h1>
      <p className="prose prose-invert mt-4 flex flex-col gap-2 text-base font-semibold italic md:text-xl">
        <q className="text-slate-400">
          I need more customers to find me online.
        </q>
        <q className="text-slate-400">
          I don’t have time to figure out websites—it’s overwhelming!
        </q>
      </p>

      <div className="mt-6 text-balance text-slate-300">
        <p className="prose prose-invert text-xl md:text-2xl">
          Let&apos;s work together to create your ideal website or take your
          current site to the next level and make it a tool that works for you.
        </p>
      </div>
      <div className="relative mx-auto mt-10 grid max-w-7xl grid-rows-[auto_auto_auto] gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
        {benefits.map((benefit) => {
          return (
            <div
              key={benefit.title}
              className="glass-container row-span-4 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-4"
            >
              <div className="mt-4 flex w-full items-center justify-center">
                <Image src={benefit.image} alt="computer" className="size-20" />
              </div>

              <div className="mt-4 text-[24px] leading-7">
                <h2>{benefit.title}</h2>
              </div>

              <div className="max-w-xl text-balance text-slate-300">
                <p>{benefit.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
