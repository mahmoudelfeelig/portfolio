'use client';

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { FadeIn } from '../motion/FadeIn';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Responsive Next.js site with Chakra UI, framer-motion, parallax bands, 3D shader banner, and dark/light theming.',
    link: 'https://github.com/mahmoudelfeelig/portfolio',
  },
  {
    title: 'Network Communication System',
    desc: 'Robust Python TCP/IP client-server architecture supporting multiple concurrent clients and automatic reconnection logic.',
    link: 'https://github.com/GIU-Berlin-Computer-Programming-Lab/dice-realms-game-dimension6',
  },
  {
    title: 'AI Board Game',
    desc: 'Strategy board game built in JavaFX featuring MinMax AI, reactive UI, and custom animations for piece movement.',
    link: 'https://github.com/mahmoudelfeelig/ai-board-game',
  },
];

export default function Projects() {
  return (
    <Container as="section" id="projects">
      <FadeIn>
        <Heading
          as="h2"
          fontSize="1.875rem"   /* equivalent to text-3xl */
          fontWeight="700"      /* font-bold */
          mb="2rem"             /* mb-8 */
        >
          Projects
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={8}               /* use gap instead of spacing */
          mt={4}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </SimpleGrid>
      </FadeIn>
    </Container>
  );
}
