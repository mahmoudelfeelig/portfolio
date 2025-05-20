'use client';

import {
  Container,
  Heading,
  VStack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FadeIn } from '../motion/FadeIn';

export default function Contact() {
  return (
    <Container as="section" id="contact">
      <FadeIn>
        <Heading fontSize="3xl" fontWeight="bold" mb={6}>
          Get in Touch
        </Heading>
        <VStack align="start" gap={4} fontSize="lg">
          <Text>
            📧{' '}
            <ChakraLink
              href="mailto:mahmooudelfeelig@gmail.com"
              textDecoration="underline"
              _hover={{ color: 'accentGreen' }}
            >
              mahmoudelfeelig@gmail.com
            </ChakraLink>
          </Text>
          <Text>📱 +49 1523 8498263</Text>
          <Text>
            💻{' '}
            <ChakraLink
              href="https://github.com/mahmoudelfeelig"
              target="_blank"
              rel="noopener noreferrer"
              textDecoration="underline"
              _hover={{ color: 'accentGreen' }}
            >
              github.com/mahmoudelfeelig
            </ChakraLink>
          </Text>
          <Text>
            🌐{' '}
            <ChakraLink
              href="https://elfeel.me"
              target="_blank"
              rel="noopener noreferrer"
              textDecoration="underline"
              _hover={{ color: 'accentGreen' }}
            >
              elfeel.me
            </ChakraLink>
          </Text>
        </VStack>
      </FadeIn>
    </Container>
  );
}
