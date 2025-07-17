"use client";
import React from "react";
import GlobalContainer from "./GlobalContainer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

export default function Footer() {
  function openTwoLinks() {
    window.open("https://www.linkedin.com/in/iremapaydin/", "_blank");
    window.open("https://www.linkedin.com/in/berkkendirlioglu/", "_blank");
  }
  return (
    <footer className="pt-8 bg-white relative">
      <div className="absolute top-[-40px] left-0 w-full h-[120px] z-[51] bg-[linear-gradient(180deg,rgba(75,57,52,1)_28%,rgba(87,199,133,0)_89%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex justify-center items-center">
          <GlobalContainer className="pt-[5rem] pb-[2.5rem]">
            <div className="w-full grid place-items-center grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-8">
              <Link
                href={"/"}
                className="text-black w-full relative h-auto flex justify-center items-center"
              >
                <Image
                  className="object-cover"
                  src="/assets/Logo/logo-org.png"
                  alt="Logo"
                  width={170}
                  height={400}
                />
              </Link>
              <div className="text-black w-full flex flex-col lg:justify-start lg:items-start justify-center items-center gap-4">
                <span className="text-[20px] font-[600] text-black">Menü</span>
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/services"}
                  >
                    Hizmetlerimiz
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/brands"}
                  >
                    Markalar
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/products"}
                  >
                    Ürünler
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/about"}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/whatwedo"}
                  >
                    Ne Yapıyoruz?
                  </Link>
                </div>
              </div>
              <div className="text-black w-full flex flex-col lg:justify-start lg:items-start justify-center items-center gap-4">
                <span className="text-[20px] font-[600] text-black">
                  Ürünler
                </span>
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/products?brandName=Çimstone"}
                  >
                    Çimstone
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/products?brandName=Anatolia"}
                  >
                    Anatolia
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/products?brandName=Belenco"}
                  >
                    Belenco
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/products?brandName=Caesarstone"}
                  >
                    Caesarstone
                  </Link>
                  <Link
                    className="text-[#6d6d6d] transition-all hover:text-[#adadad] font-[500]"
                    href={"/products?brandName=Coante"}
                  >
                    Coante
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center py-4 gap-10 h-full">
                <div className="text-[#6d6d6d] text-center">
                  Modası geçmeyen mermer şıklığıyla zeminlerinizi yükseltmeye
                  hazır mısınız?
                </div>
                <div>
                  <Link
                    className="bg-[#4B3934] py-4 px-10 rounded-full text-white"
                    href={"/"}
                  >
                    İletişime Geç
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-black">
                    Sosyal Medyadan Bizi Takip Edin!
                  </div>
                  <div className="text-black w-full flex justify-center items-center gap-18">
                    <Link href={"/"}>
                      <Instagram
                        className="hover:text-[#adadad] transition-all"
                        size={32}
                      />
                    </Link>
                    <Link href={"/"}>
                      <Facebook
                        className="hover:text-[#adadad] transition-all"
                        size={32}
                      />
                    </Link>
                    <Link href={"/"}>
                      <Twitter
                        className="hover:text-[#adadad] transition-all"
                        size={32}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </GlobalContainer>
        </div>
      </motion.div>
      <div className="w-full bg-[#4B3934] py-4 flex justify-center items-center">
        <GlobalContainer>
          <div className="flex justify-between">
            <div className="flex lg:flex-row flex-col lg:gap-2 items-start justify-start lg:items-center">
              <span className="text-[14px]">
                © Copyrights © {new Date().getFullYear()} · Quarson Tüm Hakkı Saklıdır.
              </span>
              <Link title="Creator İrem Kübra APAYDIN" href={"#"} onClick={openTwoLinks}>
                <Image
                  src="/assets/Logo/sign.png"
                  alt="Sign"
                  width={180}
                  height={100}
                />
              </Link>
            </div>
            <Link className="flex gap-3" href={"tel:+905555555555"}>
              <Phone />0 555 555 55 55
            </Link>
          </div>
        </GlobalContainer>
      </div>
    </footer>
  );
}
