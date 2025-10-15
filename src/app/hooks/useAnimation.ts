"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Group, Object3D } from "three";

type Refs = {
  modelLoaded: boolean;
  modelRef: React.RefObject<Group | Object3D | null>;
  groupRef: React.RefObject<Group | Object3D | null>;
  containerRef: React.RefObject<HTMLElement | null>;
  heroRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLElement | null>;
};

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = ({
  modelLoaded,
  modelRef,
  groupRef,
  containerRef,
  heroRef,
  footerRef,
}: Refs) => {
  useEffect(() => {
    if (!modelLoaded) return console.log("check");

    const mm = gsap.matchMedia();
    mm.add(
      {
        sm: "(max-width: 768px)",
        lg: "(min-width: 769px) and (max-width: 1279px)", // large screens (not XL)
        xl: "(min-width: 1280px)",
      },
      (context) => {
        const { sm, lg, xl } = context.conditions as {
          sm: boolean;
          lg: boolean;
          xl: boolean;
        };

        const initialAnim = gsap.timeline({ delay: 1 });
        initialAnim.to(
          modelRef.current!.scale,
          sm ? { x: 0.8, y: 0.8, z: 0.8 } : { x: 1, y: 1, z: 1 }
        );
        initialAnim.fromTo(
          modelRef.current!.position,
          { y: -15 },
          {
            y: sm ? -2 : -2.2,
            duration: 2,
            ease: "power3.out",
          },
          "<"
        );
        initialAnim.fromTo(
          groupRef.current!.rotation,
          { y: 2 },
          { y: 0, duration: 2, ease: "power2.out" },
          "<"
        );
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=700%",
            scrub: true,
            pin: true,
          },
        });

        tl.fromTo(
          modelRef.current!.rotation,
          { y: -1 },
          { y: Math.PI * 2, duration: 10, ease: "power1.inOut" }
        );
        tl.to(groupRef.current!.rotation, { z: -0.2, duration: 0.5 }, "<1");

        tl.fromTo(
          modelRef.current!.position,
          { x: sm ? 0 : 1.6, y: -2.2, z: 0.1 },
          { x: 0, y: -1.8, z: 0, duration: 2, ease: "power1.inOut" },
          "<"
        );

        tl.to(
          heroRef.current,
          { y: -800, duration: 2, ease: "power1.inOut", stagger: {} },
          "<"
        );
        tl.fromTo(
          ".text-one",
          { x: xl ? 2600 : 1500, opacity: 1 },
          { x: -1000, duration: 5 },
          "<1"
        );
        tl.to(".para-top", { opacity: 1, duration: 2, y: 20 }, ">-4.5");
        tl.to(".para-bottom", { opacity: 1, duration: 2, y: -20 }, "<");
        tl.to(".para-top", { opacity: 0, duration: 2, y: 0 }, "-=5");
        tl.to(".para-bottom", { opacity: 0, duration: 2, y: 0 }, "<");
        tl.fromTo(
          ".mask",
          { y: 0, scale: 0, opacity: 1 },
          { scale: xl ? 80 : 50, duration: 3 },
          ">-=1.5"
        );
        tl.fromTo(
          ".text-two",
          { x: xl ? 2600 : 1500, opacity: 1 },
          { x: -2000, duration: 5 },
          "<1"
        );
        tl.to(".text", { opacity: 1, duration: 2 }, "<");
        tl.to(".divider", { width: "100%", duration: 1 }, "<");

        tl.to(".mask", { opacity: 0, duration: 2 }, ">1");
        tl.to(".text", { opacity: 0, duration: 0.5 }, "<");
        tl.fromTo(
          footerRef.current,
          { y: 700, opacity: 1 },
          { y: 0, duration: 2 },
          "<+1"
        );
        tl.to(
          modelRef.current!.position,
          { y: 1, duration: 2, ease: "power1.inOut" },
          "<"
        );
        tl.to(
          modelRef.current!.rotation,
          { y: 1.2, duration: 2, ease: "power1.inOut" },
          "<"
        );
        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
          tl.kill();
        };
      }
    );
  }, [modelLoaded]);
};
