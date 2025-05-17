'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  return (
    <div className="fixed left-6 top-24 h-[calc(100vh-6rem)] w-px bg-primaryMid/40">
      <motion.div
        style={{ scaleY: height }}
        className="origin-top w-full bg-gradient-to-b from-accentLight via-accentMute to-accentGreen"
      />
    </div>
  );
}