import React from "react";

function useDimension(targetRef: React.RefObject<HTMLElement>) {
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    function updateDimension() {
      if (!targetRef.current) return;
      const { height, width } = targetRef.current.getBoundingClientRect();
      setDimension({ width, height });
    }
    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, [targetRef]);

  return dimension;
}

export default useDimension;
