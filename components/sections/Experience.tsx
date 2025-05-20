'use client';

import { Container, Heading, VStack } from '@chakra-ui/react';
import { FadeIn } from '../motion/FadeIn';
import ExperienceCard from '../ui/ExperienceCard';

export default function Experience() {
  return (
    <Container as="section" id="experience">
      <FadeIn>
        <Heading
          as="h2"
          fontSize="1.875rem"   /* equivalent to text-3xl */
          fontWeight="700"      /* font-bold */
          mb="2rem"             /* mb-8 */
        >
          Experience
        </Heading>

        <VStack
          gap={8}   /* replaced spacing */
          mt={4}
        >
          <ExperienceCard
            company="IAV GmbH"
            role="Working Student – Data & Computer Vision"
            period="Oct 2024 – Present, Berlin, Germany"
            bullets={[
              'Built end-to-end computer-vision pipelines using YOLO for automotive analytics',
              'Developed interactive data dashboards with Next.js and D3.js',
              'Authored iOS prototype apps in Swift to demo vision-driven features',
              'Optimized Python scripts for high-throughput data processing',
            ]}
          />
        </VStack>
      </FadeIn>
    </Container>
  );
}
