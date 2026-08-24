"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./IntroLoader.module.css";

type Stage = "idle" | "drop" | "bleed" | "reveal" | "settle" | "done";

const IDLE_MS = 350;
const DROP_MS = 380;
const BLEED_MS = 1650;
const REVEAL_MS = 700;
const SETTLE_MS = 900;
const SKIP_SETTLE_MS = 900;

interface IntroLoaderProps {
  /** Fired the instant the loader enters the settle stage, so the page behind it can start its own reveal in sync. */
  onSettle?: () => void;
}

export default function IntroLoader({ onSettle }: IntroLoaderProps) {
  const [stage, setStage] = useState<Stage>("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (stage === "settle") {
      onSettle?.();
      document.body.style.overflow = "";
      document.body.removeAttribute("data-intro-loading");
    }
  }, [stage, onSettle]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    reducedMotionRef.current = reduceMotion;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-intro-loading", "true");

    let timers: ReturnType<typeof setTimeout>[] = [];

    function schedule() {
      if (reduceMotion) {
        timers = [
          setTimeout(() => setStage("reveal"), 300),
          setTimeout(() => setStage("settle"), 700),
          setTimeout(() => setStage("done"), 700 + SKIP_SETTLE_MS),
        ];
      } else {
        const tDrop = IDLE_MS;
        const tBleed = tDrop + DROP_MS;
        const tReveal = tBleed + BLEED_MS;
        const tSettle = tReveal + REVEAL_MS;
        const tDone = tSettle + SETTLE_MS;
        timers = [
          setTimeout(() => setStage("drop"), tDrop),
          setTimeout(() => setStage("bleed"), tBleed),
          setTimeout(() => setStage("reveal"), tReveal),
          setTimeout(() => setStage("settle"), tSettle),
          setTimeout(() => setStage("done"), tDone),
        ];
      }
    }

    function skip() {
      timers.forEach(clearTimeout);
      setStage("settle");
      timers = [setTimeout(() => setStage("done"), SKIP_SETTLE_MS)];
    }

    schedule();
    window.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      document.body.style.overflow = previousOverflow;
      document.body.removeAttribute("data-intro-loading");
    };
  }, []);

  // Play the real ink-bloom footage for the bleed stage; freeze once done.
  useEffect(() => {
    if (reducedMotionRef.current) return;
    const video = videoRef.current;
    if (!video) return;

    if (stage === "bleed") {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else if (stage === "reveal" || stage === "settle") {
      video.pause();
    }
  }, [stage]);

  if (stage === "done") return null;

  return (
    <div
      className={styles.overlay}
      data-stage={stage}
      role="status"
      aria-label="Loading"
    >
      <div className={styles.paperBg} aria-hidden="true" />
      <div className={styles.paperTint} aria-hidden="true" />

      <video
        ref={videoRef}
        className={styles.inkVideo}
        src="/video/intro.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className={styles.dropWrap} aria-hidden="true">
        <div className={styles.drop} />
      </div>

      <div className={styles.logoWrap}>
        <img
          className={styles.logo}
          src="/brand/logo-transparent.png"
          alt="M.CT.M MUN"
        />
      </div>

      <span className={styles.skipHint}>tap to skip</span>
    </div>
  );
}


