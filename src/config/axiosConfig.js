import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true,
});
