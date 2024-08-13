"use client";

import { ReactNode } from "react";
import * as XLSX from "xlsx";

// Define the type for your student data
type StudentData = {
  Name: string;
  Roll: number;
  Registration: string;
  Mobile: string;
  Trade: string;
  Session: string;
  Result: string;
};

export default function app({ children }: { children: ReactNode }) {
  // Example data
  const studentData: StudentData[] = [
    {
      Name: "Md. Israfil Hossin",
      Roll: 2000000,
      Registration: "1451695053",
      Mobile: "01908760736",
      Trade: "Computer Office Application",
      Session: "July 2023 - December 2023",
      Result: "A+",
    },
    {
      Name: "Md. Yasin Alom",
      Roll: 2000000,
      Registration: "1451687192",
      Mobile: "01909727837",
      Trade: "Computer Office Application",
      Session: "July 2023 - December 2023",
      Result: "A+",
    },
  ];

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(studentData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Calculate column widths based on the maximum length of content in each column
    const maxLengths = Object.keys(studentData[0]).map((key) =>
      Math.max(
        ...studentData.map(
          (row) => row[key as keyof StudentData].toString().length
        ),
        key.length
      )
    );

    worksheet["!cols"] = maxLengths.map((len) => ({ width: len + 2 })); // Add padding for readability

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "students.xlsx"); // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <div onClick={handleDownloadExcel}>{children}</div>;
}
