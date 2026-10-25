import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { SiBasicattentiontoken } from "react-icons/si";

export default function BasicWebsiteCard() {
  return (
    <div className="glass-container w-[370px] rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 px-4 py-6 text-center">
      <div className="flex flex-col items-center gap-y-4">
        <SiBasicattentiontoken className="size-10 text-center" />
        <h1 className="text-3xl font-semibold tracking-wide text-neutral-200">
          Basic Website
        </h1>
        <p className="text-sm italic text-neutral-400">
          For businesses needing an online presence
        </p>
      </div>

      <hr className="mt-4 border-neutral-700" />
      <div className="pt-8">
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Beautifully Designed Website
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Up to 5 pages with custom design
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Responsive design (mobile-friendly)
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Basic SEO (Search Engine Optimization)
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Social media links
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Basic website hosting setup (with guidance)
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />2 revisions after launch
        </p>
      </div>
      <hr className="mt-8 border-neutral-700" />

      <p className="mb-8 pt-4">
        <span className="text-3xl font-semibold text-neutral-100">
          $500 - $1000
        </span>
      </p>

      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400 px-4 py-2 transition hover:opacity-90"
      >
        Choose Plan
        <FaArrowRight />
      </Link>
    </div>
  );
}
