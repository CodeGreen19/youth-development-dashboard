"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import AnimatedBtn from "./AnimatedBtn";
import { TypewriterEffect } from "../framerUi/TypeWritter";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  const slider_imageData = ["/11.jpg", "/16.jpg", "/13.jpg"];

  const words = [
    {
      text: "The",
    },
    {
      text: "Earn",
    },
    {
      text: "Way",
    },

    {
      text: "Youth",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Development",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Resource.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="lg:h-[85vh] w-full  flex items-center lg:flex-row  flex-col lg:justify-between">
      <div className=" w-full  h-full relative md:w-3/5 bg-slate-50">
        <div className="absolute h-full  top-0 left-0 ">
          <div className="h-full w-full z-20 absolute top-0 left-0 bg-[#00000098] "></div>
          <Image
            height={800}
            width={800}
            alt="banner"
            className="relative z-10  object-cover  flex-none h-full"
            src={"/banner.png"}
          />
        </div>
        <div className="z-30 relative mt-20 ml-3 md:ml-8 text-white">
          <h1 className="uppercase font-salsa min-h-[150px] text-2xl leading-[50px] text-[2.5rem] font-bold">
            <TypewriterEffect words={words} />
          </h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[1.1rem] md:text-[1.5rem] mt-11 my-6 font-bangla leading-8 md:leading-10   mb-5 md:mb-20 "
          >
            আমরা কম্পিউটার প্রশিক্ষণ কেন্দ্রের ব্রাঞ্চ খোলার লাইসেন্স ও অনুমতি
            প্রদান করছি, একটি ব্রাঞ্চের উদ্যোক্তা হতে এখনই আবেদন করুন
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-5"
          >
            <AnimatedBtn />
          </motion.div>
        </div>
      </div>
      <div className="lg:h-full h-[400px]  md:h-[700px]  px-2 w-full lg:w-2/5 flex items-center justify-center bg-yellow-500 ">
        <div className="w-full h-full py-4">
          <Swiper
            className=" w-full h-[65%] md:h-[80%] content-center"
            direction={isLargeScreen ? "vertical" : "horizontal"}
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={isLargeScreen ? 2 : 1}
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {slider_imageData.map((item, i) => (
              <SwiperSlide key={i} className="border-4 border-yellow-500">
                <Image
                  src={item}
                  className="w-full"
                  height={1000}
                  width={1000}
                  alt="main_logo"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" p-3 text-sm md:text-lg">
            Note:Empowering Youth Entrepreneurs
            <span className={`text-sky-800 font-bold mx-3 `}>
              The earn way youth development resource
            </span>
            allow to Launch & Manage Your Own Computer Training Center
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
