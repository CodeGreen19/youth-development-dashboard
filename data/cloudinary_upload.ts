"use server";

import { ImageUrlType } from "@/types";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadtoCloud = async ({
  file,
  folder,
}: {
  file: File;
  folder: "student" | "branch" | "gallery";
}): Promise<ImageUrlType> => {
  // Convert the file to a buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // return
  let data = new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto", folder: `/${folder}` },
      (error, result) => {
        if (error) {
          reject({
            secure_url: "",
            public_id: "",
          });
        } else {
          resolve({
            public_id: result!.public_id,
            secure_url: result!.secure_url.endsWith(".pdf")
              ? result!.secure_url.replace(".pdf", ".jpg")
              : result!.secure_url,
          });
        }
      }
    );
    stream.end(buffer);
  });
  let info = (await data) as ImageUrlType;
  return info;
};

// Delete image from Cloudinary
export const deleteFromCloud = async (publicId: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error || result.result !== "ok") {
        reject(new Error("Failed to delete image."));
      } else {
        resolve(result);
      }
    });
  });
};

/// for testing purpose

export const uploadtoCloudTest = async ({
  formData,
  folder,
  fileName,
}: {
  formData: FormData;
  fileName: string;
  folder: "student" | "branch" | "gallery";
}): Promise<ImageUrlType> => {
  // Convert the file to a buffer
  let file = formData.get(fileName) as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // return
  let data = new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto", folder: `/${folder}` },
      (error, result) => {
        if (error) {
          reject({
            secure_url: "",
            public_id: "",
          });
        } else {
          resolve({
            public_id: result!.public_id,
            secure_url: result!.secure_url.endsWith(".pdf")
              ? result!.secure_url.replace(".pdf", ".jpg")
              : result!.secure_url,
          });
        }
      }
    );
    stream.end(buffer);
  });
  let info = (await data) as ImageUrlType;
  return info;
};
