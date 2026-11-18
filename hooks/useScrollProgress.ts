"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

gsap.registerPlugin(ScrollTrigger);

type ProgressListener = (progress: number) => void;

/**
 * Scroll progress (0..1) kept outside React state.
 * Reading it never re-renders; components either subscribe for per-frame work
 * (3D scene, progress bar) or use useScrollSelector to re-render only when a
 * derived value changes (active nav stage, scene phase).
 */
export type ScrollProgressStore = {
  get: () => number;
  subscribe: (listener: ProgressListener) => () => void;
};

function createScrollProgressStore() {
  let value = 0;
  const listeners = new Set<ProgressListener>();

  return {
    get: () => value,
    subscribe: (listener: ProgressListener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set: (next: number) => {
      value = next;
      listeners.forEach((listener) => listener(next));
    }
  };
}

function preserveScrollDuring(task: () => void) {
  const currentY = window.scrollY;
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  const previousRestoration = window.history.scrollRestoration;

  document.documentElement.style.scrollBehavior = "auto";
  window.history.scrollRestoration = "manual";
  task();
  window.scrollTo(0, currentY);
  window.requestAnimationFrame(() => {
    window.scrollTo(0, currentY);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
    window.history.scrollRestoration = previousRestoration;
  });
}

export function useScrollProgress(): ScrollProgressStore {
  const [store] = useState(createScrollProgressStore);
  const frame = useRef<number | null>(null);
  const latestProgress = useRef(0);

  useLayoutEffect(() => {
    const commitProgress = () => {
      frame.current = null;
      store.set(latestProgress.current);
    };

    let trigger: ScrollTrigger;

    preserveScrollDuring(() => {
      trigger = ScrollTrigger.create({
        trigger: ".portfolio-shell",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.18,
        onUpdate: (self) => {
          latestProgress.current = self.progress;
          if (frame.current === null) {
            frame.current = window.requestAnimationFrame(commitProgress);
          }
        }
      });
    });

    const refresh = window.setTimeout(() => preserveScrollDuring(() => ScrollTrigger.refresh()), 250);

    return () => {
      window.clearTimeout(refresh);
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
      trigger?.kill();
    };
  }, [store]);

  return store;
}

/** Re-renders only when selector(progress) changes. The selector must return a primitive. */
export function useScrollSelector<T extends string | number | boolean>(
  store: ScrollProgressStore,
  selector: (progress: number) => T
): T {
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.get()),
    () => selector(0)
  );
}
