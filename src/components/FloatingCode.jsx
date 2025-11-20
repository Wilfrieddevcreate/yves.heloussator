import { motion } from "framer-motion";

export default function FloatingCode() {
  const codes = [
    "<div>Hello World</div>",
    "const app = () => {}",
    "fetch('/api/data')",
    "<button>Click Me</button>",
  ];

  return (
    <>
      {codes.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -50, x: 0 }}
          animate={{
            opacity: 0.8,
            y: [0, -10, 0],
            x: [0, 5, -5, 0],
          }}
          transition={{ repeat: Infinity, duration: 4 + i }}
          className="absolute text-xs md:text-sm text-green-400 font-mono z-10"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
        >
          {c}
        </motion.div>
      ))}
    </>
  );
}
