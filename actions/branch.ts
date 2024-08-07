"use server";

import { hashedPassword, jwtDecode } from "@/data/auth";
import { uploadBranchFile } from "@/data/uploads";
import { prisma } from "@/lib/db";
import {
  BranchInfo,
  BranchSchema,
  MoreInfo,
  PersonalInfo,
} from "@/Schema/branchSchema";
import { cookies } from "next/headers";

export const CreateBranchAction = async (formData: FormData) => {
  try {
    const branchInfo = JSON.parse(
      formData.get("branchInfo") as string
    ) as BranchInfo;
    const personalInfo = JSON.parse(
      formData.get("personalInfo") as string
    ) as PersonalInfo;
    const moreInfo = JSON.parse(formData.get("moreInfo") as string) as MoreInfo;

    const documents = {
      ppSizePhoto: formData.get("ppSizePhoto") as File | null,
      tradeLicense: formData.get("tradeLicense") as File | null,
      nationalIDCard: formData.get("nationalIDCard") as File | null,
      signature: formData.get("signature") as File | null,
    };
    let BranchInfo = { branchInfo, personalInfo, moreInfo, documents };
    const result = BranchSchema.safeParse(BranchInfo);
    if (result.error) {
      return { error: result.error.format() };
    }

    // upload image/pdf file
    let ppSizePhoto = (await uploadBranchFile(documents.ppSizePhoto!)).url;
    let tradeLicense = (await uploadBranchFile(documents.tradeLicense!)).url;
    let nationalIDCard = (await uploadBranchFile(documents.nationalIDCard!))
      .url;
    let signature = (await uploadBranchFile(documents.signature!)).url;

    const newDocument = {
      ppSizePhoto,
      tradeLicense,
      nationalIDCard,
      signature,
    };

    let isEmailExist = await prisma.branchInfo.findFirst({
      where: {
        branchEmail: branchInfo.branchEmail,
      },
    });
    if (isEmailExist) {
      return { error: "Email address is already in use" };
    }

    await prisma.branch.create({
      data: {
        personalInfo: {
          create: personalInfo,
        },
        branchInfo: {
          create: branchInfo,
        },
        documents: {
          create: newDocument,
        },
        moreInfo: {
          create: moreInfo,
        },
      },
    });
    return { message: "success" };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { error: "email already exists" };
    }
    return { error: "internal server error" };
  }
};

// .......................................for admin ..................................

// get all branch
export const getAllBranches = async () => {
  try {
    const branches = await prisma.branch.findMany({
      include: {
        personalInfo: true,
        branchInfo: true,
        documents: true,
        moreInfo: true,
      },
    });
    return { branches };
  } catch (error) {
    return { error: "internal server error" };
  }
};

// get single branch
export const GetSingleBranchAction = async (id: string) => {
  try {
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

// update varifing
export const updateVarifyAction = async (id: string) => {
  try {
    let branch = await prisma.branch.findUnique({ where: { id } });
    if (!branch) {
      return { error: "branch not found" };
    }
    await prisma.branch.update({
      where: { id },
      data: {
        isVarified: true,
      },
    });
    return { message: "branch updated successfully" };
  } catch (error) {
    return { error: "internal server error" };
  }
};

// disable button
export const disabledAction = async (id: string) => {
  try {
    let branch = await prisma.branch.findUnique({ where: { id } });
    if (!branch) {
      return { error: "branch not found" };
    }
    let decode = jwtDecode(cookies().get("branch_token")?.value!);
    if (branch.id === decode.id) {
      return { error: "you can't block himself" };
    }
    await prisma.branch.update({
      where: { id },
      data: {
        disabled: branch.disabled ? false : true,
      },
    });
    return { message: "permission updated" };
  } catch (error) {
    return { error: "internal server error" };
  }
};

// create branchpass
export const createBranchPassAction = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  try {
    let branch = await prisma.branch.findUnique({ where: { id } });
    if (!branch) {
      return { error: "branch not found" };
    }
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
