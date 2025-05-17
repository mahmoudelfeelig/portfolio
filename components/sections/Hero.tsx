'use client';
import {motion, useScroll, useTransform} from 'motion/react';
import {useRef} from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);
  // track page-level scroll
  const {scrollYProgress} = useScroll({target: ref, offset: ['start start', 'end start']});
  // map 0-1 progress to scale and Y-translation
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={ref} className={styles.wrapper}>
      {/* Background video */}
      <motion.video
        className={styles.video}
        style={{scale, y}}
        src="/hero-video.mp4"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
      />
      {/* Floating title */}
      <motion.h1
        initial={{opacity: 0, y: 80}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', stiffness: 120, damping: 20}}
        className={styles.title}>
        Ahmed&nbsp;· Software&nbsp;Engineer
      </motion.h1>
    </section>
  );
}