import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { delMovie } from "../APIs/MovieRaterApi/delMovie";
import { UserContext } from "../App";
import useFavoriteMovies from "../Hooks/useFavoriteMovies";

export default function FavoriteMovies() {
  // const refetch = new Array();
  const { favoriteMovies } = useFavoriteMovies();
  const { user } = useContext(UserContext);

  const handleOnCLick = (id: string) => {
    console.log("id", id, user);
    if (id && user) delMovie(id, user._id);
  };

  return (
    <Box m={3} flex={1}>
      <Typography variant="h5" gutterBottom>
        My Favorite Films
      </Typography>
      {favoriteMovies?.map((movie) => (
        <Box mb={3}>
          <Box display={"flex"}>
            <Box>
              <img src={movie?.poster} />
            </Box>
            <Box display={"flex"} alignItems={"center"} pl={3}>
              <Button
                variant="outlined"
                onClick={() => handleOnCLick(movie!.imdbId!)}
              >
                Remove
              </Button>
            </Box>
          </Box>
          <Typography variant="h6" gutterBottom>
            {movie?.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
