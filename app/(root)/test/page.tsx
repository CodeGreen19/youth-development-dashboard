"use client";

import { ReactNode, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";

export default function RegistrationCard() {
  const componentRef = useRef<HTMLDivElement | null>(null);

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
      <div
        className="cursor-pointer my-4 text-blue-500 underline"
        onClick={handleDownload}
      >
        download
      </div>
      <div className="">
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
            <ul className="flex mt-4 gap-1 items-start font-bold font-salsa justify-start flex-col">
              <li>name</li>
              <li>fatherName</li>
              <li className="mt-1">motherName</li>
              <li className="mt-[2px]">gender</li>
              <li className="mt-3">dateOfBirth</li>
              <li>branch name here</li>
              <li className="mt-2">genReg</li>
            </ul>
            <Image
              src={`/logo.png`}
              height={100}
              width={100}
              alt="registration"
              className="absolute  w-32 top-0 right-16"
            />
            <div className="absolute -left-1 text-[1rem] font-salsa bottom-[75px] font-bold">
              genRoll
            </div>
            <div className="absolute left-[190px] text-[1.2rem] bottom-[40px] flex flex-col justify-start items-start font-bold">
              <div>courseRange</div>
              <div className="ml-7 italic">2024</div>
            </div>
          </div>
          <div className="h-5 w-5 bg-white absolute left-[167px] bottom-[288px]"></div>
        </div>
      </div>
    </>
  );
}
