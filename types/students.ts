type DocsType = {
  registrationCardUrl: string;
  profileUrl: string;
  studentId: string;
};
export type BranchStudentType = {
  id: string;
  isPaid: boolean;
  bloodGroup: string;
  gender: string;

  courseDuration: string;
  courseRange: string;
  courseTrade: string;
  dateOfBirth: string;
  fatherName: string;
  mediam: string;
  mobile: string;
  motherName: string;
  name: string;
  nationality: string;
  passedBoard: string;
  passedResult: string;
  passedRoll: string;
  passedType: "SSC" | "JSC";
  passedYear: string;
  religion: string;
  genRoll: string | null;
  genReg: string | null;
  genResult: string | null;
  email: string | null;
  branchId: string;
  docs: DocsType | null;
  createdAt: Date;
};