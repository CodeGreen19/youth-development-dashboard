"use server";

import { hashedPassword, jwtDecode } from "@/data/auth";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export const GetBranchWithoutIdAction = async () => {
  try {
    let token = cookies().get("branch_token")?.value;
    if (!token) {
      return { message: "token does'nt exist" };
    }
    let { id } = jwtDecode(token);
    const branch = await prisma.branch.findUnique({
      where: { id },
      include: {
        personalInfo: true,
        branchInfo: true,
        documents: true,
        moreInfo: true,
      },
    });
    if (!branch) {
      return { error: "no branch found" };
    }
    return { branch };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const ChangeBranchPasswordForOwner = async (password: string) => {
  try {
    let token = cookies().get("branch_token")?.value;
    if (!token) {
      return { message: "token does'nt exist" };
    }
    let { id } = jwtDecode(token);

    if (password.length < 6) {
      return { error: "password must be at least 6 char" };
    }
    let encryptPass = hashedPassword(password);
    await prisma.branch.update({
      where: { id },
      data: {
        password: encryptPass,
      },
    });
    return { message: "new branch password created" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const getAllStudentsOfBranch = async () => {
  try {
    let token = cookies().get("branch_token")?.value;
    if (!token) {
      return { message: "token does'nt exist" };
    }
    let { id } = jwtDecode(token);
    let allStudents = await prisma.student.findMany({
      where: { branchId: id },
      include: { docs: true },
    });
    let feesData = await prisma.courseFees.findMany({
      select: {
        name: true,
        oneYear: true,
        fourYears: true,
        sixMonths: true,
        threeMonths: true,
        threeYears: true,
        twoYears: true,
      },
    });

    return { allStudents, feesData };
  } catch (error) {
    return { error: "internal server error" };
  }
};
