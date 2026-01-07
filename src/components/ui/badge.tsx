import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Badge variant styles using class-variance-authority.
 *
 * @description Defines all available visual variants and sizes for the Badge component.
 *
 * **Variants:**
 * - `default` - Primary badge with brand colors
 * - `secondary` - Muted background for less emphasis
 * - `destructive` - Red/danger styling for errors or warnings
 * - `outline` - Border only, transparent background
 * - `success` - Green styling for positive states
 * - `warning` - Yellow/orange styling for caution
 * - `info` - Blue styling for informational content
 * - `muted` - Very subtle, low-emphasis badge
 * - `pro` - Special styling for premium/pro features
 * - `accent` - Highlighted badge with accent colors
 *
 * **Sizes:**
 * - `sm` - Extra small (10px text)
 * - `default` - Standard size
 * - `lg` - Larger padding
 * - `pill` - Fully rounded ends
 */
const badgeVariants = cva(
  "inline-flex items-center border text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm",
        outline:
          "text-foreground border-border",
        success:
          "border-transparent bg-success text-success-foreground shadow-sm",
        warning:
          "border-transparent bg-warning text-warning-foreground shadow-sm",
        info:
          "border-transparent bg-info text-info-foreground shadow-sm",
        muted:
          "border-transparent bg-muted text-muted-foreground",
        pro:
          "border-transparent bg-pink-100 text-primary font-semibold",
        accent:
          "border-transparent bg-accent text-accent-foreground shadow-sm",
      },
      size: {
        default: "px-2 py-0.5 rounded-md",
        sm: "px-1.5 py-0 text-[10px] rounded",
        lg: "px-3 py-1 rounded-md",
        pill: "px-3 py-1 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Props for the Badge component.
 *
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends VariantProps<typeof badgeVariants>
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * A small label component for displaying status, categories, or counts.
 *
 * @description
 * The Badge component is used to highlight an item's status or category.
 * It supports multiple color variants for different semantic meanings
 * and size options for various contexts.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>New</Badge>
 *
 * // Status indicators
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="destructive">Failed</Badge>
 *
 * // Pill style
 * <Badge size="pill">Premium</Badge>
 *
 * // With icon
 * <Badge variant="info">
 *   <Info className="h-3 w-3" /> Info
 * </Badge>
 *
 * // Pro badge
 * <Badge variant="pro">PRO</Badge>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/badge} shadcn/ui Badge documentation
 */
function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
