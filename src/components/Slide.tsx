import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { CinematicText } from "./CinematicText";
import { Newspaper } from "./Newspaper";
import { Timeline } from "./Timeline";

interface SlideProps {
  key?: React.Key;
  section: any;
  index: number;
}

export function Slide({ section, index }: SlideProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isLight = section.theme === "light";
  const isRed = section.theme === "red";

  const bgColor = isLight ? "bg-zinc-100" : isRed ? "bg-red-950" : "bg-black";
  const textColor = isLight ? "text-zinc-900" : "text-zinc-100";
  const highlightColor = isLight
    ? "bg-red-600"
    : isRed
      ? "bg-black"
      : "bg-red-600";

  return (
    <div
      ref={ref}
      className={`relative min-h-screen w-full overflow-hidden ${bgColor} flex items-center justify-center py-24 md:py-32`}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20 md:opacity-30"
        style={{ y, opacity }}
      >
        <img
          src={section.image}
          alt="Background"
          className="w-full h-[140%] object-cover object-center -mt-[20%]"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${isLight ? "zinc-100" : isRed ? "red-950" : "black"}/80 to-${isLight ? "zinc-100" : isRed ? "red-950" : "black"}`}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full px-6 md:px-12 mx-auto">
        {section.newspaper && <Newspaper quotes={section.newspaper} />}

        <div className="space-y-6 md:space-y-10">
          {section.paragraphs.map((p: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <CinematicText
                text={p}
                textColor={textColor}
                highlightColor={highlightColor}
              />
            </motion.div>
          ))}
        </div>

        {section.timeline && <Timeline events={section.timeline} />}
      </div>
    </div>
  );
}
