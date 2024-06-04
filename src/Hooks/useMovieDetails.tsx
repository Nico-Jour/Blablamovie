import { useEffect, useState } from "react";
import { getMovieList } from "../APIs/movieApi";
import { Movie } from "../types";

const useMovieDetails = (id: string) => {
  console.log("id", id);
  const [movie, setMovie] = useState<Movie | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    if (!id) {
      setError({
        name: "id missing",
        message: "provide a valid id to display movieDetails",
      });
    } else {
      fetchMovies();
    }
  }, [id]);

  const fetchMovies = async () => {
    try {
      const movieData = await getMovieList("i", id);
      setMovie(movieData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { movie, loading, error };
};

export default useMovieDetails;
