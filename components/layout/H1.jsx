"use client";
import { motion } from "framer-motion";
import React from "react";

const H1 = ({ children, className = "" }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8, margin: "0px  0px  -100px  0px" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`text-4xl md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </motion.h1>
  );
};

export default H1;
