"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenis() {
  const rafId = useRef<number | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    const loop = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);
}
