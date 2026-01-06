"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { GripVertical, ChevronUp, ChevronDown, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

const contentBlockVariants = cva(
  "relative rounded-lg border bg-secondary/20 p-3 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "hover:bg-secondary/40",
        selected: "ring-2 ring-primary/20 bg-secondary/40",
        dragging: "opacity-50 ring-2 ring-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ContentBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentBlockVariants> {
  icon?: React.ReactNode
  onMoveUp?: () => void
  onMoveDown?: () => void
  onMore?: () => void
  showControls?: boolean
}

const ContentBlock = React.forwardRef<HTMLDivElement, ContentBlockProps>(
  (
    {
      className,
      variant,
      icon,
      children,
      onMoveUp,
      onMoveDown,
      onMore,
      showControls = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(contentBlockVariants({ variant, className }))}
      {...props}
    >
      <div className="flex items-start gap-3">
        {showControls && (
          <div className="flex items-center gap-2 shrink-0">
            <GripVertical className="h-4 w-4 text-muted-foreground/50 cursor-grab" />
            {icon && (
              <div className="p-1.5 rounded bg-secondary">
                {icon}
              </div>
            )}
          </div>
        )}
        <div className="flex-1 min-w-0">{children}</div>
        {showControls && (
          <div className="flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-6 w-6 text-muted-foreground"
              onClick={onMoveUp}
            >
              <ChevronUp className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-6 w-6 text-muted-foreground"
              onClick={onMoveDown}
            >
              <ChevronDown className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-6 w-6 text-muted-foreground"
              onClick={onMore}
            >
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
)
ContentBlock.displayName = "ContentBlock"

const ContentBlockInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full border-0 bg-transparent p-0 text-lg font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-0",
      className
    )}
    {...props}
  />
))
ContentBlockInput.displayName = "ContentBlockInput"

const ContentBlockText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
ContentBlockText.displayName = "ContentBlockText"

export { ContentBlock, ContentBlockInput, ContentBlockText, contentBlockVariants }
