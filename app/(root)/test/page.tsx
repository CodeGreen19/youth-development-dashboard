"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const showPage = () => {
  const [data, setData] = useState<boolean>(false);
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Button>Get Data</Button>
    </div>
  );
};

export default showPage;
