"use client";

import { ReactNode, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { BranchStudentType } from "@/types/students";
import Image from "next/image";

export default function Certificate({}: {}) {
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
        className="cursor-pointer mt-6 inline m-auto my-4 rounded-md p-2 text-amber-500 underline"
        onClick={handleDownload}
      >
        download certificate
      </div>
      <div>
        <div
          ref={componentRef}
          className="p-2 relative box-border m-auto w-[62rem] aspect-[11.6/16] text-center "
        >
          <Image
            src={"/certificate.jpeg"}
            height={1200}
            width={1000}
            alt="registration"
            className="w-full -translate-y-[6px] z-20"
          />
          <div className=" h-[300px] font-bold w-full z-40 absolute left-0 top-[220px]">
            <div className="flex items-center justify-end">
              <ul className="w-[30%] h-[120px] pl-24 pt-[42px] flex items-start justify-start flex-col gap-0 ">
                <li>123456</li>
                <li>143123133</li>
                <li>12 may 2025</li>
              </ul>
            </div>
            <div className="flex items-center justify-end">
              <ul className="w-[62%] flex items-start justify-start pt-1 gap-1 flex-col h-[170px] ">
                <li className="ml-16">shobuj ahmed</li>
                <li className="flex ml-8 mt-1 items-center gap-48 justify-start">
                  <span>father name</span>
                  <span>mother name</span>
                </li>{" "}
                <li className="ml-48">course name </li>
                <li className="flex items-center gap-52 justify-start">
                  <span className="ml-16">the earn way academy</span>
                  <span className="ml-2">2424245</span>
                </li>
                <li className="flex items-center gap-72 justify-start">
                  <span className="ml-2">january to december</span>
                  <span>A +</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
