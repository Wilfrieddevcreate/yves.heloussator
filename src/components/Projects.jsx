import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjetImages from "../../public/images/ba.png";
import ProjetImage2 from "../../public/images/cata.png";
import ProjetImage3 from "../../public/images/city.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "Portfolio d'une docteure en lettres modernes.",
      img: ProjetImages,
      link: "https://baikoovi.vercel.app/",
    },
    {
      title: "Catalogue Whatsapp",
      description: "Interface moderne inspirée du catalogue de WhatsApp.",
      img: ProjetImage2,
      link: "https://showroomducostume.vercel.app/",
    },
    {
      title: "Agribusiness",
      description: "Boutique en ligne pour des produits agricoles.",
      img: ProjetImage3,
      link: "https://aya-tchad.org/",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black relative">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-white text-center mb-14"
      >
        Mes <span className="text-indigo-400">derniers projets</span>
      </motion.h2>

      {/* Grid responsive */}
      <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            href={p.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden bg-gray-900/50 border border-white/10 shadow-xl 
                        hover:shadow-indigo-500/20 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="w-full h-52 md:h-60 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {p.description}
                </p>

                <button className="mt-4 px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
                  Voir le projet
                </button>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
