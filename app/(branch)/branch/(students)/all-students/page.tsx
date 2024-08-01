import StudentFilteredBox from "@/components/branch/students/StudentFilteredBox";
// import DataTableComponent from "@/components/branch/students/StudentTable";
import dynamic from "next/dynamic";

const DataTableComponent = dynamic(
  () => import("@/components/branch/students/StudentTable"),
  {
    ssr: false,
  }
);
import React from "react";

const AllStudents = () => {
  return (
    <div>
      <StudentFilteredBox />
      <DataTableComponent />
    </div>
  );
};

export default AllStudents;
