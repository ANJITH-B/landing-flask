"use client";
import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type FlaskModelProps = {
  modelRef: React.MutableRefObject<THREE.Object3D | null>;
  onLoaded?: () => void;
};

const FlaskModel = ({ modelRef, onLoaded }: FlaskModelProps) => {
  const { scene } = useGLTF("/flask.glb");

  useEffect(() => {
    if (!scene) return;
    modelRef.current = scene;
    onLoaded?.();
  }, [modelRef, onLoaded]);

  return scene ? <primitive object={scene} scale={0} /> : null;
};

export default FlaskModel;

// ✅ Preload the model at module load time
