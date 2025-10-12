"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export const useModelScrollRotation = (
  modelRef: React.MutableRefObject<THREE.Object3D | null>
) => {
  useEffect(() => {
    const model = modelRef.current;
    if (!model) return;

    // Create a scroll trigger linked to total page height
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      scrub: true,
      refreshPriority: 1,
      onUpdate: (self) => {
        if (modelRef.current) {
          // full page scroll rotates full 360 degrees
          modelRef.current.rotation.y = self.progress * Math.PI * 2;
          modelRef.current.rotation.x = self.progress * Math.PI * 0.3;
        }
      },
    });

    return () => trigger.kill();
  }, [modelRef]);
};
