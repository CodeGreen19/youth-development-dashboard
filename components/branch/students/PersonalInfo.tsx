"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";

import { bloodGroups } from "@/components/data/array_info";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SingleDatePicker from "./DatePicker";
const AvatarEdit = dynamic(() => import("./AvaterEdit"), { ssr: false });

const PersonalInfo = () => {
  return (
    <section className="bg-white p-4 rounded-sm mb-3">
      <h1 className="branch_heading">Perosoal Information</h1>
      <div className="grid  grid-cols-1 md:grid-cols-[1fr_1fr_0.7fr] gap-4 md:gap-16 ">
        <div className="flex items-center flex-col gap-3">
          <Input type="text" placeholder="Name" className="branch_input" />
          <Input
            type="text"
            placeholder="Father's Name"
            className="branch_input"
          />
          <Input
            type="text"
            placeholder="Mother's Name"
            className="branch_input"
          />
          <Input type="number" placeholder="Mobile" className="branch_input" />

          <SingleDatePicker />
        </div>
        <div className="flex items-center flex-col gap-3">
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
              <SelectValue placeholder="Nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangladeshi">Bangladeshi</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full branch_input">
              <SelectValue placeholder="Select Blood Group" />
            </SelectTrigger>
            <SelectContent>
              {bloodGroups.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
          <Select>
            <SelectTrigger className="w-full branch_input">
              <SelectValue placeholder="Nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangladeshi">Bangladeshi</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Email (optional)"
            className="branch_input"
          />
        </div>
        <div>
          <AvatarEdit />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
