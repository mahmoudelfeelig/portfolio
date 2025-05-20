'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  VStack,
  Link,
} from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/transition';
import { ArrowTopRightOnSquareIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

type ProjectProps = {
  title: string;
  shortDesc: string;
  longDesc: string;
  year: number;
  techStack: string[];
  features: string[];
  repo?: string;
};

export default function ProjectCard({
  title,
  shortDesc,
  longDesc,
  year,
  techStack,
  features,
  repo,
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      borderRadius="xl"
      bgGradient="linear(to-br, blackAlpha.600, #1a1f2b)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      p={6}
      transition="all .2s"
      _hover={{ boxShadow: 'xl' }}
    >
      <Flex justify="space-between" align="center" mb={2}>
        <Heading as="h3" size="md" color="accentLight">
          {title}
        </Heading>
        <Flex gap={2}>
          {repo && (
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              color="accentGreen"
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              gap={1}
              _hover={{ textDecoration: 'underline' }}
            >
              View
              <Icon as={ArrowTopRightOnSquareIcon} boxSize={4} />
            </Link>
          )}
          <Button
            size="xs"
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            color="gray.400"
            _hover={{ color: 'accentGreen' }}
            display="inline-flex"
            alignItems="center"
            gap={1}
          >
            {isOpen ? 'Less' : 'More'}
            <Icon
              as={isOpen ? ChevronDownIcon : ChevronRightIcon}
              boxSize={4}
            />
          </Button>
        </Flex>
      </Flex>

      <Text color="accentLight" fontSize="sm">
        {shortDesc}
      </Text>

      <Collapse in={isOpen} animateOpacity>
        <VStack align="start" gap={3} mt={4}>
          <Text fontSize="sm" color="gray.300">
            <strong>Year:</strong> {year}
          </Text>
          <Text fontSize="sm" color="gray.300">
            <strong>Details:</strong> {longDesc}
          </Text>
          <Box>
            <Text fontWeight="bold" fontSize="sm" mb={1} color="accentGreen">
              Tech Stack
            </Text>
            <VStack align="start" pl={2} gap={1}>
              {techStack.map(tech => (
                <Text key={tech} fontSize="sm" color="gray.400">• {tech}</Text>
              ))}
            </VStack>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="sm" mt={2} mb={1} color="accentGreen">
              Features
            </Text>
            <VStack align="start" pl={2} gap={1}>
              {features.map(feature => (
                <Text key={feature} fontSize="sm" color="gray.400">• {feature}</Text>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Collapse>
    </Box>
  );
}
