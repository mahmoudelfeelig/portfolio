import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Provider } from "../components/ui/provider";
import Navbar from "../components/ui/Navbar";
import ScrollRail from "../components/ui/ScrollRail";
import "../styles/globals.css"; // keep only your custom CSS

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
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
