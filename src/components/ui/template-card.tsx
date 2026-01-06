"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const templateCardVariants = cva(
  "group relative overflow-hidden rounded-xl border bg-card transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "hover:border-primary/50 hover:shadow-md",
        selected:
          "border-primary ring-2 ring-primary/20 shadow-md",
        option:
          "flex flex-col items-center justify-center gap-3 p-6 text-center hover:bg-secondary/50 hover:border-primary/50",
      },
      size: {
        default: "",
        sm: "max-w-[200px]",
        lg: "max-w-[300px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TemplateCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof templateCardVariants> {
  selected?: boolean
}

const TemplateCard = React.forwardRef<HTMLDivElement, TemplateCardProps>(
  ({ className, variant, size, selected, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        templateCardVariants({
          variant: selected ? "selected" : variant,
          size,
          className,
        })
      )}
      {...props}
    />
  )
)
TemplateCard.displayName = "TemplateCard"

const TemplateCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100",
      className
    )}
    {...props}
  />
))
TemplateCardImage.displayName = "TemplateCardImage"

const TemplateCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-3", className)} {...props} />
))
TemplateCardContent.displayName = "TemplateCardContent"

const TemplateCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-sm font-medium text-card-foreground", className)}
    {...props}
  />
))
TemplateCardTitle.displayName = "TemplateCardTitle"

const TemplateCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground mt-1", className)}
    {...props}
  />
))
TemplateCardDescription.displayName = "TemplateCardDescription"

const TemplateCardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-12 w-12 items-center justify-center rounded-lg text-primary",
      className
    )}
    {...props}
  />
))
TemplateCardIcon.displayName = "TemplateCardIcon"

export {
  TemplateCard,
  TemplateCardImage,
  TemplateCardContent,
  TemplateCardTitle,
  TemplateCardDescription,
  TemplateCardIcon,
  templateCardVariants,
}
