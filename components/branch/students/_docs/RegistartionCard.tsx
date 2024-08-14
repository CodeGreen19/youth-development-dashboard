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
          className="p-2 relative border box-border border-red-200 m-auto w-[48rem] aspect-[11.6/16] text-center "
        >
          <Image
            src={"/reg.jpeg"}
            height={1200}
            width={1000}
            alt="registration"
            className="w-full z-20"
          />
          <div className="h-[400px] z-30 absolute right-0 bottom-[205px] w-[450px] ">
            <ul className="flex mt-1 text-[1.3rem] font-bold items-start justify-start gap-4 flex-col">
              <li>{name}</li>
              <li>{fatherName}</li>
              <li>{motherName}</li>
              <li>{gender}</li>
              <li>{dateOfBirth}</li>
              <li>branch name here</li>
              <li>{genReg}</li>
            </ul>
            <Image
              src={`${docs?.profileUrl}`}
              height={100}
              width={100}
              alt="registration"
              className="absolute  w-32 top-0 right-16"
            />
            <div className="absolute left-0 text-[1.3rem]  bottom-[85px] font-bold">
              {genRoll}
            </div>
            <div className="absolute left-[190px] gap-2 text-[1.2rem] bottom-[55px] flex flex-col justify-start items-start font-bold">
              <div>{courseRange}</div>
              <div className="ml-8">2024</div>
            </div>
          </div>
          <div className="h-5 w-5 bg-white absolute left-[167px] bottom-[288px]"></div>
        </div>
      </div>
    </>
  );
}
