"use client";
import { useEffect, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type FlaskModelProps = {
    modelRef: React.MutableRefObject<THREE.Object3D | null>;
};

const FlaskModel = ({ modelRef }: FlaskModelProps) => {
    const { scene } = useGLTF("/flask.glb");

    useEffect(() => {
        if (scene) modelRef.current = scene;
    }, [scene]);

    return (
        <primitive
            object={scene}
            scale={1}
            position={[1, -2.2, 0]}
            rotation={[-0.3, -1, -0.3]}
        />
    );
};

export default FlaskModel;
