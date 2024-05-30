import { Box, Typography } from "@mui/material";
import { Movie } from "../types";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Box>
      <img src={movie.Poster} />
      <Typography variant="h6" gutterBottom>
        {movie.Title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {movie.Title}
      </Typography>
    </Box>
  );
}
