import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { patchMovieId } from "../APIs/MovieRaterApi/patchMovieId";
import { MoviePreview } from "../types";

export default function MovieCard({ movie }: { movie: MoviePreview }) {
  const navigate = useNavigate();
  const handleOnCLick = () => {
    patchMovieId(movie.imdbID);
  };

  return (
    <Box mb={3}>
      <Box display={"flex"}>
        <Box
          onClick={() => navigate(`/movie/${movie.imdbID}`)}
          display={"inline-flex"}
          sx={{ cursor: "pointer" }}
        >
          <img src={movie.Poster} />
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"} pl={2} m={"auto"}>
          <Button variant="outlined" onClick={handleOnCLick}>
            Vote!
          </Button>
        </Box>
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
