import React from "react";
import { BREAKPOINTS } from "../constants/styles/mediaquerys";

export default function useImageMedia(): number {
  const [media, setMedia] = React.useState(BREAKPOINTS.PLATINUM);

  React.useEffect(() => {
    // Handler to call on window resize

    function handleResize() {
      if (window.innerWidth >= BREAKPOINTS.PLATINUM)
        setMedia(BREAKPOINTS.DIAMOND);
      else if (window.innerWidth >= BREAKPOINTS.GOLD)
        setMedia(BREAKPOINTS.PLATINUM);
      else if (window.innerWidth >= BREAKPOINTS.SILVER)
        setMedia(BREAKPOINTS.GOLD);
      else setMedia(BREAKPOINTS.SILVER);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return media;
}
