"use server";

import { jwtDecode } from "@/data/auth";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export const getAllPaymentHistory = async () => {
  try {
    let token = cookies().get("branch_token")?.value;
    if (!token) {
      return { message: "token does'nt exist" };
    }
    let { id } = jwtDecode(token);
    let paymentsHistory = await prisma.payment.findMany({
      where: { branchId: id },
    });
    return { paymentsHistory };
  } catch (error) {
    return { error: "internal server error" };
  }
};
