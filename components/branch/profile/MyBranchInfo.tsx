import { ChangeBranchPasswordForOwner } from "@/actions/branchOwner";
import { isImage } from "@/components/data/helpers";
import { customToast } from "@/components/shared/ToastContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetBranchInfoType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

const BranchInfo = ({ info }: { info: GetBranchInfoType }) => {
  let { branchInfo, documents, moreInfo, personalInfo } = info;

  const { mutate, isPending } = useMutation({
    mutationFn: ChangeBranchPasswordForOwner,
    onSuccess: ({ error, message }) => {
      if (error) {
        return customToast("error", error);
      }
      if (message) {
        setPassword("");
        customToast("success", message);
      }
    },
  });
  let [password, setPassword] = useState<string>("");

  const ChangePasswordHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(password);
  };
  return (
    <div className="p-4 bg-white rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Branch&apos;s Information
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-200 bg-gray-50">
            <tbody className="">
              <tr>
                <td className="border px-4 py-2 font-semibold">Branch Name</td>
                <td className="border px-4 py-2">
                  {info.branchInfo?.branchName}
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2 font-semibold">Address</td>
                <td className="border px-4 py-2">{moreInfo?.address}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  No Of Computers
                </td>
                <td className="border px-4 py-2">
                  {branchInfo?.noOfComputers}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Alt Contact Name
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Alt Contact Designation
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Institute Age
                </td>
                <td className="border px-4 py-2">{branchInfo?.instituteAge}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Status</td>
                <td className="border px-4 py-2 text-blue-500">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Director&apos;s Information
          </h2>
          <table className="table-auto w-full border-collapse border bg-gray-50 border-gray-200">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Director</td>
                <td className="border px-4 py-2">{personalInfo?.fullName}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Mobile</td>
                <td className="border px-4 py-2">{branchInfo?.branchMobile}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Email</td>
                <td className="border px-4 py-2">{branchInfo?.branchEmail}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Father&apos;s Name
                </td>
                <td className="border px-4 py-2">
                  {personalInfo?.fathersName}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Mother&apos;s Name
                </td>
                <td className="border px-4 py-2">
                  {personalInfo?.mothersName}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Alt Mobile</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Gender</td>
                <td className="border px-4 py-2">{personalInfo?.gender}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Blood Group</td>
                <td className="border px-4 py-2">{personalInfo?.bloodGroup}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className=" p-3 border border-gray-300 pb-8 bg-amber-500">
          <h2 className="text-xl font-semibold mb-4">Attachment</h2>
          <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between relative space-x-4">
              <span className="font-semibold">Director&apos;s Photo</span>
              <Image
                height={100}
                width={100}
                src={documents?.ppSizePhoto!}
                alt="Director"
                className="w-12 h-12 object-cover"
              />
              <a
                download
                href={documents?.ppSizePhoto}
                className="text-sm absolute -bottom-6 right-0 text-blue-500"
              >
                download
              </a>
            </div>
            <div className="flex relative items-center justify-between space-x-4">
              <span className="font-semibold">National ID</span>
              {isImage(documents?.nationalIDCard!) ? (
                <Image
                  height={100}
                  width={100}
                  src={documents?.nationalIDCard!}
                  alt="national_id"
                  className="w-12 h-12 object-cover"
                />
              ) : (
                <Image
                  height={100}
                  width={100}
                  src="/pdf.jpg"
                  alt="PDF Document"
                  className="w-12 h-12 object-cover"
                />
              )}
              <a
                download
                href={documents?.nationalIDCard}
                className="text-sm absolute -bottom-6 right-0 text-blue-500"
              >
                download
              </a>
            </div>
            <div className="flex relative items-center justify-between space-x-4">
              <span className="font-semibold">Trade License</span>
              {isImage(documents?.tradeLicense!) ? (
                <Image
                  height={100}
                  width={100}
                  src={documents?.tradeLicense!}
                  alt="trade_licence"
                  className="w-12 h-12 object-cover"
                />
              ) : (
                <Image
                  height={100}
                  width={100}
                  src="/pdf.jpg"
                  alt="PDF Document"
                  className="w-12 h-12 object-cover"
                />
              )}
              <a
                download
                href={documents?.tradeLicense}
                className="text-sm absolute -bottom-6 right-0 text-blue-500"
              >
                download
              </a>
            </div>
            <div className="flex relative items-center justify-between space-x-4">
              <span className="font-semibold">Signature</span>
              <Image
                height={100}
                width={100}
                src={documents?.signature!}
                alt="Signature"
                className="w-12 h-12 object-cover"
              />
              <a
                download
                href={documents?.signature}
                className="text-sm absolute -bottom-6 right-0 text-blue-500"
              >
                download
              </a>
            </div>
          </div>
        </div>
        <form
          className="p-4 border border-gray-300 bg-gray-50 self-start"
          onSubmit={ChangePasswordHandler}
        >
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <Input
            type="text"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 py-6 border border-gray-300 rounded w-full"
          />
          <div className="flex items-center justify-end">
            <Button
              disabled={isPending}
              type="submit"
              className="mt-2 p-4 text-white rounded"
            >
              {isPending ? "Update.." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BranchInfo;
