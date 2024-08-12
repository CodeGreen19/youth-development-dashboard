"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteSingleStudentById } from "@/actions/student";
import { customToast } from "@/components/shared/ToastContainer";

const DeleteStudent = ({
  children,
  id,
  imgUrl,
}: {
  children: React.ReactNode;
  id: string;
  imgUrl: string;
}) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationFn: DeleteSingleStudentById,
    onSuccess: ({ error, message }) => {
      if (error) {
        return customToast("error", error);
      }
      if (message) customToast("success", message);
      queryClient.invalidateQueries({ queryKey: ["allStudentsOfBranch"] });
    },
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="rounded-sm">
          <DialogHeader>
            <DialogTitle className=" text-center">
              Are you sure to delete this student?
            </DialogTitle>
            <DialogDescription className="flex items-center justify-center">
              <Button
                disabled={isPending}
                className="bg-red-500  my-6 hover:bg-red-600"
                onClick={() => mutate({ id, imgUrl })}
              >
                {data?.message ? "Deleted" : "Delete"}
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteStudent;
