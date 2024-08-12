"use server";

import { prisma } from "@/lib/db";

const ROLL_PREFIX_LENGTH = 10; // Length of the roll number, e.g., "2423000009" (10 characters in this case)
const REGISTRATION_LENGTH = 6; // Length of the registration number, e.g., "142009" (6 characters in this case)

export async function generateRollAndRegistrationNumbers() {
  // Assuming this is the result you got from the database query

  let lastStudent = await prisma.student.findFirst({
    orderBy: { genRoll: "desc" },
    select: {
      genRoll: true,
      genReg: true,
    },
  });

  if (lastStudent) {
    const nextRollNumber = String(parseInt(lastStudent.genRoll!) + 4).padStart(
      ROLL_PREFIX_LENGTH,
      "0"
    );

    const nextRegistrationNumber = String(
      parseInt(lastStudent.genReg!) + 1
    ).padStart(REGISTRATION_LENGTH, "0");

    return { nextRollNumber, nextRegistrationNumber };
  }

  // Handle the case where there is no existing student
  // For example, return initial numbers
  return {
    nextRollNumber: "241501",
    nextRegistrationNumber: "1283350192",
  };
}
