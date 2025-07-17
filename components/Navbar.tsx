import React from "react";
import GlobalContainer from "./GlobalContainer";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
        </GlobalContainer>
      </nav>
    </header>
  );
}
