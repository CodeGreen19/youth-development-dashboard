import ApplyBranch from "@/components/root/ApplyBranch";
import Contact from "@/components/root/Contact";
import Hero from "@/components/root/Hero";
import HowItsWork from "@/components/root/HowItsWork";
import PopularCourse from "@/components/root/PopularCourse";

import Quality from "@/components/root/Quality";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full md:container">
      <Hero />
      <Quality />
      <HowItsWork />
      <PopularCourse />
      <Contact />
      <ApplyBranch />
    </div>
  );
};

export default HomePage;
