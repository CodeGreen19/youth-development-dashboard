"use client";
import React, { ReactNode, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNav from "./AdminNav";
import { AdminLinks } from "../data";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminDashboardWrapper = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <main className=" w-full">
      <AdminNav />
      <div className="flex items-start justify-start">
        <div
          className={`md:hidden p-1 bg-white rounded-r-full absolute top-5 text-sm left-0 ${
            open ? "hidden" : ""
          }`}
          onClick={() => setOpen(true)}
        >
          {open ? <FaAnglesLeft /> : <FaAnglesRight />}
        </div>
        <section
          className={`bg-white z-40  md:p-3 border-r-2 overflow-hidden  border-r-gray-300  shadow-sm  fixed  md:sticky top-0 left-0 h-screen transition-all ${
            open ? "w-[280px] p-3" : "w-0 md:w-[40px]"
          }`}
        >
          <div className={`flex items-center justify-end `}>
            <span onClick={() => setOpen(!open)} className="cursor-pointer">
              <RxHamburgerMenu className="font-bold" />
            </span>
          </div>
          <ul className="mt-5">
            {AdminLinks.map((item) => (
              <Link href={item.link}>
                {" "}
                <li className="flex my-3 items-center justify-start gap-3">
                  <span>{item.icon}</span>
                  {open && <span>{item.title}</span>}
                </li>
              </Link>
            ))}
          </ul>
        </section>
        <section className="bg-slate-50 max-w-screen-2xl p-1 relative md:p-0 w-full ">
          {children}
        </section>
      </div>
    </main>
  );
};

export default AdminDashboardWrapper;
