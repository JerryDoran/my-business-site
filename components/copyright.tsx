import Link from "next/link";

export default function Copyright() {
  return (
    <div className="bg-slate-800 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-12 md:flex-row">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </div>
  );
}
