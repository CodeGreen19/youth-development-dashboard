"use client";

import React, { Fragment, useState } from "react";

import { bloodGroups, boardArr } from "@/components/data/array_info";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const AcadamicInfo = () => {
  const [selected, setSelected] = useState<"jsc" | "ssc">("jsc");
  return (
    <Fragment>
      <h1 className="branch_heading flex items-center justify-start gap-3">
        <span>Academic Information </span>
        <div className="">
          <Button
            variant={selected === "jsc" ? "outline" : "ghost"}
            onClick={() => setSelected("jsc")}
          >
            JSC
          </Button>{" "}
          <Button
            variant={selected === "jsc" ? "ghost" : "outline"}
            onClick={() => setSelected("ssc")}
          >
            SSC
          </Button>
        </div>
      </h1>
      {selected === "jsc" ? (
        <section className="bg-white p-4 rounded-sm mb-3">
          <div className="grid  grid-cols-1 md:grid-cols-[1fr_1fr_0.7fr] gap-4 md:gap-16 ">
            <div className="flex items-center flex-col gap-3">
              <Select>
                <SelectTrigger className="w-full branch_input">
                  <SelectValue placeholder="Select JSC Board" />
                </SelectTrigger>
                <SelectContent>
                  {boardArr.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>
            <div className="flex items-center justify-between  gap-3">
              <Input
                type="number"
                placeholder="JSC roll"
                className="branch_input"
              />
              <Input
                type="number"
                placeholder="JSC year"
                className="branch_input"
              />
            </div>
            <div className="flex items-center flex-col gap-3">
              <Input
                type="text"
                placeholder="JSC result"
                className="p-6  bg-white"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white p-4 rounded-sm mb-3">
          <div className="grid  grid-cols-1 md:grid-cols-[1fr_1fr_0.7fr] gap-4 md:gap-16 ">
            <div className="flex items-center flex-col gap-3">
              <Select>
                <SelectTrigger className="w-full branch_input">
                  <SelectValue placeholder="Select SSC Board" />
                </SelectTrigger>
                <SelectContent>
                  {boardArr.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>{" "}
            </div>
            <div className="flex items-center justify-between  gap-3">
              <Input
                type="number"
                placeholder="SSC roll"
                className="branch_input"
              />
              <Input
                type="number"
                placeholder="SSC year"
                className="branch_input"
              />
            </div>{" "}
            <div className="flex items-center flex-col gap-3">
              <Input
                type="text"
                placeholder="SSC result"
                className="p-6  bg-white"
              />
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default AcadamicInfo;
