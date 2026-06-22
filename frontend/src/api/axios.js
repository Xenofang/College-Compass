
import axios from "axios";

const API = axios.create({
  baseURL: "https://college-compass-mwc9.onrender.com",
});

export default API;