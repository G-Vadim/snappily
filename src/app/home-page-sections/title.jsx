'use client';
import { useState, useEffect, useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";

export const Title = ({ text, imageSrc }) => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(200);

  useEffect(() => {
    setTimeout(() => setAutoplaySpeed(1600), 1100);
  }, []);

  const settings = useMemo(() => ({
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: autoplaySpeed,
    cssEase: "linear"
  }), [autoplaySpeed]);

  return (
    <section className="flex justify-between pl-[168px] pr-[110px] mb-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex gap-2 max-w-[585px] mt-[70px]">
            <h1 className="text-3xl font-bold -tracking-[2px] inline">Snappily{' '}</h1>
            <div className="inline">
              <Slider {...settings}>
                <span className="text-3xl font-bold -tracking-[2px] text-coral">Simplifies</span>
                <span className="text-3xl font-bold -tracking-[2px] text-coral">Automates</span>
                <span className="text-3xl font-bold -tracking-[2px] text-coral">Accelerates</span>
              </Slider>
            </div>
          </div>
          <h1 className="text-3xl font-bold -tracking-[2px] max-w-[585px]">Compliance: One Task at a Time</h1>
        </div>
        <p className="text-base max-w-[483px] font-light">{text}</p>
      </div>
      <Image src={imageSrc} alt="home-title" width={357} height={448}/>
    </section>
  );
};