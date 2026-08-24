"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Toggles `true` once the element scrolls into view; stays true after (no
 * re-hiding on scroll-out). Under prefers-reduced-motion, the caller's CSS
 * is expected to drop the transition so this just snaps visible instead of
 * animating in.
 */
export default function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
