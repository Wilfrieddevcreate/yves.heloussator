// src/components/FullpageController.jsx
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FullpageController({ sections }) {
  const [current, setCurrent] = useState(0);
  const canScroll = useRef(true); // pour empêcher les scroll trop rapides

  // Gestion du wheel (souris)
  const handleWheel = (e) => {
    if (!canScroll.current) return;
    if (e.deltaY > 0 && current < sections.length - 1) {
      setCurrent(current + 1);
      lockScroll();
    } else if (e.deltaY < 0 && current > 0) {
      setCurrent(current - 1);
      lockScroll();
    }
  };

  // Verrouillage temporaire pour éviter scroll rapide
  const lockScroll = () => {
    canScroll.current = false;
    setTimeout(() => (canScroll.current = true), 700); // durée transition
  };

  // Gestion flèches clavier
  const handleKey = (e) => {
    if (!canScroll.current) return;
    if ((e.key === "ArrowDown" || e.key === "PageDown") && current < sections.length - 1) {
      setCurrent(current + 1);
      lockScroll();
    } else if ((e.key === "ArrowUp" || e.key === "PageUp") && current > 0) {
      setCurrent(current - 1);
      lockScroll();
    }
  };

  // Gestion swipe mobile
  const touchStartY = useRef(0);
  const handleTouchStart = (e) => (touchStartY.current = e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (!canScroll.current) return;
    if (diff > 50 && current < sections.length - 1) {
      setCurrent(current + 1);
      lockScroll();
    } else if (diff < -50 && current > 0) {
      setCurrent(current - 1);
      lockScroll();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        {sections.map((Section, index) =>
          index === current ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full"
            >
              {Section}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
