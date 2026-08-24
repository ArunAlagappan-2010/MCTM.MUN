"use client";

import { useEffect, useRef } from "react";

/** Shifts the element up to `maxShift` px as it crosses the viewport while scrolling. */
export default function useParallax<T extends HTMLElement = HTMLDivElement>(
  maxShift = 40
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function update() {
      const rect = el!.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (vh + rect.height))
      );
      const offset = (progress - 0.5) * 2 * maxShift;
      el!.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxShift]);

  return ref;
}
