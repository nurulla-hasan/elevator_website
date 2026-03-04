import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",

        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",

        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",

        success:
          "border-transparent bg-green-100 text-green-700 hover:bg-green-100/80 dark:bg-green-900/30 dark:text-green-400 backdrop-blur-sm",

        warning:
          "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-900/30 dark:text-yellow-400 backdrop-blur-sm",

        info: "border-transparent bg-blue-100 text-blue-700 hover:bg-blue-100/80 dark:bg-blue-900/30 dark:text-blue-400 backdrop-blur-sm",

        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",

        ghost:
          "border-transparent bg-transparent hover:bg-muted text-foreground",

        muted:
          "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
