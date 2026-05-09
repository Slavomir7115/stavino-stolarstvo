"use client";
import React from "react";

import { motion } from "framer-motion";

const H2 = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8, margin: "0px  0px  -100px  0px" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`${className} text-3xl md:text-4xl lg:text-5xl leading-[1.3] `}
    >
      {children}
    </motion.h2>
  );
};

export default H2;
