import { motion } from "motion/react";
import React from "react";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative border-l-4 border-red-600 ml-4 md:ml-12 my-12 py-4">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="mb-10 ml-8 relative"
        >
          <div className="absolute -left-[42px] top-1 w-6 h-6 bg-red-600 rounded-full border-4 border-black" />
          <h3 className="text-2xl font-bold text-red-500 mb-2">
            {event.year} - {event.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {event.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
