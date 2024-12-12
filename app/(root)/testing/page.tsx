import { prisma } from "@/lib/db";
import React from "react";

const TestingPage = async () => {
  const data = await prisma.salary.findMany({
    orderBy: { createdAt: "desc" },
    take: 1,
  });
  if (data.length === 0) {
    return <div>loading...</div>;
  }
  return <div>{data[0].status}</div>;
};

export default TestingPage;
