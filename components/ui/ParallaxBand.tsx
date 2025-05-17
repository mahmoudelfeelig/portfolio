"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import clsx from 'clsx';

interface Props {
  image: string;     // /public/ path
  height?: number;   // vh
  flip?: boolean;    // direction
}

export default function ParallaxBand({ image, height = 50, flip }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    flip ? ['-20%', '20%'] : ['20%', '-20%']
  );

  return (
    <div
      ref={ref}
      style={{ height: `${height}vh` }}
      className="relative isolate overflow-hidden"
    >
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
          y,
        }}
        className={clsx(
          'absolute inset-0 bg-cover bg-center scale-110',
          'after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-primaryDark/90'
        )}
      />
    </div>
  );
}
