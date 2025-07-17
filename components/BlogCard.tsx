import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard() {
  return (
    <div className="w-full xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[450px] bg-cover bg-[-200px] bg-no-repeat bg-[url(/assets/Hero/heroimg.webp)] transition-all delay-50 duration-300 hover:translate-y-[-10px] hover:shadow-lg hover:shadow-[#1D1614] h-[600px] overflow-hidden gap-8 rounded-[20px] relative group">
      <div className="w-full h-full bg-[rgba(0,0,0,.5)] group-hover:bg-[rgba(0,0,0,.7)] transition-all delay-50 duration-300 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center group-hover:translate-y-[-70px] gap-4 transition-all delay-50 duration-300">
          <span className="text-[24px] font-[500]">Blog Title</span>
          <div className="w-[120px] bg-[#fff] h-[2px] transition-all delay-50 duration-300 group-hover:w-[200px] rounded-full"></div>
        </div>
        <div className="absolute bottom-[-100px] opacity-0 flex flex-col justify-start items-start gap-8 transition-all delay-50 duration-300 group-hover:bottom-[80px] group-hover:opacity-100 px-8">
          <p className="line-clamp-[7]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            maiores odio quaerat incidunt eum exercitationem labore, facere hic
            laudantium numquam nulla ad. Debitis blanditiis quisquam sed
            praesentium. In deleniti iste quas laboriosam sapiente voluptatum
            veniam aut, accusantium vitae fugiat officia?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Harum eligendi ea quas maiores
            officiis eaque ab iusto soluta incidunt veniam!
          </p>
          <Link
            className="py-2 px-6 text-center text-[16px] font-[500] bg-white rounded-full text-black"
            href={"/blogs"}
          >
            Devamını Oku
          </Link>
        </div>
      </div>
    </div>
  );
}
