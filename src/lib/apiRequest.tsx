import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://wallmap.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

export default apiRequest;