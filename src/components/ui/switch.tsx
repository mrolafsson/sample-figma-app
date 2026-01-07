"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

/**
 * A toggle switch component for binary on/off states.
 *
 * @description
 * The Switch component is a visually distinct toggle control for settings that have
 * an immediate effect. Use switches for features that can be turned on or off.
 * Built on Radix UI Switch primitive for accessibility.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch />
 *
 * // With label
 * <div className="flex items-center space-x-2">
 *   <Switch id="airplane-mode" />
 *   <Label htmlFor="airplane-mode">Airplane Mode</Label>
 * </div>
 *
 * // Controlled
 * const [enabled, setEnabled] = useState(false)
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 *
 * // Default checked
 * <Switch defaultChecked />
 *
 * // Disabled
 * <Switch disabled />
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/switch} shadcn/ui Switch documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/switch} Radix UI Switch documentation
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
