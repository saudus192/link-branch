"use client";
import { motion } from "framer-motion";

export default function Loader({ bgClassName = "bg-[#D2E823]/70 backdrop-blur-xl" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 ${bgClassName}`}
    >
      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold tracking-tight text-black"
      >
        LinkBranch
      </motion.h1>

      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-3 w-3 rounded-full bg-black"
            animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-black/10">
        <motion.div
          className="h-full w-1/2 rounded-full bg-black"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}