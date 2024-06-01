import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const loadingVariants = cva(
  "bg-transparent border-4 col-start-1 row-start-1 rounded-full",
  {
    variants: {
      variant: {
        primary: "border-primary",
        secondary: "border-secondary",
      },
      size: {
        default: "w-10 h-10",
        sm: "w-7 h-7 border-[3px]",
        md: "w-12 h-12",
        lg: "w-16 h-16",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type LoadingProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof loadingVariants>;

export function Loading({ className, variant, size, ...props }: LoadingProps) {
  return (
    <div className="inline-grid bg-transparent z-50" {...props}>
      <div
        className={cn(loadingVariants({ size }), "border-muted-foreground")}
      />
      <div
        className={cn(
          loadingVariants({ size, variant, className }),
          "border-t-transparent animate-spin z-10"
        )}
      />
    </div>
  );
}
