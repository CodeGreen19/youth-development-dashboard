"use client";

import React, { ReactNode, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

import ShowVarifiyModal from "./ShowVarifiyModal";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { createBranchPassAction, disabledAction } from "@/actions/branch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customToast } from "@/components/shared/ToastContainer";
import { IoMdCopy } from "react-icons/io";
const AdminBranchAction = ({
  varified,
  id,
  checked,
}: {
  varified: boolean;
  id: string;
  checked: boolean;
}) => {
  const queryClient = useQueryClient();
  const [newPass, setNewPass] = useState<string>("");
  const { mutate, isPending: loading } = useMutation({
    mutationFn: disabledAction,
    onSuccess: ({ error, message }) => {
      if (error) {
        return customToast("error", error);
      }
      if (message) {
        customToast("success", message);
      }
      queryClient.invalidateQueries({ queryKey: ["branch"] });
    },
  });

  const { mutate: passMutate, isPending: createPassLoading } = useMutation({
    mutationFn: createBranchPassAction,
    onSuccess: ({ error, message }) => {
      if (error) {
        return customToast("error", error);
      }
      if (message) {
        customToast("success", message);
      }
      queryClient.invalidateQueries({ queryKey: ["branch"] });
    },
  });

  return (
    <div className="container  mx-auto p-4">
      <div className="bg-white p-4 ">
        {varified ? (
          <div className="my-5">
            <span className="font-bold">Status</span> :{" "}
            <span className="text-green-600 text-lg ml-2">varified</span>
          </div>
        ) : (
          <p className="border border-red-300 inline-block p-4 py-2 my-6 relative bg-red-300 rounded-sm">
            <span className="absolute -top-4 left-2 bg-red-600 p-1 text-sm  rounded-md text-white">
              not varified
            </span>
            See the info to varify the branch , if you want to varify click{" "}
            <ShowVarifiyModal id={id}>
              <div className="bg-green-500 p-4 py-2 shadow-lg rounded-sm hover:bg-green-600">
                i have varified
              </div>
            </ShowVarifiyModal>
          </p>
        )}
        {varified && (
          <div className="mb-3 flex items-center justify-start gap-4">
            <span className="font-bold ">permission :</span>
            <Switch
              disabled={loading}
              checked={checked}
              onCheckedChange={() => mutate(id)}
            />
          </div>
        )}
        {varified && (
          <form
            className="border border-[red] bg-green-200 max-w-sm rounded-sm p-4"
            onSubmit={(e) => {
              e.preventDefault();
              passMutate({ id, password: newPass });
            }}
          >
            <h1 className="mb-2">Change Branch Password</h1>
            <Input
              placeholder="enter new password..."
              type="text"
              className="bg-sky-100 "
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <div className="flex items-center my-3 justify-end">
              <Button type="submit" disabled={createPassLoading}>
                {createPassLoading ? "Update..." : "Update"}
              </Button>
            </div>
          </form>
        )}
        {varified && (
          <div
            className={`flex items-center justify-start gap-3 rounded my-2 
            }`}
          >
            <h1>New Password :</h1>
            <span className="p-2 bg-slate-100 rounded">{newPass}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    navigator.clipboard.writeText(newPass);
                  }}
                  className="flex items-center p-2 justify-center gap-1 shadow-md bg-green-500 rounded-sm"
                >
                  <span>copy</span> <IoMdCopy className="ml-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBranchAction;
