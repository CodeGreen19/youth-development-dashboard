export type BranchesTableType = {
  id: string;
  name: string;
  mobile: string;
  district: string;
  insAge: string;
  noOfCom: string;
  picture: string;
  varified: boolean;
};

// Combined type for Branch
export type GetBranchInfoType = {
  id: string;
  password?: string | null;
  role: "USER" | "ADMIN";
  isVarified: boolean;
  branchInfo?: BranchInfo | null;
  personalInfo?: PersonalInfo | null;
  moreInfo?: MoreInfo | null;
  documents?: Document | null;
  createdAt: Date;
};

// Type for BranchInfo
export type BranchInfo = {
  id: string;
  branchName: string;
  branchMobile: string;
  branchEmail: string;
  instituteAge: string;
  noOfComputers: string;
  branchId: string;
};

// Type for PersonalInfo
export type PersonalInfo = {
  id: string;
  fullName: string;
  fathersName: string;
  mothersName: string;
  gender: string;
  bloodGroup: string;
  branchId: string;
};

// Type for MoreInfo
export type MoreInfo = {
  id: string;
  additionalMobile?: string | null;
  division: string;
  district: string;
  upazila: string;
  address: string;
  postcode?: string | null;
  branchId: string;
};

// Type for Document
export type Document = {
  id: string;
  ppSizePhoto: string;
  tradeLicense: string;
  nationalIDCard: string;
  signature: string;
  branchId: string;
};