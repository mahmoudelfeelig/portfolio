'use client';

import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);

interface Props {
  readonly image: string;
  readonly height?: number;
  readonly flip?: boolean;
  readonly children?: React.ReactNode;
}

export default function ParallaxBand({
  image,
  height = 100, // base height is immersive
  flip,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // scroll-based Y parallax
  const y = useTransform(scrollYProgress, [0, 1], flip ? ['-20%', '20%'] : ['20%', '-20%']);

  // animated opacity for gradient fade
  const gradientOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // responsive height
  const responsiveHeight = useBreakpointValue({ base: `${height * 0.7}vh`, md: `${height}vh` });

  return (
    <Box
      ref={ref}
      position="relative"
      h={responsiveHeight}
      overflow="hidden"
      isolation="isolate"
    >
      <MotionBox
        style={{ y }}
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPos="center"
        transform="scale(1.1)"
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
      >
        {/* Animated gradient overlay */}
        <MotionBox
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bgGradient="linear(to-b, rgba(0, 0, 0, 0.4), #0e0f13 80%)"
          style={{ opacity: gradientOpacity }}
        />
      </MotionBox>

      {children && (
        <Container
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          px={8}
          color="white"
          maxW="3xl"
        >
          {children}
        </Container>
      )}
    </Box>
  );
}
