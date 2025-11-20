import { motion } from "framer-motion";

export default function MiniTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 p-4 bg-gray-900/70 text-green-400 font-mono rounded-md z-20 shadow-lg"
    >
      <p>$ npm start</p>
      <p>✔ Server running on http://localhost:3000</p>
      <p>&gt; Hello, welcome to my portfolio!</p>
    </motion.div>
  );
}
