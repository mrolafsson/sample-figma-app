"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

/**
 * A draggable slider component for selecting numeric values within a range.
 *
 * @description
 * The Slider component allows users to select a value from a continuous or discrete range
 * by dragging a thumb along a track. Built on Radix UI Slider primitive for accessibility.
 *
 * @example
 * ```tsx
 * // Basic slider
 * <Slider defaultValue={[50]} max={100} step={1} />
 *
 * // Controlled slider
 * const [value, setValue] = useState([33])
 * <Slider value={value} onValueChange={setValue} />
 *
 * // With min/max and step
 * <Slider defaultValue={[25]} min={0} max={100} step={5} />
 *
 * // Range slider (two thumbs)
 * <Slider defaultValue={[25, 75]} max={100} />
 *
 * // Disabled
 * <Slider defaultValue={[50]} disabled />
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/slider} shadcn/ui Slider documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/slider} Radix UI Slider documentation
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
