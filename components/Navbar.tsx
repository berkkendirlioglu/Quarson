"use client";
import React, { useEffect, useState } from "react";
import GlobalContainer from "./GlobalContainer";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 py-4 bg-[rgba(0,0,0,.5)] backdrop-blur z-[999]">
      <nav className="flex justify-center">
        <GlobalContainer className="justify-between items-center flex">
          <Link className="relative w-[60px] h-[80px]" href={"/"}>
            <Image
              className="object-cover"
              src="/assets/Logo/logo-w.png"
              fill
              alt="Logo"
            />
          </Link>
          <div className="lg:flex hidden justify-center items-center gap-16">
            <Link
              className="text-[16px] font-[500] transition-all hover:text-[rgba(255,255,255,.5)]"
              href={"/"}
            >
              Hizmetlerimiz
            </Link>
            <Link
              className="text-[16px] font-[500] transition-all hover:text-[rgba(255,255,255,.5)]"
              href={"/"}
            >
              Markalar
            </Link>
            <Link
              className="text-[16px] font-[500] transition-all hover:text-[rgba(255,255,255,.5)]"
              href={"/"}
            >
              Ürünler
            </Link>
            <Link
              className="text-[16px] font-[500] transition-all hover:text-[rgba(255,255,255,.5)]"
              href={"/"}
            >
              Hakkımızda
            </Link>
            <Link
              className="text-[16px] font-[500] transition-all hover:text-[rgba(255,255,255,.5)]"
              href={"/"}
            >
              Ne Yapıyoruz?
            </Link>
          </div>
          <Link
            href={"/"}
            className="py-3 px-7 font-[500] lg:flex hidden rounded-full bg-white text-center text-black transition-all hover:text-[rgba(0,0,0,.5)]"
          >
            İletişim
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 relative z-50 transition-all duration-300 ease-in-out cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </GlobalContainer>

        <div
          className={`lg:hidden left-0 top-[100%] absolute bg-white w-full transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "h-[290px] opacity-100"
              : "h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="mt-4 py-4 transform transition-transform duration-600 ease-in-out">
            <div className="flex flex-col text-black space-y-4">
              <div className={`flex flex-col justify-center items-start gap-3 px-6 transition-all delay-200 duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}>
                <Link
                  className="text-black ps-4 text-[16px] font-bold hover:text-[#333]"
                  href={"#homepage"}
                >
                  Hizmetlerimiz
                </Link>
                <Link
                  className="text-black ps-4 text-[16px] font-bold hover:text-[#333]"
                  href={"#about"}
                >
                  Markalar
                </Link>
                <Link
                  className="text-black ps-4 text-[16px] font-bold hover:text-[#333]"
                  href={"#products"}
                >
                  Ürünler
                </Link>
                <Link
                  className="text-black ps-4 text-[16px] font-bold hover:text-[#333]"
                  href={"#terapol"}
                >
                  Hakkımızda
                </Link>
                <Link
                  className="text-black ps-4 text-[16px] font-bold hover:text-[#333]"
                  href={"#terapol"}
                >
                  Ne Yapıyoruz?
                </Link>
                <Link
                    className="bg-[#4B3934] py-2 px-6 rounded-full text-white"
                    href={"/"}
                  >
                    İletişime Geç
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
