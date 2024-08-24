"use server";

import { prisma } from "@/lib/db";
import { EditResultType, EditResultTypeForBackend } from "@/types";

export const admin_AllStudentsOfBranch = async ({ id }: { id: string }) => {
  try {
    let allStudents = await prisma.student.findMany({
      where: { branchId: id },
      select: { courseDuration: true, courseTrade: true },
    });

    return { allStudents };
  } catch (error) {
    return { error: "internal server error" };
  }
};

export const admin_AllFilteredStudentsOfBranch = async ({
  id,
  trade,
  duration,
}: {
  id: string;
  trade: string;
  duration: string;
}) => {
  try {
    let filteredStudent = await prisma.student.findMany({
      where: { branchId: id, courseDuration: duration, courseTrade: trade },
    });

    return { filteredStudent };
  } catch (error) {
    return { error: "internal server error" };
  }
};

export const admin_PublishResult = async (data: EditResultType[]) => {
  try {
    data.forEach(async (item) => {
      await prisma.student.updateMany({
        where: { id: item.id },
        data: { genResult: item.result },
      });
    });
    return { message: "result is published" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
