import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * A container component for grouping related content and actions.
 *
 * @description
 * The Card component provides a flexible container with consistent styling for
 * displaying grouped content. It includes sub-components for structured layouts:
 * - `CardHeader` - Top section for title and description
 * - `CardTitle` - Main heading text
 * - `CardDescription` - Supporting descriptive text
 * - `CardContent` - Main content area
 * - `CardFooter` - Bottom section for actions
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description goes here.</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Main content of the card.</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/card} shadcn/ui Card documentation
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * Header section of the Card, typically contains CardTitle and CardDescription.
 * Provides consistent spacing and layout for card headers.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * Main title heading for the Card.
 * Renders as an h3 element with semibold styling.
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * Supporting description text for the Card.
 * Renders with muted foreground color for visual hierarchy.
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * Main content area of the Card.
 * Contains the primary content with appropriate padding.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * Footer section of the Card, typically used for actions.
 * Renders with flex layout for horizontal alignment of buttons.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-5 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
