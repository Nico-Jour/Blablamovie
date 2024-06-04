import axiosMovieRater from "./movieRaterAxiosConfig";

export const patchMovieId = async (userId: string, movieId: string) => {
  try {
    const response = await axiosMovieRater.patch(
      `/movie-list/${movieId}`,
      {},
      {
        headers: {
          "user-id": userId,
        },
      }
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving favorite movie", error);
    throw error;
  }
};
