import type React from "react";
import Reveal from "@components/animate/reveal";
import { cn } from "@/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default function Section({
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "w-full md:max-w-4xl lg:max-w-[1110px] mx-auto py-16 md:py-20 px-5 scroll-mt-6",
        className
      )}
    >
      <Reveal>{children}</Reveal>
    </section>
  );
}
