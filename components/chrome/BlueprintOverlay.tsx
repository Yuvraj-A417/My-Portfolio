"use client";

import { useScrollSelector, type ScrollProgressStore, type ScrollState } from "@/hooks/useScrollProgress";

const toPercent = ({ progress }: ScrollState) => Math.round(progress * 100);

export function BlueprintOverlay({ scroll }: { scroll: ScrollProgressStore }) {
  const percent = useScrollSelector(scroll, toPercent);

  return (
    <div className="blueprint-overlay" aria-hidden="true">
      <div className="blueprint-label top-right">
        <span>SCROLL VECTOR</span>
        <strong>{percent.toString().padStart(3, "0")} / 100</strong>
      </div>
    </div>
  );
}
