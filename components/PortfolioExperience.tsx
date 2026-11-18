"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { CircuitBoard } from "lucide-react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useScrollProgress, useScrollSelector, type SceneAnchors, type ScrollState } from "@/hooks/useScrollProgress";
import { SystemLoader } from "@/components/chrome/SystemLoader";
import { BlueprintOverlay } from "@/components/chrome/BlueprintOverlay";
import { GlobalNav } from "@/components/nav/GlobalNav";
import { StaticCore } from "@/components/scene/StaticCore";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FooterSection } from "@/components/sections/FooterSection";

const loadCoreScene = () => import("@/components/scene/CoreScene").then((mod) => mod.CoreScene);

const CoreScene = dynamic(loadCoreScene, {
  ssr: false,
  loading: () => <StaticCore />
});

const MemoSystemLoader = memo(SystemLoader);
const MemoHeroSection = memo(HeroSection);
const MemoAboutSection = memo(AboutSection);
const MemoSkillsSection = memo(SkillsSection);
const MemoExperienceSection = memo(ExperienceSection);
const MemoOpenSourceSection = memo(OpenSourceSection);
const MemoProjectsSection = memo(ProjectsSection);
const MemoFooterSection = memo(FooterSection);

function shouldPreferStaticCore() {
  const navigatorWithHints = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  const isCompact = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
  const saveData = Boolean(navigatorWithHints.connection?.saveData);
  const lowMemory = typeof navigatorWithHints.deviceMemory === "number" && navigatorWithHints.deviceMemory <= 2;
  const lowCoreCount = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 2;

  return isCompact && (saveData || lowMemory || lowCoreCount);
}

function requestIdleWork(task: () => void, timeout = 1200) {
  if ("requestIdleCallback" in window) {
    const idleId = window.requestIdleCallback(task, { timeout });
    return () => window.cancelIdleCallback(idleId);
  }

  const timer = globalThis.setTimeout(task, 1);
  return () => globalThis.clearTimeout(timer);
}

/**
 * Scene progress at each section's top, measured on the layout the 3D scene was tuned for
 * (1440x900 and 390x844, before the Open Source section existed). Pinning the scene to these
 * keeps its timing (stack explosion, data pillar, reassembly) in step with the sections even
 * when sections are added or their content grows. Open Source has no anchor: the scene moves
 * through Timeline and Open Source together.
 */
const SCENE_ANCHORS: SceneAnchors = {
  regular: [
    { selector: "#engine", progress: 0.1121 },
    { selector: "#stack", progress: 0.2328 },
    { selector: ".stack-focus-gap", progress: 0.4132 },
    { selector: "#timeline", progress: 0.5253 },
    { selector: "#showcase", progress: 0.7187 },
    { selector: "#handshake", progress: 0.9743 }
  ],
  compact: [
    { selector: "#engine", progress: 0.0882 },
    { selector: "#stack", progress: 0.1706 },
    { selector: ".stack-focus-gap", progress: 0.3585 },
    { selector: "#timeline", progress: 0.4314 },
    { selector: "#showcase", progress: 0.6612 },
    { selector: "#handshake", progress: 0.9602 }
  ]
};

type DesktopScenePhase = "clear" | "peeking" | "dimmed";

function getDesktopScenePhase({ sceneProgress: progress }: ScrollState): DesktopScenePhase {
  if (progress >= 0.315 && progress < 0.455) {
    return "clear";
  }

  if ((progress >= 0.27 && progress < 0.315) || (progress >= 0.455 && progress < 0.465)) {
    return "peeking";
  }

  return "dimmed";
}

