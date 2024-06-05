import axiosMovieRater from "./movieRaterAxiosConfig";

export const patchMovieId = async (
  userId: string | undefined,
  movieId: string,
  refetchFavorite: () => void
) => {
  try {
    if (!userId) {
      console.error("missing userId, please sign in");
    } else {
      const response = await axiosMovieRater.patch(
        `/movie-list/${movieId}`,
        {},
        {
          headers: {
            "user-id": userId,
          },
        }
      );
      if (response.data.modifiedCount === 1) refetchFavorite();
      return response.data;
    }
  } catch (error) {
    console.error("Error saving favorite movie", error);
    throw error;
  }
};
