'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      setHidden(curr > last && curr > 80); // hide on scroll-down
      last = curr;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-neutral-900/50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-xl font-semibold">Mahmoud Elfeel</span>
        <ul className="hidden gap-6 md:flex">
          {['About', 'Experience', 'Projects', 'Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-pink-400 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}