export function PortfolioExperience() {
  // Scroll progress lives outside React state; only the scene phase below re-renders this component.
  const scroll = useScrollProgress({ sceneAnchors: SCENE_ANCHORS });
  const desktopScenePhase = useScrollSelector(scroll, getDesktopScenePhase);
  const reduceMotion = useReducedMotion();
  const cursorAuraRef = useRef<HTMLDivElement>(null);
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [mobileStackBeat, setMobileStackBeat] = useState({ focus: false, peeking: false });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const stackSceneFocus = isCompactViewport ? mobileStackBeat.focus : desktopScenePhase === "clear";
  const sceneIsClear = stackSceneFocus;
  const sceneIsPeeking = isCompactViewport
    ? mobileStackBeat.peeking && !mobileStackBeat.focus
    : desktopScenePhase === "peeking";
  const sceneProgressOverride = isCompactViewport && mobileStackBeat.peeking ? 0.38 : null;
  // Opacity only: a CSS blur on the full-screen WebGL layer had to be recomputed every scroll frame.
  const progressStyle = useMemo(
    () =>
      ({
        "--scene-opacity": sceneIsClear ? 0.9 : sceneIsPeeking ? 0.42 : 0.24
      }) as React.CSSProperties,
    [sceneIsClear, sceneIsPeeking]
  );

  useEffect(() => {
    const compactQuery = window.matchMedia("(max-width: 760px), (pointer: coarse)");

    const syncViewportMode = () => {
      setIsCompactViewport(compactQuery.matches);
    };

    syncViewportMode();
    compactQuery.addEventListener("change", syncViewportMode);

    return () => compactQuery.removeEventListener("change", syncViewportMode);
  }, []);

  useEffect(() => {
    if (!isCompactViewport) {
      setMobileStackBeat((current) => (current.focus || current.peeking ? { focus: false, peeking: false } : current));
      return;
    }

    const stackFocusGap = document.querySelector<HTMLElement>(".stack-focus-gap");

    if (!stackFocusGap) {
      return;
    }

    const measure = () => {
      const rect = stackFocusGap.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const focus = rect.top < viewportHeight * 0.72 && rect.bottom > viewportHeight * 0.26;
      const peeking = rect.top < viewportHeight * 0.98 && rect.bottom > viewportHeight * 0.08;

      setMobileStackBeat((current) => (current.focus === focus && current.peeking === peeking ? current : { focus, peeking }));
    };

    measure();
    return scroll.subscribe(measure);
  }, [isCompactViewport, scroll]);

  useEffect(() => {
    if (reduceMotion || isSceneReady) {
      return;
    }

    if (shouldPreferStaticCore()) {
      return;
    }

    const isCompact = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
    const delay = isCompact ? 120 : 1000;
    let timer: number | undefined;
    let cleanupIdle: (() => void) | null = null;

    // Re-armed on every scroll update, so the scene mounts once scrolling has paused.
    const scheduleMount = () => {
      const scrollDepth = window.scrollY / Math.max(window.innerHeight, 1);

      if (isCompact && scrollDepth >= 0.9) {
        loadCoreScene();
      }

      if (isCompact && scrollDepth < 1.25) {
        return;
      }

      window.clearTimeout(timer);
      cleanupIdle?.();
      cleanupIdle = null;
      timer = window.setTimeout(() => {
        cleanupIdle = requestIdleWork(() => setIsSceneReady(true), isCompact ? 700 : 1200);
      }, delay);
    };

    scheduleMount();
    const unsubscribe = scroll.subscribe(scheduleMount);

    return () => {
      unsubscribe();
      window.clearTimeout(timer);
      cleanupIdle?.();
    };
  }, [isSceneReady, reduceMotion, scroll]);

  useEffect(() => {
    const aura = cursorAuraRef.current;
    if (!aura || reduceMotion) {
      return;
    }

    const motionQuery = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");
    if (!motionQuery.matches) {
      return;
    }

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const paint = () => {
      aura.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`;
      frame = 0;
    };

    const moveAura = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      aura.style.opacity = "1";

      if (!frame) {
        frame = window.requestAnimationFrame(paint);
      }
    };

    const hideAura = () => {
      aura.style.opacity = "0";
    };

    window.addEventListener("pointermove", moveAura, { passive: true });
    document.addEventListener("mouseleave", hideAura);
    document.addEventListener("visibilitychange", hideAura);

    return () => {
      window.removeEventListener("pointermove", moveAura);
      document.removeEventListener("mouseleave", hideAura);
      document.removeEventListener("visibilitychange", hideAura);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [reduceMotion]);

  return (
    <main className="portfolio-shell" style={progressStyle}>
      <MemoSystemLoader />
      <GlobalNav scroll={scroll} />
      <div className="scene-layer" aria-hidden="true">
        {reduceMotion || !isSceneReady ? (
          <StaticCore />
        ) : (
          <CoreScene
            scroll={scroll}
            progressOverride={sceneProgressOverride}
            hoveredSkill={hoveredSkill}
            isActive={sceneIsClear}
          />
        )}
      </div>
      <div className="cursor-aura" ref={cursorAuraRef} aria-hidden="true" />
      <BlueprintOverlay scroll={scroll} />

      <MemoHeroSection />
      <MemoAboutSection />
      <MemoSkillsSection hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      <section className="stack-focus-gap" aria-hidden="true" />
      <MemoExperienceSection />
      <MemoOpenSourceSection />
      <MemoProjectsSection />
      <MemoFooterSection />

      <div className="reduced-motion-note">
        <CircuitBoard size={14} />
        Reduced motion protocol active
      </div>
    </main>
  );
}
