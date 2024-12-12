import React, { ReactNode, useRef } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Student } from "@/types";
import Link from "next/link";
import DeleteStudent from "../DeleteStudent";
import DetailStudentInfo from "./DetailStudentInfo";
import StudentPaymentRecords from "./StudentPaymentRecords";
import { BranchStudentType } from "@/types/students";

const StudentActionLists = ({
  children,
  students,
  studentId,
  imgUrl,
  publicId,
}: {
  students: BranchStudentType[] | null;
  imgUrl: string;
  publicId?: string;
  studentId: string;
  children: ReactNode;
}) => {
  const deleteRef = useRef<HTMLDivElement | null>(null);
  const detailInfoRef = useRef<HTMLDivElement | null>(null);
  const paymentRef = useRef<HTMLDivElement | null>(null);

  if (!students) {
    return null;
  }

  const studentInfo: BranchStudentType = students.filter(
    (item) => item.id === studentId
  )[0];
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-0">{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="bottom"
          className=" p-4 *:cursor-pointer"
        >
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              detailInfoRef.current?.click();
            }}
          >
            Detail Info
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              paymentRef.current?.click();
            }}
          >
            Add Payment Record
          </DropdownMenuItem>
          {publicId && (
            <>
              <Link
                className="cursor-pointer"
                href={`/branch/unpaid-students/${studentId}`}
              >
                <DropdownMenuItem className="cursor-pointer">
                  Edit
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem
                className="text-red-500 cursor-pointer "
                onClick={(e) => {
                  deleteRef.current?.click();
                }}
              >
                Delete
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {publicId && (
        <DeleteStudent id={studentId} public_id={publicId}>
          <div ref={deleteRef} className="hidden"></div>
        </DeleteStudent>
      )}
      <DetailStudentInfo student={studentInfo} imgUrl={imgUrl}>
        <div ref={detailInfoRef} className="hidden"></div>
      </DetailStudentInfo>
      <StudentPaymentRecords student={studentInfo} imgUrl={imgUrl}>
        <div ref={paymentRef} className="hidden"></div>
      </StudentPaymentRecords>
    </div>
  );
};

export default StudentActionLists;

//  <div className="flex items-center gap-2">
//    <Link >
//      <Button className="bg-purple-500 hover:bg-purple-600">
//        <FaEdit className="text-white" />
//      </Button>
//    </Link>
//    <DeleteStudent id={row.id} public_id={row.publicId!}>
//      <div className="bg-red-500 p-3 rounded cursor-pointer hover:bg-red-600">
//        <RiDeleteBin2Line className="text-white" />
//      </div>
//    </DeleteStudent>
//  </div>;
