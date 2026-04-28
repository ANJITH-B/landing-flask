"use client";
import React, { useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loader = ({ onFinished }: { onFinished?: () => void }) => {
  const { progress, active } = useProgress();
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
    if (percentRef.current) {
      percentRef.current.textContent = `${Math.round(progress)}%`;
    }
  }, [progress]);

  useEffect(() => {
    if (!active && progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onFinished) onFinished();
        },
      });

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "expo.inOut",
        delay: 0.5,
      });
    }
  }, [active, progress, onFinished]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#e0dfdf] font-merriweather"
    >
      <div className="relative w-64 h-[2px] bg-black/10 overflow-hidden">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full bg-black"
          style={{ width: "0%" }}
        />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <span
          ref={percentRef}
          className="text-4xl font-bold text-black tabular-nums"
        >
          0%
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-black/50 mt-2">
          Loading Experience
        </span>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 text-[10px] uppercase tracking-widest text-black/30">
        Thermal Flask / 2026
      </div>
      <div className="absolute bottom-10 right-10 text-[10px] uppercase tracking-widest text-black/30">
        Digital Showcase
      </div>
    </div>
  );
};

export default Loader;
