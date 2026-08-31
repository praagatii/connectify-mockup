"use client";

import { cn } from "@/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div className={cn("flex w-full flex-col gap-6", containerClassName)}>
        {cards.map((card) => (
          <div key={card.id} className="w-full overflow-hidden">
            <img
              src={card.image}
              alt={card.alt || ""}
              className={cn(
                "h-[80vh] w-full object-cover",
                imageClassName,
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage component with default data
const Skiper17 = () => {
  const defaultCards = [
    {
      id: 1,
      image: "/case-studies/flycure-health.jpg",
    },
    {
      id: 2,
      image: "/case-studies/enpay.jpg",
    },
    {
      id: 3,
      image: "/case-studies/stackintel.jpg",
    },
    {
      id: 4,
      image: "/case-studies/taurus-career-ai.jpg",
    },
    {
      id: 5,
      image: "/case-studies/instapay-pos.jpg",
    },
  ];

  return (
    <div className="w-full">
      <StickyCard002 cards={defaultCards} />
    </div>
  );
};

export { Skiper17, StickyCard002 };

/**
 * Skiper 17 StickyCard_002 — React + Gsap + scrollTrigger
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */