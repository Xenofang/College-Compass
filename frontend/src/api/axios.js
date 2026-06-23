import axios from "axios";

const API = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://college-compass-mwc9.onrender.com",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// ── Auth ─────────────────────────────
export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const getProfile = () =>
  API.get("/user/profile");

// ── Colleges ─────────────────────────
export const getColleges = () =>
  API.get("/colleges");

export const getCollegeById = (id) =>
  API.get(`/colleges/${id}`);

export default API;