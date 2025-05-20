'use client';

import { useRef } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sectionVariants } from '../../lib/motionConfig';

export default function Hero() {
  const secRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <Box ref={secRef} position="relative" h="120vh" overflow="hidden">
      {/* background video */}
      <motion.video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          scale,
          y: translateY,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* dark overlay */}
      <Box position="absolute" inset="0" bg="blackAlpha.600" />

      {/* animated heading */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: '5xl', md: '7xl' }}
          fontWeight="extrabold"
          color="white"
        >
          Mahmoud Elfeel
          <Box
            as="span"
            display="block"
            mt={4}
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight="light"
            letterSpacing="widest"
          >
            Full-Stack Software Engineer
          </Box>
        </Heading>
      </motion.div>
    </Box>
  );
}
