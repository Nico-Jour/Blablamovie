import axiosMovieRater from "./movieRaterAxiosConfig";

export const delMovie = async (movieId: string, userId: string) => {
  try {
    const response = await axiosMovieRater.delete(`/movie-list/${movieId}`, {
      headers: { "user-id": userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting favorite movie", error);
    throw error;
  }
};
