"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";

const showPage = () => {
  const hanldler = async () => {
    try {
      let { data }: { data: { role: "USER" | "ADMIN" } } = await axios.post(
        "http://localhost:3000/api/branch",
        {
          id: "cdbd6b88-1496-4ed0-a1ff-fe6d54a7a71f",
        }
      );
      console.log(data);
    } catch (error) {
      alert("error occurs");
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Button onClick={hanldler}>Get Data</Button>
    </div>
  );
};

export default showPage;
