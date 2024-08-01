import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const BranchInfo: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Branch's Information</h2>
          <table className="table-auto w-full border-collapse border border-gray-200 bg-gray-50">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Branch Name</td>
                <td className="border px-4 py-2">Crown Computer</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Branch Code</td>
                <td className="border px-4 py-2">145</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Address</td>
                <td className="border px-4 py-2">
                  Damurhuda, Chuadanga, Upozella Road - 7220
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  No Of Computers
                </td>
                <td className="border px-4 py-2">0</td>
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
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Status</td>
                <td className="border px-4 py-2 text-blue-500">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Director's Information</h2>
          <table className="table-auto w-full border-collapse border bg-gray-50 border-gray-200">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">Director</td>
                <td className="border px-4 py-2">Md. Akhtaruzzaman</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Mobile</td>
                <td className="border px-4 py-2">01936118444</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Email</td>
                <td className="border px-4 py-2">hmnazmul401@gmail.com</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Father's Name
                </td>
                <td className="border px-4 py-2">Md. Abdur Rob</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Mother's Name
                </td>
                <td className="border px-4 py-2">Mst. Sokina Khatun</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Alt Mobile</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Gender</td>
                <td className="border px-4 py-2">Male</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">Blood Group</td>
                <td className="border px-4 py-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-50 p-3 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Attachment</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between space-x-4">
              <span className="font-semibold">Director's Photo</span>
              <img
                src="https://via.placeholder.com/50"
                alt="Director"
                className="w-12 h-12"
              />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <span className="font-semibold">National ID</span>
              <img
                src="https://via.placeholder.com/50"
                alt="National ID"
                className="w-12 h-12"
              />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <span className="font-semibold">Trade License</span>
              <img
                src="https://via.placeholder.com/50"
                alt="Trade License"
                className="w-12 h-12"
              />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <span className="font-semibold">Signature</span>
              <img
                src="https://via.placeholder.com/50"
                alt="Signature"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-300 bg-gray-50 self-start">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <Input
            type="password"
            placeholder="New Password"
            className="p-4 py-6 border border-gray-300 rounded w-full"
          />
          <Button className="mt-2 p-4 text-white rounded">Update</Button>
        </div>
      </div>
    </div>
  );
};

export default BranchInfo;
