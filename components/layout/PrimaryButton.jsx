"use client";
import { motion } from "framer-motion";

export default function PrimaryButton({ children, className = "" }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
      className={`
        px-8 py-4 cursor-pointer
        bg-blue text-background
        hover:bg-[#132b45]/90 
        transition-all duration-300 
        uppercase tracking-widest text-xs font-bold
        border border-transparent 
        hover:border-[#e3ce83]
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
