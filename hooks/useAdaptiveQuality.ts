"use client";

import { useEffect, useState } from "react";

export type QualityProfile = {
  isCompact: boolean;
  dpr: [number, number];
  segments: number;
};

export function useAdaptiveQuality(): QualityProfile {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px), (pointer: coarse)");
    const update = () => setIsCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return {
    isCompact,
    // The scene sits behind the content at low opacity most of the time, so native-resolution rendering is enough.
    dpr: [1, 1],
    segments: isCompact ? 1 : 3
  };
}
