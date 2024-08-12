import React from "react";
import { Fa42Group } from "react-icons/fa6";
import { PiStudentLight } from "react-icons/pi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { BsDatabaseDown } from "react-icons/bs";
import { SiStatuspal } from "react-icons/si";

type DateType = {
  icon: React.JSX.Element;
  title: string;
  num: string | number;
};
const BranchInfoDashboard = () => {
  let data: DateType[] = [
    { icon: <PiStudentLight />, title: "Total Students", num: 45 },
    { icon: <BsDatabaseDown />, title: "Unpaid Students", num: 45 },
    { icon: <HiOutlineBanknotes />, title: "Paid Students", num: 45 },
    { icon: <SiStatuspal />, title: "Active", num: "Status" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 ">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-start gap-4 p-6 py-10  shadow-md rounded"
        >
          <div className="bg-blue-50 p-5 text-2xl rounded-full text-blue-600">
            {item.icon}
          </div>
          <div className="flex items-start justify-center flex-col">
            <span className="text-[1.5rem] font-bold">{item.num}</span>{" "}
            <span className="text-sm text-zinc-500 mt-1">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BranchInfoDashboard;
