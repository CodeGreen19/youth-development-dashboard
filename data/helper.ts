export function generateOTP(length = 5) {
  const characters = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return Number(otp);
}

export function addMinutesToDate(num: number) {
  const newDate = new Date();
  newDate.setMinutes(newDate.getMinutes() + num);
  return newDate;
}

export const generateUniqueTransId = (): string => {
  let length = 16;
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
};
