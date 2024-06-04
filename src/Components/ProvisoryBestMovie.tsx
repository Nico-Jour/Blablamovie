import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import useBestMovie from "../Hooks/useBestMovie";

export default function ProvisoryBestMovie() {
  const [showProvisoryBest, setShowProvisoryBest] = useState(false);
  const { movie: bestMovie } = useBestMovie();
  console.log(bestMovie);
  return (
    <>
      {showProvisoryBest && bestMovie ? (
        <Box>
          <img src={bestMovie.poster} />
          <Typography variant="h6" gutterBottom>
            {bestMovie.title}
          </Typography>
        </Box>
      ) : (
        <Button onClick={() => setShowProvisoryBest(true)} variant="outlined">
          See the provisory best movie
        </Button>
      )}
    </>
  );
}
