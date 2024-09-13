"use client";

import Bounded from "@/components/bounded";
import { faqs } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  return (
    <Bounded>
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">FAQs</span>
      </h1>
      <p className="prose prose-invert mt-2 text-xl md:text-2xl">
        Actually asked questions about developing websites.
      </p>

      <div className="mt-10 flex max-w-7xl rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 transition-all">
        <div className="flex w-full flex-col gap-y-4 divide-y divide-gray-700 pb-8 pt-4">
          {faqs.map((faq) => (
            <div
              className="mt-4 h-full w-full cursor-pointer first:mt-0"
              key={faq.id}
              onClick={() =>
                setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
              }
            >
              <p className="mt-6 flex justify-between text-base font-semibold first-line:max-w-full first-line:items-center sm:align-baseline md:text-xl lg:text-2xl">
                <span className="max-w-xs md:max-w-lg lg:max-w-full">
                  {faq.question}
                </span>
                {activeQuestion === faq.id ? (
                  <FaCircleMinus className="size-6" />
                ) : (
                  <FaCirclePlus className="size-6" />
                )}
              </p>

              <AnimatePresence>
                {activeQuestion === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="w-full"
                  >
                    <p className="prose prose-invert mt-4 text-base text-white/60 transition-all sm:text-lg md:max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
