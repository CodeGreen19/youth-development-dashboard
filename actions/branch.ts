"use server";

import { uploadBranchFile } from "@/data/uploads";
import { prisma } from "@/lib/db";
import {
  BranchInfo,
  BranchSchema,
  MoreInfo,
  PersonalInfo,
} from "@/Schema/branchSchema";

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
export const DeleteBranch = async (id: string) => {
  try {
    const branches = await prisma.branch.delete({ where: { id } });
    return { branches };
  } catch (error) {
    return { error: "internal server error" };
  }
};
