"use client";
import { customToast } from "@/components/shared/ToastContainer";
import { Button } from "@/components/ui/button";
import { uploadToCloudinaryTest } from "@/data/cloudinary_file_upload";
import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, useState } from "react";

const TestPage = () => {
  const [url, setUrl] = useState<File | null>(null);
  const { isPending, data, mutate } = useMutation({
    mutationFn: uploadToCloudinaryTest,
  });

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        // 1MB size check

        customToast("error", "image size must be below 5 MB");
        return;
      }
      if (file) {
        setUrl(file);
      }
    }
  };

  // const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const file = e.target.files[0];
  //     if (file.size > 5 * 1024 * 1024) {
  //       // 1MB size check

  //       customToast("error", "image size must be below 5 MB");
  //       return;
  //     }
  //     if (file) {
  //       const reader = new FileReader();

  //       reader.onload = (e) => {
  //         setUrl(e.target!.result as string);
  //       };

  //       reader.readAsDataURL(file);
  //     }
  //   }
  // };
  // console.log(url);

  const handleClick = () => {
    if (url) {
      let formData = new FormData();
      formData.append("file", url);
      mutate({ formData });
    }
  };

  return (
    <div className="h-screen gap-3 flex-col w-full flex items-center justify-center">
      <input type="file" onChange={hanldeChange} />
      <Button disabled={isPending} onClick={handleClick}>
        Click to upload
      </Button>
      {data && <div>{data.message}</div>}
    </div>
  );
};

export default TestPage;
