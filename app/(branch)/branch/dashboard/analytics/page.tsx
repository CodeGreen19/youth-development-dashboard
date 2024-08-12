"use client";

import React from "react";
import BranchInfoDashboard from "@/components/branch/dashboard/BranchInfo";
import BranchStatistics from "@/components/branch/dashboard/BranchStatistics";
import LastNotice from "@/components/branch/dashboard/lastNotice";
import LastTransections from "@/components/branch/dashboard/LastTransections";
import LastPaidInfo from "@/components/branch/dashboard/lastPaidInfo";

import LineCharts from "@/app/(branch)/_charts/LineChart";

const Analytics = () => {
  let data = [
    { comp: <BranchInfoDashboard /> },
    { comp: <LineCharts /> },
    { comp: <LastNotice /> },
    { comp: <BranchStatistics /> },
    { comp: <LastTransections /> },
    { comp: <LastPaidInfo /> },
  ];
  return (
    <div className="bg-white rounded-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {data.map((item, i) => (
          <div className="h-full" key={i}>
            {item.comp}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
