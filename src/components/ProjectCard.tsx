"use client";

import Link from "next/link";
import BorderGlow from "./BorderGlow";

interface ProjectCardProps {
  slug: string;
  name: string;
  image: string;
  context: string;
}

export default function ProjectCard({
  slug,
  name,
  image,
  context,
}: ProjectCardProps) {
  return (
    <BorderGlow
      backgroundColor="#ffffff"
      borderRadius={16}
      glowColor="263 83 60"
      glowRadius={24}
      glowIntensity={0.9}
      edgeSensitivity={35}
      colors={["#8f00ff", "#5228b9", "#c084fc"]}
    >
      <Link
        href={`/case-studies/${slug}`}
        className="group relative block aspect-[16/9] overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-1"
      >
        <div className="absolute inset-x-0 top-0 h-[55%] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-surface" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-[45%] flex-col justify-end p-5">
          <h3 className="font-inter text-2xl font-bold tracking-tight text-black">
            {name}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {context}
          </p>
        </div>
      </Link>
    </BorderGlow>
  );
}