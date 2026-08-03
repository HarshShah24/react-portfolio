export function cn(...inputs) {
  return inputs
    .filter(Boolean)
    .flatMap((input) => {
      if (typeof input === "string") {
        return input.split(/\s+/).filter(Boolean);
      }

      if (Array.isArray(input)) {
        return input.filter(Boolean);
      }

      return [];
    })
    .join(" ");
}
