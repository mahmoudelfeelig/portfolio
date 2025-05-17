'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const height = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed left-6 top-20 h-[calc(100vh-5rem)] w-px bg-neutral-700/30">
      <motion.div
        style={{ scaleY: height }}
        className="origin-top w-full bg-gradient-to-b from-pink-500 via-blue-500 to-purple-500"
      />
    </div>
  );
}