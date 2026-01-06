import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

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

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
