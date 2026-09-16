import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RevealOnScroll from "@/components/RevealOnScroll";
import { TopBlur } from "@/components/ui/edge-blur";
import ShapeGrid from "@/components/ui/ShapeGrid";

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
      style={{ background: "#ffffff", colorScheme: "light" }}
      className={`${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;if(d){d.style.backgroundColor='#ffffff';d.style.colorScheme='light';var h=window.history;if(h&&'scrollRestoration'in h)h.scrollRestoration='manual';d.style.scrollBehavior='auto';}})();`,
          }}
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="relative isolate min-h-full bg-background text-foreground font-sans">
        <div aria-hidden className="fixed inset-0 -z-10 bg-[#ffffff]" />
        <div aria-hidden className="fixed inset-0 z-0">
          <ShapeGrid
            direction="diagonal"
            speed={0.32}
            squareSize={80}
            borderColor="rgba(139,92,246,0.18)"
            hoverFillColor="rgba(139,92,246,0.9)"
            shape="hexagon"
            hoverTrailAmount={1}
            className="h-full w-full"
          />
        </div>
        <SmoothScroll />
        <RevealOnScroll />
        <TopBlur height={28} />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}