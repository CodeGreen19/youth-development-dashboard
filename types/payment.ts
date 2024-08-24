export type PaymentHistoryType = {
  id: string;
  name: string;
  roll: string;
  courseDuration: string;
  courseTrade: string;
  phoneNo: string;
  amount: string;
  status: string;
  branchId: string;
  createdAt: Date;
};

export type TransInfoType = {
  name: string;
  trade: string;
  amount: string;
};
export type LastFiveStudentType = {
  isPaid: boolean;
  name: string;
  gender: string;
};
export type BranchMaleFemaleType = {
  gender: string;
  count: number;
  total: number;
  text: string;
};
