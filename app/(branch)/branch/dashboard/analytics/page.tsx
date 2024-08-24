"use client";

import React from "react";
import BranchInfoDashboard from "@/components/branch/dashboard/BranchInfo";
import BranchStatistics from "@/components/branch/dashboard/BranchStatistics";
import LastNotice from "@/components/branch/dashboard/lastNotice";
import LastTransections from "@/components/branch/dashboard/LastTransections";
import LastPaidInfo from "@/components/branch/dashboard/lastPaidInfo";

import LineCharts from "@/app/(branch)/_charts/LineChart";
import { useQuery } from "@tanstack/react-query";
import { getDashboardInfoForBranch } from "@/actions/branchOwner";
import {
  BranchMaleFemaleType,
  LastFiveStudentType,
  TransInfoType,
} from "@/types/payment";

const Analytics = () => {
  const { data, isPending } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => await getDashboardInfoForBranch(),
  });

  if (isPending) {
    return <div>loading...</div>;
  }

  if (data?.error) {
    return <div className="text-red-500">Some error occurs</div>;
  }

  let {
    lastNotice,
    paidStudent,
    totalStudent,
    unpaidStudent,
    lastFiveTrans,
    lastFiveStudent,
    FemaleCount,
    maleCount,
    lastMonths,
  } = data!;
  let lastFive: TransInfoType[] | undefined = lastFiveTrans?.map((item) => ({
    name: item.name,
    amount: item.amount,
    trade: item.courseTrade,
  }));

  let maleData: BranchMaleFemaleType = {
    count: maleCount!,
    gender: "Male",
    total: totalStudent!,
    text: "Source : The number of male students is derived from the total count of all registered students.",
  };
  let femaleDate: BranchMaleFemaleType = {
    count: FemaleCount!,
    gender: "Femele ",
    total: totalStudent!,
    text: " Source : Similarly ,The number of Female students is derived from the total count of all registered students.",
  };

  return (
    <div className="bg-white rounded-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <BranchInfoDashboard
          all={totalStudent!}
          paid={paidStudent!}
          unpaid={unpaidStudent!}
        />
        <LineCharts data={lastMonths!} />
        <LastNotice date={lastNotice!.createdAt!} notice={lastNotice!.text!} />
        <BranchStatistics female={femaleDate} male={maleData} />
        <LastTransections data={lastFive!} />
        <LastPaidInfo data={lastFiveStudent!} />
      </div>
    </div>
  );
};

export default Analytics;
