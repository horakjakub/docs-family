export default function delay(ms?: number) {
  if (ms) ms = Math.random() * 500;
  return new Promise((resolve) => setTimeout(resolve, ms));
}
type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
  headers?: Record<string, string>;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLocal = async (
  endpoint: string,
  { method = "GET", body, headers = {}, ...customOptions }: FetchOptions = {}
): Promise<any> => {
  const token = undefined;
  // localStorage.getItem('authToken');

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    ...customOptions,
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status} - ${res.statusText}`);
  }

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await res.json(); // Parse as JSON
  } else {
    return await res.text(); // Return as plain text
  }
};
