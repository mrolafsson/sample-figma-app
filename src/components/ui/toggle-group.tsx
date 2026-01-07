"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Toggle group container variant styles.
 *
 * **Variants:**
 * - `default` - Rounded container with secondary background
 * - `primary` - Same as default (for semantic consistency)
 * - `outline` - Bordered container
 * - `contained` - Compact variant with smaller padding
 */
const toggleGroupVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-secondary p-1 gap-0",
        primary: "rounded-lg bg-secondary p-1 gap-0",
        outline: "rounded-lg border border-input p-1 gap-0",
        contained: "rounded-md bg-secondary p-0.5 gap-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const toggleGroupItemVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-md text-muted-foreground hover:text-foreground data-[state=on]:bg-white data-[state=on]:text-foreground data-[state=on]:shadow-sm",
        primary:
          "rounded-md text-muted-foreground hover:text-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm",
        outline:
          "rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground data-[state=on]:bg-secondary data-[state=on]:text-foreground",
        contained:
          "rounded text-muted-foreground hover:text-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        default: "h-7 px-4",
        sm: "h-6 px-3 text-xs",
        lg: "h-8 px-5",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/** Context for passing variant and size to child items. */
const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleGroupItemVariants>
>({
  variant: "default",
  size: "default",
})

/**
 * A group of toggle buttons where one or multiple can be selected.
 *
 * @description
 * The ToggleGroup component creates a set of related toggle buttons that work
 * together. Supports single selection (like radio buttons) or multiple selection.
 * Built on Radix UI ToggleGroup primitive for accessibility.
 *
 * ## Sub-components
 * - `ToggleGroup` - Root container managing selection state
 * - `ToggleGroupItem` - Individual toggle button
 *
 * @example
 * ```tsx
 * // Single selection
 * <ToggleGroup type="single" defaultValue="center">
 *   <ToggleGroupItem value="left">
 *     <AlignLeft className="h-4 w-4" />
 *   </ToggleGroupItem>
 *   <ToggleGroupItem value="center">
 *     <AlignCenter className="h-4 w-4" />
 *   </ToggleGroupItem>
 *   <ToggleGroupItem value="right">
 *     <AlignRight className="h-4 w-4" />
 *   </ToggleGroupItem>
 * </ToggleGroup>
 *
 * // Multiple selection
 * <ToggleGroup type="multiple">
 *   <ToggleGroupItem value="bold">B</ToggleGroupItem>
 *   <ToggleGroupItem value="italic">I</ToggleGroupItem>
 *   <ToggleGroupItem value="underline">U</ToggleGroupItem>
 * </ToggleGroup>
 *
 * // With variant
 * <ToggleGroup type="single" variant="outline">
 *   ...
 * </ToggleGroup>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/toggle-group} shadcn/ui ToggleGroup documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/toggle-group} Radix UI ToggleGroup documentation
 */
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleGroupVariants> &
    VariantProps<typeof toggleGroupItemVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(toggleGroupVariants({ variant, className }))}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

/**
 * Individual toggle button within a ToggleGroup.
 * Inherits variant and size from parent group by default.
 */
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleGroupItemVariants>
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({
          variant: variant || context.variant,
          size: size || context.size,
          className,
        })
      )}
      {...props}
    />
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem, toggleGroupVariants, toggleGroupItemVariants }
