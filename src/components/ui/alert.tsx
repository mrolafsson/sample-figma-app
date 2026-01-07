import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Alert variant styles using class-variance-authority.
 *
 * @description Defines all available visual variants for the Alert component.
 *
 * **Variants:**
 * - `default` - Neutral alert for general information
 * - `destructive` - Error alert for critical issues
 * - `success` - Success alert for positive feedback
 * - `warning` - Warning alert for cautionary messages
 * - `info` - Informational alert for helpful tips
 */
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success:
          "border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-500",
        warning:
          "border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-500",
        info:
          "border-blue-500/50 text-blue-700 dark:text-blue-400 [&>svg]:text-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * A callout component for displaying important messages to users.
 *
 * @description
 * The Alert component is used to display important messages, warnings, or feedback
 * to users. It supports icons, titles, and descriptions for comprehensive messaging.
 * Use the appropriate variant to convey the severity or type of message.
 *
 * @example
 * ```tsx
 * // Basic alert
 * <Alert>
 *   <AlertTitle>Heads up!</AlertTitle>
 *   <AlertDescription>
 *     You can add components to your app using the CLI.
 *   </AlertDescription>
 * </Alert>
 *
 * // Error alert with icon
 * <Alert variant="destructive">
 *   <AlertCircle className="h-4 w-4" />
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>
 *     Your session has expired. Please log in again.
 *   </AlertDescription>
 * </Alert>
 *
 * // Success alert
 * <Alert variant="success">
 *   <CheckCircle className="h-4 w-4" />
 *   <AlertTitle>Success</AlertTitle>
 *   <AlertDescription>
 *     Your changes have been saved successfully.
 *   </AlertDescription>
 * </Alert>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/alert} shadcn/ui Alert documentation
 */
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

/**
 * Title heading for the Alert component.
 * Renders as an h5 element with appropriate styling.
 */
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

/**
 * Description content for the Alert component.
 * Provides additional context or details about the alert message.
 */
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
