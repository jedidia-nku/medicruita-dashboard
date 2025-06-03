import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://dashboard-83w2.onrender.com",
  headers: { "Content-Type": "application/json" }
});

export default apiRequest;