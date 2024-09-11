import Logo from "@/components/logo";

import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

export default async function Footer() {
  return (
    <footer className="grid w-full grid-cols-1 gap-12 border-t border-slate-600 px-8 py-12 md:grid-cols-2 md:pl-40 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex flex-col max-md:items-center">
        <Logo />
        <p className="prose mt-4 max-w-lg leading-6 text-white/80 max-md:text-center">
          Located in Youngstown Ohio I create awesome and affordable websites
          for small businesses and non-profits located anywhere in the world
        </p>
        <Link
          href="/pricing"
          className="relative mt-6 inline-flex h-fit w-fit items-center gap-2 rounded-xl border border-violet-200/40 bg-violet-100/20 px-4 py-3 text-sm tracking-wider text-violet-100 outline-none ring-violet-300 transition-colors after:absolute hover:border-violet-200/40 hover:bg-violet-500/10 hover:text-violet-400 focus:ring-2 md:px-4"
        >
          GET YOUR WEBSITE
          <FaArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col max-md:items-center lg:pl-20">
        <h3 className="text-lg">Browse</h3>
        <nav aria-label="Footer">
          <ul className="prose mt-4 max-md:text-center">
            <li className="">
              <Link
                href="/"
                className="text-white/60 no-underline transition hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white/60 no-underline transition hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white/60 no-underline transition hover:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-white/60 no-underline transition hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/60 no-underline transition hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col max-md:items-center">
        <h3 className="text-lg">Services</h3>
        <ul className="prose mt-4 max-md:text-center">
          <li>
            <Link
              href="/"
              className="text-white/60 no-underline transition hover:text-white"
            >
              Web Design and Development
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white/60 no-underline transition hover:text-white"
            >
              Custom App Development
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-white/60 no-underline transition hover:text-white"
            >
              Deployment
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white/60 no-underline transition hover:text-white"
            >
              Maintenance
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col max-md:items-center">
        <h3 className="text-lg">Contact Me</h3>
        <ul className="prose mt-4 list-none text-white/60 max-md:text-center">
          <li>jerry-doran@hotmail.com</li>
          <li>Youngstown, OH</li>
        </ul>
      </div>
    </footer>
  );
}
