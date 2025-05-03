import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", function (e) {
      setWindowSize({
        width: this.window.innerWidth,
        height: this.window.innerHeight,
      });
    });
  }, []);

  return { width: windowSize.width, height: windowSize.height };
}
