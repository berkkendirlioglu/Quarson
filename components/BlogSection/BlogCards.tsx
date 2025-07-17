"use client";
import React from "react";
import BlogCard from "../BlogCard";
import { motion } from "framer-motion";

export default function BlogCards() {
  return (
    <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex justify-center"
      >
        <BlogCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex justify-center"
      >
        <BlogCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex justify-center"
      >
        <BlogCard />
      </motion.div>
      
    </div>
  );
}
