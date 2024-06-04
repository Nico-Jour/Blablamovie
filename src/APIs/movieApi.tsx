import { QueryType } from "../types";
import axiosOmdb from "./omdbAxiosConfig";

export const getMovieList = async (queryType: QueryType, query: string) => {
  try {
    const response = await axiosOmdb.get(`/?${queryType}=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie list", error);
    throw error;
  }
};
