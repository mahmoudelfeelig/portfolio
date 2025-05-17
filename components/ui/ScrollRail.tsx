'use client';
import {motion, useScroll, useSpring} from 'motion/react';

export function ScrollRail() {
  const {scrollYProgress} = useScroll(); // whole page
  const height = useSpring(scrollYProgress, {stiffness: 100, damping: 30});

  return (
    <div className="fixed left-8 top-16 h-[calc(100vh-4rem)] w-px bg-neutral-700/40">
      <motion.div
        style={{scaleY: height}}
        className="origin-top w-full bg-gradient-to-b from-pink-500 via-blue-500 to-purple-500" />
    </div>
  );
}