import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button variant styles using class-variance-authority.
 *
 * @description Defines all available visual variants and sizes for the Button component.
 *
 * **Variants:**
 * - `default` - Primary action button with brand colors
 * - `secondary` - Less prominent actions, uses muted background
 * - `destructive` - Dangerous or irreversible actions (delete, remove)
 * - `warning` - Actions requiring caution
 * - `success` - Positive confirmation actions
 * - `accent` - Highlighted or featured actions
 * - `outline` - Bordered button with transparent background
 * - `ghost` - Minimal button, only shows hover state
 * - `link` - Appears as a text link with underline on hover
 *
 * **Sizes:**
 * - `sm` - Small (h-8, px-3)
 * - `default` - Standard (h-9, px-4)
 * - `lg` - Large (h-10, px-5)
 * - `xl` - Extra large (h-11, px-6)
 * - `icon` - Square icon button (h-9, w-9)
 * - `icon-sm` - Small icon button (h-8, w-8)
 * - `icon-xs` - Extra small icon button (h-7, w-7)
 * - `icon-lg` - Large icon button (h-10, w-10)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:scale-[0.98]",
        warning:
          "bg-warning text-warning-foreground shadow-sm hover:bg-warning/90 active:scale-[0.98]",
        success:
          "bg-success text-success-foreground shadow-sm hover:bg-success/90 active:scale-[0.98]",
        outline:
          "border border-input bg-background shadow-sm hover:bg-secondary hover:text-secondary-foreground active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:scale-[0.98]",
        ghost:
          "hover:bg-secondary hover:text-secondary-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        accent:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 active:scale-[0.98]",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-lg",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-10 px-5 rounded-lg",
        xl: "h-11 px-6 text-base rounded-lg",
        icon: "h-9 w-9 rounded-md",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-xs": "h-7 w-7 rounded",
        "icon-lg": "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Props for the Button component.
 *
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @extends VariantProps<typeof buttonVariants>
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * When true, the button will render its child as the root element using Radix UI's Slot.
   * This is useful for rendering the button as a link or other element while preserving button styles.
   *
   * @default false
   * @example
   * ```tsx
   * <Button asChild>
   *   <a href="/dashboard">Go to Dashboard</a>
   * </Button>
   * ```
   */
  asChild?: boolean
}

/**
 * A versatile button component with multiple variants and sizes.
 *
 * @description
 * The Button component is the primary interactive element for triggering actions.
 * It supports multiple visual variants, sizes, and can render as different HTML elements
 * using the `asChild` prop.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 *
 * // With variant
 * <Button variant="destructive">Delete</Button>
 *
 * // With icon
 * <Button>
 *   <Mail /> Send Email
 * </Button>
 *
 * // Icon-only button
 * <Button variant="outline" size="icon">
 *   <Settings />
 * </Button>
 *
 * // As a link
 * <Button asChild>
 *   <a href="/about">Learn More</a>
 * </Button>
 *
 * // Loading state
 * <Button disabled>
 *   <Loader2 className="animate-spin" /> Loading...
 * </Button>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/button} shadcn/ui Button documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/utilities/slot} Radix UI Slot documentation
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
