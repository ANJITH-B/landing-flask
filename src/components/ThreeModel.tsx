"use client";
import { forwardRef, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlaskModel({ modelRef }: { modelRef: React.MutableRefObject<THREE.Object3D | null> }) {
    const { scene } = useGLTF("/flask.glb");

    useEffect(() => {
        if (scene && modelRef) {
            modelRef.current = scene;
        }
    }, [scene, modelRef]);

    useFrame(() => {
        if (modelRef.current) {
        }
    });

    return (
        <primitive
            object={scene}
            ref={modelRef}
            scale={1}
            position={[1, -2.2, 0]}
            rotation={[-0.3, -1, -0.10]}
        />
    );
}

const ThreeModel = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<THREE.Object3D | null>(null);

    useEffect(() => {
        if (!modelRef.current || !containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: true,
                    pin: true, // GSAP will handle the pinning — no need for `fixed`
                    markers: true, // helpful for debugging
                },
            });

            tl.to(modelRef.current, {
                y: "+=" + Math.PI * 2,
                x: "+=" + Math.PI / 6,
                ease: "none",
                duration: 5,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-screen h-[100vh] overflow-hidden bg-gray-100">
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{ antialias: true }}
            >
                <ambientLight intensity={1.5} />
                <directionalLight
                    position={[-2.5, 1.5, 6]}
                    castShadow
                    intensity={30}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                {/* <FlaskModel modelRef={modelRef} /> */}
                <mesh rotation={[0, 0, 0]} position={[0, 0, 0]} >
                </mesh>
                {/* <OrbitControls enableZoom={false} /> */}
            </Canvas>
        </div>
    );
}
