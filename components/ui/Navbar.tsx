'use client';

import { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const MotionHeader = motion(Box);

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currY = window.scrollY;
      setHidden(currY > lastY && currY > 80);
      lastY = currY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <MotionHeader
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      position="fixed"
      top="0"
      w="100%"
      bg="rgba(16,16,16,0.8)"
      backdropFilter="blur(10px)"
      zIndex={50}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={6}
        py={4}
        align="center"
        justify="space-between"
        color="accentLight"
      >
        <Box fontSize="xl" fontWeight="bold" letterSpacing="widest">
          Mahmoud Elfeel
        </Box>
        <Flex as="nav" gap={6} fontSize="sm" fontWeight="medium">
          {['about', 'experience', 'projects', 'contact'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              _hover={{ color: 'accentGreen' }}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </Flex>
      </Flex>

      {hidden && (
        <IconButton
          position="fixed"
          bottom={6}
          right={6}
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
    </MotionHeader>
  );
}
