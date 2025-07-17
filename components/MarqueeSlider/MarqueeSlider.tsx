import Image from "next/image";
import React from "react";
import { featuredStone } from "@/services/store/store";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function MarqueeSlider() {
  return (
    <div className="w-full">
      <Marquee
        loop={0}
        autoFill
        gradient
        pauseOnHover
        gradientColor="#4B3934"
        speed={100}
        className="w-full"
        gradientWidth={100}
      >
        {featuredStone.slice(0, 6).map((brand, index) => (
          <Link href={`/products?brandName=${brand.title}`} className="flex w-[250px] h-[300px] lg:w-[400px] lg:h-[500px] px-8 relative group flex justify-center items-center">
            <div className="w-full h-full rounded-[5px] overflow-hidden">
              <Image
                className="object-fit"
                key={index}
                src={brand.imgUrl}
                alt="Brand Image"
                height={250}
                width={400}
              />
            </div>
            <div className="absolute z-[51] px-8 flex justify-center items-center w-full h-full">
              <div className="opacity-0 rounded-[5px] group-hover:bg-[rgba(0,0,0,.5)] transition-all group-hover:opacity-100 w-full h-full flex justify-center items-center">
                <span className="text-[28px] font-[600]">{brand.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
