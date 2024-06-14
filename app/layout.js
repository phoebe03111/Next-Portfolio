import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata = {
  title: "Phoebe Chang | Web Developer",
  description: "Phoebe Chang's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
