import React from "react";

type Direction = "up" | "down";

type ScrollDirectionOption = {
  direction?: Direction;
  threshold?: number;
};

export function useScrollDirection({
  direction: initialDirection = "up",
  threshold = 0,
}: ScrollDirectionOption = {}) {
  const [direction, setDirection] = React.useState<Direction>(initialDirection);

  React.useEffect(() => {
    let previousScrollY = window.scrollY;
    let throttleTimeout: number | null = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (Math.abs(previousScrollY - currentScrollY) < threshold) {
          throttleTimeout = null;
          return;
        }

        setDirection(previousScrollY > currentScrollY ? "up" : "down");
        previousScrollY = currentScrollY;
        throttleTimeout = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}
