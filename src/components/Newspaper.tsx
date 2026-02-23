import { motion } from "motion/react";
import React from "react";

interface NewspaperProps {
  quotes: string[];
}

export function Newspaper({ quotes }: NewspaperProps) {
  return (
    <div className="flex flex-col gap-6 my-12">
      {quotes.map((quote, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 50,
            rotate: i % 2 === 0 ? -2 : 2,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: i % 2 === 0 ? -2 : 2,
            scale: 1,
          }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: i * 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-[#f4f1ea] text-black p-6 md:p-8 shadow-2xl border border-gray-300 relative max-w-2xl mx-auto"
          style={{
            clipPath: "polygon(1% 1%, 99% 0%, 100% 99%, 0% 100%)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
            }}
          ></div>
          <p className="font-serif text-2xl md:text-4xl font-bold italic leading-snug text-center relative z-10">
            "{quote}"
          </p>
        </motion.div>
      ))}
    </div>
  );
}
