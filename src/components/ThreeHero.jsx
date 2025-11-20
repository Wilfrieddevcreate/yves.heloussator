import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";

function AnimatedBlob() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.004;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 3) * 0.2;
  });

  return (
    <mesh ref={ref} scale={1.6}>
      <sphereGeometry args={[1, 256, 256]} />
      <MeshDistortMaterial
        color="#7c3aed"
        distort={0.5}
        speed={2}
        roughness={0.15}
      />
    </mesh>
  );
}

export default function ThreeHero() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <AnimatedBlob />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
