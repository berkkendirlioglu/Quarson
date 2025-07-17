"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ServiceButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex justify-center items-center">
        <Link
          className="bg-white hover:text-[rgba(0,0,0,.7)] hover:shadow-lg hover:shadow-[#000] transition-all text-black text-[18px] font-[500] py-4 px-8 rounded-full text-center"
          href={"/services"}
        >
          Daha Niceleri
        </Link>
      </div>
    </motion.div>
  );
}
