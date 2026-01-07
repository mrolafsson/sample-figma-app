import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Props for the Input component.
 *
 * @extends React.InputHTMLAttributes<HTMLInputElement>
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * When true, applies error styling to the input (red border and focus ring).
   * Use this to indicate validation errors.
   *
   * @default false
   * @example
   * ```tsx
   * <Input error placeholder="Invalid input" />
   * ```
   */
  error?: boolean
}

/**
 * A styled text input component for forms and user input.
 *
 * @description
 * The Input component is a flexible text input that supports all native input types.
 * It includes built-in styling for focus states, disabled states, and error states.
 * Works seamlessly with form libraries and native form validation.
 *
 * @example
 * ```tsx
 * // Basic text input
 * <Input placeholder="Enter your name" />
 *
 * // Email input
 * <Input type="email" placeholder="Enter your email" />
 *
 * // Password input
 * <Input type="password" placeholder="Enter password" />
 *
 * // With error state
 * <Input error placeholder="Invalid input" />
 *
 * // With label
 * <div className="grid gap-1.5">
 *   <Label htmlFor="email">Email</Label>
 *   <Input type="email" id="email" placeholder="Email" />
 * </div>
 *
 * // Disabled state
 * <Input disabled placeholder="Cannot edit" />
 *
 * // File input
 * <Input type="file" />
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/input} shadcn/ui Input documentation
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
