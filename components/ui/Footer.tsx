'use client';

import { useState, useEffect } from 'react';
import { Box, Flex, Text, Link, IconButton, Icon } from '@chakra-ui/react';
import {
  ArrowUpIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      as="footer"
      mt={32}
      borderTop="1px solid"
      borderColor="rgba(226,232,240,0.1)"
      bg="rgba(16,16,16,0.05)"
      py={12}
      fontSize="sm"
      color="rgba(226,232,240,0.8)"
    >
      <Flex
        maxW="4xl"
        mx="auto"
        px={6}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={6}
      >
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Text>© {new Date().getFullYear()} Mahmoud Elfeel</Text>
          <Text fontSize="xs" opacity={0.6}>
            Built with Next.js, Chakra UI, and ❤️
          </Text>
        </Box>

        <Flex align="center" gap={4}>
          <Link
            href="mailto:mahmooudelfeelig@gmail.com"
            _hover={{ color: 'accentGreen' }}
            aria-label="Email"
          >
            <Icon as={EnvelopeIcon} boxSize={5} />
          </Link>
          <Link
            href="https://github.com/mahmoudelfeelig"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'accentGreen' }}
            aria-label="GitHub"
          >
            <Icon as={CodeBracketIcon} boxSize={5} />
          </Link>
          <Link
            href="https://elfeel.me"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'accentGreen' }}
            aria-label="Website"
          >
            <Icon as={LinkIcon} boxSize={5} />
          </Link>
        </Flex>
      </Flex>

      {visible && (
        <IconButton
          position="fixed"
          bottom={6}
          right={6}
          zIndex={50}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          bg="rgba(0,196,140,0.2)"
          _hover={{ bg: 'rgba(0,196,140,0.4)' }}
          backdropFilter="blur(6px)"
          size="md"
        >
          <Icon as={ArrowUpIcon} boxSize={5} />
        </IconButton>
      )}
    </Box>
  );
}
