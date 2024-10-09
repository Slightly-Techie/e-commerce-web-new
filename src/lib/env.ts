const API_URL = assertValue(
  import.meta.env.VITE_API_URL,
  "REACT_APP_API_URL is not defined",
);

export { API_URL };

export function assertValue(
  value: string | undefined | null,
  message: string,
): string {
  if (value === undefined || value === null) {
    throw new Error(message);
  }
  return value;
}
