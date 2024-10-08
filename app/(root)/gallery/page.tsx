"use client";
import { allGalleryImgAction } from "@/actions/Admin";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => await allGalleryImgAction(),
  });

  return (
    <div className="md:min-h-screen  pt-10 md:container">
      <h1 className="underline text-2xl text-amber-500 md:text-3xl md:my-5 text-center">
        Image Gallery
      </h1>
      <div className="flex p-4 lg:p-0 py-5 mb-16 items-start justify-start gap-4 flex-wrap">
        {isPending ? (
          <div className="text-center">loading...</div>
        ) : data?.allImg?.length === 0 ? (
          <div className="w-full text-center"> sorry, no images to show !</div>
        ) : (
          data?.allImg?.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              key={item.id}
              className="relative overflow-hidden shadow-lg  group mainBox w-full md:w-[49.5%] lg:w-[24.5%] my-2 flex-none aspect-[3/2] border border-yellow-200 group"
            >
              <Image
                src={item.secure_url}
                height={500}
                width={500}
                className="w-full rounded object-cover"
                alt="gallery-image"
              />
              <div className="absolute opacity-0 bottom-0 text-center text-white bg-yellow-500 left-0 w-full p-2 bg-transparent translate-y-full  group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                {item.text}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
