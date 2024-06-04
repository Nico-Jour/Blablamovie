import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { MoviePreview } from "../types";

export default function MovieCard({ movie }: { movie: MoviePreview }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
        sx={{ cursor: "pointer" }}
      >
        <img src={movie.Poster} />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          {movie.Year} {movie.Title}
        </Typography>
      </Box>
    </Box>
  );
}
