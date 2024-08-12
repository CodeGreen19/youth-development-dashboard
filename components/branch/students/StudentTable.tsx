"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BranchStudentType } from "@/types/students";
import Image from "next/image";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

import { FaDownload, FaEdit, FaIdBadge } from "react-icons/fa";

type Student = {
  id: string;
  name: string;
  genRoll: string | undefined;
  genReg: string | undefined;
  mobile: string;
  trade: string;
  session: string;
  isPaid: boolean;
  result: string;
  picture: string | undefined;
};

const columns: TableColumn<Student>[] = [
  {
    name: "Picture",
    cell: (row) => (
      <Image
        height={100}
        width={100}
        src={row.picture!}
        alt={row.name}
        className="w-10 my-2 h-10 rounded-sm"
      />
    ),
    sortable: false,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Roll",
    selector: (row) => row.genRoll!,
    sortable: true,
  },
  {
    name: "Registration No",
    selector: (row) => row.genReg!,
    sortable: true,
  },

  {
    name: "Mobile",
    selector: (row) => row.mobile,
    sortable: true,
  },
  {
    name: "Trade",
    selector: (row) => row.trade,
    sortable: true,
  },
  {
    name: "Session",
    selector: (row) => row.session,
    sortable: true,
  },
  {
    name: "Result",
    selector: (row) => row.result,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div className="flex space-x-2">
        <button className="bg-green-500 text-white p-2 rounded">
          <FaDownload />
        </button>
        <button className="bg-blue-500 text-white p-2 rounded">
          <FaIdBadge />
        </button>
      </div>
    ),
  },
];

const consizeData = (data: BranchStudentType[]): Student[] => {
  let students: Student[] = data.map((item) => {
    return {
      id: item.id,
      mobile: item.mobile,
      name: item.name,
      picture: item.docs?.profileUrl,
      registration: item.docs?.registrationCardUrl,
      result: item.passedResult,
      session: item.courseRange,
      trade: item.courseTrade,
      genReg: item.genReg!,
      genRoll: item.genRoll!,
      isPaid: item.isPaid,
    };
  });

  let filteredStudent = students.filter((item, i) => item.isPaid === true);
  students = filteredStudent;
  return students;
};

const PaidStudentTable = ({ info }: { info: BranchStudentType[] | null }) => {
  const [filterText, setFilterText] = useState("");
  let data = info === null ? [] : consizeData(info);

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-sm">
      <DataTable
        title={
          <div className="w-full flex items-center justify-between">
            <div>
              <span>Students Lists</span> <Button>Excel</Button>
            </div>{" "}
            <div className="flex items-center my-2 justify-end gap-2">
              <Input
                type="text"
                placeholder="Search by name"
                className="p-2 border w-52 border-gray-300 rounded"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
              <Button
                className="ml-2  text-white p-2 px-4 rounded"
                onClick={() => {
                  setResetPaginationToggle(!resetPaginationToggle);
                  setFilterText("");
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        }
        theme="tomato"
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover
        paginationResetDefaultPage={resetPaginationToggle}
        responsive
      />
    </div>
  );
};

export default PaidStudentTable;
