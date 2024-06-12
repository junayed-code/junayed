import type React from "react";
import { cn } from "@/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

function Section({ className, ...props }: SectionProps) {
  return (
    <section {...props} className={cn("py-20 md:py-28 lg:py-32", className)} />
  );
}

export default Section;
