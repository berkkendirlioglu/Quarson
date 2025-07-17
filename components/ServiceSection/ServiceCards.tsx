"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 gap-18">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 group">
          <div className="relative rounded-[25px] h-[500px] overflow-hidden">
            <Image
              className="object-cover select-none pointer-events-none"
              src={"/assets/Service/1.webp"}
              alt="service ımage"
              fill
            />
          </div>
          <div className="flex flex-col gap-10 py-8 lg:px-18 px-0">
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-[500] pt-4">
                Yatlara Özel Döşeme
              </h2>
              <span className="text-[16px] text-[#adadad]">
                <span className="group-hover:pe-4 transition-all">{"<"}</span>
                &nbsp;Konforu ve şıklığı denizle buluşturun&nbsp;
                <span className="group-hover:ps-4 transition-all">{">"}</span>
              </span>
            </div>
            <span className="text-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              veniam. Quidem rerum quos quisquam amet dolore. Et cum recusandae
              laborum dignissimos dolorum, blanditiis sapiente earum repellendus
              totam facilis sequi pariatur
              <br />
              <br />
              ullam quis beatae illo numquam labore. Quia numquam, ullam magnam
              rerum magni ad exercitationem ex sapiente tempore minima eveniet
              temporibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro voluptate sed suscipit accusantium impedit tempora
              architecto doloremque molestiae, optio blanditiis?
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 group">
          <div className="relative rounded-[25px] h-[500px] overflow-hidden order-1 lg:order-2">
            <Image
              className="object-cover select-none pointer-events-none"
              src={"/assets/Service/2.webp"}
              alt="service ımage"
              fill
            />
          </div>
          <div className="flex flex-col gap-10 py-8 lg:px-18 px-0 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-[500] pt-4">
                Kişiye Özel Şömine
              </h2>
              <span className="text-[16px] text-[#adadad]">
                <span className="group-hover:pe-4 transition-all">{"<"}</span>
                &nbsp;Modern ve özgün şömine dokunuşları&nbsp;
                <span className="group-hover:ps-4 transition-all">{">"}</span>
              </span>
            </div>
            <span className="text-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              veniam. Quidem rerum quos quisquam amet dolore. Et cum recusandae
              laborum dignissimos dolorum, blanditiis sapiente earum repellendus
              totam facilis sequi pariatur
              <br />
              <br />
              ullam quis beatae illo numquam labore. Quia numquam, ullam magnam
              rerum magni ad exercitationem ex sapiente tempore minima eveniet
              temporibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro voluptate sed suscipit accusantium impedit tempora
              architecto doloremque molestiae, optio blanditiis?
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 group">
          <div className="relative rounded-[25px] h-[500px] overflow-hidden">
            <Image
              className="object-cover aspect-3/1 select-none pointer-events-none"
              src={"/assets/Service/3.webp"}
              alt="service ımage"
              fill
            />
          </div>
          <div className="flex flex-col gap-10 py-8 lg:px-18 px-0">
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-[500] pt-4">Tezgah Döşeme</h2>
              <span className="text-[16px] text-[#adadad]">
                <span className="group-hover:pe-4 transition-all">{"<"}</span>
                &nbsp;Dayanıklı, şık ve kullanışlı yüzeyler&nbsp;
                <span className="group-hover:ps-4 transition-all">{">"}</span>
              </span>
            </div>
            <span className="text-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              veniam. Quidem rerum quos quisquam amet dolore. Et cum recusandae
              laborum dignissimos dolorum, blanditiis sapiente earum repellendus
              totam facilis sequi pariatur
              <br />
              <br />
              ullam quis beatae illo numquam labore. Quia numquam, ullam magnam
              rerum magni ad exercitationem ex sapiente tempore minima eveniet
              temporibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro voluptate sed suscipit accusantium impedit tempora
              architecto doloremque molestiae, optio blanditiis?
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
