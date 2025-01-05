import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

function Container({ className, asChild = false, ...props }: ContainerProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      className={cn(
        "mx-auto w-full px-5 md:max-w-4xl lg:max-w-6xl xl:max-w-[calc(theme(screens.xl)-2rem)]",
        className,
      )}
    />
  );
}

export default Container;
