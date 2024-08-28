import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

import { FaRegFilePdf } from "react-icons/fa6";

const StudentFilteredBox = () => {
  return (
    <div className="cursor-not-allowed  p-7 my-4 bg-white rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_0.6fr]  gap-3">
        <Select>
          <SelectTrigger className="w-full branch_input">
            <SelectValue placeholder="Select Trade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Islam">Islam</SelectItem>
            <SelectItem value="Hinduism">Hinduism</SelectItem>
            <SelectItem value="Christianity">Christianity</SelectItem>
            <SelectItem value="Buddhism">Buddhism</SelectItem>
          </SelectContent>
        </Select>{" "}
        <Select>
          <SelectTrigger className="w-full branch_input">
            <SelectValue placeholder="Select Session" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Islam">Islam</SelectItem>
            <SelectItem value="Hinduism">Hinduism</SelectItem>
            <SelectItem value="Christianity">Christianity</SelectItem>
            <SelectItem value="Buddhism">Buddhism</SelectItem>
          </SelectContent>
        </Select>{" "}
        <Select>
          <SelectTrigger className="w-full branch_input">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Islam">Islam</SelectItem>
            <SelectItem value="Hinduism">Hinduism</SelectItem>
            <SelectItem value="Christianity">Christianity</SelectItem>
            <SelectItem value="Buddhism">Buddhism</SelectItem>
          </SelectContent>
        </Select>{" "}
        <div className="w-full">
          <Button className=" bg-gray-600 w-full h-full hover:bg-gray-700">
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentFilteredBox;
