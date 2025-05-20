'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Text, Button, Link } from '@chakra-ui/react';
import styles from './hero.module.css';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  return (
    <section ref={ref} className={styles.wrapper}>
      {/* Background video */}
      <motion.video
        className={styles.video}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ scale, y: translateY }}
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Title and CTA wrapper */}
      <Box className={styles.titleBox}>
        <h1 className={styles.title}>Mahmoud Elfeel</h1>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color="gray.200"
          mt={4}
          mb={6}
        >
          I build full-stack apps, computer-vision pipelines, and interactive 3D experiences that solve real-world problems.
        </Text>
        <Link href="#projects" _hover={{ textDecoration: 'none' }}>
          <Button colorScheme="green" size="lg">
            See My Work
          </Button>
        </Link>
      </Box>
    </section>
  );
}
