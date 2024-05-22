import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Phoebe Chang | Web Developer",
  description: "Phoebe Chang's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
