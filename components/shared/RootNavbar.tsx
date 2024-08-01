import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import LoginDialog from "./LoginDialog";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

import SheetContext from "./SheetContext";

const RootNavbar = () => {
  return (
    <div className="md:h-24  h-16 shadow-md bg-white overflow-visible z-50 w-full ">
      <div className="md:container px-2 flex items-center justify-between">
        <Link href={"/"}>
          <div className="p-4 z-40 relative  flex items-center justify-center">
            <Image
              src={"/logo.png"}
              className="drop-shadow-md md:w-20 w-12 -translate-y-2"
              height={100}
              width={100}
              alt="main_logo"
            />
          </div>
        </Link>
        <div className="hidden md:block">
          <SocialIcons />
        </div>
        <div className="flex items-center justify-center gap-2">
          <LoginDialog>
            <div className="p-3 rounded-none bg-yellow-500 text-black">
              Branch login
            </div>
          </LoginDialog>

          <SheetContext>
            <div className="text-white-500 text-white py-[14px] px-4 text-sm bg-black">
              menu
            </div>
          </SheetContext>
        </div>
      </div>
    </div>
  );
};

export default RootNavbar;
