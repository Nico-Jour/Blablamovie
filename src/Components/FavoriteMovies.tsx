import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { delMovie } from "../APIs/MovieRaterApi/delMovie";
import { UserContext } from "../App";
import { MovieSimple } from "../types";

export default function FavoriteMovies({
  favoriteMovies,
  refetch,
}: {
  favoriteMovies: (MovieSimple | null)[];
  refetch: () => void;
}) {
  const { user } = useContext(UserContext);

  const handleOnCLick = (id: string) => {
    if (id && user) delMovie(id, user._id, refetch);
  };

  return (
    <Box m={3} flex={1}>
      <Typography variant="h5" gutterBottom>
        My Favorite Films
      </Typography>
      {user?._id ? (
        favoriteMovies?.map((movie) => (
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
        ))
      ) : (
        <Typography variant="body1">
          Please sign in to see your favorite movies
        </Typography>
      )}
    </Box>
  );
}
