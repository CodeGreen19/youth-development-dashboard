"use server";

import { deleteStudentFile, uploadStudentFile } from "@/data/uploads";
import { prisma } from "@/lib/db";

export const newNoticeAction = async ({ text }: { text: string }) => {
  try {
    await prisma.notice.create({
      data: {
        text,
      },
    });
    return { message: "success" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const allNoticeAction = async () => {
  try {
    let allNotice = await prisma.notice.findMany();

    return { allNotice };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const deleteNoticeAction = async (id: string) => {
  try {
    await prisma.notice.delete({ where: { id } });
    return { message: "notice has been deleted" };
  } catch (error) {
    return { error: "internal server error" };
  }
};

export const addGalleryImgAction = async (formData: FormData) => {
  try {
    let text = JSON.parse(formData.get("imgText") as string);
    let imgFile = formData.get("imgFile") as File;
    if (text === "") {
      return { error: "text and img file both are required" };
    }
    let imgUrl = await uploadStudentFile({ file: imgFile, type: "gallery" });
    // todo: upload

    await prisma.gallery.create({
      data: {
        text,
        imgUrl: imgUrl.galleryImgUrl!,
      },
    });
    return { message: "success" };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const allGalleryImgAction = async () => {
  try {
    let allImg = await prisma.gallery.findMany();

    return { allImg };
  } catch (error) {
    return { error: "internal server error" };
  }
};
export const anyImgDeleteAction = async (id: string) => {
  try {
    let data = await prisma.gallery.delete({ where: { id } });
    let isDeleted = await deleteStudentFile(data.imgUrl);
    if (!isDeleted.success) {
      return { error: "something went wrong!" };
    }
    return { message: "deleted" };
  } catch (error) {
    return { error: "internal server error" };
  }
};