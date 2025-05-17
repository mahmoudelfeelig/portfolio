'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = ['About', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      setHidden(curr > last && curr > 80);
      last = curr;
    };
    addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="fixed inset-x-0 top-0 z-50 bg-primaryDark/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-accentLight tracking-wider">
          Mahmoud Elfeel
        </span>
        <ul className="hidden gap-8 md:flex">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-accentLight/80 hover:text-accentLight transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}