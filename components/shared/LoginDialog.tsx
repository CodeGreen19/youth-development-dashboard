"use client";

import React, { ReactNode, RefObject, useRef, useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { ForgotPassword } from "./ForgotPassword";
import { OtpPage } from "./OtpPage";
import { ResetPassword } from "./ResetPassword";

const LoginDialog = ({ children }: { children: ReactNode }) => {
  const dialogRef: RefObject<HTMLButtonElement> = useRef(null);
  const [selectedPage, setSelelectedPage] = useState<
    "login" | "forgot" | "otp" | "reset"
  >("login");

  const clickToClose = () => {
    if (dialogRef.current) {
      dialogRef.current.click();
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger ref={dialogRef}>{children}</DialogTrigger>
        <DialogContent className="bg-transparent  p-0 max-w-sm border-none shadow-none">
          {selectedPage === "login" && (
            <LoginForm
              close={clickToClose}
              setSelelectedPage={setSelelectedPage}
            />
          )}
          {selectedPage === "forgot" && (
            <ForgotPassword />

            // <OtpPage />
            // <ResetPassword />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginDialog;