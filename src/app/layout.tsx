import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealOnScroll from "@/components/RevealOnScroll";
import ThemeProvider from "@/components/ThemeProvider";
import { TopBlur } from "@/components/ui/edge-blur";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connectify — Engineering the Platforms Behind Modern Enterprises",
  description:
    "Connectify partners with ambitious organizations to design, build, and scale digital platforms — backed by strategic business and capital advisory.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background font-sans text-foreground transition-colors"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SmoothScroll />
          <RevealOnScroll />
          <TopBlur height={28} />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}