"use client"

import { useState, forwardRef, type ComponentProps, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MetalButton } from "@/components/ui/metal-button"

type HoverMetalButtonProps = ComponentProps<typeof MetalButton> & {
  children?: ReactNode
}

export const HoverMetalButton = forwardRef<HTMLDivElement, HoverMetalButtonProps>(
  function HoverMetalButton({ children, className, ...props }, ref) {
    const [hovered, setHovered] = useState(false)

    return (
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "inline-flex w-fit rounded-full transition-colors",
          hovered ? "" : "border border-black"
        )}
      >
        <MetalButton
          ref={ref}
          paused={!hovered}
          className={cn(className, hovered ? "" : "border-0")}
          {...props}
        >
          {children}
        </MetalButton>
      </span>
    )
  }
)

HoverMetalButton.displayName = "HoverMetalButton"
