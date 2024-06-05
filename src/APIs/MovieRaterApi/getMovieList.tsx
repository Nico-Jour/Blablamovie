import axiosMovieRater from "./movieRaterAxiosConfig";

export const getFavoriteMovies = async (userId: string | undefined) => {
  try {
    if (!userId) {
      console.error("Error fetching favorite movies, userId not provided");
    } else {
      const response = await axiosMovieRater.get("/movie-list", {
        headers: {
          "user-id": userId,
        },
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching favorite movies", error);
    throw error;
  }
};
