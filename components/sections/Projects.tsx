'use client';

import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../ui/ProjectCard';

const projects = [
    {
    title: 'Portfolio 1.0 (Elfeel)',
    shortDesc: 'Personal portfolio website built with React and TailwindCSS.',
    longDesc: 'Showcases skills, experience, and projects with a sleek, responsive design, modern animations, and a contact section.',
    year: 2023,
    techStack: ['React', 'TailwindCSS', 'Framer Motion'],
    features: ['Responsive design', 'Project showcases', 'Downloadable resume', 'Contact form'],
    repo: 'https://github.com/mahmoudelfeelig/elfeel',
  },
  {
    title: 'Portfolio 2.0',
    shortDesc: 'Modern portfolio built with animations, skill trees, and 3D effects.',
    longDesc: 'A next-generation portfolio showcasing full-stack engineering, motion design, and creative UI using Chakra, Framer Motion, and Three.js.',
    year: 2025,
    techStack: ['Next.js', 'Chakra UI', 'Framer Motion', 'Three.js'],
    features: ['3D shaders', 'Skill tree interaction', 'Expandable project cards', 'Responsive modern layout'],
    repo: 'https://github.com/mahmoudelfeelig/portfolio',
  },
  {
    title: 'RPS',
    shortDesc: 'Interactive web application with betting, tasks, achievements, and a simulated microeconomy.',
    longDesc: 'Full-stack system with React frontend and Node.js/Express backend, connected to MongoDB, featuring tasks, items, pets, casino games and easter eggs.',
    year: 2025,
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    features: ['Betting system', 'Achievements', 'Item purchases', 'Easter eggs'],
    repo: 'https://github.com/mahmoudelfeelig/rps',
  },
  {
    title: 'Processor Simulation',
    shortDesc: 'Simulation of a fictional processor design and architecture using C.',
    longDesc: 'Emulates instruction execution, data flow, memory handling, and control logic with a custom instruction set architecture.',
    year: 2025,
    techStack: ['C'],
    features: ['Custom ISA', 'Memory and register simulation', 'ALU and control unit logic', 'Instruction execution'],
    repo: 'https://github.com/mahmoudelfeelig/ProcessorSimulation',
  },
  {
    title: 'Chatting Application',
    shortDesc: 'Socket-based client-server chat application in Python.',
    longDesc: 'Demonstrates networking concepts using TCP sockets and threading, allowing multiple clients to connect and communicate in real-time.',
    year: 2024,
    techStack: ['Python', 'Sockets', 'Threading'],
    features: ['Multi-client support', 'Real-time messaging', 'Graceful disconnection', 'Console logging'],
    repo: 'https://github.com/mahmoudelfeelig/ChattingApplication',
  },
  {
    title: 'Control Project',
    shortDesc: 'Simulation and analysis tool for classical control systems using MATLAB.',
    longDesc: 'Implements system modeling, transfer functions, time-domain analysis, root locus, Bode plots, and compensator design.',
    year: 2024,
    techStack: ['MATLAB', 'Simulink'],
    features: ['Transfer function modeling', 'Time-domain analysis', 'Frequency response', 'Compensator design'],
    repo: 'https://github.com/mahmoudelfeelig/controlproject',
  },
  {
    title: 'Communication Theory',
    shortDesc: 'MATLAB-based simulation of digital signal compression and transmission.',
    longDesc: 'Includes quantization, encoding, channel noise simulation, and signal reconstruction with comparative visualization.',
    year: 2024,
    techStack: ['MATLAB', 'Octave'],
    features: ['Signal sampling', 'Quantization', 'Huffman encoding', 'Error modeling'],
    repo: 'https://github.com/mahmoudelfeelig/CommunicationTheory',
  },
  {
    title: 'Data Analysis Pipeline',
    shortDesc: 'Anomaly detection pipeline using statistical methods and machine learning.',
    longDesc: 'Covers data profiling, Z-score filtering, PDF/PMF modeling, and Naïve Bayes classifier implementation, benchmarked against scikit-learn models.',
    year: 2024,
    techStack: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Scikit-learn'],
    features: ['Data profiling', 'Outlier detection', 'Naïve Bayes classifier', 'Benchmarking'],
    repo: 'https://github.com/mahmoudelfeelig/DataAnalysis',
  },
];



export default function Projects() {
  return (
    <Container as="section" id="projects" py={16}>
      <Heading as="h2" fontSize="3xl" mb={8}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            shortDesc={project.shortDesc}
            longDesc={project.longDesc}
            year={project.year}
            techStack={project.techStack}
            features={project.features}
            repo={project.repo}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
