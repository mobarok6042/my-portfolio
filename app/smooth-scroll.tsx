"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Adds buttery smooth scrolling site-wide (desktop + trackpad).
// Touch devices keep native scrolling so mobile stays natural.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Make navbar anchor links (#projects, #contact...) glide too,
      // offset by the sticky navbar height.
      anchors: { offset: -80 },
    });

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
