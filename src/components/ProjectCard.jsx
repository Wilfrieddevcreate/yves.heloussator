import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, img }) {
  const [displayedText, setDisplayedText] = useState("");
  const terminalText = `npm run start # Lancement de ${title}`;

  // Animation typewriting pour le terminal
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(terminalText.slice(0, index + 1));
      index++;
      if (index === terminalText.length) clearInterval(interval);
    }, 50); // vitesse de typing
    return () => clearInterval(interval);
  }, [terminalText]);

  return (
    <motion.div
      className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden cursor-pointer transform perspective-1000 w-full md:w-80 mx-auto"
      whileHover={{ scale: 1.07, rotateX: 6, rotateY: 6 }}
      transition={{ type: "spring", stiffness: 130 }}
    >
      {/* image du projet */}
      <div className="h-48 w-full overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* contenu */}
      <div className="p-5 relative">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mt-2 text-sm"
        >
          {description}
        </motion.p>

        {/* mini terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 bg-black rounded-md p-3 font-mono text-green-400 text-xs shadow-inner border border-gray-700"
        >
          $ {displayedText}
          <span className="animate-blink">|</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
