"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

gsap.registerPlugin(ScrollTrigger);

type ProgressListener = (progress: number) => void;

export type ScrollState = {
  /** Real scroll progress through the page, 0..1. */
  progress: number;
  /**
   * Progress pinned to section positions (see SceneAnchor), so the 3D scene's timing
   * stays the same when sections are added or their content changes length.
   */
  sceneProgress: number;
};

/** Scene progress to report when the top of `selector` reaches the top of the viewport. */
export type SceneAnchor = { selector: string; progress: number };

export type SceneAnchors = {
  /** Used for viewports wider than 760px with a fine pointer. */
  regular: SceneAnchor[];
  /** Used for phones and other compact or touch viewports. */
  compact: SceneAnchor[];
};

/**
 * Scroll progress kept outside React state.
 * Reading it never re-renders; components either subscribe for per-frame work
 * (3D scene, progress bar) or use useScrollSelector to re-render only when a
 * derived value changes (active nav stage, scene phase).
 */
export type ScrollProgressStore = {
  get: () => number;
  getScene: () => number;
  subscribe: (listener: ProgressListener) => () => void;
};

function createScrollProgressStore() {
  const state: ScrollState = { progress: 0, sceneProgress: 0 };
  const listeners = new Set<ProgressListener>();

  return {
    get: () => state.progress,
    getScene: () => state.sceneProgress,
    subscribe: (listener: ProgressListener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set: (progress: number, sceneProgress: number) => {
      state.progress = progress;
      state.sceneProgress = sceneProgress;
      listeners.forEach((listener) => listener(progress));
    }
  };
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/** Interpolates scene progress linearly between anchor sections (page start = 0, page end = 1). */
function toSceneProgress(scrollOffset: number, range: number, start: number, anchors: SceneAnchor[] | undefined) {
  if (!anchors?.length) {
    return range > 0 ? clamp01(scrollOffset / range) : 0;
  }

  const points = [{ at: 0, progress: 0 }];
  for (const anchor of anchors) {
    const element = document.querySelector(anchor.selector);
    if (!element) continue;
    const at = element.getBoundingClientRect().top + window.scrollY - start;
    if (at > points[points.length - 1].at && at < range) {
      points.push({ at, progress: anchor.progress });
    }
  }
  points.push({ at: range, progress: 1 });

  for (let index = 1; index < points.length; index++) {
    const next = points[index];
    if (scrollOffset <= next.at) {
      const previous = points[index - 1];
      return previous.progress + (next.progress - previous.progress) * clamp01((scrollOffset - previous.at) / (next.at - previous.at));
    }
  }

  return 1;
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

export function useScrollProgress({ sceneAnchors }: { sceneAnchors?: SceneAnchors } = {}): ScrollProgressStore {
  const [store] = useState(createScrollProgressStore);
  const frame = useRef<number | null>(null);
  const latestProgress = useRef(0);
  const latestSceneProgress = useRef(0);

  useLayoutEffect(() => {
    const commitProgress = () => {
      frame.current = null;
      store.set(latestProgress.current, latestSceneProgress.current);
    };

    let trigger: ScrollTrigger;
    const compactQuery = window.matchMedia("(max-width: 760px), (pointer: coarse)");

    preserveScrollDuring(() => {
      trigger = ScrollTrigger.create({
        trigger: ".portfolio-shell",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.18,
        onUpdate: (self) => {
          latestProgress.current = self.progress;
          latestSceneProgress.current = toSceneProgress(
            self.scroll() - self.start,
            self.end - self.start,
            self.start,
            compactQuery.matches ? sceneAnchors?.compact : sceneAnchors?.regular
          );
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
  }, [sceneAnchors, store]);

  return store;
}

const initialScrollState: ScrollState = { progress: 0, sceneProgress: 0 };

/** Re-renders only when selector(state) changes. The selector must return a primitive. */
export function useScrollSelector<T extends string | number | boolean>(
  store: ScrollProgressStore,
  selector: (state: ScrollState) => T
): T {
  return useSyncExternalStore(
    store.subscribe,
    () => selector({ progress: store.get(), sceneProgress: store.getScene() }),
    () => selector(initialScrollState)
  );
}
