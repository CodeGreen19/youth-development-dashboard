"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import AnimatedBtn from "./AnimatedBtn";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  const slider_imageData = [
    {
      id: "#1",
      text: "এতদ্বারা সকল পরিচালক মহোদয়কে অবগতির জন্য জানানো যাচ্ছে যে,  আইটি নেটওয়ার্ক এর (জানুয়ারি - জুন ২০২৪ এবং এপ্রিল - জুন ২০২৪) ইং সেশনে ০৩ মাস এবং ০৬ মাস মেয়াদী কম্পিউটার কোর্সের..........",
      date: "12 may 2024",
    },
    {
      id: "#1",
      text: "এতদ্বারা সকল পরিচালক মহোদয়কে অবগতির জন্য জানানো যাচ্ছে যে,  নেটওয়ার্ক এর (জানুয়ারি - জুন ২০২৪ এবং এপ্রিল - জুন ২০২৪) ইং সেশনে ০৩ মাস এবং ০৬ মাস মেয়াদী কম্পিউটার কোর্সের..........",
      date: "12 may 2024",
    },
    {
      id: "#1",
      text: "এতদ্বারা সকল পরিচালক মহোদয়কে অবগতির জন্য জানানো যাচ্ছে যে,  এর (জানুয়ারি - জুন ২০২৪ এবং এপ্রিল - জুন ২০২৪) ইং সেশনে ০৩ মাস এবং ০৬ মাস মেয়াদী কম্পিউটার কোর্সের..........",
      date: "12 may 2024",
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
          <h1 className="uppercase text-2xl  !font-patta leading-[50px] text-[2.5rem] font-bold">
            The earn way youth development resourece
          </h1>
          <p className="text-[1.1rem] md:text-[1.5rem] mt-11 my-6 font-bangla leading-8 md:leading-10   mb-5 md:mb-20 ">
            আমরা কম্পিউটার প্রশিক্ষণ কেন্দ্রের ব্রাঞ্চ খোলার লাইসেন্স ও অনুমতি
            প্রদান করছি, একটি ব্রাঞ্চের উদ্যোক্তা হতে এখনই আবেদন করুন
          </p>
          <div className="mb-5">
            <AnimatedBtn />
          </div>
        </div>
      </div>
      <div className="lg:h-full h-[400px]  md:h-[700px]  px-2 w-full lg:w-2/5 flex items-center justify-center bg-yellow-500 ">
        <div className="w-full h-full py-4">
          <div className="my-2 flex items-center justify-between">
            <h1 className="">Important Notices</h1>
            <Button className="rounded-none text-sm">View All</Button>
          </div>
          <Swiper
            className=" w-full h-[65%] md:h-[70%] content-center"
            direction={isLargeScreen ? "vertical" : "horizontal"}
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={isLargeScreen ? 2 : 1}
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {slider_imageData.map((item, i) => (
              <SwiperSlide key={i} className="bg-white ">
                <div className="text-md m-4 font-bangla">
                  <h1 className="my-1 text-amber-600">Date : 12 may 2024</h1>
                  <p>{item.text}</p>
                  <Button className="font-incons text-[12px] md:text-sm rounded-none">
                    Read More
                  </Button>
                </div>
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
