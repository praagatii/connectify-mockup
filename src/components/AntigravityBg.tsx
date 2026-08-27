"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("./Antigravity"), {
  ssr: false,
});

export default function AntigravityBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        canvas.style.background = "transparent";
        canvas.style.mixBlendMode = "multiply";
      }
    }
  });

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const p = Math.min(window.scrollY / (vh * 0.5), 1);
      setOpacity(1 - p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        opacity,
        transition: "opacity 0.1s linear",
      }}
    >
      <Antigravity
        count={200}
        magnetRadius={15}
        ringRadius={10}
        waveSpeed={0.2}
        waveAmplitude={0.1}
        particleSize={1.5}
        lerpSpeed={0.03}
        color="#8f00ff"
        autoAnimate={true}
        particleVariance={0.5}
        depthFactor={0.6}
        pulseSpeed={1.1}
        particleShape="sphere"
        fieldStrength={5.8}
      />
    </div>
  );
}
