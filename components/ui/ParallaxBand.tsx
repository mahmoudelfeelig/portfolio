'use client';

import { Box } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);

interface Props {
  readonly image: string;
  readonly height?: number; // in vh
  readonly flip?: boolean;
}

export default function ParallaxBand({
  image,
  height = 50,
  flip,
}: Props) {
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
    <Box
      ref={ref}
      position="relative"
      isolation="isolate"
      overflow="hidden"
      h={`${height}vh`}
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
        w="full"
        h="full"
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bgGradient="linear(to-b, transparent, primaryDarkAlpha.90)"
        />
      </MotionBox>
    </Box>
  );
}