"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";

import Logo from "@/components/logo";
import CTA from "@/components/cta";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({
  routes,
}: {
  routes: { label: string; link: string }[];
}) {
  const pathname = usePathname();
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  useEffect(() => {
    function changeColor() {
      if (window.scrollY >= 20) {
        setColor(true);
      } else {
        setColor(false);
      }
    }

    window.addEventListener("scroll", changeColor);
  }, []);

  function handleOpen() {
    const delay = (time: number) =>
      new Promise((resolve) => setTimeout(resolve, time));
    async function sleep() {
      await delay(10);
      setOpen(!open);
    }
    sleep();
  }
  return (
    <header className="w-full bg-[#070815] transition">
      <nav
        className={
          color
            ? "mx-auto max-w-7xl bg-[#070815] px-4 py-4 md:px-6 md:pt-4"
            : "mx-auto max-w-7xl px-4 py-4 md:px-6 md:pt-4"
        }
        aria-label="Main"
      >
        <div className="flex items-center justify-between py-2 font-medium transition">
          <Logo />
          <ul className="hidden items-center gap-6 capitalize md:flex">
            {routes.map((route) => {
              if (route.label === "services") {
                return (
                  <div
                    key={route.label}
                    className="group relative flex cursor-pointer items-center gap-1"
                  >
                    <li className="inline-flex min-h-11 items-center text-lg transition hover:text-gray-400">
                      {route.label}
                    </li>
                    <MdOutlineKeyboardArrowDown className="size-6" />
                    <div className="sub-menu -right-30 absolute top-12 z-50 hidden w-auto transition duration-200 group-hover:block">
                      <div className="glass-container">
                        <div className="absolute inset-0 -z-10 bg-slate-900 blur-2xl filter" />
                        <ul className="flex w-[270px] flex-col gap-1 text-[17px]">
                          <li className="transform rounded-lg p-2 pl-4 transition duration-100 hover:scale-105 hover:bg-blue-600/20">
                            <Link href="/custom-websites">Custom Websites</Link>
                          </li>
                          <li className="transform rounded-lg p-2 pl-4 transition duration-100 hover:scale-105 hover:bg-blue-600/20">
                            <Link href="/applications">Web Applications</Link>
                          </li>

                          <li className="transform rounded-lg p-2 pl-4 transition duration-100 hover:scale-105 hover:bg-blue-600/20">
                            <Link href="/support">Support & Maintenance</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <li key={route.label}>
                  <Link
                    href={route.link}
                    className={cn(
                      "inline-flex min-h-11 items-center text-lg transition hover:text-gray-400",
                      route.link === pathname ? "text-violet-400" : "",
                    )}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
            <CTA />
          </ul>

          {/* Hamburger Menu */}
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-3xl text-white" />
            <span className="sr-only">Open Menu</span>
          </div>
        </div>

        {/* Mobile sidebar section */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // transition={{ ease: "easeInOut", duration: 0.2 }}
              exit={{
                opacity: 0,
              }}
              className="absolute right-0 top-20 z-10 h-screen w-full bg-black md:hidden"
            >
              <div className="relative flex h-full items-center justify-center pb-28 text-xl font-semibold first-letter:flex-col">
                <ul className="ml-20 mt-40 flex h-full w-2/3 flex-col items-start gap-6 capitalize">
                  {routes.map((route) => {
                    if (route.label === "services") {
                      return (
                        <div
                          className="flex flex-col gap-y-4"
                          key={route.label}
                        >
                          <div
                            onClick={() => setServices((prev) => !prev)}
                            className="flex cursor-pointer items-center justify-between gap-y-4"
                          >
                            <li className="inline-flex min-h-11 items-center text-[18px] transition hover:text-gray-400">
                              {route.label}
                              <MdOutlineKeyboardArrowDown className="size-6" />
                            </li>
                            {/* {services ? (
                              <FaCircleMinus className="" />
                            ) : (
                              <FaCirclePlus className="" />
                            )} */}
                          </div>
                          <AnimatePresence mode="wait">
                            {services && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-fit"
                              >
                                <ul className="flex flex-col gap-1 text-base">
                                  <li className="transform rounded-lg p-2 pl-4 text-lg font-medium transition duration-100 hover:scale-105 hover:bg-blue-600/30">
                                    <Link
                                      href="/custom-websites"
                                      onClick={handleOpen}
                                    >
                                      Custom Websites
                                    </Link>
                                  </li>
                                  <li className="transform rounded-lg p-2 pl-4 text-lg font-medium transition duration-100 hover:scale-105 hover:bg-blue-600/30">
                                    <Link
                                      href="/applications"
                                      onClick={handleOpen}
                                    >
                                      Web Applications
                                    </Link>
                                  </li>
                                  <li className="transform rounded-lg p-2 pl-4 text-lg font-medium transition duration-100 hover:scale-105 hover:bg-blue-600/30">
                                    <Link href="/support" onClick={handleOpen}>
                                      Support & Maintenance
                                    </Link>
                                  </li>
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <li key={route.label}>
                        <Link
                          href={route.link}
                          className={cn(
                            "inline-flex min-h-11 items-center text-xl transition hover:text-gray-400",
                            route.link === pathname ? "text-violet-400" : "",
                          )}
                          onClick={handleOpen}
                        >
                          {route.label}
                        </Link>
                      </li>
                    );
                  })}
                  <CTA
                    className="ml-0 mt-20 flex px-4 py-3"
                    onClick={handleOpen}
                  />
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
