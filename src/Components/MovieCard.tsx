import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { patchMovieId } from "../APIs/MovieRaterApi/patchMovieId";
import { UserContext } from "../App";
import { MoviePreview } from "../types";

export default function MovieCard({ movie }: { movie: MoviePreview }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const handleOnCLick = () => {
    patchMovieId(user._id, movie.imdbID);
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
        <Box display={"flex"} alignItems={"center"} pl={3}>
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
