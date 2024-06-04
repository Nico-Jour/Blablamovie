import { Box, Typography } from "@mui/material";
import useFavoriteMovies from "../Hooks/useFavoriteMovies";

export default function FavoriteMovies() {
  // const refetch = new Array();
  const { favoriteMovies } = useFavoriteMovies();
  return (
    <Box m={3}>
      <Typography variant="h4" gutterBottom>
        My Favorite Films
      </Typography>
      {favoriteMovies?.map((movie) => (
        <>
          <Box>
            <img src={movie?.poster} />
          </Box>
          <Typography variant="h6" gutterBottom>
            {movie?.title}
          </Typography>
        </>
      ))}
    </Box>
  );
}
