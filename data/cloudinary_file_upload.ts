"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinaryTest = async ({
  formData,
}: {
  formData: FormData;
}) => {
  try {
    let file = formData.get("base") as string;
    let data = await cloudinary.uploader.upload(file);

    return { secure_url: data.secure_url };
  } catch (error) {
    console.log("upload error", error);
    return { error: "error occurs" };
  }
};
