'use client';

import { Box, Flex, Icon, Heading, Text } from '@chakra-ui/react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

interface Props {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly bullets: readonly string[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  bullets,
}: Props) {
  return (
    <Box
      borderRadius="lg"
      bg="rgba(16,16,16,0.2)"
      p={6}
      backdropFilter="blur(8px)"
    >
      <Flex align="center" gap={3} color="accentLight">
        <Icon
          as={BriefcaseIcon}
          boxSize={6}
          color="accentGreen"
          flexShrink={0}
        />
        <Box>
          <Heading as="h3" size="md">
            {role}
          </Heading>
          <Text fontSize="sm" color="rgba(226,232,240,0.7)">
            {company} · {period}
          </Text>
        </Box>
      </Flex>

      {/* Bullets list */}
      <Box
        as="ul"
        mt={4}
        pl={4}
        style={{ listStyleType: 'disc' }}
      >
        {bullets.map((b) => (
          <Box as="li" key={b} mb={2} fontSize="sm" lineHeight={6}>
            {b}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
