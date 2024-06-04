import axiosMovieRater from "./movieRaterAxiosConfig";

export const patchMovieId = async (movieId: string) => {
  try {
    const response = await axiosMovieRater.patch(`/movie-list/${movieId}`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving favorite movie", error);
    throw error;
  }
};
