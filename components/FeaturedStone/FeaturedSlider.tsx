"use client";
import React from "react";
import { motion } from "framer-motion";
import MarqueeSlider from "../MarqueeSlider/MarqueeSlider";

export default function FeaturedSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="flex justify-center items-center">
            <MarqueeSlider />
          </div>
    </motion.div>
  );
}
