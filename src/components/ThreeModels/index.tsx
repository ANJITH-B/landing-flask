"use client";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useModelScrollRotation } from "./useModelScrollRotation";
import FlaskModel from "./FlaskModel";

export default function ThreeModel() {
  const modelRef = useRef<THREE.Object3D | null>(null);

  // Custom hook to rotate on scroll
  useModelScrollRotation(modelRef);

  return (
    <div
      className="fixed inset-0 w-full h-full z-[50] pointer-events-none"
    // pointer-events-none ensures the model doesn’t block scrolling or clicks
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={5} />
        <directionalLight
          position={[-2, 1.2, 5]}
          castShadow
          intensity={5}
        />
        <FlaskModel modelRef={modelRef} />
      </Canvas>
    </div>
  );
}
