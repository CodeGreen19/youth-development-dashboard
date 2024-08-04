"use server";

import { comparePassword, genToken, jwtDecode, setCookie } from "@/data/auth";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
// create branchpass
export const branchLoginAction = async ({
  password,
  email,
}: {
  password: string;
  email: string;
}) => {
  try {
    if (password.length < 6) {
      return { error: "password must be at least 6 char.." };
    }
    let branchInfo = await prisma.branchInfo.findFirst({
      where: { branchEmail: email },
    });

    if (!branchInfo) {
      return { error: "invalid credentials" };
    }
    let branch = await prisma.branch.findUnique({
      where: { id: branchInfo.branchId },
    });
    if (branch?.password === null) {
      return { error: "invalid credentials" };
    }
    let isComparePassword = comparePassword(password, branch?.password!);
    if (!isComparePassword) {
      return { error: "invalid credentials" };
    }
    let token = genToken(branch?.id!);
    setCookie(token);
    return { message: "login successfully" };
  } catch (error) {
    return { error: "internal server error" };
  }
};

// get data form
export const getSingleBranchUsingToken = async ({
  token,
}: {
  token: string;
}) => {
  try {
    let decode = jwtDecode(token);
    return { message: "login successfully" };
  } catch (error) {
    return { error: "internal server error" };
  }
};

export const getBranchRoleById = async (id: string) => {
  let Role = await prisma.branch.findUnique({
    where: { id },
    select: { role: true },
  });
  return Role;
};

export const getUserAction = async () => {
  try {
    let token = cookies().get("branch_token")?.value;
    if (!token) {
      return { message: "token does'nt exist" };
    }
    let { id } = jwtDecode(token);

    let branchInfo = await prisma.branch.findUnique({
      where: { id },
      select: {
        id: true,
        role: true,
        disabled: true,
      },
    });
    return { branchInfo };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const isAuthenticated = () => {
  let token = cookies().get("branch_token")?.value;
  if (token) {
    return true;
  } else {
    return false;
  }
};
export const branchLogoutAction = () => {
  cookies().delete("branch_token");
};
