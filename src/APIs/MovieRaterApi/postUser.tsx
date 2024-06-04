import { NewUser } from "../../types";
import axiosMovieRater from "./movieRaterAxiosConfig";

export const createUser = async (newUser: NewUser) => {
  try {
    const response = await axiosMovieRater.post("/user", newUser);
    return response.data;
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
};
