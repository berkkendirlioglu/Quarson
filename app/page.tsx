import GlobalContainer from "@/components/GlobalContainer";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import AboutImg from "@/components/AboutSection/AboutImg";
import AboutText from "@/components/AboutSection/AboutText";
import FeaturedHead from "@/components/FeaturedStone/FeaturedHead";
import FeaturedSlider from "@/components/FeaturedStone/FeaturedSlider";
import ServiceButton from "@/components/ServiceSection/ServiceButton";
import BlogCards from "@/components/BlogSection/BlogCards";
import BlogHeader from "@/components/BlogSection/BlogHeader";
import ServiceCards from "@/components/ServiceSection/ServiceCards";
import ServiceHeader from "@/components/ServiceSection/ServiceHeader";
import { Mouse } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="flex justify-center items-center h-auto">
        <div className="relative w-full">
          <div className="absolute bottom-[-30px] left-0 w-full h-[120px] z-[51] bg-[linear-gradient(0deg,rgba(75,57,52,1)_28%,rgba(87,199,133,0)_89%)]"></div>
          <div className="absolute bottom-[100px] w-full h-[150px] z-[51] flex justify-center items-center">
            <div className="flex flex-col gap-4 animate-bounce">
              <Mouse size={48}/>
              <span>Kaydır</span>
            </div>
          </div>
          <HeroSlider />
        </div>
      </section>
      <section className="h-auto pt-[10rem] hidden">
        <div className="flex justify-center">
          <GlobalContainer>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AboutImg />
              <AboutText />
            </div>
          </GlobalContainer>
        </div>
      </section>
      <section className="pt-[10rem] min-h-screen">
        <div className="flex flex-col gap-24 w-full">
          <FeaturedHead />
          <FeaturedSlider />
        </div>
      </section>
      <section className="h-auto pt-[10rem]">
        <div className="flex justify-center items-center">
          <GlobalContainer>
            <div className="flex flex-col gap-[4rem]">
              <ServiceHeader/>
              <div className="flex flex-col gap-18">
                <ServiceCards/>
                <ServiceButton/>
              </div>
            </div>
          </GlobalContainer>
        </div>
      </section>
      <section className="h-auto py-[10rem]">
        <div className="flex justify-center items-center">
          <GlobalContainer>
            <div className="flex flex-col gap-[4rem]">
              <BlogHeader/>
              <BlogCards/>
            </div>
          </GlobalContainer>
        </div>
      </section>
    </main>
  );
}
