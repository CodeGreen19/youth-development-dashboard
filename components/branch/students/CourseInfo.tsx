import React from "react";

import {
  bloodGroups,
  courseDurationInfo,
  courseNameArr,
} from "@/components/data/array_info";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CourseInfo = () => {
  const current_year = new Date().getFullYear();
  return (
    <section className="bg-white p-4 rounded-sm mb-3">
      <h1 className="branch_heading">Course Information</h1>
      <div className="grid  grid-cols-1 md:grid-cols-[1fr_1fr_0.7fr] gap-4 md:gap-16 ">
        <div className="flex items-center flex-col gap-3">
          <Select>
            <SelectTrigger className="w-full branch_input">
              <SelectValue placeholder="Course Duration" />
            </SelectTrigger>
            <SelectContent>
              {courseDurationInfo.map((item, i) => (
                <SelectItem
                  key={i}
                  value={`${item.course_duration} - ${current_year}`}
                >
                  {item.course_duration}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full branch_input">
              <SelectValue placeholder="Select Trade" />
            </SelectTrigger>
            <SelectContent>
              {courseNameArr.map((item, i) => (
                <SelectItem key={i} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center flex-col gap-3">
          <Select>
            <SelectTrigger className="w-full branch_input">
              <SelectValue placeholder="Course Range" />
            </SelectTrigger>
            <SelectContent>
              {courseDurationInfo.map((item, i) => (
                <SelectItem
                  key={i}
                  value={`${item.course_duration} - ${current_year}`}
                >
                  {item.course_duration}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full branch_input">
              <SelectValue placeholder="Select Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangla">Bangle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CourseInfo;
