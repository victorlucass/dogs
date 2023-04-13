import { useEffect, useState } from "react";

// This hook checks whether a particular media query matches the current viewport size
export function useMedia(media: string) {
  const [matches, setMatches] = useState(false);

  const changeMatches = () => {
    const { matches } = window.matchMedia(media);
    setMatches(matches);
  };

  useEffect(() => {
    // Check initial matches and add event listener for future changes
    changeMatches();
    window.addEventListener("resize", changeMatches);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("resize", changeMatches);
    };
  }, [media]);

  // Return whether the media query matches the current viewport size
  return matches;
}
