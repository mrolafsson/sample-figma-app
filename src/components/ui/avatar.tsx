"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

/**
 * A circular image component for displaying user profile pictures.
 *
 * @description
 * The Avatar component displays user profile images with a fallback for when
 * the image is unavailable or loading. Built on Radix UI Avatar primitive.
 *
 * ## Sub-components
 * - `Avatar` - Root container with circular clipping
 * - `AvatarImage` - The profile image
 * - `AvatarFallback` - Fallback content (initials, icon) when image unavailable
 *
 * @example
 * ```tsx
 * // With image
 * <Avatar>
 *   <AvatarImage src="/profile.jpg" alt="User name" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * // Fallback only
 * <Avatar>
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * // Custom size
 * <Avatar className="h-16 w-16">
 *   <AvatarImage src="/profile.jpg" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 * ```
 *
 * @see {@link https://ui.shadcn.com/docs/components/avatar} shadcn/ui Avatar documentation
 * @see {@link https://www.radix-ui.com/primitives/docs/components/avatar} Radix UI Avatar documentation
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/** The profile image element. Automatically hides if image fails to load. */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * Fallback content shown when the image is loading or unavailable.
 * Typically displays user initials or a placeholder icon.
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
