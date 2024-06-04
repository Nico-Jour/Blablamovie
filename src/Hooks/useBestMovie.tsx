import { useEffect, useState } from "react";
import { getBestMovie } from "../APIs/MovieRaterApi/getBestMovie";
import { MovieSimple } from "../types";

const useBestMovie = () => {
  const [movie, setMovies] = useState<MovieSimple | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    fetchBestMovies();
  }, []);

  const fetchBestMovies = async () => {
    try {
      const movieData = await getBestMovie();
      setMovies(movieData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { movie, loading, error };
};

export default useBestMovie;
