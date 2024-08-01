"use client";
import React, { ReactNode, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { SideBarInfoArr } from "@/components/data/index";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BranchNav from "./BranchNav";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <main className=" w-full">
      <BranchNav />
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
              {open ? <FaAnglesLeft /> : <FaAnglesRight />}
            </span>
          </div>
          <Accordion type="single" collapsible>
            {SideBarInfoArr.map((item, index) => (
              <AccordionItem
                key={index}
                className="border-b-2 border-b-slate-300"
                value={`value-${index}`}
              >
                {open ? (
                  <AccordionTrigger className="">
                    <h1
                      className={`flex items-center justify-start gap-2 ${
                        item.items.filter((d) => d.link === pathname).length >
                          0 && "text-amber-500"
                      } `}
                    >
                      <span>{item.icon}</span>
                      <span className={`${open ? "" : "hidden"}} `}>
                        {item.title}
                      </span>
                    </h1>
                  </AccordionTrigger>
                ) : (
                  <h1
                    className={`py-4 ${
                      item.items.filter((d) => d.link === pathname).length >
                        0 && "text-amber-500"
                    }`}
                    onClick={() => setOpen(!open)}
                  >
                    {item.icon}
                  </h1>
                )}

                {open && (
                  <AccordionContent>
                    <ul>
                      {item.items.map((info, i) => (
                        <Link key={i} href={info.link}>
                          <li
                            className={`py-2  text-[16px]  flex items-center justify-start gap-1 ${
                              info.link === pathname && "text-amber-500"
                            }`}
                          >
                            {" "}
                            <FaAngleRight className="text-[10px]  ml-4" />
                            {info.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="bg-slate-50 max-w-screen-2xl p-1 relative md:p-0 w-full ">
          {children}
        </section>
      </div>
    </main>
  );
};

export default DashboardWrapper;
