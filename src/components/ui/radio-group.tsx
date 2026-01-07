"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * A set of mutually exclusive options where only one can be selected.
 *
 * @description
 * The RadioGroup component allows users to select exactly one option from a set.
 * Built on Radix UI RadioGroup primitive for accessibility support including
 * keyboard navigation and ARIA attributes.
 *
 * ## Sub-components
 * - `RadioGroup` - Root container managing selection state
 * - `RadioGroupItem` - Individual radio option
 *
 * @example
 * ```tsx
 * <RadioGroup defaultValue="option-1">
 *   <div className="flex items-center space-x-2">
 *     <RadioGroupItem value="option-1" id="option-1" />
 *     <Label htmlFor="option-1">Option 1</Label>
 *   </div>
 *   <div className="flex items-center space-x-2">
 *     <RadioGroupItem value="option-2" id="option-2" />
 *     <Label htmlFor="option-2">Option 2</Label>
 *   </div>
 * </RadioGroup>
 *
 * // Controlled
 * const [value, setValue] = useState("option-1")
 * <RadioGroup value={value} onValueChange={setValue}>
 *   ...
 * </RadioGroup>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/radio-group} shadcn/ui RadioGroup documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/radio-group} Radix UI RadioGroup documentation
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * Individual radio button within a RadioGroup.
 * Shows a filled circle indicator when selected.
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
