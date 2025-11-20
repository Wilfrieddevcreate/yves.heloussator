import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsBackground from "./ProjectsBackground";
import ProjetImages from "../../public/images/ba.png";
import ProjetImage2 from "../../public/images/cata.png";
import ProjetImage3 from "../../public/images/city.png";
import { a } from "framer-motion/client";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "Portfolio d'une docteurs en lettre moderne.",
      img: ProjetImages,
      link: "https://baikoovi.vercel.app/",
    },
    {
      title: "Catalogue Whatsapp",
      description: "Interface moderne inspiré du catalogue de WhatsApp.",
      img: ProjetImage2,
      link: "https://showroomducostume.vercel.app/",
    },
    {
      title: "Agribusiness",
      description: "Boutique de ventes des produits agricoles en ligne.",
      img: ProjetImage3,
      link: "https://aya-tchad.org/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-black"
    >
      {/* Background 3D */}
      <ProjectsBackground className="absolute inset-0 w-full h-full -z-10" />
      {/* Contenu centré */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Trois derniers projets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((p, idx) => (
            <>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <ProjectCard
                  key={idx}
                  title={p.title}
                  description={p.description}
                  img={p.img}
                />
              </a>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
