import axiosOmdb from "./omdbAxiosConfig";

export const getMovieList = async () => {
  try {
    const response = await axiosOmdb.get("/?s=love");
    return response.data;
  } catch (error) {
    console.error("Error fetching movie list", error);
    throw error;
  }
};
