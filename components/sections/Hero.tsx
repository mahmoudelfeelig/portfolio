'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const secRef = useRef<HTMLElement | null>(null);

  // scroll-linked transforms
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start start', 'end start'],
  });
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={secRef} className="relative h-[120vh]">
      {/* animated gradient bg */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 -z-10 animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-primaryMid via-accentMute to-accentGreen"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* title */}
      <motion.h1
        style={{ opacity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-5xl md:text-7xl font-extrabold tracking-wider"
      >
        Mahmoud Elfeel
        <span className="block mt-4 text-lg md:text-2xl font-light tracking-widest">
          Full-Stack Software Engineer
        </span>
      </motion.h1>
    </section>
  );
}
