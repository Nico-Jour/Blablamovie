import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import CountDown from "../Components/CountDown";
import ProvisoryBestMovie from "../Components/ProvisoryBestMovie";

export default function HomeLayout() {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        BlaBlaMovie
      </Typography>
      <Typography variant="h2" gutterBottom>
        Welcome to the world's most popular contest to discover the best movie
        of the year.
      </Typography>
      <CountDown />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="6"
        sx={{ py: 10 }}
      >
        <ProvisoryBestMovie />
        <Button variant="contained" onClick={() => navigate("/rate")}>
          Vote for your favorite movies
        </Button>
      </Box>
    </Container>
  );
}
