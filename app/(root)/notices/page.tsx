"use client";

import { allNoticeAction } from "@/actions/Admin";
import { estimateReadingTime } from "@/components/data/helpers";
import TextShorter from "@/components/shared/TextShorter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";

const AllNotices = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => await allNoticeAction(),
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  if (isPending) {
    return <div className="w-full text-center">loading...</div>;
  }
  if (isError) {
    return (
      <div className="w-full text-center text-red-500">Errors occurs !</div>
    );
  }
  if (data.allNotice?.length === 0) {
    return (
      <div className="w-full text-center text-red-500">
        there is no notice to show !
      </div>
    );
  }

  return (
    <div className="md:container">
      <div className="w-full mt-5 md:mt-20 flex items-start justify-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-[70%] mr-2 p-3 bg-slate-100">
          <h1 className="my-3 text-amber-600 font-bold">
            Date : {format(data.allNotice![selectedIndex].createdAt, "PPPP")}
            <span className="text-sm text-gray-400 font-light ml-3">
              {" "}
              Reading :{" "}
              {estimateReadingTime(data.allNotice![selectedIndex].text)} min
            </span>
          </h1>
          <p>{data.allNotice![selectedIndex].text}</p>
        </div>
        <div className="w-full md:w-[30%] bg-yellow-500 p-3">
          <div>
            <h1>Current Notices</h1>

            <ul>
              <li className="p-2 text-sm bg-slate-50 flex justify-between">
                <TextShorter num={35} text={data.allNotice![0].text} />
                <span
                  className="rounded-none cursor-pointer hover:text-blue-600 text-blue-500"
                  onClick={() => setSelectedIndex(0)}
                >
                  Read
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h1>old Notices</h1>

            <ul>
              {data.allNotice
                ?.filter((_, i) => i !== 0)
                .map((note, index) => (
                  <li
                    key={index}
                    className="p-2 text-sm cursor-pointer bg-slate-50 flex justify-between"
                  >
                    <TextShorter num={35} text={note.text} />
                    <span
                      className="rounded-none hover:text-blue-600 text-blue-500"
                      onClick={() => setSelectedIndex(index + 1)}
                    >
                      Read
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotices;
