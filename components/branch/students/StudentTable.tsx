"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

import { FaEdit, FaIdBadge } from "react-icons/fa";

type Student = {
  id: number;
  name: string;
  roll: string;
  registration: string;
  mobile: string;
  trade: string;
  session: string;
  result: string;
  picture: string;
};

const data: Student[] = [
  {
    id: 1,
    name: "Md. Israfil Hossin",
    roll: "2416956",
    registration: "1451695053",
    mobile: "01908760736",
    trade: "Computer Office Application",
    session: "July 2023 - December 2023",
    result: "A+",
    picture: "https://via.placeholder.com/50", // Placeholder image
  },
  {
    id: 2,
    name: "Md. Yasin Alom",
    roll: "2416877",
    registration: "1451687192",
    mobile: "01909727837",
    trade: "Computer Office Application",
    session: "July 2023 - December 2023",
    result: "A+",
    picture: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Mst. Sumaya Khatun",
    roll: "2416872",
    registration: "1451686681",
    mobile: "01971497939",
    trade: "Computer Office Application",
    session: "July 2023 - December 2023",
    result: "A+",
    picture: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Md. Rokonuzzaman",
    roll: "2416762",
    registration: "1451675857",
    mobile: "01326446183",
    trade: "Computer Office Application",
    session: "July 2023 - December 2023",
    result: "A+",
    picture: "https://via.placeholder.com/50",
  },
  // Add more dummy data as needed...
];

const columns: TableColumn<Student>[] = [
  {
    name: "Picture",
    cell: (row) => (
      <img
        src={row.picture}
        alt={row.name}
        className="w-12 my-1 h-12 rounded-sm"
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
    selector: (row) => row.roll,
    sortable: true,
  },
  {
    name: "Registration",
    selector: (row) => row.registration,
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
        <button className="bg-purple-500 text-white p-2 rounded">
          <FaEdit />
        </button>
        <button className="bg-blue-500 text-white p-2 rounded">
          <FaIdBadge />
        </button>
      </div>
    ),
  },
];

const DataTableComponent: React.FC = () => {
  const [filterText, setFilterText] = useState("");

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

export default DataTableComponent;
