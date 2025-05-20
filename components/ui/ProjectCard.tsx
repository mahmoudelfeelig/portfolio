'use client';

import { Box, Flex, Heading, Text, Link, Icon } from '@chakra-ui/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

type ProjectCardProps = {
  title: string;
  desc: string;
  link?: string;
};

export default function ProjectCard({ title, desc, link }: ProjectCardProps) {
  return (
    <Box
      borderRadius="xl"
      bg="rgba(16,16,16,0.2)"
      border="1px solid"
      borderColor="rgba(226,232,240,0.1)"
      p={6}
      transition="box-shadow .2s"
      _hover={{ boxShadow: 'xl' }}
    >
      <Flex justify="space-between" align="center" mb={2}>
        <Heading as="h3" size="md" fontWeight="semibold" color="accentLight">
          {title}
        </Heading>
        {link && (
          <Link
            href={link}
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
      </Flex>
      <Text fontSize="sm" color="rgba(226,232,240,0.8)">
        {desc}
      </Text>
    </Box>
  );
}
