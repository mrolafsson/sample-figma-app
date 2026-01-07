"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Toggle variant styles using class-variance-authority.
 *
 * @description Defines all available visual variants and sizes for the Toggle component.
 *
 * **Variants:**
 * - `default` - Transparent background, visible on hover and when active
 * - `outline` - Bordered toggle with transparent background
 * - `pill` - Fully rounded toggle button
 *
 * **Sizes:**
 * - `sm` - Small (h-8)
 * - `default` - Standard (h-9)
 * - `lg` - Large (h-10)
 */
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        outline:
          "border border-input bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        pill:
          "rounded-full bg-transparent hover:bg-secondary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm",
      },
      size: {
        default: "h-9 px-3 min-w-9",
        sm: "h-8 px-2.5 min-w-8",
        lg: "h-10 px-4 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * A two-state button that can be on or off.
 *
 * @description
 * The Toggle component is a single toggle button that can be pressed on or off.
 * Useful for toolbar buttons, formatting controls, or any binary option.
 * Built on Radix UI Toggle primitive for accessibility.
 *
 * @example
 * ```tsx
 * // Basic toggle
 * <Toggle>
 *   <Bold className="h-4 w-4" />
 * </Toggle>
 *
 * // With text
 * <Toggle>Bold</Toggle>
 *
 * // Controlled
 * const [pressed, setPressed] = useState(false)
 * <Toggle pressed={pressed} onPressedChange={setPressed}>
 *   <Italic />
 * </Toggle>
 *
 * // Outline variant
 * <Toggle variant="outline">
 *   <Underline />
 * </Toggle>
 *
 * // Disabled
 * <Toggle disabled>
 *   <Bold />
 * </Toggle>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/toggle} shadcn/ui Toggle documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/toggle} Radix UI Toggle documentation
 */
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
