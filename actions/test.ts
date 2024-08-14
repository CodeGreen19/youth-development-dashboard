"use server";

import { returnErrorMessage } from "@/data/returnErrorMessage";
import { prisma } from "@/lib/db";

export const testAction = async () => {
  try {
    let data = await prisma.moreInfo.create({
      data: {
        address: "",
        district: "lsdf",
        division: "",
        upazila: "",
        branchId: "asdfll",
      },
    });
    if (data) {
      return { message: "created successfully", data };
    }
    let data2 = await prisma.courseFees.findMany();
    return { success: true, data2 };
  } catch (error) {
    return returnErrorMessage(error);
  }
};
