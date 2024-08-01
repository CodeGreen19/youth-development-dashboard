import { Documents } from "@/Schema/branchSchema";

type Base64File = string | null;

export const convertFileToBase64 = (file: File | null): Promise<Base64File> => {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as Base64File);
      reader.onerror = (error) => reject(error);
    } else {
      resolve(null);
    }
  });
};
export const decodeBase64File = (base64: Base64File): Blob | null => {
  if (!base64) return null;

  const byteString = atob(base64.split(",")[1]);
  const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

export const convertFileToBase64Func = async (documents: Documents) => {
  return {
    ppSizePhoto: await convertFileToBase64(documents.ppSizePhoto),
    tradeLicense: await convertFileToBase64(documents.tradeLicense),
    nationalIDCard: await convertFileToBase64(documents.nationalIDCard),
    signature: await convertFileToBase64(documents.signature),
  };
};
