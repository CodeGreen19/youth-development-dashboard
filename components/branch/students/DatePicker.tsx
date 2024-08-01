"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

type DateValue = {
  startDate: Date | null;
  endDate: Date | null;
};

const SingleDatePicker: React.FC = () => {
  const [value, setValue] = useState<Date | null | string>("Date of Birth");

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    if (newValue.startDate) {
      setValue(new Date(newValue.startDate));
    }
  };

  return (
    <div className="w-full py-1 rounded bg-slate-50">
      <Datepicker
        primaryColor="orange"
        placeholder="Date of Birth"
        value={{ startDate: value, endDate: value }}
        onChange={handleValueChange}
        asSingle={true}
        useRange={false}
      />
    </div>
  );
};

export default SingleDatePicker;
