import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Provider } from "../components/ui/provider";
import Navbar from "../components/ui/Navbar";
import ScrollRail from "../components/ui/ScrollRail";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Mahmoud Elfeel | Portfolio',
  description: 'A modern, all-around engineer portfolio site.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
