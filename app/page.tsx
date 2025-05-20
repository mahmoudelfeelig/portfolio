'use client';

import Hero from '../components/sections/Hero';
import Banner3D from '../components/three/Banner3D';
import ParallaxBand from '../components/ui/ParallaxBand';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import SkillTree from '../components/sections/SkillTree';
import Contact from '../components/sections/Contact';
import Footer from '../components/ui/Footer';
import { Heading, Text, Box } from '@chakra-ui/react';
import '../styles/globals.css';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Banner3D />

      <Box as="section" py={{ base: 12, md: 16 }}>
        <About />
      </Box>

      <Box as="section" my={{ base: 8, md: 12 }}>
        <ParallaxBand image="/bands/coding.jpg">
          <Heading as="h2" size="xl" mb={4} color="white">
            Data-Driven Vision
          </Heading>
          <Text fontSize="lg" color="white" maxW="2xl" mx="auto">
            At IAV GmbH I built YOLO-powered real-time computer vision pipelines and analytics dashboards to deliver actionable insights from live video streams.
          </Text>
        </ParallaxBand>
      </Box>

      <Box as="section" py={{ base: 12, md: 16 }}>
        <Experience />
      </Box>

      <Box as="section" my={{ base: 8, md: 12 }}>
        <ParallaxBand image="/bands/keyboard.jpg" flip>
          <Heading as="h2" size="xl" mb={4} color="white">
            Interactive Tech Demos
          </Heading>
          <Text fontSize="lg" color="white" maxW="2xl" mx="auto">
            I prototype interactive dashboards and iOS apps with Swift and D3.js to showcase vision-driven features.
          </Text>
        </ParallaxBand>
      </Box>

      <Box as="section" py={{ base: 12, md: 16 }}>
        <Projects />
      </Box>

      <Box as="section" my={{ base: 8, md: 12 }}>
        <ParallaxBand image="/bands/city.jpg">
          <Heading as="h2" size="xl" mb={4} color="white">
            Modern Web Experiences
          </Heading>
          <Text fontSize="lg" color="white" maxW="2xl" mx="auto">
            From Next.js sites to 3D shaders, I craft front-ends that engage and delight.
          </Text>
        </ParallaxBand>
      </Box>

      <Box as="section" py={{ base: 12, md: 16 }}>
        <SkillTree />
      </Box>

      <Box as="section" my={{ base: 8, md: 12 }}>
        <ParallaxBand image="/bands/hallway.jpg" flip>
          <Heading as="h2" size="xl" mb={4} color="white">
            Join the Journey
          </Heading>
          <Text fontSize="lg" color="white" maxW="2xl" mx="auto">
            Let’s collaborate to build the next generation of data-driven, interactive web experiences.
          </Text>
        </ParallaxBand>
      </Box>

      <Box as="section" py={{ base: 12, md: 16 }}>
        <Contact />
      </Box>
      <Footer />
    </main>
  );
}
