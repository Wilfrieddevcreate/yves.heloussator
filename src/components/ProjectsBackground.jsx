//ProjectsBackground

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

function FloatingShapes({ mouse }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;

    // légère rotation du groupe
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;

    // parallax avec la souris
    groupRef.current.position.x = (mouse.x - 0.5) * 2;
    groupRef.current.position.y = (0.5 - mouse.y) * 2;
  });

  return (
    <group ref={groupRef}>
      {[...Array(40)].map((_, i) => {
        const pos = [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 10,
        ];
        const scale = Math.random() * 0.3 + 0.1;
        return (
          <mesh key={i} position={pos} scale={[scale, scale, scale]}>
            <boxGeometry />
            <meshStandardMaterial color="#4f46e5" metalness={0.6} roughness={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function ProjectsBackground({ className }) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <Canvas className={className}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <FloatingShapes mouse={mouse} />
    </Canvas>
  );
}

