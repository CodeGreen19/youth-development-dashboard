"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import DeleteStudent from "../DeleteStudent";
import DetailStudentInfo from "./DetailStudentInfo";
import StudentPaymentRecords from "./StudentPaymentRecords";
import { BranchStudentType } from "@/types/students";
import { Download } from "lucide-react";
import { generateAdmissionFormPDF } from "@/components/data/pdf-func";

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
  const addmissionFormRef = useRef<HTMLDivElement | null>(null);

  // states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (!students) {
    return null;
  }
  // getdata

  const studentInfo: BranchStudentType = students.filter(
    (item) => item.id === studentId
  )[0];

  const openStateHandler = (e: boolean) => {
    setIsModalOpen(e);
  };

  return (
    <div>
      <DropdownMenu open={isModalOpen === true ? true : undefined}>
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
          <DropdownMenuItem
            className="cursor-pointer "
            onClick={() => {
              generateAdmissionFormPDF(studentInfo);
            }}
          >
            admission form <Download className="w-4 text-green-500 ml-2" />
          </DropdownMenuItem>
          <Link
            className="cursor-pointer"
            href={`/branch/unpaid-students/${studentId}?back=all-students`}
          >
            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
          </Link>
          {publicId && (
            <>
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
      <DetailStudentInfo
        student={studentInfo}
        openState={openStateHandler}
        imgUrl={imgUrl}
      >
        <div ref={detailInfoRef}></div>
      </DetailStudentInfo>
      <StudentPaymentRecords
        student={studentInfo}
        openState={openStateHandler}
        imgUrl={imgUrl}
      >
        <div ref={paymentRef}></div>
      </StudentPaymentRecords>
      {/* <AdmissionFormModal branchStudent={studentInfo}>
        <div ref={addmissionFormRef} className="hidden"></div>
      </AdmissionFormModal> */}
    </div>
  );
};

export default StudentActionLists;
