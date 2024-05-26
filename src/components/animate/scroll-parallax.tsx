"use client";

import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import useDimension from "@hooks/useDimension";

type ScrollParallaxProps = {
  ratio?: number;
  children: React.ReactNode;
};

function ScrollParallax({ ratio = 0.6, children }: ScrollParallaxProps) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { width: targetWidth } = useDimension(targetRef);
  const { width: containerWidth } = useDimension(containerRef);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const scrollX = useTransform(
    scrollYProgress,
    [0, 1],
    [targetWidth, -containerWidth]
  );

  return (
    <div
      ref={targetRef}
      style={{ height: containerWidth * ratio }}
      className="mt-12"
    >
      <div className="sticky top-1/4 overflow-x-hidden">
        <motion.div
          ref={containerRef}
          style={{ x: scrollX }}
          className="flex gap-x-10 w-max"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default ScrollParallax;
