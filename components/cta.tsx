import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function CTA({ className }: { className: string }) {
  return (
    <Link
      href="/pricing"
      className={cn(
        "relative ml-8 hidden h-fit w-fit items-center gap-2 rounded-xl border border-violet-200/40 bg-violet-100/20 px-3 py-2 text-sm font-semibold tracking-wider text-violet-100 outline-none ring-violet-300 transition-colors after:absolute hover:border-violet-200/40 hover:bg-violet-500/10 hover:text-violet-400 focus:ring-2 md:px-6 lg:flex",
        className,
      )}
    >
      GET YOUR WEBSITE
      <FaArrowRight className="h-4 w-4" />
    </Link>
  );
}
