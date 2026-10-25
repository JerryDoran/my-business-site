import Bounded from "@/components/bounded";
import { testimonials } from "@/data/siteData";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonials() {
  return (
    <Bounded>
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">Client</span> testimonials
      </h1>
      <p className="prose prose-invert mt-2 text-balance text-xl text-slate-300 md:text-2xl">
        Read what others are saying
      </p>

      <div className="relative mx-auto mt-10 grid max-w-7xl grid-rows-[auto_auto_auto] gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
        {testimonials.map((item) => {
          return (
            <div
              key={item.name}
              className="glass-container row-span-4 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-4"
            >
              <RiDoubleQuotesL size="40" color="#4299e1" />
              <div className="max-w-xl text-balance text-slate-300">
                <p>{item.testimonial}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="prose prose-invert">by {item.name}</h2>

                <p className="prose prose-invert text-sm italic">
                  {item.company}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
}
