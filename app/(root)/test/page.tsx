"use client";

import { testAction } from "@/actions/test";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const handleClick = async () => {
    try {
      let info = await testAction();
      console.log(info);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
      voluptatibus qui at, odit tempora optio est nisi ab quas alias dolorum
      tempore pariatur, quos obcaecati. Perspiciatis cupiditate fugit corrupti
      facere. <Button onClick={handleClick}> click to get data</Button>
    </div>
  );
};

export default page;
