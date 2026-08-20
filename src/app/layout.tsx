import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connectify Tech — Building the Future of Technology",
  description:
    "We are not just building tech — we are building future. Connectify Tech partners with ambitious brands to build scalable digital products, robust infrastructure, and immersive experiences since 2019.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <SmoothScroll />
      </body>
    </html>
  );
}