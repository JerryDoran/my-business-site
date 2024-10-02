import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";

export default function CustomAppCard() {
  return (
    <div className="glass-container w-[370px] rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 px-4 py-6 text-center">
      <div className="flex flex-col items-center gap-y-4">
        <MdDashboardCustomize className="size-10 text-center" />
        <h1 className="text-3xl font-semibold tracking-wide text-neutral-200">
          Custom Applications
        </h1>
        <p className="text-sm italic text-neutral-400">
          For businesses requiring tailored web applications.
        </p>
      </div>

      <hr className="mt-4 border-neutral-700" />
      <div className="pt-8">
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Fully customized application
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Payment gateways, third-party services, etc.
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          User authentication and role management
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Advanced database integration
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Custom dashboards and reporting tools
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Ongoing monthly maintenance and updates
        </p>
        <p className="flex items-center gap-2 py-2 text-sm font-semibold">
          <FaCheck className="text-indigo-500" />
          Up to 5 revisions after launch
        </p>
      </div>
      <hr className="mt-8 border-neutral-700" />

      <p className="mb-8 pt-4">
        <span className="text-3xl font-semibold text-neutral-100">
          $500 - $1000
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
  );
}
