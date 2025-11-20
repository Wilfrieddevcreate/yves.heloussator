//Blob.jsx

// src/components/Blob.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

export default function Blob({ speed = 1.8, distort = 0.5, color = "#7c3aed" }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    // rotation douce
    ref.current.rotation.y += 0.0035 * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.08;
    // léger pulsing scale
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.7) * 0.03;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[1.05, 128, 128]} />
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={speed}
        roughness={0.12}
        metalness={0.2}
      />
    </mesh>
  );
}
