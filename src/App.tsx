import { motion, useScroll, useSpring } from "motion/react";
import React from "react";
import { Slide } from "./components/Slide";
import { storySections } from "./data";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-500 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://picsum.photos/seed/thalapathy/1920/1080?blur=4"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
          >
            The <span className="text-red-600">Phenomenon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl font-medium text-gray-300 max-w-2xl mx-auto"
          >
            A cinematic journey of Thalapathy Vijay
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16 animate-bounce"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              Scroll to explore
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-red-600 to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      <main>
        {storySections.map((section, index) => (
          <Slide key={section.id} section={section} index={index} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 text-center border-t border-white/10">
        <p className="text-gray-500 font-mono text-sm">
          A tribute to the Commander. #AnnaIsComing
        </p>
      </footer>
    </div>
  );
}
