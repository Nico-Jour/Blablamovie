import { Box, Container } from "@mui/material";

export default function RateLayout({ children }: { children: JSX.Element[] }) {
  return (
    <Container maxWidth="lg">
      <Box>{children[0]}</Box>
      <Box>{children[1]}</Box>
    </Container>
  );
}
