import './globals.css';
import {ReactNode} from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-neutral-950 text-neutral-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}