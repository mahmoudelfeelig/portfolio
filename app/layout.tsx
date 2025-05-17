import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-neutral-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
