import { useEffect, useState } from "react";
import { getMovieList } from "../APIs/movieApi";
import { MovieSearch } from "../types";

const useMovieList = (query: string) => {
  const [movies, setMovies] = useState<MovieSearch | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error | OmdbError>(null);

  useEffect(() => {
    fetchMovies();
  }, [query]);

  const fetchMovies = async () => {
    try {
      const movieData = await getMovieList("s", query);
      if (movieData.Response === "True") {
        setMovies(movieData);
        setError(null);
      } else {
        setError(movieData);
        setMovies(null);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error };
};

export default useMovieList;
