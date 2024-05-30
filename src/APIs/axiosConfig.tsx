import axios, { AxiosInstance } from "axios";

const OMDB_API_KEY = "d0bc224b"; // à fetch depuis le back

const axiosOmdb: AxiosInstance = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
  params: { apikey: OMDB_API_KEY },
});

export default axiosOmdb;
