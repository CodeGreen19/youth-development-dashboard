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
