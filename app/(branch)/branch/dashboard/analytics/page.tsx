"use client";

import React from "react";

const Analytics = () => {
  return (
    <div className="bg-white rounded-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 ">
        <div>total students</div>
        <div>unpaid students</div>
        <div>paid students</div>
        <div>status</div>
      </div>
    </div>
  );
};

export default Analytics;
