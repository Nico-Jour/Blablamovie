import axiosMovieRater from "./movieRaterAxiosConfig";

export const getFavoriteMovies = async (userId: string) => {
  try {
    const response = await axiosMovieRater.get("/movie-list", {
      headers: {
        "user-id": userId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching favorite movies", error);
    throw error;
  }
};
