"use server";

import {
  comparePassword,
  genToken,
  hashedPassword,
  jwtDecode,
  setCookie,
} from "@/data/auth";
import { addMinutesToDate, generateOTP } from "@/data/helper";
import sendEmail from "@/data/sendmail";
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

// forgot password action
export const forgotPasswordAction = async (email: string) => {
  try {
    let isExist = await prisma.branchInfo.findFirst({
      where: { branchEmail: email },
    });
    if (!isExist) {
      return { error: "email does't exist !" };
    }

    let otp = generateOTP();
    await prisma.branch.update({
      where: { id: isExist.branchId },
      data: { otp, otpSentDate: new Date() },
    });
    let isMailSent = await sendEmail(otp, email);

    if (isMailSent?.success) {
      return { message: "we have sent a OTP to your email" };
    } else {
      return { error: "some error occurs" };
    }
  } catch (error) {
    return { error: "internal server error" };
  }
};
// forgot password action
export const otpVarifyAction = async ({
  email,
  otp,
}: {
  email: string;
  otp: number;
}) => {
  try {
    let isExist = await prisma.branchInfo.findFirst({
      where: { branchEmail: email },
    });
    if (!isExist) {
      return { error: "email does't exist !" };
    }
    let getInfo = await prisma.branch.findUnique({
      where: { id: isExist.branchId },
      select: { otp: true, otpSentDate: true },
    });

    if (otp.toString().length !== 5) {
      return { error: "OTP must be 5 char" };
    }
    if (otp !== getInfo?.otp) {
      return { error: "OTP does'nt match" };
    }
    if (addMinutesToDate(5) < getInfo.otpSentDate!) {
      return { error: "your otp is expaired " };
    }

    await prisma.branch.update({
      where: { id: isExist.branchId },
      data: { otp: null, otpSentDate: null },
    });
    return { message: "otp is varified", id: isExist.branchId };
  } catch (error) {
    return { error: "internal server error" };
  }
};
// forgot password action
export const updatePasswordForUser = async ({
  id,
  newPass,
}: {
  id: string;
  newPass: string;
}) => {
  try {
    if (newPass.length < 6) {
      return { error: "password must be at least 6 char" };
    }

    let data = await prisma.branch.findUnique({ where: { id } });
    if (!data) {
      return { error: "some error occurs" };
    }
    let encryptPass = hashedPassword(newPass);
    await prisma.branch.update({
      where: { id },
      data: { password: encryptPass },
    });
    return { message: "new password is created" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
