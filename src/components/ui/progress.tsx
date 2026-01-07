"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Progress bar variant styles.
 *
 * **Variants:**
 * - `default` - Primary brand color
 * - `success` - Green for successful/complete states
 * - `warning` - Yellow for cautionary states
 * - `destructive` - Red for error states
 * - `info` - Blue for informational states
 */
const progressVariants = cva(
  "h-full w-full flex-1 transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        destructive: "bg-destructive",
        info: "bg-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Props for the Progress component.
 */
export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {}

/**
 * A horizontal progress bar component for displaying completion status.
 *
 * @description
 * The Progress component visually indicates the completion percentage of a task
 * or process. Built on Radix UI Progress primitive for accessibility.
 *
 * @example
 * ```tsx
 * // Basic progress
 * <Progress value={33} />
 *
 * // With variant
 * <Progress value={75} variant="success" />
 *
 * // Loading state (indeterminate)
 * <Progress value={null} />
 *
 * // Full width with custom height
 * <Progress value={50} className="h-4" />
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/progress} shadcn/ui Progress documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/progress} Radix UI Progress documentation
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressVariants({ variant }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
