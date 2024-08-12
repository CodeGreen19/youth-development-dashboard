export function extractErrors(obj: any): string[] {
  let errors: any[] = [];

  function recurse(value: any) {
    if (Array.isArray(value)) {
      value.forEach((v) => recurse(v));
    } else if (typeof value === "object" && value !== null) {
      for (const key in value) {
        if (key === "_errors") {
          errors = errors.concat(value[key]);
        } else {
          recurse(value[key]);
        }
      }
    }
  }

  recurse(obj);
  return errors;
}

export const isImage = (url: string) => {
  return /\.(jpg|jpeg|png|gif)$/.test(url);
};

export const estimateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const numWords = text.trim().split(/\s+/).length;
  const minutes = numWords / wordsPerMinute;
  return Math.ceil(minutes);
};
