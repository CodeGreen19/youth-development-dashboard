// pages/index.js
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function BranchApply() {
  return (
    <div className="container z-30 py-10 ">
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Branch Information</h2>
            <div className="space-y-4">
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Branch Name"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Branch Mobile"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="email"
                placeholder="Branch Email"
              />
              <select className="w-full p-3 border rounded-md">
                <option>Institute Age (3+ years or 3 Months)</option>
                <option>3+ years</option>
                <option>3 Months</option>
              </select>
              <Input
                className="w-full p-3 border rounded-md"
                type="number"
                placeholder="No of Computers"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Proprietor's Information
            </h2>
            <div className="space-y-4">
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Proprietor's Name"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Father's Name"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Mother's Name"
              />
              <select className="w-full p-3 border rounded-md">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Blood Group"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">More Information</h2>
            <div className="space-y-4">
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Additional Contact Name"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Additional Mobile"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Additional Contact Designation"
              />
              <select className="w-full p-3 border rounded-md">
                <option>Select District</option>
                <option>District 1</option>
                <option>District 2</option>
              </select>
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Upazila/Thana"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Address"
              />
              <Input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Postcode"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Documents</h2>
            <div className="space-y-4">
              <div className="border border-dashed p-6 rounded-md text-center">
                <p>PP Size Photo (JPG, PNG)</p>
                <Input
                  className="mt-4"
                  type="file"
                  accept="image/jpeg, image/png"
                />
              </div>
              <div className="border border-dashed p-6 rounded-md text-center">
                <p>National ID Card (JPG, PNG, PDF)</p>
                <Input
                  className="mt-4"
                  type="file"
                  accept="image/jpeg, image/png, application/pdf"
                />
              </div>
              <div className="border border-dashed p-6 rounded-md text-center">
                <p>Trade License (JPG, PNG, PDF)</p>
                <Input
                  className="mt-4"
                  type="file"
                  accept="image/jpeg, image/png, application/pdf"
                />
              </div>
              <div className="border border-dashed p-6 rounded-md text-center">
                <p>Signature (Must be 300px/300px and png)</p>
                <Input className="mt-4" type="file" accept="image/png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
