import { Box } from "@mui/material";
import Loading from "../Components/Loading";
import MovieCard from "../Components/MovieCard";
import useMovieList from "../Hooks/useMovieList";

export default function Rate() {
  const { movies, loading, error } = useMovieList();
  console.log("movies", movies);
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        movies.Search.map((movie) => <MovieCard movie={movie} />)
      )}
    </Box>
  );
}
