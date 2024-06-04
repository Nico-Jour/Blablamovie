import { Box, Button, Container, Typography } from "@mui/material";
import CountDown from "../Components/CountDown";

export default function HomeLayout() {
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
        <Button variant="outlined">See the provisory best movie</Button>
        <Button variant="contained">Vote for your favorites</Button>
      </Box>
    </Container>
  );
}
