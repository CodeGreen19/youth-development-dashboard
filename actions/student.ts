"use server";

import { jwtDecode } from "@/data/auth";
import { deleteFromCloud, uploadtoCloud } from "@/data/cloudinary_upload";
import { generateRollAndRegistrationNumbers } from "@/data/RollAndReg";
import { deleteStudentFile, uploadStudentFile } from "@/data/uploads";
import { prisma } from "@/lib/db";
import { StudentSchema, StudentType } from "@/Schema/studentSchema";
import { cookies } from "next/headers";

export const createStudentAction = async (formData: FormData) => {
  try {
    const studentInfo = JSON.parse(
      formData.get("studentInfo") as string
    ) as StudentType;
    const profileUrl = formData.get("profileUrl") as File | null | string;

    let result = StudentSchema.safeParse(studentInfo);
    if (result.error) {
      return { error: result.error.format() };
    }
    if (profileUrl === null || typeof profileUrl === "string") {
      return { error: "Passport Side Photo is required" };
    }
    let token = cookies().get("branch_token")?.value;
    if (!token) {
      return { error: "token does'nt exist" };
    }
    let branchId = jwtDecode(token).id;
    let {
      bloodGroup,
      courseDuration,
      courseRange,
      courseTrade,
      dateOfBirth,
      fatherName,
      gender,
      mediam,
      mobile,
      motherName,
      name,
      nationality,
      passedBoard,
      passedResult,
      passedRoll,
      passedType,
      passedYear,
      religion,
      email,
    } = studentInfo;

    let uploadedImg = await uploadtoCloud({
      file: profileUrl,
      folder: "student",
    });

    let { nextRollNumber, nextRegistrationNumber } =
      await generateRollAndRegistrationNumbers();

    await prisma.student.create({
      data: {
        branchId,
        bloodGroup,
        courseDuration,
        courseRange,
        courseTrade,
        dateOfBirth,
        fatherName,
        gender,
        mediam,
        mobile,
        motherName,
        name,
        nationality,
        passedBoard,
        passedResult,
        passedRoll,
        passedType,
        passedYear,
        religion,
        email,
        genReg: nextRegistrationNumber,
        genRoll: nextRollNumber,
        profileDoc: {
          create: uploadedImg,
        },
      },
    });
    return { message: "new student has created" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const updateStudentAction = async ({
  formData,
  id,
}: {
  formData: FormData;
  id: string;
}) => {
  try {
    const studentInfo = JSON.parse(
      formData.get("studentInfo") as string
    ) as StudentType;

    let result = StudentSchema.safeParse(studentInfo);
    if (result.error) {
      return { error: result.error.format() };
    }

    let {
      bloodGroup,
      courseDuration,
      courseRange,
      courseTrade,
      dateOfBirth,
      fatherName,
      gender,
      mediam,
      mobile,
      motherName,
      name,
      nationality,
      passedBoard,
      passedResult,
      passedRoll,
      passedType,
      passedYear,
      religion,
      email,
    } = studentInfo;

    await prisma.student.update({
      where: { id },
      data: {
        bloodGroup,
        courseDuration,
        courseRange,
        courseTrade,
        dateOfBirth,
        fatherName,
        gender,
        mediam,
        mobile,
        motherName,
        name,
        nationality,
        passedBoard,
        passedResult,
        passedRoll,
        passedType,
        passedYear,
        religion,
        email,
      },
    });
    return { message: "student updated successfully" };
  } catch (error) {
    return { error: "internal server error" };
  }
};

export const GetSingleStudentById = async (id: string) => {
  try {
    let student = await prisma.student.findUnique({
      where: { id },
      include: { profileDoc: true },
    });
    if (!student) {
      return { error: "student not found" };
    }
    return { student };
  } catch (error) {
    return { error: "internal server error" };
  }
};

export const DeleteSingleStudentById = async ({
  id,
  public_id,
}: {
  id: string;
  public_id: string;
}) => {
  try {
    await deleteFromCloud(public_id);
    await prisma.profileImg.delete({
      where: { studentId: id },
    });
    await prisma.student.delete({
      where: { id },
    });

    return { message: "student has been deleted" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
