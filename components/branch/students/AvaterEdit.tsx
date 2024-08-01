"use client";

import Image from "next/image";
import React, { useState } from "react";
import Avatar from "react-avatar-edit";

const AvaterEdit = () => {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view: any) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 716800) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  return (
    <div>
      <div className="bg-white inline-block rounded-md overflow-hidden">
        <Avatar
          width={250}
          height={200}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          cropColor="tomato"
          cropRadius={0}
          backgroundColor="gray"
          exportAsSquare
          label="Add a Student Image"
          labelStyle={{ fontSize: "0.9rem", fontWeight: "bold" }}
        />
      </div>
      {preview && (
        <div className="">
          <h1 className="font-bold text-sm my-3">corped image</h1>
          <Image
            src={preview}
            className="border rounded-md border-gray-800 "
            height={250}
            width={250}
            alt="Preview"
          />
        </div>
      )}
    </div>
  );
};

export default AvaterEdit;
