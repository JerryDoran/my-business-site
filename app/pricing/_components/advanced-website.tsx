import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { GiAtomicSlashes } from "react-icons/gi";

export default function AdvancedWebsiteCard() {
  return (
    <div className="-inset-[10px] -z-10 rounded-xl border border-slate-100/20 bg-indigo-500 backdrop-blur-md">
      <div className="glass-container relative w-[370px] rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 px-4 py-6 text-center">
        <div className="flex flex-col items-center gap-y-4">
          <GiAtomicSlashes className="size-10 text-center" />
          <h1 className="text-3xl font-semibold tracking-wide text-neutral-200">
            Advanced Website
          </h1>
          <span className="rounded-full bg-gradient-to-br from-indigo-900 to-indigo-400 px-3 py-1 text-sm font-semibold text-white">
            Popular
          </span>
          <p className="text-sm italic text-neutral-400">
            For businesses looking to grow with a more dynamic and interactive
            site.
          </p>
        </div>

        <hr className="mt-4 border-neutral-700" />
        <div className="pt-8">
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Up to 10 pages with a custom design
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Responsive design across all devices
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Advanced SEO setup (keyword optimization)
          </p>

          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Contact forms & newsletters
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Social media integration with share buttons
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Blog setup and management tools
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Ecommerce functionality (up to 20 products)
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Basic training on website management
          </p>
          <p className="flex items-center gap-2 py-2 text-sm font-semibold">
            <FaCheck className="text-indigo-500" />
            Up to 3 revisions after launch
          </p>
        </div>
        <hr className="mt-8 border-neutral-700" />

        <p className="mb-8 pt-4">
          <span className="text-3xl font-semibold text-neutral-100">
            $1,500 - $3,000
          </span>
        </p>
        <div className=""></div>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400 px-4 py-2 transition hover:opacity-90"
        >
          Choose Plan
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
