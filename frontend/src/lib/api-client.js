import axios from "axios";

// In the Next.js version, API requests use the same frontend origin
// (/api/...) and are proxied to the existing Express backend by next.config.mjs.
// This keeps the backend untouched and avoids browser localhost/CORS issues.
export const apiClient = axios.create({
  baseURL: "",
});
