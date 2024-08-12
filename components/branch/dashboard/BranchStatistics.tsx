import BranchEarning from "@/app/(branch)/_charts/Earning";

import React from "react";

const BranchStatistics = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center  md:justify-between gap-2">
      <div className=" w-1/2 rounded">
        <BranchEarning />
      </div>
      <div className=" w-1/2 rounded">
        <BranchEarning />
      </div>
    </div>
  );
};

export default BranchStatistics;
