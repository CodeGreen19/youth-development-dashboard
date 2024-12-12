import { create } from "zustand";

interface FilterInfo {
  isAllSalaryAccepted: boolean;
  setIsAllSalaryAccepted: (info: boolean) => void;
  employeeName: string;
  setEmployeeName: (info: string) => void;
  employeePosition: string;
  setEmployeePosition: (info: string) => void;
  isEmployeeActive: boolean;
  setIsEmployeeActive: (info: boolean) => void;
}

const useEssentialsHooks = create<FilterInfo>((set) => ({
  isAllSalaryAccepted: true,
  setIsAllSalaryAccepted: (status) => set({ isAllSalaryAccepted: status }),
  employeeName: "",
  setEmployeeName: (info) => set({ employeeName: info }),
  employeePosition: "",
  setEmployeePosition: (info) => set({ employeeName: info }),
  isEmployeeActive: true,
  setIsEmployeeActive: (info) => set({ isEmployeeActive: info }),
}));

export default useEssentialsHooks;
