export const transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};