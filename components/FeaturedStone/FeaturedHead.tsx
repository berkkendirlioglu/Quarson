"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedHead() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="text-[34px] font-[600]">Öne Çıkanlar</span>
        <Image
          src="/assets/İcons/marble-1.webp"
          width={70}
          height={70}
          alt="Icons"
        />
      </div>
    </motion.div>
  );
}
