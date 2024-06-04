import {
  Box,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FavoriteMovies from "../Components/FavoriteMovies";
import Loading from "../Components/Loading";
import MovieCard from "../Components/MovieCard";
import useMovieList from "../Hooks/useMovieList";

export default function Rate() {
  const [search, setSearch] = useState("love");
  const { movies, loading, error } = useMovieList(search);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearch(event.currentTarget.value);
    }
  };

  return (
    <Container sx={{ display: "flex" }}>
      <Box>
        <Box pb={3} mb={3} sx={{ borderBottom: "1px solid lightblue" }}>
          <FormControl defaultValue={""} required>
            <InputLabel>Search</InputLabel>
            <Input
              id="search"
              onKeyDown={handleKeyDown}
              placeholder="Search by title here"
            />
          </FormControl>
        </Box>
        <Box>
          <Box>
            {loading ? (
              <Loading />
            ) : error ? (
              <Typography>{error?.Error}</Typography>
            ) : (
              movies?.Search.map((movie) => <MovieCard movie={movie} />)
            )}
          </Box>
        </Box>
      </Box>
      <FavoriteMovies />
    </Container>
  );
}
