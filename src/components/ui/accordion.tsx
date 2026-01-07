"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * A vertically stacked set of collapsible content panels.
 *
 * @description
 * The Accordion component displays a list of sections that can be expanded or collapsed.
 * Built on Radix UI Accordion primitive for accessibility support including keyboard
 * navigation and ARIA attributes.
 *
 * ## Sub-components
 * - `Accordion` - Root wrapper (supports `type="single"` or `type="multiple"`)
 * - `AccordionItem` - Individual collapsible section
 * - `AccordionTrigger` - Clickable header that toggles content
 * - `AccordionContent` - Expandable content area
 *
 * @example
 * ```tsx
 * // Single selection (only one open at a time)
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item-2">
 *     <AccordionTrigger>Is it styled?</AccordionTrigger>
 *     <AccordionContent>
 *       Yes. It comes with default styles.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 *
 * // Multiple selection
 * <Accordion type="multiple">
 *   ...
 * </Accordion>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/accordion} shadcn/ui Accordion documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/accordion} Radix UI Accordion documentation
 */
const Accordion = AccordionPrimitive.Root

/**
 * Individual collapsible section within the accordion.
 * Contains a trigger and content pair.
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

/**
 * Clickable header that expands/collapses the accordion content.
 * Includes animated chevron indicator.
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * Collapsible content area with animated expand/collapse.
 * Shown when the associated trigger is activated.
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
