'use client';

import { Container, Heading, Text } from '@chakra-ui/react';
import { FadeIn } from '../motion/FadeIn';

export default function About() {
  return (
    <Container as="section" id="about">
      <FadeIn>
        <Heading as="h2" size="xl" fontWeight="bold">
          About Me
        </Heading>
        <Text color="accentLight" opacity={0.9} lineHeight="1.75" mb={4}>
          I’m <Text as="strong">Mahmoud Elfeel</Text>, a passionate software
          engineer in my 5ᵗʰ semester of Networking Engineering. I specialize in
          building end-to-end applications—from data-driven computer-vision
          pipelines (YOLO, Python) to polished web and mobile apps (Next.js,
          React, Swift). I love tackling complex challenges and turning them
          into intuitive, user-centric experiences.
        </Text>
        <Text color="accentLight" opacity={0.9} lineHeight="1.75">
          Beyond coding, you’ll often find me experimenting with Three.js
          shaders, exploring network protocols, or contributing to open-source
          projects. I’m driven by continuous learning and excited to bring my
          full-stack expertise and collaborative spirit to innovative teams.
        </Text>
      </FadeIn>
    </Container>
  );
}
