import { motion } from "framer-motion";

export default function SkillTags() {
  const skills = [
    "React",
    "TailwindCSS",
    "Laravel",
    "MongoDB",
    "MySQL",
    "Next.js",
    "VueJS",
  ];
  return (
    <>
      {skills.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.3 }}
          className="absolute px-2 py-1 bg-indigo-500 text-white rounded-md text-xs md:text-sm z-10"
          style={{
            top: `${10 + i * 12}%`,
            left: `${5 + i * 15}%`,
          }}
        >
          {s}
        </motion.div>
      ))}
    </>
  );
}
