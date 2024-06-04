import axiosMovieRater from "./movieRaterAxiosConfig";

export const postLogin = async (pseudo: string) => {
  try {
    const response = await axiosMovieRater.post("/user/login", { pseudo });
    return response.data;
  } catch (error) {
    console.error("Error logging", error);
    throw error;
  }
};
