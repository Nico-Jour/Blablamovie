import { Box, Typography } from "@mui/material";
import { MoviePreview } from "../types";

export default function MovieCard({ movie }: { movie: MoviePreview }) {
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
