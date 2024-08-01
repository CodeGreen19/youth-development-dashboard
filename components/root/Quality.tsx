import Image from "next/image";
import React from "react";
import { AppearMotionDiv } from "./FramerMotion";

const Quality = () => {
  const programms = [
    {
      heading: "Computer Training Center Licenses",
      icon: "/programms/icon1.png",
      text: "We provide licenses for establishing computer training centers, ensuring quality education and resources.",
      deley: 0,
    },
    {
      heading: "Youth Empowerment Programs",
      icon: "/programms/icon2.png",
      text: "Our programs are designed to empower youth with the necessary skills and knowledge to succeed in the digital age.",
      deley: 0.2,
    },
    {
      heading: "Advanced IT Training",
      icon: "/programms/icon3.png",
      text: "We offer advanced IT training courses that cover the latest technologies and industry practices.",
      deley: 0.4,
    },
    {
      heading: "Community Development",
      icon: "/programms/icon4.jpg",
      text: "We work towards community development by providing opportunities and support for underprivileged youth.",
      deley: 0.6,
    },
  ];

  return (
    <div className="py-4 relative  pb-20 lg:pb-0 flex flex-col items-center justify-between gap-2 lg:flex-row  lg:min-h-screen">
      <div className=" lg:absolute top-3 lg:top-10 text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] text-center md:px-16 leading-5 lg:leading-10 text-amber-600 my-4">
        Since 2021, we have been partnering with education leaders to increase
        <span className="mx-3 border-b-2 border-b-yellow-500">
          equity and achievement for all students
        </span>
        .
      </div>

      {programms.map((item) => (
        <AppearMotionDiv
          key={item.icon}
          delay={item.deley}
          className=" w-[95%] md:w-2/3 lg:w-[24%] border border-yellow-200 flex items-center justify-center gap-3 flex-col duration-700 bg-white transition-all hover:border-yellow-400 hover:border-2 hover:rounded-tr-[50px] text-center h-[300px] shadow-lg shadow-[#f0f0f0] "
        >
          <div className="flex  items-center justify-center">
            <Image src={item.icon} height={60} width={60} alt="img" />
          </div>
          <h1 className="text-lg font-bold">{item.heading}</h1>
          <p>{item.text}</p>
        </AppearMotionDiv>
      ))}
    </div>
  );
};

export default Quality;
