import { Button } from "@/components/ui/button";
import React from "react";

const AllNotices = () => {
  return (
    <div className="md:container">
      <div className="w-full mt-5 md:mt-20 flex items-start justify-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-[70%] mr-2 p-3 bg-slate-100">
          <h1 className="my-3 text-amber-600 font-bold">Date : 25 may 2024</h1>
          <h1 className="my-2 font-bold">this is the heading...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint
            minus error! Iusto nam officia voluptatum veniam, culpa minima quos
            consequatur, blanditiis dolor molestiae commodi tenetur! Tempore
            suscipit distinctio molestiae?
          </p>
        </div>
        <div className="w-full md:w-[30%] bg-yellow-500 p-3">
          <div>
            <h1>Current Notices</h1>

            <ul>
              <li className="p-2 bg-slate-50">
                th is is the notice text
                <Button className="rounded-none">Read</Button>
              </li>
            </ul>
          </div>
          <div>
            <h1>old Notices</h1>

            <ul>
              <li className="p-2 bg-slate-50">
                th is is the notice text
                <Button className="rounded-none">Read</Button>
              </li>
              <li className="p-2 bg-slate-50">
                th is is the notice text
                <Button className="rounded-none">Read</Button>
              </li>
              <li className="p-2 bg-slate-50">
                th is is the notice text
                <Button className="rounded-none">Read</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotices;
