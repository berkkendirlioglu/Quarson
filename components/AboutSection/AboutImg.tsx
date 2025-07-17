'use client';
import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function AboutImg() {
  return (
      <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex justify-center items-center select-none pointer-events-none">
                  <Image
                    className="!h-full w-[600px] object-cover"
                    src="/assets/Common/tasarım-2.png"
                    width={500}
                    height={600}
                    alt="Tasarım Image"
                  />
                </div>
              </motion.div>
  )
}
