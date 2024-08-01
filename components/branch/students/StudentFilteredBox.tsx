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
    <div className="  p-7 my-4 bg-white rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-3">
        <Select>
          <SelectTrigger className="w-full branch_input">
            <SelectValue placeholder="Select Religion" />
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
            <SelectValue placeholder="Select Religion" />
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
            <SelectValue placeholder="Select Religion" />
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
            <SelectValue placeholder="Select Religion" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Islam">Islam</SelectItem>
            <SelectItem value="Hinduism">Hinduism</SelectItem>
            <SelectItem value="Christianity">Christianity</SelectItem>
            <SelectItem value="Buddhism">Buddhism</SelectItem>
          </SelectContent>
        </Select>{" "}
      </div>
      <div className="flex items-center mt-3 justify-end">
        <Button className=" bg-green-600 hover:bg-green-700">
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default StudentFilteredBox;
