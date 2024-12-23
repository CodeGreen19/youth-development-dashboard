import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export type StudentPaidType = {
  id: string;
  name: string;
  dob: string;
  fatherMother: string;
  rollReg: string;
  trade: string;
  photo: string | undefined;
  signature: string;
};

const StudentResultModal = ({ children }: { children: React.ReactNode }) => {
  const {} = {
    institute: "the earn way youth development resource",
  };
  const dummyData: StudentPaidType[] = [
    {
      id: "1",
      name: "Mst Sabrina Sharin Mithin",
      dob: "12/06/2003",
      fatherMother: "Md Shamsul Alam\nMs Rowsonara Khatun",
      rollReg: "2315531\n1451552830",
      trade: "Computer Office Application",
      photo: "/photo1.jpg",
      signature: "Mithin",
    },
    {
      id: "2",
      name: "Md. Shahed Ali",
      dob: "12/09/2006",
      fatherMother: "Md. Babor Ali\nMs. Sarifa Khatun",
      rollReg: "2315532\n1451552841",
      trade: "Computer Office Application",
      photo: "/photo2.jpg",
      signature: "Shahed",
    },
    {
      id: "3",
      name: "Mst. Rabia Khatun",
      dob: "21/09/2006",
      fatherMother: "Md. Mosked Ali\nMst. Salma Khatun",
      rollReg: "2315533\n1451552852",
      trade: "Computer Office Application",
      photo: "/photo3.jpg",
      signature: "Rabia",
    },
    // Add more entries to replicate the table if needed
  ];

  const handleDownload = () => {
    const doc = new jsPDF();

    // Add title and header
    doc.setFontSize(12);
    doc.text("Digital Youth Development IT Network", 105, 15, {
      align: "center",
    });
    doc.text("January 2023 - June 2023 (Total Students: 57)", 105, 22, {
      align: "center",
    });
    doc.text("Crown Computer (145)", 105, 29, { align: "center" });

    // Define table columns
    const columns = [
      { header: "SL#", dataKey: "id" },
      { header: "Name/DOB", dataKey: "name" },
      { header: "Father/Mother", dataKey: "fatherMother" },
      { header: "Roll/Reg", dataKey: "rollReg" },
      { header: "Trade", dataKey: "trade" },
      { header: "Photo", dataKey: "photo" },
      { header: "Signature", dataKey: "signature" },
    ];

    // Define table rows
    const rows = dummyData.map((student, index) => ({
      id: index + 1,
      name: `${student.name}\n${student.dob}`,
      fatherMother: student.fatherMother,
      rollReg: student.rollReg,
      trade: student.trade,
      photo: "Photo Placeholder", // Add dynamic images separately
      signature: student.signature,
    }));

    // Add table using autoTable
    autoTable(doc, {
      head: columns,
      body: rows,
      startY: 40,
      theme: "grid",
      didDrawCell: (data) => {
        if (data.column.dataKey === "photo") {
          const img = new Image();
          img.src = "/path-to-photo-placeholder.jpg"; // Replace with correct path
          doc.addImage(img, "JPEG", data.cell.x + 5, data.cell.y + 2, 10, 10);
        }
      },
      styles: {
        cellPadding: 2,
        fontSize: 10,
        valign: "middle",
        halign: "center",
      },
      columnStyles: {
        photo: { cellWidth: 20 },
      },
    });

    // Save the PDF
    doc.save("Student_List.pdf");
  };

  return <div onClick={handleDownload}>{children}</div>;
};

export default StudentResultModal;
