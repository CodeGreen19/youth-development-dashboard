"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BranchStudentType } from "@/types/students";
import Link from "next/link";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

import { FaDownload, FaEdit, FaIdBadge } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import DeleteStudent from "./DeleteStudent";
import { processAmerpayPayment } from "@/actions/amerpay";
import { CourseFeesType, Student } from "@/types";
import { consizeData, PriceSettingHelper } from "@/components/data/priceHelper";
import Image from "next/image";

type PaymentType = {
  id: string;
  amount: string;
  phone: string;
  name: string;
};
const hanleClickFunc = async (info: PaymentType) => {
  try {
    let data = await processAmerpayPayment(info);
    if (data.data?.payment_url) {
      window.open(data.data.payment_url, "_self");
    }
  } catch (error) {
    console.log(error);
  }
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
    name: "Fees",
    cell: (row) => (
      <div>
        {typeof row.fees === "boolean" ? (
          <div className="p-2 rounded text-white bg-amber-500">
            Contact with admin
          </div>
        ) : (
          <div className="">
            <Button
              className="bg-amber-500 font-sans text-sm hover:bg-amber-600"
              onClick={async () =>
                await hanleClickFunc({
                  id: row.id,
                  amount: row.fees as string,
                  name: row.name,
                  phone: row.mobile,
                })
              }
            >
              Pay {row.fees} BDT
            </Button>
          </div>
        )}
      </div>
    ),
  },

  {
    name: "Actions",
    cell: (row) => (
      <div className="flex items-center gap-2">
        <Link href={`/branch/unpaid-students/${row.id}`}>
          {" "}
          <Button className="bg-purple-500 hover:bg-purple-600">
            <FaEdit className="text-white" />
          </Button>
        </Link>
        <DeleteStudent id={row.id} imgUrl={row.picture!}>
          <div className="bg-red-500 p-3 rounded cursor-pointer hover:bg-red-600">
            <RiDeleteBin2Line className="text-white" />
          </div>
        </DeleteStudent>
      </div>
    ),
  },
];

const UnPaidStudentTable = ({
  info,
  feesData,
}: {
  info: BranchStudentType[] | null;
  feesData: CourseFeesType[];
}) => {
  const [filterText, setFilterText] = useState("");
  let data =
    info === null ? [] : consizeData({ data: info, feesInfo: feesData });
  console.log(data);

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

export default UnPaidStudentTable;
