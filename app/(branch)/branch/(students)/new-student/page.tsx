import AcadamicInfo from "@/components/branch/students/AcadamicInfo";
import CourseInfo from "@/components/branch/students/CourseInfo";
import PersonalInfo from "@/components/branch/students/PersonalInfo";
import { Button } from "@/components/ui/button";
import React from "react";

const AddnewPage = () => {
  return (
    <div>
      <PersonalInfo />
      <CourseInfo />
      <AcadamicInfo />
      <div className="flex items-center justify-end my-5">
        <Button className=" p-6 md:p-8 px-8 md:px-10 text-lg rounded-sm ">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddnewPage;
