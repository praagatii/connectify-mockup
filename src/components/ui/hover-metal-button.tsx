"use client"

import { useState, forwardRef, type ComponentProps, type ReactNode } from "react"
import { MetalButton } from "@/components/ui/metal-button"

type HoverMetalButtonProps = ComponentProps<typeof MetalButton> & {
  children?: ReactNode
}

export const HoverMetalButton = forwardRef<HTMLDivElement, HoverMetalButtonProps>(
  function HoverMetalButton({ children, ...props }, ref) {
    const [hovered, setHovered] = useState(false)

    return (
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <MetalButton ref={ref} paused={!hovered} {...props}>
          {children}
        </MetalButton>
      </span>
    )
  }
)

HoverMetalButton.displayName = "HoverMetalButton"
