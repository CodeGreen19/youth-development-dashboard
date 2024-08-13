"use client";

import { ReactNode, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { BranchStudentType } from "@/types/students";
import Image from "next/image";

const SelectedStudent = ({
  id,
  info,
}: {
  id: string;
  info: BranchStudentType[];
}): BranchStudentType => {
  let filterStudent = info.filter((item) => item.id === id);
  return filterStudent[0];
};

export default function RegistrationCard({
  children,
  info,
  id,
}: {
  children: ReactNode;
  info: BranchStudentType[];
  id: string;
}) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const {
    name,
    fatherName,
    motherName,
    dateOfBirth,
    gender,
    courseTrade,
    genRoll,
    genReg,
    courseRange,
    docs,
  } = SelectedStudent({ id, info });

  const handleDownload = async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current, {
        scale: 2, // Increase for higher resolution
        useCORS: true,
        backgroundColor: "white", // White background for the canvas
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");

      // Calculate width and height to fit into the PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("article.pdf");
    }
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleDownload}>
        {children}
      </div>
      <div className="h-0 w-0 overflow-scroll ">
        <div
          ref={componentRef}
          className="p-6 relative border box-border border-red-200 m-auto w-[48rem] aspect-[11.6/16] text-center "
        >
          {/* Logo Image */}
          <div className="border-2 mt-10 border-gray-300 bg-gray-100">
            <div className="flex items-center justify-center flex-col mt-4 gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100} // Desired width in pixels
                height={100} // Desired height in pixels
                style={{ objectFit: "contain" }} // Ensure proper scaling
              />
              <p>Government Reg: B/952985-4</p>
              <h2>
                Approved by the government of people's republic of Bangladesh
              </h2>
              <div className="flex items-center justify-center flex-col gap-1">
                <h2 className="text-[2rem] font-bold">
                  The Earn Way Youth Development Resource
                </h2>
                <h4>{`(national skill standern basic)`}</h4>
                <div
                  style={{ padding: " 20px 0px" }}
                  className="bg-amber-500 mt-4 rounded-sm text-[1.5rem]  text-white  px-5"
                >
                  Registraton Card
                </div>
              </div>
              <div className="mt-5 w-full">
                <h1 className="text-[1.9rem] text-center">{courseTrade}</h1>

                <ul className="w-full my-5 px-8 relative gap-6">
                  <Image
                    src={docs?.profileUrl!}
                    alt="Logo"
                    width={150} // Desired width in pixels
                    height={150}
                    className="absolute top-0 right-10" // Desired height in pixels
                    style={{ objectFit: "contain" }} // Ensure proper scaling
                  />
                  <li className="grid justify-items-start col-span-1 grid-cols-[1fr_2fr]">
                    <div className="">Full Name</div>
                    <p className="font-bold ">: {name}</p>
                    <div className="">Father Name</div>
                    <p className="font-bold ">: {fatherName}</p>
                    <div className="">Mother Name</div>
                    <p className="font-bold ">: {motherName}</p>
                    <div className="">Date of Birth</div>
                    <p className="font-bold ">: {dateOfBirth}</p>
                    <div className="">Gender</div>
                    <p className="font-bold ">: {gender}</p>
                    {/* <div className="">Institution Name</div>
                    <p className="font-bold ">: Ahmed deder</p> */}
                    <div className="">Registration</div>
                    <p className="font-bold ">: {genReg}</p>
                    <div className="mt-3">Roll Number</div>
                    <div className="font-bold flex mt-3 items-center justify-between  ">
                      :
                      <div className="rounded-sm ml-3 p-4 py-2 bg-white  border border-gray-200 text-lg">
                        {genRoll}
                      </div>
                      <div className="ml-8">session : {courseRange}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
