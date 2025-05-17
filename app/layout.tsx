import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/ui/Navbar';
import ScrollRail from '../components/ui/ScrollRail';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <ScrollRail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
