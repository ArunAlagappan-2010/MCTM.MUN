"use client";

import { useEffect, useRef } from "react";
import { assetPath } from "@/utils/asset";
import styles from "./FogHero.module.css";

interface CloudLayerProps {
  src: string;
  layer: "far" | "near";
}

function CloudLayer({ src, layer }: CloudLayerProps) {
  return (
    <div className={styles.cloudLayer} data-layer={layer} data-cloud-layer>
      <div className={styles.cloudItem} data-cloud-item>
        <img className={styles.cloudImg} src={assetPath(src)} alt="" />
      </div>
      <div className={styles.cloudItem} data-cloud-item>
        <img className={styles.cloudImg} src={assetPath(src)} alt="" />
      </div>
    </div>
  );
}

interface FogHeroProps {
  /** How strongly the cloud layers lag/lead the scroll, relative to scroll distance. */
  ratio?: number;
  /** "down" moves the clouds with the scroll direction, "up" moves them against it. */
  direction?: "down" | "up";
  /** Whether the hero should be faded/scaled into view (e.g. once an intro loader has settled). */
  revealing?: boolean;
  children?: React.ReactNode;
}

export default function FogHero({
  ratio = 0.5,
  direction = "down",
  revealing = true,
  children,
}: FogHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const mistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const cloudsEl = cloudsRef.current;
    if (!sectionEl || !cloudsEl) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const sign = direction === "down" ? 1 : -1;
    let ticking = false;

    function update() {
      const rect = sectionEl!.getBoundingClientRect();
      const scrolled = -rect.top;
      const offset = scrolled * ratio * sign;
      cloudsEl!.style.transform = `translate3d(0, ${offset}px, 0)`;
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

    const items = cloudsEl.querySelectorAll<HTMLElement>("[data-cloud-item]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        items.forEach((item) =>
          item.classList.toggle(styles.inView, entry.isIntersecting)
        );
      },
      { threshold: 0 }
    );
    observer.observe(sectionEl);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, [ratio, direction]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const mistEl = mistRef.current;
    if (!sectionEl || !mistEl) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const PX_PER_CM = 96 / 2.54;
    const HOLE_R = 1.7 * PX_PER_CM;
    const MAX_ALPHA = 0.42;
    const MAX_AGE_MS = 1100;
    const MIN_SAMPLE_DIST = 5;
    const MAX_TRAIL_POINTS = 30;

    function jitter(seed: number) {
      const s = Math.sin(seed * 12.9898) * 43758.5453;
      return s - Math.floor(s);
    }

    let pointer: { x: number; y: number } | null = null;
    const trail: { x: number; y: number; born: number }[] = [];
    let hasMask = false;

    function onPointerMove(e: PointerEvent) {
      if (e.pointerType === "touch") return;
      const rect = sectionEl!.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onPointerLeave() {
      pointer = null;
    }

    sectionEl.addEventListener("pointermove", onPointerMove);
    sectionEl.addEventListener("pointerleave", onPointerLeave);

    let rafId: number;

    function frame() {
      const now = performance.now();

      while (trail.length && now - trail[0].born > MAX_AGE_MS) {
        trail.shift();
      }

      if (pointer) {
        const last = trail[trail.length - 1];
        const moved =
          !last || Math.hypot(pointer.x - last.x, pointer.y - last.y) >= MIN_SAMPLE_DIST;
        if (moved) {
          trail.push({ x: pointer.x, y: pointer.y, born: now });
          if (trail.length > MAX_TRAIL_POINTS) trail.shift();
        }
      }

      if (trail.length === 0) {
        if (hasMask) {
          mistEl!.style.removeProperty("mask-image");
          mistEl!.style.removeProperty("-webkit-mask-image");
          mistEl!.style.removeProperty("mask-composite");
          mistEl!.style.removeProperty("-webkit-mask-composite");
          hasMask = false;
        }
      } else {
        const layers: string[] = [];
        const composite: string[] = [];
        const webkitComposite: string[] = [];

        for (const pt of trail) {
          const age = (now - pt.born) / MAX_AGE_MS;
          const alpha = Math.max(0, 1 - age) * MAX_ALPHA;
          const radiusScale = 0.8 + jitter(pt.born) * 0.4;
          const outer = HOLE_R * radiusScale;
          const inner = outer * 0.1;
          layers.push(
            `radial-gradient(circle at ${pt.x.toFixed(1)}px ${pt.y.toFixed(
              1
            )}px, rgba(0,0,0,${alpha.toFixed(3)}) 0px, rgba(0,0,0,${(
              alpha * 0.6
            ).toFixed(3)}) ${inner.toFixed(1)}px, rgba(0,0,0,0) ${outer.toFixed(1)}px)`
          );
          composite.push("subtract");
          webkitComposite.push("destination-out");
        }

        layers.push("linear-gradient(black, black)");
        composite.push("add");
        webkitComposite.push("source-over");

        mistEl!.style.setProperty("mask-image", layers.join(", "));
        mistEl!.style.setProperty("-webkit-mask-image", layers.join(", "));
        mistEl!.style.setProperty("mask-composite", composite.join(", "));
        mistEl!.style.setProperty(
          "-webkit-mask-composite",
          webkitComposite.join(", ")
        );
        hasMask = true;
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      sectionEl.removeEventListener("pointermove", onPointerMove);
      sectionEl.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.hero} ${revealing ? styles.revealing : ""}`}
    >
      <div className={styles.bg}>
        <picture>
          <source media="(max-width: 767px)" srcSet={assetPath("/fog/sp_map_bg.webp")} />
          <img className={styles.bgImg} src={assetPath("/fog/map_bg.webp")} alt="" />
        </picture>
      </div>

      <div ref={mistRef} className={styles.mist}>
        <video
          className={`${styles.bgImg} ${styles.mistVideo}`}
          src={assetPath("/video/fog-overlay-loop.mp4")}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      <div className={styles.vignette} />
      <div className={styles.cornerShade} />
      <div className={styles.treeFade} />

      <div ref={cloudsRef} className={styles.clouds}>
        <CloudLayer src="/fog/common_fv_cloud01.webp" layer="near" />
        <CloudLayer src="/fog/common_fv_cloud02.webp" layer="far" />
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollCueLabel}>Scroll</span>
        <span className={styles.scrollCueLine} />
      </div>
    </section>
  );
}
