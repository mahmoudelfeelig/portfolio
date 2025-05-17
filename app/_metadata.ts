import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mahmoud Elfeel • Portfolio',
  description: 'Full-stack engineer — React, Node & Computer Vision',
  keywords: [
    'Mahmoud Elfeel',
    'software engineer',
    'React',
    'Next.js',
    'computer vision',
  ],
  openGraph: {
    title: 'Mahmoud Elfeel • Portfolio',
    description:
      'Projects, experience and contact information for software engineer Mahmoud Elfeel.',
    url: 'https://elfeel.me',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mahmoudelfeelig',
  },
};
