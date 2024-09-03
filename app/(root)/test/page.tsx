"use client";
import { Button } from "@/components/ui/button";
import { uploadToCloudinaryTest } from "@/data/cloudinary_file_upload";
import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, useState } from "react";

const TestPage = () => {
  const [url, setUrl] = useState<string>("");
  const { isPending, data, mutate } = useMutation({
    mutationFn: uploadToCloudinaryTest,
  });

  const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setUrl(e.target!.result as string);
        };

        reader.readAsDataURL(file);
      }
    }
  };
  const handleClick = () => {
    if (url !== "") {
      let formData = new FormData();
      formData.append("base", url);
      mutate({ formData });
    }
  };

  return (
    <div className="h-screen gap-3 flex-col w-full flex items-center justify-center">
      <input type="file" onChange={hanldeChange} />
      <Button disabled={isPending} onClick={handleClick}>
        {" "}
        Click to upload
      </Button>
      {data && <div>{data.secure_url?.toString()}</div>}
    </div>
  );
};

export default TestPage;
