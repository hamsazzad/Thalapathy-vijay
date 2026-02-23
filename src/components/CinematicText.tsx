import { motion } from "motion/react";
import React from "react";

interface CinematicTextProps {
  text: string;
  highlightColor?: string;
  textColor?: string;
}

export function CinematicText({
  text,
  highlightColor = "bg-red-600",
  textColor = "text-white",
}: CinematicTextProps) {
  const parts = text.split(/(<highlight>|<\/highlight>)/g);

  let isHighlight = false;

  return (
    <p
      className={`text-xl md:text-3xl font-medium leading-relaxed tracking-tight ${textColor} mb-8`}
    >
      {parts.map((part, index) => {
        if (part === "<highlight>") {
          isHighlight = true;
          return null;
        }
        if (part === "</highlight>") {
          isHighlight = false;
          return null;
        }

        if (isHighlight) {
          return (
            <span key={index} className="relative inline-block px-1 mx-1">
              <motion.span
                className={`absolute inset-0 ${highlightColor} -z-10 rounded-sm`}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
              />
              <span className="relative z-10 font-bold text-white">{part}</span>
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}
