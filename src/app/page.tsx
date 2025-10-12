"use client";

import HeroSection from "@/components/HeroSection";
import Outro from "@/components/Outro";
import ProductOverview from "@/components/ProductOverview";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeModel from "@/components/ThreeModels";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const footer = useRef(null);

  useEffect
    (() => {

      gsap.to(footer.current, {
        y: -100,
        scale: 1,
        scrollTrigger: {
          trigger: footer.current,
          start: "top bottom",
          end: "top 70%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    })
  
  return (
    <main className="font-sans items-center justify-items-center relative">
      <HeroSection />
      <ThreeModel />
      <ProductOverview />
      <Outro ref={footer} />
    </main>
  );
}
