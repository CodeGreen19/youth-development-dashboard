"use client";

import { jsPDF } from "jspdf";

// React Component
const PDFGenerator = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-lg font-bold mb-4">Generate Student Result PDF</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Download PDF
      </button>
    </div>
  );
};

export default PDFGenerator;
