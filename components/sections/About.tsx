'use client';

import { Container, Heading, Text, Box, Icon, VStack } from '@chakra-ui/react';
import { FadeIn } from '../motion/FadeIn';
import { FaCode, FaDatabase, FaLaptopCode, FaRobot, FaServer } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <Container as="section" id="about" py={{ base: 16, md: 24 }} maxW="4xl">
      <FadeIn>
        <VStack gap={6} align="start">
          <Heading as="h2" size="xl" color="accentGreen">
            About Me
          </Heading>

          <Text fontSize="lg" color="accentLight">
            <Typewriter
              words={[
                "Crafting systems that scale. And interfaces that captivate.",
                "From YOLO pipelines to 3D frontends, I build full-stack experiences.",
                "My work blends engineering rigor with creative flair.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </Text>

          <Text fontSize="lg" color="accentLight">
            I'm a full-stack engineer who thrives at the intersection of logic and design.
            My journey spans building processor simulators in C, deploying YOLO-based vision pipelines,
            creating multiplayer game logic, and crafting 3D-animated portfolio interfaces.
          </Text>

          <Text fontSize="lg" color="accentLight">
            I care about clean code, scalable architecture, expressive visuals, and delightful UX—whether it's a low-level memory visualizer, a dashboard, or a pet system with real-time logic.
          </Text>

          <Box pl={4} borderLeft="4px solid" borderColor="accentGreen">
            <VStack align="start" gap={3}>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaCode} boxSize={5} color="accentGreen" />
                <Text color="accentLight" fontSize="md">
                  Bridging low-level systems (C, Assembly) with expressive UI (React, Swift)
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaDatabase} boxSize={5} color="accentGreen" />
                <Text color="accentLight" fontSize="md">
                  Building pipelines that process data at scale in real time (Python)
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaLaptopCode} boxSize={5} color="accentGreen" />
                <Text color="accentLight" fontSize="md">
                  Prototyping game systems, interactive puzzles, and WebGL demos
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaRobot} boxSize={5} color="accentGreen" />
                <Text color="accentLight" fontSize="md">
                  Integrating machine vision (YOLO, OpenCV) into real-world workflows
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaServer} boxSize={5} color="accentGreen" />
                <Text color="accentLight" fontSize="md">
                  Engineering backend systems using Node.js, MongoDB, and sockets
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </FadeIn>
    </Container>
  );
}
