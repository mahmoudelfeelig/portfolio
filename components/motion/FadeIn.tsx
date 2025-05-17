'use client';
import {motion} from 'motion/react';
import {PropsWithChildren} from 'react';

export function FadeIn({children}: PropsWithChildren) {
  return (
    <motion.div
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.4}}
      transition={{duration: 0.6, ease: [0.25, 0.1, 0.25, 1]}}>
      {children}
    </motion.div>
  );
}