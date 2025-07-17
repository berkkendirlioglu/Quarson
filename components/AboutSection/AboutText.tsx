"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col justify-start gap-16 items-start px-6">
        <div className="flex items-center gap-8">
          <Image
            src="/assets/İcons/marble-1.webp"
            alt="Icon"
            width={80}
            height={80}
          />
          <span className="text-[34px] font-[600]">Biz Kimiz?</span>
        </div>
        <div className="text-[24px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit perferendis libero blanditiis eaque praesentium enim
            voluptatem, nam modi similique! Voluptatum nesciunt quibusdam nobis
            laborum fugit quas odio eos, ex reprehenderit. Necessitatibus
            quisquam voluptatibus fugiat molestiae ex expedita animi, ad id
            ratione debitis ut facere aliquid iure totam suscipit eligendi
            nulla.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            molestiae doloribus ad pariatur voluptatem fuga suscipit, quam nisi
            iste reiciendis, possimus at saepe, modi natus cupiditate
            consequuntur magnam. Provident illo reprehenderit ab repellat
            excepturi omnis culpa at repudiandae doloremque dolore?
          </p>
        </div>
      </div>
    </motion.div>
  );
}
