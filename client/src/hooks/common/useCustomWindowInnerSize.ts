import { useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

function useCustomWindowInnerSize(delay = 700) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [delay]);

  return { width, height };
}

export default useCustomWindowInnerSize;
