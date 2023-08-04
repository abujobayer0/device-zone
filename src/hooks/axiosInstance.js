import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://device-zone.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
