"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Eased wheel/trackpad scrolling and smooth nav-link jumps via Lenis.
 * Touch keeps the device's native momentum scrolling (syncTouch is off),
 * and nothing is smoothed for visitors who prefer reduced motion.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: true,
      stopInertiaOnNavigate: true,
      allowNestedScroll: true
    });

    // Drive Lenis from GSAP's ticker so ScrollTrigger reads the same scroll position on the same frame.
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, []);
}
