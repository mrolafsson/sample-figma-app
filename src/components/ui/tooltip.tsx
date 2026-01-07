"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

/**
 * A popup that displays information when hovering over an element.
 *
 * @description
 * The Tooltip component displays additional information when users hover over
 * or focus on an element. Built on Radix UI Tooltip primitive for accessibility.
 *
 * ## Sub-components
 * - `TooltipProvider` - Required wrapper to enable tooltips (add at app root)
 * - `Tooltip` - Root wrapper managing open state
 * - `TooltipTrigger` - Element that triggers the tooltip
 * - `TooltipContent` - The tooltip popup content
 *
 * @example
 * ```tsx
 * // Basic tooltip
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger asChild>
 *       <Button variant="outline">Hover me</Button>
 *     </TooltipTrigger>
 *     <TooltipContent>
 *       <p>Add to library</p>
 *     </TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 *
 * // With side positioning
 * <TooltipContent side="right">
 *   <p>Tooltip on the right</p>
 * </TooltipContent>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/tooltip} shadcn/ui Tooltip documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/tooltip} Radix UI Tooltip documentation
 */

/** Required provider for tooltip functionality. Add at the app root. */
const TooltipProvider = TooltipPrimitive.Provider

/** Root wrapper that manages tooltip open/close state. */
const Tooltip = TooltipPrimitive.Root

/** Element that triggers the tooltip on hover/focus. */
const TooltipTrigger = TooltipPrimitive.Trigger

/** The tooltip popup content with animations. */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
