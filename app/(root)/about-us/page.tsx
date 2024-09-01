"use client";

import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className=" container pr-0 pl-0 md:pr-8 md:pl-8">
      <div className="bg-gray-100">
        <div className="bg-indigo-900 text-white py-10 md:py-20">
          <div className="px-3 md:px-10 mx-auto text-center">
            <h1 className="text-4xl font-bold">About us</h1>
            <p className="text-lg mt-4 font-bangla">
              আমরা হচ্ছি{" "}
              <span className="font-bold text-sm md:text-lg text-[1.3rem] font-salsa text-amber-500">
                The Earn Way Youth Development Resource
              </span>
              , একটি প্রতিষ্ঠান যা দেশের তরুণ প্রজন্মকে কম্পিউটার ও
              তথ্যপ্রযুক্তির জ্ঞান দিয়ে স্বাবলম্বী করে তোলার লক্ষ্যে কাজ করে।
              আমরা বিভিন্ন ধরনের কম্পিউটার কোর্স পরিচালনা করি যা শিক্ষার্থীদেরকে
              বাস্তব জীবনের চ্যালেঞ্জ মোকাবেলা করার জন্য প্রস্তুত করে। আমাদের
              লক্ষ্য হল প্রত্যেক শিক্ষার্থীকে তাদের ক্যারিয়ার গড়ার জন্য
              প্রয়োজনীয় দক্ষতা দিয়ে সজ্জিত করা। আমরা বিশ্বাস করি, প্রযুক্তি
              জ্ঞান আজকের যুগে সফলতার মূল চাবিকাঠি।
            </p>
          </div>
        </div>

        <div className="container mx-auto px-2 md:px-6 py-12 ">
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-16 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-indigo-700 mb-4">
              Behind the success
            </h2>
            <p className="text-gray-700 text-sm md:text-lg mb-8 font-bangla">
              সর্বোপরি, সাফল্যের পিছনে সবচেয়ে গুরুত্বপূর্ণ উপাদান হল নিজের
              প্রতি বিশ্বাস। সফল ব্যক্তিরা নিজেদের ক্ষমতা এবং সম্ভাবনায় বিশ্বাস
              করে। তারা জানেন যে তারা যা চান তা অর্জন করতে সক্ষম এবং তাদের
              স্বপ্ন পূরণ করার জন্য কাজ করে।
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center mt-8">
              <Image
                src="/nazmul.png"
                height={300}
                width={300}
                alt="Chris Spring"
                className="rounded-full bg-amber-300  h-32 w-32 object-cover mb-4 md:mb-0 md:mr-8"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold">
                  Hm Nazmul Hossain
                </h3>
                <p className="text-indigo-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
