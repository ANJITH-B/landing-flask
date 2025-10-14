"use client";
import { useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlaskModel from "@/components/FlaskModel";
import Outro from "@/components/Outro";
import { useGLTF } from "@react-three/drei";
import Point from "../components/Point";
import Tip from "../components/Tip";
import { useAnimation } from "./hooks/useAnimation";
import { Rig } from "../components/Rig";
import { useLenis } from "./hooks/useLenis";
import Hero from "@/components/HeroSection";

useGLTF.preload("/flask.glb");
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const modelRef = useRef<THREE.Object3D>(null);
  const groupRef = useRef<THREE.Object3D>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleModelLoaded = useCallback(() => setModelLoaded(true), []);

  useLenis();
  useAnimation({
    modelLoaded,
    modelRef,
    groupRef,
    containerRef,
    heroRef,
    footerRef,
  });

  return (
    <main
      ref={containerRef}
      className="relative w-full h-screen bg-[#e0dfdf] overflow-hidden"
    >
      <Hero ref={heroRef} />
      <Canvas
        className="absolute z-40 w-full "
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <ambientLight intensity={5} />
        <directionalLight position={[-2, 1.2, 5]} castShadow intensity={5} />
        <group ref={groupRef}>
          <FlaskModel modelRef={modelRef} onLoaded={handleModelLoaded} />
        </group>
        <Rig />
      </Canvas>
      <div className="mask opacity-0 rounded-full w-10 h-10 absolute inset-0 bg-[#242424] m-auto" />
      <h1 className="text-one opacity-0 w-[1000px] md:w-full text-9xl absolute top-[45vh] font-bold uppercase text-black font-merriweather ">
        GRND Shaker
      </h1>
      <h1 className="text-two opacity-0 w-[2000px] text-9xl absolute top-[45vh] font-bold uppercase text-white/80 ">
        Go ready <span className="text-[#242424]">......</span> Shaker Flask
      </h1>
      <Point className="para-top top-10 md:top-[10%] left-5 md:left-[15%]" />
      <Point className="para-bottom text-right bottom-10 md:bottom-[10%] right-5 md:right-[15%]" />

      <Tip className="top-10 md:top-[10%] left-5 md:left-[15%] items-start text-left w-1/3 md:w-1/4" />
      <Tip className="bottom-10 md:bottom-[10%] right-5 md:right-[15%] items-end text-right w-1/3 md:w-1/4" />
      <Outro ref={footerRef} />
    </main>
  );
}
