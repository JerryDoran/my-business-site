import Bounded from "@/components/bounded";
import { clientNeeds } from "@/data/siteData";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ClientNeeds() {
  return (
    <Bounded>
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">Creating</span> websites with user
        experience in mind
      </h1>
      <p className="prose prose-invert mt-4 flex flex-col gap-2 text-base font-semibold italic md:text-xl">
        <q className="text-slate-400">
          My website feels outdated, and customers keep telling me it’s hard to
          use.
        </q>
        <q className="text-slate-400">
          I don’t even have a website—how can I compete?
        </q>
      </p>
      <div className="mt-6 text-slate-300 lg:text-balance">
        <p className="prose prose-invert text-xl md:text-2xl">
          Building a website that truly represents your brand and works smoothly
          for your audience can be tough. Maybe your current site feels
          outdated, doesn&apos;t look good on mobile, or isn&apos;t showing up
          in search results. This can lead to frustration as you miss out on
          potential customers and struggle to manage a site that just isn’t
          delivering.
        </p>
        <div className="mt-4">
          <h2 className="prose prose-invert text-xl font-bold md:text-2xl">
            Does this sound familiar?
          </h2>
          <ul className="prose prose-invert ml-8 list-disc text-lg md:text-xl">
            <li className="mt-2">
              Customers leave your site before contacting you.
            </li>
            <li>
              You&apos;re losing business to competitors with better websites.
            </li>
            <li>
              Updating your site is a confusing or time-consuming process.
            </li>
          </ul>
          <h2 className="prose prose-invert mt-4 text-xl font-bold md:text-2xl">
            Imagine having a website that:
          </h2>
          <ul className="prose prose-invert text-lg md:text-xl">
            <li className="mt-2 flex items-center gap-4">
              <CheckCircle className="size-5 font-bold text-indigo-500" />
              Looks stunning and represents your business perfectly.
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle className="size-5 text-indigo-500" />
              Works seamlessly across all devices.
            </li>
            <li className="flex items-center gap-4">
              <CheckCircle className="size-5 text-indigo-500" />
              Helps new customers find you on Google.
            </li>
          </ul>

          {/* <p className="prose prose-invert mt-6 text-xl md:text-2xl">
          The longer this goes on, the more it hurts. Visitors leave quickly if
          your site is slow or confusing, and competitors with better websites
          grab the attention and business that could have been yours. It feels
          like you&apos;re stuck, with your online presence falling behind.
        </p> */}
          <p className="prose prose-invert mt-6 text-xl md:text-2xl">
            Whether it&apos;s a fresh, modern design or adding new features,
            I&apos;ll handle the tech side so you can focus on running your
            business.
          </p>
        </div>
      </div>

      <h1 className="mt-20 text-balance text-4xl font-semibold sm:text-7xl">
        Why Small <span className="heading-gradient">Businesses</span> choose me
      </h1>
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
