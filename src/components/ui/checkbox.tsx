"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * A toggle control for boolean selection.
 *
 * @description
 * The Checkbox component allows users to select one or more options from a set.
 * Built on Radix UI Checkbox primitive for accessibility support including
 * keyboard navigation and ARIA attributes.
 *
 * ## Features
 * - **Controlled & Uncontrolled** - Works with or without state management
 * - **Indeterminate state** - Support for partial selection
 * - **Form integration** - Works with form libraries and native forms
 * - **Accessible** - Full keyboard navigation and screen reader support
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Checkbox />
 *
 * // With label
 * <div className="flex items-center space-x-2">
 *   <Checkbox id="terms" />
 *   <Label htmlFor="terms">Accept terms and conditions</Label>
 * </div>
 *
 * // Controlled
 * const [checked, setChecked] = useState(false)
 * <Checkbox checked={checked} onCheckedChange={setChecked} />
 *
 * // Disabled
 * <Checkbox disabled />
 *
 * // Default checked
 * <Checkbox defaultChecked />
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/checkbox} shadcn/ui Checkbox documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/checkbox} Radix UI Checkbox documentation
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
