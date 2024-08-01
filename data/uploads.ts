import path from "path";
import fs from "fs";
import { v4 } from "uuid";

export const uploadBranchFile = async (file: File) => {
  const uploadDir = path.join(process.cwd(), "public/uploads/branch");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  let uu_id = v4();
  let fileExtention = `${uu_id}.${file.name.split(".").pop()}`;
  let filePath = path.join(uploadDir, fileExtention);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);
  let url = `/uploads/branch/${fileExtention}`;
  return { url };
};
