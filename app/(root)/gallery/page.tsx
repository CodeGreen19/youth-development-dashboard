import Image from "next/image";
import React from "react";

const ImageGallery = () => {
  let images = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
  ];
  return (
    <div className="md:min-h-screen  pt-10 md:container">
      <h1 className="underline text-amber-500 text-3xl my-5 text-center">
        Image Gallery
      </h1>
      <div className="flex  p-2 lg:p-0 py-5 mb-16 items-start justify-between flex-wrap">
        {images.map((item) => (
          <div
            key={item}
            className=" w-full md:w-[49.5%] lg:w-[24.5%] my-2 flex-none aspect-[3/2] border border-yellow-200"
          >
            <Image
              src={item}
              key={item}
              height={500}
              width={500}
              className="w-full object-cover"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
