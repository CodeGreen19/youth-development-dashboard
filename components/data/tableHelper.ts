import { BranchStudentType } from "@/types/students";

export type StudentPaidType = {
  id: string;
  name: string;
  genRoll: string | undefined;
  genReg: string | undefined;
  mobile: string;
  trade: string;
  session: string;
  isPaid: boolean;
  result: string;
  picture: string | undefined;
  studentInfo: BranchStudentType[];
};

export const consizeDataPaid = (
  data: BranchStudentType[]
): StudentPaidType[] => {
  let students: StudentPaidType[] = data.map((item) => {
    return {
      id: item.id,
      mobile: item.mobile,
      name: item.name,
      picture: item.docs?.profileUrl,
      registration: item.docs?.registrationCardUrl,
      result: item.genResult ?? "",
      session: item.courseRange,
      trade: item.courseTrade,
      genReg: item.genReg!,
      genRoll: item.genRoll!,
      isPaid: item.isPaid,
      studentInfo: data,
    };
  });

  let filteredStudent = students.filter((item, i) => item.isPaid === true);
  students = filteredStudent;
  return students;
};
