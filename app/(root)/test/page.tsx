"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";

export default function App() {
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
        ref={componentRef}
        className="p-5 relative m-auto max-w-2xl aspect-[11.5/16] text-center"
      >
        {/* Logo Image */}
        <div className="absolute top-5 left-5">
          <img
            src="/logo.png" // Ensure this path is correct and image is in the `public` directory
            alt="Logo"
            width={100} // Desired width in pixels
            height={100} // Desired height in pixels
            style={{ objectFit: "contain" }} // Ensure proper scaling
          />
        </div>

        <div className="border-[red] border-2 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          illo? Qui blanditiis amet, incidunt eaque perspiciatis dolor hic
          expedita perferendis fugit consequuntur iusto. Laudantium autem modi
          suscipit! Omnis, tenetur placeat?
          <div className="absolute bottom-4 right-5">
            this text on the bottom
          </div>
        </div>
      </div>

      <button onClick={handleDownload} style={{ margin: "10px" }}>
        Download Article as PDF
      </button>
    </>
  );
}
