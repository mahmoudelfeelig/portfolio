'use client';

import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FadeIn } from '../motion/FadeIn';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  return (
    <Container as="section" id="experience" py={{ base: 16, md: 24 }} maxW="5xl">
      <FadeIn>
        <Heading as="h2" size="xl" color="accentGreen" mb={8}>
          Experience
        </Heading>

        <VStack gap={10} align="start">
          {/* IAV Job */}
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="lg"
            p={6}
            bg="blackAlpha.500"
            boxShadow="md"
            w="full"
          >
            <VStack gap={4} align="start">
              <HStack gap={4}>
                <Icon as={FaBuilding} color="accentGreen" />
                <Text fontSize="lg" fontWeight="bold" color="white">
                  IAV GmbH
                </Text>
              </HStack>
              <HStack gap={4}>
                <Icon as={FaCalendarAlt} color="gray.400" />
                <Text fontSize="sm" color="gray.400">
                  Oct 2024 – Present · Berlin, Germany
                </Text>
              </HStack>
              <Text fontSize="md" color="accentLight" fontStyle="italic">
                Working Student – Data & Computer Vision
              </Text>
              <Box w="100%" h="1px" bg="whiteAlpha.300" my={2} />
              <VStack align="start" gap={3}>
                <Text color="gray.300">• Built end-to-end CV pipelines with YOLO for automotive analytics</Text>
                <Text color="gray.300">• Developed interactive dashboards with Next.js </Text>
                <Text color="gray.300">• Prototyped iOS apps with Swift for computer vision features</Text>
                <Text color="gray.300">• Optimized high-throughput Python pipelines for real-time analysis</Text>
              </VStack>
            </VStack>
          </Box>

          {/* Pre-job self projects */}
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="lg"
            p={6}
            bg="blackAlpha.400"
            boxShadow="sm"
            w="full"
          >
            <VStack gap={4} align="start">
              <HStack gap={4}>
                <Icon as={FaBuilding} color="accentGreen" />
                <Text fontSize="lg" fontWeight="bold" color="white">
                  Independent Projects
                </Text>
              </HStack>
              <HStack gap={4}>
                <Icon as={FaCalendarAlt} color="gray.400" />
                <Text fontSize="sm" color="gray.400">
                  2022 – 2024
                </Text>
              </HStack>
              <Text fontSize="md" color="accentLight" fontStyle="italic">
                Personal and Academic Projects
              </Text>
              <Box w="100%" h="1px" bg="whiteAlpha.300" my={2} />
              <VStack align="start" gap={3}>
                <Text color="gray.300">• Designed a processor simulation in C with custom ISA and memory visualization</Text>
                <Text color="gray.300">• Built a multiplayer microeconomy system with wagers, resource management, centralized store, and real-time updates</Text>
                <Text color="gray.300">• Engineered a TCP-based LAN chat tool in Python</Text>
                <Text color="gray.300">• Created a portfolio site with 3D shaders, motion, and interactive skill trees</Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </FadeIn>
    </Container>
  );
}
