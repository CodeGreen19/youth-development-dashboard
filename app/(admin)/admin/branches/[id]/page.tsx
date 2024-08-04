"use client";

import { GetSingleBranchAction } from "@/actions/branch";
import AdminBranchAction from "@/components/admin/branches/AdminBranchAction";
import DetailBranch from "@/components/admin/branches/DetailBranch";
import { Button } from "@/components/ui/button";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

let getSingleBranchInfo = async (id: string) => {
  let data = await GetSingleBranchAction(id);
  return data;
};

const DetailBranchInfo = ({ params }: { params: { id: string } }) => {
  const [showAction, setShowAction] = useState<boolean>(false);

  const { data, isPending, isError } = useQuery({
    queryKey: ["branch"],
    queryFn: async () => await getSingleBranchInfo(params.id),
  });
  if (isPending) {
    return <div>loading....</div>;
  }
  if (isError) {
    return <div className="text-red-500">Error occurs</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-2 left-2 flex items-center justify-start gap-3">
        <span>Branch Information</span>
        <div className="flex items-center gap-2">
          <Button
            className={`${
              showAction
                ? "bg-transparent shadow-none text-green-500"
                : "bg-black"
            }`}
            onClick={() => setShowAction(false)}
          >
            Info
          </Button>
          <Button
            className={`${
              !showAction
                ? "bg-transparent shadow-none text-green-500"
                : "bg-black"
            }`}
            onClick={() => setShowAction(true)}
          >
            Actions
          </Button>
        </div>
      </h1>
      {showAction ? (
        <AdminBranchAction
          varified={data.branch?.isVarified!}
          id={data.branch?.id!}
          checked={data.branch?.disabled!}
        />
      ) : (
        <DetailBranch branchInfo={data.branch!} />
      )}
    </div>
  );
};

export default DetailBranchInfo;
