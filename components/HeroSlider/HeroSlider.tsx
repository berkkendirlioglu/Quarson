"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import Image from "next/image";


export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop:true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  },
  [
      (slider) => {
        let timeout:any;
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
)

  return (
    <div className="relative">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider h-[100vh]">
          <div className="keen-slider__slide !relative"><Image className="object-cover scale-animation" src="/assets/Hero/heroimg.webp" alt="Hero Images" fill/></div>
          <div className="keen-slider__slide !relative"><Image className="object-cover scale-animation" src="/assets/Hero/heroimg2.webp" alt="Hero Images" fill/></div>
          <div className="keen-slider__slide !relative"><Image className="object-cover scale-animation" src="/assets/Hero/heroimg3.webp" alt="Hero Images" fill/></div>
          <div className="keen-slider__slide !relative"><Image className="object-cover scale-animation" src="/assets/Hero/heroimg4.webp" alt="Hero Images" fill/></div>
        </div>
        <div className="absolute flex justify-center items-center bg-[rgba(0,0,0,.5)] w-full h-full top-0 left-0">
            <p className="text-[34px] lg:text-[48px] text-center">Hayallerinizi Kalitemizle <br /> <span className="text-[#b39e98] text-[42px] lg:text-[56px] tracking-[2px]">Güzelleştiriyoruz</span></p>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e:any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e:any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}


function Arrow(props: any) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <div onClick={props.onClick} className={`${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled} arrow-container`}>
      <svg
        className={`arrow`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
