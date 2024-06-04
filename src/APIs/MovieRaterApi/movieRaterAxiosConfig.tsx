import axios, { AxiosInstance } from "axios";

const axiosMovieRater: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default axiosMovieRater;
