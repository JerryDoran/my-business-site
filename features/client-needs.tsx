import Bounded from "@/components/bounded";
import { clientNeeds } from "@/data/siteData";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ClientNeeds() {
  return (
    <Bounded>
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">Creating</span> websites with user
        experience in mind
      </h1>

      <div className="mt-6 text-balance text-slate-300">
        <p className="prose prose-invert text-xl md:text-2xl">
          Building a website that truly represents your brand and works smoothly
          for your audience can be tough. Maybe your current site feels
          outdated, doesn&apos;t look good on mobile, or isn&apos;t showing up
          in search results. This can lead to frustration as you miss out on
          potential customers and struggle to manage a site that just isn’t
          delivering.
        </p>
        <p className="prose prose-invert mt-6 text-xl md:text-2xl">
          The longer this goes on, the more it hurts. Visitors leave quickly if
          your site is slow or confusing, and competitors with better websites
          grab the attention and business that could have been yours. It feels
          like you&apos;re stuck, with your online presence falling behind.
        </p>
        <p className="prose prose-invert mt-6 text-xl md:text-2xl">
          Imagine having a website that not only looks stunning but also
          performs seamlessly across all devices, is optimized for search
          engines, and converts visitors into loyal customers. Whether it&apos;s
          a fresh, modern design or adding new features, I&apos;ll handle the
          tech side so you can focus on running your business.
        </p>
      </div>
      <div className="relative mt-10 grid max-w-6xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {/* <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" /> */}
        {clientNeeds.map((item) => {
          return (
            <div
              key={item.title}
              className={cn(
                "glass-container row-span-5 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-4",
                item.wide ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              <h3 className="text-2xl">{item.title}</h3>

              <div className="max-w-xl text-balance text-slate-300">
                {item.content}
              </div>

              <Image
                src={item.image}
                className="row-span-5 max-h-40 rounded-lg object-cover"
                alt="client image"
              />
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
