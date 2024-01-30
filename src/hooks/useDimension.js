import { useEffect, useState } from "react";

/**
 *
 * @param {import("react").RefObject<HTMLElement>} targetRef
 */
function useDimension(targetRef) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  function updateDimension() {
    const { height, width } = targetRef.current.getBoundingClientRect();
    setDimension({ width, height });
  }

  useEffect(() => {
    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return dimension;
}

export default useDimension;
