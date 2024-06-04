import axiosMovieRater from "./movieRaterAxiosConfig";

export const getBestMovie = async () => {
  try {
    const response = await axiosMovieRater.get("/movie-list/most-rated");
    return response.data;
  } catch (error) {
    console.error("Error fetching best movie", error);
    throw error;
  }
};
