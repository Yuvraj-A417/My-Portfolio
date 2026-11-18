"use client";

import { useEffect, useRef } from "react";
import { stages } from "@/data/portfolio";
import { useScrollSelector, type ScrollProgressStore } from "@/hooks/useScrollProgress";

/** The active stage is the last section whose top has passed 45% of the viewport height. */
function getActiveIndex() {
  if (typeof document === "undefined") {
    return 0;
  }

  const probe = window.innerHeight * 0.45;
  let active = 0;

  stages.forEach((stage, index) => {
    const section = document.getElementById(stage.id);
    if (section && section.getBoundingClientRect().top <= probe) {
      active = index;
    }
  });

  return active;
}

export function GlobalNav({ scroll }: { scroll: ScrollProgressStore }) {
  const activeIndex = useScrollSelector(scroll, getActiveIndex);
  const bar = useRef<HTMLSpanElement>(null);

  // The progress bar moves every frame, so it is painted directly instead of through React state.
  useEffect(() => {
    const paint = (progress: number) => {
      if (bar.current) {
        bar.current.style.transform = `scaleX(${progress})`;
      }
    };

    paint(scroll.get());
    return scroll.subscribe(paint);
  }, [scroll]);

  return (
    <nav className="global-nav" aria-label="Portfolio navigation">
      <a className="nav-brand" href="#hero" aria-label="Yuvraj Tiwary home">
        <span>YT</span>
        <strong>System Architecture</strong>
      </a>
      <div className="nav-stages" aria-label="Career stage navigation">
        {stages.map((stage, index) => (
          <a
            aria-current={index === activeIndex ? "location" : undefined}
            className={index === activeIndex ? "active" : ""}
            href={`#${stage.id}`}
            key={stage.id}
          >
            {stage.label}
          </a>
        ))}
      </div>
      <div className="nav-progress" aria-hidden="true">
        <span ref={bar} style={{ transform: "scaleX(0)" }} />
      </div>
    </nav>
  );
}
