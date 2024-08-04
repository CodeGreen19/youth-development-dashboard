import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const setCookie = (token: string) => {
  cookies().set({
    name: "branch_token",
    value: token,
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });
};

export const hashedPassword = (password: string): string => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (
  password: string,
  hashedPass: string
): boolean => {
  return bcrypt.compareSync(password, hashedPass);
};

export const genToken = (id: string): string => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET!);
  return token;
};

export const jwtDecode = (token: string) => {
  const data = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string;
    iat: number;
  };

  return data;
};
