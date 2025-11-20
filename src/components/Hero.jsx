// 1) AVANT de remplacer par la version "blob" à l’étape 2,
// voici la version torus + scroll-parallax

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingCode from "./FloatingCode";
import SkillTags from "./SkillTags";
import MiniTerminal from "./MiniTerminal";

// ------- torus animé avec parallax souris -------
function AnimatedTorus({ mouse, scrollY }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    // rotation auto
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;

    // mouvement avec la souris
    ref.current.rotation.x += (mouse.y * 0.8 - ref.current.rotation.x) * 0.05;
    ref.current.rotation.z += (mouse.x * 0.8 - ref.current.rotation.z) * 0.05;

    // scroll parallax (le torus recule légèrement)
    ref.current.position.z = scrollY.current * -0.8; // valeur testée
    ref.current.position.y = scrollY.current * 0.4;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.9, 0.32, 128, 16]} />
      <meshStandardMaterial
        color={"#6366f1"}
        metalness={0.8}
        roughness={0.15}
      />
    </mesh>
  );
}

// ------- particules 3D -------
function Particles() {
  const ref = useRef();

  // Rotate particles very slowly
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x += 0.00015;
  });

  return (
    <group ref={ref}>
      {[...Array(120)].map((_, i) => {
        const pos = [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 8,
        ];
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              emissive="#7c3aed"
              emissiveIntensity={0.6}
              color="#111827"
            />
          </mesh>
        );
      })}
    </group>
  );
}

// ------- HERO -------
export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const scrollY = useRef(0);

  // écoute scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY / 500; // valeur douce
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // track mouse
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
    <section className="h-screen w-full bg-black relative overflow-hidden">
      {/* Titre */}
      <motion.h1
        style={{
          translateY: useTransform(
            useScroll().scrollYProgress,
            [0, 1],
            [0, -120] // parallax du texte
          ),
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 w-full text-center text-4xl md:text-6xl font-bold text-white z-20"
      >
        Salut, moi c’est <span className="text-indigo-400">Yves</span>
      </motion.h1>
      <FloatingCode />
      <SkillTags />
      <MiniTerminal />
      {/* Sous-titre */}
      <motion.p
        style={{
          translateY: useTransform(
            useScroll().scrollYProgress,
            [0, 1],
            [0, -80]
          ),
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-[45%] w-full text-center text-gray-300 z-20 px-6"
      >
        Développeur Fullstack & Créatif visuel.
      </motion.p>

      {/* Canvas */}
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <Particles />
        <AnimatedTorus mouse={mouse} scrollY={scrollY} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </section>
  );
}
