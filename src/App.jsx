import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FullpageController from "./components/FullpageController";
import {motion}  from "framer-motion"

function App() {
  const sections = [
    <Hero key="hero" />,
    <Projects key="projects" />,
    <div key="about" className="h-full flex items-center justify-center text-white text-4xl">
      <div
  key="about"
  className="h-full w-full bg-black flex flex-col items-center justify-center px-6 text-white"
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-bold mb-6"
  >
    À propos de moi
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="max-w-2xl text-center text-lg md:text-xl text-gray-300 leading-relaxed"
  >
    Je suis Yves, développeur <span className="text-indigo-400">Fullstack</span> passionné par les interfaces visuelles, 
    l’animation, la 3D et les expériences utilisateur immersives.  
    J’adore transformer des idées en projets modernes, rapides, élégants et uniques.
  </motion.p>

  {/* Skills */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.8 }}
    className="flex gap-3 flex-wrap justify-center mt-10"
  >
    {["React", "TailwindCSS", "Three.js", "Node.js", "Framer Motion"].map(
      (skill, i) => (
        <span
          key={i}
          className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/40 rounded-lg text-sm md:text-base"
        >
          {skill}
        </span>
      )
    )}
  </motion.div>
</div>

    </div>,
    <div key="contact" className="h-full flex items-center justify-center text-white text-4xl">
      <div
  key="contact"
  className="h-full w-full bg-black flex flex-col items-center justify-center px-6 text-white"
>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-bold mb-6"
  >
    Contact
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-[90%] max-w-lg border border-white/10"
  >
    <p className="text-gray-300 mb-6 text-center text-lg">
      Envie de travailler ensemble ? Une idée, un projet, une collaboration ?  
      Écris-moi !
    </p>

    <div className="flex flex-col gap-3">
      <a
        href="mailto:exemple@gmail.com"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-center font-semibold"
      >
        M’envoyer un email
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        className="px-6 py-3 bg-indigo-500/20 border border-indigo-500/40 hover:bg-indigo-500/30 transition rounded-lg text-center"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com"
        target="_blank"
        className="px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg text-center"
      >
        GitHub
      </a>
    </div>
  </motion.div>
</div>

    </div>,
  ];


  return (
    <>
      <Navbar />
      <FullpageController sections={sections} />
    </>
  );
}

export default App;
