import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FullpageController from "./components/FullpageController";

function App() {
  const sections = [
    <Hero key="hero" />,
    <Projects key="projects" />,
    <div key="about" className="h-full flex items-center justify-center text-white text-4xl">
      À propos
    </div>,
    <div key="contact" className="h-full flex items-center justify-center text-white text-4xl">
      Contact
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
