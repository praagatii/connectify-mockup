"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("./Antigravity"), {
  ssr: false,
});

export default function AntigravityBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        canvas.style.background = "transparent";
      }
    }
  });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 30,
      }}
    >
      <Antigravity
        count={400}
        magnetRadius={18}
        ringRadius={6}
        waveSpeed={0.3}
        waveAmplitude={0.4}
        particleSize={1.8}
        lerpSpeed={0.04}
        color="#5228b9"
        autoAnimate={true}
        particleVariance={0.8}
        depthFactor={0.8}
        pulseSpeed={1.6}
        particleShape="sphere"
        fieldStrength={6.5}
      />
    </div>
  );
}
