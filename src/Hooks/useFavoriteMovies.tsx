import { useContext, useEffect, useState } from "react";
import { getFavoriteMovies } from "../APIs/MovieRaterApi/getMovieList";
import { UserContext } from "../App";
import { MovieSimple } from "../types";

export default function useFavoriteMovies() {
  const { user } = useContext(UserContext);
  const [favoriteMovies, setFavoriteMovies] = useState<(MovieSimple | null)[]>(
    []
  );
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFavoriteMovies = async () => {
    try {
      const movieData = await getFavoriteMovies(user?._id);
      setFavoriteMovies(movieData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavoriteMovies();
  }, [user]);

  return { favoriteMovies, loading, error, refetch: fetchFavoriteMovies };
}
