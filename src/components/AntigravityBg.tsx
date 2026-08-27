"use client";

import dynamic from "next/dynamic";

const Antigravity = dynamic(() => import("./Antigravity"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", background: "rgba(143,0,255,0.1)" }} />,
});

export default function AntigravityBg() {
  return (
    <div className="pointer-events-none fixed inset-0" style={{ width: "100vw", height: "100vh", zIndex: 40 }}>
      <Antigravity
        count={150}
        magnetRadius={8}
        ringRadius={7}
        waveSpeed={0.2}
        waveAmplitude={0.1}
        particleSize={0.3}
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
