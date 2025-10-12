"use client";
import React, { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType, JSX } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Props<T extends ElementType> = {
  phrase?: string | string[];
  className?: string;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const TextAnimation = <T extends ElementType = "div">({
  phrase,
  className,
  as,
  ...rest
}: Props<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const Tag = as || "div";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              lines,
              { color: "white", opacity: 0, filter: "blur(8px)" },
              {
                keyframes: [
                  {
                    color: "#6387a4",
                    opacity: 1,
                    filter: "blur(1px)",
                    duration: 0.1,
                  },
                  { color: '#000', filter: "blur(0px)", duration: 0.05 },
                ],
                ease: "power1.inOut",
                duration: 1,
                overwrite: "auto",
                stagger: 0.15,
              }
            );
          } else {
            gsap.to(lines, { opacity: 0, duration: 0.1, overwrite: "auto" });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const lines = Array.isArray(phrase) ? phrase : phrase ? [phrase] : [];

  return (
    <div ref={containerRef} >
      {lines.map((line, idx) =>
        React.createElement(
          Tag,
          { key: idx, className, ...rest },
          line
        )
      )}
    </div>
  );
};

export default TextAnimation;
