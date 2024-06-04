import { useEffect, useState } from "react";
import { getMovieList } from "../APIs/movieApi";
import { MovieSearch } from "../types";

const useMovieList = () => {
  const [movies, setMovies] = useState<MovieSearch | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movieData = await getMovieList();
      setMovies(movieData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error };
};

export default useMovieList;
