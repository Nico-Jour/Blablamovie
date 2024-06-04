import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { MoviePreview } from "../types";

export default function MovieCard({ movie }: { movie: MoviePreview }) {
  const navigate = useNavigate();
  return (
    <Box mb={3}>
      <Box
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
        sx={{ cursor: "pointer" }}
      >
        <img src={movie.Poster} />
      </Box>
      <Box display={"flex"}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
          {movie.Year}
        </Typography>
        <Typography variant="h6" gutterBottom>
          , {movie.Title}
        </Typography>
      </Box>
    </Box>
  );
}
