import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Provider } from "../components/ui/provider";
import Navbar from "../components/ui/Navbar";
import ScrollRail from "../components/ui/ScrollRail";
import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Mahmoud Elfeel | Portfolio',
  description: 'A modern, all-around engineer portfolio site.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <ScrollRail />
          {children}
        </Provider>
      </body>
    </html>
  );
}
