import TextShorter from "@/components/shared/TextShorter";
import { Button } from "@/components/ui/button";
import React from "react";

const lastNotice = () => {
  return (
    <div className=" p-4 rounded-lg border-2 border-gray-100 shadow-md">
      <h1 className="text-amber-500 font-bold">
        <span>Last Notice : </span>12 augest 2024
      </h1>
      <p className="">
        <TextShorter
          text={` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nam
        maiores, cupiditate nostrum molestias earum tenetur porro. Laudantium
        repellat nulla voluptate aliquid voluptatem blanditiis odio magni nam
        amet, ad beatae. upiditate nostrum molestias earum tenetur porro. Laudantium
        repellat nulla voluptate aliquid voluptatem blanditiis odio magni nam
        amet, ad beatae.`}
          num={300}
        />
        <Button className="text-sm p-2">view all</Button>
      </p>
    </div>
  );
};

export default lastNotice;
