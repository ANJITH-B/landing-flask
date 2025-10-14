"use client";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Rig() {
  const { camera, mouse } = useThree();
  const [vec] = useState(() => new THREE.Vector3());
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.03, 5), 0.015);
  });
  return null;
}
